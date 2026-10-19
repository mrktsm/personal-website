(() => {
  // src/questions.mjs
  var questions = [
    {
      topic: "Choosing a dependency",
      prompt: "Your price calculator is fast and predictable. What should the test use?",
      answers: ["A hardcoded total", "The real implementation", "A mock for every method", "A random response"],
      correct: 1,
      moves: ["Air Slash", "Flamethrower", "Dragon Claw", "Earthquake"],
      explanation: "Prefer the real implementation when it is fast, deterministic and simple to construct."
    },
    {
      topic: "Working behavior",
      prompt: "Save an order, then retrieve it\u2014without the production database. What fits?",
      answers: ["Always return true from save()", "Only count save() calls", "An in-memory order-store fake", "Skip the retrieval check"],
      correct: 2,
      moves: ["Hurricane", "Dragon Pulse", "Thunder Punch", "Fire Blast"],
      explanation: "A fake supplies working save-and-retrieve behavior, including the relevant state."
    },
    {
      topic: "Controlling a response",
      prompt: "Checkout must show an error when payment is declined. How do you reach that path?",
      answers: ["Stub the response to Declined", "Always approve the payment", "Make a live payment", "Use a random payment result"],
      correct: 0,
      moves: ["Solar Beam", "Heat Wave", "Focus Blast", "Outrage"],
      explanation: "A configured response lets this test exercise error handling. Always approving would miss that path."
    },
    {
      topic: "Checking the outcome",
      prompt: "save(order) was called. What stronger check can a working store support?",
      answers: ["Count log messages", "Check every private helper", "Assume the call succeeded", "Retrieve the order and check it"],
      correct: 3,
      moves: ["Hyper Beam", "Draco Meteor", "Shadow Claw", "Blast Burn"],
      explanation: "Checking stored state proves the relevant result, while allowing internal steps to change."
    },
    {
      topic: "When the call matters",
      prompt: "Request exactly one confirmation email to the right person, without sending mail. What do you verify?",
      answers: ["Only the order total", "The sender\u2019s call count and recipient", "That the sender returned true", "A real email inbox"],
      correct: 1,
      moves: ["Giga Impact", "Overheat", "Brave Bird", "Flare Blitz"],
      explanation: "Interaction testing fits when the call itself matters, such as avoiding duplicate email requests."
    }
  ];
  var counters = ["Shadow Ball", "Sludge Bomb", "Thunderbolt", "Dark Pulse", "Psychic"];

  // src/game-state.mjs
  var TIME_LIMIT_MS = 3e5;
  function createGame(totalQuestions = 5) {
    return { phase: "ready", index: 0, totalQuestions, playerHP: 100, enemyHP: 100, score: 0, answers: [], remainingMs: TIME_LIMIT_MS, paused: false };
  }
  function start(state2) {
    if (state2.phase === "ready") state2.phase = "question";
    return state2;
  }
  function answer(state2, choice, question) {
    if (state2.phase !== "question" || state2.paused || !Number.isInteger(choice) || choice < 0 || choice >= question.answers.length) return null;
    const correct = choice === question.correct;
    state2.score += Number(correct);
    if (correct) state2.enemyHP = Math.max(0, state2.enemyHP - 25);
    else state2.playerHP = Math.max(0, state2.playerHP - 20);
    const result = { index: state2.index, choice, correct, playerHP: state2.playerHP, enemyHP: state2.enemyHP };
    state2.answers.push(result);
    state2.phase = "feedback";
    return result;
  }
  function outcome(state2) {
    return state2.enemyHP === 0 ? "win" : state2.playerHP === 0 || state2.answers.length >= state2.totalQuestions || state2.remainingMs === 0 ? "loss" : null;
  }
  function next(state2) {
    if (state2.phase !== "feedback" || state2.paused) return state2;
    if (outcome(state2)) state2.phase = "finished";
    else {
      state2.index++;
      state2.phase = "question";
    }
    return state2;
  }
  function tick(state2, elapsed) {
    if (state2.paused || !["question", "feedback"].includes(state2.phase)) return state2;
    state2.remainingMs = Math.max(0, state2.remainingMs - Math.max(0, elapsed));
    if (!state2.remainingMs) state2.phase = "finished";
    return state2;
  }

  // src/app.mjs
  var $id = (id) => document.getElementById(id);
  var controls = $id("controls");
  var state = createGame(questions.length);
  var battle;
  var serial = 0;
  var busy = true;
  var pending = null;
  var chain = Promise.resolve();
  var finishing = false;
  var misses = 0;
  var sound = true;
  var unlocked = false;
  try {
    sound = localStorage.getItem("tdb-sound") !== "off";
  } catch {
  }
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.Storage.prefs = (name) => name === "noanim" || name === "nogif" ? reduced : void 0;
  var esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  var moveType = (name) => window.BattleMovedex[name.toLowerCase().replace(/[^a-z0-9]/g, "")]?.type || "Normal";
  var clock = (ms) => {
    const s = Math.ceil(ms / 1e3);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  };
  function timer() {
    const secs = Math.ceil(state.remainingMs / 1e3);
    return `<button id="timer" class="button timerbutton ${secs <= 30 ? "timerbutton-critical" : "timerbutton-on"}" role="timer" tabindex="-1">Timer ${clock(state.remainingMs)}</button>`;
  }
  function applySound() {
    window.BattleSound.setMute(!(sound && unlocked));
    $id("sound").textContent = sound ? "Sound on" : "Sound off";
    $id("sound").setAttribute("aria-pressed", String(sound));
  }
  function render() {
    $id("pause").disabled = ["ready", "finished"].includes(state.phase) || finishing;
    $id("pause").textContent = state.paused ? "Resume" : "Pause";
    $id("paused-overlay").hidden = !state.paused;
    if (state.phase === "ready") {
      controls.innerHTML = `<div class="whatdo">Prof. Ivaylo challenges the class with Gengar. Answer correctly and Charizard\u2019s attack lands. Answer wrong and it misses, then Gengar strikes back.</div><p class="whatdo"><small>${questions.length} questions</small> <small>4 correct to win</small> <small>${clock(state.remainingMs)} on the clock</small></p><button class="button big" id="start" ${busy ? "disabled" : ""}><strong>${busy ? "Loading\u2026" : "Start battle"}</strong></button><p class="whatdo">Presenter: keys 1\u20134 answer, Enter continues.</p>`;
      $id("start").onclick = begin;
      return;
    }
    if (state.phase === "finished") {
      const won = outcome(state) === "win";
      controls.innerHTML = `<div class="whatdo">${state.remainingMs === 0 ? "Time\u2019s up!" : won ? "Gengar fainted. Class wins!" : "Prof. Ivaylo wins this one."}</div><div class="score">${state.score}<small> / ${state.answers.length} correct</small></div><button id="again" class="button big" ${finishing ? "disabled" : ""}><strong>${finishing ? "Finishing\u2026" : "Rematch"}</strong></button>`;
      $id("again").onclick = reset;
      return;
    }
    const q = questions[state.index], result = state.answers[state.index];
    const buttons = q.answers.map((a, i) => {
      const mark = result ? i === q.correct ? " correct" : i === result.choice ? " picked" : "" : "";
      return `<button class="movebutton type-${moveType(q.moves[i])}${mark}" data-choice="${i}" ${result || busy || state.paused ? "disabled" : ""}><span class="answer">${esc(a)}</span><small class="type">${esc(q.moves[i])}</small><small class="pp">${i + 1}</small>&nbsp;</button>`;
    }).join("");
    const prompt = result ? result.correct ? `<strong>Correct!</strong> ${esc(q.explanation)}` : `<strong>Not quite.</strong> ${esc(q.explanation)}` : esc(q.prompt);
    const action = result ? `<button class="button nextbutton" id="next" ${busy || state.paused ? "disabled" : ""}><strong>${busy ? "Attacking\u2026" : outcome(state) ? "See the result" : "Next question"} \u203A</strong></button>` : "";
    controls.innerHTML = `${timer()}${action}<div class="whatdo"><small>Q${state.index + 1}/${questions.length}</small> ${esc(q.topic)}</div><p class="question">${prompt}</p><div class="movecontrols"><div class="movemenu">${buttons}</div></div>`;
    controls.querySelectorAll("[data-choice]").forEach((b) => b.onclick = () => choose(Number(b.dataset.choice)));
    if ($id("next")) $id("next").onclick = advance;
  }
  function script(lines) {
    const token = serial;
    chain = chain.then(() => new Promise((resolve, reject) => {
      if (token !== serial) {
        resolve();
        return;
      }
      const timeout = setTimeout(() => {
        if (pending?.resolve === done) {
          pending = null;
          reject(Error("The battle animation took too long. Restart to try again."));
        }
      }, 2e4);
      function done() {
        clearTimeout(timeout);
        resolve();
      }
      pending = { resolve: done, reject: (error) => {
        clearTimeout(timeout);
        reject(error);
      } };
      try {
        battle.addBatch(lines);
        if (battle.atQueueEnd) {
          pending = null;
          done();
        }
      } catch (error) {
        pending = null;
        clearTimeout(timeout);
        reject(error);
      }
    }));
    return chain;
  }
  var questionCard = (i) => `|raw|<div class="infobox question-card"><strong>Q${i + 1} \xB7 ${esc(questions[i].topic)}</strong><br />${esc(questions[i].prompt)}</div>`;
  async function begin() {
    if (busy || state.phase !== "ready") return;
    unlocked = true;
    applySound();
    start(state);
    busy = true;
    render();
    const token = serial;
    try {
      await script(["|start", "|switch|p1a: Charizard|Charizard, L50, M|100/100", "|switch|p2a: Gengar|Gengar, L50, M|100/100", "|turn|1", questionCard(0)]);
      if (token !== serial) return;
      busy = false;
      render();
      controls.querySelector("[data-choice]")?.focus({ preventScroll: true });
    } catch (error) {
      if (token === serial) fail(error);
    }
  }
  async function choose(choice) {
    if (busy || finishing) return;
    const q = questions[state.index], result = answer(state, choice, q);
    if (!result) return;
    busy = true;
    const token = serial;
    render();
    const move = q.moves[choice];
    const lines = result.correct ? [
      `|move|p1a: Charizard|${move}|p2a: Gengar`,
      "|-supereffective|p2a: Gengar",
      `|-damage|p2a: Gengar|${state.enemyHP}/100`,
      `|raw|<div class="infobox verdict-good"><strong>Correct: ${esc(q.answers[choice])}</strong><br />${esc(q.explanation)}</div>`
    ] : [
      `|move|p1a: Charizard|${move}|p2a: Gengar|[miss]`,
      "|-miss|p1a: Charizard|p2a: Gengar",
      `|move|p2a: Gengar|${counters[misses++ % counters.length]}|p1a: Charizard`,
      `|-damage|p1a: Charizard|${state.playerHP}/100`,
      `|raw|<div class="infobox verdict-bad"><strong>Answer: ${esc(q.answers[q.correct])}</strong><br />${esc(q.explanation)}</div>`
    ];
    try {
      await script(lines);
      if (token !== serial) return;
      busy = false;
      render();
      $id("next")?.focus({ preventScroll: true });
    } catch (error) {
      if (token === serial) fail(error);
    }
  }
  async function advance() {
    if (busy || state.paused) return;
    next(state);
    if (state.phase === "finished") {
      await finish();
      return;
    }
    busy = true;
    render();
    const token = serial;
    try {
      await script([`|turn|${state.index + 1}`, questionCard(state.index)]);
      if (token !== serial) return;
      busy = false;
      render();
      controls.querySelector("[data-choice]")?.focus({ preventScroll: true });
    } catch (error) {
      if (token === serial) fail(error);
    }
  }
  async function finish() {
    if (finishing) return;
    finishing = true;
    busy = true;
    const token = serial;
    render();
    try {
      await script(outcome(state) === "win" ? ["|faint|p2a: Gengar", "|win|Class"] : state.playerHP === 0 ? ["|faint|p1a: Charizard", "|win|Prof. Ivaylo"] : ["|win|Prof. Ivaylo"]);
      if (token !== serial) return;
      finishing = false;
      busy = false;
      render();
      $id("again")?.focus({ preventScroll: true });
    } catch (error) {
      if (token === serial) fail(error);
    }
  }
  function fail(error) {
    console.error(error);
    busy = true;
    state.paused = false;
    render();
    controls.innerHTML = `<div class="whatdo">The battle hit a snag: ${esc(error.message || "it could not load.")}</div><button id="retry" class="button big"><strong>Restart battle</strong></button>`;
    $id("retry").onclick = reset;
  }
  async function reset() {
    serial++;
    const token = serial;
    pending?.resolve();
    pending = null;
    chain = Promise.resolve();
    battle?.destroy();
    $id("battle").replaceChildren();
    $id("battle-log").replaceChildren();
    state = createGame(questions.length);
    busy = true;
    finishing = false;
    misses = 0;
    try {
      battle = new window.ShowdownBattle({ $frame: window.jQuery("#battle"), $logFrame: window.jQuery("#battle-log"), id: "battle-classroom-10", paused: false, isReplay: false, autoresize: false });
      applySound();
      battle.subscribe((event) => {
        if (token !== serial) return;
        if (event === "atqueueend") {
          const p = pending;
          pending = null;
          p?.resolve();
        }
        if (event === "error") {
          const p = pending;
          pending = null;
          p?.reject(Error("The battle renderer encountered an error."));
        }
      });
      render();
      await script(["|init|battle", "|title|Class vs. Prof. Ivaylo", "|gen|9", "|gametype|singles", "|player|p1|Class|red", "|player|p2|Prof. Ivaylo|sycamore", "|teamsize|p1|1", "|teamsize|p2|1", "|poke|p1|Charizard, L50, M|", "|poke|p2|Gengar, L50, M|"]);
      if (token !== serial) return;
      busy = false;
      render();
      resize();
    } catch (error) {
      if (token === serial) fail(error);
    }
  }
  function resize() {
    const room = $id("room"), log = room.clientWidth > 900 ? Math.max(300, room.clientWidth * 0.26) : 0;
    const scale = Math.max(0.5, Math.min((room.clientWidth - log) / 640, (room.clientHeight - 250) / 360));
    room.style.setProperty("--scale", scale.toFixed(3));
  }
  new ResizeObserver(resize).observe($id("room"));
  $id("restart").onclick = reset;
  $id("pause").onclick = () => {
    if (["ready", "finished"].includes(state.phase)) return;
    state.paused = !state.paused;
    render();
  };
  $id("sound").onclick = () => {
    sound = !sound;
    try {
      localStorage.setItem("tdb-sound", sound ? "on" : "off");
    } catch {
    }
    applySound();
  };
  document.addEventListener("keydown", (e) => {
    if (e.repeat || e.altKey || e.ctrlKey || e.metaKey || ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
    if (state.phase === "question" && /^[1-4]$/.test(e.key)) {
      e.preventDefault();
      choose(Number(e.key) - 1);
    } else if (e.key === "Enter" && (document.activeElement === document.body || document.activeElement?.id === "timer")) {
      const b = $id("start") || $id("next") || $id("again");
      if (b && !b.disabled) {
        e.preventDefault();
        b.click();
      }
    }
  });
  var last = performance.now();
  setInterval(() => {
    const now = performance.now(), before = state.phase;
    tick(state, now - last);
    last = now;
    if (state.phase === "finished" && before !== "finished") finish();
    else if ($id("timer")) {
      const secs = Math.ceil(state.remainingMs / 1e3), t = $id("timer");
      if (t.dataset.seconds !== String(secs)) {
        t.dataset.seconds = secs;
        t.textContent = `Timer ${clock(state.remainingMs)}`;
        t.className = `button timerbutton ${secs <= 30 ? "timerbutton-critical" : "timerbutton-on"}`;
      }
    }
  }, 100);
  reset();
})();
//# sourceMappingURL=app.js.map
