#!/bin/sh
set -eu
dist_dir=${1:?Usage: publish.sh DIST_DIR RELEASE_ID SITE_CONFIG}
release_id=${2:?Missing release ID}
site_config=${3:?Missing site config}
case "$release_id" in *[!a-zA-Z0-9_-]*|'') echo 'Invalid release ID' >&2; exit 1;; esac
test -s "$dist_dir/index.html"
cd "$HOME/wiki/deploy/oci"
container_id=$(docker compose ps -q caddy)
test -n "$container_id"
docker exec "$container_id" mkdir -p /data/sites /data/portfolio/assets "/data/portfolio/releases/$release_id"
docker cp "$dist_dir/." "$container_id:/data/portfolio/releases/$release_id/"
docker cp "$dist_dir/assets/." "$container_id:/data/portfolio/assets/"
previous=$(docker exec "$container_id" sh -c 'readlink /data/portfolio/current || true')
docker exec "$container_id" sh -c 'if [ -f /data/sites/portfolio.caddy ]; then cp /data/sites/portfolio.caddy "/data/portfolio/config-before-$1"; fi' sh "$release_id"
docker cp "$site_config" "$container_id:/data/sites/portfolio.caddy"
docker cp Caddyfile "$container_id:/tmp/personal-base-Caddyfile"
restore_config() {
    docker exec "$container_id" sh -c 'if [ -f "/data/portfolio/config-before-$1" ]; then cp "/data/portfolio/config-before-$1" /data/sites/portfolio.caddy; else rm -f /data/sites/portfolio.caddy; fi' sh "$release_id"
}
if ! docker exec "$container_id" caddy validate --config /tmp/personal-base-Caddyfile --adapter caddyfile; then
    restore_config
    exit 1
fi
docker exec "$container_id" sh -c 'ln -s "releases/$1" /data/portfolio/next; mv -Tf /data/portfolio/next /data/portfolio/current' sh "$release_id"
if ! docker exec "$container_id" caddy reload --config /tmp/personal-base-Caddyfile --adapter caddyfile; then
    restore_config
    if [ -n "$previous" ]; then
        docker exec "$container_id" sh -c 'ln -s "$1" /data/portfolio/rollback; mv -Tf /data/portfolio/rollback /data/portfolio/current' sh "$previous"
    fi
    exit 1
fi
printf 'Published personal website release %s\n' "$release_id"
