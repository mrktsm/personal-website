# Production hosting

The website is served by the existing OVH server's Caddy container. Porkbun DNS points the apex domain to the server and aliases `www` to the apex. Caddy obtains and renews public HTTPS certificates for both domains.

Pushes to `main`, or a manual run of **Deploy personal website**, build and publish the site without restarting the WikiRacing backend. GitHub Actions requires the `VPS_SSH_KEY` secret and the `VPS_HOST`, `VPS_USER`, and `VPS_SSH_HOST_KEY` repository variables. The host key pins the SSH server identity.

The server's `~/wiki/deploy/oci/Caddyfile` imports `/data/sites/*.caddy`. This repository owns `/data/sites/portfolio.caddy`; the files and releases live in the persistent Caddy data volume under `/data/portfolio`. Publishing validates the complete configuration, retains hashed assets for open browser tabs, and atomically changes the `current` symlink before a graceful reload. If validation or reload fails, the previous configuration is restored.

For a manual deployment, upload the built `dist/` directory and run:

```sh
sh ~/portfolio/deploy/publish.sh DIST_DIRECTORY UNIQUE_RELEASE_ID CADDYFILE
```

`deploy/Caddyfile` preserves the résumé PDF's inline disposition, `/battle/` directory assets, and the four `/v/` video redirects. Vercel Analytics was removed because its ingestion endpoint is unavailable on this hosting setup.
