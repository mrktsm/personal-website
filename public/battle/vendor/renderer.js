// Standalone adapters: the renderer needs no account, network client or team builder.
var Config = window.Config = {routes:{client:'play.pokemonshowdown.com',root:'pokemonshowdown.com'},customcolors:{},whitelist:[],server:{}};
var Teams={unpack:()=>[],pack:()=>'',export:()=>''};
class BattleTooltips {listen(){} static hideTooltip(){} }
function formatText(text){return String(text).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');}

var BattlePokedex = window.BattlePokedex = {"charizard":{"num":6,"name":"Charizard","types":["Fire","Flying"],"genderRatio":{"M":0.875,"F":0.125},"baseStats":{"hp":78,"atk":84,"def":78,"spa":109,"spd":85,"spe":100},"abilities":{"0":"Blaze","H":"Solar Power"},"heightm":1.7,"weightkg":90.5,"color":"Red","prevo":"Charmeleon","evoLevel":36,"eggGroups":["Monster","Dragon"],"otherFormes":["Charizard-Mega-X","Charizard-Mega-Y"],"formeOrder":["Charizard","Charizard-Mega-X","Charizard-Mega-Y"],"canGigantamax":"G-Max Wildfire"},"gengar":{"num":94,"name":"Gengar","types":["Ghost","Poison"],"baseStats":{"hp":60,"atk":65,"def":60,"spa":130,"spd":75,"spe":110},"abilities":{"0":"Cursed Body"},"heightm":1.5,"weightkg":40.5,"color":"Purple","prevo":"Haunter","evoType":"trade","eggGroups":["Amorphous"],"otherFormes":["Gengar-Mega"],"formeOrder":["Gengar","Gengar-Mega"],"canGigantamax":"G-Max Terror"}};
var BattleMovedex = window.BattleMovedex = {"flamethrower":{"num":53,"accuracy":100,"basePower":90,"category":"Special","name":"Flamethrower","pp":15,"priority":0,"flags":{"protect":1,"mirror":1,"metronome":1},"secondary":{"chance":10,"status":"brn"},"target":"normal","type":"Fire","contestType":"Beautiful"},"airslash":{"num":403,"accuracy":95,"basePower":75,"category":"Special","name":"Air Slash","pp":15,"priority":0,"flags":{"protect":1,"mirror":1,"distance":1,"metronome":1,"slicing":1},"secondary":{"chance":30,"volatileStatus":"flinch"},"target":"any","type":"Flying","contestType":"Cool"},"dragonclaw":{"num":337,"accuracy":100,"basePower":80,"category":"Physical","name":"Dragon Claw","pp":15,"priority":0,"flags":{"contact":1,"protect":1,"mirror":1,"metronome":1},"target":"normal","type":"Dragon","contestType":"Cool"},"earthquake":{"num":89,"accuracy":100,"basePower":100,"category":"Physical","name":"Earthquake","pp":10,"priority":0,"flags":{"protect":1,"mirror":1,"nonsky":1,"metronome":1},"target":"allAdjacent","type":"Ground","contestType":"Tough"},"fireblast":{"num":126,"accuracy":85,"basePower":110,"category":"Special","name":"Fire Blast","pp":5,"priority":0,"flags":{"protect":1,"mirror":1,"metronome":1},"secondary":{"chance":10,"status":"brn"},"target":"normal","type":"Fire","contestType":"Beautiful"},"hurricane":{"num":542,"accuracy":70,"basePower":110,"category":"Special","name":"Hurricane","pp":10,"priority":0,"flags":{"protect":1,"mirror":1,"distance":1,"metronome":1,"wind":1},"secondary":{"chance":30,"volatileStatus":"confusion"},"target":"any","type":"Flying","contestType":"Tough"},"dragonpulse":{"num":406,"accuracy":100,"basePower":85,"category":"Special","name":"Dragon Pulse","pp":10,"priority":0,"flags":{"protect":1,"mirror":1,"distance":1,"metronome":1,"pulse":1},"target":"any","type":"Dragon","contestType":"Beautiful"},"thunderpunch":{"num":9,"accuracy":100,"basePower":75,"category":"Physical","name":"Thunder Punch","pp":15,"priority":0,"flags":{"contact":1,"protect":1,"mirror":1,"punch":1,"metronome":1},"secondary":{"chance":10,"status":"par"},"target":"normal","type":"Electric","contestType":"Cool"},"heatwave":{"num":257,"accuracy":90,"basePower":95,"category":"Special","name":"Heat Wave","pp":10,"priority":0,"flags":{"protect":1,"mirror":1,"metronome":1,"wind":1},"secondary":{"chance":10,"status":"brn"},"target":"allAdjacentFoes","type":"Fire","contestType":"Beautiful"},"solarbeam":{"num":76,"accuracy":100,"basePower":120,"category":"Special","name":"Solar Beam","pp":10,"priority":0,"flags":{"charge":1,"protect":1,"mirror":1,"metronome":1,"nosleeptalk":1,"failinstruct":1},"target":"normal","type":"Grass","contestType":"Cool"},"focusblast":{"num":411,"accuracy":70,"basePower":120,"category":"Special","name":"Focus Blast","pp":5,"priority":0,"flags":{"protect":1,"mirror":1,"metronome":1,"bullet":1},"secondary":{"chance":10,"boosts":{"spd":-1}},"target":"normal","type":"Fighting","contestType":"Cool"},"outrage":{"num":200,"accuracy":100,"basePower":120,"category":"Physical","name":"Outrage","pp":10,"priority":0,"flags":{"contact":1,"protect":1,"mirror":1,"metronome":1,"failinstruct":1},"self":{"volatileStatus":"lockedmove"},"target":"randomNormal","type":"Dragon","contestType":"Cool"},"blastburn":{"num":307,"accuracy":90,"basePower":150,"category":"Special","name":"Blast Burn","pp":5,"priority":0,"flags":{"recharge":1,"protect":1,"mirror":1,"metronome":1},"self":{"volatileStatus":"mustrecharge"},"target":"normal","type":"Fire","contestType":"Beautiful"},"hyperbeam":{"num":63,"accuracy":90,"basePower":150,"category":"Special","name":"Hyper Beam","pp":5,"priority":0,"flags":{"recharge":1,"protect":1,"mirror":1,"metronome":1},"self":{"volatileStatus":"mustrecharge"},"target":"normal","type":"Normal","contestType":"Cool"},"dracometeor":{"num":434,"accuracy":90,"basePower":130,"category":"Special","name":"Draco Meteor","pp":5,"priority":0,"flags":{"protect":1,"mirror":1,"metronome":1},"self":{"boosts":{"spa":-2}},"target":"normal","type":"Dragon","contestType":"Beautiful"},"shadowclaw":{"num":421,"accuracy":100,"basePower":70,"category":"Physical","name":"Shadow Claw","pp":15,"priority":0,"flags":{"contact":1,"protect":1,"mirror":1,"metronome":1},"critRatio":2,"target":"normal","type":"Ghost","contestType":"Cool"},"overheat":{"num":315,"accuracy":90,"basePower":130,"category":"Special","name":"Overheat","pp":5,"priority":0,"flags":{"protect":1,"mirror":1,"metronome":1},"self":{"boosts":{"spa":-2}},"target":"normal","type":"Fire","contestType":"Beautiful"},"gigaimpact":{"num":416,"accuracy":90,"basePower":150,"category":"Physical","name":"Giga Impact","pp":5,"priority":0,"flags":{"contact":1,"recharge":1,"protect":1,"mirror":1,"metronome":1},"self":{"volatileStatus":"mustrecharge"},"target":"normal","type":"Normal","contestType":"Tough"},"bravebird":{"num":413,"accuracy":100,"basePower":120,"category":"Physical","name":"Brave Bird","pp":15,"priority":0,"flags":{"contact":1,"protect":1,"mirror":1,"distance":1,"metronome":1},"recoil":[33,100],"target":"any","type":"Flying","contestType":"Cool"},"flareblitz":{"num":394,"accuracy":100,"basePower":120,"category":"Physical","name":"Flare Blitz","pp":15,"priority":0,"flags":{"contact":1,"protect":1,"mirror":1,"defrost":1,"metronome":1},"recoil":[33,100],"secondary":{"chance":10,"status":"brn"},"target":"normal","type":"Fire","contestType":"Cool"},"shadowball":{"num":247,"accuracy":100,"basePower":80,"category":"Special","name":"Shadow Ball","pp":15,"priority":0,"flags":{"protect":1,"mirror":1,"metronome":1,"bullet":1},"secondary":{"chance":20,"boosts":{"spd":-1}},"target":"normal","type":"Ghost","contestType":"Clever"},"sludgebomb":{"num":188,"accuracy":100,"basePower":90,"category":"Special","name":"Sludge Bomb","pp":10,"priority":0,"flags":{"protect":1,"mirror":1,"metronome":1,"bullet":1},"secondary":{"chance":30,"status":"psn"},"target":"normal","type":"Poison","contestType":"Tough"},"thunderbolt":{"num":85,"accuracy":100,"basePower":90,"category":"Special","name":"Thunderbolt","pp":15,"priority":0,"flags":{"protect":1,"mirror":1,"metronome":1},"secondary":{"chance":10,"status":"par"},"target":"normal","type":"Electric","contestType":"Cool"},"darkpulse":{"num":399,"accuracy":100,"basePower":80,"category":"Special","name":"Dark Pulse","pp":15,"priority":0,"flags":{"protect":1,"mirror":1,"distance":1,"metronome":1,"pulse":1},"secondary":{"chance":20,"volatileStatus":"flinch"},"target":"any","type":"Dark","contestType":"Cool"},"psychic":{"num":94,"accuracy":100,"basePower":90,"category":"Special","name":"Psychic","pp":10,"priority":0,"flags":{"protect":1,"mirror":1,"metronome":1},"secondary":{"chance":10,"boosts":{"spd":-1}},"target":"normal","type":"Psychic","contestType":"Clever"},"pound":{"num":1,"accuracy":100,"basePower":40,"category":"Physical","name":"Pound","pp":35,"priority":0,"flags":{"contact":1,"protect":1,"mirror":1,"metronome":1},"target":"normal","type":"Normal","contestType":"Tough"}};
var BattlePokemonSprites = window.BattlePokemonSprites = {"charizard":{"num":6,"front":{"w":133,"h":140},"back":{"w":172,"h":166}},"gengar":{"num":94,"front":{"w":84,"h":78},"back":{"w":72,"h":78}}};
var BattleText = window.BattleText = {"en":{"Default":{"default":{"startBattle":"Battle started between {TRAINER1} and {TRAINER2}!","winBattle":"**{TRAINER}** won the battle!","tieBattle":"Tie between {TRAINER1} and {TRAINER2}!","pokemon":"{NICKNAME}","opposingPokemon":"the opposing {NICKNAME}","fullName":"{NICKNAME} ({SPECIES})","team":"your team","opposingTeam":"the opposing team","party":"your ally Pokémon","opposingParty":"the opposing Pokémon","turn":"== Turn {NUMBER} ==","switchIn":"{TRAINER} sent out {FULLNAME}!","switchInOwn":"Go! {FULLNAME}!","switchOut":"{TRAINER} withdrew {NICKNAME}!","switchOutOwn":"{NICKNAME}, come back!","drag":"{FULLNAME} was dragged out!","faint":"{POKEMON} fainted!","swap":"{POKEMON} and {TARGET} switched places!","swapCenter":"{POKEMON} moved to the center!","canDynamax":"  {TRAINER} can dynamax now!","canDynamaxOwn":"  Dynamax Energy gathered around {TRAINER}!","zEffect":"  {POKEMON} unleashes its full-force Z-Move!","move":"{POKEMON} used **{MOVE}**!","abilityActivation":"[{POKEMON}'s {ABILITY}]","mega":"  {POKEMON}'s {ITEM} is reacting to the Key Stone!","megaNoItem":"  {POKEMON} is reacting to {TRAINER}'s Key Stone!","megaGen6":"  {POKEMON}'s {ITEM} is reacting to {TRAINER}'s Mega Bracelet!","transformMega":"{POKEMON} has Mega Evolved into Mega {SPECIES}!","primal":"{POKEMON}'s Primal Reversion! It reverted to its primal state!","zPower":"  {POKEMON} surrounded itself with its Z-Power!","zBroken":"  {POKEMON} couldn't fully protect itself and got hurt!","terastallize":"  ({POKEMON} has Terastallized into the {TYPE}-type!)","cant":"{POKEMON} cannot use {MOVE}!","cantNoMove":"{POKEMON} can't move!","fail":"  But it failed!","transform":"{POKEMON} transformed!","typeChange":"  {POKEMON} transformed into the {TYPE} type!","typeChangeFromEffect":"  {POKEMON}'s {EFFECT} made it the {TYPE} type!","typeAdd":"  {TYPE} type was added to {POKEMON}!","start":"  ({EFFECT} started on {POKEMON}!)","end":"  {POKEMON} was freed from {EFFECT}!","activate":"  ({EFFECT} activated!)","startTeamEffect":"  ({EFFECT} started on {TEAM}!)","endTeamEffect":"  ({EFFECT} ended on {TEAM}!)","startFieldEffect":"  ({EFFECT} started!)","endFieldEffect":"  ({EFFECT} ended!)","changeAbility":"  {POKEMON} acquired {ABILITY}!","addItem":"  {POKEMON} obtained {ITEM}.","takeItem":"  {POKEMON} stole {SOURCE}'s {ITEM}!","eatItem":"  ({POKEMON} ate its {ITEM}!)","useGem":"  {ITEM} strengthened {MOVE}'s power!","eatItemWeaken":"  {POKEMON}'s {ITEM} lessened the damage it took!","removeItem":"  {POKEMON} lost its {ITEM}!","activateItem":"  ({POKEMON} used its {ITEM}!)","activateWeaken":"  {POKEMON}'s {ITEM} lessened the damage it took!","damage":"  ({POKEMON} was hurt!)","damagePercentage":"  ({POKEMON} lost {PERCENTAGE}% of its health!)","damageFromPokemon":"  {POKEMON} was hurt by {SOURCE}'s {ITEM}!","damageFromItem":"  {POKEMON} was hurt by its {ITEM}!","damageFromPartialTrapping":"  {POKEMON} is hurt by {MOVE}!","heal":"  {POKEMON} had its HP restored.","healFromZEffect":"  {POKEMON} restored its HP using its Z-Power!","healFromEffect":"  {POKEMON} restored HP using its {EFFECT}!","boost":"  {POKEMON}'s {STAT} rose!","boost2":"  {POKEMON}'s {STAT} rose sharply!","boost3":"  {POKEMON}'s {STAT} rose drastically!","boost0":"  {POKEMON}'s {STAT} won't go any higher!","boostFromItem":"  The {ITEM} raised {POKEMON}'s {STAT}!","boost2FromItem":"  The {ITEM} sharply raised {POKEMON}'s {STAT}!","boost3FromItem":"  The {ITEM} drastically raised {POKEMON}'s {STAT}!","boostFromZEffect":"  {POKEMON} boosted its {STAT} using its Z-Power!","boost2FromZEffect":"  {POKEMON} boosted its {STAT} sharply using its Z-Power!","boost3FromZEffect":"  {POKEMON} boosted its {STAT} drastically using its Z-Power!","boostMultipleFromZEffect":"  {POKEMON} boosted its stats using its Z-Power!","unboost":"  {POKEMON}'s {STAT} fell!","unboost2":"  {POKEMON}'s {STAT} harshly fell!","unboost3":"  {POKEMON}'s {STAT} severely fell!","unboost0":"  {POKEMON}'s {STAT} won't go any lower!","unboostFromItem":"  The {ITEM} lowered {POKEMON}'s {STAT}!","unboost2FromItem":"  The {ITEM} harshly lowered {POKEMON}'s {STAT}!","unboost3FromItem":"  The {ITEM} drastically lowered {POKEMON}'s {STAT}!","swapBoost":"  {POKEMON} switched stat changes with its target!","swapOffensiveBoost":"  {POKEMON} switched all changes to its Attack and Sp. Atk with its target!","swapDefensiveBoost":"  {POKEMON} switched all changes to its Defense and Sp. Def with its target!","copyBoost":"  {POKEMON} copied {TARGET}'s stat changes!","clearBoost":"  {POKEMON}'s stat changes were removed!","clearBoostFromZEffect":"  {POKEMON} returned its decreased stats to normal using its Z-Power!","invertBoost":"  All stat changes on {POKEMON} were inverted!","clearAllBoost":"  All stat changes were eliminated!","superEffective":"  It's super effective!","superEffectiveSpread":"  It's super effective on {POKEMON}!","resisted":"  It's not very effective...","resistedSpread":"  It's not very effective on {POKEMON}.","extremelyEffective":"  It's extremely effective!","extremelyEffectiveSpread":"  It's extremely effective on {POKEMON}!","mostlyIneffective":"  It's mostly ineffective...","mostlyIneffectiveSpread":"  It's mostly ineffective on {POKEMON}.","crit":"  A critical hit!","critSpread":"  A critical hit on {POKEMON}!","immune":"  It doesn't affect {POKEMON}...","immuneNoPokemon":"  But it had no effect!","immuneOHKO":"  {POKEMON} is unaffected!","miss":"  {POKEMON} avoided the attack!","missNoPokemon":"  {SOURCE}'s attack missed!","center":"  Automatic center!","noTarget":"  But there was no target...","ohko":"  It's a one-hit KO!","combine":"  The two moves have become one! It's a combined move!","hitCount":"  The Pokémon was hit {NUMBER} {INFLECT:NUMBER:s=time:p=times}!"},"ui":{"whatDo":"What will **{POKEMON}** do?","moveTarget":"Where should {POKEMON} use **{MOVE}**?","reviveWho":"Who will **{POKEMON}** revive?","replaceWho":"Who will replace **{POKEMON}**?","teamStart":"How will you start the battle?","teamRest":"What about the rest of your team?","chooseLead":"Choose lead","chooseSlot":"Choose slot {NUMBER}","teamSoFar":"Team so far","waitingOpponent":"Waiting for opponent...","cantSwitchTrapped":"You're **trapped** and cannot switch!","notifyMoveTitle":"Your move!","notifyMove":"Move in your battle","notifyMoveAgainst":"Move in your battle against {OPPONENT}","notifySwitchTitle":"Your switch!","notifySwitch":"Switch in your battle","notifySwitchAgainst":"Switch in your battle against {OPPONENT}","notifyTeamTitle":"Team preview!","notifyTeam":"Choose your team order in your battle","notifyTeamAgainst":"Choose your team order in your battle against {OPPONENT}","mightBeDisabled":"You **might** have some moves disabled, so you won't be able to cancel an attack!","mightBeLocked":"You **might** be locked into a move.","lockedExplanation":"(prevents switching if you're locked)","mightBeTrapped":"You **might** be trapped, so you won't be able to cancel a switch!","autoChoice":"Automatic choice","unrecognizedChoice":"Unrecognized choice from server:","lockedIntoMove":"{POKEMON} is locked into a move.","willUseMove":"{POKEMON} will {ACTIONS}use **{MOVE}**{AT}.","atTarget":" at {TARGET}","atSlot":" at slot {NUMBER}","atAllyTarget":" at ally {TARGET}","atAllySlot":" at ally slot {NUMBER}","actionMegaEvolve":"**Mega** Evolve and ","actionMegaEvolveX":"**Mega** Evolve (X) and ","actionMegaEvolveY":"**Mega** Evolve (Y) and ","actionUltraBurst":"**Ultra** Burst and ","actionTerastallize":"Terastallize (**{TYPE}**) and ","actionDynamax":"**Dynamax** and ","actionGigantamax":"**Gigantamax** and ","willRevive":"{POKEMON} will revive **{TARGET}**.","willSwitch":"{POKEMON} will switch to **{TARGET}**.","willShift":"{POKEMON} will **shift** to the center.","youPicked":"You picked {POKEMON}.","listComma":", ","zEffectClearNegativeBoost":"Restores negative stat stages to 0","zEffectCrit2":"Crit ratio +2","zEffectHeal":"Restores HP 100%","zEffectCurse":"Restores HP 100% if user is Ghost type, otherwise Attack +1","zEffectRedirect":"Redirects opposing attacks to user","zEffectHealReplacement":"Restores replacement's HP 100%","flingBerry":"Activates the Berry's effect on the target.","flingWhiteHerb":"Restores the target's negative stat stages to 0.","flingMentalHerb":"Removes the effects of Attract, Disable, Encore, Heal Block, Taunt, and Torment from the target.","cantFling":"This item cannot be used with Fling.","unobtainableInGen":"Unobtainable in Gen {NUMBER}","tagMoves":"{TAG} moves"},"brn":{"start":"  {POKEMON} was burned!","startFromItem":"  {POKEMON} was burned by the {ITEM}!","alreadyStarted":"  {POKEMON} is already burned!","end":"  {POKEMON}'s burn was healed!","endFromItem":"  {POKEMON}'s {ITEM} healed its burn!","damage":"  {POKEMON} was hurt by its burn!"},"frz":{"start":"  {POKEMON} was frozen solid!","alreadyStarted":"  {POKEMON} is already frozen solid!","end":"  {POKEMON} thawed out!","endFromItem":"  {POKEMON}'s {ITEM} defrosted it!","endFromMove":"  {POKEMON}'s {MOVE} melted the ice!","cant":"{POKEMON} is frozen solid!"},"par":{"start":"  {POKEMON} is paralyzed, so it may be unable to move!","alreadyStarted":"  {POKEMON} is already paralyzed!","end":"  {POKEMON} was cured of paralysis!","endFromItem":"  {POKEMON}'s {ITEM} cured its paralysis!","cant":"{POKEMON} is paralyzed! It can't move!"},"psn":{"start":"  {POKEMON} was poisoned!","alreadyStarted":"  {POKEMON} is already poisoned!","end":"  {POKEMON} was cured of its poisoning!","endFromItem":"  {POKEMON}'s {ITEM} cured its poison!","damage":"  {POKEMON} was hurt by poison!"},"tox":{"start":"  {POKEMON} was badly poisoned!","startFromItem":"  {POKEMON} was badly poisoned by the {ITEM}!","end":"#psn","endFromItem":"#psn","alreadyStarted":"#psn","damage":"#psn"},"slp":{"start":"  {POKEMON} fell asleep!","startFromRest":"  {POKEMON} slept and became healthy!","alreadyStarted":"  {POKEMON} is already asleep!","end":"  {POKEMON} woke up!","endFromItem":"  {POKEMON}'s {ITEM} woke it up!","cant":"{POKEMON} is fast asleep."},"confusion":{"start":"  {POKEMON} became confused!","startFromFatigue":"  {POKEMON} became confused due to fatigue!","end":"  {POKEMON} snapped out of its confusion!","endFromItem":"  {POKEMON}'s {ITEM} snapped it out of its confusion!","alreadyStarted":"  {POKEMON} is already confused!","activate":"  {POKEMON} is confused!","damage":"It hurt itself in its confusion!"},"drain":{"heal":"  {SOURCE} had its energy drained!"},"flinch":{"cant":"{POKEMON} flinched and couldn't move!"},"heal":{"fail":"  {POKEMON}'s HP is full!"},"healreplacement":{"activate":"  {POKEMON} will restore its replacement's HP using its Z-Power!"},"nopp":{"cant":"{POKEMON} used {MOVE}!\n  But there was no PP left for the move!"},"recharge":{"cant":"{POKEMON} must recharge!"},"recoil":{"damage":"  {POKEMON} was damaged by the recoil!"},"unboost":{"fail":"  {POKEMON}'s {STAT} {INFLECT:STAT:s=was:p=were} not lowered!","failNoStat":"  {POKEMON}'s stats were not lowered!"},"struggle":{"activate":"  {POKEMON} has no moves left!"},"trapped":{"start":"  {POKEMON} can no longer escape!"},"dynamax":{"start":"  ({POKEMON}'s Dynamax!)","end":"  ({POKEMON} returned to normal!)","block":"  The move was blocked by the power of Dynamax!","fail":"  {POKEMON} shook its head. It seems like it can't use this move..."},"sandstorm":{"weatherName":"Sandstorm","start":"  A sandstorm kicked up!","end":"  The sandstorm subsided.","upkeep":"  (The sandstorm is raging.)","damage":"  {POKEMON} is buffeted by the sandstorm!"},"sunnyday":{"weatherName":"Sun","start":"  The sunlight turned harsh!","end":"  The harsh sunlight faded.","upkeep":"  (The sunlight is strong.)"},"raindance":{"weatherName":"Rain","start":"  It started to rain!","end":"  The rain stopped.","upkeep":"  (Rain continues to fall.)"},"hail":{"weatherName":"Hail","start":"  It started to hail!","end":"  The hail stopped.","upkeep":"  (The hail is crashing down.)","damage":"  {POKEMON} is buffeted by the hail!"},"snowscape":{"weatherName":"Snow","start":"  It started to snow!","end":"  The snow stopped.","upkeep":"  (The snow is blowing about!)"},"desolateland":{"weatherName":"Intense Sun","start":"  The sunlight turned extremely harsh!","end":"  The extremely harsh sunlight faded.","block":"  The extremely harsh sunlight was not lessened at all!","blockMove":"  The Water-type attack evaporated in the harsh sunlight!"},"primordialsea":{"weatherName":"Heavy Rain","start":"  A heavy rain began to fall!","end":"  The heavy rain has lifted!","block":"  There is no relief from this heavy rain!","blockMove":"  The Fire-type attack fizzled out in the heavy rain!"},"deltastream":{"weatherName":"Strong Winds","start":"  Mysterious strong winds are protecting Flying-type Pokémon!","end":"  The mysterious strong winds have dissipated!","activate":"  The mysterious strong winds weakened the attack!","block":"  The mysterious strong winds blow on regardless!"},"electricterrain":{"start":"  An electric current ran across the battlefield!","end":"  The electricity disappeared from the battlefield.","block":"  {POKEMON} is protected by the Electric Terrain!"},"grassyterrain":{"start":"  Grass grew to cover the battlefield!","end":"  The grass disappeared from the battlefield.","heal":"  {POKEMON}'s HP was restored."},"mistyterrain":{"start":"  Mist swirled around the battlefield!","end":"  The mist disappeared from the battlefield.","block":"  {POKEMON} surrounds itself with a protective mist!"},"psychicterrain":{"start":"  The battlefield got weird!","end":"  The weirdness disappeared from the battlefield!","block":"  {POKEMON} is protected by the Psychic Terrain!"},"gravity":{"start":"  Gravity intensified!","end":"  Gravity returned to normal!","cant":"{POKEMON} can't use {MOVE} because of gravity!","activate":"{POKEMON} fell from the sky due to the gravity!"},"magicroom":{"start":"  It created a bizarre area in which Pokémon's held items lose their effects!","end":"  Magic Room wore off, and held items' effects returned to normal!"},"mudsport":{"start":"  Electricity's power was weakened!","end":"  The effects of Mud Sport have faded."},"trickroom":{"start":"  {POKEMON} twisted the dimensions!","end":"  The twisted dimensions returned to normal!"},"watersport":{"start":"  Fire's power was weakened!","end":"  The effects of Water Sport have faded."},"wonderroom":{"start":"  It created a bizarre area in which Defense and Sp. Def stats are swapped!","end":"  Wonder Room wore off, and Defense and Sp. Def stats returned to normal!"},"crash":{"damage":"  {POKEMON} kept going and crashed!"}},"Moves":{"flamethrower":{"name":"Flamethrower","desc":"Has a 10% chance to burn the target.","shortDesc":"10% chance to burn the target."},"airslash":{"name":"Air Slash","desc":"Has a 30% chance to make the target flinch.","shortDesc":"30% chance to make the target flinch."},"dragonclaw":{"name":"Dragon Claw","shortDesc":"No additional effect."},"earthquake":{"name":"Earthquake","desc":"Damage doubles if the target is using Dig.","shortDesc":"Hits adjacent Pokemon. Double damage on Dig.","gen4":{"desc":"Power doubles if the target is using Dig.","shortDesc":"Hits adjacent Pokemon. Power doubles on Dig."},"gen1":{"desc":"No additional effect.","shortDesc":"No additional effect."},"gen2":{"shortDesc":"Power doubles on Dig."}},"fireblast":{"name":"Fire Blast","desc":"Has a 10% chance to burn the target.","shortDesc":"10% chance to burn the target.","gen1":{"desc":"Has a 30% chance to burn the target.","shortDesc":"30% chance to burn the target."}},"hurricane":{"name":"Hurricane","desc":"Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Heavy Rain or Rain, this move does not check accuracy. If the weather is Intense Sun or Sun, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.","shortDesc":"30% chance to confuse target. Can't miss in rain.","gen7":{"desc":"Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Heavy Rain or Rain, this move does not check accuracy. If the weather is Intense Sun or Sun, this move's accuracy is 50%."},"gen5":{"desc":"Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Rain, this move does not check accuracy. If the weather is Sun, this move's accuracy is 50%."}},"dragonpulse":{"name":"Dragon Pulse","shortDesc":"No additional effect."},"thunderpunch":{"name":"Thunder Punch","desc":"Has a 10% chance to paralyze the target.","shortDesc":"10% chance to paralyze the target."},"heatwave":{"name":"Heat Wave","desc":"Has a 10% chance to burn the target.","shortDesc":"10% chance to burn the foe(s)."},"solarbeam":{"name":"Solar Beam","desc":"This attack charges on the first turn and executes on the second. Power is halved if the weather is Heavy Rain, Rain, Sandstorm, or Snow and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Intense Sun or Sun, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Intense Sun or Sun, the move still requires a turn to charge.","shortDesc":"Charges turn 1. Hits turn 2. No charge in sunlight.","gen8":{"desc":"This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Heavy Rain, Rain, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Intense Sun or Sun, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Intense Sun or Sun, the move still requires a turn to charge."},"gen7":{"desc":"This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Heavy Rain, Rain, or Sandstorm. If the user is holding a Power Herb or the weather is Intense Sun or Sun, the move completes in one turn."},"gen5":{"desc":"This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Rain, or Sandstorm. If the user is holding a Power Herb or the weather is Sun, the move completes in one turn."},"gen4":{"desc":"This attack charges on the first turn and executes on the second. Damage is halved if the weather is Hail, Rain, or Sandstorm. If the user is holding a Power Herb or the weather is Sun, the move completes in one turn."},"gen3":{"desc":"This attack charges on the first turn and executes on the second. Damage is halved if the weather is Hail, Rain, or Sandstorm. If the weather is Sun, the move completes in one turn."},"gen2":{"desc":"This attack charges on the first turn and executes on the second. Damage is halved if the weather is Rain. If the weather is Sun, the move completes in one turn."},"gen1":{"desc":"This attack charges on the first turn and executes on the second.","shortDesc":"Charges turn 1. Hits turn 2."},"prepare":"  {POKEMON} absorbed light!"},"focusblast":{"name":"Focus Blast","desc":"Has a 10% chance to lower the target's Special Defense by 1 stage.","shortDesc":"10% chance to lower the target's Sp. Def by 1."},"outrage":{"name":"Outrage","desc":"The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.","shortDesc":"Lasts 2-3 turns. Confuses the user afterwards.","gen6":{"desc":"The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an adjacent opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user."},"gen4":{"desc":"The user spends two or three turns locked into this move and becomes confused at the end of the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user."},"gen3":{"desc":"The user spends two or three turns locked into this move and becomes confused at the end of the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, falls asleep, becomes frozen, or the attack is not successful against the target, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user."},"gen2":{"desc":"Whether or not this move is successful, the user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect, even if it is already confused. If the user is prevented from moving, the effect ends without causing confusion. If this move is called by Sleep Talk, the move is used for one turn and does not confuse the user."}},"blastburn":{"name":"Blast Burn","desc":"If this move is successful, the user must recharge on the following turn and cannot select a move.","shortDesc":"User cannot move next turn."},"hyperbeam":{"name":"Hyper Beam","desc":"If this move is successful, the user must recharge on the following turn and cannot select a move.","shortDesc":"User cannot move next turn.","gen1":{"desc":"If this move is successful, the user must recharge on the following turn and cannot select a move, unless the target or its substitute was knocked out by this move.","shortDesc":"Can't move next turn if target or sub is not KOed."}},"dracometeor":{"name":"Draco Meteor","desc":"Lowers the user's Special Attack by 2 stages.","shortDesc":"Lowers the user's Sp. Atk by 2."},"shadowclaw":{"name":"Shadow Claw","desc":"Has a higher chance for a critical hit.","shortDesc":"High critical hit ratio."},"overheat":{"name":"Overheat","desc":"Lowers the user's Special Attack by 2 stages.","shortDesc":"Lowers the user's Sp. Atk by 2."},"gigaimpact":{"name":"Giga Impact","desc":"If this move is successful, the user must recharge on the following turn and cannot select a move.","shortDesc":"User cannot move next turn."},"bravebird":{"name":"Brave Bird","desc":"If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.","shortDesc":"Has 33% recoil.","gen4":{"desc":"If the target lost HP, the user takes recoil damage equal to 1/3 the HP lost by the target, rounded down, but not less than 1 HP.","shortDesc":"Has 1/3 recoil."}},"flareblitz":{"name":"Flare Blitz","desc":"Has a 10% chance to burn the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.","shortDesc":"Has 33% recoil. 10% chance to burn. Thaws user.","gen4":{"desc":"Has a 10% chance to burn the target. If the target lost HP, the user takes recoil damage equal to 1/3 the HP lost by the target, rounded down, but not less than 1 HP.","shortDesc":"Has 1/3 recoil. 10% chance to burn. Thaws user."}},"shadowball":{"name":"Shadow Ball","desc":"Has a 20% chance to lower the target's Special Defense by 1 stage.","shortDesc":"20% chance to lower the target's Sp. Def by 1."},"sludgebomb":{"name":"Sludge Bomb","desc":"Has a 30% chance to poison the target.","shortDesc":"30% chance to poison the target."},"thunderbolt":{"name":"Thunderbolt","desc":"Has a 10% chance to paralyze the target.","shortDesc":"10% chance to paralyze the target."},"darkpulse":{"name":"Dark Pulse","desc":"Has a 20% chance to make the target flinch.","shortDesc":"20% chance to make the target flinch."},"psychic":{"name":"Psychic","desc":"Has a 10% chance to lower the target's Special Defense by 1 stage.","shortDesc":"10% chance to lower the target's Sp. Def by 1.","gen1":{"desc":"Has a 33% chance to lower the target's Special by 1 stage.","shortDesc":"33% chance to lower the target's Special by 1."}},"pound":{"name":"Pound","shortDesc":"No additional effect."}},"Pokedex":{"charizard":{"name":"Charizard"},"gengar":{"name":"Gengar"}},"Abilities":{},"Items":{}}};
var BattleItems = window.BattleItems = {};
var BattleAbilities = window.BattleAbilities = {};
var BattleTypeChart = window.BattleTypeChart = {};
/**
 * Pokemon Showdown Dex Data
 *
 * A collection of data and definitions for src/battle-dex.ts.
 *
 * Larger data has their own files in data/, so this is just for small
 * miscellaneous data that doesn't need its own file.
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

/**
 * String that contains only lowercase alphanumeric characters.
 */

// note: can't be called "Format" because it conflicts with some ad code
class BattleFormat {
  id;
  name;
  effectType = 'Format';
  gen;
  mod;
  team = null;
  section = '';
  column = 0;
  searchShow = undefined;
  challengeShow = undefined;
  tournamentShow = undefined;
  bestOfDefault = undefined;
  teraPreviewDefault = undefined;
  itemClauseDefault = undefined;
  rated = false;
  teambuilderLevel = undefined;
  partner = undefined;
  teambuilderFormat = undefined;
  battleFormat = undefined;
  isTeambuilderFormat = false;
  isLetsGo;
  isNatDex;
  isBDSP;
  isChampions;
  allowMultipleMegas;
  formeLegality = 'normal';
  abilityLegality = 'normal';
  defaultLevel = 100;
  constructor(name, data) {
    this.id = toID(name);
    this.name = name;
    const id = this.id;
    this.gen = !id ? Dex.gen : id.startsWith('gen') ? parseInt(id.charAt(3)) || Dex.gen : 6;
    this.isLetsGo = id.includes('letsgo');
    this.isNatDex = id.includes('nationaldex') || id.includes('natdex');
    this.isBDSP = id.includes('bdsp');
    this.isChampions = id.includes('champions');
    this.allowMultipleMegas = id.includes('mega');
    this.mod = `gen${this.gen}`;
    if (this.gen === 7 && this.isLetsGo) this.mod = 'gen7letsgo';
    if (this.gen === 8 && this.isBDSP) this.mod = 'gen8bdsp';
    if (this.gen === 9 && this.isChampions) this.mod = 'champions';
    if (id.includes('almostanyability') || id.includes('aaa')) this.abilityLegality = 'hackmons';
    if (id.includes('hackmons') || id.includes('bh')) {
      this.formeLegality = 'hackmons';
      this.abilityLegality = 'hackmons';
    } else if (id.includes('metronome') || id.includes('customgame')) {
      this.formeLegality = 'custom';
      this.abilityLegality = 'hackmons';
    }
    if (id.includes('vgc') || id.includes('bss') || id.includes('ultrasinnohclassic') || id.includes('battlespot') || id.includes('battlestadium') || id.includes('battlefestival') || this.isLetsGo || this.isChampions) this.defaultLevel = 50;
    if (id.includes('lc')) this.defaultLevel = 5;
    if (data) Object.assign(this, data);
  }
}
const BattleNatureData = {
  Adamant: {
    plus: 'atk',
    minus: 'spa'
  },
  Bashful: {},
  Bold: {
    plus: 'def',
    minus: 'atk'
  },
  Brave: {
    plus: 'atk',
    minus: 'spe'
  },
  Calm: {
    plus: 'spd',
    minus: 'atk'
  },
  Careful: {
    plus: 'spd',
    minus: 'spa'
  },
  Docile: {},
  Gentle: {
    plus: 'spd',
    minus: 'def'
  },
  Hardy: {},
  Hasty: {
    plus: 'spe',
    minus: 'def'
  },
  Impish: {
    plus: 'def',
    minus: 'spa'
  },
  Jolly: {
    plus: 'spe',
    minus: 'spa'
  },
  Lax: {
    plus: 'def',
    minus: 'spd'
  },
  Lonely: {
    plus: 'atk',
    minus: 'def'
  },
  Mild: {
    plus: 'spa',
    minus: 'def'
  },
  Modest: {
    plus: 'spa',
    minus: 'atk'
  },
  Naive: {
    plus: 'spe',
    minus: 'spd'
  },
  Naughty: {
    plus: 'atk',
    minus: 'spd'
  },
  Quiet: {
    plus: 'spa',
    minus: 'spe'
  },
  Quirky: {},
  Rash: {
    plus: 'spa',
    minus: 'spd'
  },
  Relaxed: {
    plus: 'def',
    minus: 'spe'
  },
  Sassy: {
    plus: 'spd',
    minus: 'spe'
  },
  Serious: {},
  Timid: {
    plus: 'spe',
    minus: 'atk'
  }
};
const BattleNatures = {};
for (const natureName in BattleNatureData) {
  const name = natureName;
  const data = BattleNatureData[name];
  BattleNatures[name] = {
    ...data,
    id: name.toLowerCase(),
    name,
    gen: 3,
    effectType: 'Nature',
    exists: true
  };
}
/** exportable-to-stat. most of the complexity is just "spd" can be Sp. Def or Speed */
const BattleStatIDs = {
  H: 'hp',
  HP: 'hp',
  hp: 'hp',
  A: 'atk',
  Atk: 'atk',
  atk: 'atk',
  B: 'def',
  Def: 'def',
  def: 'def',
  C: 'spa',
  SpA: 'spa',
  SAtk: 'spa',
  SpAtk: 'spa',
  spa: 'spa',
  CD: 'spa',
  spc: 'spa',
  Spc: 'spa',
  D: 'spd',
  SpD: 'spd',
  SDef: 'spd',
  SpDef: 'spd',
  spd: 'spd',
  S: 'spe',
  Spe: 'spe',
  Spd: 'spe',
  spe: 'spe'
};
/** Stat short names; should only be used for exportables. Use TL.statShort otherwise. */
const BattleStatNames = {
  hp: 'HP',
  atk: 'Atk',
  def: 'Def',
  spa: 'SpA',
  spd: 'SpD',
  spe: 'Spe'
};

/** Allows correct sprites to be loaded without pokedex loaded.
 *  Now that we support tooltips in battles, we always want pokedex loaded,
 *  so this is mostly historical. Which is also why it's so out-of-date. */
const BattleBaseSpeciesChart = ["unown", "burmy", "shellos", "gastrodon", "deerling", "sawsbuck", "vivillon", "flabebe", "floette", "florges", "furfrou", "minior", "alcremie", "tatsugiri", "pokestarufo", "pokestarbrycenman", "pokestarmt", "pokestarmt2", "pokestartransport", "pokestargiant", "pokestarhumanoid", "pokestarmonster", "pokestarf00", "pokestarf002", "pokestarspirit", "pokestarblackdoor", "pokestarwhitedoor", "pokestarblackbelt"];

/** Offsets for the sprite sheets. */
const BattlePokemonIconIndexes = {
  // alt forms
  egg: 1032 + 1,
  pikachubelle: 1032 + 2,
  pikachulibre: 1032 + 3,
  pikachuphd: 1032 + 4,
  pikachupopstar: 1032 + 5,
  pikachurockstar: 1032 + 6,
  pikachucosplay: 1032 + 7,
  unownexclamation: 1032 + 8,
  unownquestion: 1032 + 9,
  unownb: 1032 + 10,
  unownc: 1032 + 11,
  unownd: 1032 + 12,
  unowne: 1032 + 13,
  unownf: 1032 + 14,
  unowng: 1032 + 15,
  unownh: 1032 + 16,
  unowni: 1032 + 17,
  unownj: 1032 + 18,
  unownk: 1032 + 19,
  unownl: 1032 + 20,
  unownm: 1032 + 21,
  unownn: 1032 + 22,
  unowno: 1032 + 23,
  unownp: 1032 + 24,
  unownq: 1032 + 25,
  unownr: 1032 + 26,
  unowns: 1032 + 27,
  unownt: 1032 + 28,
  unownu: 1032 + 29,
  unownv: 1032 + 30,
  unownw: 1032 + 31,
  unownx: 1032 + 32,
  unowny: 1032 + 33,
  unownz: 1032 + 34,
  castformrainy: 1032 + 35,
  castformsnowy: 1032 + 36,
  castformsunny: 1032 + 37,
  deoxysattack: 1032 + 38,
  deoxysdefense: 1032 + 39,
  deoxysspeed: 1032 + 40,
  burmysandy: 1032 + 41,
  burmytrash: 1032 + 42,
  wormadamsandy: 1032 + 43,
  wormadamtrash: 1032 + 44,
  cherrimsunshine: 1032 + 45,
  shelloseast: 1032 + 46,
  gastrodoneast: 1032 + 47,
  rotomfan: 1032 + 48,
  rotomfrost: 1032 + 49,
  rotomheat: 1032 + 50,
  rotommow: 1032 + 51,
  rotomwash: 1032 + 52,
  giratinaorigin: 1032 + 53,
  shayminsky: 1032 + 54,
  unfezantf: 1032 + 55,
  basculinbluestriped: 1032 + 56,
  darmanitanzen: 1032 + 57,
  deerlingautumn: 1032 + 58,
  deerlingsummer: 1032 + 59,
  deerlingwinter: 1032 + 60,
  sawsbuckautumn: 1032 + 61,
  sawsbucksummer: 1032 + 62,
  sawsbuckwinter: 1032 + 63,
  frillishf: 1032 + 64,
  jellicentf: 1032 + 65,
  tornadustherian: 1032 + 66,
  thundurustherian: 1032 + 67,
  landorustherian: 1032 + 68,
  kyuremblack: 1032 + 69,
  kyuremwhite: 1032 + 70,
  keldeoresolute: 1032 + 71,
  meloettapirouette: 1032 + 72,
  vivillonarchipelago: 1032 + 73,
  vivilloncontinental: 1032 + 74,
  vivillonelegant: 1032 + 75,
  vivillonfancy: 1032 + 76,
  vivillongarden: 1032 + 77,
  vivillonhighplains: 1032 + 78,
  vivillonicysnow: 1032 + 79,
  vivillonjungle: 1032 + 80,
  vivillonmarine: 1032 + 81,
  vivillonmodern: 1032 + 82,
  vivillonmonsoon: 1032 + 83,
  vivillonocean: 1032 + 84,
  vivillonpokeball: 1032 + 85,
  vivillonpolar: 1032 + 86,
  vivillonriver: 1032 + 87,
  vivillonsandstorm: 1032 + 88,
  vivillonsavanna: 1032 + 89,
  vivillonsun: 1032 + 90,
  vivillontundra: 1032 + 91,
  pyroarf: 1032 + 92,
  flabebeblue: 1032 + 93,
  flabebeorange: 1032 + 94,
  flabebewhite: 1032 + 95,
  flabebeyellow: 1032 + 96,
  floetteblue: 1032 + 97,
  floetteeternal: 1032 + 98,
  floetteorange: 1032 + 99,
  floettewhite: 1032 + 100,
  floetteyellow: 1032 + 101,
  florgesblue: 1032 + 102,
  florgesorange: 1032 + 103,
  florgeswhite: 1032 + 104,
  florgesyellow: 1032 + 105,
  furfroudandy: 1032 + 106,
  furfroudebutante: 1032 + 107,
  furfroudiamond: 1032 + 108,
  furfrouheart: 1032 + 109,
  furfroukabuki: 1032 + 110,
  furfroulareine: 1032 + 111,
  furfroumatron: 1032 + 112,
  furfroupharaoh: 1032 + 113,
  furfroustar: 1032 + 114,
  meowsticf: 1032 + 115,
  aegislashblade: 1032 + 116,
  xerneasneutral: 1032 + 117,
  hoopaunbound: 1032 + 118,
  rattataalola: 1032 + 119,
  raticatealola: 1032 + 120,
  raichualola: 1032 + 121,
  sandshrewalola: 1032 + 122,
  sandslashalola: 1032 + 123,
  vulpixalola: 1032 + 124,
  ninetalesalola: 1032 + 125,
  diglettalola: 1032 + 126,
  dugtrioalola: 1032 + 127,
  meowthalola: 1032 + 128,
  persianalola: 1032 + 129,
  geodudealola: 1032 + 130,
  graveleralola: 1032 + 131,
  golemalola: 1032 + 132,
  grimeralola: 1032 + 133,
  mukalola: 1032 + 134,
  exeggutoralola: 1032 + 135,
  marowakalola: 1032 + 136,
  greninjaash: 1032 + 137,
  zygarde10: 1032 + 138,
  zygardecomplete: 1032 + 139,
  oricoriopompom: 1032 + 140,
  oricoriopau: 1032 + 141,
  oricoriosensu: 1032 + 142,
  lycanrocmidnight: 1032 + 143,
  wishiwashischool: 1032 + 144,
  miniormeteor: 1032 + 145,
  miniororange: 1032 + 146,
  minioryellow: 1032 + 147,
  miniorgreen: 1032 + 148,
  miniorblue: 1032 + 149,
  miniorindigo: 1032 + 150,
  miniorviolet: 1032 + 151,
  magearnaoriginal: 1032 + 152,
  pikachuoriginal: 1032 + 153,
  pikachuhoenn: 1032 + 154,
  pikachusinnoh: 1032 + 155,
  pikachuunova: 1032 + 156,
  pikachukalos: 1032 + 157,
  pikachualola: 1032 + 158,
  pikachupartner: 1032 + 159,
  lycanrocdusk: 1032 + 160,
  necrozmaduskmane: 1032 + 161,
  necrozmadawnwings: 1032 + 162,
  necrozmaultra: 1032 + 163,
  pikachustarter: 1032 + 164,
  eeveestarter: 1032 + 165,
  meowthgalar: 1032 + 166,
  ponytagalar: 1032 + 167,
  rapidashgalar: 1032 + 168,
  farfetchdgalar: 1032 + 169,
  weezinggalar: 1032 + 170,
  mrmimegalar: 1032 + 171,
  corsolagalar: 1032 + 172,
  zigzagoongalar: 1032 + 173,
  linoonegalar: 1032 + 174,
  darumakagalar: 1032 + 175,
  darmanitangalar: 1032 + 176,
  darmanitangalarzen: 1032 + 177,
  yamaskgalar: 1032 + 178,
  stunfiskgalar: 1032 + 179,
  cramorantgulping: 1032 + 180,
  cramorantgorging: 1032 + 181,
  toxtricitylowkey: 1032 + 182,
  alcremierubycream: 1032 + 183,
  alcremiematchacream: 1032 + 184,
  alcremiemintcream: 1032 + 185,
  alcremielemoncream: 1032 + 186,
  alcremiesaltedcream: 1032 + 187,
  alcremierubyswirl: 1032 + 188,
  alcremiecaramelswirl: 1032 + 189,
  alcremierainbowswirl: 1032 + 190,
  eiscuenoice: 1032 + 191,
  indeedeef: 1032 + 192,
  morpekohangry: 1032 + 193,
  zaciancrowned: 1032 + 194,
  zamazentacrowned: 1032 + 195,
  slowpokegalar: 1032 + 196,
  slowbrogalar: 1032 + 197,
  zarudedada: 1032 + 198,
  pikachuworld: 1032 + 199,
  articunogalar: 1032 + 200,
  zapdosgalar: 1032 + 201,
  moltresgalar: 1032 + 202,
  slowkinggalar: 1032 + 203,
  calyrexice: 1032 + 204,
  calyrexshadow: 1032 + 205,
  growlithehisui: 1032 + 206,
  arcaninehisui: 1032 + 207,
  voltorbhisui: 1032 + 208,
  electrodehisui: 1032 + 209,
  typhlosionhisui: 1032 + 210,
  qwilfishhisui: 1032 + 211,
  sneaselhisui: 1032 + 212,
  samurotthisui: 1032 + 213,
  lilliganthisui: 1032 + 214,
  zoruahisui: 1032 + 215,
  zoroarkhisui: 1032 + 216,
  braviaryhisui: 1032 + 217,
  sliggoohisui: 1032 + 218,
  goodrahisui: 1032 + 219,
  avalugghisui: 1032 + 220,
  decidueyehisui: 1032 + 221,
  basculegionf: 1032 + 222,
  enamorustherian: 1032 + 223,
  taurospaldeacombat: 1032 + 224,
  taurospaldeablaze: 1032 + 225,
  taurospaldeaaqua: 1032 + 226,
  wooperpaldea: 1032 + 227,
  oinkolognef: 1032 + 228,
  palafinhero: 1032 + 229,
  mausholdfour: 1032 + 230,
  tatsugiridroopy: 1032 + 231,
  tatsugiristretchy: 1032 + 232,
  squawkabillyblue: 1032 + 233,
  squawkabillyyellow: 1032 + 234,
  squawkabillywhite: 1032 + 235,
  gimmighoulroaming: 1032 + 236,
  dialgaorigin: 1032 + 237,
  palkiaorigin: 1032 + 238,
  basculinwhitestriped: 1032 + 239,
  ursalunabloodmoon: 1032 + 240,
  ogerponwellspring: 1032 + 241,
  ogerponhearthflame: 1032 + 242,
  ogerponcornerstone: 1032 + 243,
  terapagosterastal: 1032 + 244,
  terapagosstellar: 1032 + 245,
  arceusbug: 1032 + 246,
  arceusdark: 1032 + 247,
  arceusdragon: 1032 + 248,
  arceuselectric: 1032 + 249,
  arceusfairy: 1032 + 250,
  arceusfighting: 1032 + 251,
  arceusfire: 1032 + 252,
  arceusflying: 1032 + 253,
  arceusghost: 1032 + 254,
  arceusgrass: 1032 + 255,
  arceusground: 1032 + 256,
  arceusice: 1032 + 257,
  arceuspoison: 1032 + 258,
  arceuspsychic: 1032 + 259,
  arceusrock: 1032 + 260,
  arceussteel: 1032 + 261,
  arceuswater: 1032 + 262,
  genesectdouse: 1032 + 263,
  genesectshock: 1032 + 264,
  genesectburn: 1032 + 265,
  genesectchill: 1032 + 266,
  silvallybug: 1032 + 267,
  silvallydark: 1032 + 268,
  silvallydragon: 1032 + 269,
  silvallyelectric: 1032 + 270,
  silvallyfairy: 1032 + 271,
  silvallyfighting: 1032 + 272,
  silvallyfire: 1032 + 273,
  silvallyflying: 1032 + 274,
  silvallyghost: 1032 + 275,
  silvallygrass: 1032 + 276,
  silvallyground: 1032 + 277,
  silvallyice: 1032 + 278,
  silvallypoison: 1032 + 279,
  silvallypsychic: 1032 + 280,
  silvallyrock: 1032 + 281,
  silvallysteel: 1032 + 282,
  silvallywater: 1032 + 283,
  // alt forms with duplicate icons
  greninjabond: 658,
  gumshoostotem: 735,
  raticatealolatotem: 1032 + 120,
  marowakalolatotem: 1032 + 136,
  araquanidtotem: 752,
  lurantistotem: 754,
  salazzletotem: 758,
  vikavolttotem: 738,
  togedemarutotem: 777,
  mimikyutotem: 778,
  mimikyubustedtotem: 778,
  ribombeetotem: 743,
  kommoototem: 784,
  sinisteaantique: 854,
  polteageistantique: 855,
  poltchageistartisan: 1012,
  sinistchamasterpiece: 1013,
  ogerpontealtera: 1017,
  ogerponwellspringtera: 1032 + 241,
  ogerponhearthflametera: 1032 + 242,
  ogerponcornerstonetera: 1032 + 243,
  toxtricitylowkeygmax: 1320 + 69,
  // Mega/G-Max
  venusaurmega: 1320 + 0,
  charizardmegax: 1320 + 1,
  charizardmegay: 1320 + 2,
  blastoisemega: 1320 + 3,
  beedrillmega: 1320 + 4,
  pidgeotmega: 1320 + 5,
  alakazammega: 1320 + 6,
  slowbromega: 1320 + 7,
  gengarmega: 1320 + 8,
  kangaskhanmega: 1320 + 9,
  pinsirmega: 1320 + 10,
  gyaradosmega: 1320 + 11,
  aerodactylmega: 1320 + 12,
  mewtwomegax: 1320 + 13,
  mewtwomegay: 1320 + 14,
  ampharosmega: 1320 + 15,
  steelixmega: 1320 + 16,
  scizormega: 1320 + 17,
  heracrossmega: 1320 + 18,
  houndoommega: 1320 + 19,
  tyranitarmega: 1320 + 20,
  sceptilemega: 1320 + 21,
  blazikenmega: 1320 + 22,
  swampertmega: 1320 + 23,
  gardevoirmega: 1320 + 24,
  sableyemega: 1320 + 25,
  mawilemega: 1320 + 26,
  aggronmega: 1320 + 27,
  medichammega: 1320 + 28,
  manectricmega: 1320 + 29,
  sharpedomega: 1320 + 30,
  cameruptmega: 1320 + 31,
  altariamega: 1320 + 32,
  banettemega: 1320 + 33,
  absolmega: 1320 + 34,
  glaliemega: 1320 + 35,
  salamencemega: 1320 + 36,
  metagrossmega: 1320 + 37,
  latiasmega: 1320 + 38,
  latiosmega: 1320 + 39,
  kyogreprimal: 1320 + 40,
  groudonprimal: 1320 + 41,
  rayquazamega: 1320 + 42,
  lopunnymega: 1320 + 43,
  garchompmega: 1320 + 44,
  lucariomega: 1320 + 45,
  abomasnowmega: 1320 + 46,
  gallademega: 1320 + 47,
  audinomega: 1320 + 48,
  dianciemega: 1320 + 49,
  charizardgmax: 1320 + 50,
  butterfreegmax: 1320 + 51,
  pikachugmax: 1320 + 52,
  meowthgmax: 1320 + 53,
  machampgmax: 1320 + 54,
  gengargmax: 1320 + 55,
  kinglergmax: 1320 + 56,
  laprasgmax: 1320 + 57,
  eeveegmax: 1320 + 58,
  snorlaxgmax: 1320 + 59,
  garbodorgmax: 1320 + 60,
  melmetalgmax: 1320 + 61,
  corviknightgmax: 1320 + 62,
  orbeetlegmax: 1320 + 63,
  drednawgmax: 1320 + 64,
  coalossalgmax: 1320 + 65,
  flapplegmax: 1320 + 66,
  appletungmax: 1320 + 67,
  sandacondagmax: 1320 + 68,
  toxtricitygmax: 1320 + 69,
  centiskorchgmax: 1320 + 70,
  hatterenegmax: 1320 + 71,
  grimmsnarlgmax: 1320 + 72,
  alcremiegmax: 1320 + 73,
  copperajahgmax: 1320 + 74,
  duraludongmax: 1320 + 75,
  eternatuseternamax: 1320 + 76,
  venusaurgmax: 1320 + 77,
  blastoisegmax: 1320 + 78,
  rillaboomgmax: 1320 + 79,
  cinderacegmax: 1320 + 80,
  inteleongmax: 1320 + 81,
  urshifugmax: 1320 + 82,
  urshifurapidstrikegmax: 1320 + 83,
  clefablemega: 1320 + 84,
  victreebelmega: 1320 + 85,
  starmiemega: 1320 + 86,
  dragonitemega: 1320 + 87,
  meganiummega: 1320 + 88,
  feraligatrmega: 1320 + 89,
  skarmorymega: 1320 + 90,
  froslassmega: 1320 + 91,
  emboarmega: 1320 + 92,
  excadrillmega: 1320 + 93,
  scolipedemega: 1320 + 94,
  scraftymega: 1320 + 95,
  eelektrossmega: 1320 + 96,
  chandeluremega: 1320 + 97,
  chesnaughtmega: 1320 + 98,
  delphoxmega: 1320 + 99,
  greninjamega: 1320 + 100,
  pyroarmega: 1320 + 101,
  floettemega: 1320 + 102,
  malamarmega: 1320 + 103,
  barbaraclemega: 1320 + 104,
  dragalgemega: 1320 + 105,
  hawluchamega: 1320 + 106,
  zygardemega: 1320 + 107,
  drampamega: 1320 + 108,
  falinksmega: 1320 + 109,
  raichumegax: 1320 + 110,
  raichumegay: 1320 + 111,
  chimechomega: 1320 + 112,
  absolmegaz: 1320 + 113,
  staraptormega: 1320 + 114,
  garchompmegaz: 1320 + 115,
  lucariomegaz: 1320 + 116,
  heatranmega: 1320 + 117,
  darkraimega: 1320 + 118,
  golurkmega: 1320 + 119,
  meowsticmmega: 1320 + 120,
  meowsticfmega: 1320 + 120,
  crabominablemega: 1320 + 121,
  golisopodmega: 1320 + 122,
  magearnamega: 1320 + 123,
  magearnaoriginalmega: 1320 + 124,
  zeraoramega: 1320 + 125,
  scovillainmega: 1320 + 126,
  glimmoramega: 1320 + 127,
  tatsugiricurlymega: 1320 + 128,
  tatsugiridroopymega: 1320 + 129,
  tatsugiristretchymega: 1320 + 130,
  baxcaliburmega: 1320 + 131,
  // CAP
  syclant: 1560 + 0,
  revenankh: 1560 + 1,
  pyroak: 1560 + 2,
  fidgit: 1560 + 3,
  stratagem: 1560 + 4,
  arghonaut: 1560 + 5,
  kitsunoh: 1560 + 6,
  cyclohm: 1560 + 7,
  colossoil: 1560 + 8,
  krilowatt: 1560 + 9,
  voodoom: 1560 + 10,
  tomohawk: 1560 + 11,
  necturna: 1560 + 12,
  mollux: 1560 + 13,
  aurumoth: 1560 + 14,
  malaconda: 1560 + 15,
  cawmodore: 1560 + 16,
  volkraken: 1560 + 17,
  plasmanta: 1560 + 18,
  naviathan: 1560 + 19,
  crucibelle: 1560 + 20,
  crucibellemega: 1560 + 21,
  kerfluffle: 1560 + 22,
  pajantom: 1560 + 23,
  jumbao: 1560 + 24,
  caribolt: 1560 + 25,
  smokomodo: 1560 + 26,
  snaelstrom: 1560 + 27,
  equilibra: 1560 + 28,
  astrolotl: 1560 + 29,
  miasmaw: 1560 + 30,
  chromera: 1560 + 31,
  venomicon: 1560 + 32,
  venomiconepilogue: 1560 + 33,
  saharaja: 1560 + 34,
  hemogoblin: 1560 + 35,
  syclar: 1560 + 36,
  embirch: 1560 + 37,
  flarelm: 1560 + 38,
  breezi: 1560 + 39,
  scratchet: 1560 + 40,
  necturine: 1560 + 41,
  cupra: 1560 + 42,
  argalis: 1560 + 43,
  brattler: 1560 + 44,
  cawdet: 1560 + 45,
  volkritter: 1560 + 46,
  snugglow: 1560 + 47,
  floatoy: 1560 + 48,
  caimanoe: 1560 + 49,
  pluffle: 1560 + 50,
  rebble: 1560 + 51,
  tactite: 1560 + 52,
  privatyke: 1560 + 53,
  nohface: 1560 + 54,
  monohm: 1560 + 55,
  duohm: 1560 + 56,
  protowatt: 1560 + 57,
  voodoll: 1560 + 58,
  mumbao: 1560 + 59,
  fawnifer: 1560 + 60,
  electrelk: 1560 + 61,
  smogecko: 1560 + 62,
  smoguana: 1560 + 63,
  swirlpool: 1560 + 64,
  coribalis: 1560 + 65,
  justyke: 1560 + 66,
  solotl: 1560 + 67,
  miasmite: 1560 + 68,
  dorsoil: 1560 + 69,
  saharascal: 1560 + 70,
  ababo: 1560 + 71,
  scattervein: 1560 + 72,
  cresceidon: 1560 + 73,
  chuggalong: 1560 + 74,
  shox: 1560 + 75,
  chuggon: 1560 + 76,
  draggalong: 1560 + 77,
  ramnarok: 1560 + 78,
  ramnarokradiant: 1560 + 79,
  flox: 1560 + 80,
  obliteryx: 1560 + 81
};
const BattlePokemonIconIndexesLeft = {
  pikachubelle: 1452 + 0,
  pikachupopstar: 1452 + 1,
  clefairy: 1452 + 2,
  clefable: 1452 + 3,
  jigglypuff: 1452 + 4,
  wigglytuff: 1452 + 5,
  dugtrioalola: 1452 + 6,
  poliwhirl: 1452 + 7,
  poliwrath: 1452 + 8,
  mukalola: 1452 + 9,
  kingler: 1452 + 10,
  croconaw: 1452 + 11,
  cleffa: 1452 + 12,
  igglybuff: 1452 + 13,
  politoed: 1452 + 14,
  unownb: 1452 + 15,
  unownc: 1452 + 16,
  unownd: 1452 + 17,
  unowne: 1452 + 18,
  unownf: 1452 + 19,
  unowng: 1452 + 20,
  unownh: 1452 + 21,
  unownj: 1452 + 22,
  unownk: 1452 + 23,
  unownl: 1452 + 24,
  unownm: 1452 + 25,
  unownn: 1452 + 26,
  unownp: 1452 + 27,
  unownq: 1452 + 28,
  unownquestion: 1452 + 29,
  unownr: 1452 + 30,
  unowns: 1452 + 31,
  unownt: 1452 + 32,
  unownv: 1452 + 33,
  unownz: 1452 + 34,
  sneasel: 1452 + 35,
  teddiursa: 1452 + 36,
  roselia: 1452 + 37,
  zangoose: 1452 + 38,
  seviper: 1452 + 39,
  castformsnowy: 1452 + 40,
  absolmega: 1452 + 41,
  absol: 1452 + 42,
  regirock: 1452 + 43,
  torterra: 1452 + 44,
  budew: 1452 + 45,
  roserade: 1452 + 46,
  magmortar: 1452 + 47,
  togekiss: 1452 + 48,
  rotomwash: 1452 + 49,
  shayminsky: 1452 + 50,
  emboar: 1452 + 51,
  pansear: 1452 + 52,
  simisear: 1452 + 53,
  drilbur: 1452 + 54,
  excadrill: 1452 + 55,
  sawk: 1452 + 56,
  lilligant: 1452 + 57,
  garbodor: 1452 + 58,
  solosis: 1452 + 59,
  vanilluxe: 1452 + 60,
  amoonguss: 1452 + 61,
  klink: 1452 + 62,
  klang: 1452 + 63,
  klinklang: 1452 + 64,
  litwick: 1452 + 65,
  golett: 1452 + 66,
  golurk: 1452 + 67,
  kyuremblack: 1452 + 68,
  kyuremwhite: 1452 + 69,
  kyurem: 1452 + 70,
  keldeoresolute: 1452 + 71,
  meloetta: 1452 + 72,
  greninja: 1452 + 73,
  greninjabond: 1452 + 73,
  greninjaash: 1452 + 74,
  furfroudebutante: 1452 + 75,
  barbaracle: 1452 + 76,
  clauncher: 1452 + 77,
  clawitzer: 1452 + 78,
  sylveon: 1452 + 79,
  klefki: 1452 + 80,
  zygarde: 1452 + 81,
  zygarde10: 1452 + 82,
  zygardecomplete: 1452 + 83,
  dartrix: 1452 + 84,
  steenee: 1452 + 85,
  tsareena: 1452 + 86,
  comfey: 1452 + 87,
  miniormeteor: 1452 + 88,
  minior: 1452 + 89,
  miniororange: 1452 + 90,
  minioryellow: 1452 + 91,
  miniorgreen: 1452 + 92,
  miniorblue: 1452 + 93,
  miniorviolet: 1452 + 94,
  miniorindigo: 1452 + 95,
  dhelmise: 1452 + 96,
  necrozma: 1452 + 97,
  marshadow: 1452 + 98,
  pikachuoriginal: 1452 + 99,
  pikachupartner: 1452 + 100,
  necrozmaduskmane: 1452 + 101,
  necrozmadawnwings: 1452 + 102,
  necrozmaultra: 1452 + 103,
  stakataka: 1452 + 104,
  blacephalon: 1452 + 105
};

/** Back-compat for the old number-based avatar system. */
const BattleAvatarNumbers = {
  1: 'lucas',
  2: 'dawn',
  3: 'youngster-gen4dp',
  4: 'lass-gen4dp',
  5: 'camper',
  6: 'picnicker',
  7: 'bugcatcher-gen4dp',
  8: 'aromalady',
  9: 'twins-gen4dp',
  10: 'hiker-gen4',
  11: 'battlegirl-gen4',
  12: 'fisherman-gen4',
  13: 'cyclist-gen4',
  14: 'cyclistf-gen4',
  15: 'blackbelt-gen4dp',
  16: 'artist-gen4',
  17: 'pokemonbreeder-gen4',
  18: 'pokemonbreederf-gen4',
  19: 'cowgirl',
  20: 'jogger',
  21: 'pokefan-gen4',
  22: 'pokefanf-gen4',
  23: 'pokekid',
  24: 'youngcouple-gen4dp',
  25: 'acetrainer-gen4dp',
  26: 'acetrainerf-gen4dp',
  27: 'waitress-gen4',
  28: 'veteran-gen4',
  29: 'ninjaboy',
  30: 'dragontamer',
  31: 'birdkeeper-gen4dp',
  32: 'doubleteam',
  33: 'richboy-gen4',
  34: 'lady-gen4',
  35: 'gentleman-gen4dp',
  36: 'madame-gen4dp',
  37: 'beauty-gen4dp',
  38: 'collector',
  39: 'policeman-gen4',
  40: 'pokemonranger-gen4',
  41: 'pokemonrangerf-gen4',
  42: 'scientist-gen4dp',
  43: 'swimmer-gen4dp',
  44: 'swimmerf-gen4dp',
  45: 'tuber',
  46: 'tuberf',
  47: 'sailor',
  48: 'sisandbro',
  49: 'ruinmaniac',
  50: 'psychic-gen4',
  51: 'psychicf-gen4',
  52: 'gambler',
  53: 'guitarist-gen4',
  54: 'acetrainersnow',
  55: 'acetrainersnowf',
  56: 'skier',
  57: 'skierf-gen4dp',
  58: 'roughneck-gen4',
  59: 'clown',
  60: 'worker-gen4',
  61: 'schoolkid-gen4dp',
  62: 'schoolkidf-gen4',
  63: 'roark',
  64: 'barry',
  65: 'byron',
  66: 'aaron',
  67: 'bertha',
  68: 'flint',
  69: 'lucian',
  70: 'cynthia-gen4',
  71: 'bellepa',
  72: 'rancher',
  73: 'mars',
  74: 'galacticgrunt',
  75: 'gardenia',
  76: 'crasherwake',
  77: 'maylene',
  78: 'fantina',
  79: 'candice',
  80: 'volkner',
  81: 'parasollady-gen4',
  82: 'waiter-gen4dp',
  83: 'interviewers',
  84: 'cameraman',
  85: 'reporter',
  86: 'idol',
  87: 'cyrus',
  88: 'jupiter',
  89: 'saturn',
  90: 'galacticgruntf',
  91: 'argenta',
  92: 'palmer',
  93: 'thorton',
  94: 'buck',
  95: 'darach-caitlin',
  96: 'marley',
  97: 'mira',
  98: 'cheryl',
  99: 'riley',
  100: 'dahlia',
  101: 'ethan',
  102: 'lyra',
  103: 'twins-gen4',
  104: 'lass-gen4',
  105: 'acetrainer-gen4',
  106: 'acetrainerf-gen4',
  107: 'juggler',
  108: 'sage',
  109: 'li',
  110: 'gentleman-gen4',
  111: 'teacher',
  112: 'beauty',
  113: 'birdkeeper',
  114: 'swimmer-gen4',
  115: 'swimmerf-gen4',
  116: 'kimonogirl',
  117: 'scientist-gen4',
  118: 'acetrainercouple',
  119: 'youngcouple',
  120: 'supernerd',
  121: 'medium',
  122: 'schoolkid-gen4',
  123: 'blackbelt-gen4',
  124: 'pokemaniac',
  125: 'firebreather',
  126: 'burglar',
  127: 'biker-gen4',
  128: 'skierf',
  129: 'boarder',
  130: 'rocketgrunt',
  131: 'rocketgruntf',
  132: 'archer',
  133: 'ariana',
  134: 'proton',
  135: 'petrel',
  136: 'eusine',
  137: 'lucas-gen4pt',
  138: 'dawn-gen4pt',
  139: 'madame-gen4',
  140: 'waiter-gen4',
  141: 'falkner',
  142: 'bugsy',
  143: 'whitney',
  144: 'morty',
  145: 'chuck',
  146: 'jasmine',
  147: 'pryce',
  148: 'clair',
  149: 'will',
  150: 'koga',
  151: 'bruno',
  152: 'karen',
  153: 'lance',
  154: 'brock',
  155: 'misty',
  156: 'ltsurge',
  157: 'erika',
  158: 'janine',
  159: 'sabrina',
  160: 'blaine',
  161: 'blue',
  162: 'red',
  163: 'red',
  164: 'silver',
  165: 'giovanni',
  166: 'unknownf',
  167: 'unknown',
  168: 'unknown',
  169: 'hilbert',
  170: 'hilda',
  171: 'youngster',
  172: 'lass',
  173: 'schoolkid',
  174: 'schoolkidf',
  175: 'smasher',
  176: 'linebacker',
  177: 'waiter',
  178: 'waitress',
  179: 'chili',
  180: 'cilan',
  181: 'cress',
  182: 'nurseryaide',
  183: 'preschoolerf',
  184: 'preschooler',
  185: 'twins',
  186: 'pokemonbreeder',
  187: 'pokemonbreederf',
  188: 'lenora',
  189: 'burgh',
  190: 'elesa',
  191: 'clay',
  192: 'skyla',
  193: 'pokemonranger',
  194: 'pokemonrangerf',
  195: 'worker',
  196: 'backpacker',
  197: 'backpackerf',
  198: 'fisherman',
  199: 'musician',
  200: 'dancer',
  201: 'harlequin',
  202: 'artist',
  203: 'baker',
  204: 'psychic',
  205: 'psychicf',
  206: 'cheren',
  207: 'bianca',
  208: 'plasmagrunt-gen5bw',
  209: 'n',
  210: 'richboy',
  211: 'lady',
  212: 'pilot',
  213: 'workerice',
  214: 'hoopster',
  215: 'scientistf',
  216: 'clerkf',
  217: 'acetrainerf',
  218: 'acetrainer',
  219: 'blackbelt',
  220: 'scientist',
  221: 'striker',
  222: 'brycen',
  223: 'iris',
  224: 'drayden',
  225: 'roughneck',
  226: 'janitor',
  227: 'pokefan',
  228: 'pokefanf',
  229: 'doctor',
  230: 'nurse',
  231: 'hooligans',
  232: 'battlegirl',
  233: 'parasollady',
  234: 'clerk',
  235: 'clerk-boss',
  236: 'backers',
  237: 'backersf',
  238: 'veteran',
  239: 'veteranf',
  240: 'biker',
  241: 'infielder',
  242: 'hiker',
  243: 'madame',
  244: 'gentleman',
  245: 'plasmagruntf-gen5bw',
  246: 'shauntal',
  247: 'marshal',
  248: 'grimsley',
  249: 'caitlin',
  250: 'ghetsis-gen5bw',
  251: 'depotagent',
  252: 'swimmer',
  253: 'swimmerf',
  254: 'policeman',
  255: 'maid',
  256: 'ingo',
  257: 'alder',
  258: 'cyclist',
  259: 'cyclistf',
  260: 'cynthia',
  261: 'emmet',
  262: 'hilbert-wonderlauncher',
  263: 'hilda-wonderlauncher',
  264: 'hugh',
  265: 'rosa',
  266: 'nate',
  267: 'colress',
  268: 'beauty-gen5bw2',
  269: 'ghetsis',
  270: 'plasmagrunt',
  271: 'plasmagruntf',
  272: 'iris-gen5bw2',
  273: 'brycenman',
  274: 'shadowtriad',
  275: 'rood',
  276: 'zinzolin',
  277: 'cheren-gen5bw2',
  278: 'marlon',
  279: 'roxie',
  280: 'roxanne',
  281: 'brawly',
  282: 'wattson',
  283: 'flannery',
  284: 'norman',
  285: 'winona',
  286: 'tate',
  287: 'liza',
  288: 'juan',
  289: 'guitarist',
  290: 'steven',
  291: 'wallace',
  292: 'bellelba',
  293: 'benga',
  294: 'ash',
  '#bw2elesa': 'elesa-gen5bw2',
  '#teamrocket': 'teamrocket',
  '#yellow': 'yellow',
  '#zinnia': 'zinnia',
  '#clemont': 'clemont',
  '#wally': 'wally',
  breeder: 'pokemonbreeder',
  breederf: 'pokemonbreederf',
  'hilbert-dueldisk': 'hilbert-wonderlauncher',
  'hilda-dueldisk': 'hilda-wonderlauncher',
  'nate-dueldisk': 'nate-wonderlauncher',
  'rosa-dueldisk': 'rosa-wonderlauncher',
  1001: '#1001',
  1002: '#1002',
  1003: '#1003',
  1005: '#1005',
  1010: '#1010'
};
class PureEffect {
  effectType = 'PureEffect';
  id;
  name;
  gen;
  exists;
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.gen = 0;
    this.exists = false;
  }
}
class Item {
  // effect
  effectType = 'Item';
  id;
  name;
  gen;
  exists;
  num;
  spritenum;
  desc;
  shortDesc;
  megaStone;
  zMove;
  zMoveType;
  zMoveFrom;
  zMoveUser;
  onPlate;
  onMemory;
  onDrive;
  fling;
  naturalGift;
  isPokeball;
  itemUser;
  constructor(id, name, data) {
    if (!data || typeof data !== 'object') data = {};
    if (data.name) name = data.name;
    this.name = Dex.sanitizeName(name);
    this.id = id;
    this.gen = data.gen || 0;
    this.exists = 'exists' in data ? !!data.exists : true;
    this.num = data.num || 0;
    this.spritenum = data.spritenum || 0;
    this.desc = data.desc || data.shortDesc || '';
    this.shortDesc = data.shortDesc || this.desc;
    this.megaStone = data.megaStone || null;
    this.zMove = data.zMove || null;
    this.zMoveType = data.zMoveType || '';
    this.zMoveFrom = data.zMoveFrom || '';
    this.zMoveUser = data.zMoveUser || null;
    this.onPlate = data.onPlate || '';
    this.onMemory = data.onMemory || '';
    this.onDrive = data.onDrive || '';
    this.fling = data.fling || null;
    this.naturalGift = data.naturalGift || null;
    this.isPokeball = !!data.isPokeball;
    this.itemUser = data.itemUser;
    if (!this.gen) {
      if (this.num >= 577) {
        this.gen = 6;
      } else if (this.num >= 537) {
        this.gen = 5;
      } else if (this.num >= 377) {
        this.gen = 4;
      } else {
        this.gen = 3;
      }
    }
  }
}
// side and field

class Move {
  // effect
  effectType = 'Move';
  id;
  name;
  gen;
  exists;
  basePower;
  accuracy;
  pp;
  type;
  category;
  priority;
  target;
  pressureTarget;
  flags;
  critRatio;
  damage;
  desc;
  shortDesc;
  isNonstandard;
  isZ;
  zMove;
  isMax;
  maxMove;
  ohko;
  recoil;
  heal;
  multihit;
  hasCrashDamage;
  basePowerCallback;
  noPPBoosts;
  status;
  secondaries;
  num;
  constructor(id, name, data) {
    if (!data || typeof data !== 'object') data = {};
    if (data.name) name = data.name;
    this.name = Dex.sanitizeName(name);
    this.id = id;
    this.gen = data.gen || 0;
    this.exists = 'exists' in data ? !!data.exists : true;
    this.basePower = data.basePower || 0;
    this.accuracy = data.accuracy || 0;
    this.pp = data.pp || 1;
    this.type = data.type || '???';
    this.category = data.category || 'Physical';
    this.priority = data.priority || 0;
    this.target = data.target || 'normal';
    this.pressureTarget = data.pressureTarget || this.target;
    this.flags = data.flags || {};
    this.critRatio = data.critRatio === 0 ? 0 : data.critRatio || 1;
    this.damage = data.damage;

    // TODO: move to text.js
    this.desc = data.desc;
    this.shortDesc = data.shortDesc;
    this.isNonstandard = data.isNonstandard || null;
    this.isZ = data.isZ || '';
    this.zMove = data.zMove || {};
    this.ohko = data.ohko || null;
    this.recoil = data.recoil || null;
    this.heal = data.heal || null;
    this.multihit = data.multihit || null;
    this.hasCrashDamage = data.hasCrashDamage || false;
    this.basePowerCallback = !!data.basePowerCallback;
    this.noPPBoosts = data.noPPBoosts || false;
    this.status = data.status || '';
    this.secondaries = data.secondaries || (data.secondary ? [data.secondary] : null);
    this.isMax = data.isMax || false;
    this.maxMove = data.maxMove || {
      basePower: 0
    };
    if (this.category !== 'Status' && !this.maxMove?.basePower) {
      if (this.isZ || this.isMax) {
        this.maxMove = {
          basePower: 1
        };
      } else if (!this.basePower) {
        this.maxMove = {
          basePower: 100
        };
      } else if (['Fighting', 'Poison'].includes(this.type)) {
        if (this.basePower >= 150) {
          this.maxMove = {
            basePower: 100
          };
        } else if (this.basePower >= 110) {
          this.maxMove = {
            basePower: 95
          };
        } else if (this.basePower >= 75) {
          this.maxMove = {
            basePower: 90
          };
        } else if (this.basePower >= 65) {
          this.maxMove = {
            basePower: 85
          };
        } else if (this.basePower >= 55) {
          this.maxMove = {
            basePower: 80
          };
        } else if (this.basePower >= 45) {
          this.maxMove = {
            basePower: 75
          };
        } else {
          this.maxMove = {
            basePower: 70
          };
        }
      } else {
        if (this.basePower >= 150) {
          this.maxMove = {
            basePower: 150
          };
        } else if (this.basePower >= 110) {
          this.maxMove = {
            basePower: 140
          };
        } else if (this.basePower >= 75) {
          this.maxMove = {
            basePower: 130
          };
        } else if (this.basePower >= 65) {
          this.maxMove = {
            basePower: 120
          };
        } else if (this.basePower >= 55) {
          this.maxMove = {
            basePower: 110
          };
        } else if (this.basePower >= 45) {
          this.maxMove = {
            basePower: 100
          };
        } else {
          this.maxMove = {
            basePower: 90
          };
        }
      }
    }
    if (this.category !== 'Status' && !this.isZ && !this.isMax) {
      let basePower = this.basePower;
      this.zMove = {};
      if (Array.isArray(this.multihit)) basePower *= 3;
      if (!basePower) {
        this.zMove.basePower = 100;
      } else if (basePower >= 140) {
        this.zMove.basePower = 200;
      } else if (basePower >= 130) {
        this.zMove.basePower = 195;
      } else if (basePower >= 120) {
        this.zMove.basePower = 190;
      } else if (basePower >= 110) {
        this.zMove.basePower = 185;
      } else if (basePower >= 100) {
        this.zMove.basePower = 180;
      } else if (basePower >= 90) {
        this.zMove.basePower = 175;
      } else if (basePower >= 80) {
        this.zMove.basePower = 160;
      } else if (basePower >= 70) {
        this.zMove.basePower = 140;
      } else if (basePower >= 60) {
        this.zMove.basePower = 120;
      } else {
        this.zMove.basePower = 100;
      }
      if (data.zMove) this.zMove.basePower = data.zMove.basePower;
    }
    this.num = data.num || 0;
    if (!this.gen) {
      if (this.num >= 743) {
        this.gen = 8;
      } else if (this.num >= 622) {
        this.gen = 7;
      } else if (this.num >= 560) {
        this.gen = 6;
      } else if (this.num >= 468) {
        this.gen = 5;
      } else if (this.num >= 355) {
        this.gen = 4;
      } else if (this.num >= 252) {
        this.gen = 3;
      } else if (this.num >= 166) {
        this.gen = 2;
      } else if (this.num >= 1) {
        this.gen = 1;
      }
    }
  }
}
class Ability {
  // effect
  effectType = 'Ability';
  id;
  name;
  gen;
  exists;
  num;
  shortDesc;
  desc;
  rating;
  flags;
  isNonstandard;
  constructor(id, name, data) {
    if (!data || typeof data !== 'object') data = {};
    if (data.name) name = data.name;
    this.name = Dex.sanitizeName(name);
    this.id = id;
    this.gen = data.gen || 0;
    this.exists = 'exists' in data ? !!data.exists : true;
    this.num = data.num || 0;
    this.shortDesc = data.shortDesc || data.desc || '';
    this.desc = data.desc || data.shortDesc || '';
    this.rating = data.rating || 1;
    this.flags = data.flags || {};
    this.isNonstandard = !!data.isNonstandard;
    if (!this.gen) {
      if (this.num >= 234) {
        this.gen = 8;
      } else if (this.num >= 192) {
        this.gen = 7;
      } else if (this.num >= 165) {
        this.gen = 6;
      } else if (this.num >= 124) {
        this.gen = 5;
      } else if (this.num >= 77) {
        this.gen = 4;
      } else if (this.num >= 1) {
        this.gen = 3;
      }
    }
  }
}
class Species {
  // effect
  effectType = 'Species';
  id;
  name;
  gen;
  exists;

  // name
  baseSpecies;
  forme;
  formeid;
  spriteid;
  baseForme;

  // basic data
  num;
  types;
  abilities;
  baseStats;
  bst;
  weightkg;

  // flavor data
  heightm;
  gender;
  color;
  genderRatio;
  eggGroups;
  tags;

  // format data
  otherFormes;
  cosmeticFormes;
  evos;
  prevo;
  evoType;
  evoLevel;
  evoMove;
  evoItem;
  evoCondition;
  nfe;
  requiredItems;
  tier;
  isTotem;
  isMega;
  isPrimal;
  canGigantamax;
  cannotDynamax;
  requiredTeraType;
  battleOnly;
  isNonstandard;
  unreleasedHidden;
  changesFrom;
  constructor(id, name, data) {
    if (!data || typeof data !== 'object') data = {};
    if (data.name) name = data.name;
    this.name = Dex.sanitizeName(name);
    this.id = id;
    this.gen = data.gen || 0;
    this.exists = 'exists' in data ? !!data.exists : true;
    this.baseSpecies = data.baseSpecies || name;
    this.forme = data.forme || '';
    const baseId = toID(this.baseSpecies);
    this.formeid = baseId === this.id ? '' : '-' + toID(this.forme);
    this.spriteid = baseId + this.formeid;
    if (this.spriteid.endsWith('totem')) this.spriteid = this.spriteid.slice(0, -5);
    if (this.spriteid === 'greninja-bond') this.spriteid = 'greninja';
    if (this.spriteid === 'rockruff-dusk') this.spriteid = 'rockruff';
    if (this.spriteid.endsWith('-')) this.spriteid = this.spriteid.slice(0, -1);
    this.baseForme = data.baseForme || '';
    this.num = data.num || 0;
    this.types = data.types || ['???'];
    this.abilities = data.abilities || {
      0: "No Ability"
    };
    this.baseStats = data.baseStats || {
      hp: 0,
      atk: 0,
      def: 0,
      spa: 0,
      spd: 0,
      spe: 0
    };
    this.bst = this.baseStats.hp + this.baseStats.atk + this.baseStats.def + this.baseStats.spa + this.baseStats.spd + this.baseStats.spe;
    this.weightkg = data.weightkg || 0;
    this.heightm = data.heightm || 0;
    this.gender = data.gender || '';
    this.color = data.color || '';
    this.genderRatio = data.genderRatio || null;
    this.eggGroups = data.eggGroups || [];
    this.tags = data.tags || [];
    this.otherFormes = data.otherFormes || null;
    this.cosmeticFormes = data.cosmeticFormes || null;
    this.evos = data.evos || null;
    this.prevo = data.prevo || '';
    this.evoType = data.evoType || '';
    this.evoLevel = data.evoLevel || 0;
    this.evoMove = data.evoMove || '';
    this.evoItem = data.evoItem || '';
    this.evoCondition = data.evoCondition || '';
    this.nfe = data.nfe || false;
    this.requiredItems = data.requiredItems || (data.requiredItem ? [data.requiredItem] : []);
    this.tier = data.tier || '';
    this.isTotem = false;
    this.isMega = !!(this.forme && this.formeid.includes('mega'));
    this.isPrimal = !!(this.forme && this.formeid === '-primal');
    this.canGigantamax = !!data.canGigantamax;
    this.cannotDynamax = !!data.cannotDynamax;
    this.requiredTeraType = data.requiredTeraType || '';
    this.battleOnly = data.battleOnly || (this.isMega ? this.baseSpecies : undefined);
    this.isNonstandard = data.isNonstandard || null;
    this.unreleasedHidden = data.unreleasedHidden || false;
    this.changesFrom = data.changesFrom || (this.battleOnly !== this.baseSpecies ? this.battleOnly : this.baseSpecies);
    if (!this.gen) {
      if (this.num >= 906 || this.formeid.startsWith('-paldea')) {
        this.gen = 9;
      } else if (this.num >= 810 || this.formeid.startsWith('-galar') || this.formeid.startsWith('-hisui')) {
        this.gen = 8;
      } else if (this.num >= 722 || this.formeid === '-alola' || this.formeid === '-starter') {
        this.gen = 7;
      } else if (this.isMega || this.isPrimal) {
        this.gen = 6;
        this.battleOnly = this.baseSpecies;
      } else if (this.formeid === '-totem' || this.formeid === '-alolatotem') {
        this.gen = 7;
        this.isTotem = true;
      } else if (this.num >= 650) {
        this.gen = 6;
      } else if (this.num >= 494) {
        this.gen = 5;
      } else if (this.num >= 387) {
        this.gen = 4;
      } else if (this.num >= 252) {
        this.gen = 3;
      } else if (this.num >= 152) {
        this.gen = 2;
      } else if (this.num >= 1) {
        this.gen = 1;
      }
    }
  }
}
if (typeof require === 'function') {
  // in Node
  global.BattleBaseSpeciesChart = BattleBaseSpeciesChart;
  global.BattleNatures = BattleNatures;
  global.PureEffect = PureEffect;
  global.Species = Species;
  global.Ability = Ability;
  global.Item = Item;
  global.Move = Move;
  global.BattleFormat = BattleFormat;
}
/**
 * Pokemon Showdown Dex
 *
 * Roughly equivalent to sim/dex.js in a Pokemon Showdown server, but
 * designed for use in browsers rather than in Node.
 *
 * This is a generic utility library for Pokemon Showdown code: any
 * code shared between the replay viewer and the client usually ends up
 * here.
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * Compiled into battledata.js which includes all dependencies
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

if (typeof window === 'undefined') {
  // Node
  global.window = global;
} else {
  // browser (possibly NW.js!)
  window.exports = window;
}
window.nodewebkit = !!(typeof process !== 'undefined' && process.versions?.['node-webkit']);
function toID(text) {
  if (text?.id) {
    text = text.id;
  } else if (text?.userid) {
    text = text.userid;
  }
  if (typeof text !== 'string' && typeof text !== 'number') return '';
  return `${text}`.toLowerCase().replace(/[^a-z0-9]+/g, '');
}
function toUserid(text) {
  return toID(text);
}
const TEXT_LANGUAGES = [{
  code: "en",
  legacyId: "english",
  name: "English",
  fullName: "English"
}, {
  code: "de",
  legacyId: "german",
  name: "Deutsch",
  fullName: "Deutsch (German)"
}, {
  code: "es",
  legacyId: "spanish",
  name: "Español",
  fullName: "Español (Spanish)"
}, {
  code: "fr",
  legacyId: "french",
  name: "Français",
  fullName: "Français (French)"
}, {
  code: "it",
  legacyId: "italian",
  name: "Italiano",
  fullName: "Italiano (Italian)"
}, {
  code: "nl",
  legacyId: "dutch",
  name: "Nederlands",
  fullName: "Nederlands (Dutch)"
}, {
  code: "pt",
  legacyId: "portuguese",
  name: "Português",
  fullName: "Português (Portuguese)"
}, {
  code: "tr",
  legacyId: "turkish",
  name: "Türkçe",
  fullName: "Türkçe (Turkish)"
}, {
  code: "hi",
  legacyId: "hindi",
  name: "हिंदी",
  fullName: "हिंदी (Hindi)"
}, {
  code: "ja",
  legacyId: "japanese",
  name: "日本語",
  fullName: "日本語 (Japanese)"
}, {
  code: "zh-cn",
  legacyId: "simplifiedchinese",
  name: "简体中文",
  fullName: "简体中文 (Simplified Chinese)"
}, {
  code: "zh-tw",
  legacyId: "traditionalchinese",
  name: "繁體中文",
  fullName: "繁體中文 (Traditional Chinese)"
}, {
  code: "ko",
  legacyId: "korean",
  name: "한국어",
  fullName: "한국어 (Korean)"
}];
const TEXT_LANGUAGE_TABLE = {};
for (const lang of TEXT_LANGUAGES) {
  TEXT_LANGUAGE_TABLE[toID(lang.code)] = lang;
  TEXT_LANGUAGE_TABLE[lang.code] = lang;
  TEXT_LANGUAGE_TABLE[lang.legacyId] = lang;
  TEXT_LANGUAGE_TABLE[lang.name] = lang;
  TEXT_LANGUAGE_TABLE[lang.name.toLowerCase()] = lang;
}
TEXT_LANGUAGE_TABLE['en-afd'] = {
  code: "en-afd",
  legacyId: "english",
  name: "English (AFD)",
  fullName: "English (AFD)"
};
const TEXT_TABLES = {
  Item: 'Items',
  Ability: 'Abilities',
  Move: 'Moves'
};
function translate(strings, ...values) {
  if (typeof strings !== 'string' && 'effectType' in strings) {
    return typeof BattleText === 'undefined' ? strings.name : Dex.text.get(strings).name;
  }
  let source;
  let context = '';
  if (typeof strings === 'string') {
    source = strings;
    if (values.length) context = values[0];
    values = [];
  } else {
    source = strings[0];
    for (let i = 1; i < strings.length; i++) {
      source += `{${i - 1}}${strings[i]}`;
    }
  }
  const translated = TL.inLanguage(source, Dex.text.getLanguage(), context);
  return translated.replace(/\{(\d+)\}/g, (placeholder, indexText) => {
    const index = Number(indexText);
    return index >= 0 && index < values.length ? String(values[index]) : placeholder;
  });
}
const initialText = typeof BattleText === 'undefined' ? undefined : BattleText.en;
function tagField(tags, field) {
  const table = {};
  for (const id in tags) {
    const value = tags[id][field];
    if (value) table[id] = value;
  }
  return table;
}
const TL = Object.assign(translate, {
  inLanguage(source, language, context = '') {
    const translation = typeof BattleUIText === 'undefined' ? undefined : BattleUIText[language]?.[source];
    const fallback = source.startsWith('[') && source.endsWith(']') ? source.slice(1, -1) : source;
    return (typeof translation === 'string' ? translation : translation?.[context]) ?? fallback;
  },
  /** `TL.label("Ability", "Intimidate")` === `"Ability: Intimidate"` */
  label(label, value) {
    const labelText = TL`${label}: `;
    return value === undefined ? labelText : labelText + String(value);
  },
  orList(items) {
    if (items.length <= 1) return items.join();
    if (items.length === 2) {
      return TL`${items[0]} or ${items[1]}`;
    }
    let list = items[0];
    for (const item of items.slice(1, -1)) list += TL`, ${item}`;
    const last = items[items.length - 1];
    return list + TL`, or ${last}`;
  },
  andList(items) {
    if (items.length <= 1) return items.join();
    if (items.length === 2) {
      return TL`${items[0]} and ${items[1]}`;
    }
    let list = items[0];
    for (const item of items.slice(1, -1)) list += TL`, ${item}`;
    const last = items[items.length - 1];
    return list + TL`, and ${last}`;
  },
  /** Asian translations use "person" counters, so don't use this for non-people */
  cappedUserList(items, cap) {
    if (items.length > cap + 1) {
      let list = items[0];
      for (const item of items.slice(1, cap)) list += TL`, ${item}`;
      const others = items.length - cap;
      return list + TL`, and ${others} others`;
    }
    return TL.andList(items);
  },
  type: initialText?.TypeNames || {},
  nature: initialText?.NatureNames || {},
  gender: initialText?.GenderNames || {},
  egggroup: initialText?.EggGroupNames || {},
  tag: tagField(initialText?.Tags, 'name'),
  tagHint: tagField(initialText?.Tags, 'hint'),
  color: initialText?.ColorNames || {},
  status: initialText?.StatusNames || {},
  target: initialText?.TargetNames || {},
  stat: initialText?.StatNames || {},
  statShort: initialText?.StatShortNames || {},
  statMedium: initialText?.StatMediumNames || {}
});
function updateTranslatedNames(lang) {
  if (lang !== Dex.text.getLanguage()) return;
  if (typeof BattleText === 'undefined') return;
  const english = BattleText.en;
  const text = BattleText[lang] || english;
  if (!text) return;
  TL.type = text.TypeNames || english?.TypeNames || {};
  TL.nature = text.NatureNames || english?.NatureNames || {};
  TL.gender = text.GenderNames || english?.GenderNames || {};
  TL.egggroup = text.EggGroupNames || english?.EggGroupNames || {};
  TL.tag = tagField(text.Tags || english?.Tags, 'name');
  TL.tagHint = tagField(text.Tags || english?.Tags, 'hint');
  TL.color = text.ColorNames || english?.ColorNames || {};
  TL.status = text.StatusNames || english?.StatusNames || {};
  TL.target = text.TargetNames || english?.TargetNames || {};
  TL.stat = text.StatNames || english?.StatNames || {};
  TL.statShort = text.StatShortNames || english?.StatShortNames || {};
  TL.statMedium = text.StatMediumNames || english?.StatMediumNames || {};
}
function assignTextFields(target, source) {
  for (const [key, value] of Object.entries(source)) {
    if (value !== null) target[key] = value;
  }
}
function getOtherName(table, name, lang) {
  return BattleText[lang]?.[table]?.[name] || BattleText.en?.[table]?.[name] || name;
}

/**
 * Does actually match ClientEffectTextEntry exactly.
 */
function getTextEntry(effect, modid, gen, lang) {
  if (effect.effectType === 'Species') {
    const entry = BattleText[lang]?.Pokedex?.[effect.id] || BattleText.en?.Pokedex?.[effect.id];
    return {
      name: entry?.name || effect.name,
      baseSpecies: entry?.baseSpecies || effect.baseSpecies,
      forme: entry?.forme || null
    };
  }
  if (effect.effectType === 'Type') {
    return {
      name: getOtherName('TypeNames', effect.name, lang)
    };
  }
  if (effect.effectType === 'Nature') {
    return {
      name: getOtherName('NatureNames', effect.name, lang)
    };
  }
  const tableName = TEXT_TABLES[effect.effectType];
  const english = BattleText.en?.[tableName]?.[effect.id] || {};
  const localized = BattleText[lang]?.[tableName]?.[effect.id] || {};
  const entry = {};
  assignTextFields(entry, english);
  assignTextFields(entry, localized);
  for (let i = 1; i < Dex.gen; i++) {
    const genName = `gen${i}`;
    const englishGen = english[genName];
    const localizedGen = localized[genName];
    if (typeof englishGen === 'object' || typeof localizedGen === 'object') {
      const genEntry = {};
      if (englishGen && typeof englishGen === 'object') assignTextFields(genEntry, englishGen);
      if (localizedGen && typeof localizedGen === 'object') assignTextFields(genEntry, localizedGen);
      entry[genName] = genEntry;
    }
  }
  for (let i = Dex.gen - 1; i >= gen; i--) {
    const genName = `gen${i}`;
    const englishGen = english[genName];
    const localizedGen = localized[genName];
    if (englishGen && typeof englishGen === 'object') assignTextFields(entry, englishGen);
    if (localizedGen && typeof localizedGen === 'object') assignTextFields(entry, localizedGen);
  }
  if (!/^gen\d+$/.test(modid)) {
    const englishMod = english[modid];
    const localizedMod = localized[modid];
    if (englishMod && typeof englishMod === 'object') assignTextFields(entry, englishMod);
    if (localizedMod && typeof localizedMod === 'object') assignTextFields(entry, localizedMod);
  }
  if (typeof entry.name !== 'string') entry.name = effect.name;
  if (typeof entry.desc !== 'string') entry.desc = typeof entry.shortDesc === 'string' ? entry.shortDesc : '';
  if (typeof entry.shortDesc !== 'string') entry.shortDesc = entry.desc;
  return entry;
}
const PSUtils = new class {
  /**
   * Like string.split(delimiter), but only recognizes the first `limit`
   * delimiters (default 1).
   *
   * `"1 2 3 4".split(" ", 2) => ["1", "2"]`
   *
   * `splitFirst("1 2 3 4", " ", 1) => ["1", "2 3 4"]`
   *
   * Returns an array of length exactly limit + 1.
   */
  splitFirst(str, delimiter, limit = 1) {
    let splitStr = [];
    while (splitStr.length < limit) {
      let delimiterIndex = str.indexOf(delimiter);
      if (delimiterIndex >= 0) {
        splitStr.push(str.slice(0, delimiterIndex));
        str = str.slice(delimiterIndex + delimiter.length);
      } else {
        splitStr.push(str);
        str = '';
      }
    }
    splitStr.push(str);
    return splitStr;
  }

  /**
   * Compares two variables; intended to be used as a smarter comparator.
   * The two variables must be the same type (TypeScript will not check this).
   *
   * - Numbers are sorted low-to-high, use `-val` to reverse
   * - Strings are sorted A to Z case-semi-insensitively, use `{reverse: val}` to reverse
   * - Booleans are sorted true-first (REVERSE of casting to numbers), use `!val` to reverse
   * - Arrays are sorted lexically in the order of their elements
   *
   * In other words: `[num, str]` will be sorted A to Z, `[num, {reverse: str}]` will be sorted Z to A.
   */
  compare(a, b) {
    if (typeof a === 'number') {
      return a - b;
    }
    if (typeof a === 'string') {
      return a.localeCompare(b);
    }
    if (typeof a === 'boolean') {
      return (a ? 1 : 2) - (b ? 1 : 2);
    }
    if (Array.isArray(a)) {
      for (let i = 0; i < a.length; i++) {
        const comparison = PSUtils.compare(a[i], b[i]);
        if (comparison) return comparison;
      }
      return 0;
    }
    if (a.reverse) {
      return PSUtils.compare(b.reverse, a.reverse);
    }
    throw new Error(`Passed value ${a} is not comparable`);
  }
  /**
   * Sorts an array according to the callback's output on its elements.
   *
   * The callback's output is compared according to `PSUtils.compare` (in
   * particular, it supports arrays so you can sort by multiple things).
   */

  /**
   * Sorts an array according to `PSUtils.compare`. (Correctly sorts numbers,
   * unlike `array.sort`)
   */

  sortBy(array, callback) {
    if (!callback) return array.sort(PSUtils.compare);
    return array.sort((a, b) => PSUtils.compare(callback(a), callback(b)));
  }
  normalizeError(err) {
    const stack = err.stack || '';
    const messagePrefix = `${err.name}: ${err.message}`;

    // Firefox doesn't put the error message inside the stack trace,
    // but Chrome/Safari does
    if (stack && !stack.startsWith(messagePrefix)) {
      return `${messagePrefix}\n${stack}`;
    }
    return stack || messagePrefix;
  }
}();

/**
 * Sanitize a room ID by removing anything that isn't alphanumeric or `-`.
 * Shouldn't actually do anything except against malicious input.
 */
function toRoomid(roomid) {
  return roomid.replace(/[^a-zA-Z0-9-]+/g, '').toLowerCase();
}
function toName(name) {
  if (typeof name !== 'string' && typeof name !== 'number') return '';
  name = `${name}`.replace(/[|\s[\],\u202e]+/g, ' ').trim();
  if (name.length > 18) name = name.substr(0, 18).trim();

  // remove zalgo
  name = name.replace(/[\u0300-\u036f\u0483-\u0489\u0610-\u0615\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06ED\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]{3,}/g, '');
  name = name.replace(/[\u239b-\u23b9]/g, '');
  return name;
}
const Dex = new class {
  Ability = Ability;
  Item = Item;
  Move = Move;
  Species = Species;
  gen = 9;
  modid = 'gen9';
  cache = null;
  REGULAR = 0;
  WEAK = 1;
  RESIST = 2;
  IMMUNE = 3;
  statNames = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];
  statNamesExceptHP = ['atk', 'def', 'spa', 'spd', 'spe'];
  pokeballs = null;
  resourcePrefix = (() => {
    let prefix = '';
    if (window.document?.location?.protocol !== 'http:') prefix = 'https:';
    return `${prefix}//${window.Config ? Config.routes.client : 'play.pokemonshowdown.com'}/`;
  })();
  fxPrefix = (() => {
    const protocol = window.document?.location?.protocol !== 'http:' ? 'https:' : '';
    return `${protocol}//${window.Config ? Config.routes.client : 'play.pokemonshowdown.com'}/fx/`;
  })();
  loadedSpriteData = {
    xy: 1,
    bw: 0
  };
  loadedTextData = {
    en: 1
  };
  moddedDexes = {};

  /**
   * April Fools' Day setting:
   * * `true` = FULL, all jokes on
   * * `'sprites'` = SPRITES, only sprites and taunts
   * * `false | null | undefined` = OFF
   */
  afdMode;
  mod(modid) {
    if (modid === 'gen9') return this;
    if (!window.BattleTeambuilderTable) return this;
    if (modid in this.moddedDexes) {
      return this.moddedDexes[modid];
    }
    this.moddedDexes[modid] = new ModdedDex(modid);
    return this.moddedDexes[modid];
  }
  forGen(gen) {
    if (!gen) return this;
    return this.mod(`gen${gen}`);
  }
  formats = {
    cache: Object.create(null),
    get(name) {
      const id = toID(name);
      this.cache[id] ||= new BattleFormat(name, window.BattleFormats?.[id]);
      return this.cache[id];
    },
    load(data) {
      // Update in-place so retained references get updated too
      for (const id in this.cache) {
        Object.assign(this.cache[id], new BattleFormat(this.cache[id].name, data[id]));
      }
      const formats = {};
      for (const id in data) {
        const format = this.cache[id] ||= new BattleFormat(data[id].name, data[id]);
        formats[id] = format;
      }
      return formats;
    }
  };
  formatGen(format) {
    return this.formats.get(format).gen;
  }
  forFormat(format) {
    return this.mod(this.formats.get(format).mod);
  }
  resolveAvatar(avatar) {
    if (window.BattleAvatarNumbers && avatar in BattleAvatarNumbers) {
      avatar = BattleAvatarNumbers[avatar];
    }
    if (avatar.startsWith('#')) {
      return Dex.resourcePrefix + 'sprites/trainers-custom/' + toID(avatar.substr(1)) + '.png';
    }
    if (avatar.includes('.')) {
      if (!window.Config?.server) {
        return Dex.resourcePrefix + 'sprites/trainers/unknown.png';
      }
      // previously checked `&& window.Config?.server?.registered`
      // currently doesn't, bc server registration isn't a thing anymore
      // custom avatar served by the server
      const protocol = Config.server.port === 443 ? 'https' : 'http';
      const server = `${protocol}://${Config.server.host}:${Config.server.port}`;
      return `${server}/avatars/${encodeURIComponent(avatar).replace(/%3F/g, '?')}`;
    }
    return Dex.resourcePrefix + 'sprites/trainers/' + Dex.sanitizeName(avatar || 'unknown') + '.png';
  }

  /**
   * This is used to sanitize strings from data files like `moves.js` and
   * `teambuilder-tables.js`.
   *
   * This makes sure untrusted strings can't wreak havoc if someone forgets to
   * escape it before putting it in HTML.
   *
   * None of these characters belong in these files, anyway. (They can be used
   * in move descriptions, but those are served from `text.js`, which are
   * definitely always treated as unsanitized.)
   */
  sanitizeName(name) {
    if (!name) return '';
    return ('' + name).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').slice(0, 50);
  }
  prefs(prop) {
    // @ts-expect-error this is what I get for calling it Storage...
    return window.Storage?.prefs ? window.Storage.prefs(prop) : window.PS?.prefs?.[prop];
  }
  text = {
    getLanguage(text) {
      let lang = Dex.prefs('language') || Dex.prefs('serversettings')?.language;
      if (lang) lang = TEXT_LANGUAGE_TABLE[lang]?.code;

      // oldclient doesn't autodetect language
      lang ||= window.PS ? this.getBrowserLanguage() : 'en';
      if (Dex.afdMode === true && lang === 'en') return 'en-afd';
      return lang;
    },
    getBrowserLanguage() {
      if (typeof navigator === 'undefined') return 'en';
      const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
      for (let language of languages) {
        language = language.toLowerCase().replace(/_/g, '-');
        if (language === 'zh' || language.startsWith('zh-')) {
          return /(?:^|-)(?:hant|tw|hk|mo)(?:-|$)/.test(language) ? 'zh-tw' : 'zh-cn';
        }
        const baseLanguage = language.split('-')[0];
        if (baseLanguage in TEXT_LANGUAGE_TABLE) return baseLanguage;
      }
      return 'en';
    },
    languages() {
      return TEXT_LANGUAGES;
    },
    findLanguage(lang) {
      return TEXT_LANGUAGE_TABLE[lang.toLowerCase()] || TEXT_LANGUAGE_TABLE[toID(lang)] || null;
    },
    get: (effect, lang = Dex.text.getLanguage()) => {
      return getTextEntry(effect, 'gen9', 9, lang);
    }
  };
  getShortName(name) {
    let shortName = name.replace(/[^A-Za-z0-9]+$/, '');
    if (shortName.includes('(')) {
      shortName += name.slice(shortName.length).replace(/[^()]+/g, '').replace(/\(\)/g, '');
    }
    return shortName;
  }
  getEffect(name) {
    name = (name || '').trim();
    if (name.substr(0, 5) === 'item:') {
      return Dex.items.get(name.substr(5).trim());
    } else if (name.substr(0, 8) === 'ability:') {
      return Dex.abilities.get(name.substr(8).trim());
    } else if (name.substr(0, 5) === 'move:') {
      return Dex.moves.get(name.substr(5).trim());
    }
    let id = toID(name);
    return new PureEffect(id, name);
  }
  moves = {
    get: nameOrMove => {
      if (nameOrMove && typeof nameOrMove !== 'string') {
        // TODO: don't accept Moves here
        return nameOrMove;
      }
      let name = nameOrMove || '';
      let id = toID(nameOrMove);
      if (window.BattleAliases && id in BattleAliases) {
        name = BattleAliases[id];
        id = toID(name);
      }
      if (!window.BattleMovedex) window.BattleMovedex = {};
      let data = window.BattleMovedex[id];
      if (data && typeof data.exists === 'boolean') return data;
      if (!data && id.substr(0, 11) === 'hiddenpower' && id.length > 11) {
        let [, hpWithType, hpPower] = /([a-z]*)([0-9]*)/.exec(id);
        data = {
          ...(window.BattleMovedex[hpWithType] || {}),
          basePower: Number(hpPower) || 60
        };
      }
      if (!data && id.substr(0, 6) === 'return' && id.length > 6) {
        data = {
          ...(window.BattleMovedex['return'] || {}),
          basePower: Number(id.slice(6))
        };
      }
      if (!data && id.substr(0, 11) === 'frustration' && id.length > 11) {
        data = {
          ...(window.BattleMovedex['frustration'] || {}),
          basePower: Number(id.slice(11))
        };
      }
      if (!data) data = {
        exists: false
      };
      let move = new Move(id, name, data);
      window.BattleMovedex[id] = move;
      return move;
    }
  };
  getGen3Category(type) {
    return ['Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Psychic', 'Dark', 'Dragon'].includes(type) ? 'Special' : 'Physical';
  }
  items = {
    get: nameOrItem => {
      if (nameOrItem && typeof nameOrItem !== 'string') {
        // TODO: don't accept Items here
        return nameOrItem;
      }
      let name = nameOrItem || '';
      let id = toID(nameOrItem);
      if (window.BattleAliases && id in BattleAliases) {
        name = BattleAliases[id];
        id = toID(name);
      }
      if (!window.BattleItems) window.BattleItems = {};
      let data = window.BattleItems[id];
      if (data && typeof data.exists === 'boolean') return data;
      if (!data) data = {
        exists: false
      };
      let item = new Item(id, name, data);
      window.BattleItems[id] = item;
      return item;
    }
  };
  abilities = {
    get: nameOrAbility => {
      if (nameOrAbility && typeof nameOrAbility !== 'string') {
        // TODO: don't accept Abilities here
        return nameOrAbility;
      }
      let name = nameOrAbility || '';
      let id = toID(nameOrAbility);
      if (window.BattleAliases && id in BattleAliases) {
        name = BattleAliases[id];
        id = toID(name);
      }
      if (!window.BattleAbilities) window.BattleAbilities = {};
      let data = window.BattleAbilities[id];
      if (data && typeof data.exists === 'boolean') return data;
      if (!data) data = {
        exists: false
      };
      let ability = new Ability(id, name, data);
      window.BattleAbilities[id] = ability;
      return ability;
    }
  };
  species = {
    get: nameOrSpecies => {
      if (nameOrSpecies && typeof nameOrSpecies !== 'string') {
        // TODO: don't accept Species' here
        return nameOrSpecies;
      }
      let name = nameOrSpecies || '';
      let id = toID(nameOrSpecies);
      let formid = id;
      if (!window.BattlePokedexAltForms) window.BattlePokedexAltForms = {};
      if (formid in window.BattlePokedexAltForms) return window.BattlePokedexAltForms[formid];
      if (window.BattleAliases && id in BattleAliases) {
        name = BattleAliases[id];
        id = toID(name);
      } else if (window.BattlePokedex && !(id in BattlePokedex) && window.BattleBaseSpeciesChart) {
        for (const baseSpeciesId of BattleBaseSpeciesChart) {
          if (formid.startsWith(baseSpeciesId)) {
            id = baseSpeciesId;
            break;
          }
        }
      }
      if (!window.BattlePokedex) window.BattlePokedex = {};
      let data = window.BattlePokedex[id];
      let species;
      if (data && typeof data.exists === 'boolean') {
        species = data;
      } else {
        if (data?.isCosmeticForme) {
          data = {
            ...this.species.get(data.baseSpecies),
            ...data,
            baseForme: "",
            otherFormes: null,
            cosmeticFormes: null
          };
        }
        if (!data) data = {
          exists: false
        };
        if (!data.tier && id.endsWith('totem')) {
          data.tier = this.species.get(id.slice(0, -5)).tier;
        }
        if (!data.tier && data.baseSpecies && toID(data.baseSpecies) !== id) {
          data.tier = this.species.get(data.baseSpecies).tier;
        }
        data.nfe = data.id === 'dipplin' || !!data.evos?.some(evo => {
          const evoSpecies = this.species.get(evo);
          return !evoSpecies.isNonstandard || evoSpecies.isNonstandard === data.isNonstandard ||
          // Pokemon with Hisui evolutions
          evoSpecies.isNonstandard === "Unobtainable";
        });
        species = new Species(id, name, data);
        window.BattlePokedex[id] = species;
      }
      if (species.cosmeticFormes) {
        for (const forme of species.cosmeticFormes) {
          if (toID(forme) === formid) {
            species = new Species(formid, name, {
              ...species,
              name: forme,
              forme: forme.slice(species.name.length + 1),
              baseForme: "",
              baseSpecies: species.name,
              otherFormes: null
            });
            window.BattlePokedexAltForms[formid] = species;
            break;
          }
        }
      }
      return species;
    }
  };
  types = {
    allCache: null,
    namesCache: null,
    get: type => {
      if (!type || typeof type === 'string') {
        const id = toID(type);
        const name = id.substr(0, 1).toUpperCase() + id.substr(1);
        type = window.BattleTypeChart?.[id] || {};
        if (type.damageTaken) type.exists = true;
        if (!type.id) type.id = id;
        if (!type.name) type.name = name;
        if (!type.effectType) {
          type.effectType = 'Type';
        }
      }
      return type;
    },
    all: () => {
      if (this.types.allCache) return this.types.allCache;
      const types = [];
      for (const id in window.BattleTypeChart || {}) {
        types.push(Dex.types.get(id));
      }
      if (types.length) this.types.allCache = types;
      return types;
    },
    names: () => {
      if (this.types.namesCache) return this.types.namesCache;
      const names = this.types.all().map(type => type.name);
      names.splice(names.indexOf('Stellar'), 1);
      if (names.length) this.types.namesCache = names;
      return names;
    },
    isName: name => {
      const id = toID(name);
      if (name !== id.substr(0, 1).toUpperCase() + id.substr(1)) return false;
      return window.BattleTypeChart?.hasOwnProperty(id);
    }
  };
  hasAbility(species, ability) {
    for (const i in species.abilities) {
      if (ability === species.abilities[i]) return true;
    }
    return false;
  }
  loadSpriteData(gen) {
    if (this.loadedSpriteData[gen]) return;
    this.loadedSpriteData[gen] = 1;
    let path = $('script[src*="pokedex-mini.js"]').attr('src') || '';
    let qs = '?' + (path.split('?')[1] || '');
    path = (/.+?(?=data\/pokedex-mini\.js)/.exec(path) || [])[0] || '';
    let el = document.createElement('script');
    el.src = path + 'data/pokedex-mini-bw.js' + qs;
    document.getElementsByTagName('body')[0].appendChild(el);
  }
  loadTextData(lang = this.text.getLanguage()) {
    const text = typeof BattleText === 'undefined' ? undefined : BattleText;
    updateTranslatedNames(lang);
    if (text?.[lang]) {
      return Promise.resolve();
    }
    // in case the initial English failed to load
    if (this.loadedTextData[lang] === 1) delete this.loadedTextData[lang];
    if (typeof document === 'undefined') return Promise.resolve();
    const existing = this.loadedTextData[lang];
    if (existing) return existing === 1 ? Promise.resolve() : existing;
    const loadScript = src => new Promise((resolve, reject) => {
      const el = document.createElement('script');
      el.src = src;
      el.onload = () => resolve();
      el.onerror = () => reject(new Error(`Failed to load text data from ${src}`));
      document.getElementsByTagName('body')[0].appendChild(el);
    });
    const cachebuster = Config.translationCachebuster ? `?${Config.translationCachebuster}` : '';
    const textURL = Config.testclient ? `data/text/${lang}.js` : `${this.resourcePrefix}data/text/${lang}.js`;
    let loading = loadScript(textURL + cachebuster);
    if (Config.testclient) {
      loading = loading.catch(() => loadScript(`https://play.pokemonshowdown.com/data/text/${lang}.js${cachebuster}`));
    }
    loading = loading.then(() => updateTranslatedNames(lang)).catch(() => {
      delete this.loadedTextData[lang];
      updateTranslatedNames(lang);
    });
    this.loadedTextData[lang] = loading;
    return loading;
  }
  getSpriteData(pokemon, isFront, options = {
    gen: 6
  }) {
    const mechanicsGen = options.gen || 6;
    let isDynamax = !!options.dynamax;
    if (pokemon instanceof Pokemon) {
      if (pokemon.volatiles.transform) {
        options.shiny = pokemon.volatiles.transform[2];
        options.gender = pokemon.volatiles.transform[3];
      } else {
        options.shiny = pokemon.shiny;
        options.gender = pokemon.gender;
      }
      let isGigantamax = false;
      if (pokemon.volatiles.dynamax) {
        if (pokemon.volatiles.dynamax[1]) {
          isGigantamax = true;
        } else if (options.dynamax !== false) {
          isDynamax = true;
        }
      }
      pokemon = pokemon.getSpeciesForme() + (isGigantamax ? '-Gmax' : '');
    }
    const species = Dex.species.get(pokemon);
    // Gmax sprites are already extremely large, so we don't need to double.
    if (species.name.endsWith('-Gmax')) isDynamax = false;
    let spriteData = {
      gen: mechanicsGen,
      w: 96,
      h: 96,
      y: 0,
      url: Dex.resourcePrefix + 'sprites/',
      pixelated: true,
      isFrontSprite: false,
      cryurl: '',
      shiny: options.shiny
    };
    let name = species.spriteid;
    let dir;
    let facing;
    if (isFront) {
      spriteData.isFrontSprite = true;
      dir = '';
      facing = 'front';
    } else {
      dir = '-back';
      facing = 'back';
    }

    // Decide which gen sprites to use.
    //
    // There are several different generations we care about here:
    //
    //   - mechanicsGen: the generation number of the mechanics and battle (options.gen)
    //   - graphicsGen: the generation number of sprite/field graphics the user has requested.
    //     This will default to mechanicsGen, but may be altered depending on user preferences.
    //   - spriteData.gen: the generation number of a the specific Pokemon sprite in question.
    //     This defaults to graphicsGen, but if the graphicsGen doesn't have a sprite for the Pokemon
    //     (eg. Darmanitan in graphicsGen 2) then we go up gens until it exists.
    //
    let graphicsGen = mechanicsGen;
    if (Dex.prefs('nopastgens')) graphicsGen = 6;
    if (Dex.prefs('bwgfx') && graphicsGen >= 6) graphicsGen = 5;
    spriteData.gen = Math.max(graphicsGen, Math.min(species.gen, 5));
    const baseDir = ['', 'gen1', 'gen2', 'gen3', 'gen4', 'gen5', '', '', '', ''][spriteData.gen];
    let miscData = null;
    let speciesid = species.id;
    if (species.isTotem) speciesid = toID(name);
    if (window.BattlePokemonSprites) miscData = BattlePokemonSprites[speciesid];
    if (!miscData && window.BattlePokemonSpritesBW) miscData = BattlePokemonSpritesBW[speciesid];
    if (!miscData) miscData = {};
    if (miscData.num !== 0 && miscData.num > -5000) {
      let baseSpeciesid = toID(species.baseSpecies);
      spriteData.cryurl = 'audio/cries/' + baseSpeciesid;
      let formeid = species.formeid;
      const specialFormeCries = ['-bloodmoon', '-crowned', '-eternal', '-eternamax', '-four', '-hangry', '-hero', '-lowkey', '-noice', '-primal', '-rapidstrike', '-roaming', '-school', '-sky', '-starter', '-super', '-therian', '-unbound'];
      const specialBaseSpeciesCries = ['calyrex', 'kyurem', 'cramorant', 'indeedee', 'lycanroc', 'necrozma', 'oinkologne', 'oricorio', 'slowpoke', 'tatsugiri', 'zygarde'];
      if (species.isMega || formeid && (specialFormeCries.includes(formeid) || specialBaseSpeciesCries.includes(baseSpeciesid))) {
        if (species.isMega && (baseSpeciesid === 'meowstic' || baseSpeciesid === 'tatsugiri')) {
          spriteData.cryurl += '-mega';
        } else {
          spriteData.cryurl += formeid;
        }
      }
      spriteData.cryurl += '.mp3';
    }
    if (options.shiny && mechanicsGen > 1) dir += '-shiny';

    // April Fool's 2014
    if (Dex.afdMode || options.afd) {
      // Explicit false check above means AFD will be off if the user disables it - no matter what
      dir = 'afd' + dir;
      spriteData.url += dir + '/' + name + '.png';
      // Duplicate code but needed to make AFD tinymax work
      // April Fool's 2020
      if (isDynamax && !options.noScale) {
        spriteData.w *= 0.25;
        spriteData.h *= 0.25;
        spriteData.y += -22;
      } else if (species.isTotem && !options.noScale) {
        spriteData.w *= 0.5;
        spriteData.h *= 0.5;
        spriteData.y += -11;
      }
      return spriteData;
    }

    // Mod Cries
    if (options.mod) {
      spriteData.cryurl = `sprites/${options.mod}/audio/${toID(species.baseSpecies)}`;
      spriteData.cryurl += '.mp3';
    }
    let animatedSprite = false;
    if (!Dex.prefs('noanim') && !Dex.prefs('nogif') && spriteData.gen >= 5) {
      const animationArray = [];
      if (baseDir === '' && window.BattlePokemonSprites) {
        animationArray.push([BattlePokemonSprites[speciesid], '']);
      }
      if (window.BattlePokemonSpritesBW) {
        animationArray.push([BattlePokemonSpritesBW[speciesid], 'gen5']);
      }
      for (const [animationData, animDir] of animationArray) {
        if (!animationData) continue;
        if (animationData[facing + 'f'] && options.gender === 'F') facing += 'f';
        if (!animationData[facing]) continue;
        if (facing.endsWith('f')) name += '-f';
        if (spriteData.gen >= 6) spriteData.pixelated = false;
        dir = animDir + 'ani' + dir;
        spriteData.w = animationData[facing].w;
        spriteData.h = animationData[facing].h;
        spriteData.url += dir + '/' + name + '.gif';
        animatedSprite = true;
        break;
      }
    }
    if (!animatedSprite) {
      // There is no entry or enough data in pokedex-mini.js
      // Handle these in case-by-case basis; either using BW sprites or matching the played gen.
      dir = (baseDir || 'gen5') + dir;

      // Gender differences don't exist prior to Gen 4,
      // so there are no sprites for it
      if (spriteData.gen >= 4 && miscData['frontf'] && options.gender === 'F') {
        name += '-f';
      }
      spriteData.url += dir + '/' + name + '.png';
    }
    if (!options.noScale) {
      if (graphicsGen > 4) {
        // no scaling
      } else if (spriteData.isFrontSprite) {
        spriteData.w *= 2;
        spriteData.h *= 2;
        spriteData.y += -16;
      } else {
        // old gen backsprites are multiplied by 1.5x by the 3D engine
        spriteData.w *= 2 / 1.5;
        spriteData.h *= 2 / 1.5;
        spriteData.y += -11;
      }
      if (spriteData.gen <= 2) spriteData.y += 2;
    }
    if (isDynamax && !options.noScale) {
      spriteData.w *= 2;
      spriteData.h *= 2;
      spriteData.y += -22;
    } else if (species.isTotem && !options.noScale) {
      spriteData.w *= 1.5;
      spriteData.h *= 1.5;
      spriteData.y += -11;
    }
    return spriteData;
  }
  getPokemonIconNum(id, isFemale, facingLeft) {
    let num = 0;
    if (window.BattlePokemonSprites?.[id]?.num) {
      num = BattlePokemonSprites[id].num;
    } else if (window.BattlePokedex?.[id]?.num) {
      num = BattlePokedex[id].num;
    }
    if (num < 0) num = 0;
    if (num > 1025) num = 0;
    if (window.BattlePokemonIconIndexes?.[id]) {
      num = BattlePokemonIconIndexes[id];
    }
    if (isFemale) {
      if (['unfezant', 'frillish', 'jellicent', 'meowstic', 'pyroar'].includes(id)) {
        num = BattlePokemonIconIndexes[id + 'f'];
      }
    }
    if (facingLeft) {
      if (BattlePokemonIconIndexesLeft[id]) {
        num = BattlePokemonIconIndexesLeft[id];
      }
    }
    return num;
  }
  getPokemonIcon(pokemon, facingLeft) {
    if (pokemon === 'pokeball') {
      return `background:transparent url(${Dex.resourcePrefix}sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -0px 4px`;
    } else if (pokemon === 'pokeball-statused') {
      return `background:transparent url(${Dex.resourcePrefix}sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -40px 4px`;
    } else if (pokemon === 'pokeball-fainted') {
      return `background:transparent url(${Dex.resourcePrefix}sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -80px 4px;opacity:.4;filter:contrast(0)`;
    } else if (pokemon === 'pokeball-none') {
      return `background:transparent url(${Dex.resourcePrefix}sprites/pokemonicons-pokeball-sheet.png) no-repeat scroll -80px 4px`;
    }
    let id = toID(pokemon);
    if (!pokemon || typeof pokemon === 'string') pokemon = null;
    // @ts-expect-error safe, but too lazy to cast
    if (pokemon?.speciesForme) id = toID(pokemon.speciesForme);
    // @ts-expect-error safe, but too lazy to cast
    if (pokemon?.species) id = toID(pokemon.species);
    // @ts-expect-error safe, but too lazy to cast
    if (pokemon?.volatiles?.formechange && !pokemon.volatiles.transform) {
      // @ts-expect-error safe, but too lazy to cast
      id = toID(pokemon.volatiles.formechange[1]);
    }
    let num = this.getPokemonIconNum(id, pokemon?.gender === 'F', facingLeft);
    let top = Math.floor(num / 12) * 30;
    let left = num % 12 * 40;
    let fainted = pokemon?.fainted ? `;opacity:.3;filter:grayscale(100%) brightness(.5)` : ``;
    return `background:transparent url(${Dex.resourcePrefix}sprites/pokemonicons-sheet.png?v22) no-repeat scroll -${left}px -${top}px${fainted}`;
  }
  getTeambuilderSpriteData(pokemon, dex = Dex) {
    let gen = dex.gen;
    let id = toID(pokemon.species || pokemon);
    let species = Dex.species.get(id);
    let spriteid;
    if (typeof pokemon === 'string') {
      spriteid = species.spriteid || id;
    } else {
      spriteid = pokemon.spriteid;
      if (pokemon.species && !spriteid) {
        spriteid = species.spriteid || id;
      }
    }
    if (species.exists === false) return {
      spriteDir: 'sprites/gen5',
      spriteid: '0',
      x: 10,
      y: 5,
      pixelated: true
    };
    if (Dex.afdMode) {
      return {
        spriteid,
        spriteDir: 'sprites/afd',
        shiny: !!pokemon.shiny,
        x: 10,
        y: 5
      };
    }
    const spriteData = {
      spriteid,
      spriteDir: 'sprites/dex',
      x: -2,
      y: -3
    };
    if (pokemon.shiny) spriteData.shiny = true;
    if (dex.modid === 'gen7letsgo') gen = 8;
    if (Dex.prefs('nopastgens')) gen = 9;
    if (Dex.prefs('bwgfx') && gen > 5) gen = 5;
    // TODO: refactor after we get home sprites for Z-A Megas and Eternal Floette
    let homeExists = (!species.isNonstandard || !['CAP', 'Custom'].includes(species.isNonstandard) || species.id === "xerneasneutral") && !["floetteeternal", "pichuspikyeared", "pikachubelle", "pikachucosplay", "pikachulibre", "pikachuphd", "pikachupopstar", "pikachurockstar"].includes(species.id) && !(species.isMega && species.gen === 9);
    if (gen >= 8 && homeExists) {
      spriteData.spriteDir = 'sprites/home-centered';
      spriteData.x = 8;
      spriteData.y = 10;
      spriteData.h = 96;
      return spriteData;
    }
    let xydexExists = !species.isNonstandard || species.isNonstandard === 'Past' || species.isNonstandard === 'CAP' || ["pikachustarter", "eeveestarter", "meltan", "melmetal", "pokestarufo", "pokestarufo2", "pokestarbrycenman", "pokestarmt", "pokestarmt2", "pokestargiant", "pokestarhumanoid", "pokestarmonster", "pokestarf00", "pokestarf002", "pokestarspirit"].includes(species.id);
    if (species.gen >= 8 && species.isNonstandard !== 'CAP') xydexExists = false;
    if (gen >= 6 && xydexExists) {
      if (species.gen >= 7) {
        spriteData.x = -6;
        spriteData.y = -7;
      } else if (id.substr(0, 6) === 'arceus') {
        spriteData.x = -2;
        spriteData.y = 7;
      } else if (id === 'garchomp') {
        spriteData.x = -2;
        spriteData.y = 2;
      } else if (id === 'garchompmega') {
        spriteData.x = -2;
        spriteData.y = 0;
      }
      return spriteData;
    }
    spriteData.spriteDir = 'sprites/gen5';
    if (gen <= 1 && species.gen <= 1) spriteData.spriteDir = 'sprites/gen1';else if (gen <= 2 && species.gen <= 2) spriteData.spriteDir = 'sprites/gen2';else if (gen <= 3 && species.gen <= 3) spriteData.spriteDir = 'sprites/gen3';else if (gen <= 4 && species.gen <= 4) spriteData.spriteDir = 'sprites/gen4';
    spriteData.pixelated = true;
    spriteData.x = 10;
    spriteData.y = 5;
    return spriteData;
  }
  getTeambuilderSprite(pokemon, dex, xOffset = 0, yOffset = 0) {
    if (!pokemon) return '';
    const data = this.getTeambuilderSpriteData(pokemon, dex);
    const shiny = data.shiny ? '-shiny' : '';
    const resize = data.h ? `background-size:${data.h}px` : '';
    return `background-image:url(${Dex.resourcePrefix}${data.spriteDir}${shiny}/${data.spriteid}.png);background-position:${data.x + xOffset}px ${data.y + yOffset}px;background-repeat:no-repeat;${resize}`;
  }
  getItemIcon(item) {
    let num = 0;
    if (typeof item === 'string' && window.BattleItems) item = window.BattleItems[toID(item)];
    if (item?.spritenum) num = item.spritenum;
    let top = Math.floor(num / 16) * 24;
    let left = num % 16 * 24;
    return `background:transparent url(${Dex.resourcePrefix}sprites/itemicons-sheet.png?v1) no-repeat scroll -${left}px -${top}px`;
  }
  getTypeIcon(type, b) {
    // b is just for utilichart.js
    type = this.types.get(type).name;
    if (!type) type = '???';
    let sanitizedType = type.replace(/\?/g, '%3f');
    const alt = BattleLog.escapeHTML(TL.type[type] || type);
    return `<img src="${Dex.resourcePrefix}sprites/types/${sanitizedType}.png" alt="${alt}" height="14" width="32" class="pixelated${b ? ' b' : ''}" />`;
  }
  getCategoryIcon(category) {
    const categoryID = toID(category);
    let sanitizedCategory = '';
    switch (categoryID) {
      case 'physical':
      case 'special':
      case 'status':
        sanitizedCategory = categoryID.charAt(0).toUpperCase() + categoryID.slice(1);
        break;
      default:
        sanitizedCategory = 'undefined';
        break;
    }
    const alt = BattleLog.escapeHTML(TL.tag[categoryID] || sanitizedCategory);
    return `<img src="${Dex.resourcePrefix}sprites/categories/${sanitizedCategory}.png" alt="${alt}" height="14" width="32" class="pixelated" />`;
  }
  getPokeballs() {
    if (this.pokeballs) return this.pokeballs;
    this.pokeballs = [];
    window.BattleItems ||= {};
    for (const data of Object.values(BattleItems)) {
      if (!data.isPokeball) continue;
      this.pokeballs.push(data.name);
    }
    return this.pokeballs;
  }
}();
class ModdedDex {
  gen;
  modid;
  cache = {
    Moves: {},
    Items: {},
    Abilities: {},
    Species: {},
    Types: {}
  };
  pokeballs = null;
  constructor(modid) {
    this.modid = modid;
    let gen = parseInt(modid.charAt(3), 10);
    if (this.modid === 'champions') gen = 9;
    if (modid !== 'champions' && !modid.startsWith('gen') || !gen) throw new Error("Unsupported modid");
    this.gen = gen;
  }
  text = {
    getLanguage: () => Dex.text.getLanguage(),
    getBrowserLanguage: () => Dex.text.getBrowserLanguage(),
    languages: () => Dex.text.languages(),
    findLanguage: lang => Dex.text.findLanguage(lang),
    get: (effect, lang = Dex.text.getLanguage()) => {
      return getTextEntry(effect, this.modid, this.gen, lang);
    }
  };
  moves = {
    get: name => {
      let id = toID(name);
      if (window.BattleAliases && id in BattleAliases) {
        name = BattleAliases[id];
        id = toID(name);
      }
      if (this.cache.Moves.hasOwnProperty(id)) return this.cache.Moves[id];
      let data = {
        ...Dex.moves.get(name)
      };
      for (let i = Dex.gen - 1; i >= this.gen; i--) {
        const table = window.BattleTeambuilderTable[`gen${i}`];
        if (id in table.overrideMoveData) {
          Object.assign(data, table.overrideMoveData[id]);
        }
      }
      if (this.modid !== `gen${this.gen}`) {
        const table = window.BattleTeambuilderTable[this.modid];
        if (id in table.overrideMoveData) {
          Object.assign(data, table.overrideMoveData[id]);
        }
      }
      if (this.gen <= 3 && data.category !== 'Status') {
        data.category = Dex.getGen3Category(data.type);
      }
      const move = new Move(id, name, data);
      this.cache.Moves[id] = move;
      return move;
    }
  };
  items = {
    get: name => {
      let id = toID(name);
      if (window.BattleAliases && id in BattleAliases) {
        name = BattleAliases[id];
        id = toID(name);
      }
      if (this.cache.Items.hasOwnProperty(id)) return this.cache.Items[id];
      let data = {
        ...Dex.items.get(name)
      };
      for (let i = Dex.gen - 1; i >= this.gen; i--) {
        const table = window.BattleTeambuilderTable[`gen${i}`];
        if (id in table.overrideItemData) {
          Object.assign(data, table.overrideItemData[id]);
        }
      }
      if (this.modid !== `gen${this.gen}`) {
        const table = window.BattleTeambuilderTable[this.modid];
        if (id in table.overrideItemData) {
          Object.assign(data, table.overrideItemData[id]);
        }
      }
      const item = new Item(id, name, data);
      this.cache.Items[id] = item;
      return item;
    }
  };
  abilities = {
    get: name => {
      let id = toID(name);
      if (window.BattleAliases && id in BattleAliases) {
        name = BattleAliases[id];
        id = toID(name);
      }
      if (this.cache.Abilities.hasOwnProperty(id)) return this.cache.Abilities[id];
      let data = {
        ...Dex.abilities.get(name)
      };
      for (let i = Dex.gen - 1; i >= this.gen; i--) {
        const table = window.BattleTeambuilderTable[`gen${i}`];
        if (id in table.overrideAbilityData) {
          Object.assign(data, table.overrideAbilityData[id]);
        }
      }
      if (this.modid !== `gen${this.gen}`) {
        const table = window.BattleTeambuilderTable[this.modid];
        if (id in table.overrideAbilityData) {
          Object.assign(data, table.overrideAbilityData[id]);
        }
      }
      const ability = new Ability(id, name, data);
      this.cache.Abilities[id] = ability;
      return ability;
    }
  };
  species = {
    get: name => {
      let id = toID(name);
      const originalId = id;
      if (window.BattleAliases && id in BattleAliases) {
        name = BattleAliases[id];
        id = toID(name);
      }
      const baseSpecies = Dex.species.get(originalId || name);
      id = baseSpecies.id;
      if (this.cache.Species.hasOwnProperty(id)) return this.cache.Species[id];
      let data = {
        ...baseSpecies
      };
      for (let i = Dex.gen - 1; i >= this.gen; i--) {
        const table = window.BattleTeambuilderTable[`gen${i}`];
        if (id in table.overrideSpeciesData) {
          Object.assign(data, table.overrideSpeciesData[id]);
        }
      }
      if (this.modid !== `gen${this.gen}`) {
        const table = window.BattleTeambuilderTable[this.modid];
        if (id in table.overrideSpeciesData) {
          Object.assign(data, table.overrideSpeciesData[id]);
        }
      }
      if (this.gen < 3 || this.modid === 'gen7letsgo') {
        data.abilities = {
          0: "No Ability"
        };
      }
      const table = window.BattleTeambuilderTable[this.modid];
      if (id in table.overrideTier) data.tier = table.overrideTier[id];
      if (!data.tier && id.endsWith('totem')) {
        data.tier = this.species.get(id.slice(0, -5)).tier;
      }
      if (!data.tier && data.baseSpecies && toID(data.baseSpecies) !== id) {
        data.tier = this.species.get(data.baseSpecies).tier;
      }
      if (data.gen > this.gen) data.tier = 'Illegal';
      data.nfe = data.id === 'dipplin' || !!data.evos?.some(evo => {
        const evoSpecies = this.species.get(evo);
        return !evoSpecies.isNonstandard || evoSpecies.isNonstandard === data.isNonstandard ||
        // Pokemon with Hisui evolutions
        evoSpecies.isNonstandard === "Unobtainable";
      });
      const species = new Species(id, name, data);
      this.cache.Species[id] = species;
      return species;
    }
  };
  types = {
    namesCache: null,
    names: () => {
      if (this.types.namesCache) return this.types.namesCache;
      const names = Dex.types.names();
      if (!names.length) return [];
      const curNames = [...names];
      // if (this.gen < 9) curNames.splice(curNames.indexOf('Stellar'), 1);
      if (this.gen < 6) curNames.splice(curNames.indexOf('Fairy'), 1);
      if (this.gen < 2) curNames.splice(curNames.indexOf('Dark'), 1);
      if (this.gen < 2) curNames.splice(curNames.indexOf('Steel'), 1);
      this.types.namesCache = curNames;
      return curNames;
    },
    get: name => {
      const id = toID(name);
      name = id.substr(0, 1).toUpperCase() + id.substr(1);
      if (this.cache.Types.hasOwnProperty(id)) return this.cache.Types[id];
      let data = {
        ...Dex.types.get(name)
      };
      for (let i = 7; i >= this.gen; i--) {
        const table = window.BattleTeambuilderTable[`gen${i}`];
        if (id in table.removeType) {
          data.exists = false;
          // don't bother correcting its attributes given it doesn't exist
          break;
        }
        if (id in table.overrideTypeChart) {
          data = {
            ...data,
            ...table.overrideTypeChart[id]
          };
        }
      }
      this.cache.Types[id] = data;
      return data;
    }
  };
  getPokeballs() {
    if (this.pokeballs) return this.pokeballs;
    this.pokeballs = [];
    window.BattleItems ||= {};
    for (const data of Object.values(BattleItems)) {
      if (data.gen && data.gen > this.gen) continue;
      if (!data.isPokeball) continue;
      this.pokeballs.push(data.name);
    }
    return this.pokeballs;
  }
}
if (typeof require === 'function') {
  // in Node
  global.Dex = Dex;
  global.TL = TL;
  global.toID = toID;
}
window.Dex=Dex; Dex.resourcePrefix="assets/showdown/"; Dex.fxPrefix="assets/showdown/fx/";
class BattleBGM {
  /**
   * May be shared with other BGM objects: every battle has its own BattleBGM
   * object, but two battles with the same music will have the same HTMLAudioElement
   * object.
   */
  sound;
  url;
  timer = undefined;
  loopstart;
  loopend;
  /**
   * When multiple battles with BGM are open, they will be `isPlaying`, but only the
   * first one will be `isActuallyPlaying`. In addition, muting volume or setting
   * BGM volume to 0 will set `isActuallyPlaying` to false.
   */
  isPlaying = false;
  isActuallyPlaying = false;
  /**
   * The sound should be rewound when it next plays.
   */
  willRewind = true;
  constructor(url, loopstart, loopend) {
    this.url = url;
    this.loopstart = loopstart;
    this.loopend = loopend;
  }
  play() {
    this.willRewind = true;
    this.resume();
  }
  resume() {
    this.isPlaying = true;
    this.actuallyResume();
  }
  pause() {
    this.isPlaying = false;
    this.actuallyPause();
    BattleBGM.update();
  }
  stop() {
    this.pause();
    this.willRewind = true;
  }
  destroy() {
    BattleSound.deleteBgm(this);
    this.pause();
  }
  actuallyResume() {
    if (this !== BattleSound.currentBgm()) return;
    if (this.isActuallyPlaying) return;
    if (!this.sound) this.sound = BattleSound.getSound(this.url);
    if (!this.sound) return;
    if (this.willRewind) this.sound.currentTime = 0;
    this.willRewind = false;
    this.isActuallyPlaying = true;
    this.sound.volume = BattleSound.bgmVolume / 100;
    this.sound.play()?.catch(() => {});
    this.updateTime();
  }
  actuallyPause() {
    if (!this.isActuallyPlaying) return;
    this.isActuallyPlaying = false;
    this.sound.pause();
    this.updateTime();
  }
  /**
   * Handles the hard part of looping the sound
   */
  updateTime() {
    clearTimeout(this.timer);
    this.timer = undefined;
    if (this !== BattleSound.currentBgm()) return;
    if (!this.sound) return;
    const progress = this.sound.currentTime * 1000;
    if (progress > this.loopend - 1000) {
      this.sound.currentTime -= (this.loopend - this.loopstart) / 1000;
    }
    this.timer = setTimeout(() => {
      this.updateTime();
    }, Math.max(this.loopend - progress, 1));
  }
  static update() {
    const current = BattleSound.currentBgm();
    for (const bgm of BattleSound.bgm) {
      if (bgm.isPlaying) {
        if (bgm === current) {
          bgm.actuallyResume();
        } else {
          bgm.actuallyPause();
        }
      }
    }
  }
}
const BattleSound = new class {
  soundCache = {};
  bgm = [];

  // options
  effectVolume = 50;
  bgmVolume = 50;
  muted = false;
  getSound(url) {
    if (!window.HTMLAudioElement) return;
    if (this.soundCache[url]) return this.soundCache[url];
    try {
      const sound = document.createElement('audio');
      sound.src = Dex.resourcePrefix + url;
      sound.volume = this.effectVolume / 100;
      this.soundCache[url] = sound;
      return sound;
    } catch {}
  }
  playEffect(url) {
    this.playSound(url, this.muted ? 0 : this.effectVolume);
  }
  playSound(url, volume) {
    if (!volume) return;
    const effect = this.getSound(url);
    if (effect) {
      effect.volume = volume / 100;
      effect.play()?.catch(() => {});
    }
  }

  /** loopstart and loopend are in milliseconds */
  loadBgm(url, loopstart, loopend, replaceBGM) {
    if (replaceBGM) {
      replaceBGM.stop();
      this.deleteBgm(replaceBGM);
    }
    const bgm = new BattleBGM(url, loopstart, loopend);
    this.bgm.push(bgm);
    return bgm;
  }
  deleteBgm(bgm) {
    const soundIndex = BattleSound.bgm.indexOf(bgm);
    if (soundIndex >= 0) BattleSound.bgm.splice(soundIndex, 1);
  }
  currentBgm() {
    if (!this.bgmVolume || this.muted) return false;
    for (const bgm of this.bgm) {
      if (bgm.isPlaying) return bgm;
    }
    return null;
  }

  // setting
  setMute(muted) {
    muted = !!muted;
    if (this.muted === muted) return;
    this.muted = muted;
    BattleBGM.update();
  }
  loudnessPercentToAmplitudePercent(loudnessPercent) {
    // 10 dB is perceived as approximately twice as loud
    let decibels = 10 * Math.log(loudnessPercent / 100) / Math.log(2);
    return 10 ** (decibels / 20) * 100;
  }
  setBgmVolume(bgmVolume) {
    this.bgmVolume = this.loudnessPercentToAmplitudePercent(bgmVolume);
    BattleBGM.update();
  }
  setEffectVolume(effectVolume) {
    this.effectVolume = this.loudnessPercentToAmplitudePercent(effectVolume);
  }
}();
if (typeof PS === 'object') {
  PS.prefs.subscribeAndRun(key => {
    if (!key || key === 'musicvolume' || key === 'effectvolume' || key === 'mute') {
      BattleSound.effectVolume = PS.prefs.effectvolume;
      BattleSound.bgmVolume = PS.prefs.musicvolume;
      BattleSound.muted = PS.prefs.mute;
      BattleBGM.update();
    }
  });
}
/**
 * Pokemon Showdown Log Misc
 *
 * Some miscellaneous helper functions for battle-log.ts, namely:
 *
 * - an MD5 hasher
 *
 * - nothing else, currently
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

/* eslint-disable */

// MD5 minified
function MD5(f) {
  function i(b, c) {
    var d, e, f, g, h;
    f = b & 2147483648;
    g = c & 2147483648;
    d = b & 1073741824;
    e = c & 1073741824;
    h = (b & 1073741823) + (c & 1073741823);
    return d & e ? h ^ 2147483648 ^ f ^ g : d | e ? h & 1073741824 ? h ^ 3221225472 ^ f ^ g : h ^ 1073741824 ^ f ^ g : h ^ f ^ g;
  }
  function j(b, c, d, e, f, g, h) {
    b = i(b, i(i(c & d | ~c & e, f), h));
    return i(b << g | b >>> 32 - g, c);
  }
  function k(b, c, d, e, f, g, h) {
    b = i(b, i(i(c & e | d & ~e, f), h));
    return i(b << g | b >>> 32 - g, c);
  }
  function l(b, c, e, d, f, g, h) {
    b = i(b, i(i(c ^ e ^ d, f), h));
    return i(b << g | b >>> 32 - g, c);
  }
  function m(b, c, e, d, f, g, h) {
    b = i(b, i(i(e ^ (c | ~d), f), h));
    return i(b << g | b >>> 32 - g, c);
  }
  function n(b) {
    var c = "",
      e = "",
      d;
    for (d = 0; d <= 3; d++) e = b >>> d * 8 & 255, e = "0" + e.toString(16), c += e.substr(e.length - 2, 2);
    return c;
  }
  var g = [],
    o,
    p,
    q,
    r,
    b,
    c,
    d,
    e,
    f = function (b) {
      for (var b = b.replace(/\r\n/g, "\n"), c = "", e = 0; e < b.length; e++) {
        var d = b.charCodeAt(e);
        d < 128 ? c += String.fromCharCode(d) : (d > 127 && d < 2048 ? c += String.fromCharCode(d >> 6 | 192) : (c += String.fromCharCode(d >> 12 | 224), c += String.fromCharCode(d >> 6 & 63 | 128)), c += String.fromCharCode(d & 63 | 128));
      }
      return c;
    }(f),
    g = function (b) {
      var c,
        d = b.length;
      c = d + 8;
      for (var e = ((c - c % 64) / 64 + 1) * 16, f = Array(e - 1), g = 0, h = 0; h < d;) c = (h - h % 4) / 4, g = h % 4 * 8, f[c] |= b.charCodeAt(h) << g, h++;
      f[(h - h % 4) / 4] |= 128 << h % 4 * 8;
      f[e - 2] = d << 3;
      f[e - 1] = d >>> 29;
      return f;
    }(f);
  b = 1732584193;
  c = 4023233417;
  d = 2562383102;
  e = 271733878;
  for (f = 0; f < g.length; f += 16) o = b, p = c, q = d, r = e, b = j(b, c, d, e, g[f + 0], 7, 3614090360), e = j(e, b, c, d, g[f + 1], 12, 3905402710), d = j(d, e, b, c, g[f + 2], 17, 606105819), c = j(c, d, e, b, g[f + 3], 22, 3250441966), b = j(b, c, d, e, g[f + 4], 7, 4118548399), e = j(e, b, c, d, g[f + 5], 12, 1200080426), d = j(d, e, b, c, g[f + 6], 17, 2821735955), c = j(c, d, e, b, g[f + 7], 22, 4249261313), b = j(b, c, d, e, g[f + 8], 7, 1770035416), e = j(e, b, c, d, g[f + 9], 12, 2336552879), d = j(d, e, b, c, g[f + 10], 17, 4294925233), c = j(c, d, e, b, g[f + 11], 22, 2304563134), b = j(b, c, d, e, g[f + 12], 7, 1804603682), e = j(e, b, c, d, g[f + 13], 12, 4254626195), d = j(d, e, b, c, g[f + 14], 17, 2792965006), c = j(c, d, e, b, g[f + 15], 22, 1236535329), b = k(b, c, d, e, g[f + 1], 5, 4129170786), e = k(e, b, c, d, g[f + 6], 9, 3225465664), d = k(d, e, b, c, g[f + 11], 14, 643717713), c = k(c, d, e, b, g[f + 0], 20, 3921069994), b = k(b, c, d, e, g[f + 5], 5, 3593408605), e = k(e, b, c, d, g[f + 10], 9, 38016083), d = k(d, e, b, c, g[f + 15], 14, 3634488961), c = k(c, d, e, b, g[f + 4], 20, 3889429448), b = k(b, c, d, e, g[f + 9], 5, 568446438), e = k(e, b, c, d, g[f + 14], 9, 3275163606), d = k(d, e, b, c, g[f + 3], 14, 4107603335), c = k(c, d, e, b, g[f + 8], 20, 1163531501), b = k(b, c, d, e, g[f + 13], 5, 2850285829), e = k(e, b, c, d, g[f + 2], 9, 4243563512), d = k(d, e, b, c, g[f + 7], 14, 1735328473), c = k(c, d, e, b, g[f + 12], 20, 2368359562), b = l(b, c, d, e, g[f + 5], 4, 4294588738), e = l(e, b, c, d, g[f + 8], 11, 2272392833), d = l(d, e, b, c, g[f + 11], 16, 1839030562), c = l(c, d, e, b, g[f + 14], 23, 4259657740), b = l(b, c, d, e, g[f + 1], 4, 2763975236), e = l(e, b, c, d, g[f + 4], 11, 1272893353), d = l(d, e, b, c, g[f + 7], 16, 4139469664), c = l(c, d, e, b, g[f + 10], 23, 3200236656), b = l(b, c, d, e, g[f + 13], 4, 681279174), e = l(e, b, c, d, g[f + 0], 11, 3936430074), d = l(d, e, b, c, g[f + 3], 16, 3572445317), c = l(c, d, e, b, g[f + 6], 23, 76029189), b = l(b, c, d, e, g[f + 9], 4, 3654602809), e = l(e, b, c, d, g[f + 12], 11, 3873151461), d = l(d, e, b, c, g[f + 15], 16, 530742520), c = l(c, d, e, b, g[f + 2], 23, 3299628645), b = m(b, c, d, e, g[f + 0], 6, 4096336452), e = m(e, b, c, d, g[f + 7], 10, 1126891415), d = m(d, e, b, c, g[f + 14], 15, 2878612391), c = m(c, d, e, b, g[f + 5], 21, 4237533241), b = m(b, c, d, e, g[f + 12], 6, 1700485571), e = m(e, b, c, d, g[f + 3], 10, 2399980690), d = m(d, e, b, c, g[f + 10], 15, 4293915773), c = m(c, d, e, b, g[f + 1], 21, 2240044497), b = m(b, c, d, e, g[f + 8], 6, 1873313359), e = m(e, b, c, d, g[f + 15], 10, 4264355552), d = m(d, e, b, c, g[f + 6], 15, 2734768916), c = m(c, d, e, b, g[f + 13], 21, 1309151649), b = m(b, c, d, e, g[f + 4], 6, 4149444226), e = m(e, b, c, d, g[f + 11], 10, 3174756917), d = m(d, e, b, c, g[f + 2], 15, 718787259), c = m(c, d, e, b, g[f + 9], 21, 3951481745), b = i(b, o), c = i(c, p), d = i(d, q), e = i(e, r);
  return (n(b) + n(c) + n(d) + n(e)).toLowerCase();
}
;
/* eslint-enable */
/**
 * Battle log
 *
 * An exercise in minimalism! This is a dependency of the client, which
 * requires IE9+ and uses Preact, and the replay player, which requires
 * IE7+ and uses jQuery. Therefore, this has to be compatible with IE7+
 * and use the DOM directly!
 *
 * Special thanks to PPK for QuirksMode.org, one of the few resources
 * available for how to do web development in these conditions.
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

// optional

// Caja

// defined in battle-log-misc

class BattleLog {
  elem;
  innerElem;
  scene = null;
  preemptElem = null;
  atBottom = true;
  skippedLines = false;
  className;
  battleParser = null;
  joinLeave = null;
  lastRename = null;
  /**
   * * -1 = spectator: "Red sent out Pikachu!" "Blue's Eevee used Tackle!"
   * * 0 = player 1: "Go! Pikachu!" "The opposing Eevee used Tackle!"
   * * 1 = player 2: "Red sent out Pikachu!" "Eevee used Tackle!"
   */
  perspective = -1;
  getHighlight = null;
  isIgnored = null;
  canRevealMessages = null;
  constructor(elem, scene, innerElem) {
    this.elem = elem;
    innerElem ||= elem.querySelector('.inner') || undefined;
    if (!innerElem) {
      elem.setAttribute('role', 'log');
      elem.innerHTML = '';
      innerElem = document.createElement('div');
      innerElem.className = 'inner message-log';
      elem.appendChild(innerElem);
    }
    this.innerElem = innerElem;
    if (scene) {
      this.scene = scene;
      let preemptElem = elem.querySelector('.inner-preempt');
      if (!preemptElem) {
        preemptElem = document.createElement('div');
        preemptElem.className = 'inner-preempt message-log';
        elem.appendChild(preemptElem);
      }
      this.preemptElem = preemptElem;
      this.battleParser = new BattleTextParser();
    }
    this.className = elem.className;
    elem.onscroll = this.onScroll;
    elem.onclick = this.onClick;
  }
  onClick = ev => {
    let target = ev.target;
    while (target && target !== this.elem) {
      if (target.tagName === 'SUMMARY') {
        if (window.getSelection?.()?.type === 'Range') {
          // by default, selecting text will also expand/collapse details, which
          // is annoying. this prevents that.
          ev.preventDefault();
        } else {
          setTimeout(this.updateScroll, 0);
        }
      }
      target = target.parentElement;
    }
  };
  onScroll = () => {
    const distanceFromBottom = this.elem.scrollHeight - this.elem.scrollTop - this.elem.clientHeight;
    this.atBottom = distanceFromBottom < 30;
  };
  reset() {
    if (this.battleParser) {
      this.battleParser.language = Dex.text.getLanguage();
      this.battleParser.lowercaseRegExp = undefined;
    }
    this.innerElem.innerHTML = '';
    if (this.preemptElem) this.preemptElem.innerHTML = '';
    this.atBottom = true;
    this.skippedLines = false;
    this.joinLeave = null;
    this.lastRename = null;
  }
  destroy() {
    this.elem.onscroll = null;
    this.elem.innerHTML = '';
  }
  addSeekEarlierButton() {
    if (this.skippedLines) return;
    this.skippedLines = true;
    const el = document.createElement('div');
    el.className = 'chat';
    el.innerHTML = `<button class="button earlier-button"><i class="fa fa-caret-up" aria-hidden="true"></i><br />${TL`[Earlier messages]`}</button>`;
    const button = el.getElementsByTagName('button')[0];
    button?.addEventListener?.('click', e => {
      e.preventDefault();
      this.scene?.battle.seekBy(-100);
    });
    this.addNode(el);
  }
  static renderTimestamp(timestamp, showTimestamps) {
    if (!showTimestamps) return '';
    const date = timestamp && !isNaN(timestamp) ? new Date(timestamp * 1000) : new Date();
    const components = [date.getHours(), date.getMinutes()];
    if (showTimestamps === 'seconds') components.push(date.getSeconds());
    return `<small class="gray">[${components.map(x => x < 10 ? `0${x}` : x).join(':')}] </small>`;
  }
  add(args, kwArgs, preempt, showTimestamps) {
    if (kwArgs?.silent) return;
    const battle = this.scene?.battle;
    if (battle?.seeking) {
      if (battle.stepQueue.length > 2000) {
        // adding elements gets slower and slower the more there are
        // (so showing 100 turns takes around 2 seconds, and 1000 turns takes around a minute)
        // capping at 100 turns makes everything _reasonably_ snappy
        if (battle.seeking === Infinity ? battle.currentStep < battle.stepQueue.length - 2000 : battle.turn < battle.seeking - 100) {
          this.addSeekEarlierButton();
          return;
        }
      }
    }
    let divClass = 'chat';
    let divHTML = '';
    let noNotify;
    if (!['name', 'n'].includes(args[0])) this.lastRename = null;
    switch (args[0]) {
      case 'chat':
      case 'c':
      case 'c:':
        let name;
        let message;
        let timestamp = 0;
        if (args[0] === 'c:') {
          timestamp = parseInt(args[1]);
          name = args[2];
          message = args[3];
        } else {
          name = args[1];
          message = args[2];
        }
        let rank = name.charAt(0);
        if (battle?.ignoreSpects && ' +'.includes(rank)) return;
        if (battle?.ignoreOpponent) {
          if ('\u2605\u2606'.includes(rank) && toUserid(name) !== (window.app?.user?.get('userid') || window.PS?.user?.userid)) {
            return;
          }
        }
        const isIgnored = this.isIgnored ? this.isIgnored(name) : window.app?.ignore?.[toUserid(name)] && ' +^\u2605\u2606'.includes(rank);
        if (isIgnored) return;
        const timestampHtml = BattleLog.renderTimestamp(timestamp, showTimestamps);
        const isHighlighted = window.app?.rooms?.[battle.roomid].getHighlight(message) || this.getHighlight?.(args);
        [divClass, divHTML, noNotify] = this.parseChatMessage(message, name, timestampHtml, isHighlighted);
        if (!noNotify && isHighlighted) {
          const notifyTitle = TL`Mentioned by ${name} in ${battle?.roomid || ''}`;
          window.app?.rooms[battle?.roomid || '']?.notifyOnce(notifyTitle, "\"" + message + "\"", 'highlight');
        }
        break;
      case 'join':
      case 'j':
      case 'leave':
      case 'l':
        {
          const user = BattleTextParser.parseNameParts(args[1]);
          if (battle?.ignoreSpects && ' +'.includes(user.group)) return;
          const formattedUser = user.group + user.name;
          const isJoin = args[0].startsWith('j');
          if (!this.joinLeave) {
            this.joinLeave = {
              joins: [],
              leaves: [],
              element: document.createElement('div')
            };
            this.joinLeave.element.className = 'chat';
          }
          if (isJoin && this.joinLeave.leaves.includes(formattedUser)) {
            this.joinLeave.leaves.splice(this.joinLeave.leaves.indexOf(formattedUser), 1);
          } else {
            this.joinLeave[isJoin ? "joins" : "leaves"].push(formattedUser);
          }
          const joins = this.joinLeave.joins.length ? TL`${this.textList(this.joinLeave.joins)} joined` : '';
          const leaves = this.joinLeave.leaves.length ? TL`${this.textList(this.joinLeave.leaves)} left` : '';
          const buf = joins && leaves ? TL`${joins}; ${leaves}` : joins || leaves;
          this.joinLeave.element.innerHTML = `<small class="gray">${BattleLog.escapeHTML(buf)}</small>`;
          (preempt ? this.preemptElem : this.innerElem).appendChild(this.joinLeave.element);
          return;
        }
      case 'name':
      case 'n':
        {
          const user = BattleTextParser.parseNameParts(args[1]);
          if (toID(args[2]) === toID(user.name)) return;
          if (!this.lastRename || toID(this.lastRename.to) !== toID(user.name)) {
            this.lastRename = {
              from: args[2],
              to: '',
              element: document.createElement('div')
            };
            this.lastRename.element.className = 'chat';
          }
          this.lastRename.to = user.group + user.name;
          const renameTo = BattleLog.escapeHTML(this.lastRename.to);
          const renameFrom = BattleLog.escapeHTML(this.lastRename.from);
          this.lastRename.element.innerHTML = `<small class="gray">${TL`${renameTo} renamed from ${renameFrom}.`}</small>`;
          (preempt ? this.preemptElem : this.innerElem).appendChild(this.lastRename.element);
          return;
        }
      case 'chatmsg':
      case '':
        divHTML = BattleLog.escapeHTML(args[1]);
        break;
      case 'chatmsg-raw':
      case 'raw':
      case 'html':
        divHTML = BattleLog.sanitizeHTML(args[1]);
        break;
      case 'uhtml':
      case 'uhtmlchange':
        this.changeUhtml(args[1], args[2], args[0] === 'uhtml');
        return ['', ''];
      case 'error':
      case 'inactive':
      case 'inactiveoff':
        divClass = 'chat message-error';
        divHTML = BattleLog.escapeHTML(args[1]);
        break;
      case 'bigerror':
        this.message('<div class="broadcast-red">' + BattleLog.escapeHTML(args[1]).replace(/\|/g, '<br />') + '</div>');
        return;
      case 'pm':
        if (args[3].startsWith('/text ')) args[3] = args[3].slice(6);
        if (args[3].startsWith('/raw') || args[3].startsWith('/html') || args[3].startsWith('/uhtml') || args[3].startsWith('/uhtmlchange')) {
          return;
        }
        const colorStyle = ` style="color:${BattleLog.usernameColor(toID(args[1]))}"`;
        const pmTarget = BattleLog.escapeHTML(args[2]);
        divHTML = BattleLog.renderTimestamp(null, showTimestamps) + `<strong${colorStyle}> ${this.renderName(args[1])}:</strong> <span class="message-pm"><i style="cursor:pointer" data-href="dm-${toID(args[1])}">${TL`(Private to ${pmTarget})`}</i> ${BattleLog.parseMessage(args[3])} </span>`;
        break;
      case 'b':
      case 'B':
        {
          const showBattlesPref = window.PS?.prefs?.showbattles;
          if (args[0] === 'B' && showBattlesPref === false) return;
          const id = args[1];
          const format = BattleLog.escapeFormat(BattleLog.roomidToFormat(id));
          const battleP1 = `<strong style="color:${BattleLog.usernameColor(toUserid(args[2]))}">${BattleLog.escapeHTML(args[2])}</strong>`;
          const battleP2 = `<strong style="color:${BattleLog.usernameColor(toUserid(args[3]))}">${BattleLog.escapeHTML(args[3])}</strong>`;
          let started;
          if (format && format !== 'Random Battle') {
            started = TL`${format} battle started between ${battleP1} and ${battleP2}.`;
          } else if (format) {
            started = TL`${format} started between ${battleP1} and ${battleP2}.`;
          } else {
            started = TL`Battle started between ${battleP1} and ${battleP2}.`;
          }
          divClass = 'notice';
          divHTML = `<a href="/${BattleLog.escapeHTML(id)}" class="ilink">${started}</a>`;
          this.joinLeave = null;
          break;
        }
      case 'askreg':
        this.addDiv('chat', `<div class="broadcast-blue"><b>${TL`Register an account to protect your ladder rating!`}</b><br /><button name="register" value="${BattleLog.escapeHTML(args[1])}"><b>${TL`[Register]`}</b></button></div>`);
        return;
      case 'unlink':
        {
          // |unlink| is deprecated in favor of |hidelines|
          if (window.PS?.prefs?.nounlink || window.Dex?.prefs?.nounlink) return;
          const user = toID(args[2]) || toID(args[1]);
          this.unlinkChatFrom(user);
          if (args[2]) {
            const lineCount = parseInt(args[3], 10);
            this.hideChatFrom(user, true, lineCount);
          }
          return;
        }
      case 'hidelines':
        {
          if (window.PS?.prefs?.nounlink || window.Dex?.prefs?.nounlink) return;
          const user = toID(args[2]);
          this.unlinkChatFrom(user);
          if (args[1] !== 'unlink') {
            const lineCount = parseInt(args[3], 10);
            this.hideChatFrom(user, args[1] === 'hide' || !!this.canRevealMessages?.(), lineCount);
          }
          return;
        }
      case 'debug':
        divClass = 'debug';
        divHTML = '<div class="chat"><small style="color:#999">[DEBUG] ' + BattleLog.escapeHTML(args[1]) + '.</small></div>';
        break;
      case 'notify':
        const title = args[1];
        const body = args[2];
        const roomid = this.scene?.battle.roomid;
        if (!roomid) break;
        window.app?.rooms[roomid].notifyOnce(title, body, 'highlight');
        break;
      case 'showteam':
        {
          if (!battle) return;
          const team = Teams.unpack(args[2]);
          if (!team.length) return;
          const side = battle.getSide(args[1]);
          const exportedTeam = team.map(set => {
            let buf = Teams.export([set], battle.dex).replace(/\n/g, '<br />');
            if (set.name && set.name !== set.species) {
              buf = buf.replace(set.name, BattleLog.sanitizeHTML(`<span class="picon" style="${Dex.getPokemonIcon(set.species)}"></span><br />${set.name}`));
            } else {
              buf = buf.replace(set.species, `<span class="picon" style="${Dex.getPokemonIcon(set.species)}"></span><br />${set.species}`);
            }
            if (set.item) {
              buf = buf.replace(set.item, `${set.item} <span class="itemicon" style="${Dex.getItemIcon(set.item)}"></span>`);
            }
            return buf;
          }).join('');
          divHTML = `<div class="infobox"><details class="details"><summary>${TL`Open team sheet for ${side.name}`}</summary>${exportedTeam}</details></div>`;
          break;
        }
      case 'seed':
      case 'choice':
      case ':':
      case 'timer':
      case 't:':
      case 'J':
      case 'L':
      case 'N':
      case 'spectator':
      case 'spectatorleave':
      case 'initdone':
        return;
      default:
        this.addBattleMessage(args, kwArgs);
        this.joinLeave = null;
        return;
    }
    if (divHTML) {
      this.addDiv(divClass, divHTML, preempt);
      this.joinLeave = null;
    }
  }
  addBattleMessage(args, kwArgs) {
    switch (args[0]) {
      case 'warning':
        this.message(`<strong>${TL.label(TL`Warning`)}</strong>` + BattleLog.escapeHTML(args[1]));
        this.message(`Bug? Report it to <a href="http://www.smogon.com/forums/showthread.php?t=3453192">the replay viewer's Smogon thread</a>`);
        if (this.scene) this.scene.wait(1000);
        return;
      case 'variation':
        this.addDiv('', `<small>${TL.label(TL`Variation`)}<em>` + BattleLog.escapeHTML(args[1]) + '</em></small>');
        break;
      case 'rule':
        const ruleArgs = args[1].split(': ');
        this.addDiv('', '<small><em>' + BattleLog.escapeHTML(ruleArgs[0]) + (ruleArgs[1] ? ':' : '') + '</em> ' + BattleLog.escapeHTML(ruleArgs[1] || '') + '</small>');
        break;
      case 'rated':
        this.addDiv('rated', '<strong>' + (BattleLog.escapeHTML(args[1]) || TL`Rated battle`) + '</strong>');
        break;
      case 'tier':
        this.addDiv('', `<small>${TL.label(TL`Format`)}</small><br /><strong>` + BattleLog.escapeHTML(args[1]) + '</strong>');
        break;
      case 'turn':
        const h2elem = document.createElement('h2');
        h2elem.className = 'battle-history';
        h2elem.innerHTML = BattleLog.escapeHTML(this.turnText(args[1]));
        if (this.battleParser) this.battleParser.curLineSection = 'break';
        this.addSpacer();
        this.addNode(h2elem);
        break;
      default:
        if (this.addAFDMessage(args, kwArgs)) return;
        const line = this.battleParser?.parseArgs(args, kwArgs || {}, true) ?? null;
        if (line === null) {
          this.addDiv('chat message-error', 'Unrecognized: |' + BattleLog.escapeHTML(args.join('|')));
          return;
        }
        if (line) this.messageFromLog(line);
        break;
    }
  }
  addAFDMessage(args, kwArgs = {}) {
    if (!Dex.afdMode) return;
    if (!this.battleParser || !this.scene) return;

    // return true to skip the default message
    const messageFromArgs = (args1, kwArgs1 = {}) => {
      this.messageFromLog(this.battleParser.parseArgs(args1, kwArgs1, true));
    };

    // Taunt and Chilly Reception messages (below) will appear in ALL AFD modes.

    if (args[0] === 'move') {
      if (kwArgs.from) return false;
      const moveid = toID(args[2]);
      if (moveid === 'taunt') {
        // April Fool's 2013, expanded in 2025
        messageFromArgs(args, kwArgs);
        const quotes = ["Yo mama so fat, she 4x resists Ice- and Fire-type attacks!", "Yo mama so ugly, Captivate raises her opponent's Special Attack!", "Yo mama so dumb, she lowers her Special Attack when she uses Nasty Plot!", "Yo mama so fat, she eats her Aguav Berry at 50% HP!", "Yo Mama so stupid, she tried to count clouds one through eight!", "Yo Mama so stupid, she thought Sticky Hold meant she needed to grab a stick!", "Yo Mama so old, her Paradox forme would be Great Grandma!", "Yo Mama so stupid, she can't learn anything from the move tutor!", "Yo Mama so rude, she got Kyogre and Groudon to team up against her!", "Yo Mama so fat, Focus Blast never misses her!", "Yo Mama so fat, the Darkest Day is when she's tanning!", "Yo Mama so stinky, her damaging moves have a 10% chance to make the opponent flinch!", "Yo Mama so old, she has the NPCs from Legends Arceus in her yearbook!", "Yo Mama so stupid, she's still trying to find Rhydon!", "Yo Mama so stupid, she asked if the Insect Plate comes with an appetizer!", "Yo Mama so bad, she got her Stunfisk paralyzed!", "Yo Mama so nasty, Black Sludge heals her 1/16th!", "Yo Mama so stupid, she gave her Bisharp Black Sludge!", "Yo Mama so stupid, she runs a suboptimal EV spread on her Tera Poison Calm Mind Chimecho, making it faint to a Choice Banded Dragonite Tera Normal Extreme Speed!", "Yo Mama so casual, she mains NatDex AG!", "Yo Mama so casual, she ladders with Red's team!", "Yo Mama so dumb, she scouts teams in Randbats!", "Yo Mama so lazy, she loafs around every turn!", "Yo Mama so fat, she changes type when holding a Dinner Plate!", "Yo Mama so slow, even Trick Room won't let her go first!", "Yo Mama so dumb, not even Gummis can raise her IQ!", "Show me your moves!", "Yo Mama so nasty, thinking about her gives a +2 Special Attack boost!", "Yo Mama so broke, her deck has no energy cards so she can save on electricity!", "Yo Mama so dumb, she tried using Twitch Plays Pokemon as a walkthrough guide!", "Yo Mama so dumb, Slowpoke finishes her sentences!", "Yo Mama so old, she babysat AZ!", "Yo Mama so stupid, not even Own Tempo could prevent her from being confused!", "Yo Mama so ugly, even Brock wanted nothing to do with her!", "Yo Mama so stupid, she drank antifreeze to cure her status condition!", "Yo Mama so trashy, they named a Wormadam forme after her!", "Yo Mama so broke, her Gholdengo is made out of checkers!", "Yo Mama so ugly, she killed Mimikyu when it saw her!", "Yo Mama so fat, she doesn't need a Wailord to meet the Regis!", "Unfortunate doesn't even begin to describe Yo Mama!", "Yo Mama so dumb, she brags about using a bot to get her opponent's teams!", "Yo Mama so fat, her Wishes cause integer overflows!", "Yo Mama so ugly, she makes Attract fail!", "Yo Mama so dumb, she makes Dondozo look aware!", "Yo Mama so smelly, she KOes Nosepass without making a single move!", "Yo mama so fat, she doesn't know what the item Leftovers is!", "Yo Mama so ugly, she gets OHKOed by Mirror Shot!", "Yo Mama so smelly, her VGC analysis pairs her with Slaking!", "Yo Mama so old, she has to be extracted in Cinnabar Lab!", "Yo Mama so fat, she sets Gravity on switch-in!", "Yo Mama so dumb, she's immune to this move!"];
        const battle = this.scene.battle;
        // make sure it's the same joke for both players (and spectators)
        const quote = quotes[((battle.p1.name.charCodeAt(2) || 0) + (battle.p2.name.charCodeAt(2) || 0) * 19 + (battle.p1.name.charCodeAt(3) || 0) * 61 + (battle.p2.name.charCodeAt(3) || 0) + battle.turn + (args[1].charCodeAt(1) || 0) * 109 + (args[1].charCodeAt(2) || 0) * 113) % quotes.length];
        this.messageFromLog(this.battleParser.fixLowercase(`${this.battleParser.pokemon(args[1])} said, "${quote}"`));
        // give time to read
        this.scene.wait(3 * this.scene.battle.messageFadeTime / this.scene.acceleration);
        return true;
      }
    } else if (args[0] === '-prepare') {
      const moveid = toID(args[2]);
      if (moveid === 'chillyreception') {
        // April Fool's 2025
        const dadJokes = ["This should be a Fire-type move, because I'm spitting flames.", "Why didn't Vigoroth evolve? Because it was Slaking on its training!", "I'm going snowwhere fast!", "Don't Slack Off if you wanna beat me!", "Where do you buy toys for a Ground-type? Land-R-Us!", "I've got half a mind to just leave. The other half belongs to my Shellder.", "Why did the Slowking cross the road?", "What's the best Pokemon to get rid of bugs? Flygone!", "What's the best Pokemon to get rid of bugs? Heatmor. What, were you expecting a pun?", "I guess you could call Heatmor an Ant-heater.", "Why do they call it Enamor-us when you can only have one of them on a team?", "Cloyster? I hardly know 'er!", "Why do they call Shedinja invincible when I can still see it?", "Dondozo? I don't think I can, that seems really cumbersome.", "Appletun? No, there's only one of them.", "Drilbur? I hardly know 'er!", "Iron Crown? I hardly know 'er!", "Shellder? I hardly know 'er!", "Magnemite? I sure hope it will!", "Graveler? I hardly know 'er!", "Grimer? I hardly know 'er!", "Baxcalibur? I hardly know 'er!", "Why do they call it Kyurem when it doesn't heal anybody?", "Conkeldurr? I hardly know 'er!", "Weavile? No, I don't think we are.", "Dragapult? Doesn't seem very efficient, don't they usually have wheels?", "Dragonite? Sounds like it'd be hard with all that heavy armor.", "How do you play whack-a-mole with a Fighting-type? Hit 'm on top!", "I don't know who made Pokemon Go, but I'm trying to figure out how to make them Pokemon Go to the polls!", "Gholdengo? Yeah, it should gholden-go somewhere else.", "Some folks call me Charming, but I still feel like I take plenty of physical damage. What gives?", "I learned this move in South America, they called it a Chile Reception", "I had a Canadian Tyrogue. It evolved into a Hitmontreal.", "Why do Venusaur's roommates wear earplugs at night? Because Venus-snores!", "I bought stock in my Charmander before it evolved. Now I'm a Charmeleonaire!", "Charizard? I actually think char is pretty easy!", "Why doesn't Squirtle's mom buy it action figures? Because it likes to blast toys!", "Why does Caterpie like Margarine so much? Because it's butter-free!", "What did the Alolan Raichu say to the surfer? Nothing, it just waved!", "Clefable? What's Clef able to do?", "Why did the Nidorans start a revolution? Because they didn't Nidoking!", "Alolan Ninetales? More like Aurora Nine-veils!", "Wigglytuff? Doesn't look that tough to me.", "I dug up a weird vegetable yesterday. Well, it wasn't THAT weird, just a little Oddish!", "Why was the Vileplume so happy? Because it wasn't Gloom-y anymore!", "What do you call three guys named Doug? A Dugtrio!", "Why is it called Golduck when it's blue?", "What Rock-type is the best at soccer? Goal-em!", "Why is Galarian Slowbro so good at art? Because it's Quick on the Draw!", "Do you like my jokes? I've got a Magne-ton of them!", "Where do three-headed birds go for Carnival? Dodrio de Janeiro!", "What would Muk be called if it could rap? Slime Shady!", "Kingler? I hardly know 'er!", "Exeggutor? I hardly know 'er!", "Have you heard that Trainers who use Hypno are hip? No?", "What do ghosts build at Christmastime? Gengar-bread houses!", "What street does Voltorb live on? Elect Road!", "I told a Hitmonlee some of my jokes. He really got a kick out of them!", "What's a Hitmonchan's favorite holiday? Boxing Day!", "Did you know Galarian Weezing doesn't know how to drive? It always puts the car in Neutral before stepping on the Gas!", "How can you tell if a Poison-type has asthma? See if it's Weezing!", "What Pokémon loves to find you when you hide? Seaking!", "If we Psychic-types made a movie, it would have to Starmie!", "Scyther? I hardly know 'er!", "Pinsir? I hardly know 'er!", "What Pokémon does Aladdin ride? A Magikarpet!", "What do you get if you cut a Gyarados in half? Gyara-uno!", "What do you call a Lapras carrying a gun? The Glock Ness Monster!", "What's a Ditto's favorite food? Impasta!", "Flareon? They should turn the flare off!", "Where does a 1000-pound Snorlax sleep? Anywhere it wants!", "Zapdos? Zap those what?", "My Grass-type friend has been losing weight recently. It's nice to see them losing a few pounds, but I hate to see Me-gaining-'em!", "What does a Fire-type wear around its neck? A Tie-phlosion!", "Why do they call Ledian the Five Star Pokémon? I'd give it two stars at best!", "Ariados? That's impressive, most people can't even perform one aria.", "Crobat? It doesn't look like a crow at all!", "Why do web developers hire Xatu to predict their profits? Because it can see their Future Sites!", "What superhero lives under the sea and has Volt Absorb? The Green Lanturn!", "Why should you never play cards with the Cottonweed Pokémon? Because it always Jump-bluffs!", "What Pokémon comes after Espeon? T-peon!", "Why did the Kartana faint to Bullet Punch? Because Scizor beats paper!", "Sometimes I put lava in my gas tank. It really makes Magcargo!", "I wrote my Ice-type friend a letter. I hope it gets Delibird!", "What's a Mantine's favorite type of cheese? Mantaray Jack!", "What kind of bird is Skarmory? A Roost-er!", "My friend caught a Porygon. I also did, but he got jealous when I told him I caught a Porygon too!", "What do you name a Smeargle that can't use Sketch anymore? Drew!", "Why couldn't the smart Chansey evolve? Because ignorance is Blissey!", "The classic Suicune set has a Water move, Calm Mind, and Sleep Talk. That's only 3 moves, but I'm sure you can figure out the Rest!", "I went to one of Lugia's parties once. It was an Aero-blast!", "What do pseudo-Legendaries pave their roads with? Tyrani-tar!", "What's Ho-Oh's favorite food? Hot wings!", "How often does Celebi travel? From time to time!", "What's on a Grass-type's bathroom floor? Scep-tiles!", "What's Blaziken's favorite food? Fried chicken!", "Why doesn't Swampert go outside? Because it can't touch grass!", "How do I know my jokes are good? I told them to a Mightyena and it couldn't stop laughing!", "What kind of Poké Ball do you catch Dustox in? A mothball!", "Who are Shiftry's biggest fans? Its hands!", "Why was the evolving Surskit brought before a court? It was Masqu-arraigned!", "Gardevoir? What's a voir and why should I guard it?", "I moved in with a Breloom, but the apartment didn't have mushroom!", "What's a Hariyama's favorite Pokémon games? Ultra SuMo!", "I took my Delcatty to the vet because I thought it was going blind, but it had Normal-eyes!", "What's Sableye's zodiac sign? Gem-in-eye!", "What do you call a Medicham that's lost its pants? Yogi Bare!", "Why does Aggron plant trees after a disaster? That's part of its Aggro-culture!", "What happened when the Plusle and Minun fell in love? They multiplied!", "I once rode on a Wailord's back. It was a whale of a time!", "That Anger Point Camerupt sure has a temper. Crit it once and it'll blow its top!", "What season does Spoink like the best? Spring!", "I'd tell you a joke about Grumpig, but you wouldn't appreciate it. I'd be casting pearls before swine!", "It takes a human 5 minutes to walk a block, but for Spinda it takes half an hour. The difference is staggering!", "That cloud Pokémon acts innocent, but I know it has an Altaria motive!", "Zangoose? It doesn't look like a goose at all!", "What are Solrock's favorite music genres? Soul and rock!", "They hate on you when you're a Barboach, but everyone wants to be your friend when you pull up Whis-cash!", "What does a Lileep get from Dairy Queen? A Cra-Dilly Bar!", "I know a way you can see invisible Kecleons, but that's beyond the Scope of this joke!", "What does a Tropius wear over its shirt? A Har-vest!", "Why is it called Walrein if it's better in snow?", "I've always been a fan of ball-shaped Pokémon, but one in particular Sphealed the deal!", "I'd make a joke about Luvdisc, but it's already a joke!", "Why is the Iron Leg Pokémon always covered in dirt and slime? Because it's Meta-gross!", "Why is Regirock called the Rock Peak Pokémon when it's so mid?", "Why is Clear Body Regice such a bad liar? Because you can see right through it!", "Why was Registeel fired from the convenience store? Because it would always Steel from the Regi-ster!", "I'd make a joke about Latias, but that would be just plane silly!", "Did you know that Rayquaza has a certain smell that it takes wherever it goes? That's right, it's Draggin' A-scent!", "Did you hear about the Deoxys who took a DNA test? It got 100%!", "What would the tier leader of OU be called if he was a Jirachi? Flinchinator!", "I had a company that sold Infernapes, until I was told to cut out the monkey business!", "Kricketunes must be my biggest fans. Every time I tell a joke, they're all I hear!", "What kind of Poké Ball is best for Luxray? A Luxuray Ball!", "Where does Bastiodon make all its money? Wall Street!", "What kind of mystery novels does Wormadam like to read? Cloak and dagger!", "Remember when Pachirisu won the World Championships? That was nuts!", "Cherrim? I hardly know 'im!", "Mothim? I hardly know 'im!", "I used to buy Drifblim by the dozen, but we got hit with inflation and the price ballooned!", "I took directions from a Mismagius, but now I don't know witch way to go!", "Someone asked me if I liked Chingling. I said that I don't know, I've never chingled!", "What do you do with a Bronzong you're in love with? Give it a ring!", "People say they removed Chatot's sound-recording function because of profanity, but I think that's just mindless Chatter!", "I have 108 jokes about Spiritomb, but not a single soul wants to hear them!", "My Garchomp friend gained a lot of weight recently. He said it was pretty rough to look at the scales!", "Why does Carnivine get Levitate? Because it's a Venus flying trap!", "Why did Weavile drive a truck with six wheels? Because it had Triple Axles!", "I got yelled at by a Lickilicky once. Talk about a tongue-lashing!", "Why do they call Yanmega a dragonfly when it isn't Dragon/Flying?", "My local arcade had to kick out this Ground/Flying type. He kept getting the Gligh-score and he was really toxic about it!", "Why don't you ever see Mamoswines hiding in trees? Because they're really good at it!", "What happens when your Porygon-Z uses Signal Beam? Software bugs!", "What do you call a Gallade in a tuxedo? Sharply dressed!", "Why do they call Rotom-Heat an oven when you of in the cold food of out hot eat the food?", "Why does no one tell Rotom-Wash their secrets? They don't want it to air out their dirty laundry!", "I had a joke about Uxie, but I forgot it!", "I had a joke about Mesprit, but I don't think you're emotionally ready for it!", "I had a joke about Azelf, but I don't have the willpower to tell it!", "I had a joke about Dialga and time travel, but you didn't like it!", "I had a joke about Palkia, but there's no space for it here!", "Why couldn't Arceus go to Planet Fitness? Because it's a Judgment-free zone!", "I had a joke about the Azure Flute, but you wouldn't get it!", "Why does Victini always win? Beats me!", "Some people think Overgrow is viable on Serperior. On the Contrary!", "Once Samurott got a regional form, its usage really Spiked!", "Did you hear about the Watchog that won a battle? Yeah, me neither!", "I could tell a joke about Musharna, but I wouldn't dream of it!", "Why does Throh never win? Because it always throws!", "Cofagrigus is so cool! Don't you *cough* agree, Gus?", "I wouldn't use Zoroark in OU—I have no Illusion that it's any good!", "Why is Reuniclus so good at marketing? It knows what cells!", "Why didn't the Ducklett evolve? It didn't Swanna!", "I fought a Beartic once. It was unbearable!", "Did you know it's a crime to make a Braviary sick? It's ill-eagle!", "I attract Volcaronas like a moth to a flame!", "I'd make a joke about Cobalion, but it's un-Justified!", "What did Zekrom do when it was unhappy with its working conditions? It went on Bolt Strike!", "Everyone plays Meloetta in exactly the same way. It's always the same old song and dance!", "What's a Chesnaught's favorite Nature? Naughty!", "Which part of Doublade is most dangerous? Da blade!", "I'd say I'm a Pyroar, but I'd be lion!", "Why does Talonflame laugh in the face of danger? Because it's a Brave Bird!", "I stole a Delphox's wand, but it got me in a stick-y situation!", "What are Aegislash's favorite Pokémon games? Sword and Shield!", "What do you call it when you do a favor for a Malamar and it wants one in return? Squid pro quo!", "I'm making an 8-bit game featuring Sylveon. It looks cute when it's Pixilated!", "Why did Tyrantrum get its license taken away? It kept getting in T-wrecks!", "Why does Goodra have such good fashion sense? Because it's always got the drip!", "What do you get when you cross a Kingambit with a Gourgeist? Supreme Overgourd!", "What do you call a dead Klefki? A skeleton key!", "I dated a Xerneas once, but we broke up. Now it's my X!", "I've never met an Yveltal. I don't know Y!", "Why does Zygarde-Complete work so hard? Because it always gives 100%!", "Why does Diancie have such good synergy with Ghost-types? Because diamonds are a ghoul's best friend!", "What's Hoopa's favorite video game? Portal!", "Why did Hoopa-Unbound get put into the Prison Bottle? Because it was armed and dangerous!", "What do you call a joke about Volcanion? A wisecrack-a-toa!", "Why does no one make friends with Incineroar? It's too Intimidating!", "Can a Toucannon win a Double Battle? No, but two can!", "What do you call your Lycanroc when it goes missing? A where-wolf!", "Why are Wishiwashi so smart? They swim in schools!", "What do you call it when Ribombee gets a free turn? A sticky situation!", "Why are Mudsdales so strong? They have horsepower!", "What's Araquanid's favorite candy? Bubble gum!", "I had a Salazzle girlfriend once, but I broke it off because she was too toxic!", "Why do they call it Comfey when every time someone sends it out it becomes the most stressful game of my life?", "Why did the Golisopod make an emergency exit from the job interview? It made a bad First Impression!", "I'm making a first-person shooting game starring Pyukumuku. It's called Duke Pyukem!", "Why should you never mimic a Mimikyu? Because you're risking your neck!", "Where in Alaska can you find Dhelmise? Anchorage!", "Did you know that Kommo-o's scales are falling off all across the globe? It's a problem on a worldwide scale!", "A Tapu Lele walks into a bar. The bartender gets nervous because there's no counter!", "Did you hear that Tapu Fini's terrain is gone? It'll be mist!", "Did you hear Lunala opened up a barber shop? It's called Totally Clips!", "If OU doesn't suspect test Solgaleo, I'm going to go on Sunsteel Strike!", "I heard they buffed Buzzwole in Pokémon Unite. I don't know why they needed to, it was already buff!", "I want to ask Pheromosa out, but it strikes me as unapp-roach-able!", "What do you call a Xurkitree that's only 3 feet tall? A short circuit!", "What does Celesteela order when it goes to a Chinese restaurant? One-ton soup!", "Why should you never invite a Kartana to poker night? Because it always knows when to fold!", "Why did the Guzzlord love doing difficult jobs? Because it was a glutton for punishment!", "What happened to the Necrozma that robbed a bank? It was in-prismed!", "Why does Ultra Necrozma weigh less that Dusk Mane or Dawn Wings form? Because it's more light!", "What attack does Stakataka learn at Level 1? Stakatackle!", "Why is Blacephalon's head spherical? Because it's clowning a-round!", "What is Inteleon's secret agent number? Bubble-O-7!", "I'll be here all Corvi-night, folks!", "What Bug/Psychic Pokémon can be found deep underground embedded in stone? Ore-beetle!", "Why should you never give a Drednaw the Infinity Gauntlet? Because it's a snapping turtle!", "A Flapple a day keeps the doctor away, as long as its attacks don't miss!", "Why are my jokes so popular on Galar's Route 8? Because Sandaconda don't want none unless you got puns, hun!", "My Cramorant was about to win a match, but then it choked!", "What's Toxtricity's favorite Tera type? Rock!", "Why does Centiskorch hate wearing Heavy-Duty Boots? By the time it's finished putting them all on, the battle's already over!", "I've heard a lot of gossip about Polteageist, but I don't want to spill the tea!", "Who hosts tea parties in Wonderland and bounces back hazard moves? The Mad Hatterene!", "What kind of fur do you get from Grimmsnarl? As fur away as possible!", "Of all the crimes Obstagoon's done, which one finally put it behind bars for good? Obstruction of justice!", "Where do Cursola keep their gravestones? At the Great Burial Reef!", "How does Sirfetch'd pass along all the insider info it knows about new Pokémon games? It leeks it!", "What did the Mr. Mime say to the Mr. Rime? Nothing, silly, mimes can't talk!", "I'd tell a joke about Runerigus, but the real joke is its evolution method!", "Plenty of Pokémon have ridiculous numbers of alternate forms, but Alcremie takes the cake!", "Can any Pokémon besides Tapu Lele set Psychic Terrain? Yes Indeedee!", "What's a Copperajah's favorite kind of music? Heavy Metal!", "Why did Dracovish get evicted from OU? It wouldn't pay the Fishious Rent!", "Have you seen Duraludon's Gigantamax form? It really towers over you!", "What's Dragapult's favorite game to play at a bar? Dragon Darts!", "I'd tell you a joke about Zamazenta, but I'm pressed for time!", "Why should you always run Zacian-Crowned? Because it has great STAB!", "Originally the Gen 8 designers weren't going to add a generational mechanic, but Eternatus convinced them to make Dynamax canon!", "What does Regieleki do to lose weight? Fast!", "What do you get when you cross a Regidrago and a Klefki? Lockjaw!", "I'd make a joke about Spectrier, but that would be beating a dead horse!", "Make sure to never insult Ursaluna—last time I burned it, it swept my whole team!", "Don't go near Ursaluna-Bloodmoon—it's a total lunatic!", "You'd think Basculegion would be uncomfortable traveling forward in time hundreds of years, but don't worry—it's adaptable!", "You have to use Strong Style Barb Barrage 20 times to evolve Hisuian Qwilfish? That seems like Overqwil to me!", "Did you know that Meowscarada is really good at baking bread? Apparently it has a special Flour Trick!", "I've got a ton of Skeledirge jokes. A skele-ton!", "What do you do if you see a Quaquaval getting ready to kick you in the head? Duck!", "Lokix? No thanks, I don't like using weight-based moves!", "Why did the baker get a Fidough? He kneaded one!", "How do you know Dachsbun has a good pedigree? It's pure bread!", "Why did the Garganacl ragequit while losing a battle? Because it was salty!", "You're telling me Ceruledge has dark purple armor and blue flaming swords for hands? What an edgelord!", "You should try using Electromorphosis Bellibolt—its damage output is shocking!", "I tried using Klawf on a stall team, but it was Klawful!", "Rabsca told me its true body was inside the ball it's holding. I thought that was a load of crap!", "My Shellder once spent time with an Espathra. It came back with a new Ability just called Link because Espathra takes no skill!", "Why is Corviknight's natural predator so smart? Because she Thinks-a-ton!", "I asked a Finizen why it worked as a sidekick for Palafin. The Finizen said it was serving a greater porpoise!", "If you run in front of a Revavroom you get tired, but if you run behind it you get exhausted!", "Why couldn't the Cyclizar stand up? It was two-tired!", "Why does Houndstone press F? To pay its Last Respects!", "Those entry hazards are nice, why not put up Glim-more-a' them?", "Why did Dondozo get demonetized on YouTube? It wouldn't stop cursing!", "Have you heard the joke about Farigiraf's neck? It's a long one!", "What do you call a Dudunsparce that gets faster when it's hit with a Dark move? A Rattled-snake!", "What do you call a Dunsparce? No, really, I'm curious.", "Why do people love Donphan so much? Because it has Great Tusks!", "What do you get when you cross Kingambit and Ogerpon? The Supreme Ogrelord!", "What did ancient Magneton economists invest in? Sandy Stocks!", "I'm starting a band featuring Slither Wing. It's called Smash Moth!", "Why does the Paldean alphabet go L, M, N, Flutter Mane, Q, R? Because Flutter Mane is OP!", "What did Iron Bundle's mother say when it went out in the cold? Bundle up, and be sure to cover everything!", "Iron Hands is a fantastic Pokémon. Let's all give it a great big hand!", "What should you do if an Iron Treads uses Autotomize? Tread lightly!", "What Paradox Pokémon do you like to run? Personally, I run Thorns!", "What kind of computers does Wo-Chien like to use? Tablets!", "Man, that Chien-Pao OHKOing me Sword of Ruined my day!", "When I saw my special attacks doing 25% less damage than usual, I knew there was some-Ting wrong!", "What do you call a really old Salamence telling a really dull story? Boring Moon!", "I once visited Chi-Yu's home, but it had no walls!", "I don't know what the Iron Valiant set is until I look inside the box, but I can't—it's impossible to check!", "Why is Miraidon banned to AG? Because it's from the future, so it's not allowed to be present!", "I once met a Koraidon, so I turned around and said that the past is behind me!", "What's the opposite of Walking Wake? Sleepwalking!", "What does Sinistcha wear on St. Patrick's Day? A green tea-shirt!", "Why are the Loyal Three always male? Toxic masculinity!", "One of Ogerpon's forms got banned, but it was pretty controversial on the Internet. It started a Hearth-flame war!", "You don't like Archaludon? Too bad, build a bridge and get over it!", "What move can only be used by a Hydrapple that's been fermented in brine? Pickle Beam!", "Why is Raging Bolt so delusional? Because it's got its head in the clouds!", "Iron Boulder? Boulders aren't made of iron, silly!", "Iron Crown? But my crown isn't wrinkled!", "I hear Terapagos got banned from OU in less than a day. It must've had a Stellar performance!", "I'd make a joke about Pecharunt's poison, but it's too confusing!", "How many Pokémon fans does it take to change a lightbulb? None, they just complain about how much better the last lightbulb was!", "That's the last time I try to make a call in winter, I'm getting a Chilly Reception!", "Maybe I should tell spicier jokes and go for a Chili Reception instead!", "Did you hear the one about the Slowking who switched out?", "You've heard of stand-up comedy, but have you heard of switch-out comedy?", "You bought those fossils from Clay? Did you buy them on Clay-away?", "How do you get a Trainer onto a bus? Poke 'em on!", "U-Turn? No, YOU turn, I'm going straight!", "Does Gen 1 have a Pokémon missing? No!"];
        const battle = this.scene.battle;
        // make sure it's the same joke for both players (and spectators)
        const joke = dadJokes[((battle.p1.name.charCodeAt(2) || 0) + (battle.p2.name.charCodeAt(2) || 0) * 19 + (battle.p1.name.charCodeAt(3) || 0) * 61 + (battle.p2.name.charCodeAt(3) || 0) + battle.turn + (args[1].charCodeAt(1) || 0) * 109 + (args[1].charCodeAt(2) || 0) * 113) % dadJokes.length];
        messageFromArgs(args, kwArgs);
        this.messageFromLog(`"${joke}"`);
        // give time to read
        this.scene.wait(3 * this.scene.battle.messageFadeTime / this.scene.acceleration);
        return true;
      }
    }

    // !!! EVERYTHING BELOW THIS LINE DOESN'T HAPPEN IN `/afd sprites` MODE
    if (Dex.afdMode !== true) return;
    if (args[0] === 'faint') {
      // April Fool's 2018 (DLC)
      if (!Dex.afdFaint) {
        messageFromArgs(args, kwArgs);
        this.message('<div class="broadcast-red" style="font-size:10pt">Needed that one alive? Buy <strong>Max Revive DLC</strong>, yours for only $9.99!<br /> <a href="/trustworthy-dlc-link">CLICK HERE!</a></div>');
        Dex.afdFaint = true;
        return true;
      }
    } else if (args[0] === '-crit') {
      // April Fool's 2018 (DLC)
      if (!Dex.afdCrit) {
        messageFromArgs(args, kwArgs);
        this.message('<div class="broadcast-red" style="font-size:10pt">Crit mattered? Buy <strong>Crit Insurance DLC</strong>, yours for only $4.99!<br /> <a href="/trustworthy-dlc-link">CLICK HERE!</a></div>');
        Dex.afdCrit = true;
        return true;
      }
    } else if (args[0] === 'move') {
      if (kwArgs.from) return false;
      const moveid = toID(args[2]);
      if (moveid === 'earthquake') {
        // April Fool's 2013
        if (this.scene.animating && window.$) {
          $('body').css({
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }).animate({
            left: -30,
            right: 30
          }, 75).animate({
            left: 30,
            right: -30
          }, 100).animate({
            left: -30,
            right: 30
          }, 100).animate({
            left: 30,
            right: -30
          }, 100).animate({
            left: 0,
            right: 0
          }, 100, () => {
            $('body').css({
              position: 'static'
            });
          });
        }
        messageFromArgs(['move', args[1], 'Fissure']);
        this.messageFromLog('Just kidding! It was **Earthquake**!');
        return true;
        // } else if (move.id === 'metronome' || move.id === 'sleeptalk' || move.id === 'assist') {
        // 	// April Fool's 2014 - NOT UPDATED TO NEW BATTLE LOG
        // 	this.message(pokemon.getName() + ' used <strong>' + move.name + '</strong>!');
        // 	let buttons = ["A", "B", "START", "SELECT", "UP", "DOWN", "LEFT", "RIGHT", "DEMOCRACY", "ANARCHY"];
        // 	let people = ["Zarel", "The Immortal", "Diatom", "Nani Man", "shaymin", "apt-get", "sirDonovan", "Arcticblast", "Trickster"];
        // 	let button;
        // 	for (let i = 0; i < 10; i++) {
        // 		let name = people[Math.floor(Math.random() * people.length)];
        // 		if (!button) button = buttons[Math.floor(Math.random() * buttons.length)];
        // 		this.scene.log('<div class="chat"><strong style="' + BattleLog.hashColor(toUserid(name)) + '" class="username">' + BattleLog.escapeHTML(name) + ':</strong> <em>' + button + '</em></div>');
        // 		button = (name === 'Diatom' ? "thanks diatom" : null);
        // 	}
      } else if (moveid === 'stealthrock') {
        // April Fool's 2016
        const srNames = ['Sneaky Pebbles', 'Sly Rubble', 'Subtle Sediment', 'Buried Bedrock', 'Camouflaged Cinnabar', 'Clandestine Cobblestones', 'Cloaked Clay', 'Concealed Ore', 'Covert Crags', 'Crafty Coal', 'Discreet Bricks', 'Disguised Debris', 'Espionage Pebbles', 'Furtive Fortress', 'Hush-Hush Hardware', 'Incognito Boulders', 'Invisible Quartz', 'Masked Minerals', 'Mischievous Masonry', 'Obscure Ornaments', 'Private Paragon', 'Secret Solitaire', 'Sheltered Sand', 'Surreptitious Sapphire', 'Undercover Ultramarine'];
        messageFromArgs(['move', args[1], srNames[Math.floor(Math.random() * srNames.length)]]);
        return true;
      } else if (moveid === 'extremespeed') {
        // April Fool's 2018
        messageFromArgs(args, kwArgs);
        const fastWords = ['H-Hayai', 'Masaka', 'Its fast'];
        this.messageFromLog(`**${fastWords[Math.floor(Math.random() * fastWords.length)]}**`);
        return true;
      } else if (moveid === 'aerialace') {
        // April Fool's 2018
        messageFromArgs(['move', args[1], 'Tsubame Gaeshi']);
        return true;
      }
    }
    return false;
  }
  messageFromLog(line) {
    this.message(...BattleLog.parseLogMessage(line));
  }
  turnText(turnNum) {
    const turnMessage = this.battleParser?.parseArgs(['turn', turnNum], {}, true).trim();
    if (!turnMessage?.startsWith('==') || !turnMessage.endsWith('==')) {
      // language not loaded yet?
      return `Turn ${turnNum}`;
    }
    return turnMessage.slice(2, -2).trim();
  }
  textList(list) {
    const listNoDuplicates = [];
    for (const user of list) {
      if (!listNoDuplicates.includes(user)) listNoDuplicates.push(user);
    }
    return TL.cappedUserList(listNoDuplicates, 5);
  }
  /**
   * To avoid trolling with nicknames, we can't just run this through
   * parseMessage
   */
  static parseLogMessage(message) {
    const messages = message.split('\n').map(line => {
      line = BattleLog.escapeHTML(line);
      line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      line = line.replace(/\|\|([^|]*)\|\|([^|]*)\|\|/, '<abbr title="$1">$2</abbr>');
      if (line.startsWith('  ')) line = '<small>' + line.trim() + '</small>';
      return line;
    });
    return [messages.join('<br />'), messages.filter(line => !line.startsWith('<small>[')).join('<br />')];
  }
  message(message, sceneMessage = message) {
    this.scene?.message(sceneMessage);
    this.addDiv('battle-history', message);
  }
  addNode(node, preempt) {
    (preempt ? this.preemptElem : this.innerElem).appendChild(node);
    if (this.atBottom) {
      this.elem.scrollTop = this.elem.scrollHeight;
    }
  }
  updateScroll = () => {
    if (this.atBottom) {
      this.elem.scrollTop = this.elem.scrollHeight;
    }
  };
  addDiv(className, innerHTML, preempt) {
    const el = document.createElement('div');
    el.className = className;
    el.innerHTML = innerHTML;
    this.addNode(el, preempt);
  }
  prependDiv(className, innerHTML, preempt) {
    const el = document.createElement('div');
    el.className = className;
    el.innerHTML = innerHTML;
    if (this.innerElem.childNodes.length) {
      this.innerElem.insertBefore(el, this.innerElem.childNodes[0]);
    } else {
      this.innerElem.appendChild(el);
    }
    this.updateScroll();
  }
  addSpacer() {
    this.addDiv('spacer battle-history', '<br />');
  }
  changeUhtml(id, htmlSrc, forceAdd) {
    id = toID(id);
    const classContains = ' uhtml-' + id + ' ';
    let elements = [];
    for (const node of this.innerElem.childNodes) {
      if (node.className && (' ' + node.className + ' ').includes(classContains)) {
        elements.push(node);
      }
    }
    if (this.preemptElem) {
      for (const node of this.preemptElem.childNodes) {
        if (node.className && (' ' + node.className + ' ').includes(classContains)) {
          elements.push(node);
        }
      }
    }
    if (htmlSrc && elements.length && !forceAdd) {
      for (const element of elements) {
        element.innerHTML = BattleLog.sanitizeHTML(htmlSrc);
      }
      this.updateScroll();
      return;
    }
    for (const element of elements) {
      element.parentElement.removeChild(element);
    }
    if (!htmlSrc) return;
    if (forceAdd) {
      this.addDiv('notice uhtml-' + id, BattleLog.sanitizeHTML(htmlSrc));
    } else {
      this.prependDiv('notice uhtml-' + id, BattleLog.sanitizeHTML(htmlSrc));
    }
  }
  hideChatFrom(userid, showRevealButton = true, lineCount = 0) {
    const classStart = 'chat chatmessage-' + userid + ' ';
    let nodes = [];
    let buttonContainer = this.innerElem.lastChild;
    for (const node of this.innerElem.childNodes) {
      if (node.className && (node.className + ' ').startsWith(classStart)) {
        nodes.push(node);
      }
    }
    if (this.preemptElem) {
      for (const node of this.preemptElem.childNodes) {
        if (node.className && (node.className + ' ').startsWith(classStart)) {
          nodes.push(node);
        }
      }
    }
    if (lineCount) nodes = nodes.slice(-lineCount);
    for (const node of nodes) {
      node.style.display = 'none';
      node.className = 'revealed ' + node.className;
    }
    if (!nodes.length || !showRevealButton) return;
    const button = document.createElement('button');
    button.name = 'toggleMessages';
    button.setAttribute('data-cmd', '/togglemessages ' + userid);
    button.value = userid;
    button.className = 'subtle';
    const hiddenCount = nodes.length;
    const hiddenText = hiddenCount === 1 ? TL`(${hiddenCount} line from ${userid} hidden)` : TL`(${hiddenCount} lines from ${userid} hidden)`;
    button.innerHTML = `<small>${hiddenText}</small>`;
    if (!buttonContainer || !` ${buttonContainer.className} `.includes(' chat ') || buttonContainer.style.display === 'none') {
      buttonContainer = document.createElement('div');
      buttonContainer.className = 'chat';
      this.addNode(buttonContainer);
    }
    buttonContainer.appendChild(document.createTextNode(' '));
    buttonContainer.appendChild(button);
  }
  static unlinkNodeList(nodeList) {
    for (const node of nodeList) {
      const linkList = node.getElementsByTagName('a');
      // iterate in reverse because linkList will update as links are removed
      for (let i = linkList.length - 1; i >= 0; i--) {
        const linkNode = linkList[i];
        const parent = linkNode.parentElement;
        if (!parent) continue;
        for (const childNode of linkNode.childNodes) {
          parent.insertBefore(childNode, linkNode);
        }
        parent.removeChild(linkNode);
      }
    }
  }
  unlinkChatFrom(userid) {
    // unlinks from everywhere, not just this log
    // this is how oldclient works and it's probably intentional
    const nodeList = document.getElementsByClassName('chatmessage-' + userid);
    BattleLog.unlinkNodeList(nodeList);
  }
  preemptCatchup() {
    if (!this.preemptElem.firstChild) return;
    this.innerElem.appendChild(this.preemptElem.firstChild);
  }
  static escapeFormat(formatid = '', fixGen6) {
    let atIndex = formatid.indexOf('@@@');
    if (atIndex >= 0) {
      const customRules = this.escapeHTML(formatid.slice(atIndex + 3));
      return this.escapeHTML(this.formatName(formatid.slice(0, atIndex), fixGen6)) + '<br />' + TL.label(TL('Custom rules'), customRules);
    }
    return this.escapeHTML(this.formatName(formatid, fixGen6));
  }
  static formatId(format) {
    const atIndex = format.indexOf('@@@');
    if (atIndex >= 0) {
      format = toID(format.slice(0, atIndex)) + format.slice(atIndex).trim();
    } else {
      format = toID(format);
    }
    if (!format) return '';
    if (!format.startsWith('gen')) format = `${Dex.modid}${format}`;
    return format;
  }
  /**
   * Do not store this output anywhere; it removes the generation number
   * for the current gen.
   */
  static formatName(formatid = '', fixGen6) {
    if (!formatid) return '';
    let atIndex = formatid.indexOf('@@@');
    if (atIndex >= 0) {
      return this.formatName(formatid.slice(0, atIndex), fixGen6) + ' (Custom rules: ' + this.escapeHTML(formatid.slice(atIndex + 3)) + ')';
    }
    if (fixGen6 && !formatid.startsWith('gen')) {
      formatid = `gen6${formatid}`;
    }
    let name = formatid;
    if (window.BattleFormats && BattleFormats[formatid]) {
      name = BattleFormats[formatid].name;
    }
    if (window.NonBattleGames && NonBattleGames[formatid]) {
      name = NonBattleGames[formatid];
    }
    if (name.startsWith('gen')) {
      name = name.replace(/^gen([0-9])/, '[Gen $1] ');
    }
    if (name.startsWith(`[Gen ${Dex.gen}] `)) {
      name = name.slice(`[Gen ${Dex.gen}] `.length);
    } else if (name.startsWith(`[Gen ${Dex.gen} `)) {
      name = '[' + name.slice(`[Gen ${Dex.gen} `.length);
    }
    return name || `[Gen ${Dex.gen}]`;
  }
  static escapeHTML(str, jsEscapeToo) {
    if (typeof str === 'number') str = `${str}`;
    if (typeof str !== 'string') return '';
    str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    if (jsEscapeToo) str = str.replace(/\\/g, '\\\\').replace(/'/g, '\\\'');
    return str;
  }
  static unescapeHTML(str) {
    str = str ? '' + str : '';
    return str.replace(/&quot;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
  }
  static roomidToFormat(id) {
    if (id.lastIndexOf('-') > 6) {
      return /^battle-([a-z0-9]*)-?[0-9]*$/.exec(id)?.[1];
    }
    return /^battle-([a-z0-9]*[a-z])[0-9]*$/.exec(id)?.[1];
  }
  static colorCache = {};

  /** @deprecated */
  static hashColor(name) {
    return `color:${this.usernameColor(name)};`;
  }
  static usernameColor(name) {
    if (this.colorCache[name]) return this.colorCache[name];
    let hash;
    if (Config.customcolors[name]) {
      hash = MD5(Config.customcolors[name]);
    } else {
      hash = MD5(name);
    }
    let H = parseInt(hash.substr(4, 4), 16) % 360; // 0 to 360
    let S = parseInt(hash.substr(0, 4), 16) % 50 + 40; // 40 to 89
    let L = Math.floor(parseInt(hash.substr(8, 4), 16) % 20 + 30); // 30 to 49

    let {
      R,
      G,
      B
    } = this.HSLToRGB(H, S, L);
    let lum = R * R * R * 0.2126 + G * G * G * 0.7152 + B * B * B * 0.0722; // 0.013 (dark blue) to 0.737 (yellow)

    let HLmod = (lum - 0.2) * -150; // -80 (yellow) to 28 (dark blue)
    if (HLmod > 18) HLmod = (HLmod - 18) * 2.5;else if (HLmod < 0) HLmod /= 3;else HLmod = 0;
    // let mod = ';border-right: ' + Math.abs(HLmod) + 'px solid ' + (HLmod > 0 ? 'red' : '#0088FF');
    let Hdist = Math.min(Math.abs(180 - H), Math.abs(240 - H));
    if (Hdist < 15) {
      HLmod += (15 - Hdist) / 3;
    }
    L += HLmod;
    let {
      R: r,
      G: g,
      B: b
    } = this.HSLToRGB(H, S, L);
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    this.colorCache[name] = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    return this.colorCache[name];
  }
  static HSLToRGB(H, S, L) {
    let C = (100 - Math.abs(2 * L - 100)) * S / 100 / 100;
    let X = C * (1 - Math.abs(H / 60 % 2 - 1));
    let m = L / 100 - C / 2;
    let R1;
    let G1;
    let B1;
    switch (Math.floor(H / 60)) {
      case 1:
        R1 = X;
        G1 = C;
        B1 = 0;
        break;
      case 2:
        R1 = 0;
        G1 = C;
        B1 = X;
        break;
      case 3:
        R1 = 0;
        G1 = X;
        B1 = C;
        break;
      case 4:
        R1 = X;
        G1 = 0;
        B1 = C;
        break;
      case 5:
        R1 = C;
        G1 = 0;
        B1 = X;
        break;
      case 0:
      default:
        R1 = C;
        G1 = X;
        B1 = 0;
        break;
    }
    let R = R1 + m;
    let G = G1 + m;
    let B = B1 + m;
    return {
      R,
      G,
      B
    };
  }
  static prefs(name) {
    // @ts-expect-error optional, for old client
    if (window.Storage?.prefs) return Storage.prefs(name);
    // @ts-expect-error optional, for client rewrite
    if (window.PS) return PS.prefs[name];
    // may be neither, for e.g. Replays
    return undefined;
  }
  renderName(name) {
    let group = ' ';
    if (!/[A-Za-z0-9]/.test(name.charAt(0))) {
      // Backwards compatibility
      group = name.charAt(0);
      name = name.slice(1);
    }
    const clickableName = `<span class="username"><small class="groupsymbol">${BattleLog.escapeHTML(group)}</small>${BattleLog.escapeHTML(name)}</span>`;
    return clickableName;
  }
  parseChatMessage(message, name, timestamp, isHighlighted) {
    let showMe = !BattleLog.prefs('chatformatting')?.hideme;
    const userid = toID(name);
    const colorStyle = ` style="color:${BattleLog.usernameColor(userid)}"`;
    const clickableName = this.renderName(name);
    const isMine = window.app?.user?.get('userid') === userid || window.PS?.user.userid === userid;
    const hlClass = isHighlighted ? ' highlighted' : '';
    const mineClass = isMine ? ' mine' : '';
    let cmd = '';
    let target = '';
    if (message.startsWith('/')) {
      if (message.charAt(1) === '/') {
        message = message.slice(1);
      } else {
        let spaceIndex = message.indexOf(' ');
        cmd = spaceIndex >= 0 ? message.slice(1, spaceIndex) : message.slice(1);
        if (spaceIndex >= 0) target = message.slice(spaceIndex + 1);
      }
    }
    switch (cmd) {
      case 'me':
      case 'mee':
        let parsedMessage = BattleLog.parseMessage(' ' + target);
        if (cmd === 'mee') parsedMessage = parsedMessage.slice(1);
        if (!showMe) {
          return ['chat chatmessage-' + userid + hlClass + mineClass, `${timestamp}<strong${colorStyle}>${clickableName}:</strong> <em>/me${parsedMessage}</em>`];
        }
        return ['chat chatmessage-' + userid + hlClass + mineClass, `${timestamp}<em><i><strong${colorStyle}>&bull; ${clickableName}</strong>${parsedMessage}</i></em>`];
      case 'invite':
        let roomid = toRoomid(target);
        const inviteMessage = TL`${clickableName} invited you to join the room "${roomid}"`;
        return ['chat', `${timestamp}<em>${inviteMessage}</em>` + `<div class="notice"><button class="button" name="joinRoom" value="${roomid}">${TL`[Join ${roomid}]`}</button></div>`];
      case 'announce':
        return ['chat chatmessage-' + userid + hlClass + mineClass, `${timestamp}<strong${colorStyle}>${clickableName}:</strong> <span class="message-announce">${BattleLog.parseMessage(target)}</span>`];
      case 'log':
        return ['chat chatmessage-' + userid + hlClass + mineClass, `${timestamp}<span class="message-log">${BattleLog.parseMessage(target)}</span>`];
      case 'data-pokemon':
      case 'data-item':
      case 'data-ability':
      case 'data-move':
        return ['chat message-error', '[outdated code no longer supported]'];
      case 'text':
        return ['chat', BattleLog.parseMessage(target), true];
      case 'error':
        return ['chat message-error', formatText(target, true)];
      case 'html':
        if (!userid) {
          return ['chat' + hlClass, `${timestamp}<em>${BattleLog.sanitizeHTML(target)}</em>`];
        }
        return ['chat chatmessage-' + userid + hlClass + mineClass, `${timestamp}<strong${colorStyle}>${clickableName}:</strong> <em>${BattleLog.sanitizeHTML(target)}</em>`];
      case 'uhtml':
      case 'uhtmlchange':
        let parts = target.split(',');
        let htmlSrc = parts.slice(1).join(',').trim();
        this.changeUhtml(parts[0], htmlSrc, cmd === 'uhtml');
        return ['', ''];
      case 'raw':
        return ['chat', BattleLog.sanitizeHTML(target), true];
      case 'nonotify':
        return ['chat', BattleLog.sanitizeHTML(target), true];
      case 'subtlenotify':
        return ['chat', BattleLog.sanitizeHTML(target), 'subtle'];
      default:
        // Not a command or unsupported. Parsed as a normal chat message.
        if (!userid) {
          return ['chat' + hlClass, `${timestamp}<em>${BattleLog.parseMessage(message)}</em>`];
        }
        return ['chat chatmessage-' + userid + hlClass + mineClass, `${timestamp}<strong${colorStyle}>${clickableName}:</strong> <em>${BattleLog.parseMessage(message)}</em>`];
    }
  }
  static parseMessage(str, isTrusted = false) {
    // Don't format console commands (>>).
    if (str.substr(0, 3) === '>> ' || str.substr(0, 4) === '>>> ') return this.escapeHTML(str);
    // Don't format console results (<<).
    if (str.substr(0, 3) === '<< ') return this.escapeHTML(str);
    str = formatText(str, isTrusted);
    let options = BattleLog.prefs('chatformatting') || {};
    if (options.hidelinks) {
      str = str.replace(/<a[^>]*>/g, '<u>').replace(/<\/a>/g, '</u>');
    }
    if (options.hidespoiler) {
      str = str.replace(/<span class="spoiler">/g, '<span class="spoiler-shown">');
    }
    if (options.hidegreentext) {
      str = str.replace(/<span class="greentext">/g, '<span>');
    }
    return str;
  }
  static interstice = (() => {
    const whitelist = Config.whitelist || [];
    const patterns = whitelist.map(entry => new RegExp(`^(https?:)?//([A-Za-z0-9-]*\\.)?${entry.replace(/\./g, '\\.')}(/.*)?`, 'i'));
    return {
      isWhitelisted(uri) {
        if (uri.startsWith('/') && uri[1] !== '/') {
          // domain-relative URIs are safe
          return true;
        }
        for (const pattern of patterns) {
          if (pattern.test(uri)) return true;
        }
        return false;
      },
      getURI(uri) {
        return `http://${Config.routes.root}/interstice?uri=${encodeURIComponent(uri)}`;
      }
    };
  })();
  static players = [];
  static ytLoading = null;
  static tagPolicy = null;
  static initSanitizeHTML() {
    if (this.tagPolicy) return;
    if (!('html4' in window)) {
      throw new Error('sanitizeHTML requires caja');
    }

    // By default, Caja will ban any HTML tags it doesn't recognize.
    // Additional HTML tags to allow:
    Object.assign(html4.ELEMENTS, {
      marquee: 0,
      blink: 0,
      psicon: html4.eflags['OPTIONAL_ENDTAG'] | html4.eflags['EMPTY'],
      username: 0,
      spotify: 0,
      youtube: 0,
      formatselect: 0,
      copytext: 0,
      twitch: 0
    });

    // By default, Caja will ban any attributes it doesn't recognize.
    // Additional attributes to allow:
    Object.assign(html4.ATTRIBS, {
      // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee
      'marquee::behavior': 0,
      'marquee::bgcolor': 0,
      'marquee::direction': 0,
      'marquee::height': 0,
      'marquee::hspace': 0,
      'marquee::loop': 0,
      'marquee::scrollamount': 0,
      'marquee::scrolldelay': 0,
      'marquee::truespeed': 0,
      'marquee::vspace': 0,
      'marquee::width': 0,
      'psicon::pokemon': 0,
      'psicon::item': 0,
      'psicon::type': 0,
      'selectformat::type': 0,
      'psicon::category': 0,
      'username::name': 0,
      'form::data-submitsend': 0,
      'formatselect::format': 0,
      'div::data-server': 0,
      'button::data-send': 0,
      'button::data-cmd': 0,
      'form::data-delimiter': 0,
      'button::data-delimiter': 0,
      '*::aria-label': 0,
      '*::aria-hidden': 0
    });

    // Caja unfortunately doesn't document how `tagPolicy` works, so
    // here's how it goes:

    // Every opening tag and attributes is filtered through
    // `tagPolicy`, being replaced by the {tagName, attribs} returned.
    // Returning `undefined` means that the tag will be removed entirely.

    // We run Caja's built-in tag sanitization in the first line of our
    // custom tagPolicy, and its attribs sanitization midway through, with
    // `sanitizeAttribs`.

    // (n.b. tag contents etc can't be modified in this step.)

    /**
     * @param tagName Lowercase tag name
     * @param attribs attribs in the form of [key, value, key, value]
     * @return undefined to remove the tag
     */
    this.tagPolicy = (tagName, attribs) => {
      if (html4.ELEMENTS[tagName] & html4.eflags['UNSAFE']) {
        return;
      }
      function getAttrib(key) {
        for (let i = 0; i < attribs.length - 1; i += 2) {
          if (attribs[i] === key) {
            return attribs[i + 1];
          }
        }
        return undefined;
      }
      function setAttrib(key, value) {
        for (let i = 0; i < attribs.length - 1; i += 2) {
          if (attribs[i] === key) {
            attribs[i + 1] = value;
            return;
          }
        }
        attribs.push(key, value);
      }
      function deleteAttrib(key) {
        for (let i = 0; i < attribs.length - 1; i += 2) {
          if (attribs[i] === key) {
            attribs.splice(i, 2);
            return;
          }
        }
      }
      let dataUri = '';
      let targetReplace = false;
      // if Caja CSS isn't loaded, we still trust <psicon> CSS
      let unsanitizedStyle = '';
      if (tagName === 'a') {
        if (getAttrib('target') === 'replace') {
          targetReplace = true;
        }
      } else if (tagName === 'img') {
        const src = getAttrib('src') || '';
        if (src.startsWith('data:image/')) {
          dataUri = src;
        }
        if (src.startsWith('//')) {
          if (location.protocol !== 'http:' && location.protocol !== 'https:') {
            // in testclient with `file://`, fix src so it still works
            setAttrib('src', 'https:' + src);
          }
        }
      } else if (tagName === 'twitch') {
        // <iframe src="https://player.twitch.tv/?channel=ninja&parent=www.example.com" allowfullscreen="true" height="378" width="620"></iframe>
        const src = getAttrib('src') || "";
        const channelId = /(https?:\/\/)?twitch.tv\/([A-Za-z0-9]+)/i.exec(src)?.[2];
        const height = parseInt(getAttrib('height') || "", 10) || 400;
        const width = parseInt(getAttrib('width') || "", 10) || 340;
        return {
          tagName: 'iframe',
          attribs: ['src', `https://player.twitch.tv/?channel=${channelId}&parent=${location.hostname}&autoplay=false`, 'allowfullscreen', 'true', 'height', `${height}`, 'width', `${width}`]
        };
      } else if (tagName === 'username') {
        // <username> is a custom element that handles namecolors
        tagName = 'strong';
        const color = this.usernameColor(toID(getAttrib('name')));
        unsanitizedStyle = `color:${color}`;
      } else if (tagName === 'spotify') {
        // <iframe src="https://open.spotify.com/embed/track/6aSYnCIwcLpnDXngGKAEzZ" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        const src = getAttrib('src') || '';
        const songId = /(?:\?v=|\/track\/)([A-Za-z0-9]+)/.exec(src)?.[1];
        return {
          tagName: 'iframe',
          attribs: ['src', `https://open.spotify.com/embed/track/${songId}`, 'width', '300', 'height', '380', 'frameborder', '0', 'allowtransparency', 'true', 'allow', 'encrypted-media']
        };
      } else if (tagName === 'youtube') {
        // <iframe width="320" height="180" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        const src = getAttrib('src') || '';
        // Google's ToS requires a minimum of 200x200
        let width = getAttrib('width') || '0';
        let height = getAttrib('height') || '0';
        if (Number(width) < 200) {
          width = window.innerWidth >= 400 ? '400' : '320';
        }
        if (Number(height) < 200) {
          height = window.innerWidth >= 400 ? '225' : '200';
        }
        const videoId = /(?:\?v=|\/embed\/)([A-Za-z0-9_-]+)/.exec(src)?.[1];
        if (!videoId) return {
          tagName: 'img',
          attribs: ['alt', `invalid src for <youtube>`]
        };
        const time = /(?:\?|&)(?:t|start)=([0-9]+)/.exec(src)?.[1];
        this.players.push(null);
        const idx = this.players.length;
        this.initYoutubePlayer(idx);
        return {
          tagName: 'iframe',
          attribs: ['id', `youtube-iframe-${idx}`, 'width', width, 'height', height, 'src', `https://www.youtube.com/embed/${videoId}?enablejsapi=1&playsinline=1${time ? `&start=${time}` : ''}`, 'frameborder', '0', 'allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', 'allowfullscreen', 'allowfullscreen', 'time', `${time || 0}`]
        };
      } else if (tagName === 'formatselect') {
        return {
          tagName: 'button',
          attribs: ['data-select', 'selectformat', 'class', "select formatselect", 'value', getAttrib('format') || getAttrib('value') || '', 'name', getAttrib('name') || '']
        };
      } else if (tagName === 'copytext') {
        return {
          tagName: 'button',
          attribs: ['type', getAttrib('type'), 'class', getAttrib('class') || 'button', 'value', getAttrib('value'), 'name', 'copyText']
        };
      } else if (tagName === 'psicon') {
        // <psicon> is a custom element which supports a set of mutually incompatible attributes:
        // <psicon pokemon> and <psicon item>
        let iconType = null;
        let iconValue = null;
        for (let i = 0; i < attribs.length - 1; i += 2) {
          if (attribs[i] === 'pokemon' || attribs[i] === 'item' || attribs[i] === 'type' || attribs[i] === 'category') {
            [iconType, iconValue] = attribs.slice(i, i + 2);
            break;
          }
        }
        tagName = 'span';
        if (iconType) {
          const className = getAttrib('class');
          if (iconType === 'pokemon') {
            setAttrib('class', 'picon' + (className ? ' ' + className : ''));
            unsanitizedStyle = Dex.getPokemonIcon(iconValue);
          } else if (iconType === 'item') {
            setAttrib('class', 'itemicon' + (className ? ' ' + className : ''));
            unsanitizedStyle = Dex.getItemIcon(iconValue);
          } else if (iconType === 'type') {
            tagName = Dex.getTypeIcon(iconValue).slice(1, -3);
          } else if (iconType === 'category') {
            tagName = Dex.getCategoryIcon(iconValue).slice(1, -3);
          }
        }
      }
      attribs = html.sanitizeAttribs(tagName, attribs, urlData => {
        if (urlData.scheme_ === 'geo' || urlData.scheme_ === 'sms' || urlData.scheme_ === 'tel') return null;
        return urlData;
      });
      if (unsanitizedStyle) {
        const style = getAttrib('style');
        setAttrib('style', unsanitizedStyle + (style ? '; ' + style : ''));
      }
      if (dataUri && tagName === 'img') {
        setAttrib('src', dataUri);
      }
      if (tagName === 'a' || tagName === 'form' && !getAttrib('data-submitsend')) {
        if (targetReplace) {
          setAttrib('data-target', 'replace');
          deleteAttrib('target');
        } else {
          setAttrib('target', '_blank');
        }
        if (tagName === 'a') {
          setAttrib('rel', 'noopener');
        }
      }
      return {
        tagName,
        attribs
      };
    };
  }
  static localizeTime(full, date, time, timezone) {
    let parsedTime = new Date(date + 'T' + time + (timezone || 'Z').toUpperCase());
    // Very old (pre-ES5) web browsers may be incapable of parsing ISO 8601
    // dates. In such a case, gracefully continue without replacing the date
    // format.
    if (!parsedTime.getTime()) return full;
    let formattedTime;
    // Try using Intl API if it exists
    if (window.Intl?.DateTimeFormat) {
      formattedTime = new Intl.DateTimeFormat(undefined, {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      }).format(parsedTime);
    } else {
      // toLocaleString even exists in ECMAScript 1, so no need to check
      // if it exists.
      formattedTime = parsedTime.toLocaleString();
    }
    return '<time>' + BattleLog.escapeHTML(formattedTime) + '</time>';
  }
  static sanitizeHTML(input) {
    if (typeof input !== 'string') return '';
    this.initSanitizeHTML();
    input = input.replace(/<username([^>]*)>([^<]*)<\/username>/gi, (match, attrs, username) => {
      if (/\bname\s*=\s*"/.test(attrs)) return match;
      const escapedUsername = username.replace(/"/g, '&quot;').replace(/>/g, '&gt;');
      return `<username${attrs} name="${escapedUsername}">${username}</username>`;
    });

    // Our custom element support happens in `tagPolicy`, which is set
    // up in `initSanitizeHTML` above.
    const sanitized = html.sanitizeWithPolicy(input, this.tagPolicy);

    // <time> parsing requires ISO 8601 time. While more time formats are
    // supported by most JavaScript implementations, it isn't required, and
    // how to exactly enforce ignoring user agent timezone setting is not obvious.
    // As dates come from the server which isn't aware of client timezone, a
    // particular timezone is required.
    //
    // This regular expression is split into three groups.
    //
    // Group 1 - date
    // Group 2 - time (seconds and milliseconds are optional)
    // Group 3 - optional timezone
    //
    // Group 1 and group 2 are split to allow using space as a separator
    // instead of T. Stricly speaking ECMAScript 5 specification only
    // allows T, however it's more practical to also allow spaces.
    return sanitized.replace(/<time>\s*([+-]?\d{4,}-\d{2}-\d{2})[T ](\d{2}:\d{2}(?::\d{2}(?:\.\d{3})?)?)(Z|[+-]\d{2}:\d{2})?\s*<\/time>/ig, this.localizeTime);
  }
  static initYoutubePlayer(idx) {
    const id = `youtube-iframe-${idx}`;
    const loadPlayer = () => {
      const el = $(`#${id}`);
      if (!el.length) return;
      const player = new window.YT.Player(id, {
        events: {
          onStateChange: event => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              for (const curPlayer of BattleLog.players) {
                if (player === curPlayer) continue;
                curPlayer?.pauseVideo?.();
              }
            }
          }
        }
      });
      const time = Number(el.attr('time'));
      if (time) {
        player.seekTo(time);
      }
      this.players[idx - 1] = player;
    };
    // wait for html element to be in DOM
    this.ensureYoutube().then(() => {
      setTimeout(() => loadPlayer(), 300);
    });
  }
  static ensureYoutube() {
    if (this.ytLoading) return this.ytLoading;
    this.ytLoading = new Promise(resolve => {
      const el = document.createElement('script');
      el.type = 'text/javascript';
      el.async = true;
      el.src = 'https://youtube.com/iframe_api';
      el.onload = () => {
        // since the src loads more files remotely we'll just wait
        // until the player exists
        const loopCheck = () => {
          if (!window.YT?.Player) {
            setTimeout(() => loopCheck(), 300);
          } else {
            resolve();
          }
        };
        loopCheck();
      };
      document.body.appendChild(el);
    });
    return this.ytLoading;
  }

  /*********************************************************
   * Replay files
   *********************************************************/

  // Replay files are .html files that display a replay for a battle.

  // The .html files mainly contain replay log data; the actual replay
  // player is downloaded online. Also included is a textual log and
  // some minimal CSS to make it look pretty, for offline viewing.

  // This strategy helps keep the replay file reasonably small; of
  // the 30 KB or so for a 50-turn battle, around 10 KB is the log
  // data, and around 20 KB is the textual log.

  // The actual replay player is downloaded from replay-embed.js,
  // which handles loading all the necessary resources for turning the log
  // data into a playable replay.

  // Battle log data is stored in and loaded from a
  // <script type="text/plain" class="battle-log-data"> tag.

  // replay-embed.js is loaded through a cache-buster that rotates daily.
  // This allows pretty much anything about the replay viewer to be
  // updated as desired.

  static createReplayFile(room) {
    let battle = room.battle;
    let replayid = room.id;
    if (replayid) {
      // battle room
      replayid = replayid.slice(7);
      if (window.Config?.server.id !== 'showdown') {
        if (!window.Config?.server.registered) {
          replayid = 'unregisteredserver-' + replayid;
        } else {
          replayid = Config.server.id + '-' + replayid;
        }
      }
    } else if (room.fragment) {
      // replay panel
      replayid = room.fragment;
    } else {
      replayid = battle.id;
    }
    // TODO: do this synchronously so large battles aren't cut off
    battle.seekTurn(Infinity);
    if (!battle.atQueueEnd) return null;
    let buf = '<!DOCTYPE html>\n';
    buf += '<meta charset="utf-8" />\n';
    buf += '<!-- version 1 -->\n';
    buf += `<title>${BattleLog.escapeHTML(battle.tier)} replay: ${BattleLog.escapeHTML(battle.p1.name)} vs. ${BattleLog.escapeHTML(battle.p2.name)}</title>\n`;
    // This <style> exists so that replays are readable without an internet connection
    buf += '<style>\n';
    buf += 'html,body {font-family:Verdana, sans-serif;font-size:10pt;margin:0;padding:0;}body{padding:12px 0;} .battle-log {font-family:Verdana, sans-serif;font-size:10pt;} .battle-log-inline {border:1px solid #AAAAAA;background:#EEF2F5;color:black;max-width:640px;margin:0 auto 80px;padding-bottom:5px;} .battle-log .inner {padding:4px 8px 0px 8px;} .battle-log .inner-preempt {padding:0 8px 4px 8px;} .battle-log .inner-after {margin-top:0.5em;} .battle-log h2 {margin:0.5em -8px;padding:4px 8px;border:1px solid #AAAAAA;background:#E0E7EA;border-left:0;border-right:0;font-family:Verdana, sans-serif;font-size:13pt;} .battle-log .chat {vertical-align:middle;padding:3px 0 3px 0;font-size:8pt;} .battle-log .chat strong {color:#40576A;} .battle-log .chat em {padding:1px 4px 1px 3px;color:#000000;font-style:normal;} .chat.mine {background:rgba(0,0,0,0.05);margin-left:-8px;margin-right:-8px;padding-left:8px;padding-right:8px;} .spoiler {color:#BBBBBB;background:#BBBBBB;padding:0px 3px;} .spoiler:hover, .spoiler:active, .spoiler-shown {color:#000000;background:#E2E2E2;padding:0px 3px;} .spoiler a {color:#BBBBBB;} .spoiler:hover a, .spoiler:active a, .spoiler-shown a {color:#2288CC;} .chat code, .chat .spoiler:hover code, .chat .spoiler:active code, .chat .spoiler-shown code {border:1px solid #C0C0C0;background:#EEEEEE;color:black;padding:0 2px;} .chat .spoiler code {border:1px solid #CCCCCC;background:#CCCCCC;color:#CCCCCC;} .battle-log .rated {padding:3px 4px;} .battle-log .rated strong {color:white;background:#89A;padding:1px 4px;border-radius:4px;} .spacer {margin-top:0.5em;} .message-announce {background:#6688AA;color:white;padding:1px 4px 2px;} .message-announce a, .broadcast-green a, .broadcast-blue a, .broadcast-red a {color:#DDEEFF;} .broadcast-green {background-color:#559955;color:white;padding:2px 4px;} .broadcast-blue {background-color:#6688AA;color:white;padding:2px 4px;} .infobox {border:1px solid #6688AA;padding:2px 4px;} .infobox-limited {max-height:200px;overflow:auto;overflow-x:hidden;} .broadcast-red {background-color:#AA5544;color:white;padding:2px 4px;} .message-learn-canlearn {font-weight:bold;color:#228822;text-decoration:underline;} .message-learn-cannotlearn {font-weight:bold;color:#CC2222;text-decoration:underline;} .message-effect-weak {font-weight:bold;color:#CC2222;} .message-effect-resist {font-weight:bold;color:#6688AA;} .message-effect-immune {font-weight:bold;color:#666666;} .message-learn-list {margin-top:0;margin-bottom:0;} .message-throttle-notice, .message-error {color:#992222;} .message-overflow, .chat small.message-overflow {font-size:0pt;} .message-overflow::before {font-size:9pt;content:\'...\';} .subtle {color:#3A4A66;}\n';
    buf += '</style>\n';
    buf += '<div class="wrapper replay-wrapper" style="max-width:1180px;margin:0 auto">\n';
    buf += '<input type="hidden" name="replayid" value="' + replayid + '" />\n';
    buf += '<div class="battle"></div><div class="battle-log"></div><div class="replay-controls"></div><div class="replay-controls-2"></div>\n';
    buf += `<h1 style="font-weight:normal;text-align:center"><strong>${BattleLog.escapeHTML(battle.tier)}</strong><br /><a href="http://${Config.routes.users}/${toID(battle.p1.name)}" class="subtle" target="_blank">${BattleLog.escapeHTML(battle.p1.name)}</a> vs. <a href="http://${Config.routes.users}/${toID(battle.p2.name)}" class="subtle" target="_blank">${BattleLog.escapeHTML(battle.p2.name)}</a></h1>\n`;
    buf += '<script type="text/plain" class="battle-log-data">' + battle.stepQueue.join('\n').replace(/\//g, '\\/') + '</script>\n'; // lgtm [js/incomplete-sanitization]
    buf += '</div>\n';
    buf += '<div class="battle-log battle-log-inline"><div class="inner">' + battle.scene.log.elem.innerHTML + '</div></div>\n';
    buf += '</div>\n';
    buf += '<script>\n';
    buf += `let daily = Math.floor(Date.now()/1000/60/60/24);document.write('<script src="https://${Config.routes.client}/js/replay-embed.js?version'+daily+'"></'+'script>');\n`;
    buf += '</script>\n';
    return buf;
  }
  static createReplayFileHref(room) {
    // unescape(encodeURIComponent()) is necessary because btoa doesn't support Unicode
    const replayFile = BattleLog.createReplayFile(room);
    if (!replayFile) {
      return 'javascript:alert("You will need to click Download again once the replay file is at the end.");void 0';
    }
    return 'data:text/plain;base64,' + encodeURIComponent(btoa(unescape(encodeURIComponent(replayFile))));
  }
}

/**
 * Template string tag function for escaping HTML
 */
function eHTML(strings, ...args) {
  let buf = strings[0];
  let i = 0;
  while (i < args.length) {
    buf += BattleLog.escapeHTML(args[i]);
    buf += strings[++i];
  }
  return buf;
}
if (window.Net) {
  Net(`/config/colors.json?${Math.random()}`).get().then(response => {
    const data = JSON.parse(response);
    Object.assign(Config.customcolors, data);
  }).catch(() => {});
}
/**
 * Text parser
 *
 * No dependencies
 * Optional dependency: BattleText
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

class BattleTextParser {
  p1 = "Player 1";
  p2 = "Player 2";
  p3 = "Player 3";
  p4 = "Player 4";
  perspective;
  language;
  gen = 9;
  turn = 0;
  curLineSection = 'break';
  lowercaseRegExp = undefined;
  constructor(perspective = 'p1', language = Dex.text.getLanguage()) {
    this.perspective = perspective;
    this.language = language;
    Dex.loadTextData(language);
  }
  static parseLine(line, noDefault) {
    if (!line.startsWith('|')) {
      return ['', line];
    }
    if (line === '|') {
      return ['done'];
    }
    const index = line.indexOf('|', 1);
    const cmd = line.slice(1, index);
    switch (cmd) {
      case 'chatmsg':
      case 'chatmsg-raw':
      case 'raw':
      case 'error':
      case 'html':
      case 'inactive':
      case 'inactiveoff':
      case 'warning':
      case 'fieldhtml':
      case 'controlshtml':
      case 'pagehtml':
      case 'bigerror':
      case 'debug':
      case 'tier':
      case 'challstr':
      case 'customgroups':
      case 'popup':
      case '':
        return [cmd, line.slice(index + 1)];
      case 'c':
      case 'chat':
      case 'uhtml':
      case 'uhtmlchange':
      case 'queryresponse':
      case 'showteam':
        // three parts
        const index2a = line.indexOf('|', index + 1);
        return [cmd, line.slice(index + 1, index2a), line.slice(index2a + 1)];
      case 'c:':
      case 'pm':
        // four parts
        const index2b = line.indexOf('|', index + 1);
        const index3b = line.indexOf('|', index2b + 1);
        return [cmd, line.slice(index + 1, index2b), line.slice(index2b + 1, index3b), line.slice(index3b + 1)];
    }
    if (noDefault) return null;
    return line.slice(1).split('|');
  }
  static parseBattleLine(line) {
    let args = this.parseLine(line, true);
    if (args) return {
      args,
      kwArgs: {}
    };
    args = line.slice(1).split('|');
    const kwArgs = {};
    while (args.length > 1) {
      const lastArg = args[args.length - 1];
      if (!lastArg.startsWith('[')) break;
      const bracketPos = lastArg.indexOf(']');
      if (bracketPos <= 0) break;
      // default to '.' so it evaluates to boolean true
      kwArgs[lastArg.slice(1, bracketPos)] = lastArg.slice(bracketPos + 1).trim() || '.';
      args.pop();
    }
    return BattleTextParser.upgradeArgs({
      args,
      kwArgs
    });
  }
  static parseNameParts(text) {
    let group = '';
    // names can't start with a symbol
    if (!/[A-Za-z0-9]/.test(text.charAt(0))) {
      group = text.charAt(0);
      text = text.slice(1);
    }
    let name = text;
    const atIndex = text.indexOf('@');
    let status = '';
    let away = false;
    if (atIndex > 0) {
      name = text.slice(0, atIndex);
      status = text.slice(atIndex + 1);
      if (status.startsWith('!')) {
        away = true;
        status = status.slice(1);
      }
    }
    return {
      group,
      name,
      away,
      status
    };
  }

  /**
   * Old replays may use syntax we no longer use, so this function upgrades
   * them to modern versions. Used to keep battle.ts itself cleaner. Not
   * guaranteed to mutate or not mutate its inputs.
   */
  static upgradeArgs({
    args,
    kwArgs
  }) {
    switch (args[0]) {
      case '-activate':
        {
          if (kwArgs.item || kwArgs.move || kwArgs.number || kwArgs.ability) return {
            args,
            kwArgs
          };
          let [, pokemon, effect, arg3, arg4] = args;
          let target = kwArgs.of;
          const id = BattleTextParser.effectId(effect);
          if (kwArgs.block) return {
            args: ['-fail', pokemon],
            kwArgs
          };
          if (id === 'wonderguard') return {
            args: ['-immune', pokemon],
            kwArgs: {
              from: 'ability:Wonder Guard'
            }
          };
          if (id === 'beatup' && kwArgs.of) return {
            args,
            kwArgs: {
              name: kwArgs.of
            }
          };
          if (['ingrain', 'quickguard', 'wideguard', 'craftyshield', 'matblock', 'protect', 'mist', 'safeguard', 'electricterrain', 'mistyterrain', 'psychicterrain', 'telepathy', 'stickyhold', 'suctioncups', 'aromaveil', 'flowerveil', 'sweetveil', 'disguise', 'safetygoggles', 'protectivepads'].includes(id)) {
            if (target) {
              kwArgs.of = pokemon;
              return {
                args: ['-block', target, effect, arg3],
                kwArgs
              };
            }
            return {
              args: ['-block', pokemon, effect, arg3],
              kwArgs
            };
          }
          if (id === 'charge') {
            return {
              args: ['-singlemove', pokemon, effect],
              kwArgs: {
                of: target
              }
            };
          }
          if (['bind', 'wrap', 'clamp', 'whirlpool', 'firespin', 'magmastorm', 'sandtomb', 'infestation', 'snaptrap', 'thundercage', 'trapped'].includes(id)) {
            return {
              args: ['-start', pokemon, effect],
              kwArgs: {
                of: target
              }
            };
          }
          if (id === 'fairylock') {
            return {
              args: ['-fieldactivate', effect],
              kwArgs: {}
            };
          }
          if (id === 'symbiosis' || id === 'poltergeist') {
            kwArgs.item = arg3;
          } else if (id === 'magnitude') {
            kwArgs.number = arg3;
          } else if (id === 'skillswap' || id === 'mummy' || id === 'lingeringaroma' || id === 'wanderingspirit') {
            kwArgs.ability = arg3;
            kwArgs.ability2 = arg4;
          } else if (['eeriespell', 'gmaxdepletion', 'spite', 'grudge', 'forewarn', 'sketch', 'leppaberry', 'mysteryberry'].includes(id)) {
            kwArgs.move = arg3;
            kwArgs.number = arg4;
          }
          args = ['-activate', pokemon, effect, target || ''];
          break;
        }
      case '-fail':
        {
          let [, pokemon, effect, arg3] = args;
          if (kwArgs.from === 'ability: Flower Veil') {
            return {
              args: ['-block', kwArgs.of, 'ability: Flower Veil'],
              kwArgs: {
                of: args[1]
              }
            };
          }
          if (effect === 'unboost' && arg3) {
            const statMap = {
              'Attack': 'atk',
              'Defense': 'def',
              'Special Attack': 'spa',
              'Special Defense': 'spd',
              'Speed': 'spe'
            };
            if (statMap[arg3]) args[3] = statMap[arg3];
          }
          break;
        }
      case '-start':
        {
          if (kwArgs.from === 'Protean' || kwArgs.from === 'Color Change') kwArgs.from = 'ability:' + kwArgs.from;
          break;
        }
      case 'move':
        {
          if (kwArgs.from === 'Magic Bounce') kwArgs.from = 'ability:Magic Bounce';
          break;
        }
      case 'cant':
        {
          let [, pokemon, effect, move] = args;
          if (['ability: Damp', 'ability: Dazzling', 'ability: Queenly Majesty', 'ability: Armor Tail'].includes(effect)) {
            args[0] = '-block';
            return {
              args: ['-block', pokemon, effect, move, kwArgs.of],
              kwArgs: {}
            };
          }
          break;
        }
      case '-heal':
        {
          const id = BattleTextParser.effectId(kwArgs.from);
          if (['dryskin', 'eartheater', 'voltabsorb', 'waterabsorb'].includes(id)) kwArgs.of = '';
          break;
        }
      case '-restoreboost':
        {
          args[0] = '-clearnegativeboost';
          break;
        }
      case '-weather':
        {
          if (args[1] === 'Snow') args[1] = 'Snowscape';
          break;
        }
      case '-ability':
        {
          if (args[3] && (args[3].startsWith('p1') || args[3].startsWith('p2') || args[3] === 'boost')) {
            args[4] = args[3];
            args[3] = '';
          }
          break;
        }
      case '-nothing':
        // OLD: |-nothing
        // NEW: |-activate||move:Splash
        return {
          args: ['-activate', '', 'move:Splash'],
          kwArgs
        };
    }
    return {
      args,
      kwArgs
    };
  }
  extractMessage(buf) {
    let out = '';
    for (const line of buf.split('\n')) {
      const {
        args,
        kwArgs
      } = BattleTextParser.parseBattleLine(line);
      out += this.parseArgs(args, kwArgs) || '';
    }
    return out;
  }
  textField(table, id, field) {
    const english = BattleText.en?.[table]?.[id];
    const localized = BattleText[this.language]?.[table]?.[id];
    let value = localized?.[field] || english?.[field];
    for (let i = Dex.gen - 1; i >= this.gen; i--) {
      const genName = `gen${i}`;
      const englishGen = english?.[genName];
      const localizedGen = localized?.[genName];
      if (localizedGen && typeof localizedGen === 'object' && localizedGen[field]) value = localizedGen[field];else if (englishGen && typeof englishGen === 'object' && englishGen[field]) value = englishGen[field];
    }
    return typeof value === 'string' ? value : '';
  }
  defaultText(field) {
    return this.textField('Default', 'default', field);
  }
  uiText(field, values) {
    const template = this.textField('Default', 'ui', field);
    if (!template) return '';
    return this.render(template, values);
  }
  static uiParser = null;
  /** Render a `Default.default` template, like `fullName`, in the current language */
  static defaultText(field, values) {
    const parser = BattleTextParser.uiParser ||= new BattleTextParser();
    parser.language = Dex.text.getLanguage();
    return parser.render(parser.defaultText(field), values);
  }
  static ui(field, values) {
    const parser = BattleTextParser.uiParser ||= new BattleTextParser();
    parser.language = Dex.text.getLanguage();
    return parser.uiText(field, values);
  }
  static weatherName(weather, language = Dex.text.getLanguage()) {
    const parser = BattleTextParser.uiParser ||= new BattleTextParser();
    parser.language = language;
    return parser.textField('Default', BattleTextParser.effectId(weather), 'weatherName') || weather;
  }

  /**
   * Render template, resolving placeholders.
   */
  render(template, values = {}) {
    const categories = {};
    const text = template.replace(/\{([A-Z][A-Z0-9]*)(?::([a-z]+(?::[a-z]+)*))?\}/g, (match, placeholder, modifierText) => {
      const value = values[placeholder];
      if (value === undefined) return match;
      return this.resolveRenderValue(placeholder, value, modifierText ? modifierText.split(':') : [], categories);
    });
    return BattleTextParser.inflect(text, categories);
  }
  resolveRenderValue(placeholder, source, modifiers, categories) {
    let value = typeof source === 'string' ? source : source.value;
    let category = typeof source === 'string' ? 'ms' : source.category || 'ms';
    let articleRule = '';
    if (typeof source !== 'string' && source.table && source.id) {
      const entry = BattleText[this.language]?.[source.table]?.[source.id] || BattleText.en?.[source.table]?.[source.id] || undefined;
      let form = entry;
      if (modifiers.includes('classified') && entry?.classified && typeof entry.classified === 'object') {
        form = entry.classified;
      }
      value = typeof form?.name === 'string' ? form.name : value;
      category = typeof form?.grammar === 'string' ? form.grammar : category;
      articleRule = typeof form?.articleRule === 'string' ? form.articleRule : '';
    }
    categories[placeholder] = category;
    return BattleTextParser.modify(value, modifiers, this.language, category, articleRule);
  }
  fixLowercase(input) {
    if (this.lowercaseRegExp === undefined) {
      const prefixes = ['pokemon', 'opposingPokemon', 'team', 'opposingTeam', 'party', 'opposingParty'].map(templateId => {
        const template = this.defaultText(templateId);
        if (template.startsWith(template.charAt(0).toUpperCase())) return '';
        const braceIndex = template.indexOf('{');
        if (braceIndex >= 0) return template.slice(0, braceIndex);
        return template;
      }).filter(prefix => prefix);
      if (prefixes.length) {
        let buf = `((?:^|\n)(?:  |  \\(|\\[|\\{)?)(` + prefixes.map(BattleTextParser.escapeRegExp).join('|') + `)`;
        this.lowercaseRegExp = new RegExp(buf, 'g');
      } else {
        this.lowercaseRegExp = null;
      }
    }
    if (!this.lowercaseRegExp) return input;
    return input.replace(this.lowercaseRegExp, (match, p1, p2) => p1 + p2.charAt(0).toUpperCase() + p2.slice(1));
  }
  static escapeRegExp(input) {
    return input.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
  }
  static escapeReplace(input) {
    return input.replace(/\$/g, '$$$$');
  }
  static inflect(template, categories) {
    return template.replace(/\{INFLECT:([A-Z][A-Z0-9]*):((?:\\.|[^}\\])*)\}/g, (match, placeholder, source) => {
      const category = categories[placeholder];
      if (!category) return match;
      const grammarCategory = /^[mfn][sup]$/.test(category);
      const normalizedCategory = grammarCategory && category.endsWith('u') ? category.charAt(0) + 's' : category;
      const categoryFallback = grammarCategory ? category.endsWith('p') ? 'p' : 's' : '';
      const fields = [];
      let field = '';
      for (let i = 0; i < source.length; i++) {
        if (source.charAt(i) === '\\' && i + 1 < source.length) {
          field += source.charAt(i) + source.charAt(++i);
        } else if (source.charAt(i) === ':') {
          fields.push(field);
          field = '';
        } else {
          field += source.charAt(i);
        }
      }
      fields.push(field);
      for (const candidate of fields) {
        let equalsIndex = -1;
        for (let i = 0; i < candidate.length; i++) {
          if (candidate.charAt(i) === '\\') {
            i++;
          } else if (candidate.charAt(i) === '=') {
            equalsIndex = i;
            break;
          }
        }
        if (equalsIndex < 0 || ![normalizedCategory, categoryFallback].includes(candidate.slice(0, equalsIndex))) continue;
        return candidate.slice(equalsIndex + 1).replace(/\\(.)/g, '$1');
      }
      return match;
    });
  }
  static modify(value, modifiers, language, category = 'ms', articleRule = '') {
    const knownModifiers = ['definite', 'indefinite', 'nominative', 'accusative', 'singular', 'plural', 'masculine', 'capitalize', 'classified', 'a', 'de', 'di', 'su', 'e', 'y', 'topic', 'object', 'subject', 'conjunctive', 'directional'];
    for (const modifier of modifiers) {
      if (!knownModifiers.includes(modifier)) return value;
    }
    const has = modifier => modifiers.includes(modifier);
    // Names without localized grammar metadata default to masculine singular
    let plural = category.endsWith('p');
    const uncountable = category.endsWith('u');
    let feminine = category.startsWith('f');
    let neuter = category.startsWith('n');
    if (has('singular')) plural = false;
    if (has('plural')) plural = true;
    if (has('masculine')) feminine = neuter = false;
    const initial = this.grammarInitial(value);
    const vowel = /^[aeiouà-æè-ïò-öù-ü]/i.test(initial);
    let prefix = '';
    if (language === 'fr') {
      let article = '';
      const lead = (has('a') || has('de')) && !has('definite') && !has('indefinite') && /^(\*\*)?(le |la |les |l’)/i.exec(value);
      if (lead) {
        // detect article for "de les" -> "des" etc
        article = lead[2].toLowerCase();
        value = (lead[1] || '') + value.slice(lead[0].length);
      } else if (has('definite')) {
        article = plural ? 'les ' : vowel ? 'l’' : feminine ? 'la ' : 'le ';
      } else if (has('indefinite')) {
        article = uncountable ? '' : plural ? 'des ' : feminine ? 'une ' : 'un ';
      }
      if (has('a')) {
        if (article === 'le ') prefix = 'au ';else if (article === 'les ') prefix = 'aux ';else prefix = 'à ' + article;
      } else if (has('de')) {
        if (article === 'le ') prefix = 'du ';else if (article === 'les ') prefix = 'des ';else if (article) prefix = 'de ' + article;else prefix = vowel || /^h/i.test(initial) ? 'd’' : 'de ';
      } else {
        prefix = article;
      }
    } else if (language === 'es') {
      const articleFeminine = feminine && articleRule !== 'stressed-a';
      let article = '';
      const lead = (has('a') || has('de')) && !has('definite') && !has('indefinite') && /^(\*\*)?(el |la |los |las )/i.exec(value);
      if (lead) {
        // detect article for "de el" -> "del" etc
        article = lead[2].toLowerCase();
        value = (lead[1] || '') + value.slice(lead[0].length);
      } else if (has('definite')) article = plural ? feminine ? 'las ' : 'los ' : articleFeminine ? 'la ' : 'el ';else if (has('indefinite')) {
        article = uncountable ? '' : plural ? feminine ? 'unas ' : 'unos ' : articleFeminine ? 'una ' : 'un ';
      }
      if (has('a')) prefix = article === 'el ' ? 'al ' : 'a ' + article;else if (has('de')) prefix = article === 'el ' ? 'del ' : 'de ' + article;else prefix = article;
      if (has('y')) prefix = /^(?:i|hi)(?![aeou])/i.test(initial) ? 'e ' : 'y ';
    } else if (language === 'it') {
      const special = /^(?:s[^aeiouàèéìòù]|z|gn|ps|pn|x|y)/i.test(initial);
      let article = '';
      let hasDefinite = has('definite');
      const lead = (has('a') || has('di') || has('su')) && !has('definite') && !has('indefinite') && /^(\*\*)?(il |lo |la |i |gli |le |l’)/i.exec(value);
      if (lead) {
        // detect article for "su la" -> "sulla" etc
        article = lead[2].toLowerCase();
        value = (lead[1] || '') + value.slice(lead[0].length);
        hasDefinite = true;
      } else if (has('definite')) {
        if (plural) article = feminine ? 'le ' : vowel || special ? 'gli ' : 'i ';else if (vowel) article = 'l’';else article = feminine ? 'la ' : special ? 'lo ' : 'il ';
      } else if (has('indefinite')) {
        if (uncountable) article = feminine ? vowel ? 'dell’' : 'della ' : vowel ? 'dell’' : special ? 'dello ' : 'del ';else if (feminine) article = vowel ? 'un’' : 'una ';else article = special ? 'uno ' : 'un ';
      }
      if (has('a') && hasDefinite) {
        prefix = this.italianContraction(article, ['al ', 'allo ', 'all’', 'alla ', 'ai ', 'agli ', 'alle ']);
      } else if (has('di') && hasDefinite) {
        prefix = this.italianContraction(article, ['del ', 'dello ', 'dell’', 'della ', 'dei ', 'degli ', 'delle ']);
      } else if (has('su') && hasDefinite) {
        prefix = this.italianContraction(article, ['sul ', 'sullo ', 'sull’', 'sulla ', 'sui ', 'sugli ', 'sulle ']);
      } else if (has('a')) {
        prefix = vowel ? 'ad ' : 'a ';
      } else if (has('di')) {
        prefix = vowel ? 'd’' : 'di ';
      } else if (has('su')) {
        prefix = 'su ';
      } else if (has('e')) {
        prefix = vowel ? 'ed ' : 'e ';
      } else {
        prefix = article;
      }
    } else if (language === 'de') {
      const accusative = has('accusative');
      if (has('definite')) {
        prefix = plural ? 'die ' : feminine ? 'die ' : neuter ? 'das ' : accusative ? 'den ' : 'der ';
      } else if (has('indefinite')) {
        prefix = uncountable ? '' : feminine ? 'eine ' : neuter ? 'ein ' : accusative ? 'einen ' : 'ein ';
      }
    } else if (language === 'ko') {
      const jong = this.koreanJongseong(value);
      if (has('topic')) value += jong ? '은' : '는';else if (has('object')) value += jong ? '을' : '를';else if (has('subject')) value += jong ? '이' : '가';else if (has('conjunctive')) value += jong ? '과' : '와';else if (has('directional')) value += jong && jong !== 8 ? '으로' : '로';
    }
    value = prefix + value;
    if (has('capitalize')) {
      for (let i = 0; i < value.length; i++) {
        const letter = value.charAt(i);
        if (letter.toUpperCase() === letter.toLowerCase()) continue;
        value = value.slice(0, i) + letter.toUpperCase() + value.slice(i + 1);
        break;
      }
    }
    return value;
  }
  static grammarInitial(value) {
    return value.replace(/\*\*/g, '').replace(/^[^A-Za-zÀ-ɏ0-9ㄱ-힣]+/, '');
  }
  static italianContraction(article, forms) {
    const articles = ['il ', 'lo ', 'l’', 'la ', 'i ', 'gli ', 'le '];
    const index = articles.indexOf(article);
    return index < 0 ? forms[0] : forms[index];
  }
  static koreanJongseong(value) {
    const text = value.replace(/\*\*/g, '').replace(/[^A-Za-z0-9가-힣]+$/g, '');
    if (!text) return 0;
    const code = text.charCodeAt(text.length - 1);
    if (code >= 0xAC00 && code <= 0xD7A3) return (code - 0xAC00) % 28;
    if (code >= 0x30 && code <= 0x39) return [1, 8, 0, 1, 0, 0, 1, 8, 8, 0][code - 0x30];
    return /[lmnr]$/i.test(text) ? 8 : 0;
  }
  pokemonName = pokemon => {
    if (!pokemon) return '';
    if (!pokemon.startsWith('p')) return `???pokemon:${pokemon}???`;
    if (pokemon.charAt(3) === ':') return pokemon.slice(4).trim();else if (pokemon.charAt(2) === ':') return pokemon.slice(3).trim();
    return `???pokemon:${pokemon}???`;
  };
  pokemon(pokemon) {
    if (!pokemon) return '';
    let side = pokemon.slice(0, 2);
    if (!['p1', 'p2', 'p3', 'p4'].includes(side)) return `???pokemon:${pokemon}???`;
    const name = this.pokemonName(pokemon);
    const isNear = side === this.perspective || side === BattleTextParser.allyID(side);
    const template = this.defaultText(isNear ? 'pokemon' : 'opposingPokemon');
    return this.render(template, {
      NICKNAME: name
    });
  }
  pokemonFull(pokemon, details) {
    const nickname = this.pokemonName(pokemon);
    const species = details.split(',')[0];
    const localizedSpecies = this.speciesName(species);
    if (nickname === localizedSpecies) return [pokemon.slice(0, 2), `**${localizedSpecies}**`];
    const template = this.defaultText('fullName') || '{NICKNAME} ({SPECIES})';
    return [pokemon.slice(0, 2), this.render(template, {
      NICKNAME: nickname,
      SPECIES: `**${localizedSpecies}**`
    })];
  }
  trainer(side) {
    side = side.slice(0, 2);
    if (side === 'p1') return this.p1;
    if (side === 'p2') return this.p2;
    if (side === 'p3') return this.p3;
    if (side === 'p4') return this.p4;
    return `???side:${side}???`;
  }
  static allyID(sideid) {
    if (sideid === 'p1') return 'p3';
    if (sideid === 'p2') return 'p4';
    if (sideid === 'p3') return 'p1';
    if (sideid === 'p4') return 'p2';
    return '';
  }
  team(side, isFar = false) {
    side = side.slice(0, 2);
    if (side === this.perspective || side === BattleTextParser.allyID(side)) {
      return this.defaultText(!isFar ? 'team' : 'opposingTeam');
    }
    return this.defaultText(isFar ? 'team' : 'opposingTeam');
  }
  own(side) {
    side = side.slice(0, 2);
    if (side === this.perspective) {
      return 'OWN';
    }
    return '';
  }
  party(side) {
    side = side.slice(0, 2);
    if (side === this.perspective || side === BattleTextParser.allyID(side)) {
      return this.defaultText('party');
    }
    return this.defaultText('opposingParty');
  }
  static effectId(effect) {
    if (!effect) return '';
    if (effect.startsWith('item:') || effect.startsWith('move:')) {
      effect = effect.slice(5);
    } else if (effect.startsWith('ability:')) {
      effect = effect.slice(8);
    }
    return toID(effect);
  }
  effect(effect) {
    if (!effect) return '';
    if (effect.startsWith('item:')) return this.itemValue(effect.slice(5));
    if (effect.startsWith('move:')) return this.moveName(effect.slice(5));
    if (effect.startsWith('ability:')) return this.abilityName(effect.slice(8));
    return effect.trim();
  }
  textName(table, name) {
    if (!name) return '';
    name = name.trim();
    const id = toID(name);
    const localized = BattleText[this.language]?.[table]?.[id]?.name;
    const english = BattleText.en?.[table]?.[id]?.name;
    const translated = localized || english;
    return typeof translated === 'string' ? translated : name;
  }
  moveName(name) {
    return this.textName('Moves', name);
  }
  itemName(name) {
    return this.textName('Items', name);
  }
  itemValue(name) {
    return {
      value: this.itemName(name),
      table: 'Items',
      id: toID(name)
    };
  }
  abilityName(name) {
    return this.textName('Abilities', name);
  }
  speciesName(name) {
    if (!name) return '';
    name = name.trim();
    return Dex.text.get(Dex.species.get(name), this.language).name || name;
  }
  template(type, ...namespaces) {
    for (const namespace of namespaces) {
      if (!namespace) continue;
      if (namespace === 'OWN') {
        return this.defaultText(type + 'Own') + '\n';
      }
      if (namespace === 'NODEFAULT') {
        return '';
      }
      let id = BattleTextParser.effectId(namespace);
      let tables;
      if (namespace.startsWith('item:')) tables = ['Items', 'Default'];else if (namespace.startsWith('ability:')) tables = ['Abilities', 'Default'];else if (namespace.startsWith('move:')) tables = ['Moves', 'Default'];else tables = ['Items', 'Abilities', 'Moves', 'Default'];
      for (const table of tables) {
        let template = this.textField(table, id, type);
        if (!template) continue;
        if (template.charAt(1) === '.') {
          type = template.slice(2);
          template = this.textField(table, id, type);
        }
        if (template.startsWith('#')) {
          id = template.slice(1);
          template = this.textField(table, id, type);
        }
        return template ? template + '\n' : '';
      }
    }
    const template = this.defaultText(type);
    if (!template) return '';
    return template + '\n';
  }
  maybeAbility(effect, holder) {
    if (!effect) return '';
    if (!effect.startsWith('ability:')) return '';
    return this.ability(effect.slice(8).trim(), holder);
  }
  ability(name, holder) {
    if (!name) return '';
    return this.render(this.defaultText('abilityActivation'), {
      POKEMON: this.pokemon(holder),
      ABILITY: this.abilityName(name)
    }) + '\n';
  }
  static stat(stat, language = Dex.text.getLanguage()) {
    const id = stat || 'stats';
    const name = BattleText[language]?.StatNames?.[id] || BattleText.en?.StatNames?.[id];
    return typeof name === 'string' ? name : `???stat:${stat}???`;
  }
  static statMediumName(stat, language = Dex.text.getLanguage()) {
    const name = BattleText[language]?.StatMediumNames?.[stat] || BattleText.en?.StatMediumNames?.[stat];
    return typeof name === 'string' ? name : `???stat:${stat}???`;
  }
  static statShortName(stat, language = Dex.text.getLanguage()) {
    const name = BattleText[language]?.StatShortNames?.[stat] || BattleText.en?.StatShortNames?.[stat];
    return typeof name === 'string' ? name : `???stat:${stat}???`;
  }
  statValue(stat) {
    const id = stat || 'stats';
    const grammar = BattleText[this.language]?.StatNames?.[`${id}:grammar`] || BattleText.en?.StatNames?.[`${id}:grammar`];
    return {
      value: BattleTextParser.stat(stat, this.language),
      category: grammar || (stat ? 's' : 'p')
    };
  }
  lineSection(args, kwArgs) {
    if (kwArgs.premajor) return 'preMajor';
    if (kwArgs.postmajor) return 'postMajor';
    if (kwArgs.major) return 'major';
    const cmd = args[0];
    switch (cmd) {
      case 'done':
      case 'turn':
        return 'break';
      case 'move':
      case 'cant':
      case 'switch':
      case 'drag':
      case 'upkeep':
      case 'start':
      case '-mega':
      case '-candynamax':
      case '-terastallize':
        return 'major';
      case 'switchout':
      case 'faint':
        return 'preMajor';
      case '-zpower':
        return 'postMajor';
      case '-damage':
        {
          const id = BattleTextParser.effectId(kwArgs.from);
          if (id === 'confusion') return 'major';
          return 'postMajor';
        }
      case '-curestatus':
        {
          const id = BattleTextParser.effectId(kwArgs.from);
          if (id === 'naturalcure') return 'preMajor';
          return 'postMajor';
        }
      case '-start':
        {
          const id = BattleTextParser.effectId(kwArgs.from);
          if (id === 'protean') return 'preMajor';
          return 'postMajor';
        }
      case '-activate':
        {
          const id = BattleTextParser.effectId(args[2]);
          if (id === 'confusion' || id === 'attract' || id === 'pursuit') return 'preMajor';
          return 'postMajor';
        }
    }
    return cmd.startsWith('-') ? 'postMajor' : '';
  }
  sectionBreak(args, kwArgs) {
    const prevSection = this.curLineSection;
    const curSection = this.lineSection(args, kwArgs);
    if (!curSection) return false;
    this.curLineSection = curSection;
    switch (curSection) {
      case 'break':
        if (prevSection !== 'break') return true;
        return false;
      case 'preMajor':
      case 'major':
        if (prevSection === 'postMajor' || prevSection === 'major') return true;
        return false;
      case 'postMajor':
        return false;
    }
  }
  parseArgs(args, kwArgs, noSectionBreak) {
    let buf = !noSectionBreak && this.sectionBreak(args, kwArgs) ? '\n' : '';
    return buf + this.fixLowercase(this.parseArgsInner(args, kwArgs) || '');
  }
  parseArgsInner(args, kwArgs) {
    let cmd = args[0];
    switch (cmd) {
      case 'player':
        {
          const [, side, name] = args;
          if (side === 'p1' && name) {
            this.p1 = name;
          } else if (side === 'p2' && name) {
            this.p2 = name;
          } else if (side === 'p3' && name) {
            this.p3 = name;
          } else if (side === 'p4' && name) {
            this.p4 = name;
          }
          return '';
        }
      case 'gen':
        {
          const [, num] = args;
          this.gen = parseInt(num, 10);
          return '';
        }
      case 'turn':
        {
          const [, num] = args;
          this.turn = Number.parseInt(num, 10);
          return this.render(this.template('turn'), {
            NUMBER: num
          }) + '\n';
        }
      case 'start':
        {
          return this.render(this.template('startBattle'), {
            TRAINER1: this.p1,
            TRAINER2: this.p2
          });
        }
      case 'win':
      case 'tie':
        {
          const [, name] = args;
          if (cmd === 'tie' || !name) {
            return this.render(this.template('tieBattle'), {
              TRAINER1: this.p1,
              TRAINER2: this.p2
            });
          }
          return this.render(this.template('winBattle'), {
            TRAINER: name
          });
        }
      case 'switch':
        {
          const [, pokemon, details] = args;
          const [side, fullname] = this.pokemonFull(pokemon, details);
          const template = this.template('switchIn', this.own(side));
          return this.render(template, {
            TRAINER: this.trainer(side),
            FULLNAME: fullname
          });
        }
      case 'drag':
        {
          const [, pokemon, details] = args;
          const [side, fullname] = this.pokemonFull(pokemon, details);
          const template = this.template('drag');
          return this.render(template, {
            TRAINER: this.trainer(side),
            FULLNAME: fullname
          });
        }
      case 'detailschange':
      case '-transform':
      case '-formechange':
        {
          const [, pokemon, arg2, arg3] = args;
          let newSpecies = '';
          switch (cmd) {
            case 'detailschange':
              newSpecies = arg2.split(',')[0].trim();
              break;
            case '-transform':
              newSpecies = arg3;
              break;
            case '-formechange':
              newSpecies = arg2;
              break;
          }
          let newSpeciesId = toID(newSpecies);
          let id = '';
          let templateName = 'transform';
          if (cmd !== '-transform') {
            switch (newSpeciesId) {
              case 'greninjaash':
                id = 'battlebond';
                break;
              case 'mimikyubusted':
                id = 'disguise';
                break;
              case 'zygardecomplete':
                id = 'powerconstruct';
                break;
              case 'necrozmaultra':
                id = 'ultranecroziumz';
                break;
              case 'darmanitanzen':
                id = 'zenmode';
                break;
              case 'darmanitan':
                id = 'zenmode';
                templateName = 'transformEnd';
                break;
              case 'darmanitangalarzen':
                id = 'zenmode';
                break;
              case 'darmanitangalar':
                id = 'zenmode';
                templateName = 'transformEnd';
                break;
              case 'aegislashblade':
                id = 'stancechange';
                break;
              case 'aegislash':
                id = 'stancechange';
                templateName = 'transformEnd';
                break;
              case 'wishiwashischool':
                id = 'schooling';
                break;
              case 'wishiwashi':
                id = 'schooling';
                templateName = 'transformEnd';
                break;
              case 'miniormeteor':
                id = 'shieldsdown';
                break;
              case 'minior':
                id = 'shieldsdown';
                templateName = 'transformEnd';
                break;
              case 'eiscuenoice':
                id = 'iceface';
                break;
              case 'eiscue':
                id = 'iceface';
                templateName = 'transformEnd';
                break;
              case 'terapagosterastal':
                id = 'terashift';
                break;
            }
          } else if (newSpecies) {
            id = 'transform';
          }
          const template = this.template(templateName, id, kwArgs.msg ? '' : 'NODEFAULT');
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            SPECIES: this.speciesName(newSpecies)
          });
        }
      case 'switchout':
        {
          const [, pokemon] = args;
          const side = pokemon.slice(0, 2);
          const template = this.template('switchOut', kwArgs.from, this.own(side));
          return this.render(template, {
            TRAINER: this.trainer(side),
            NICKNAME: this.pokemonName(pokemon),
            POKEMON: this.pokemon(pokemon)
          });
        }
      case 'faint':
        {
          const [, pokemon] = args;
          const template = this.template('faint');
          return this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case 'swap':
        {
          const [, pokemon, target] = args;
          if (!target || !isNaN(Number(target))) {
            const template = this.template('swapCenter');
            return this.render(template, {
              POKEMON: this.pokemon(pokemon)
            });
          }
          const template = this.template('swap');
          return this.render(template, {
            POKEMON: this.pokemon(pokemon),
            TARGET: this.pokemon(target)
          });
        }
      case 'move':
        {
          const [, pokemon, move] = args;
          let line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          if (kwArgs.zeffect) {
            line1 = this.render(this.template('zEffect'), {
              POKEMON: this.pokemon(pokemon)
            });
          }
          const template = this.template('move', kwArgs.from);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            MOVE: this.moveName(move)
          });
        }
      case 'cant':
        {
          let [, pokemon, effect, move] = args;
          const template = this.template('cant', effect, 'NODEFAULT') || this.template(move ? 'cant' : 'cantNoMove');
          const line1 = this.maybeAbility(effect, kwArgs.of || pokemon);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            MOVE: this.moveName(move)
          });
        }
      case '-candynamax':
        {
          let [, side] = args;
          const own = this.own(side);
          let template = '';
          if (this.turn === 1) {
            if (own) template = this.template('canDynamax', own);
          } else {
            template = this.template('canDynamax', own);
          }
          return this.render(template, {
            TRAINER: this.trainer(side)
          });
        }
      case 'message':
        {
          let [, message] = args;
          return '' + message + '\n';
        }
      case '-start':
        {
          let [, pokemon, effect, arg3] = args;
          const line1 = this.maybeAbility(effect, pokemon) || this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          let id = BattleTextParser.effectId(effect);
          if (id === 'typechange') {
            const template = this.template('typeChange', kwArgs.from);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              TYPE: arg3,
              SOURCE: this.pokemon(kwArgs.of)
            });
          }
          if (id === 'typeadd') {
            const template = this.template('typeAdd', kwArgs.from);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              TYPE: arg3
            });
          }
          if (id.startsWith('stockpile')) {
            const num = id.slice(9);
            const template = this.template('start', 'stockpile');
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              NUMBER: num
            });
          }
          if (id.startsWith('perish')) {
            const num = id.slice(6);
            const template = this.template('activate', 'perishsong');
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              NUMBER: num
            });
          }
          if (id.startsWith('protosynthesis') || id.startsWith('quarkdrive')) {
            const stat = id.slice(-3);
            const template = this.template('start', id.slice(0, id.length - 3));
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              STAT: this.statValue(stat)
            });
          }
          let templateId = 'start';
          if (kwArgs.already) templateId = 'alreadyStarted';
          if (kwArgs.fatigue) templateId = 'startFromFatigue';
          if (kwArgs.zeffect) templateId = 'startFromZEffect';
          if (kwArgs.damage) templateId = 'activate';
          if (kwArgs.block) templateId = 'block';
          if (kwArgs.upkeep) templateId = 'upkeep';
          if (templateId === 'start' && kwArgs.from?.startsWith('item:')) {
            templateId += 'FromItem';
          }
          const template = this.template(templateId, kwArgs.from, effect);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            EFFECT: this.effect(effect),
            MOVE: this.moveName(arg3),
            SOURCE: this.pokemon(kwArgs.of),
            ITEM: this.effect(kwArgs.from)
          });
        }
      case '-end':
        {
          let [, pokemon, effect] = args;
          const line1 = this.maybeAbility(effect, pokemon) || this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          let id = BattleTextParser.effectId(effect);
          if (id === 'doomdesire' || id === 'futuresight') {
            const template = this.template('activate', effect);
            return line1 + this.render(template, {
              TARGET: this.pokemon(pokemon)
            });
          }
          let templateId = 'end';
          let template = '';
          if (kwArgs.from?.startsWith('item:')) {
            template = this.template('endFromItem', effect);
          }
          if (!template) template = this.template(templateId, effect);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            EFFECT: this.effect(effect),
            SOURCE: this.pokemon(kwArgs.of),
            ITEM: this.effect(kwArgs.from)
          });
        }
      case '-ability':
        {
          let [, pokemon, ability, oldAbility] = args;
          let line1 = '';
          if (oldAbility) line1 += this.ability(oldAbility, pokemon);
          line1 += this.ability(ability, pokemon);
          if (kwArgs.fail) {
            const template = this.template('block', kwArgs.from);
            return line1 + template;
          }
          if (kwArgs.from) {
            if (!oldAbility) line1 = this.maybeAbility(kwArgs.from, pokemon) + line1;
            const template = this.template('changeAbility', kwArgs.from);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              ABILITY: this.abilityName(ability),
              SOURCE: this.pokemon(kwArgs.of)
            });
          }
          const id = BattleTextParser.effectId(ability);
          if (id === 'unnerve') {
            const template = this.template('start', ability);
            return line1 + this.render(template, {
              TEAM: this.team(pokemon.slice(0, 2), true)
            });
          }
          let templateId = 'start';
          if (id === 'anticipation' || id === 'sturdy') templateId = 'activate';
          const template = this.template(templateId, ability, 'NODEFAULT');
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-endability':
        {
          let [, pokemon, ability] = args;
          if (ability) return this.ability(ability, pokemon);
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          const template = this.template('start', 'Gastro Acid');
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-item':
        {
          const [, pokemon, item] = args;
          const id = BattleTextParser.effectId(kwArgs.from);
          let target = '';
          if (['magician', 'pickpocket'].includes(id)) {
            [target, kwArgs.of] = [kwArgs.of, ''];
          }
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          if (['thief', 'covet', 'bestow', 'magician', 'pickpocket'].includes(id)) {
            const template = this.template('takeItem', kwArgs.from);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              ITEM: this.itemValue(item),
              SOURCE: this.pokemon(target || kwArgs.of)
            });
          }
          if (id === 'frisk') {
            const hasTarget = kwArgs.of && pokemon && kwArgs.of !== pokemon;
            const template = this.template(hasTarget ? 'activate' : 'activateNoTarget', "Frisk");
            return line1 + this.render(template, {
              POKEMON: this.pokemon(kwArgs.of),
              ITEM: this.itemValue(item),
              TARGET: this.pokemon(pokemon)
            });
          }
          if (kwArgs.from) {
            const template = this.template('addItem', kwArgs.from);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              ITEM: this.itemValue(item)
            });
          }
          const template = this.template('start', item, 'NODEFAULT');
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-enditem':
        {
          let [, pokemon, item] = args;
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          if (kwArgs.eat) {
            const template = this.template('eatItem', kwArgs.from);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              ITEM: this.itemValue(item)
            });
          }
          const id = BattleTextParser.effectId(kwArgs.from);
          if (id === 'gem') {
            const template = this.template('useGem', item);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              ITEM: this.itemValue(item),
              MOVE: this.moveName(kwArgs.move)
            });
          }
          if (id === 'stealeat') {
            const template = this.template('removeItem', "Bug Bite");
            return line1 + this.render(template, {
              SOURCE: this.pokemon(kwArgs.of),
              ITEM: this.itemValue(item)
            });
          }
          if (kwArgs.from) {
            const template = this.template('removeItem', kwArgs.from);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              ITEM: this.itemValue(item),
              SOURCE: this.pokemon(kwArgs.of)
            });
          }
          if (kwArgs.weaken) {
            const template = this.template('activateWeaken');
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              ITEM: this.itemValue(item)
            });
          }
          let template = this.template('end', item, 'NODEFAULT');
          if (!template) template = this.template('activateItem');
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            ITEM: this.itemValue(item),
            TARGET: this.pokemon(kwArgs.of)
          });
        }
      case '-status':
        {
          const [, pokemon, status] = args;
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          if (kwArgs.from?.startsWith('item:')) {
            const template = this.template('startFromItem', status);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              ITEM: this.effect(kwArgs.from)
            });
          }
          if (BattleTextParser.effectId(kwArgs.from) === 'rest') {
            const template = this.template('startFromRest', status);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon)
            });
          }
          const template = this.template('start', status);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-curestatus':
        {
          const [, pokemon, status] = args;
          if (BattleTextParser.effectId(kwArgs.from) === 'naturalcure') {
            const template = this.template('activate', kwArgs.from);
            return this.render(template, {
              POKEMON: this.pokemon(pokemon)
            });
          }
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          if (kwArgs.from?.startsWith('item:')) {
            const template = this.template('endFromItem', status);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              ITEM: this.effect(kwArgs.from)
            });
          }
          if (kwArgs.thaw) {
            const template = this.template('endFromMove', status);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              MOVE: this.effect(kwArgs.from)
            });
          }
          let template = this.template('end', status, 'NODEFAULT');
          if (!template) template = this.template('end');
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            EFFECT: status
          });
        }
      case '-cureteam':
        {
          return this.template('activate', kwArgs.from);
        }
      case '-singleturn':
      case '-singlemove':
        {
          const [, pokemon, effect] = args;
          const line1 = this.maybeAbility(effect, kwArgs.of || pokemon) || this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          let id = BattleTextParser.effectId(effect);
          if (id === 'instruct') {
            const template = this.template('activate', effect);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(kwArgs.of),
              TARGET: this.pokemon(pokemon)
            });
          }
          let template = this.template('start', effect, 'NODEFAULT');
          if (!template) template = this.template('start');
          return line1 + this.render(template, {
            EFFECT: this.effect(effect),
            POKEMON: this.pokemon(pokemon),
            SOURCE: this.pokemon(kwArgs.of),
            TEAM: this.team(pokemon.slice(0, 2))
          });
        }
      case '-sidestart':
        {
          let [, side, effect] = args;
          let template = this.template('start', effect, 'NODEFAULT');
          if (!template) template = this.template('startTeamEffect');
          return this.render(template, {
            EFFECT: this.effect(effect),
            TEAM: this.team(side),
            PARTY: this.party(side)
          });
        }
      case '-sideend':
        {
          let [, side, effect] = args;
          let template = this.template('end', effect, 'NODEFAULT');
          if (!template) template = this.template('endTeamEffect');
          return this.render(template, {
            EFFECT: this.effect(effect),
            TEAM: this.team(side),
            PARTY: this.party(side)
          });
        }
      case '-weather':
        {
          const [, weather] = args;
          if (!weather || weather === 'none') {
            const template = this.template('end', kwArgs.from, 'NODEFAULT');
            if (!template) {
              return this.render(this.template('endFieldEffect'), {
                EFFECT: this.effect(weather)
              });
            }
            return template;
          }
          if (kwArgs.upkeep) {
            return this.template('upkeep', weather, 'NODEFAULT');
          }
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of);
          let template = this.template('start', weather, 'NODEFAULT');
          if (!template) template = this.template('startFieldEffect');
          return line1 + this.render(template, {
            EFFECT: this.effect(weather)
          });
        }
      case '-fieldstart':
      case '-fieldactivate':
        {
          const [, effect] = args;
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of);
          if (BattleTextParser.effectId(kwArgs.from) === 'hadronengine') {
            return line1 + this.render(this.template('start', 'hadronengine'), {
              POKEMON: this.pokemon(kwArgs.of)
            });
          }
          let templateId = cmd.slice(6);
          if (BattleTextParser.effectId(effect) === 'perishsong') templateId = 'start';
          let template = this.template(templateId, effect, 'NODEFAULT');
          if (!template) template = this.template('startFieldEffect');
          return line1 + this.render(template, {
            EFFECT: this.effect(effect),
            POKEMON: this.pokemon(kwArgs.of)
          });
        }
      case '-fieldend':
        {
          let [, effect] = args;
          let template = this.template('end', effect, 'NODEFAULT');
          if (!template) template = this.template('endFieldEffect');
          return this.render(template, {
            EFFECT: this.effect(effect)
          });
        }
      case '-sethp':
        {
          let effect = kwArgs.from;
          return this.template('activate', effect);
        }
      case '-message':
        {
          let [, message] = args;
          return '  ' + message + '\n';
        }
      case '-hint':
        {
          let [, message] = args;
          return '  (' + message + ')\n';
        }
      case '-activate':
        {
          let [, pokemon, effect, target] = args;
          let id = BattleTextParser.effectId(effect);
          if (id === 'celebrate') {
            return this.render(this.template('activate', 'celebrate'), {
              TRAINER: this.trainer(pokemon.slice(0, 2))
            });
          }
          if (!target && ['hyperdrill', 'hyperspacefury', 'hyperspacehole', 'phantomforce', 'shadowforce', 'feint'].includes(id)) {
            [pokemon, target] = [kwArgs.of, pokemon];
            if (!pokemon) pokemon = target;
          }
          if (!target) target = kwArgs.of || pokemon;
          let line1 = this.maybeAbility(effect, pokemon);
          if (id === 'lockon' || id === 'mindreader') {
            const template = this.template('start', effect);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(kwArgs.of),
              SOURCE: this.pokemon(pokemon)
            });
          }
          if ((id === 'mummy' || id === 'lingeringaroma') && kwArgs.ability) {
            line1 += this.ability(kwArgs.ability, target);
            line1 += this.ability(id === 'mummy' ? 'Mummy' : 'Lingering Aroma', target);
            const template = this.template('changeAbility', id);
            return line1 + this.render(template, {
              TARGET: this.pokemon(target)
            });
          }
          if (id === 'commander') {
            // Commander didn't have a message prior to v1.2.0 of SV
            // so this is for backwards compatibility
            if (target === pokemon) return line1;
            const template = this.template('activate', id);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              TARGET: this.pokemon(target)
            });
          }
          let templateId = 'activate';
          if (id === 'forewarn' && pokemon === target) {
            templateId = 'activateNoTarget';
          }
          if ((id === 'protosynthesis' || id === 'quarkdrive') && kwArgs.fromitem) {
            templateId = 'activateFromItem';
          }
          if (id === 'orichalcumpulse' && kwArgs.source) {
            templateId = 'start';
          }
          let template = this.template(templateId, effect, 'NODEFAULT');
          if (!template) {
            if (line1) return line1; // Abilities don't have a default template
            template = this.template('activate');
            return line1 + this.render(template, {
              EFFECT: this.effect(effect)
            });
          }
          if (kwArgs.ability) {
            line1 += this.ability(kwArgs.ability, pokemon);
          }
          if (kwArgs.ability2) {
            line1 += this.ability(kwArgs.ability2, target);
          }
          return line1 + this.render(template, {
            TEAM: id === 'brickbreak' ? this.team(target.slice(0, 2)) : undefined,
            MOVE: kwArgs.move ? this.moveName(kwArgs.move) : undefined,
            NUMBER: kwArgs.number,
            ITEM: kwArgs.item ? this.itemValue(kwArgs.item) : undefined,
            NAME: kwArgs.name,
            POKEMON: this.pokemon(pokemon),
            TARGET: this.pokemon(target),
            SOURCE: this.pokemon(kwArgs.of)
          });
        }
      case '-prepare':
        {
          const [, pokemon, effect, target] = args;
          const template = this.template('prepare', effect);
          return this.render(template, {
            POKEMON: this.pokemon(pokemon),
            TARGET: this.pokemon(target)
          });
        }
      case '-damage':
        {
          let [, pokemon,, percentage] = args;
          let template = this.template('damage', kwArgs.from, 'NODEFAULT');
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          const id = BattleTextParser.effectId(kwArgs.from);
          if (template) {
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon)
            });
          }
          if (!kwArgs.from) {
            template = this.template(percentage ? 'damagePercentage' : 'damage');
            percentage = percentage ? percentage.replace(/%(\|\|)?$/, '$1') : '';
            const message = this.render(template, {
              POKEMON: this.pokemon(pokemon),
              PERCENTAGE: percentage
            });
            // move % sign inside <abbr>
            return line1 + message.replace(/\|\|([%％])/, '$1||');
          }
          if (kwArgs.from.startsWith('item:')) {
            template = this.template(kwArgs.of ? 'damageFromPokemon' : 'damageFromItem');
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              ITEM: this.effect(kwArgs.from),
              SOURCE: this.pokemon(kwArgs.of)
            });
          }
          if (kwArgs.partiallytrapped || id === 'bind' || id === 'wrap') {
            template = this.template('damageFromPartialTrapping');
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              MOVE: this.effect(kwArgs.from)
            });
          }
          template = this.template('damage');
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-heal':
        {
          let [, pokemon] = args;
          let template = this.template('heal', kwArgs.from, 'NODEFAULT');
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          if (template) {
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              SOURCE: this.pokemon(kwArgs.of),
              NICKNAME: kwArgs.wisher
            });
          }
          if (kwArgs.from && !kwArgs.from.startsWith('ability:')) {
            template = this.template('healFromEffect');
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              EFFECT: this.effect(kwArgs.from)
            });
          }
          template = this.template('heal');
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-boost':
      case '-unboost':
        {
          let [, pokemon, stat, num] = args;
          if (stat === 'spa' && this.gen === 1) stat = 'spc';
          const amount = parseInt(num, 10);
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          let templateId = cmd.slice(1);
          if (amount >= 3) templateId += '3';else if (amount >= 2) templateId += '2';else if (amount === 0) templateId += '0';
          if (amount && kwArgs.zeffect) {
            templateId += kwArgs.multiple ? 'MultipleFromZEffect' : 'FromZEffect';
          } else if (amount && kwArgs.from?.startsWith('item:')) {
            const template = this.template(templateId + 'FromItem', kwArgs.from);
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              STAT: this.statValue(stat),
              ITEM: this.effect(kwArgs.from)
            });
          }
          const template = this.template(templateId, kwArgs.from);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            STAT: this.statValue(stat)
          });
        }
      case '-setboost':
        {
          const [, pokemon] = args;
          const effect = kwArgs.from;
          const line1 = this.maybeAbility(effect, kwArgs.of || pokemon);
          const template = this.template('boost', effect);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-swapboost':
        {
          const [, pokemon, target] = args;
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          const id = BattleTextParser.effectId(kwArgs.from);
          let templateId = 'swapBoost';
          if (id === 'guardswap') templateId = 'swapDefensiveBoost';
          if (id === 'powerswap') templateId = 'swapOffensiveBoost';
          const template = this.template(templateId, kwArgs.from);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            TARGET: this.pokemon(target)
          });
        }
      case '-copyboost':
        {
          const [, pokemon, target] = args;
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          const template = this.template('copyBoost', kwArgs.from);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            TARGET: this.pokemon(target)
          });
        }
      case '-clearboost':
      case '-clearpositiveboost':
      case '-clearnegativeboost':
        {
          const [, pokemon, source] = args;
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          let templateId = 'clearBoost';
          if (kwArgs.zeffect) templateId = 'clearBoostFromZEffect';
          const template = this.template(templateId, kwArgs.from);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            SOURCE: this.pokemon(source)
          });
        }
      case '-invertboost':
        {
          const [, pokemon] = args;
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          const template = this.template('invertBoost', kwArgs.from);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-clearallboost':
        {
          return this.template('clearAllBoost', kwArgs.from);
        }
      case '-crit':
      case '-supereffective':
      case '-resisted':
        {
          const [, pokemon, effectiveness] = args;
          let templateId = cmd.slice(1);
          if (templateId === 'supereffective') templateId = 'superEffective';
          if (effectiveness === '2') {
            if (templateId === 'superEffective') templateId = 'extremelyEffective';
            if (templateId === 'resisted') templateId = 'mostlyIneffective';
          }
          if (kwArgs.spread) templateId += 'Spread';
          const template = this.template(templateId);
          return this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-block':
        {
          let [, pokemon, effect, move, attacker] = args;
          const line1 = this.maybeAbility(effect, kwArgs.of || pokemon);
          const template = this.template('block', effect);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon),
            SOURCE: this.pokemon(attacker || kwArgs.of),
            MOVE: this.moveName(move)
          });
        }
      case '-fail':
        {
          let [, pokemon, effect, stat] = args;
          let id = BattleTextParser.effectId(effect);
          let blocker = BattleTextParser.effectId(kwArgs.from);
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          let templateId = 'block';
          if (['desolateland', 'primordialsea'].includes(blocker) && !['sunnyday', 'raindance', 'sandstorm', 'hail', 'snowscape', 'chillyreception'].includes(id)) {
            templateId = 'blockMove';
          } else if (blocker === 'uproar' && kwArgs.msg) {
            templateId = 'blockSelf';
          }
          let template = this.template(templateId, kwArgs.from);
          if (template) {
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon)
            });
          }
          if (id === 'unboost') {
            template = this.template('fail', 'unboost');
            return line1 + this.render(template, {
              POKEMON: this.pokemon(pokemon),
              STAT: this.statValue(stat)
            });
          }
          templateId = 'fail';
          if (['brn', 'frz', 'par', 'psn', 'slp', 'substitute', 'shedtail'].includes(id)) {
            templateId = 'alreadyStarted';
          }
          if (kwArgs.heavy) templateId = 'failTooHeavy';
          if (kwArgs.weak) templateId = 'fail';
          if (kwArgs.forme) templateId = 'failWrongForme';
          template = this.template(templateId, id);
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-immune':
        {
          const [, pokemon] = args;
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          let template = this.template('block', kwArgs.from);
          if (!template) {
            const templateId = kwArgs.ohko ? 'immuneOHKO' : 'immune';
            template = this.template(pokemon ? templateId : 'immuneNoPokemon', kwArgs.from);
          }
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-miss':
        {
          const [, source, pokemon] = args;
          const line1 = this.maybeAbility(kwArgs.from, kwArgs.of || pokemon);
          if (!pokemon) {
            const template = this.template('missNoPokemon');
            return line1 + this.render(template, {
              SOURCE: this.pokemon(source)
            });
          }
          const template = this.template('miss');
          return line1 + this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-center':
      case '-ohko':
      case '-combine':
        {
          return this.template(cmd.slice(1));
        }
      case '-notarget':
        {
          return this.template('noTarget');
        }
      case '-mega':
      case '-primal':
        {
          const [, pokemon, species, item] = args;
          let id = '';
          let templateId = cmd.slice(1);
          if (species === 'Rayquaza') {
            id = 'dragonascent';
            templateId = 'megaNoItem';
          }
          if (!item && cmd === '-mega') templateId = 'megaNoItem';
          let template = this.template(templateId, id);
          const side = pokemon.slice(0, 2);
          const pokemonName = this.pokemon(pokemon);
          if (cmd === '-mega') {
            template += this.template('transformMega');
          }
          return this.render(template, {
            POKEMON: pokemonName,
            SPECIES: this.speciesName(species),
            ITEM: this.itemValue(item),
            TRAINER: this.trainer(side)
          });
        }
      case '-terastallize':
        {
          const [, pokemon, type] = args;
          let id = '';
          let templateId = cmd.slice(1);
          let template = this.template(templateId, id);
          const pokemonName = this.pokemon(pokemon);
          return this.render(template, {
            POKEMON: pokemonName,
            TYPE: type
          });
        }
      case '-zpower':
        {
          const [, pokemon] = args;
          const template = this.template('zPower');
          return this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-burst':
        {
          const [, pokemon] = args;
          const template = this.template('activate', "Ultranecrozium Z");
          return this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-zbroken':
        {
          const [, pokemon] = args;
          const template = this.template('zBroken');
          return this.render(template, {
            POKEMON: this.pokemon(pokemon)
          });
        }
      case '-hitcount':
        {
          const [,, num] = args;
          return this.render(this.template('hitCount'), {
            NUMBER: {
              value: num,
              category: num === '1' ? 's' : 'p'
            }
          });
        }
      case '-waiting':
        {
          const [, pokemon, target] = args;
          const template = this.template('activate', "Water Pledge");
          return this.render(template, {
            POKEMON: this.pokemon(pokemon),
            TARGET: this.pokemon(target)
          });
        }
      case '-anim':
        {
          return '';
        }
      default:
        {
          return null;
        }
    }
  }
}
if (typeof require === 'function') {
  // in Node
  global.BattleTextParser = BattleTextParser;
}
class BattleSceneStub {
  animating = false;
  acceleration = NaN;
  gen = NaN;
  activeCount = NaN;
  numericId = NaN;
  timeOffset = NaN;
  interruptionCount = NaN;
  messagebarOpen = false;
  log = {
    add: (args, kwargs) => {}
  };
  $frame;
  abilityActivateAnim(pokemon, result) {}
  addPokemonSprite(pokemon) {
    return null;
  }
  addSideCondition(siden, id, instant) {}
  animationOff() {}
  animationOn() {}
  maybeCloseMessagebar(args, kwArgs) {
    return false;
  }
  closeMessagebar() {
    return false;
  }
  damageAnim(pokemon, damage) {}
  destroy() {}
  finishAnimations() {
    return undefined;
  }
  healAnim(pokemon, damage) {}
  hideJoinButtons() {}
  incrementTurn() {}
  updateAcceleration() {}
  message(message, hiddenMessage) {}
  pause() {}
  setMute(muted) {}
  preemptCatchup() {}
  removeSideCondition(siden, id) {}
  reset() {}
  resetBgm() {}
  updateBgm() {}
  resultAnim(pokemon, result, type) {}
  typeAnim(pokemon, types) {}
  resume() {}
  runMoveAnim(moveid, participants) {}
  runOtherAnim(moveid, participants) {}
  runPrepareAnim(moveid, attacker, defender) {}
  runResidualAnim(moveid, pokemon) {}
  runStatusAnim(moveid, participants) {}
  startAnimations() {}
  teamPreview() {}
  resetSides() {}
  updateGen() {}
  updateSidebar(side) {}
  updateSidebars() {}
  updateStatbars() {}
  updateWeather(instant) {}
  upkeepWeather() {}
  wait(time) {}
  setFrameHTML(html) {}
  setControlsHTML(html) {}
  removeEffect(pokemon, id, instant) {}
  addEffect(pokemon, id, instant) {}
  animSummon(pokemon, slot, instant) {}
  animUnsummon(pokemon, instant) {}
  animDragIn(pokemon, slot) {}
  animDragOut(pokemon) {}
  resetStatbar(pokemon, startHidden) {}
  updateStatbar(pokemon, updatePrevhp, updateHp) {}
  updateStatbarIfExists(pokemon, updatePrevhp, updateHp) {}
  animTransform(pokemon, useSpeciesAnim, isPermanent) {}
  clearEffects(pokemon) {}
  removeTransform(pokemon) {}
  animFaint(pokemon) {}
  animReset(pokemon) {}
  anim(pokemon, end, transition) {}
  beforeMove(pokemon) {}
  afterMove(pokemon) {}
}
if (typeof require === 'function') {
  // in Node
  global.BattleSceneStub = BattleSceneStub;
}
/**
 * Pokemon Showdown Battle Animations
 *
 * There are the specific resource files and scripts for misc animations
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

/*

Most of this file is: CC0 (public domain)
  <http://creativecommons.org/publicdomain/zero/1.0/>

This license DOES extend to all images in the fx/ folder, with the exception of icicle.png, lightning.png, and bone.png.

icicle.png and lightning.png by Clint Bellanger are triple-licensed GPLv2/GPLv3/CC-BY-SA-3.0.
  <http://opengameart.org/content/icicle-spell>
  <http://opengameart.org/content/lightning-shock-spell>

rocks.png, rock1.png, rock2.png by PO user "Gilad" is licensed GPLv3.

This license DOES NOT extend to any images in the sprites/ folder.

This license DOES NOT extend to any other files in this repository.

*/

class BattleScene {
  battle;
  animating = true;
  acceleration = 1;

  /** Note: Not the actual generation of the battle, but the gen of the sprites/background */
  gen = 7;
  mod = '';
  /** 1 = singles, 2 = doubles, 3 = triples */
  activeCount = 1;
  numericId = 0;
  $frame;
  $battle = null;
  $options = null;
  log;
  $terrain = null;
  $weather = null;
  $bgEffect = null;
  $bg = null;
  $sprite = null;
  $sprites = [null, null];
  $spritesFront = [null, null];
  $stat = null;
  $fx = null;
  $leftbar = null;
  $rightbar = null;
  $turn = null;
  $messagebar = null;
  $delay = null;
  $hiddenMessage = null;
  $tooltips = null;
  tooltips;
  sideConditions = [{}, {}];
  preloadDone = 0;
  preloadNeeded = 0;
  bgm = null;
  backdropImage = '';
  bgmNum = 0;
  preloadCache = {};
  messagebarOpen = false;
  customControls = false;
  interruptionCount = 1;
  curWeather = '';
  curTerrain = '';

  // Animation state
  ////////////////////////////////////

  timeOffset = 0;
  pokemonTimeOffset = 0;
  minDelay = 0;
  /** jQuery objects that need to finish animating */
  activeAnimations = $();
  constructor(battle, $frame, $logFrame) {
    this.battle = battle;
    $frame.addClass('battle');
    this.$frame = $frame;
    this.log = new BattleLog($logFrame[0], this);
    this.log.battleParser.pokemonName = pokemonId => {
      if (!pokemonId) return '';
      if (battle.ignoreNicks || battle.ignoreOpponent) {
        const pokemon = battle.getPokemon(pokemonId);
        if (pokemon) return pokemon.speciesForme;
      }
      if (!pokemonId.startsWith('p')) return '???pokemon:' + pokemonId + '???';
      if (pokemonId.charAt(3) === ':') return BattleTextParser.escapeReplace(pokemonId.slice(4).trim());else if (pokemonId.charAt(2) === ':') return BattleTextParser.escapeReplace(pokemonId.slice(3).trim());
      return '???pokemon:' + pokemonId + '???';
    };
    let numericId = 0;
    if (battle.id) {
      numericId = parseInt(battle.id.slice(battle.id.lastIndexOf('-') + 1), 10);
      if (this.battle.id.includes('digimon')) this.mod = 'digimon';
    }
    if (!numericId) {
      numericId = Math.floor(Math.random() * 1000000);
    }
    this.numericId = numericId;
    this.tooltips = new BattleTooltips(battle);
    this.tooltips.listen($frame[0]);
    this.preloadEffects();
    // reset() is called during battle initialization, so it doesn't need to be called here
  }
  reset() {
    this.updateGen();

    // Log frame
    /////////////

    if (this.$options) {
      this.log.reset();
    } else {
      this.$options = $('<div class="battle-options"></div>');
      $(this.log.elem).prepend(this.$options);
    }

    // Battle frame
    ///////////////

    this.$frame.empty();
    this.$battle = $('<div class="innerbattle"></div>');
    this.$frame.append(this.$battle);
    this.$bg = $('<div class="backdrop" style="background-image:url(' + Dex.resourcePrefix + this.backdropImage + ');display:block;opacity:0.8"></div>');
    this.$terrain = $('<div class="weather"></div>');
    this.$weather = $('<div class="weather"></div>');
    this.$bgEffect = $('<div></div>');
    this.$sprite = $('<div></div>');
    this.$sprites = [$('<div></div>'), $('<div></div>')];
    this.$spritesFront = [$('<div></div>'), $('<div></div>')];
    this.sideConditions = [{}, {}];
    this.$sprite.append(this.$sprites[1]);
    this.$sprite.append(this.$spritesFront[1]);
    this.$sprite.append(this.$spritesFront[0]);
    this.$sprite.append(this.$sprites[0]);
    this.$stat = $(eHTML`<div role="complementary" aria-label="${TL`Active Pokémon`}"></div>`);
    this.$fx = $('<div></div>');
    this.$leftbar = $(eHTML`<div class="leftbar" role="complementary" aria-label="${TL`Your team`}"></div>`);
    this.$rightbar = $(eHTML`<div class="rightbar" role="complementary" aria-label="${TL`Opponent's team`}"></div>`);
    this.$turn = $('<div></div>');
    this.$messagebar = $('<div class="messagebar message"></div>');
    this.$delay = $('<div></div>');
    this.$hiddenMessage = $('<div class="message" style="position:absolute;display:block;visibility:hidden"></div>');
    this.$tooltips = $('<div class="tooltips"></div>');
    this.$battle.append(this.$bg);
    this.$battle.append(this.$terrain);
    this.$battle.append(this.$weather);
    this.$battle.append(this.$bgEffect);
    this.$battle.append(this.$sprite);
    this.$battle.append(this.$stat);
    this.$battle.append(this.$fx);
    this.$battle.append(this.$leftbar);
    this.$battle.append(this.$rightbar);
    this.$battle.append(this.$turn);
    this.$battle.append(this.$messagebar);
    this.$battle.append(this.$delay);
    this.$battle.append(this.$hiddenMessage);
    this.$battle.append(this.$tooltips);
    if (!this.animating) {
      this.$battle.append('<div class="seeking"><strong>seeking...</strong></div>');
    }
    this.messagebarOpen = false;
    this.timeOffset = 0;
    this.pokemonTimeOffset = 0;
    this.curTerrain = '';
    this.curWeather = '';
    this.log.battleParser.perspective = this.battle.mySide.sideid;
    this.resetSides(true);
  }
  animationOff() {
    this.$battle.append('<div class="seeking"><strong>seeking...</strong></div>');
    this.$frame.find('div.playbutton').remove();
    this.stopAnimation();
    this.animating = false;
    this.$messagebar.empty().css({
      opacity: 0,
      height: 0
    });
  }
  stopAnimation() {
    this.interruptionCount++;
    this.$battle.find(':animated').finish();
    this.$fx.empty();
  }
  animationOn() {
    if (this.animating) return;
    $.fx.off = false;
    this.animating = true;
    this.$battle.find('.seeking').remove();
    this.updateSidebars();
    for (const side of this.battle.sides) {
      for (const pokemon of side.pokemon) {
        pokemon.sprite.reset(pokemon);
      }
    }
    this.updateWeather(true);
    this.resetTurn();
    this.resetSideConditions();
  }
  pause() {
    this.stopAnimation();
    this.updateBgm();
    if (!this.battle.started) {
      this.$frame.append('<div class="playbutton"><button name="play" class="button"><i class="fa fa-play" aria-hidden="true"></i> Play</button><br /><br /><button name="play-muted" class="startsoundchooser button" style="font-size:10pt">Play (sound off)</button></div>');
      this.$frame.find('div.playbutton button[name=play-muted]').click(() => {
        this.setMute(true);
        this.battle.play();
      });
    }
    this.$frame.find('div.playbutton button[name=play]').click(() => this.battle.play());
  }
  resume() {
    this.$frame.find('div.playbutton').remove();
    this.updateBgm();
  }
  setMute(muted) {
    BattleSound.setMute(muted);
  }
  wait(time) {
    if (!this.animating) return;
    this.timeOffset += time;
  }

  // Sprite handling
  /////////////////////////////////////////////////////////////////////

  addSprite(sprite) {
    if (sprite.$el) this.$sprites[+sprite.isFrontSprite].append(sprite.$el);
  }
  showEffect(effect, start, end, transition, after, additionalCss) {
    if (typeof effect === 'string') effect = BattleEffects[effect];
    let $effect = $(`<img src="${effect.url}" style="display:block;position:absolute" />`);
    this.$fx.append($effect);
    if (additionalCss) $effect.css(additionalCss);
    $effect = this.$fx.children().last();
    return this.animateEffect($effect, effect, start, end, transition, after);
  }
  animateEffect($effect, effect, start, end, transition, after, additionalCss) {
    if (typeof effect === 'string') effect = BattleEffects[effect];
    if (!start.time) start.time = 0;
    if (!end.time) end.time = start.time + 500;
    start.time += this.timeOffset;
    end.time += this.timeOffset;
    if (!end.scale && end.scale !== 0 && start.scale) end.scale = start.scale;
    if (!end.xscale && end.xscale !== 0 && start.xscale) end.xscale = start.xscale;
    if (!end.yscale && end.yscale !== 0 && start.yscale) end.yscale = start.yscale;
    end = {
      ...start,
      ...end
    };
    let startpos = this.pos(start, effect);
    let endpos = this.posT(end, effect, transition, start);
    if (start.time) {
      $effect.css({
        ...startpos,
        opacity: 0
      });
      $effect.delay(start.time).animate({
        opacity: startpos.opacity
      }, 1);
    } else if ($effect.queue().length) {
      $effect.animate(startpos, 0);
    } else {
      $effect.css(startpos);
    }
    $effect.animate(endpos, end.time - start.time);
    if (after === 'fade') {
      $effect.animate({
        opacity: 0
      }, 100);
    }
    if (after === 'explode') {
      if (end.scale) end.scale *= 3;
      if (end.xscale) end.xscale *= 3;
      if (end.yscale) end.yscale *= 3;
      end.opacity = 0;
      let endendpos = this.pos(end, effect);
      $effect.animate(endendpos, 200);
    }
    this.waitFor($effect);
    return $effect;
  }
  backgroundEffect(bg, duration, opacity = 1, delay = 0) {
    let $effect = $('<div class="background"></div>');
    $effect.css({
      background: bg,
      display: 'block',
      opacity: 0
    });
    this.$bgEffect.append($effect);
    $effect.delay(delay).animate({
      opacity
    }, 250).delay(duration - 250);
    $effect.animate({
      opacity: 0
    }, 250);
  }

  /**
   * Converts a PS location (x, y, z, scale, xscale, yscale, opacity)
   * to a jQuery position (top, left, width, height, opacity) suitable
   * for passing into `jQuery#css` or `jQuery#animate`.
   * The display property is passed through if it exists.
   */
  pos(loc, obj) {
    loc = {
      x: 0,
      y: 0,
      z: 0,
      scale: 1,
      opacity: 1,
      ...loc
    };
    if (!loc.xscale && loc.xscale !== 0) loc.xscale = loc.scale;
    if (!loc.yscale && loc.yscale !== 0) loc.yscale = loc.scale;
    let left = 210;
    let top = 245;
    let scale = obj.gen === 5 ? 2.0 - loc.z / 200 : 1.5 - 0.5 * (loc.z / 200);
    if (scale < 0.1) scale = 0.1;
    left += (410 - 190) * (loc.z / 200);
    top += (135 - 245) * (loc.z / 200);
    left += Math.floor(loc.x * scale);
    top -= Math.floor(loc.y * scale /* - loc.x * scale / 4 */);
    let width = Math.floor(obj.w * scale * loc.xscale);
    let height = Math.floor(obj.h * scale * loc.yscale);
    let hoffset = Math.floor((obj.h - (obj.y || 0) * 2) * scale * loc.yscale);
    left -= Math.floor(width / 2);
    top -= Math.floor(hoffset / 2);
    let pos = {
      left,
      top,
      width,
      height,
      opacity: loc.opacity
    };
    if (loc.display) pos.display = loc.display;
    return pos;
  }
  /**
   * Converts a PS location to a jQuery transition map (see `pos`)
   * suitable for passing into `jQuery#animate`.
   * oldLoc is required for ballistic (jumping) animations.
   */
  posT(loc, obj, transition, oldLoc) {
    const pos = this.pos(loc, obj);
    const oldPos = oldLoc ? this.pos(oldLoc, obj) : null;
    let transitionMap = {
      left: 'linear',
      top: 'linear',
      width: 'linear',
      height: 'linear',
      opacity: 'linear'
    };
    if (transition === 'ballistic') {
      transitionMap.top = pos.top < oldPos.top ? 'ballisticUp' : 'ballisticDown';
    }
    if (transition === 'ballisticUnder') {
      transitionMap.top = pos.top < oldPos.top ? 'ballisticDown' : 'ballisticUp';
    }
    if (transition === 'ballistic2') {
      transitionMap.top = pos.top < oldPos.top ? 'quadUp' : 'quadDown';
    }
    if (transition === 'ballistic2Back') {
      // This _should_ be the same as ballistic2.
      // Unfortunately, oldLoc is the original loc, rather than the
      // previous loc, so when you're "going back", loc === oldLoc, and
      // the direction has to instead be inferred from the destination.
      transitionMap.top = loc.z > 0 ? 'quadUp' : 'quadDown';
    }
    if (transition === 'ballistic2Under') {
      transitionMap.top = pos.top < oldPos.top ? 'quadDown' : 'quadUp';
    }
    if (transition === 'swing') {
      transitionMap.left = 'swing';
      transitionMap.top = 'swing';
      transitionMap.width = 'swing';
      transitionMap.height = 'swing';
    }
    if (transition === 'accel') {
      transitionMap.left = 'quadDown';
      transitionMap.top = 'quadDown';
      transitionMap.width = 'quadDown';
      transitionMap.height = 'quadDown';
    }
    if (transition === 'decel') {
      transitionMap.left = 'quadUp';
      transitionMap.top = 'quadUp';
      transitionMap.width = 'quadUp';
      transitionMap.height = 'quadUp';
    }
    return {
      left: [pos.left, transitionMap.left],
      top: [pos.top, transitionMap.top],
      width: [pos.width, transitionMap.width],
      height: [pos.height, transitionMap.height],
      opacity: [pos.opacity, transitionMap.opacity]
    };
  }
  waitFor(elem) {
    this.activeAnimations = this.activeAnimations.add(elem);
  }
  startAnimations() {
    this.$fx.empty();
    this.activeAnimations = $();
    this.timeOffset = 0;
    this.minDelay = 0;
  }
  finishAnimations() {
    if (this.minDelay || this.timeOffset) {
      this.$delay.delay(Math.max(this.minDelay, this.timeOffset));
      this.activeAnimations = this.activeAnimations.add(this.$delay);
    }
    if (!this.activeAnimations.length) return undefined;
    return this.activeAnimations.promise();
  }

  // Messagebar and log
  /////////////////////////////////////////////////////////////////////

  preemptCatchup() {
    this.log.preemptCatchup();
  }
  message(message) {
    if (!this.messagebarOpen) {
      this.log.addSpacer();
      if (this.animating) {
        this.$messagebar.empty();
        this.$messagebar.css({
          display: 'block',
          opacity: 0,
          height: 'auto'
        });
        this.$messagebar.animate({
          opacity: 1
        }, this.battle.messageFadeTime / this.acceleration);
      }
    }
    if (this.battle.hardcoreMode && message.startsWith('<small>(')) {
      message = '';
    }
    if (message && this.animating) {
      this.$hiddenMessage.append('<p></p>');
      let $message = this.$hiddenMessage.children().last();
      $message.html(message);
      $message.css({
        display: 'block',
        opacity: 0
      });
      $message.animate({
        height: 'hide'
      }, 1, () => {
        $message.appendTo(this.$messagebar);
        $message.animate({
          height: 'show',
          'padding-bottom': 4,
          opacity: 1
        }, this.battle.messageFadeTime / this.acceleration);
      });
      this.waitFor($message);
    }
    this.messagebarOpen = true;
  }
  maybeCloseMessagebar(args, kwArgs) {
    if (this.log.battleParser.sectionBreak(args, kwArgs)) {
      if (!this.messagebarOpen) return false;
      this.closeMessagebar();
      return true;
    }
    return false;
  }
  closeMessagebar() {
    if (this.messagebarOpen) {
      this.messagebarOpen = false;
      if (this.animating) {
        this.$messagebar.delay(this.battle.messageShownTime / this.acceleration).animate({
          opacity: 0
        }, this.battle.messageFadeTime / this.acceleration);
        this.waitFor(this.$messagebar);
      }
      return true;
    }
    return false;
  }

  // General updating
  /////////////////////////////////////////////////////////////////////

  runMoveAnim(moveid, participants) {
    if (!this.animating) return;
    let animEntry = BattleMoveAnims[moveid];
    if (this.acceleration >= 3) {
      const targetsSelf = !participants[1] || participants[0] === participants[1];
      const isSpecial = !targetsSelf && this.battle.dex.moves.get(moveid).category === 'Special';
      animEntry = BattleOtherAnims[targetsSelf ? 'fastanimself' : isSpecial ? 'fastanimspecial' : 'fastanimattack'];
    } else if (!animEntry) {
      animEntry = BattleMoveAnims['tackle'];
    }
    animEntry.anim(this, participants.map(p => p.sprite));
  }
  runOtherAnim(moveid, participants) {
    if (!this.animating) return;
    BattleOtherAnims[moveid].anim(this, participants.map(p => p.sprite));
  }
  runStatusAnim(moveid, participants) {
    if (!this.animating) return;
    BattleStatusAnims[moveid].anim(this, participants.map(p => p.sprite));
  }
  runResidualAnim(moveid, pokemon) {
    if (!this.animating) return;
    BattleMoveAnims[moveid].residualAnim(this, [pokemon.sprite]);
  }
  runPrepareAnim(moveid, attacker, defender) {
    if (!this.animating || this.acceleration >= 3) return;
    const moveAnim = BattleMoveAnims[moveid];
    if (!moveAnim.prepareAnim) return;
    moveAnim.prepareAnim(this, [attacker.sprite, defender.sprite]);
  }
  updateGen() {
    let gen = this.battle.gen;
    if (Dex.prefs('nopastgens')) gen = 6;
    if (Dex.prefs('bwgfx') && gen > 5) gen = 5;
    this.gen = gen;
    this.activeCount = this.battle.nearSide?.active.length || 1;
    const rated = this.battle.rated;
    let bg;
    if (typeof rated === 'string' && rated.startsWith("Smogon Premier League")) {
      if (gen <= 1) bg = 'fx/bg-gen1-spl.png';else if (gen <= 2) bg = 'fx/bg-gen2-spl.png';else if (gen <= 3) bg = 'fx/bg-gen3-spl.png';else if (gen <= 4) bg = 'fx/bg-gen4-spl.png';else bg = 'fx/bg-spl.png';
      this.setBgm(-101);
    } else if (typeof rated === 'string' && rated.startsWith('National Pokemon Association')) {
      bg = 'fx/bg-npa.png';
      this.setBgm(-101);
    } else if (typeof rated === 'string' && rated.startsWith('World Cup of Pokemon')) {
      bg = 'fx/bg-wcop.png';
      this.setBgm(-101);
    } else if (typeof rated === 'string' && rated.startsWith('Smogon Champions League')) {
      bg = 'fx/bg-scl.png';
      this.setBgm(-101);
    } else {
      if (gen <= 1) bg = 'fx/bg-gen1.png?';else if (gen <= 2) bg = 'fx/bg-gen2.png?';else if (gen <= 3) bg = `fx/${BattleBackdropsThree[this.numericId % BattleBackdropsThree.length]}?`;else if (gen <= 4) bg = `fx/${BattleBackdropsFour[this.numericId % BattleBackdropsFour.length]}`;else if (gen <= 5) bg = `fx/${BattleBackdropsFive[this.numericId % BattleBackdropsFive.length]}`;else bg = `sprites/gen6bgs/${BattleBackdrops[this.numericId % BattleBackdrops.length]}`;
    }
    this.backdropImage = bg;
    if (this.$bg) {
      this.$bg.css('background-image', `url(${Dex.resourcePrefix}${this.backdropImage})`);
    }
  }
  getDetailsText(pokemon) {
    let name = pokemon.side?.isFar && (this.battle.ignoreOpponent || this.battle.ignoreNicks) ? pokemon.speciesForme : pokemon.name;
    if (name !== pokemon.speciesForme) {
      name += ' (' + pokemon.speciesForme + ')';
    }
    if (pokemon === pokemon.side.active[0]) {
      name += ' (active)';
    } else if (pokemon.fainted) {
      name += ' (fainted)';
    } else {
      let statustext = '';
      if (pokemon.hp !== pokemon.maxhp) {
        statustext += pokemon.getHPText();
      }
      if (pokemon.status) {
        if (statustext) statustext += '|';
        statustext += pokemon.status;
      }
      if (statustext) {
        name += ' (' + statustext + ')';
      }
    }
    return BattleLog.escapeHTML(name);
  }
  getSidebarHTML(side, posStr) {
    let noShow = this.battle.hardcoreMode && this.battle.gen < 7;
    let speciesOverage = this.battle.speciesClause ? Infinity : Math.max(side.pokemon.length - side.totalPokemon, 0);
    const sidebarIcons = [];
    const speciesTable = [];
    let zoroarkRevealed = false;
    let hasIllusion = false;
    if (speciesOverage) {
      for (let i = 0; i < side.pokemon.length; i++) {
        const species = side.pokemon[i].getBaseSpecies().baseSpecies;
        if (speciesOverage && speciesTable.includes(species)) {
          for (const sidebarIcon of sidebarIcons) {
            if (side.pokemon[sidebarIcon[1]].getBaseSpecies().baseSpecies === species) {
              sidebarIcon[0] = 'pokemon-illusion';
            }
          }
          hasIllusion = true;
          speciesOverage--;
        } else {
          sidebarIcons.push(['pokemon', i]);
          speciesTable.push(species);
          if (['Zoroark', 'Zorua'].includes(species)) {
            zoroarkRevealed = true;
          }
        }
      }
    } else {
      for (let i = 0; i < side.pokemon.length; i++) {
        sidebarIcons.push(['pokemon', i]);
      }
    }
    if (!zoroarkRevealed && hasIllusion && sidebarIcons.length < side.totalPokemon) {
      sidebarIcons.push(['pseudo-zoroark', null]);
    }
    while (sidebarIcons.length < side.totalPokemon) {
      sidebarIcons.push(['unrevealed', null]);
    }
    while (sidebarIcons.length < 6) {
      sidebarIcons.push(['empty', null]);
    }
    let pokemonhtml = '';
    for (let i = 0; i < sidebarIcons.length; i++) {
      const [iconType, pokeIndex] = sidebarIcons[i];
      const poke = pokeIndex !== null ? side.pokemon[pokeIndex] : null;
      const tooltipCode = ` class="picon has-tooltip" data-tooltip="pokemon|${side.n}|${pokeIndex}${iconType === 'pokemon-illusion' ? '|illusion' : ''}"`;
      if (iconType === 'empty') {
        pokemonhtml += `<span class="picon" style="${Dex.getPokemonIcon('pokeball-none')}"></span>`;
      } else if (noShow) {
        if (poke?.fainted) {
          pokemonhtml += `<span${tooltipCode} style="${Dex.getPokemonIcon('pokeball-fainted')}" aria-label="${BattleLog.escapeHTML(TL.status.fnt || 'Fainted')}"></span>`;
        } else if (poke?.status) {
          pokemonhtml += `<span${tooltipCode} style="${Dex.getPokemonIcon('pokeball-statused')}" aria-label="${BattleLog.escapeHTML(TL`Statused`)}"></span>`;
        } else {
          pokemonhtml += `<span${tooltipCode} style="${Dex.getPokemonIcon('pokeball')}" aria-label="${BattleLog.escapeHTML(TL`Non-statused`)}"></span>`;
        }
      } else if (iconType === 'pseudo-zoroark') {
        const unrevealedIllusion = BattleLog.escapeHTML(TL`Unrevealed Illusion user`);
        pokemonhtml += `<span class="picon" style="${Dex.getPokemonIcon('zoroark')}" title="${unrevealedIllusion}" aria-label="${unrevealedIllusion}"></span>`;
      } else if (!poke) {
        const notRevealed = BattleLog.escapeHTML(TL`Not revealed`);
        pokemonhtml += `<span class="picon" style="${Dex.getPokemonIcon('pokeball')}" title="${notRevealed}" aria-label="${notRevealed}"></span>`;
      } else if (!poke.ident && this.battle.teamPreviewCount && this.battle.teamPreviewCount < side.pokemon.length) {
        // in VGC (bring 6 pick 4) and other pick-less-than-you-bring formats, this is
        // a pokemon that's been brought but not necessarily picked
        const details = this.getDetailsText(poke);
        pokemonhtml += `<span${tooltipCode} style="${Dex.getPokemonIcon(poke, !side.isFar)};opacity:0.6" aria-label="${details}"></span>`;
      } else {
        const details = this.getDetailsText(poke);
        pokemonhtml += `<span${tooltipCode} style="${Dex.getPokemonIcon(poke, !side.isFar)}" aria-label="${details}"></span>`;
      }
      if (i % 3 === 2) pokemonhtml += `</div><div class="teamicons">`;
    }
    pokemonhtml = '<div class="teamicons">' + pokemonhtml + '</div>';
    const ratinghtml = side.rating ? ` title="Rating: ${BattleLog.escapeHTML(side.rating)}"` : ``;
    const faded = side.name ? `` : ` style="opacity: 0.4"`;
    let badgehtml = '';
    if (side.badges.length) {
      badgehtml = '<span class="badges">';
      // hard limiting it to only ever 3 allowed at a time
      // that's what the server limit is anyway but there should be a client limit too
      // just in case
      for (const badgeData of side.badges.slice(0, 3)) {
        // ${badge.type}|${badge.format}|${BADGE_THRESHOLDS[badge.type]}-${badge.season}
        const [type = '', format = '', details = ''] = badgeData.split('|');
        const badgeType = toID(type);
        // todo, maybe make this more easily configured if we ever add badges for other stuff?
        // but idk that we're planning that for now so
        const [threshold] = details.split('-');
        const hover = BattleLog.escapeHTML(`User is Top ${threshold} on the ${format} Ladder`);
        // ou and randbats get diff badges from everyone else, find it
        // (regex futureproofs for double digit gens)
        let formatType = format.split(/gen\d+/)[1] || 'none';
        if (!['ou', 'randombattle'].includes(formatType)) {
          formatType = 'rotating';
        }
        badgehtml += `<img src="${Dex.resourcePrefix}/sprites/misc/${formatType}_${badgeType}.png" style="padding: 0px 1px 0px 1px" width="16px" height="16px" title="${hover}" />`;
      }
      badgehtml += '</span>';
    }
    let avatar = Dex.resolveAvatar(side.avatar);
    let noflip = '';
    if (posStr.startsWith('near')) {
      if (avatar.includes('unknown.png')) {
        avatar = avatar.replace('unknown.png', 'unknown-flipped.png');
        noflip = ' noflip';
      } else if (avatar.includes('unknownf.png')) {
        avatar = avatar.replace('unknownf.png', 'unknownf-flipped.png');
        noflip = ' noflip';
      }
    }
    return `<div class="trainer trainer-${posStr}"${faded}><strong>${BattleLog.escapeHTML(side.name)}</strong>` + `<div class="trainersprite${noflip}"${ratinghtml} style="background-image:url(${avatar})">` + `</div>${badgehtml}${pokemonhtml}</div>`;
  }
  updateSidebar(side) {
    if (this.battle.gameType === 'freeforall') {
      this.updateLeftSidebar();
      this.updateRightSidebar();
    } else if (side === this.battle.nearSide || side === this.battle.nearSide.ally) {
      this.updateLeftSidebar();
    } else {
      this.updateRightSidebar();
    }
  }
  updateLeftSidebar() {
    const side = this.battle.nearSide;
    if (side.ally) {
      const side2 = side.ally;
      this.$leftbar.html(this.getSidebarHTML(side, 'near2') + this.getSidebarHTML(side2, 'near'));
    } else if (this.battle.sides.length > 2) {
      // FFA
      const side2 = this.battle.sides[side.n === 0 ? 3 : 2];
      this.$leftbar.html(this.getSidebarHTML(side2, 'near2') + this.getSidebarHTML(side, 'near'));
    } else {
      this.$leftbar.html(this.getSidebarHTML(side, 'near'));
    }
  }
  updateRightSidebar() {
    const side = this.battle.farSide;
    if (side.ally) {
      const side2 = side.ally;
      this.$rightbar.html(this.getSidebarHTML(side, 'far2') + this.getSidebarHTML(side2, 'far'));
    } else if (this.battle.sides.length > 2) {
      // FFA
      const side2 = this.battle.sides[side.n === 0 ? 3 : 2];
      this.$rightbar.html(this.getSidebarHTML(side2, 'far2') + this.getSidebarHTML(side, 'far'));
    } else {
      this.$rightbar.html(this.getSidebarHTML(side, 'far'));
    }
  }
  updateSidebars() {
    this.updateLeftSidebar();
    this.updateRightSidebar();
  }
  updateStatbars() {
    for (const side of this.battle.sides) {
      for (const active of side.active) {
        if (active) active.sprite.updateStatbar(active);
      }
    }
  }
  resetSides(skipEmpty) {
    if (!skipEmpty) {
      for (const $spritesContainer of this.$sprites) {
        $spritesContainer.empty();
      }
    }
    for (const side of this.battle.sides) {
      side.z = side.isFar ? 200 : 0;
      side.missedPokemon?.sprite?.destroy();
      side.missedPokemon = {
        sprite: new PokemonSprite(null, {
          x: side.leftof(this.battle.gameType === 'freeforall' ? -50 : -100),
          y: side.y,
          z: side.z,
          opacity: 0
        }, this, side.isFar)
      };
      side.missedPokemon.sprite.isMissedPokemon = true;
    }
    if (this.battle.sides.length > 2 && this.sideConditions.length === 2) {
      this.sideConditions.push({}, {});
    }
    this.rebuildTooltips();
  }
  rebuildTooltips() {
    let tooltipBuf = '';
    const tooltips = this.battle.gameType === 'freeforall' ? {
      // FFA battles are visually rendered as triple battle with the center slots empty
      // so we swap the 2nd and 3rd tooltips on each side
      p2b: {
        top: 70,
        left: 250,
        width: 80,
        height: 100,
        tooltip: 'activepokemon|1|1'
      },
      p2a: {
        top: 90,
        left: 390,
        width: 100,
        height: 100,
        tooltip: 'activepokemon|1|0'
      },
      p1a: {
        top: 200,
        left: 130,
        width: 120,
        height: 160,
        tooltip: 'activepokemon|0|0'
      },
      p1b: {
        top: 200,
        left: 350,
        width: 150,
        height: 160,
        tooltip: 'activepokemon|0|1'
      }
    } : {
      p2c: {
        top: 70,
        left: 250,
        width: 80,
        height: 100,
        tooltip: 'activepokemon|1|2'
      },
      p2b: {
        top: 85,
        left: 320,
        width: 90,
        height: 100,
        tooltip: 'activepokemon|1|1'
      },
      p2a: {
        top: 90,
        left: 390,
        width: 100,
        height: 100,
        tooltip: 'activepokemon|1|0'
      },
      p1a: {
        top: 200,
        left: 130,
        width: 120,
        height: 160,
        tooltip: 'activepokemon|0|0'
      },
      p1b: {
        top: 200,
        left: 250,
        width: 150,
        height: 160,
        tooltip: 'activepokemon|0|1'
      },
      p1c: {
        top: 200,
        left: 350,
        width: 150,
        height: 160,
        tooltip: 'activepokemon|0|2'
      }
    };
    for (const id in tooltips) {
      let layout = tooltips[id];
      tooltipBuf += `<div class="has-tooltip" style="position:absolute;`;
      tooltipBuf += `top:${layout.top}px;left:${layout.left}px;width:${layout.width}px;height:${layout.height}px;`;
      tooltipBuf += `" data-id="${id}" data-tooltip="${layout.tooltip}" data-ownheight="1"></div>`;
    }
    this.$tooltips.html(tooltipBuf);
  }
  teamPreview() {
    let newBGNum = 0;
    for (let siden = 0; siden < 2 || this.battle.gameType === 'multi' && siden < 4; siden++) {
      let side = this.battle.sides[siden];
      const spriteIndex = +this.battle.viewpointSwitched ^ siden % 2;
      let textBuf = '';
      let buf = '';
      let buf2 = '';
      this.$sprites[spriteIndex].empty();
      let ludicoloCount = 0;
      let lombreCount = 0;
      for (let i = 0; i < side.pokemon.length; i++) {
        let pokemon = side.pokemon[i];
        if (pokemon.speciesForme === 'Xerneas-*') {
          pokemon.speciesForme = 'Xerneas-Neutral';
        }
        if (pokemon.speciesForme === 'Ludicolo') ludicoloCount++;
        if (pokemon.speciesForme === 'Lombre') lombreCount++;
        let spriteData = Dex.getSpriteData(pokemon, !!spriteIndex, {
          gen: this.gen,
          noScale: true,
          mod: this.mod
        });
        let y = 0;
        let x = 0;
        if (spriteIndex) {
          y = 48 + 50 + 3 * (i + 6 - side.pokemon.length);
          x = 48 + 180 + 50 * (i + 6 - side.pokemon.length);
        } else {
          y = 48 + 200 + 3 * i;
          x = 48 + 100 + 50 * i;
        }
        if (textBuf) textBuf += ' / ';
        textBuf += pokemon.speciesForme;
        let url = spriteData.url;
        // if (this.paused) url.replace('/xyani', '/xy').replace('.gif', '.png');
        buf += `<img src="${url}" width="${spriteData.w}" height="${spriteData.h}" style="position:absolute;top:${Math.floor(y - spriteData.h / 2)}px;left:${Math.floor(x - spriteData.w / 2)}px" />`;
        buf2 += `<div style="position:absolute;top:${y + 45}px;left:${x - 40}px;width:80px;font-size:10px;text-align:center;color:#FFF;">`;
        const gender = pokemon.gender;
        if (gender === 'M' || gender === 'F') {
          buf2 += `<img src="${Dex.fxPrefix}gender-${gender.toLowerCase()}.png" alt="${gender}" width="7" height="10" class="pixelated" style="margin-bottom:-1px" /> `;
        }
        if (pokemon.level !== 100) {
          buf2 += `<span style="text-shadow:#000 1px 1px 0,#000 1px -1px 0,#000 -1px 1px 0,#000 -1px -1px 0"><small>L</small>${pokemon.level}</span>`;
        }
        if (pokemon.item === '(mail)') {
          buf2 += ` <img src="${Dex.resourcePrefix}fx/mail.png" width="8" height="10" alt="F" style="margin-bottom:-1px" />`;
        } else if (pokemon.item) {
          buf2 += ` <img src="${Dex.resourcePrefix}fx/item.png" width="8" height="10" alt="F" style="margin-bottom:-1px" />`;
        }
        buf2 += '</div>';
      }
      side.totalPokemon = side.pokemon.length;
      if (textBuf) {
        this.log.addDiv('chat battle-history', `<strong>${BattleLog.escapeHTML(side.name)}'s team:</strong> <em style="color:#445566;display:block;">${BattleLog.escapeHTML(textBuf)}</em>`);
      }
      this.$sprites[spriteIndex].html(buf + buf2);
      if (!newBGNum) {
        if (ludicoloCount >= 2) {
          newBGNum = -3;
        } else if (ludicoloCount + lombreCount >= 2) {
          newBGNum = -2;
        }
      }
    }
    if (newBGNum !== 0) {
      this.setBgm(newBGNum);
    }
    this.wait(1000);
    this.updateSidebars();
  }
  showJoinButtons() {
    if (!this.battle.joinButtons) return;
    if (this.battle.ended || this.battle.rated) return;
    if (!this.battle.p1.name) {
      this.$battle.append('<div class="playbutton1"><button name="joinBattle">Join Battle</button></div>');
    }
    if (!this.battle.p2.name) {
      this.$battle.append('<div class="playbutton2"><button name="joinBattle">Join Battle</button></div>');
    }
  }
  hideJoinButtons() {
    if (!this.battle.joinButtons) return;
    this.$battle.find('.playbutton1, .playbutton2').remove();
  }
  turnsLeft(min, max = 0) {
    if (max) {
      const range = TL.orList([`${min}`, `${max}`]);
      return TL`(${range} turns)`;
    }
    return min === 1 ? TL`(${min} turn)` : TL`(${min} turns)`;
  }
  pseudoWeatherLeft(pWeather) {
    let buf = `<br />${TL(Dex.moves.get(pWeather[0]))}`;
    if (!pWeather[1] && pWeather[2]) {
      pWeather[1] = pWeather[2];
      pWeather[2] = 0;
    }
    if (this.battle.gen < 7 && this.battle.hardcoreMode) return buf;
    if (pWeather[2]) {
      return `${buf} <small>${this.turnsLeft(pWeather[1], pWeather[2])}</small>`;
    }
    if (pWeather[1]) {
      return `${buf} <small>${this.turnsLeft(pWeather[1])}</small>`;
    }
    return buf; // weather not found
  }
  sideConditionLeft(cond, isFoe, all) {
    if (!cond[2] && !cond[3] && !all) return '';
    const condition = TL(Dex.moves.get(cond[0]));
    const foeCondition = TL`Foe's ${condition}`;
    let buf = `<br />${isFoe && !all ? foeCondition : condition}`;
    if (this.battle.gen < 7 && this.battle.hardcoreMode) return buf;
    if (!cond[2] && !cond[3]) return buf;
    if (!cond[2] && cond[3]) {
      cond[2] = cond[3];
      cond[3] = 0;
    }
    if (!cond[3]) {
      return `${buf} <small>${this.turnsLeft(cond[2])}</small>`;
    }
    return `${buf} <small>${this.turnsLeft(cond[2], cond[3])}</small>`;
  }
  weatherLeft() {
    if (this.battle.gen < 7 && this.battle.hardcoreMode) return '';
    let weatherhtml = ``;
    if (this.battle.weather) {
      weatherhtml = BattleTextParser.weatherName(this.battle.weather);
      if (this.battle.weatherMinTimeLeft !== 0) {
        weatherhtml += ` <small>${this.turnsLeft(this.battle.weatherMinTimeLeft, this.battle.weatherTimeLeft)}</small>`;
      } else if (this.battle.weatherTimeLeft !== 0) {
        weatherhtml += ` <small>${this.turnsLeft(this.battle.weatherTimeLeft)}</small>`;
      }
      const nullifyWeather = this.battle.abilityActive(['Air Lock', 'Cloud Nine']);
      weatherhtml = `${nullifyWeather ? '<s>' : ''}${weatherhtml}${nullifyWeather ? '</s>' : ''}`;
    }
    for (const pseudoWeather of this.battle.pseudoWeather) {
      weatherhtml += this.pseudoWeatherLeft(pseudoWeather);
    }
    return weatherhtml;
  }
  sideConditionsLeft(side, all) {
    let buf = ``;
    for (const id in side.sideConditions) {
      buf += this.sideConditionLeft(side.sideConditions[id], side.isFar, all);
    }
    return buf;
  }
  upkeepWeather() {
    const isIntense = ['desolateland', 'primordialsea', 'deltastream'].includes(this.curWeather);
    this.$weather.animate({
      opacity: 1.0
    }, 300).animate({
      opacity: isIntense ? 0.9 : 0.5
    }, 300);
  }
  updateWeather(instant) {
    if (!this.animating) return;
    let isIntense = false;
    let weather = this.battle.weather;
    if (this.battle.abilityActive(['Air Lock', 'Cloud Nine'])) {
      weather = '';
    }
    let terrain = '';
    for (const pseudoWeatherData of this.battle.pseudoWeather) {
      terrain = toID(pseudoWeatherData[0]);
    }
    if (weather === 'desolateland' || weather === 'primordialsea' || weather === 'deltastream') {
      isIntense = true;
    }
    let weatherhtml = this.weatherLeft();
    for (const side of this.battle.sides) {
      weatherhtml += this.sideConditionsLeft(side);
    }
    if (weatherhtml) weatherhtml = `<br />` + weatherhtml;
    if (instant) {
      this.$weather.html('<em>' + weatherhtml + '</em>');
      if (this.curWeather === weather && this.curTerrain === terrain) return;
      this.$terrain.attr('class', terrain ? 'weather ' + terrain + 'weather' : 'weather');
      this.curTerrain = terrain;
      this.$weather.attr('class', weather ? 'weather ' + weather + 'weather' : 'weather');
      this.$weather.css('opacity', isIntense || !weather ? 0.9 : 0.5);
      this.curWeather = weather;
      return;
    }
    if (weather !== this.curWeather) {
      this.$weather.animate({
        opacity: 0
      }, this.curWeather ? 300 : 100, () => {
        this.$weather.html('<em>' + weatherhtml + '</em>');
        this.$weather.attr('class', weather ? 'weather ' + weather + 'weather' : 'weather');
        this.$weather.animate({
          opacity: isIntense || !weather ? 0.9 : 0.5
        }, 300);
      });
      this.curWeather = weather;
    } else {
      this.$weather.html('<em>' + weatherhtml + '</em>');
    }
    if (terrain !== this.curTerrain) {
      this.$terrain.animate({
        top: 360,
        opacity: 0
      }, this.curTerrain ? 400 : 1, () => {
        this.$terrain.attr('class', terrain ? 'weather ' + terrain + 'weather' : 'weather');
        this.$terrain.animate({
          top: 0,
          opacity: 1
        }, 400);
      });
      this.curTerrain = terrain;
    }
  }
  resetTurn() {
    if (this.battle.turn <= 0) {
      this.$turn.html('');
      return;
    }
    const turnText = BattleLog.escapeHTML(this.log.turnText(`${this.battle.turn}`));
    this.$turn.html(`<div class="turn has-tooltip" data-tooltip="field" data-ownheight="1">${turnText}</div>`);
  }
  incrementTurn() {
    if (!this.animating) return;
    const turn = this.battle.turn;
    if (turn <= 0) return;
    const $prevTurn = this.$turn.children();
    const turnText = BattleLog.escapeHTML(this.log.turnText(`${turn}`));
    const $newTurn = $(`<div class="turn has-tooltip" data-tooltip="field" data-ownheight="1">${turnText}</div>`);
    $newTurn.css({
      opacity: 0,
      left: 160
    });
    this.$turn.append($newTurn);
    $newTurn.animate({
      opacity: 1,
      left: 110
    }, 500).animate({
      opacity: 0.4
    }, 1500);
    $prevTurn.animate({
      opacity: 0,
      left: 60
    }, 500, () => {
      $prevTurn.remove();
    });
    this.updateAcceleration();
    this.wait(500 / this.acceleration);
  }
  updateAcceleration() {
    if (this.battle.turnsSinceMoved > 2) {
      this.acceleration = (this.battle.messageFadeTime < 150 ? 2 : 1) * Math.min(this.battle.turnsSinceMoved - 1, 3);
    } else {
      this.acceleration = this.battle.messageFadeTime < 150 ? 2 : 1;
      if (this.battle.messageFadeTime < 50) this.acceleration = 3;
    }
  }
  addPokemonSprite(pokemon) {
    const sprite = new PokemonSprite(Dex.getSpriteData(pokemon, pokemon.side.isFar, {
      gen: this.gen,
      mod: this.mod
    }), {
      x: pokemon.side.x,
      y: pokemon.side.y,
      z: pokemon.side.z,
      opacity: 0
    }, this, pokemon.side.isFar);
    if (sprite.$el) this.$sprites[+pokemon.side.isFar].append(sprite.$el);
    return sprite;
  }
  addSideCondition(siden, id, instant) {
    if (!this.animating) return;
    const side = this.battle.sides[siden];
    const spriteIndex = +side.isFar;
    let x = side.x;
    let y = side.y;
    if (this.battle.gameType === 'freeforall') {
      x += side.isFar ? 20 : -20;
      if (side.n > 1) {
        x += side.isFar ? -140 : 140;
        y += side.isFar ? 14 : -20;
      }
    }
    switch (id) {
      case 'auroraveil':
        const auroraveil = new Sprite(BattleEffects.auroraveil, {
          display: 'block',
          x,
          y,
          z: side.behind(-14),
          xscale: 1,
          yscale: 0,
          opacity: 0.1
        }, this);
        this.$spritesFront[spriteIndex].append(auroraveil.$el);
        this.sideConditions[siden][id] = [auroraveil];
        auroraveil.anim({
          opacity: 0.7,
          time: instant ? 0 : 400
        }).anim({
          opacity: 0.3,
          time: instant ? 0 : 300
        });
        break;
      case 'reflect':
        const reflect = new Sprite(BattleEffects.reflect, {
          display: 'block',
          x,
          y,
          z: side.behind(-17),
          xscale: 1,
          yscale: 0,
          opacity: 0.1
        }, this);
        this.$spritesFront[spriteIndex].append(reflect.$el);
        this.sideConditions[siden][id] = [reflect];
        reflect.anim({
          opacity: 0.7,
          time: instant ? 0 : 400
        }).anim({
          opacity: 0.3,
          time: instant ? 0 : 300
        });
        break;
      case 'safeguard':
        const safeguard = new Sprite(BattleEffects.safeguard, {
          display: 'block',
          x,
          y,
          z: side.behind(-20),
          xscale: 1,
          yscale: 0,
          opacity: 0.1
        }, this);
        this.$spritesFront[spriteIndex].append(safeguard.$el);
        this.sideConditions[siden][id] = [safeguard];
        safeguard.anim({
          opacity: 0.7,
          time: instant ? 0 : 400
        }).anim({
          opacity: 0.3,
          time: instant ? 0 : 300
        });
        break;
      case 'lightscreen':
        const lightscreen = new Sprite(BattleEffects.lightscreen, {
          display: 'block',
          x,
          y,
          z: side.behind(-23),
          xscale: 1,
          yscale: 0,
          opacity: 0.1
        }, this);
        this.$spritesFront[spriteIndex].append(lightscreen.$el);
        this.sideConditions[siden][id] = [lightscreen];
        lightscreen.anim({
          opacity: 0.7,
          time: instant ? 0 : 400
        }).anim({
          opacity: 0.3,
          time: instant ? 0 : 300
        });
        break;
      case 'mist':
        const mist = new Sprite(BattleEffects.mist, {
          display: 'block',
          x,
          y,
          z: side.behind(-27),
          xscale: 1,
          yscale: 0,
          opacity: 0.1
        }, this);
        this.$spritesFront[spriteIndex].append(mist.$el);
        this.sideConditions[siden][id] = [mist];
        mist.anim({
          opacity: 0.7,
          time: instant ? 0 : 400
        }).anim({
          opacity: 0.3,
          time: instant ? 0 : 300
        });
        break;
      case 'stealthrock':
        const rock1 = new Sprite(BattleEffects.rock1, {
          display: 'block',
          x: x + side.leftof(-40),
          y: y - 10,
          z: side.z,
          opacity: 0.5,
          scale: 0.2
        }, this);
        const rock2 = new Sprite(BattleEffects.rock2, {
          display: 'block',
          x: x + side.leftof(-20),
          y: y - 40,
          z: side.z,
          opacity: 0.5,
          scale: 0.2
        }, this);
        const rock3 = new Sprite(BattleEffects.rock1, {
          display: 'block',
          x: x + side.leftof(30),
          y: y - 20,
          z: side.z,
          opacity: 0.5,
          scale: 0.2
        }, this);
        const rock4 = new Sprite(BattleEffects.rock2, {
          display: 'block',
          x: x + side.leftof(10),
          y: y - 30,
          z: side.z,
          opacity: 0.5,
          scale: 0.2
        }, this);
        this.$spritesFront[spriteIndex].append(rock1.$el);
        this.$spritesFront[spriteIndex].append(rock2.$el);
        this.$spritesFront[spriteIndex].append(rock3.$el);
        this.$spritesFront[spriteIndex].append(rock4.$el);
        this.sideConditions[siden][id] = [rock1, rock2, rock3, rock4];
        break;
      case 'gmaxsteelsurge':
        const surge1 = new Sprite(BattleEffects.greenmetal1, {
          display: 'block',
          x: x + side.leftof(-30),
          y: y - 20,
          z: side.z,
          opacity: 0.5,
          scale: 0.8
        }, this);
        const surge2 = new Sprite(BattleEffects.greenmetal2, {
          display: 'block',
          x: x + side.leftof(35),
          y: y - 15,
          z: side.z,
          opacity: 0.5,
          scale: 0.8
        }, this);
        const surge3 = new Sprite(BattleEffects.greenmetal1, {
          display: 'block',
          x: x + side.leftof(50),
          y: y - 10,
          z: side.z,
          opacity: 0.5,
          scale: 0.8
        }, this);
        this.$spritesFront[spriteIndex].append(surge1.$el);
        this.$spritesFront[spriteIndex].append(surge2.$el);
        this.$spritesFront[spriteIndex].append(surge3.$el);
        this.sideConditions[siden][id] = [surge1, surge2, surge3];
        break;
      case 'spikes':
        let spikeArray = this.sideConditions[siden]['spikes'];
        if (!spikeArray) {
          spikeArray = [];
          this.sideConditions[siden]['spikes'] = spikeArray;
        }
        let levels = this.battle.sides[siden].sideConditions['spikes'][1];
        if (spikeArray.length < 1 && levels >= 1) {
          const spike1 = new Sprite(BattleEffects.caltrop, {
            display: 'block',
            x: x - 25,
            y: y - 40,
            z: side.z,
            scale: 0.3
          }, this);
          this.$spritesFront[spriteIndex].append(spike1.$el);
          spikeArray.push(spike1);
        }
        if (spikeArray.length < 2 && levels >= 2) {
          const spike2 = new Sprite(BattleEffects.caltrop, {
            display: 'block',
            x: x + 30,
            y: y - 45,
            z: side.z,
            scale: 0.3
          }, this);
          this.$spritesFront[spriteIndex].append(spike2.$el);
          spikeArray.push(spike2);
        }
        if (spikeArray.length < 3 && levels >= 3) {
          const spike3 = new Sprite(BattleEffects.caltrop, {
            display: 'block',
            x: x + 50,
            y: y - 40,
            z: side.z,
            scale: 0.3
          }, this);
          this.$spritesFront[spriteIndex].append(spike3.$el);
          spikeArray.push(spike3);
        }
        break;
      case 'toxicspikes':
        let tspikeArray = this.sideConditions[siden]['toxicspikes'];
        if (!tspikeArray) {
          tspikeArray = [];
          this.sideConditions[siden]['toxicspikes'] = tspikeArray;
        }
        let tspikeLevels = this.battle.sides[siden].sideConditions['toxicspikes'][1];
        if (tspikeArray.length < 1 && tspikeLevels >= 1) {
          const tspike1 = new Sprite(BattleEffects.poisoncaltrop, {
            display: 'block',
            x: x + 5,
            y: y - 40,
            z: side.z,
            scale: 0.3
          }, this);
          this.$spritesFront[spriteIndex].append(tspike1.$el);
          tspikeArray.push(tspike1);
        }
        if (tspikeArray.length < 2 && tspikeLevels >= 2) {
          const tspike2 = new Sprite(BattleEffects.poisoncaltrop, {
            display: 'block',
            x: x - 15,
            y: y - 35,
            z: side.z,
            scale: 0.3
          }, this);
          this.$spritesFront[spriteIndex].append(tspike2.$el);
          tspikeArray.push(tspike2);
        }
        break;
      case 'stickyweb':
        const web = new Sprite(BattleEffects.web, {
          display: 'block',
          x: x + 15,
          y: y - 35,
          z: side.z,
          opacity: 0.4,
          scale: 0.7
        }, this);
        this.$spritesFront[spriteIndex].append(web.$el);
        this.sideConditions[siden][id] = [web];
        break;
    }
  }
  removeSideCondition(siden, id) {
    if (!this.animating) return;
    if (this.sideConditions[siden][id]) {
      for (const sprite of this.sideConditions[siden][id]) sprite.destroy();
      delete this.sideConditions[siden][id];
    }
  }
  resetSideConditions() {
    for (let siden = 0; siden < this.sideConditions.length; siden++) {
      for (const id in this.sideConditions[siden]) {
        this.removeSideCondition(siden, id);
      }
      for (const id in this.battle.sides[siden].sideConditions) {
        this.addSideCondition(siden, id, true);
      }
    }
  }
  typeAnim(pokemon, types) {
    const result = BattleLog.escapeHTML(types).split('/').map(type => `<img src="${Dex.resourcePrefix}sprites/types/${encodeURIComponent(type)}.png" alt="${type}" class="pixelated" />`).join(' ');
    this.resultAnim(pokemon, result, 'neutral');
  }
  resultAnim(pokemon, result, type) {
    if (!this.animating) return;
    let $effect = $('<div class="result ' + type + 'result"><strong>' + result + '</strong></div>');
    this.$fx.append($effect);
    $effect.delay(this.timeOffset).css({
      display: 'block',
      opacity: 0,
      top: pokemon.sprite.top - 5,
      left: pokemon.sprite.left - 75
    }).animate({
      opacity: 1
    }, 1);
    $effect.animate({
      opacity: 0,
      top: pokemon.sprite.top - 65
    }, 1000, 'swing');
    this.wait(this.acceleration < 2 ? 350 : 250);
    pokemon.sprite.updateStatbar(pokemon);
    if (this.acceleration < 3) this.waitFor($effect);
  }
  abilityActivateAnim(pokemon, result) {
    if (!this.animating) return;
    this.$fx.append(`<div class="result abilityresult"><strong>${result}</strong></div>`);
    let $effect = this.$fx.children().last();
    $effect.delay(this.timeOffset).css({
      display: 'block',
      opacity: 0,
      top: pokemon.sprite.top + 15,
      left: pokemon.sprite.left - 75
    }).animate({
      opacity: 1
    }, 1);
    $effect.delay(800).animate({
      opacity: 0
    }, 400, 'swing');
    this.wait(100);
    pokemon.sprite.updateStatbar(pokemon);
    if (this.acceleration < 3) this.waitFor($effect);
  }
  damageAnim(pokemon, damage) {
    if (!this.animating) return;
    if (!pokemon.sprite.$statbar) return;
    pokemon.sprite.updateHPText(pokemon);
    let $hp = pokemon.sprite.$statbar.find('div.hp');
    let w = pokemon.hpWidth(150);
    let hpcolor = BattleScene.getHPColor(pokemon);
    let callback;
    if (hpcolor === 'y') {
      callback = () => {
        $hp.addClass('hp-yellow');
      };
    }
    if (hpcolor === 'r') {
      callback = () => {
        $hp.addClass('hp-yellow hp-red');
      };
    }
    if (damage === '100%' && pokemon.hp > 0) damage = '99%';
    this.resultAnim(pokemon, this.battle.hardcoreMode ? 'Damage' : `&minus;${damage}`, 'bad');
    $hp.animate({
      width: w,
      'border-right-width': w ? 1 : 0
    }, 350, callback);
  }
  healAnim(pokemon, damage) {
    if (!this.animating) return;
    if (!pokemon.sprite.$statbar) return;
    pokemon.sprite.updateHPText(pokemon);
    let $hp = pokemon.sprite.$statbar.find('div.hp');
    let w = pokemon.hpWidth(150);
    let hpcolor = BattleScene.getHPColor(pokemon);
    let callback;
    if (hpcolor === 'g') {
      callback = () => {
        $hp.removeClass('hp-yellow hp-red');
      };
    }
    if (hpcolor === 'y') {
      callback = () => {
        $hp.removeClass('hp-red');
      };
    }
    this.resultAnim(pokemon, this.battle.hardcoreMode ? 'Heal' : `+${damage}`, 'good');
    $hp.animate({
      width: w,
      'border-right-width': w ? 1 : 0
    }, 350, callback);
  }

  // Sprite methods
  /////////////////////////////////////////////////////////////////////

  removeEffect(pokemon, id, instant) {
    return pokemon.sprite.removeEffect(id, instant);
  }
  addEffect(pokemon, id, instant) {
    return pokemon.sprite.addEffect(id, instant);
  }
  animSummon(pokemon, slot, instant) {
    return pokemon.sprite.animSummon(pokemon, slot, instant);
  }
  animUnsummon(pokemon, instant) {
    return pokemon.sprite.animUnsummon(pokemon, instant);
  }
  animDragIn(pokemon, slot) {
    return pokemon.sprite.animDragIn(pokemon, slot);
  }
  animDragOut(pokemon) {
    return pokemon.sprite.animDragOut(pokemon);
  }
  resetStatbar(pokemon, startHidden) {
    return pokemon.sprite.resetStatbar(pokemon, startHidden);
  }
  updateStatbar(pokemon, updatePrevhp, updateHp) {
    return pokemon.sprite.updateStatbar(pokemon, updatePrevhp, updateHp);
  }
  updateStatbarIfExists(pokemon, updatePrevhp, updateHp) {
    return pokemon.sprite.updateStatbarIfExists(pokemon, updatePrevhp, updateHp);
  }
  animTransform(pokemon, useSpeciesAnim, isPermanent) {
    return pokemon.sprite.animTransform(pokemon, useSpeciesAnim, isPermanent);
  }
  clearEffects(pokemon) {
    return pokemon.sprite.clearEffects();
  }
  removeTransform(pokemon) {
    return pokemon.sprite.removeTransform();
  }
  animFaint(pokemon) {
    return pokemon.sprite.animFaint(pokemon);
  }
  animReset(pokemon) {
    return pokemon.sprite.animReset();
  }
  anim(pokemon, end, transition) {
    return pokemon.sprite.anim(end, transition);
  }
  beforeMove(pokemon) {
    return pokemon.sprite.beforeMove();
  }
  afterMove(pokemon) {
    return pokemon.sprite.afterMove();
  }

  // Misc
  /////////////////////////////////////////////////////////////////////

  setFrameHTML(html) {
    this.customControls = true;
    this.$frame.html(html);
  }
  setControlsHTML(html) {
    this.customControls = true;
    let $controls = this.$frame.parent().children('.battle-controls');
    $controls.html(html);
  }
  preloadImage(url) {
    let token = url.replace(/\.(gif|png)$/, '').replace(/\//g, '-');
    if (this.preloadCache[token]) {
      return;
    }
    this.preloadNeeded++;
    this.preloadCache[token] = new Image();
    this.preloadCache[token].onload = () => {
      this.preloadDone++;
    };
    this.preloadCache[token].src = url;
  }
  preloadEffects() {
    for (let i in BattleEffects) {
      if (i === 'alpha' || i === 'omega') continue;
      const url = BattleEffects[i].url;
      if (url) this.preloadImage(url);
    }
    this.preloadImage(Dex.resourcePrefix + 'sprites/ani/substitute.gif');
    this.preloadImage(Dex.resourcePrefix + 'sprites/ani-back/substitute.gif');
  }
  rollBgm() {
    this.setBgm(1 + this.numericId % 15);
  }
  setBgm(bgmNum) {
    if (this.bgmNum === bgmNum) return;
    this.bgmNum = bgmNum;
    switch (bgmNum) {
      case -1:
        this.bgm = BattleSound.loadBgm('audio/bw2-homika-dogars.mp3', 1661, 68131, this.bgm);
        break;
      case -2:
        this.bgm = BattleSound.loadBgm('audio/xd-miror-b.mp3', 9000, 57815, this.bgm);
        break;
      case -3:
        this.bgm = BattleSound.loadBgm('audio/colosseum-miror-b.mp3', 896, 47462, this.bgm);
        break;
      case 1:
        this.bgm = BattleSound.loadBgm('audio/dpp-trainer.mp3', 13440, 96959, this.bgm);
        break;
      case 2:
        this.bgm = BattleSound.loadBgm('audio/dpp-rival.mp3', 13888, 66352, this.bgm);
        break;
      case 3:
        this.bgm = BattleSound.loadBgm('audio/hgss-johto-trainer.mp3', 23731, 125086, this.bgm);
        break;
      case 4:
        this.bgm = BattleSound.loadBgm('audio/hgss-kanto-trainer.mp3', 13003, 94656, this.bgm);
        break;
      case 5:
        this.bgm = BattleSound.loadBgm('audio/bw-trainer.mp3', 14629, 110109, this.bgm);
        break;
      case 6:
        this.bgm = BattleSound.loadBgm('audio/bw-rival.mp3', 19180, 57373, this.bgm);
        break;
      case 7:
        this.bgm = BattleSound.loadBgm('audio/bw-subway-trainer.mp3', 15503, 110984, this.bgm);
        break;
      case 8:
        this.bgm = BattleSound.loadBgm('audio/bw2-kanto-gym-leader.mp3', 14626, 58986, this.bgm);
        break;
      case 9:
        this.bgm = BattleSound.loadBgm('audio/bw2-rival.mp3', 7152, 68708, this.bgm);
        break;
      case 10:
        this.bgm = BattleSound.loadBgm('audio/xy-trainer.mp3', 7802, 82469, this.bgm);
        break;
      case 11:
        this.bgm = BattleSound.loadBgm('audio/xy-rival.mp3', 7802, 58634, this.bgm);
        break;
      case 12:
        this.bgm = BattleSound.loadBgm('audio/oras-trainer.mp3', 13579, 91548, this.bgm);
        break;
      case 13:
        this.bgm = BattleSound.loadBgm('audio/oras-rival.mp3', 14303, 69149, this.bgm);
        break;
      case 14:
        this.bgm = BattleSound.loadBgm('audio/sm-trainer.mp3', 8323, 89230, this.bgm);
        break;
      case -101:
        this.bgm = BattleSound.loadBgm('audio/spl-elite4.mp3', 3962, 152509, this.bgm);
        break;
      case 15:
      default:
        this.bgm = BattleSound.loadBgm('audio/sm-rival.mp3', 11389, 62158, this.bgm);
        break;
    }
    this.updateBgm();
  }
  updateBgm() {
    /**
     * - not playing in non-battle RoomGames before `|start` (turn -1)
     * - not playing at team preview in replays (paused)
     * - playing at team preview in games (turn 0)
     * - playing during the game (turn 1+)
     * - not playing while paused
     * - playing while waiting for players to choose moves (atQueueEnd && !ended)
     * - not playing after the game has ended
     */
    const nowPlaying = this.battle.turn >= 0 && !this.battle.ended && !this.battle.paused;
    if (nowPlaying) {
      if (!this.bgm) this.rollBgm();
      this.bgm.resume();
    } else if (this.bgm) {
      this.bgm.pause();
    }
  }
  resetBgm() {
    if (this.bgm) this.bgm.stop();
  }
  destroy() {
    this.log.destroy();
    if (this.$frame) {
      this.$frame.empty();
      // listeners set by BattleTooltips
      this.$frame.off();
    }
    if (this.bgm) {
      this.bgm.destroy();
      this.bgm = null;
    }
    this.battle = null;
  }
  static getHPColor(pokemon) {
    if (pokemon.hpcolor) return pokemon.hpcolor;
    let ratio = pokemon.hp / pokemon.maxhp;
    if (ratio > 0.5) return 'g';
    if (ratio > 0.2) return 'y';
    return 'r';
  }
}
class Sprite {
  scene;
  $el = null;
  sp;
  x;
  y;
  z;
  constructor(spriteData, pos, scene) {
    this.scene = scene;
    let sp = null;
    if (spriteData) {
      sp = spriteData;
      let rawHTML = sp.rawHTML || `<img src="${sp.url}" style="display:none;position:absolute"${sp.pixelated ? ' class="pixelated"' : ''} />`;
      this.$el = $(rawHTML);
    } else {
      sp = {
        w: 0,
        h: 0,
        url: ''
      };
    }
    this.sp = sp;
    this.x = pos.x;
    this.y = pos.y;
    this.z = pos.z;
    if (pos.opacity !== 0 && spriteData) this.$el.css(scene.pos(pos, sp));
    if (!spriteData) {
      this.delay = function () {
        return this;
      };
      this.anim = function () {
        return this;
      };
    }
  }
  destroy() {
    if (this.$el) this.$el.remove();
    this.$el = null;
    this.scene = null;
  }
  delay(time) {
    this.$el.delay(time);
    return this;
  }
  anim(end, transition) {
    end = {
      x: this.x,
      y: this.y,
      z: this.z,
      scale: 1,
      opacity: 1,
      time: 500,
      ...end
    };
    if (end.time === 0) {
      this.$el.css(this.scene.pos(end, this.sp));
      return this;
    }
    this.$el.animate(this.scene.posT(end, this.sp, transition, this), end.time);
    return this;
  }
}
class PokemonSprite extends Sprite {
  // HTML strings are constructed from this table and stored back in it to cache them
  static statusTable = {
    formechange: null,
    typechange: null,
    typeadd: null,
    dynamax: ['Dynamaxed', 'good'],
    trapped: null,
    // linked volatiles are not implemented yet
    throatchop: ['Throat Chop', 'bad'],
    confusion: ['Confused', 'bad'],
    healblock: ['Heal Block', 'bad'],
    yawn: ['Drowsy', 'bad'],
    flashfire: ['Flash Fire', 'good'],
    imprison: ['Imprisoning foe', 'good'],
    autotomize: ['Lightened', 'neutral'],
    miracleeye: ['Miracle Eye', 'bad'],
    foresight: ['Foresight', 'bad'],
    telekinesis: ['Telekinesis', 'neutral'],
    transform: ['Transformed', 'neutral'],
    powertrick: ['Power Trick', 'neutral'],
    curse: ['Curse', 'bad'],
    nightmare: ['Nightmare', 'bad'],
    attract: ['Infatuation', 'bad'],
    torment: ['Torment', 'bad'],
    taunt: ['Taunt', 'bad'],
    disable: ['Disable', 'bad'],
    embargo: ['Embargo', 'bad'],
    ingrain: ['Ingrain', 'good'],
    aquaring: ['Aqua Ring', 'good'],
    stockpile1: ['Stockpile', 'good'],
    stockpile2: ['Stockpile&times;2', 'good'],
    stockpile3: ['Stockpile&times;3', 'good'],
    perish0: ['Perish now', 'bad'],
    perish1: ['Perish next turn', 'bad'],
    perish2: ['Perish in 2', 'bad'],
    perish3: ['Perish in 3', 'bad'],
    airballoon: ['Balloon', 'good'],
    leechseed: ['Leech Seed', 'bad'],
    encore: ['Encore', 'bad'],
    mustrecharge: ['Must recharge', 'bad'],
    bide: ['Bide', 'good'],
    magnetrise: ['Magnet Rise', 'good'],
    smackdown: ['Smack Down', 'bad'],
    focusenergy: ['Critical Hit Boost', 'good'],
    dragoncheer: ['Critical Hit Boost', 'good'],
    slowstart: ['Slow Start', 'bad'],
    protosynthesisatk: ['Protosynthesis: Atk', 'good'],
    protosynthesisdef: ['Protosynthesis: Def', 'good'],
    protosynthesisspa: ['Protosynthesis: SpA', 'good'],
    protosynthesisspd: ['Protosynthesis: SpD', 'good'],
    protosynthesisspe: ['Protosynthesis: Spe', 'good'],
    quarkdriveatk: ['Quark Drive: Atk', 'good'],
    quarkdrivedef: ['Quark Drive: Def', 'good'],
    quarkdrivespa: ['Quark Drive: SpA', 'good'],
    quarkdrivespd: ['Quark Drive: SpD', 'good'],
    quarkdrivespe: ['Quark Drive: Spe', 'good'],
    fallen1: ['Fallen: 1', 'good'],
    fallen2: ['Fallen: 2', 'good'],
    fallen3: ['Fallen: 3', 'good'],
    fallen4: ['Fallen: 4', 'good'],
    fallen5: ['Fallen: 5', 'good'],
    noretreat: ['No Retreat', 'bad'],
    octolock: ['Octolock', 'bad'],
    tarshot: ['Tar Shot', 'bad'],
    saltcure: ['Salt Cure', 'bad'],
    syrupbomb: ['Syrupy', 'bad'],
    doomdesire: null,
    futuresight: null,
    mimic: ['Mimic', 'good'],
    watersport: ['Water Sport', 'good'],
    mudsport: ['Mud Sport', 'good'],
    substitute: null,
    // sub graphics are handled elsewhere, see Battle.Sprite.animSub()
    uproar: ['Uproar', 'neutral'],
    rage: ['Rage', 'neutral'],
    roost: ['Landed', 'neutral'],
    protect: ['Protect', 'good'],
    quickguard: ['Quick Guard', 'good'],
    wideguard: ['Wide Guard', 'good'],
    craftyshield: ['Crafty Shield', 'good'],
    matblock: ['Mat Block', 'good'],
    maxguard: ['Max Guard', 'good'],
    helpinghand: ['Helping Hand', 'good'],
    magiccoat: ['Magic Coat', 'good'],
    destinybond: ['Destiny Bond', 'good'],
    snatch: ['Snatch', 'good'],
    grudge: ['Grudge', 'good'],
    charge: ['Charge', 'good'],
    endure: ['Endure', 'good'],
    focuspunch: ['Focusing', 'neutral'],
    shelltrap: ['Trap set', 'neutral'],
    powder: ['Powder', 'bad'],
    electrify: ['Electrify', 'bad'],
    glaiverush: ['Glaive Rush', 'bad'],
    ragepowder: ['Rage Powder', 'good'],
    followme: ['Follow Me', 'good'],
    instruct: ['Instruct', 'neutral'],
    beakblast: ['Beak Blast', 'neutral'],
    laserfocus: ['Laser Focus', 'good'],
    spotlight: ['Spotlight', 'neutral'],
    itemremoved: null,
    // partial trapping
    bind: ['Bind', 'bad'],
    clamp: ['Clamp', 'bad'],
    firespin: ['Fire Spin', 'bad'],
    infestation: ['Infestation', 'bad'],
    magmastorm: ['Magma Storm', 'bad'],
    sandtomb: ['Sand Tomb', 'bad'],
    snaptrap: ['Snap Trap', 'bad'],
    thundercage: ['Thunder Cage', 'bad'],
    whirlpool: ['Whirlpool', 'bad'],
    wrap: ['Wrap', 'bad'],
    // Gen 1-2
    mist: ['Mist', 'good'],
    // Gen 1
    lightscreen: ['Light Screen', 'good'],
    reflect: ['Reflect', 'good']
  };
  forme = '';
  cryurl = undefined;
  subsp = null;
  $sub = null;
  isSubActive = false;
  $statbar = null;
  isFrontSprite;
  isMissedPokemon = false;
  /**
   * If the pokemon is transformed, sprite.sp will be the transformed
   * SpriteData and sprite.oldsp will hold the original form's SpriteData
   */
  oldsp = null;
  statbarLeft = 0;
  statbarTop = 0;
  left = 0;
  top = 0;
  effects = {};
  constructor(spriteData, pos, scene, isFrontSprite) {
    super(spriteData, pos, scene);
    this.cryurl = this.sp.cryurl;
    this.isFrontSprite = isFrontSprite;
  }
  destroy() {
    if (this.$el) this.$el.remove();
    this.$el = null;
    if (this.$statbar) this.$statbar.remove();
    this.$statbar = null;
    if (this.$sub) this.$sub.remove();
    this.$sub = null;
    this.scene = null;
  }
  delay(time) {
    this.$el.delay(time);
    if (this.$sub) this.$sub.delay(time);
    return this;
  }
  anim(end, transition) {
    end = {
      x: this.x,
      y: this.y,
      z: this.z,
      scale: 1,
      opacity: 1,
      time: 500,
      ...end
    };
    const [$el, sp] = this.isSubActive ? [this.$sub, this.subsp] : [this.$el, this.sp];
    $el.animate(this.scene.posT(end, sp, transition, this), end.time);
    return this;
  }
  behindx(offset) {
    return this.x + (this.isFrontSprite ? 1 : -1) * offset;
  }
  behindy(offset) {
    return this.y + (this.isFrontSprite ? -1 : 1) * offset;
  }
  leftof(offset) {
    return this.x + (this.isFrontSprite ? 1 : -1) * offset;
  }
  behind(offset) {
    return this.z + (this.isFrontSprite ? 1 : -1) * offset;
  }
  removeTransform() {
    if (!this.scene.animating) return;
    if (!this.oldsp) return;
    let sp = this.oldsp;
    this.cryurl = sp.cryurl;
    this.sp = sp;
    this.oldsp = null;
    const $el = this.isSubActive ? this.$sub : this.$el;
    $el.attr('src', sp.url);
    $el.css(this.scene.pos({
      x: this.x,
      y: this.y,
      z: this.isSubActive ? this.behind(30) : this.z,
      opacity: this.$sub ? 0.3 : 1
    }, sp));
  }
  animSub(instant, noAnim) {
    if (!this.scene.animating) return;
    if (this.$sub) return;
    const subsp = Dex.getSpriteData('substitute', this.isFrontSprite, {
      gen: this.scene.gen,
      mod: this.scene.mod
    });
    this.subsp = subsp;
    this.$sub = $('<img src="' + subsp.url + '" style="display:block;opacity:0;position:absolute"' + (subsp.pixelated ? ' class="pixelated"' : '') + ' />');
    this.scene.$spritesFront[+this.isFrontSprite].append(this.$sub);
    this.isSubActive = true;
    if (instant) {
      if (!noAnim) this.animReset();
      return;
    }
    this.$el.animate(this.scene.pos({
      x: this.x,
      y: this.y,
      z: this.behind(30),
      opacity: 0.3
    }, this.sp), 500);
    this.$sub.css(this.scene.pos({
      x: this.x,
      y: this.y + 50,
      z: this.z,
      opacity: 0
    }, subsp));
    this.$sub.animate(this.scene.pos({
      x: this.x,
      y: this.y,
      z: this.z
    }, subsp), 500);
    this.scene.waitFor(this.$sub);
  }
  animSubFade(instant) {
    if (!this.$sub || !this.scene.animating) return;
    this.isSubActive = false;
    if (instant) {
      this.$sub.remove();
      this.$sub = null;
      this.animReset();
      return;
    }
    if (this.scene.timeOffset) {
      this.$el.delay(this.scene.timeOffset);
      this.$sub.delay(this.scene.timeOffset);
    }
    this.$sub.animate(this.scene.pos({
      x: this.x,
      y: this.y - 50,
      z: this.z,
      opacity: 0
    }, this.subsp), 500);
    this.$sub = null;
    this.anim({
      time: 500
    });
    if (this.scene.animating) this.scene.waitFor(this.$el);
  }
  beforeMove() {
    if (!this.scene.animating) return false;
    if (!this.isSubActive) return false;
    this.isSubActive = false;
    this.anim({
      time: 300
    });
    this.$sub.animate(this.scene.pos({
      x: this.leftof(-50),
      y: this.y,
      z: this.z,
      opacity: 0.5
    }, this.subsp), 300);
    for (const side of this.scene.battle.sides) {
      for (const active of side.active) {
        if (active && active.sprite !== this) {
          active.sprite.delay(300);
        }
      }
    }
    this.scene.wait(300);
    this.scene.waitFor(this.$el);
    return true;
  }
  afterMove() {
    if (!this.scene.animating) return false;
    if (!this.$sub || this.isSubActive) return false;
    this.isSubActive = true;
    this.$sub.delay(300);
    this.$el.add(this.$sub).promise().done(() => {
      if (!this.$sub || !this.$el) return;
      this.$el.animate(this.scene.pos({
        x: this.x,
        y: this.y,
        z: this.behind(30),
        opacity: 0.3
      }, this.sp), 300);
      this.anim({
        time: 300
      });
    });
    return false;
  }
  removeSub() {
    if (!this.$sub) return;
    this.isSubActive = false;
    if (!this.scene.animating) {
      this.$sub.remove();
    } else {
      const $sub = this.$sub;
      $sub.animate({
        opacity: 0
      }, () => {
        $sub.remove();
      });
    }
    this.$sub = null;
  }
  reset(pokemon) {
    this.clearEffects();
    if (pokemon.volatiles.formechange || pokemon.volatiles.dynamax || pokemon.volatiles.terastallize) {
      if (!this.oldsp) this.oldsp = this.sp;
      this.sp = Dex.getSpriteData(pokemon, this.isFrontSprite, {
        gen: this.scene.gen,
        mod: this.scene.mod
      });
    } else if (this.oldsp) {
      this.sp = this.oldsp;
      this.oldsp = null;
    }

    // I can rant for ages about how jQuery sucks, necessitating this function
    // The short version is: after calling elem.finish() on an animating
    // element, there appear to be a grand total of zero ways to hide it
    // afterwards. I've tried `elem.css('display', 'none')`, `elem.hide()`,
    // `elem.hide(1)`, `elem.hide(1000)`, `elem.css('opacity', 0)`,
    // `elem.animate({opacity: 0}, 1000)`.
    // They literally all do nothing, and the element retains
    // a style attribute containing `display: inline-block` and `opacity: 1`
    // Only forcibly removing the element from the DOM actually makes it
    // disappear, so that's what we do.
    if (this.$el) {
      this.$el.stop(true, false);
      this.$el.remove();
      const $newEl = $(`<img src="${this.sp.url}" style="display:none;position:absolute"${this.sp.pixelated ? ' class="pixelated"' : ''} />`);
      this.$el = $newEl;
    }
    if (!pokemon.isActive()) {
      if (this.$statbar) {
        this.$statbar.remove();
        this.$statbar = null;
      }
      return;
    }
    if (this.$el) this.scene.$sprites[+this.isFrontSprite].append(this.$el);
    this.recalculatePos(pokemon.slot);
    this.resetStatbar(pokemon);
    this.$el.css(this.scene.pos({
      display: 'block',
      x: this.x,
      y: this.y,
      z: this.z
    }, this.sp));
    for (const id in pokemon.volatiles) this.addEffect(id, true);
    for (const id in pokemon.turnstatuses) this.addEffect(id, true);
    for (const id in pokemon.movestatuses) this.addEffect(id, true);
  }
  animReset() {
    if (!this.scene.animating) return;
    if (this.$sub) {
      this.isSubActive = true;
      this.$el.stop(true, false);
      this.$sub.stop(true, false);
      this.$el.css(this.scene.pos({
        x: this.x,
        y: this.y,
        z: this.behind(30),
        opacity: 0.3
      }, this.sp));
      this.$sub.css(this.scene.pos({
        x: this.x,
        y: this.y,
        z: this.z
      }, this.subsp));
    } else {
      this.$el.stop(true, false);
      this.$el.css(this.scene.pos({
        x: this.x,
        y: this.y,
        z: this.z
      }, this.sp));
    }
  }
  recalculatePos(slot) {
    let moreActive = this.scene.activeCount - 1;
    let statbarOffset = 0;
    const isFFA = this.scene.battle.gameType === 'freeforall';
    if (isFFA) {
      // create a gap between Pokemon on the same "side" as a distinction between FFA and Multi battles
      moreActive++;
      if (slot) slot++;
    }
    if (this.scene.gen <= 4 && moreActive) {
      this.x = (slot - 0.52) * (this.isFrontSprite ? 1 : -1) * -55;
      this.y = (this.isFrontSprite ? 1 : -1) + 1;
      if (this.isFrontSprite) statbarOffset = 30 * slot;
      if (!this.isFrontSprite) statbarOffset = -28 * slot;
    } else {
      switch (moreActive) {
        case 0:
          this.x = 0;
          break;
        case 1:
          if (this.sp.pixelated) {
            this.x = (slot * -100 + 18) * (this.isFrontSprite ? 1 : -1);
          } else {
            this.x = (slot * -75 + 18) * (this.isFrontSprite ? 1 : -1);
          }
          break;
        case 2:
          this.x = (slot * -70 + 20) * (this.isFrontSprite ? 1 : -1);
          break;
      }
      this.y = this.isFrontSprite ? slot * 7 : slot * -10;
      if (this.isFrontSprite) statbarOffset = 17 * slot;
      if (this.isFrontSprite && !moreActive && this.sp.pixelated) statbarOffset = 15;
      if (!this.isFrontSprite) statbarOffset = -7 * slot;
      if (this.isFrontSprite && moreActive === 2) statbarOffset = 14 * slot - 10;
    }
    if (this.scene.gen <= 2) {
      statbarOffset += this.isFrontSprite ? 20 : 1;
    } else if (this.scene.gen <= 3) {
      statbarOffset += this.isFrontSprite ? 30 : 5;
    } else if (this.scene.gen !== 5) {
      statbarOffset += this.isFrontSprite ? 30 : 20;
    }
    let pos = this.scene.pos({
      x: this.x,
      y: this.y,
      z: this.z
    }, {
      w: 0,
      h: 96
    });
    pos.top += 40;
    this.left = pos.left;
    this.top = pos.top;
    this.statbarLeft = pos.left - 80;
    this.statbarTop = pos.top - 73 - statbarOffset;
    if (this.statbarTop < -4) this.statbarTop = -4;
    if (moreActive) {
      // make sure element is in the right z-order
      if (!!slot === this.isFrontSprite) {
        this.$el.prependTo(this.$el.parent());
      } else {
        this.$el.appendTo(this.$el.parent());
      }
    }
  }
  animSummon(pokemon, slot, instant) {
    if (!this.scene.animating) return;
    this.scene.$sprites[+this.isFrontSprite].append(this.$el);
    this.recalculatePos(slot);

    // 'z-index': (this.isFrontSprite ? 4-slot : 1+slot),
    if (instant) {
      this.$el.css('display', 'block');
      this.animReset();
      this.resetStatbar(pokemon);
      if (pokemon.hasVolatile('substitute')) this.animSub(true);
      return;
    }
    if (this.cryurl) {
      BattleSound.playEffect(this.cryurl);
    }
    this.$el.css(this.scene.pos({
      display: 'block',
      x: this.x,
      y: this.y - 10,
      z: this.z,
      scale: 0,
      opacity: 0
    }, this.sp));
    this.scene.showEffect('pokeball', {
      opacity: 0,
      x: this.x,
      y: this.y + 30,
      z: this.behind(50),
      scale: 0.7
    }, {
      opacity: 1,
      x: this.x,
      y: this.y - 10,
      z: this.z,
      time: 300 / this.scene.acceleration
    }, 'ballistic2', 'fade');
    if (this.scene.gen <= 4) {
      this.delay(this.scene.timeOffset + 300 / this.scene.acceleration).anim({
        x: this.x,
        y: this.y,
        z: this.z,
        time: 400 / this.scene.acceleration
      });
    } else {
      this.delay(this.scene.timeOffset + 300 / this.scene.acceleration).anim({
        x: this.x,
        y: this.y + 30,
        z: this.z,
        time: 400 / this.scene.acceleration
      }).anim({
        x: this.x,
        y: this.y,
        z: this.z,
        time: 300 / this.scene.acceleration
      }, 'accel');
    }
    if (this.sp.shiny && this.scene.acceleration < 2) BattleOtherAnims.shiny.anim(this.scene, [this]);
    this.scene.waitFor(this.$el);
    if (pokemon.hasVolatile('substitute')) {
      this.animSub(true, true);
      this.$sub.css(this.scene.pos({
        x: this.x,
        y: this.y,
        z: this.z
      }, this.subsp));
      this.$el.animate(this.scene.pos({
        x: this.x,
        y: this.y,
        z: this.behind(30),
        opacity: 0.3
      }, this.sp), 300);
    }
    this.resetStatbar(pokemon, true);
    this.scene.updateSidebar(pokemon.side);
    this.$statbar.css({
      display: 'block',
      left: this.statbarLeft,
      top: this.statbarTop + 20,
      opacity: 0
    });
    this.$statbar.delay(300 / this.scene.acceleration).animate({
      top: this.statbarTop,
      opacity: 1
    }, 400 / this.scene.acceleration);
    this.dogarsCheck(pokemon);
  }
  animDragIn(pokemon, slot) {
    if (!this.scene.animating) return;
    this.scene.$sprites[+this.isFrontSprite].append(this.$el);
    this.recalculatePos(slot);

    // 'z-index': (this.isFrontSprite ? 4-slot : 1+slot),
    this.$el.css(this.scene.pos({
      display: 'block',
      x: this.leftof(-100),
      y: this.y,
      z: this.z,
      opacity: 0
    }, this.sp));
    this.delay(300).anim({
      x: this.x,
      y: this.y,
      z: this.z,
      time: 400
    }, 'decel');
    if (!!this.scene.animating && this.sp.shiny) BattleOtherAnims.shiny.anim(this.scene, [this]);
    this.scene.waitFor(this.$el);
    this.scene.timeOffset = 700;
    this.resetStatbar(pokemon, true);
    this.scene.updateSidebar(pokemon.side);
    this.$statbar.css({
      display: 'block',
      left: this.statbarLeft + (this.isFrontSprite ? -100 : 100),
      top: this.statbarTop,
      opacity: 0
    });
    this.$statbar.delay(300).animate({
      left: this.statbarLeft,
      opacity: 1
    }, 400);
    this.dogarsCheck(pokemon);
  }
  animDragOut(pokemon) {
    if (!this.scene.animating) return this.animUnsummon(pokemon, true);
    if (this.$sub) {
      this.isSubActive = false;
      const $sub = this.$sub;
      $sub.animate(this.scene.pos({
        x: this.leftof(100),
        y: this.y,
        z: this.z,
        opacity: 0,
        time: 400
      }, this.subsp), () => {
        $sub.remove();
      });
      this.$sub = null;
    }
    this.anim({
      x: this.leftof(100),
      y: this.y,
      z: this.z,
      opacity: 0,
      time: 400
    }, 'accel');
    this.updateStatbar(pokemon, true);
    let $statbar = this.$statbar;
    if ($statbar) {
      this.$statbar = null;
      $statbar.animate({
        left: this.statbarLeft - (this.isFrontSprite ? -100 : 100),
        opacity: 0
      }, 300 / this.scene.acceleration, () => {
        $statbar.remove();
      });
    }
  }
  animUnsummon(pokemon, instant) {
    this.removeSub();
    if (!this.scene.animating || instant) {
      this.$el.hide();
      if (this.$statbar) {
        this.$statbar.remove();
        this.$statbar = null;
      }
      return;
    }
    if (this.scene.gen <= 4) {
      this.anim({
        x: this.x,
        y: this.y - 25,
        z: this.z,
        scale: 0,
        opacity: 0,
        time: 400 / this.scene.acceleration
      });
    } else {
      this.anim({
        x: this.x,
        y: this.y - 40,
        z: this.z,
        scale: 0,
        opacity: 0,
        time: 400 / this.scene.acceleration
      });
    }
    this.scene.showEffect('pokeball', {
      opacity: 1,
      x: this.x,
      y: this.y - 40,
      z: this.z,
      scale: 0.7,
      time: 300 / this.scene.acceleration
    }, {
      opacity: 0,
      x: this.x,
      y: this.y,
      z: this.behind(50),
      time: 700 / this.scene.acceleration
    }, 'ballistic2');
    if (this.scene.acceleration < 3) this.scene.wait(600 / this.scene.acceleration);
    this.updateStatbar(pokemon, true);
    let $statbar = this.$statbar;
    if ($statbar) {
      this.$statbar = null;
      $statbar.animate({
        left: this.statbarLeft + (this.isFrontSprite ? 50 : -50),
        opacity: 0
      }, 300 / this.scene.acceleration, () => {
        $statbar.remove();
      });
    }
  }
  animFaint(pokemon) {
    this.removeSub();
    if (!this.scene.animating) {
      this.$el.remove();
      if (this.$statbar) {
        this.$statbar.remove();
        this.$statbar = null;
      }
      return;
    }
    this.updateStatbar(pokemon, false, true);
    this.scene.updateSidebar(pokemon.side);
    if (this.cryurl) {
      BattleSound.playEffect(this.cryurl);
    }
    this.anim({
      y: this.y - 80,
      opacity: 0
    }, 'accel');
    this.scene.waitFor(this.$el);
    this.$el.promise().done(() => {
      this.$el.remove();
    });
    let $statbar = this.$statbar;
    if ($statbar) {
      this.$statbar = null;
      $statbar.animate({
        opacity: 0
      }, 300, () => {
        $statbar.remove();
      });
    }
  }
  /**
   * @param pokemon
   * @param useSpeciesAnim false = Transform the move or Imposter the ability
   * @param isPermanent false = reverts on switch-out
   */
  animTransform(pokemon, useSpeciesAnim, isPermanent) {
    if (!this.scene.animating && !isPermanent) return;
    let sp = Dex.getSpriteData(pokemon, this.isFrontSprite, {
      gen: this.scene.gen,
      mod: this.scene.mod
    });
    let oldsp = this.sp;
    if (isPermanent) {
      if (pokemon.volatiles.dynamax) {
        // if a permanent forme change happens while dynamaxed, we need an undynamaxed sprite to go back to
        this.oldsp = Dex.getSpriteData(pokemon, this.isFrontSprite, {
          gen: this.scene.gen,
          mod: this.scene.mod,
          dynamax: false
        });
      } else {
        this.oldsp = null;
      }
    } else if (!this.oldsp) {
      this.oldsp = oldsp;
    }
    this.sp = sp;
    this.cryurl = sp.cryurl;
    if (!this.scene.animating) return;
    let speciesid = toID(pokemon.getSpeciesForme());
    let doCry = false;
    let skipAnim = !pokemon.isActive();
    const scene = this.scene;
    if (useSpeciesAnim && !skipAnim) {
      if (speciesid === 'kyogreprimal') {
        BattleOtherAnims.primalalpha.anim(scene, [this]);
        doCry = true;
      } else if (speciesid === 'groudonprimal') {
        BattleOtherAnims.primalomega.anim(scene, [this]);
        doCry = true;
      } else if (speciesid === 'necrozmaultra') {
        BattleOtherAnims.ultraburst.anim(scene, [this]);
        doCry = true;
      } else if (speciesid === 'zygardecomplete') {
        BattleOtherAnims.powerconstruct.anim(scene, [this]);
      } else if (speciesid === 'wishiwashischool' || speciesid === 'greninjaash') {
        BattleOtherAnims.schoolingin.anim(scene, [this]);
      } else if (speciesid === 'wishiwashi') {
        BattleOtherAnims.schoolingout.anim(scene, [this]);
      } else if (speciesid === 'mimikyubusted' || speciesid === 'mimikyubustedtotem' || speciesid === 'aegislash' || speciesid === 'aegislashblade') {
        // standard animation
      } else if (speciesid === 'palafinhero') {
        skipAnim = true;
      } else {
        BattleOtherAnims.megaevo.anim(scene, [this]);
        doCry = true;
      }
    }
    // Constructing here gives us 300ms extra time to preload the new sprite
    let $newEl = $('<img src="' + sp.url + '" style="display:block;opacity:0;position:absolute"' + (sp.pixelated ? ' class="pixelated"' : '') + ' />');
    $newEl.css(this.scene.pos({
      x: this.x,
      y: this.y,
      z: this.z,
      yscale: 0,
      xscale: 0,
      opacity: 0
    }, sp));
    if (skipAnim) {
      this.$el.replaceWith($newEl);
      this.$el = $newEl;
      this.animReset();
    } else {
      this.$el.animate(this.scene.pos({
        x: this.x,
        y: this.y,
        z: this.z,
        yscale: 0,
        xscale: 0,
        opacity: 0.3
      }, oldsp), 300, () => {
        if (this.cryurl && doCry) {
          BattleSound.playEffect(this.cryurl);
        }
        this.$el.replaceWith($newEl);
        this.$el = $newEl;
        this.$el.animate(scene.pos({
          x: this.x,
          y: this.y,
          z: this.z,
          opacity: 1
        }, sp), 300);
      });
      this.scene.wait(500);
    }
    this.scene.updateSidebar(pokemon.side);
    if (isPermanent) {
      this.resetStatbar(pokemon);
    } else {
      this.updateStatbar(pokemon);
    }
  }
  pokeEffect(id) {
    if (id === 'protect' || id === 'magiccoat') {
      this.effects[id][0].anim({
        scale: 1.2,
        opacity: 1,
        time: 100
      }).anim({
        opacity: 0.4,
        time: 300
      });
    }
  }
  addEffect(id, instant) {
    if (id in this.effects) {
      this.pokeEffect(id);
      return;
    }
    const spriten = +this.isFrontSprite;
    if (id === 'substitute' || id === 'shedtail') {
      this.animSub(instant);
    } else if (id === 'leechseed') {
      const pos1 = {
        display: 'block',
        x: this.x - 30,
        y: this.y - 40,
        z: this.z,
        scale: 0.2,
        opacity: 0.6
      };
      const pos2 = {
        display: 'block',
        x: this.x + 40,
        y: this.y - 35,
        z: this.z,
        scale: 0.2,
        opacity: 0.6
      };
      const pos3 = {
        display: 'block',
        x: this.x + 20,
        y: this.y - 25,
        z: this.z,
        scale: 0.2,
        opacity: 0.6
      };
      const leechseed1 = new Sprite(BattleEffects.energyball, pos1, this.scene);
      const leechseed2 = new Sprite(BattleEffects.energyball, pos2, this.scene);
      const leechseed3 = new Sprite(BattleEffects.energyball, pos3, this.scene);
      this.scene.$spritesFront[spriten].append(leechseed1.$el);
      this.scene.$spritesFront[spriten].append(leechseed2.$el);
      this.scene.$spritesFront[spriten].append(leechseed3.$el);
      this.effects['leechseed'] = [leechseed1, leechseed2, leechseed3];
    } else if (id === 'protect' || id === 'magiccoat') {
      const protect = new Sprite(BattleEffects.protect, {
        display: 'block',
        x: this.x,
        y: this.y,
        z: this.behind(-15),
        xscale: 1,
        yscale: 0,
        opacity: 0.1
      }, this.scene);
      this.scene.$spritesFront[spriten].append(protect.$el);
      this.effects[id] = [protect];
      protect.anim({
        opacity: 0.9,
        time: instant ? 0 : 400
      }).anim({
        opacity: 0.4,
        time: instant ? 0 : 300
      });
    }
  }
  removeEffect(id, instant) {
    if (id === 'formechange') this.removeTransform();
    if (id === 'substitute') this.animSubFade(instant);
    if (this.effects[id]) {
      for (const sprite of this.effects[id]) sprite.destroy();
      delete this.effects[id];
    }
  }
  clearEffects() {
    for (const id in this.effects) this.removeEffect(id, true);
    this.animSubFade(true);
    this.removeTransform();
  }
  dogarsCheck(pokemon) {
    if (pokemon.side.isFar) return;
    if (pokemon.speciesForme === 'Koffing' && /dogars/i.exec(pokemon.name)) {
      this.scene.setBgm(-1);
    } else if (this.scene.bgmNum === -1) {
      this.scene.rollBgm();
    }
  }

  // Statbar
  /////////////////////////////////////////////////////////////////////

  getClassForPosition(slot) {
    // DOUBLES: Slot0 -> left / Slot1 -> Right
    // TRIPLES: slot0 -> left / Slot1 -> Center / Slot2 -> Right
    const position = [' leftstatbar', this.scene.activeCount === 3 ? ' centerstatbar' : ' rightstatbar', ' rightstatbar'];
    return position[slot];
  }
  getStatbarHTML(pokemon) {
    let buf = '<div class="statbar' + (this.isFrontSprite ? ' lstatbar' : ' rstatbar') + this.getClassForPosition(pokemon.slot) + '" style="display: none">';
    const ignoreNick = this.isFrontSprite && (this.scene.battle.ignoreOpponent || this.scene.battle.ignoreNicks);
    buf += `<strong>${BattleLog.escapeHTML(ignoreNick ? pokemon.speciesForme : pokemon.name)}`;
    const gender = pokemon.gender;
    if (gender === 'M' || gender === 'F') {
      buf += ` <img src="${Dex.fxPrefix}gender-${gender.toLowerCase()}.png" alt="${gender}" width="7" height="10" class="pixelated" />`;
    }
    buf += pokemon.level === 100 ? `` : ` <small>L${pokemon.level}</small>`;
    let symbol = '';
    if (pokemon.speciesForme.includes('-Mega')) symbol = 'mega';else if (pokemon.speciesForme === 'Kyogre-Primal') symbol = 'alpha';else if (pokemon.speciesForme === 'Groudon-Primal') symbol = 'omega';
    if (symbol) {
      buf += ` <img src="${Dex.resourcePrefix}sprites/misc/${symbol}.png" alt="${symbol}" style="vertical-align:text-bottom;" />`;
    }
    if (pokemon.terastallized) {
      buf += ` <img src="${Dex.resourcePrefix}sprites/types/Tera${pokemon.terastallized}.png" alt="Tera-${pokemon.terastallized}" style="vertical-align:text-bottom;" height="16" width="16" />`;
    }
    buf += `</strong><div class="hpbar"><div class="hptext"></div><div class="hptextborder"></div><div class="prevhp"><div class="hp"></div></div><div class="status"></div>`;
    buf += `</div>`;
    return buf;
  }
  resetStatbar(pokemon, startHidden) {
    if (this.$statbar) {
      this.$statbar.remove();
      this.$statbar = null; // workaround for TS thinking $statbar is still null after `updateStatbar`
    }
    this.updateStatbar(pokemon, true);
    if (!startHidden && this.$statbar) {
      this.$statbar.css({
        display: 'block',
        left: this.statbarLeft,
        top: this.statbarTop,
        opacity: 1
      });
    }
  }
  updateStatbarIfExists(pokemon, updatePrevhp, updateHp) {
    if (this.$statbar) {
      this.updateStatbar(pokemon, updatePrevhp, updateHp);
    }
  }
  updateStatbar(pokemon, updatePrevhp, updateHp) {
    if (!this.scene.animating) return;
    if (!pokemon.isActive()) {
      if (this.$statbar) this.$statbar.hide();
      return;
    }
    if (!this.$statbar) {
      this.$statbar = $(this.getStatbarHTML(pokemon));
      this.scene.$stat.append(this.$statbar);
      updatePrevhp = true;
    }
    let hpcolor;
    if (updatePrevhp || updateHp) {
      hpcolor = BattleScene.getHPColor(pokemon);
      let w = pokemon.hpWidth(150);
      let $hp = this.$statbar.find('.hp');
      $hp.css({
        width: w,
        'border-right-width': w ? 1 : 0
      });
      if (hpcolor === 'g') $hp.removeClass('hp-yellow hp-red');else if (hpcolor === 'y') $hp.removeClass('hp-red').addClass('hp-yellow');else $hp.addClass('hp-yellow hp-red');
      this.updateHPText(pokemon);
    }
    if (updatePrevhp) {
      let $prevhp = this.$statbar.find('.prevhp');
      $prevhp.css('width', pokemon.hpWidth(150) + 1);
      if (hpcolor === 'g') $prevhp.removeClass('prevhp-yellow prevhp-red');else if (hpcolor === 'y') $prevhp.removeClass('prevhp-red').addClass('prevhp-yellow');else $prevhp.addClass('prevhp-yellow prevhp-red');
    }
    let status = '';
    if (pokemon.status === 'brn') {
      status += '<span class="brn">BRN</span> ';
    } else if (pokemon.status === 'psn') {
      status += '<span class="psn">PSN</span> ';
    } else if (pokemon.status === 'tox') {
      status += '<span class="psn">TOX</span> ';
    } else if (pokemon.status === 'slp') {
      status += '<span class="slp">SLP</span> ';
    } else if (pokemon.status === 'par') {
      status += '<span class="par">PAR</span> ';
    } else if (pokemon.status === 'frz') {
      status += '<span class="frz">FRZ</span> ';
    }
    if (pokemon.terastallized) {
      status += `<img src="${Dex.resourcePrefix}sprites/types/${encodeURIComponent(pokemon.terastallized)}.png" alt="${pokemon.terastallized}" class="pixelated" /> `;
    } else if (pokemon.volatiles.typechange?.[1]) {
      const types = pokemon.volatiles.typechange[1].split('/');
      for (const type of types) {
        status += '<img src="' + Dex.resourcePrefix + 'sprites/types/' + encodeURIComponent(type) + '.png" alt="' + type + '" class="pixelated" /> ';
      }
    }
    if (pokemon.volatiles.typeadd) {
      const type = pokemon.volatiles.typeadd[1];
      status += '+<img src="' + Dex.resourcePrefix + 'sprites/types/' + type + '.png" alt="' + type + '" class="pixelated" /> ';
    }
    for (const stat in pokemon.boosts) {
      if (pokemon.boosts[stat]) {
        status += '<span class="' + pokemon.getBoostType(stat) + '">' + pokemon.getBoost(stat) + '</span> ';
      }
    }
    for (let i in pokemon.volatiles) {
      status += PokemonSprite.getEffectTag(i);
    }
    for (let i in pokemon.turnstatuses) {
      if (i === 'roost' && !pokemon.getTypeList().includes('Flying')) continue;
      status += PokemonSprite.getEffectTag(i);
    }
    for (let i in pokemon.movestatuses) {
      status += PokemonSprite.getEffectTag(i);
    }
    let statusbar = this.$statbar.find('.status');
    statusbar.html(status);
  }
  static getEffectTag(id) {
    let effect = PokemonSprite.statusTable[id];
    if (typeof effect === 'string') return effect;
    if (effect === null) return PokemonSprite.statusTable[id] = '';
    if (effect === undefined) {
      let label = `[[${id}]]`;
      if (Dex.species.get(id).exists) {
        label = Dex.species.get(id).name;
      } else if (Dex.items.get(id).exists) {
        label = Dex.items.get(id).name;
      } else if (Dex.moves.get(id).exists) {
        label = Dex.moves.get(id).name;
      } else if (Dex.abilities.get(id).exists) {
        label = Dex.abilities.get(id).name;
      } else if (BattleNatures[id.substr(0, 1).toUpperCase() + id.substr(1).toLowerCase()]) {
        label = id.substr(0, 1).toUpperCase() + id.substr(1).toLowerCase();
      }
      effect = [label, 'neutral'];
    }
    return PokemonSprite.statusTable[id] = `<span class="${effect[1]}">${effect[0].replace(/ /g, '&nbsp;')}</span> `;
  }
  updateHPText(pokemon) {
    if (!this.$statbar) return;
    let $hptext = this.$statbar.find('.hptext');
    let $hptextborder = this.$statbar.find('.hptextborder');
    if (pokemon.maxhp === 48 || this.scene.battle.hardcoreMode && pokemon.maxhp === 100) {
      $hptext.hide();
      $hptextborder.hide();
    } else if (this.scene.battle.hardcoreMode || this.scene.battle.reportExactHP) {
      $hptext.html(`${pokemon.hp}/`);
      $hptext.show();
      $hptextborder.show();
    } else {
      $hptext.html(`${pokemon.hpWidth(100)}%`);
      $hptext.show();
      $hptextborder.show();
    }
  }
}

// par: -webkit-filter:  sepia(100%) hue-rotate(373deg) saturate(592%);
//      -webkit-filter:  sepia(100%) hue-rotate(22deg) saturate(820%) brightness(29%);
// psn: -webkit-filter:  sepia(100%) hue-rotate(618deg) saturate(285%);
// brn: -webkit-filter:  sepia(100%) hue-rotate(311deg) saturate(469%);
// slp: -webkit-filter:  grayscale(100%);
// frz: -webkit-filter:  sepia(100%) hue-rotate(154deg) saturate(759%) brightness(23%);

Object.assign($.easing, {
  ballisticUp(x, t, b, c, d) {
    return -3 * x * x + 4 * x;
  },
  ballisticDown(x, t, b, c, d) {
    x = 1 - x;
    return 1 - (-3 * x * x + 4 * x);
  },
  quadUp(x, t, b, c, d) {
    x = 1 - x;
    return 1 - x * x;
  },
  quadDown(x, t, b, c, d) {
    return x * x;
  }
});
const BattleEffects = {
  wisp: {
    url: 'wisp.png',
    w: 100,
    h: 100
  },
  purplewisp: {
    url: 'purplewisp.png',
    w: 100,
    h: 100
  },
  waterwisp: {
    url: 'waterwisp.png',
    w: 100,
    h: 100
  },
  fireball: {
    url: 'fireball.png',
    w: 64,
    h: 64
  },
  icicle: {
    url: 'icicle.png',
    // http://opengameart.org/content/icicle-spell
    w: 80,
    h: 60
  },
  lightning: {
    url: 'lightning.png',
    // by Pokemon Showdown user SailorCosmos
    w: 41,
    h: 229
  },
  rock1: {
    url: 'rock1.png',
    // Pokemon Online - Gilad
    w: 64,
    h: 80
  },
  rock2: {
    url: 'rock2.png',
    // Pokemon Online - Gilad
    w: 66,
    h: 72
  },
  rock3: {
    url: 'rock3.png',
    // by Pokemon Showdown user SailorCosmos
    w: 66,
    h: 72
  },
  caltrop: {
    url: 'caltrop.png',
    // by Pokemon Showdown user SailorCosmos
    w: 80,
    h: 80
  },
  greenmetal1: {
    url: 'greenmetal1.png',
    // by Pokemon Showdown user Kalalokki
    w: 45,
    h: 45
  },
  greenmetal2: {
    url: 'greenmetal2.png',
    // by Pokemon Showdown user Kalalokki
    w: 45,
    h: 45
  },
  poisoncaltrop: {
    url: 'poisoncaltrop.png',
    // by Pokemon Showdown user SailorCosmos
    w: 80,
    h: 80
  },
  shadowball: {
    url: 'shadowball.png',
    w: 100,
    h: 100
  },
  energyball: {
    url: 'energyball.png',
    w: 100,
    h: 100
  },
  electroball: {
    url: 'electroball.png',
    w: 100,
    h: 100
  },
  mistball: {
    url: 'mistball.png',
    w: 100,
    h: 100
  },
  iceball: {
    url: 'iceball.png',
    w: 100,
    h: 100
  },
  flareball: {
    url: 'flareball.png',
    w: 100,
    h: 100
  },
  pokeball: {
    url: 'pokeball.png',
    w: 24,
    h: 24
  },
  fist: {
    url: 'fist.png',
    // by Pokemon Showdown user SailorCosmos
    w: 55,
    h: 49
  },
  foot: {
    url: 'foot.png',
    // by Pokemon Showdown user SailorCosmos
    w: 50,
    h: 75
  },
  topbite: {
    url: 'topbite.png',
    w: 108,
    h: 64
  },
  bottombite: {
    url: 'bottombite.png',
    w: 108,
    h: 64
  },
  web: {
    url: 'web.png',
    // by Pokemon Showdown user SailorCosmos
    w: 120,
    h: 122
  },
  leftclaw: {
    url: 'leftclaw.png',
    w: 44,
    h: 60
  },
  rightclaw: {
    url: 'rightclaw.png',
    w: 44,
    h: 60
  },
  rightslash: {
    url: 'rightslash.png',
    // by Pokemon Showdown user Modeling Clay
    w: 57,
    h: 56
  },
  angry: {
    url: 'angry.png',
    // by Pokemon Showdown user SailorCosmos
    w: 30,
    h: 30
  },
  heart: {
    url: 'heart.png',
    // by Pokemon Showdown user SailorCosmos
    w: 30,
    h: 30
  },
  impact: {
    url: 'impact.png',
    // by Pokemon Showdown user SailorCosmos
    w: 127,
    h: 119
  },
  shine: {
    url: 'shine.png',
    // by Smogon user Jajoken
    w: 127,
    h: 119
  },
  alpha: {
    url: 'alpha.png',
    // Ripped from Pokemon Global Link
    w: 80,
    h: 80
  },
  omega: {
    url: 'omega.png',
    // Ripped from Pokemon Global Link
    w: 80,
    h: 80
  },
  rainbow: {
    url: 'rainbow.png',
    w: 128,
    h: 128
  },
  zsymbol: {
    url: 'z-symbol.png',
    // From http://froggybutt.deviantart.com/art/Pokemon-Z-Move-symbol-633125033
    w: 150,
    h: 100
  },
  ultra: {
    url: 'ultra.png',
    // by Pokemon Showdown user Modeling Clay
    w: 113,
    h: 165
  },
  hitmark: {
    url: 'hitmarker.png',
    // by Pokemon Showdown user Ridaz
    w: 100,
    h: 100
  },
  protect: {
    rawHTML: '<div class="turnstatus-protect" style="display:none;position:absolute" />',
    w: 100,
    h: 70
  },
  auroraveil: {
    rawHTML: '<div class="sidecondition-auroraveil" style="display:none;position:absolute" />',
    w: 100,
    h: 50
  },
  reflect: {
    rawHTML: '<div class="sidecondition-reflect" style="display:none;position:absolute" />',
    w: 100,
    h: 50
  },
  safeguard: {
    rawHTML: '<div class="sidecondition-safeguard" style="display:none;position:absolute" />',
    w: 100,
    h: 50
  },
  lightscreen: {
    rawHTML: '<div class="sidecondition-lightscreen" style="display:none;position:absolute" />',
    w: 100,
    h: 50
  },
  mist: {
    rawHTML: '<div class="sidecondition-mist" style="display:none;position:absolute" />',
    w: 100,
    h: 50
  }
};
(() => {
  if (!window.Dex || !Dex.resourcePrefix) return;
  for (const id in BattleEffects) {
    if (!BattleEffects[id].url) continue;
    BattleEffects[id].url = Dex.fxPrefix + BattleEffects[id].url;
  }
})();
const BattleBackdropsThree = ['bg-gen3.png', 'bg-gen3-cave.png', 'bg-gen3-ocean.png', 'bg-gen3-sand.png', 'bg-gen3-forest.png', 'bg-gen3-arena.png'];
const BattleBackdropsFour = ['bg-gen4.png', 'bg-gen4-cave.png', 'bg-gen4-snow.png', 'bg-gen4-indoors.png', 'bg-gen4-water.png'];
const BattleBackdropsFive = ['bg-beach.png', 'bg-beachshore.png', 'bg-desert.png', 'bg-meadow.png', 'bg-thunderplains.png', 'bg-city.png', 'bg-earthycave.png', 'bg-mountain.png', 'bg-volcanocave.png', 'bg-dampcave.png', 'bg-forest.png', 'bg-river.png', 'bg-deepsea.png', 'bg-icecave.png', 'bg-route.png'];
const BattleBackdrops = ['bg-aquacordetown.jpg', 'bg-beach.jpg', 'bg-city.jpg', 'bg-dampcave.jpg', 'bg-darkbeach.jpg', 'bg-darkcity.jpg', 'bg-darkmeadow.jpg', 'bg-deepsea.jpg', 'bg-desert.jpg', 'bg-earthycave.jpg', 'bg-elite4drake.jpg', 'bg-forest.jpg', 'bg-icecave.jpg', 'bg-leaderwallace.jpg', 'bg-library.jpg', 'bg-meadow.jpg', 'bg-orasdesert.jpg', 'bg-orassea.jpg', 'bg-skypillar.jpg'];
const BattleOtherAnims = {
  hitmark: {
    anim(scene, [attacker]) {
      scene.showEffect('hitmark', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1
      }, {
        opacity: 0.5,
        time: 250
      }, 'linear', 'fade');
    }
  },
  attack: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 1
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(40),
        scale: 1,
        opacity: 0.5
      }, 'linear');
    }
  },
  contactattack: {
    anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    }
  },
  xattack: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear');
      defender.delay(480);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
    }
  },
  slashattack: {
    anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('rightslash', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 500
      }, {
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear', 'fade');
    }
  },
  clawattack: {
    anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic');
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        x: defender.leftof(30),
        y: defender.y + 80,
        z: defender.behind(-30),
        time: 200
      }, 'ballisticUp');
      attacker.anim({
        x: defender.leftof(-30),
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.showEffect('leftclaw', {
        x: defender.x - 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('leftclaw', {
        x: defender.x - 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.x - 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('rightclaw', {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.x + 20,
        y: defender.y + 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
      scene.showEffect('rightclaw', {
        x: defender.x + 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 700
      }, {
        x: defender.x + 20,
        y: defender.y - 20,
        z: defender.z,
        scale: 3,
        opacity: 0,
        time: 1000
      }, 'linear', 'fade');
    }
  },
  punchattack: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-15),
        y: defender.y,
        z: defender.behind(15),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  bite: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('topbite', {
        x: defender.x,
        y: defender.y + 50,
        z: defender.z,
        scale: 0.5,
        opacity: 0,
        time: 370
      }, {
        x: defender.x,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('bottombite', {
        x: defender.x,
        y: defender.y - 50,
        z: defender.z,
        scale: 0.5,
        opacity: 0,
        time: 370
      }, {
        x: defender.x,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.5,
        opacity: 1,
        time: 500
      }, 'linear', 'fade');
    }
  },
  kick: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('foot', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.x,
        y: defender.y - 20,
        z: defender.behind(15),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
    }
  },
  fastattack: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 260
      }, {
        scale: 2,
        opacity: 0,
        time: 560
      }, 'linear');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 310
      }, {
        scale: 2,
        opacity: 0,
        time: 610
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(70),
        time: 300,
        opacity: 0.5
      }, 'accel');
      attacker.anim({
        x: defender.x,
        y: defender.x,
        z: defender.behind(100),
        opacity: 0,
        time: 100
      }, 'linear');
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(70),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        opacity: 1,
        time: 500
      }, 'decel');
      defender.delay(260);
      defender.anim({
        z: defender.behind(30),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  fastanimattack: {
    anim(scene, [attacker, defender]) {
      attacker.anim({
        z: attacker.behind(-70),
        time: 50,
        opacity: 1
      }, 'decel');
      attacker.anim({
        opacity: 1,
        time: 150
      }, 'accel');
      defender.anim({
        z: defender.behind(30),
        time: 70
      }, 'decel');
      defender.anim({
        time: 170
      }, 'accel');
    }
  },
  fastanimspecial: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.8,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 100
      }, 'decel');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.8,
        time: 70
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 170
      }, 'decel');
      defender.anim({
        z: defender.behind(30),
        time: 70
      }, 'decel');
      defender.anim({
        time: 170
      }, 'accel');
    }
  },
  fastanimself: {
    anim(scene, [attacker, defender]) {
      attacker.anim({
        scale: 1.5,
        time: 50
      }, 'decel');
      attacker.anim({
        time: 170
      }, 'accel');
    }
  },
  sneakattack: {
    anim(scene, [attacker, defender]) {
      attacker.anim({
        x: attacker.leftof(-20),
        y: attacker.y,
        z: attacker.behind(-20),
        opacity: 0,
        time: 200
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-120),
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(40),
        opacity: 1,
        time: 250
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        opacity: 0,
        time: 300
      }, 'linear');
      attacker.anim({
        opacity: 0,
        time: 1
      }, 'linear');
      attacker.anim({
        time: 300,
        opacity: 1
      }, 'linear');
      defender.delay(330);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  spinattack: {
    anim(scene, [attacker, defender]) {
      attacker.anim({
        x: defender.x,
        y: defender.y + 60,
        z: defender.behind(-30),
        time: 400
      }, 'ballistic2');
      attacker.anim({
        x: defender.x,
        y: defender.y + 5,
        z: defender.z,
        time: 100
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(450);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
      scene.wait(500);
    }
  },
  bound: {
    anim(scene, [attacker]) {
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y + 15,
        z: attacker.z,
        scale: 0.7,
        xscale: 2,
        opacity: 0.3,
        time: 0
      }, {
        scale: 0.4,
        xscale: 1,
        opacity: 0.1,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y - 5,
        z: attacker.z,
        scale: 0.7,
        xscale: 2,
        opacity: 0.3,
        time: 50
      }, {
        scale: 0.4,
        xscale: 1,
        opacity: 0.1,
        time: 550
      }, 'decel', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0.7,
        xscale: 2,
        opacity: 0.3,
        time: 100
      }, {
        scale: 0.4,
        xscale: 1,
        opacity: 0.1,
        time: 600
      }, 'decel', 'fade');
      attacker.anim({
        y: attacker.y + 15,
        z: attacker.behind(10),
        yscale: 1.3,
        time: 200
      }, 'swing');
      attacker.anim({
        time: 200
      }, 'swing');
      attacker.delay(25);
      attacker.anim({
        x: attacker.leftof(-10),
        y: attacker.y + 15,
        z: attacker.behind(5),
        yscale: 1.3,
        time: 200
      }, 'swing');
      attacker.anim({
        time: 200
      }, 'swing');
    }
  },
  selfstatus: {
    anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0,
        opacity: 1,
        time: 300
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 200
      }, {
        scale: 0,
        opacity: 1,
        time: 500
      }, 'linear');
    }
  },
  lightstatus: {
    anim(scene, [attacker]) {
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.1,
        time: 0
      }, {
        scale: 0,
        opacity: 0.5,
        time: 600
      }, 'linear');
    }
  },
  chargestatus: {
    anim(scene, [attacker]) {
      scene.showEffect('electroball', {
        x: attacker.x - 60,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 60,
        y: attacker.y - 5,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 30,
        y: attacker.y + 60,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 20,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 70,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 500
      }, 'linear', 'fade');
    }
  },
  heal: {
    anim(scene, [attacker]) {
      scene.showEffect('iceball', {
        x: attacker.x + 30,
        y: attacker.y + 5,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.7,
        time: 200
      }, {
        x: attacker.x + 40,
        y: attacker.y + 10,
        opacity: 0,
        time: 600
      }, 'accel');
      scene.showEffect('iceball', {
        x: attacker.x - 30,
        y: attacker.y - 10,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.7,
        time: 300
      }, {
        x: attacker.x - 40,
        y: attacker.y - 20,
        opacity: 0,
        time: 700
      }, 'accel');
      scene.showEffect('iceball', {
        x: attacker.x + 15,
        y: attacker.y + 10,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.7,
        time: 400
      }, {
        x: attacker.x + 25,
        y: attacker.y + 20,
        opacity: 0,
        time: 800
      }, 'accel');
      scene.showEffect('iceball', {
        x: attacker.x - 15,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.7,
        time: 500
      }, {
        x: attacker.x - 25,
        y: attacker.y - 40,
        opacity: 0,
        time: 900
      }, 'accel');
    }
  },
  shiny: {
    anim(scene, [attacker]) {
      scene.backgroundEffect('#000000', 800, 0.3, 100);
      scene.showEffect('shine', {
        x: attacker.x + 5,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.1,
        opacity: 0.7,
        time: 450
      }, {
        y: attacker.y + 35,
        opacity: 0,
        time: 675
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x + 15,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.7,
        time: 475
      }, {
        x: attacker.x + 25,
        y: attacker.y + 30,
        opacity: 0,
        time: 700
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x - 15,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.7,
        time: 500
      }, {
        x: attacker.x - 25,
        y: attacker.y + 30,
        opacity: 0,
        time: 725
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x - 20,
        y: attacker.y + 5,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.7,
        time: 550
      }, {
        x: attacker.x - 30,
        y: attacker.y - 5,
        opacity: 0,
        time: 775
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x + 15,
        y: attacker.y + 10,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.7,
        time: 650
      }, {
        x: attacker.x + 35,
        y: attacker.y - 5,
        opacity: 0,
        time: 875
      }, 'decel');
      scene.showEffect('shine', {
        x: attacker.x + 5,
        y: attacker.y - 5,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.7,
        time: 675
      }, {
        y: attacker.y - 20,
        opacity: 0,
        time: 900
      }, 'decel');
    }
  },
  flight: {
    anim(scene, [attacker, defender]) {
      attacker.anim({
        x: attacker.leftof(-200),
        y: attacker.y + 80,
        z: attacker.z,
        opacity: 0,
        time: 350
      }, 'accel');
      attacker.anim({
        x: defender.leftof(-200),
        y: defender.y + 80,
        z: defender.z,
        time: 1
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 1,
        time: 350
      }, 'accel');
      scene.showEffect('wisp', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 700
      }, {
        scale: 2,
        opacity: 0,
        time: 900
      }, 'linear');
      attacker.anim({
        x: defender.leftof(100),
        y: defender.y - 40,
        z: defender.z,
        opacity: 0,
        time: 175
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.behind(40),
        time: 1
      });
      attacker.anim({
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 250
      }, 'decel');
      defender.delay(700);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  shake: {
    anim(scene, [attacker]) {
      attacker.anim({
        x: attacker.x - 10,
        time: 200
      });
      attacker.anim({
        x: attacker.x + 10,
        time: 300
      });
      attacker.anim({
        x: attacker.x,
        time: 200
      });
    }
  },
  dance: {
    anim(scene, [attacker]) {
      attacker.anim({
        x: attacker.x - 10
      });
      attacker.anim({
        x: attacker.x + 10
      });
      attacker.anim({
        x: attacker.x
      });
    }
  },
  consume: {
    anim(scene, [defender]) {
      scene.showEffect('wisp', {
        x: defender.leftof(-25),
        y: defender.y + 40,
        z: defender.behind(-20),
        scale: 0.5,
        opacity: 1
      }, {
        x: defender.leftof(-15),
        y: defender.y + 35,
        z: defender.z,
        scale: 0,
        opacity: 0.2,
        time: 500
      }, 'swing', 'fade');
      defender.delay(400);
      defender.anim({
        y: defender.y + 5,
        yscale: 1.1,
        time: 200
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
      defender.anim({
        y: defender.y + 5,
        yscale: 1.1,
        time: 200
      }, 'swing');
      defender.anim({
        time: 200
      }, 'swing');
    }
  },
  leech: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: defender.x - 30,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.2,
        opacity: 0.7,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 500,
        opacity: 0.1
      }, 'ballistic2', 'fade');
      scene.showEffect('energyball', {
        x: defender.x + 40,
        y: defender.y - 35,
        z: defender.z,
        scale: 0.2,
        opacity: 0.7,
        time: 50
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 550,
        opacity: 0.1
      }, 'linear', 'fade');
      scene.showEffect('energyball', {
        x: defender.x + 20,
        y: defender.y - 25,
        z: defender.z,
        scale: 0.2,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 600,
        opacity: 0.1
      }, 'ballistic2Under', 'fade');
    }
  },
  drain: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 500,
        opacity: 0
      }, 'ballistic2');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 50
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 550,
        opacity: 0
      }, 'linear');
      scene.showEffect('energyball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.6,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        time: 600,
        opacity: 0
      }, 'ballistic2Under');
    }
  },
  hydroshot: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3
      }, {
        x: defender.x + 10,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3,
        time: 75
      }, {
        x: defender.x - 10,
        y: defender.y - 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.3,
        time: 150
      }, {
        x: defender.x,
        y: defender.y + 5,
        z: defender.behind(30),
        scale: 1,
        opacity: 0.6
      }, 'decel', 'explode');
    }
  },
  sound: {
    anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 0
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 150
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.7,
        time: 300
      }, {
        z: attacker.behind(-50),
        scale: 5,
        opacity: 0,
        time: 800
      }, 'linear');
    }
  },
  gravity: {
    anim(scene, [attacker]) {
      attacker.anim({
        y: attacker.y - 20,
        yscale: 0.5,
        time: 300
      }, 'decel');
      attacker.delay(200);
      attacker.anim({
        time: 300
      });
    }
  },
  futuresighthit: {
    anim(scene, [defender]) {
      scene.backgroundEffect('#AA44BB', 250, 0.6);
      scene.backgroundEffect('#AA44FF', 250, 0.6, 400);
      defender.anim({
        scale: 1.2,
        time: 100
      });
      defender.anim({
        scale: 1,
        time: 100
      });
      defender.anim({
        scale: 1.4,
        time: 150
      });
      defender.anim({
        scale: 1,
        time: 150
      });
      scene.wait(700);
    }
  },
  doomdesirehit: {
    anim(scene, [defender]) {
      scene.backgroundEffect('#ffffff', 600, 0.6);
      scene.showEffect('fireball', {
        x: defender.x + 40,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.6
      }, {
        scale: 6,
        opacity: 0
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x - 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 150
      }, {
        scale: 6,
        opacity: 0
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x + 10,
        y: defender.y + 20,
        z: defender.z,
        scale: 0,
        opacity: 0.6,
        time: 300
      }, {
        scale: 6,
        opacity: 0
      }, 'linear');
      defender.delay(100);
      defender.anim({
        x: defender.x - 30,
        time: 75
      });
      defender.anim({
        x: defender.x + 30,
        time: 100
      });
      defender.anim({
        x: defender.x - 30,
        time: 100
      });
      defender.anim({
        x: defender.x + 30,
        time: 100
      });
      defender.anim({
        x: defender.x,
        time: 100
      });
    }
  },
  itemoff: {
    anim(scene, [defender]) {
      scene.showEffect('pokeball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1
      }, {
        x: defender.x,
        y: defender.y + 40,
        z: defender.behind(70),
        opacity: 0,
        time: 400
      }, 'ballistic2');
    }
  },
  anger: {
    anim(scene, [attacker]) {
      scene.showEffect('angry', {
        x: attacker.x + 20,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 0
      }, {
        scale: 1,
        opacity: 1,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('angry', {
        x: attacker.x - 20,
        y: attacker.y + 10,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 100
      }, {
        scale: 1,
        opacity: 1,
        time: 400
      }, 'ballistic2Under', 'fade');
      scene.showEffect('angry', {
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 200
      }, {
        scale: 1,
        opacity: 1,
        time: 500
      }, 'ballistic2Under', 'fade');
    }
  },
  bidecharge: {
    anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x + 30,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 0
      }, {
        y: attacker.y + 60,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 30,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 100
      }, {
        y: attacker.y + 60,
        opacity: 0.2,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x + 15,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 200
      }, {
        y: attacker.y + 60,
        opacity: 0.2,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 15,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 300
      }, {
        y: attacker.y + 60,
        opacity: 0.2,
        time: 700
      }, 'linear', 'fade');
      attacker.anim({
        x: attacker.x - 2.5,
        time: 75
      }, 'swing');
      attacker.anim({
        x: attacker.x + 2.5,
        time: 75
      }, 'swing');
      attacker.anim({
        x: attacker.x - 2.5,
        time: 75
      }, 'swing');
      attacker.anim({
        x: attacker.x + 2.5,
        time: 75
      }, 'swing');
      attacker.anim({
        x: attacker.x - 2.5,
        time: 75
      }, 'swing');
      attacker.anim({
        time: 100
      }, 'accel');
    }
  },
  bideunleash: {
    anim(scene, [attacker]) {
      scene.showEffect('fireball', {
        x: attacker.x + 40,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.6
      }, {
        scale: 6,
        opacity: 0
      }, 'linear');
      scene.showEffect('fireball', {
        x: attacker.x - 40,
        y: attacker.y - 20,
        z: attacker.z,
        scale: 0,
        opacity: 0.6,
        time: 150
      }, {
        scale: 6,
        opacity: 0
      }, 'linear');
      scene.showEffect('fireball', {
        x: attacker.x + 10,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0,
        opacity: 0.6,
        time: 300
      }, {
        scale: 6,
        opacity: 0
      }, 'linear');
      attacker.anim({
        x: attacker.x - 30,
        time: 75
      });
      attacker.anim({
        x: attacker.x + 30,
        time: 100
      });
      attacker.anim({
        x: attacker.x - 30,
        time: 100
      });
      attacker.anim({
        x: attacker.x + 30,
        time: 100
      });
      attacker.anim({
        x: attacker.x - 30,
        time: 100
      });
      attacker.anim({
        x: attacker.x + 30,
        time: 100
      });
      attacker.anim({
        x: attacker.x,
        time: 100
      });
    }
  },
  spectralthiefboost: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#000000 30%, #440044', 1400, 0.5);
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.5,
        xscale: 0.5,
        yscale: 1,
        opacity: 0.5
      }, {
        scale: 2,
        xscale: 4,
        opacity: 0.1,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1
      }, {
        x: defender.x + 50,
        scale: 3,
        xscale: 3.5,
        opacity: 0.3,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y - 25,
        z: defender.z,
        scale: 1
      }, {
        x: defender.x - 50,
        scale: 3,
        xscale: 3.5,
        opacity: 0.3,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x + 35,
        y: defender.y,
        z: defender.z,
        opacity: 0.4,
        scale: 0.25,
        time: 50
      }, {
        y: defender.y - 40,
        opacity: 0,
        time: 300
      }, 'accel');
      scene.showEffect('shadowball', {
        x: defender.x - 35,
        y: defender.y,
        z: defender.z,
        opacity: 0.4,
        scale: 0.25,
        time: 100
      }, {
        y: defender.y - 40,
        opacity: 0,
        time: 350
      }, 'accel');
      scene.showEffect('shadowball', {
        x: defender.x + 15,
        y: defender.y,
        z: defender.z,
        opacity: 0.4,
        scale: 0.5,
        time: 150
      }, {
        y: defender.y - 40,
        opacity: 0,
        time: 400
      }, 'accel');
      scene.showEffect('shadowball', {
        x: defender.x + 15,
        y: defender.y,
        z: defender.z,
        opacity: 0.4,
        scale: 0.25,
        time: 200
      }, {
        y: defender.y - 40,
        opacity: 0,
        time: 450
      }, 'accel');
      scene.showEffect('purplewisp', {
        x: defender.x - 50,
        y: defender.y - 40,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 300
      }, {
        x: attacker.x - 50,
        y: attacker.y - 40,
        z: attacker.z,
        time: 900
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x - 50,
        y: defender.y - 40,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 400
      }, {
        x: attacker.x - 50,
        y: attacker.y - 40,
        z: attacker.z,
        time: 900
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: defender.x,
        y: defender.y - 40,
        z: defender.z,
        scale: 2,
        opacity: 0.3,
        time: 450
      }, {
        x: attacker.x,
        y: attacker.y - 40,
        z: attacker.z,
        time: 950
      }, 'decel', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 0,
        xscale: 0.5,
        yscale: 1,
        opacity: 0.5,
        time: 750
      }, {
        scale: 2,
        xscale: 4,
        opacity: 0.1,
        time: 1200
      }, 'decel', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x + 35,
        y: attacker.y - 40,
        z: attacker.z,
        opacity: 0.4,
        scale: 0.25,
        time: 750
      }, {
        y: attacker.y,
        opacity: 0,
        time: 1000
      }, 'decel');
      scene.showEffect('shadowball', {
        x: attacker.x - 35,
        y: attacker.y - 40,
        z: attacker.z,
        opacity: 1,
        scale: 0.25,
        time: 800
      }, {
        y: attacker.y,
        opacity: 0,
        time: 1150
      }, 'decel');
      scene.showEffect('shadowball', {
        x: attacker.x + 15,
        y: attacker.y - 40,
        z: attacker.z,
        opacity: 1,
        scale: 0.25,
        time: 950
      }, {
        y: attacker.y,
        opacity: 0,
        time: 1200
      }, 'decel');
      scene.showEffect('shadowball', {
        x: attacker.x + 15,
        y: attacker.y - 40,
        z: attacker.z,
        opacity: 1,
        scale: 0.25,
        time: 1000
      }, {
        y: attacker.y,
        opacity: 0,
        time: 1350
      }, 'decel');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 2,
        opacity: 1,
        time: 750
      }, {
        x: attacker.x + 75,
        opacity: 0.3,
        time: 1200
      }, 'linear', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 2,
        opacity: 1,
        time: 750
      }, {
        x: attacker.x - 75,
        opacity: 0.3,
        time: 1200
      }, 'linear', 'fade');
      defender.anim({
        x: defender.x - 15,
        time: 75
      });
      defender.anim({
        x: defender.x + 15,
        time: 100
      });
      defender.anim({
        x: defender.x - 15,
        time: 100
      });
      defender.anim({
        x: defender.x + 15,
        time: 100
      });
      defender.anim({
        x: defender.x - 15,
        time: 100
      });
      defender.anim({
        x: defender.x + 15,
        time: 100
      });
      defender.anim({
        x: defender.x,
        time: 100
      });
    }
  },
  schoolingin: {
    anim(scene, [attacker]) {
      scene.backgroundEffect('#0000DD', 600, 0.2);
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2.5,
        opacity: 1
      }, {
        scale: 3,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 3,
        opacity: 0.3
      }, {
        scale: 3.25,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('iceball', {
        x: attacker.leftof(200),
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0,
        time: 200
      }, 'ballistic', 'fade');
      scene.showEffect('iceball', {
        x: attacker.leftof(-140),
        y: attacker.y - 60,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('iceball', {
        x: attacker.leftof(-140),
        y: attacker.y + 50,
        z: attacker.behind(170),
        scale: 0.5,
        opacity: 0.5,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0,
        time: 400
      }, 'ballistic2', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y + 30,
        z: attacker.behind(-250),
        scale: 0.5,
        opacity: 0.5,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0,
        time: 500
      }, 'ballistic', 'fade');
      scene.showEffect('iceball', {
        x: attacker.leftof(240),
        y: attacker.y - 80,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 300
      }, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0,
        time: 600
      }, 'ballistic2Under');
    }
  },
  schoolingout: {
    anim(scene, [attacker]) {
      scene.backgroundEffect('#0000DD', 600, 0.2);
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 3,
        opacity: 1
      }, {
        scale: 2,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('waterwisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 3.25,
        opacity: 0.3
      }, {
        scale: 2.5,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0
      }, {
        x: attacker.leftof(200),
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 200
      }, 'ballistic', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 100
      }, {
        x: attacker.leftof(-140),
        y: attacker.y - 60,
        z: attacker.z,
        opacity: 0.5,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 200
      }, {
        x: attacker.leftof(-140),
        y: attacker.y + 50,
        z: attacker.behind(170),
        opacity: 0.5,
        time: 400
      }, 'ballistic2', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y + 30,
        z: attacker.behind(-250),
        opacity: 0.5,
        time: 500
      }, 'ballistic', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0,
        time: 300
      }, {
        x: attacker.leftof(240),
        y: attacker.y - 80,
        z: attacker.z,
        opacity: 0.5,
        time: 600
      }, 'ballistic2Under');
    }
  },
  primalalpha: {
    anim(scene, [attacker]) {
      scene.backgroundEffect('#0000DD', 500, 0.4);
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0.5,
        opacity: 1,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 300
      }, {
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('alpha', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 300
      }, {
        scale: 2.5,
        opacity: 0,
        time: 600
      }, 'decel');
    }
  },
  primalomega: {
    anim(scene, [attacker]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 500, 0.4);
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0.5,
        opacity: 1,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 300
      }, {
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('omega', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 300
      }, {
        scale: 2.5,
        opacity: 0,
        time: 600
      }, 'decel');
    }
  },
  megaevo: {
    anim(scene, [attacker]) {
      scene.backgroundEffect('#835BA5', 500, 0.6);
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0.2,
        time: 0
      }, {
        scale: 0.5,
        opacity: 1,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('mistball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 300
      }, {
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('rainbow', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 300
      }, {
        scale: 5,
        opacity: 0,
        time: 600
      }, 'linear', 'fade');
    }
  },
  zpower: {
    anim(scene, [attacker]) {
      scene.backgroundEffect('linear-gradient(#000000 20%, #0000DD)', 1800, 0.4);
      scene.showEffect('electroball', {
        x: attacker.x - 60,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 60,
        y: attacker.y - 5,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 30,
        y: attacker.y + 60,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 20,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 70,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('zsymbol', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.7,
        opacity: 1,
        time: 500
      }, {
        scale: 1,
        opacity: 0.5,
        time: 800
      }, 'decel', 'explode');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 800
      }, {
        y: attacker.y + 20,
        scale: 2,
        opacity: 0,
        time: 1200
      }, 'accel');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 1000
      }, {
        y: attacker.y + 20,
        scale: 2,
        opacity: 0,
        time: 1400
      }, 'accel');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 1200
      }, {
        y: attacker.y + 20,
        scale: 2,
        opacity: 0,
        time: 1600
      }, 'accel');
    }
  },
  powerconstruct: {
    anim(scene, [attacker]) {
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      scene.backgroundEffect('#000000', 1000, 0.7);
      for (let i = 0; i < 4; i++) {
        scene.showEffect('energyball', {
          x: attacker.x + 150 * xf[i],
          y: attacker.y - 50,
          z: attacker.z + 70 * yf[i],
          scale: 0.1,
          xscale: 0.5,
          opacity: 0.4
        }, {
          x: attacker.x,
          y: attacker.y - 50,
          z: attacker.z,
          scale: 0.3,
          xscale: 0.8,
          opacity: 0,
          time: 500
        }, 'decel', 'fade');
        scene.showEffect('energyball', {
          x: attacker.x + 200 * xf2[i],
          y: attacker.y - 50,
          z: attacker.z + 90 * yf2[i],
          scale: 0.1,
          xscale: 0.5,
          opacity: 0.4
        }, {
          x: attacker.x,
          y: attacker.y - 50,
          z: attacker.z,
          scale: 0.3,
          xscale: 0.8,
          opacity: 0,
          time: 500
        }, 'decel', 'fade');
        scene.showEffect('energyball', {
          x: attacker.x + 50 * xf[i],
          y: attacker.y - 50,
          z: attacker.z + 100 * yf[i],
          scale: 0.1,
          xscale: 0.5,
          opacity: 0.4,
          time: 200
        }, {
          x: attacker.x,
          y: attacker.y - 50,
          z: attacker.z,
          scale: 0.3,
          xscale: 0.8,
          opacity: 0,
          time: 500
        }, 'decel', 'fade');
        scene.showEffect('energyball', {
          x: attacker.x + 100 * xf2[i],
          y: attacker.y - 50,
          z: attacker.z + 90 * yf2[i],
          scale: 0.1,
          xscale: 0.5,
          opacity: 0.4,
          time: 200
        }, {
          x: attacker.x,
          y: attacker.y - 50,
          z: attacker.z,
          scale: 0.3,
          xscale: 0.8,
          opacity: 0,
          time: 500
        }, 'decel', 'fade');
      }
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 3,
        opacity: 0,
        time: 50
      }, {
        scale: 1,
        opacity: 0.8,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 3.5,
        opacity: 0,
        time: 150
      }, {
        scale: 1.5,
        opacity: 1,
        time: 350
      }, 'linear', 'fade');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 200
      }, {
        scale: 3,
        opacity: 0,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y - 25,
        z: attacker.z,
        scale: 1,
        opacity: 0.6,
        time: 100
      }, {
        scale: 3.5,
        opacity: 0.8,
        time: 500
      }, 'linear', 'explode');
    }
  },
  ultraburst: {
    anim(scene, [attacker]) {
      scene.backgroundEffect('#000000', 600, 0.5);
      scene.backgroundEffect('#ffffff', 500, 1, 550);
      scene.showEffect('wisp', {
        x: attacker.x - 60,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 150
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x + 60,
        y: attacker.y - 5,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 150
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 30,
        y: attacker.y + 60,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 250
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x + 20,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 250
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 70,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 0.7,
        opacity: 0.7,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 0.2,
        opacity: 0.2,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.5,
        opacity: 1
      }, {
        scale: 4,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0
      }, {
        scale: 2.25,
        opacity: 0.1,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('energyball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 2,
        opacity: 0,
        time: 200
      }, {
        scale: 2.25,
        opacity: 0.1,
        time: 600
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 6,
        opacity: 0.2
      }, {
        scale: 1,
        opacity: 0,
        time: 300
      }, 'linear');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 6,
        opacity: 0.2,
        time: 150
      }, {
        scale: 1,
        opacity: 0,
        time: 450
      }, 'linear');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 6,
        opacity: 0.2,
        time: 300
      }, {
        scale: 1,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('ultra', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 600
      }, {
        scale: 1,
        opacity: 0,
        time: 900
      }, 'decel');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y - 60,
        z: attacker.z,
        scale: 0.5,
        xscale: 0.25,
        yscale: 0,
        opacity: 0.5,
        time: 600
      }, {
        scale: 2,
        xscale: 6,
        yscale: 1,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('iceball', {
        x: attacker.x,
        y: attacker.y - 60,
        z: attacker.z,
        scale: 0.5,
        xscale: 0.25,
        yscale: 0.75,
        opacity: 0.5,
        time: 800
      }, {
        scale: 2,
        xscale: 6,
        opacity: 0.1,
        time: 1000
      }, 'linear');
    }
  }
};
const BattleStatusAnims = {
  brn: {
    anim(scene, [attacker]) {
      scene.showEffect('fireball', {
        x: attacker.x - 20,
        y: attacker.y - 15,
        z: attacker.z,
        scale: 0.2,
        opacity: 0.3
      }, {
        x: attacker.x + 40,
        y: attacker.y + 15,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 300
      }, 'swing', 'fade');
    }
  },
  psn: {
    anim(scene, [attacker]) {
      scene.showEffect('purplewisp', {
        x: attacker.x + 30,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 0
      }, {
        y: attacker.y,
        scale: 1,
        opacity: 0.5,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x - 30,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 100
      }, {
        y: attacker.y,
        scale: 1,
        opacity: 0.5,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y - 40,
        z: attacker.z,
        scale: 0.2,
        opacity: 1,
        time: 200
      }, {
        y: attacker.y,
        scale: 1,
        opacity: 0.5,
        time: 500
      }, 'decel', 'fade');
    }
  },
  slp: {
    anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1
      }, {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1.5,
        opacity: 1,
        time: 400
      }, 'ballistic2Under', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.1,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y + 20,
        z: attacker.behind(-50),
        scale: 1.5,
        opacity: 1,
        time: 600
      }, 'ballistic2Under', 'fade');
    }
  },
  par: {
    anim(scene, [attacker]) {
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1.5,
        opacity: 0.2
      }, {
        scale: 2,
        opacity: 0.1,
        time: 300
      }, 'linear', 'fade');
      attacker.delay(100);
      attacker.anim({
        x: attacker.x - 1,
        time: 75
      }, 'swing');
      attacker.anim({
        x: attacker.x + 1,
        time: 75
      }, 'swing');
      attacker.anim({
        x: attacker.x - 1,
        time: 75
      }, 'swing');
      attacker.anim({
        x: attacker.x + 1,
        time: 75
      }, 'swing');
      attacker.anim({
        x: attacker.x - 1,
        time: 75
      }, 'swing');
      attacker.anim({
        time: 100
      }, 'accel');
    }
  },
  frz: {
    anim(scene, [attacker]) {
      scene.showEffect('icicle', {
        x: attacker.x - 30,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 200
      }, {
        scale: 0.9,
        opacity: 0,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('icicle', {
        x: attacker.x,
        y: attacker.y - 30,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 300
      }, {
        scale: 0.9,
        opacity: 0,
        time: 650
      }, 'linear', 'fade');
      scene.showEffect('icicle', {
        x: attacker.x + 15,
        y: attacker.y,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 400
      }, {
        scale: 0.9,
        opacity: 0,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.5
      }, {
        scale: 3,
        opacity: 0,
        time: 600
      }, 'linear', 'fade');
    }
  },
  flinch: {
    anim(scene, [attacker]) {
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2
      }, {
        scale: 3,
        opacity: 0.1,
        time: 300
      }, 'linear', 'fade');
    }
  },
  attracted: {
    anim(scene, [attacker]) {
      scene.showEffect('heart', {
        x: attacker.x + 20,
        y: attacker.y + 20,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 0
      }, {
        scale: 1,
        opacity: 1,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('heart', {
        x: attacker.x - 20,
        y: attacker.y + 10,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 100
      }, {
        scale: 1,
        opacity: 1,
        time: 400
      }, 'ballistic2Under', 'fade');
      scene.showEffect('heart', {
        x: attacker.x,
        y: attacker.y + 40,
        z: attacker.z,
        scale: 0.5,
        opacity: 0.5,
        time: 200
      }, {
        scale: 1,
        opacity: 1,
        time: 500
      }, 'ballistic2Under', 'fade');
    }
  },
  cursed: {
    anim(scene, [attacker]) {
      scene.backgroundEffect('#000000', 700, 0.2);
      attacker.delay(300);
      attacker.anim({
        x: attacker.x - 5,
        time: 50
      });
      attacker.anim({
        x: attacker.x + 5,
        time: 50
      });
      attacker.anim({
        x: attacker.x - 5,
        time: 50
      });
      attacker.anim({
        x: attacker.x + 5,
        time: 50
      });
      attacker.anim({
        x: attacker.x,
        time: 50
      });
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.5,
        time: 0
      }, {
        z: attacker.behind(20),
        opacity: 0,
        time: 600
      }, 'decel');
    }
  },
  confused: {
    anim(scene, [attacker]) {
      scene.showEffect('electroball', {
        x: attacker.x + 50,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.1,
        opacity: 1,
        time: 400
      }, {
        x: attacker.x - 50,
        scale: 0.15,
        opacity: 0.4,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 50,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.1,
        opacity: 1,
        time: 400
      }, {
        x: attacker.x + 50,
        scale: 0.15,
        opacity: 0.4,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x + 50,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.1,
        opacity: 1,
        time: 600
      }, {
        x: attacker.x - 50,
        scale: 0.4,
        opacity: 0.4,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x - 50,
        y: attacker.y + 30,
        z: attacker.z,
        scale: 0.15,
        opacity: 1,
        time: 600
      }, {
        x: attacker.x + 50,
        scale: 0.4,
        opacity: 0.4,
        time: 800
      }, 'linear', 'fade');
    }
  },
  confusedselfhit: {
    anim(scene, [attacker]) {
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5
      }, {
        scale: 2,
        opacity: 0,
        time: 200
      }, 'linear');
      attacker.delay(50);
      attacker.anim({
        x: attacker.leftof(2),
        z: attacker.behind(5),
        time: 100
      }, 'swing');
      attacker.anim({
        time: 300
      }, 'swing');
    }
  }
};
BattleStatusAnims['focuspunch'] = {
  anim: BattleStatusAnims['flinch'].anim
};
/**
 * Pokemon Showdown Move Animations
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license CC0-1.0
 */

// Classroom extraction: only the supported move animations.
const BattleMoveAnims = {
  bravebird: {
    anim: BattleOtherAnims.flight.anim
  },
  dragonpulse: {
    anim(scene, [attacker, defender]) {
      let xstep = (defender.x - attacker.x) / 5;
      let ystep = (defender.y - attacker.y) / 5;
      let zstep = (defender.z - attacker.z) / 5;
      for (let i = 0; i < 5; i++) {
        scene.showEffect('wisp', {
          x: attacker.x + xstep * (i + 1),
          y: attacker.y + ystep * (i + 1),
          z: attacker.z + zstep * (i + 1),
          scale: 1,
          opacity: 1,
          time: 20 * i
        }, {
          scale: 2,
          opacity: 0,
          time: 40 * i + 600
        }, 'linear');
        scene.showEffect('purplewisp', {
          x: attacker.x + xstep * (i + 1),
          y: attacker.y + ystep * (i + 1),
          z: attacker.z + zstep * (i + 1),
          scale: 0.5,
          opacity: 0.3,
          time: 20 * i
        }, {
          scale: 2,
          opacity: 0,
          time: 40 * i + 600
        }, 'linear');
      }
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-15),
        scale: 0.5,
        opacity: 0.6
      }, {
        scale: 0.6,
        opacity: 0.2,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.1,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.1,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        time: 300
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.1,
        time: 200
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        time: 400
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.3,
        opacity: 0.1,
        time: 300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        time: 500
      }, 'linear', 'explode');
    }
  },
  focusblast: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#B84038', 700, 0.6);
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 3,
        opacity: 0.3
      }, {
        scale: 0.6,
        opacity: 1,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 3,
        opacity: 0.3,
        time: 100
      }, {
        scale: 0.8,
        opacity: 0.6,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-30),
        scale: 0.6,
        opacity: 0.8,
        time: 400
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(20),
        scale: 1,
        opacity: 0.8,
        time: 800
      }, 'accel', 'explode');
      defender.delay(800);
      defender.anim({
        z: defender.behind(10),
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  dragonclaw: {
    anim: BattleOtherAnims.clawattack.anim
  },
  shadowclaw: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.3);
      BattleOtherAnims.clawattack.anim(scene, [attacker, defender]);
    }
  },
  pound: {
    anim: BattleOtherAnims.contactattack.anim
  },
  thunderpunch: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('electroball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 3,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect('fist', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-20),
        time: 400
      }, 'ballistic2Under');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 50
      });
      attacker.anim({
        time: 500
      }, 'ballistic2');
      defender.delay(425);
      defender.anim({
        x: defender.leftof(-20),
        y: defender.y,
        z: defender.behind(20),
        time: 50
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  hyperbeam: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.2);
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 200
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 75
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 275
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 350
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 225
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 425
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 550
      }, {
        scale: 4,
        opacity: 0,
        time: 750
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 600
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      defender.delay(125);
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 75
      }, 'swing');
      defender.anim({
        z: defender.behind(5),
        time: 75
      }, 'swing');
      defender.anim({
        time: 150
      }, 'swing');
    }
  },
  gigaimpact: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 700, 0.2);
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 300
      }, {
        scale: 4,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('impact', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.4,
        time: 500
      }, {
        scale: 4,
        opacity: 0,
        time: 800
      }, 'linear');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 350
      }, 'accel', 'fade');
      scene.showEffect(attacker.sp, {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        opacity: 0.3,
        time: 100
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 400
      }, 'accel', 'fade');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  flareblitz: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 600, 0.6);
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        scale: 8,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 1,
        time: 500
      }, {
        scale: 8,
        opacity: 0,
        time: 800
      }, 'linear');
      attacker.anim({
        x: defender.x,
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(280);
      defender.anim({
        z: defender.behind(20),
        time: 100
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  outrage: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 600, 0.6, 400);
      scene.showEffect('angry', {
        x: attacker.x - 10,
        y: attacker.y + 50,
        z: attacker.z,
        scale: 0.5,
        opacity: 1,
        time: 0
      }, {
        scale: 3,
        opacity: 0,
        time: 300
      }, 'ballistic2Under', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 0
      }, {
        x: attacker.x - 50,
        y: attacker.y - 50,
        scale: 2,
        opacity: 0,
        time: 300
      }, 'ballistic');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 150
      }, {
        x: attacker.x + 60,
        y: attacker.y - 50,
        scale: 2,
        opacity: 0,
        time: 450
      }, 'ballistic');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 1,
        time: 300
      }, {
        x: attacker.x + 10,
        y: attacker.y - 60,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'ballistic');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 600
      }, {
        scale: 4,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('flareball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0,
        opacity: 0.5,
        time: 800
      }, {
        scale: 4,
        opacity: 0,
        time: 1100
      }, 'linear');
      attacker.delay(300);
      attacker.anim({
        x: defender.leftof(20),
        y: defender.y,
        z: defender.behind(-5),
        time: 300
      }, 'accel');
      attacker.anim({
        time: 500
      }, 'ballistic2Back');
      defender.delay(580);
      defender.anim({
        z: defender.behind(20),
        time: 200
      }, 'decel');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  earthquake: {
    anim(scene, [attacker, ...defenders]) {
      scene.$bg.animate({
        top: -90,
        bottom: 0
      }, 75).animate({
        top: -100,
        bottom: -10
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -95,
        bottom: -5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -95,
        bottom: -5
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -92,
        bottom: -2
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100).animate({
        top: -92,
        bottom: -2
      }, 100).animate({
        top: -90,
        bottom: 0
      }, 100);
      attacker.anim({
        y: attacker.y - 10,
        yscale: 1,
        time: 75
      });
      attacker.anim({
        y: attacker.y + 10,
        yscale: 0.9,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 7,
        yscale: 1,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 7,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 7,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 7,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 7,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 7,
        time: 100
      });
      attacker.anim({
        y: attacker.y - 2,
        time: 100
      });
      attacker.anim({
        y: attacker.y + 2,
        time: 100
      });
      attacker.anim({
        y: attacker.y,
        time: 100
      });
      for (const defender of defenders) {
        defender.anim({
          y: defender.y - 10,
          time: 75
        });
        defender.anim({
          y: defender.y + 10,
          time: 100
        });
        defender.anim({
          y: defender.y - 7,
          time: 100
        });
        defender.anim({
          y: defender.y + 7,
          time: 100
        });
        defender.anim({
          y: defender.y - 7,
          time: 100
        });
        defender.anim({
          y: defender.y + 7,
          time: 100
        });
        defender.anim({
          y: defender.y - 7,
          time: 100
        });
        defender.anim({
          y: defender.y + 7,
          time: 100
        });
        defender.anim({
          y: defender.y - 2,
          time: 100
        });
        defender.anim({
          y: defender.y + 2,
          time: 100
        });
        defender.anim({
          y: defender.y,
          time: 100
        });
        scene.showEffect('rock3', {
          x: defender.x + 5,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 0
        }, {
          x: defender.x + 30,
          y: defender.y,
          scale: 0.4,
          opacity: 0,
          time: 350
        }, 'ballistic');
        scene.showEffect('rock3', {
          x: defender.x - 10,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 250
        }, {
          x: defender.x - 35,
          y: defender.y,
          scale: 0.3,
          opacity: 0,
          time: 600
        }, 'ballistic');
        scene.showEffect('rock3', {
          x: defender.x + 40,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 400
        }, {
          x: defender.x + 65,
          y: defender.y,
          scale: 0.3,
          opacity: 0,
          time: 750
        }, 'ballistic2');
        scene.showEffect('rock3', {
          x: defender.x,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.3,
          opacity: 1,
          time: 500
        }, {
          x: defender.x + 40,
          y: defender.y,
          scale: 0.4,
          opacity: 0,
          time: 750
        }, 'ballistic');
      }
    }
  },
  hurricane: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 900, 0.6);
      for (let i = 0; i < 4; i++) {
        scene.showEffect('wisp', {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x - 50,
          y: defender.y + 35,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x + 50,
          y: defender.y,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x - 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
        scene.showEffect('wisp', {
          x: defender.x - 50,
          y: defender.y,
          z: defender.z,
          scale: 0.2,
          opacity: 1,
          time: 200 * i
        }, {
          x: defender.x + 50,
          y: defender.y - 35,
          z: defender.z,
          scale: 0.4,
          opacity: 0.4,
          time: 200 * i + 200
        }, 'linear', 'fade');
      }
    }
  },
  heatwave: {
    anim(scene, [attacker, ...defenders]) {
      for (const defender of defenders) {
        defender.delay(125);
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 75
        }, 'swing');
        defender.anim({
          z: defender.behind(5),
          time: 75
        }, 'swing');
        defender.anim({
          time: 150
        }, 'swing');
      }
      const defender = defenders[1] || defenders[0];
      scene.backgroundEffect('#CC3300', 900, 0.1);
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2.5,
        opacity: 0,
        time: 400
      }, 'linear');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 150
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2.5,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0,
        opacity: 0.5,
        time: 300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2.5,
        opacity: 0,
        time: 800
      }, 'linear');
    }
  },
  thunderbolt: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 600, 0.2);
      scene.showEffect('lightning', {
        x: defender.x,
        y: defender.y + 150,
        z: defender.z,
        yscale: 0,
        xscale: 2
      }, {
        y: defender.y + 50,
        yscale: 1,
        xscale: 1.5,
        opacity: 0.8,
        time: 200
      }, 'linear', 'fade');
      scene.showEffect('lightning', {
        x: defender.x - 15,
        y: defender.y + 150,
        z: defender.z,
        yscale: 0,
        xscale: 2,
        time: 200
      }, {
        y: defender.y + 50,
        yscale: 1,
        xscale: 1.5,
        opacity: 0.8,
        time: 400
      }, 'linear', 'fade');
      scene.showEffect('lightning', {
        x: defender.x + 15,
        y: defender.y + 150,
        z: defender.z,
        yscale: 0,
        xscale: 2,
        time: 400
      }, {
        y: defender.y + 50,
        yscale: 1,
        xscale: 1.5,
        opacity: 0.8,
        time: 600
      }, 'linear', 'fade');
    }
  },
  psychic: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#AA44BB', 250, 0.6);
      scene.backgroundEffect('#AA44FF', 250, 0.6, 400);
      defender.anim({
        scale: 1.2,
        time: 100
      });
      defender.anim({
        scale: 1,
        time: 100
      });
      defender.anim({
        scale: 1.4,
        time: 150
      });
      defender.anim({
        scale: 1,
        time: 150
      });
      scene.wait(700);
    }
  },
  flamethrower: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.6,
        time: 400
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7,
        time: 100
      }, {
        x: defender.x + 10,
        y: defender.y - 5,
        z: defender.behind(0),
        opacity: 0.6,
        time: 500
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7,
        time: 200
      }, {
        x: defender.x - 10,
        y: defender.y + 5,
        z: defender.behind(0),
        opacity: 0.6,
        time: 600
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.7,
        time: 300
      }, {
        x: defender.x,
        y: defender.y - 5,
        z: defender.behind(0),
        opacity: 0.6,
        time: 700
      }, 'decel', 'explode');
    }
  },
  sludgebomb: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 400
      }, 'ballistic', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 100
      }, {
        x: defender.x + 40,
        y: defender.y - 20,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 500
      }, 'ballistic', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.1,
        opacity: 0,
        time: 200
      }, {
        x: defender.x - 30,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.7,
        opacity: 1,
        time: 600
      }, 'ballistic', 'explode');
    }
  },
  fireblast: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 500, 0.7);
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 600, 0.4, 500);
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.2,
        time: 50
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 550
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x,
        y: defender.y + 100,
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x - 60,
        y: defender.y - 80,
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x + 60,
        y: defender.y - 80,
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x - 90,
        y: defender.y + 40,
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      scene.showEffect('fireball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 1,
        time: 500
      }, {
        x: defender.x + 90,
        y: defender.y + 40,
        scale: 3,
        opacity: 0,
        time: 1100
      }, 'linear', 'fade');
      defender.delay(500);
      defender.anim({
        z: defender.behind(10),
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  shadowball: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('#000000', 1000, 0.1);
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y + 100,
        z: attacker.behind(-20),
        scale: 0.5,
        opacity: 0,
        time: 0
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1,
        opacity: 0.8,
        time: 200
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x - 60,
        y: attacker.y - 80,
        z: attacker.behind(-20),
        scale: 0.5,
        opacity: 0,
        time: 50
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1,
        opacity: 0.8,
        time: 300
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x + 60,
        y: attacker.y - 80,
        z: attacker.behind(-20),
        scale: 0.5,
        opacity: 0,
        time: 100
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1,
        opacity: 0.8,
        time: 400
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x - 90,
        y: attacker.y + 40,
        z: attacker.behind(-20),
        scale: 0.5,
        opacity: 0,
        time: 150
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1,
        opacity: 0.8,
        time: 500
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x + 90,
        y: attacker.y + 40,
        z: attacker.behind(-20),
        scale: 0.5,
        opacity: 0,
        time: 200
      }, {
        x: attacker.x,
        y: attacker.y,
        scale: 1,
        opacity: 0.8,
        time: 600
      }, 'decel', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 0,
        time: 0
      }, {
        scale: 0.8,
        opacity: 0.5,
        time: 600
      }, 'decel', 'fade');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0,
        opacity: 0,
        time: 0
      }, {
        scale: 1.5,
        opacity: 0.8,
        time: 600
      }, 'decel', 'fade');
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 0.8,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        time: 900
      }, 'accel', 'explode');
      scene.showEffect('purplewisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.behind(-20),
        scale: 1.5,
        opacity: 0.8,
        time: 600
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        time: 900
      }, 'accel', 'explode');
      defender.delay(900);
      defender.anim({
        z: defender.behind(10),
        time: 200
      }, 'swing');
      defender.anim({
        time: 300
      }, 'swing');
    }
  },
  darkpulse: {
    anim(scene, [attacker, defender]) {
      let xf = [1, -1, 1, -1];
      let yf = [1, -1, -1, 1];
      let xf2 = [1, 0, -1, 0];
      let yf2 = [0, 1, 0, -1];
      scene.backgroundEffect('#000000', 900, 0.3);
      scene.showEffect('shadowball', {
        x: attacker.x,
        y: attacker.y - 50,
        z: attacker.z,
        scale: 1,
        xscale: 5,
        opacity: 0.8,
        time: 0
      }, {
        scale: 2,
        xscale: 8,
        opacity: 0.1,
        time: 800
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 300
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0,
        time: 600
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 500
      }, {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0,
        time: 800
      }, 'linear');
      for (let i = 0; i < 4; i++) {
        scene.showEffect('purplewisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.3,
          opacity: 0.4
        }, {
          x: attacker.x + 240 * xf[i],
          y: attacker.y,
          z: attacker.z + 137 * yf[i],
          scale: 0.7,
          opacity: 0.4,
          time: 600
        }, 'accel', 'fade');
        scene.showEffect('purplewisp', {
          x: attacker.x,
          y: attacker.y,
          z: attacker.z,
          scale: 0.2,
          opacity: 0.4
        }, {
          x: attacker.x + 339 * xf2[i],
          y: attacker.y,
          z: attacker.z + 194 * yf2[i],
          scale: 0.5,
          opacity: 0.4,
          time: 600
        }, 'accel', 'fade');
      }
    }
  },
  airslash: {
    anim(scene, [attacker, defender]) {
      scene.showEffect('wisp', {
        x: defender.x + 60,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.2,
        opacity: 1
      }, {
        x: defender.x - 70,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 200
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 60,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 100
      }, {
        x: defender.x - 70,
        y: defender.y - 40,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 80,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 100
      }, {
        x: defender.x - 50,
        y: defender.y - 60,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 300
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: defender.x + 80,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.2,
        opacity: 1,
        time: 200
      }, {
        x: defender.x - 50,
        y: defender.y - 60,
        z: defender.z,
        scale: 0.4,
        opacity: 0.4,
        time: 400
      }, 'linear', 'fade');
    }
  },
  dracometeor: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect(`url('https://${Config.routes.client}/fx/bg-space.jpg')`, 1100, 0.8);
      scene.showEffect('flareball', {
        x: defender.leftof(-200),
        y: defender.y + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x + 50,
        y: defender.y,
        scale: 1.5,
        opacity: 0.8
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: defender.leftof(-200),
        y: defender.y + 20 + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0,
        time: 150
      }, {
        x: defender.x - 30,
        y: defender.y - 5,
        scale: 1.5,
        opacity: 0.8
      }, 'accel', 'explode');
      scene.showEffect('flareball', {
        x: defender.leftof(-200),
        y: defender.y - 20 + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0,
        time: 300
      }, {
        x: defender.x + 30,
        y: defender.y - 10,
        scale: 1.5,
        opacity: 0.8
      }, 'accel', 'explode');
      scene.showEffect('rock3', {
        x: defender.leftof(-200),
        y: defender.y + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0
      }, {
        x: defender.x + 30,
        y: defender.y,
        scale: 1.5,
        opacity: 0.4
      }, 'accel', 'explode');
      scene.showEffect('rock3', {
        x: defender.leftof(-200),
        y: defender.y + 20 + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0,
        time: 150
      }, {
        x: defender.x - 20,
        y: defender.y - 5,
        scale: 1.5,
        opacity: 0.4
      }, 'accel', 'explode');
      scene.showEffect('rock3', {
        x: defender.leftof(-200),
        y: defender.y - 20 + 175,
        z: defender.z,
        scale: 0.1,
        opacity: 0,
        time: 300
      }, {
        x: defender.x + 20,
        y: defender.y,
        scale: 1.5,
        opacity: 0.4
      }, 'accel', 'explode');
      scene.showEffect('shadowball', {
        x: defender.x + 30,
        y: defender.y - 50,
        z: defender.z,
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 500
      }, {
        scale: 3,
        xscale: 8,
        opacity: 0.1,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 500
      }, {
        scale: 3,
        opacity: 0,
        time: 700
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x - 20,
        y: defender.y - 50,
        z: defender.z,
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 650
      }, {
        scale: 3,
        xscale: 8,
        opacity: 0.1,
        time: 850
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 650
      }, {
        scale: 4,
        opacity: 0,
        time: 850
      }, 'linear');
      scene.showEffect('shadowball', {
        x: defender.x + 20,
        y: defender.y - 50,
        z: defender.z,
        scale: 1,
        xscale: 2,
        opacity: 0.5,
        time: 700
      }, {
        scale: 3,
        xscale: 8,
        opacity: 0.1,
        time: 900
      }, 'linear', 'fade');
      scene.showEffect('shadowball', {
        x: defender.x,
        y: defender.y,
        z: defender.z,
        opacity: 0.3,
        scale: 0,
        time: 700
      }, {
        scale: 4,
        opacity: 0,
        time: 900
      }, 'linear');
      scene.showEffect('rock3', {
        x: defender.leftof(-200),
        y: defender.y - 20 + 150,
        z: defender.z,
        scale: 0.1,
        opacity: 0.6,
        time: 50
      }, {
        x: defender.x - 250,
        y: defender.y - 80,
        z: defender.behind(60),
        scale: 0.8,
        opacity: 0
      }, 'accel', 'fade');
      scene.showEffect('rock3', {
        x: defender.leftof(-220),
        y: defender.y + 20 + 130,
        z: defender.z,
        scale: 0.1,
        opacity: 0.6,
        time: 150
      }, {
        x: defender.x + 80,
        y: defender.y - 50,
        z: defender.behind(30),
        scale: 0.8,
        opacity: 0
      }, 'accel', 'fade');
      scene.showEffect('rock3', {
        x: defender.leftof(-180),
        y: defender.y + 20 + 130,
        z: defender.z,
        scale: 0.1,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x - 200,
        y: defender.y + 20,
        z: defender.behind(30),
        scale: 0.8,
        opacity: 0
      }, 'accel', 'fade');
      defender.delay(500);
      defender.anim({
        x: defender.x + 30,
        z: defender.behind(10),
        time: 75
      });
      defender.anim({
        x: defender.x - 30,
        time: 100
      });
      defender.anim({
        x: defender.x + 30,
        time: 100
      });
      defender.anim({
        x: defender.x - 30,
        z: defender.behind(10),
        time: 100
      });
      defender.anim({
        x: defender.x,
        time: 100
      });
    }
  },
  solarbeam: {
    anim(scene, [attacker, defender]) {
      let xstep = (defender.x - attacker.x) / 5;
      let ystep = (defender.x - 200 - attacker.x) / 5;
      let zstep = (defender.z - attacker.z) / 5;
      scene.backgroundEffect(`url('https://${Config.routes.client}/fx/weather-sunnyday.jpg')`, 900, 0.5);
      for (let i = 0; i < 5; i++) {
        scene.showEffect('energyball', {
          x: attacker.x + xstep * (i + 1),
          y: attacker.y + 200 + ystep * (i + 1),
          z: attacker.z + zstep * (i + 1),
          scale: 0.7,
          opacity: 0.6,
          time: 40 * i + 300
        }, {
          opacity: 0,
          time: 100 * i + 500
        }, 'linear');
      }
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.75,
        opacity: 0.6
      }, {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 1.25,
        opacity: 0,
        time: 200
      }, 'decel');
      scene.showEffect('wisp', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 0.6
      }, {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 1.5,
        opacity: 0,
        time: 200
      }, 'decel');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 300
      }, {
        x: defender.x + 30,
        y: defender.y + 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 500
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 375
      }, {
        x: defender.x + 20,
        y: defender.y - 30,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 575
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 425
      }, {
        x: defender.x - 10,
        y: defender.y + 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 625
      }, 'linear', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 450
      }, {
        x: defender.x - 30,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 650
      }, 'linear', 'explode');
      scene.showEffect('flareball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 500
      }, {
        x: defender.x + 10,
        y: defender.y - 10,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 700
      }, 'linear', 'explode');
      scene.showEffect('electroball', {
        x: attacker.x,
        y: attacker.y + 200,
        z: attacker.z,
        scale: 0.4,
        opacity: 0.6,
        time: 575
      }, {
        x: defender.x - 20,
        y: defender.y,
        z: defender.z,
        scale: 0.6,
        opacity: 0.3,
        time: 775
      }, 'linear', 'explode');
    },
    prepareAnim: BattleOtherAnims.chargestatus.anim
  },
  overheat: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 700, 0.4);
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8
      }, {
        x: defender.x + 60,
        y: defender.y + 40,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8,
        time: 75
      }, {
        x: defender.x + 40,
        y: defender.y - 40,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8,
        time: 150
      }, {
        x: defender.x - 60,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8,
        time: 225
      }, {
        x: defender.x - 20,
        y: defender.y + 10,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('wisp', {
        x: attacker.x + 30,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 100
      }, {
        y: attacker.y + 60,
        opacity: 0.2,
        time: 500
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 30,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 200
      }, {
        y: defender.y + 60,
        opacity: 0.2,
        time: 600
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x + 15,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 300
      }, {
        y: attacker.y + 60,
        opacity: 0.2,
        time: 700
      }, 'linear', 'fade');
      scene.showEffect('wisp', {
        x: attacker.x - 15,
        y: attacker.y,
        z: attacker.z,
        scale: 1,
        opacity: 1,
        time: 400
      }, {
        y: attacker.y + 60,
        opacity: 0.2,
        time: 800
      }, 'linear', 'fade');
      defender.delay(200);
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        time: 100
      }, 'accel');
    }
  },
  blastburn: {
    anim(scene, [attacker, defender]) {
      scene.backgroundEffect('linear-gradient(#390000 30%, #B84038)', 700, 0.4);
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8
      }, {
        x: defender.x + 60,
        y: defender.y + 40,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8,
        time: 75
      }, {
        x: defender.x + 40,
        y: defender.y - 40,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8,
        time: 150
      }, {
        x: defender.x - 60,
        y: defender.y,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      scene.showEffect('fireball', {
        x: attacker.x,
        y: attacker.y,
        z: attacker.z,
        scale: 0.6,
        opacity: 0.8,
        time: 225
      }, {
        x: defender.x - 20,
        y: defender.y + 10,
        z: defender.z,
        scale: 2,
        opacity: 0.5
      }, 'decel', 'explode');
      defender.delay(200);
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x + 5,
        time: 75
      }, 'swing');
      defender.anim({
        x: defender.x - 5,
        time: 75
      }, 'swing');
      defender.anim({
        time: 100
      }, 'accel');
    }
  }
};
BattleMoveAnims.tackle = BattleMoveAnims.pound;
/**
 * Pokemon Showdown Battle
 *
 * This is the main file for handling battle animations
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * Layout:
 *
 * - Battle
 *   - Side
 *     - Pokemon
 *   - BattleScene
 *     - BattleLog
 *       - BattleTextParser
 *
 * When a Battle receives a message, it splits the message into tokens
 * and parses what happens, updating its own state, and then telling
 * BattleScene to do any relevant animations. The tokens then get
 * passed directly into BattleLog. If the message is an in-battle
 * message, it'll be extracted by BattleTextParser, which adds it to
 * both the battle log itself, as well as the messagebar.
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */

// import $ from 'jquery';

/** [id, element?, ...misc] */

class Pokemon {
  name = '';
  speciesForme = '';

  /**
   * A string representing information extractable from textual
   * messages: side, nickname.
   *
   * Will be the empty string between Team Preview and the first
   * switch-in.
   *
   * Examples: `p1: Unown` or `p2: Sparky`
   */
  ident = '';
  /**
   * A string representing visible information not included in
   * ident: species, level, gender, shininess. Level is left off
   * if it's 100; gender is left off if it's genderless.
   *
   * Note: Can be partially filled out in Team Preview, because certain
   * forme information and shininess isn't visible there. In those
   * cases, details can change during the first switch-in, but will
   * otherwise not change over the course of a game.
   *
   * Examples: `Mimikyu, L50, F`, `Steelix, M, shiny`
   */
  details = '';
  /**
   * `` `${ident}|${details}` ``. Tracked for ease of searching.
   *
   * As with ident, blank before the first switch-in, and will only
   * change during the first switch-in.
   */
  searchid = '';
  side;
  slot = 0;
  fainted = false;
  hp = 0;
  maxhp = 1000;
  level = 100;
  gender = 'N';
  shiny = false;
  hpcolor = 'g';
  moves = [];
  ability = '';
  baseAbility = '';
  item = '';
  itemEffect = '';
  prevItem = '';
  prevItemEffect = '';
  nature = undefined;
  terastallized = '';
  teraType = '';
  moddedType = [];
  boosts = {};
  status = '';
  statusStage = 0;
  volatiles = {};
  turnstatuses = {};
  movestatuses = {};
  lastMove = '';

  /** [[moveName, ppUsed]] */
  moveTrack = [];
  statusData = {
    sleepTurns: 0,
    toxicTurns: 0
  };
  timesAttacked = 0;
  sprite;
  constructor(data, side) {
    this.side = side;
    this.speciesForme = data.speciesForme;
    this.details = data.details;
    this.name = data.name;
    this.level = data.level;
    this.shiny = data.shiny;
    this.gender = data.gender || 'N';
    this.ident = data.ident;
    this.terastallized = data.terastallized || '';
    this.searchid = data.searchid;
    this.sprite = side.battle.scene.addPokemonSprite(this);
  }
  isActive() {
    return this.side.active.includes(this);
  }

  /** @deprecated */
  getHPColor() {
    if (this.hpcolor) return this.hpcolor;
    let ratio = this.hp / this.maxhp;
    if (ratio > 0.5) return 'g';
    if (ratio > 0.2) return 'y';
    return 'r';
  }
  /** @deprecated */
  getHPColorClass() {
    switch (this.getHPColor()) {
      case 'y':
        return 'hpbar hpbar-yellow';
      case 'r':
        return 'hpbar hpbar-red';
    }
    return 'hpbar';
  }
  static getPixelRange(pixels, color) {
    let epsilon = 0.5 / 714;
    if (pixels === 0) return [0, 0];
    if (pixels === 1) return [0 + epsilon, 2 / 48 - epsilon];
    if (color) {
      if (pixels === 9) {
        if (color === 'y') {
          // ratio is > 0.2
          return [0.2 + epsilon, 10 / 48 - epsilon];
        } else if (color === 'r') {
          // ratio is <= 0.2
          return [9 / 48, 0.2];
        }
      }
      if (pixels === 24) {
        if (color === 'g') {
          // ratio is > 0.5
          return [0.5 + epsilon, 25 / 48 - epsilon];
        } else if (color === 'y') {
          // ratio is exactly 0.5
          return [0.5, 0.5];
        }
      }
    }
    if (pixels === 48) return [1, 1];
    return [pixels / 48, (pixels + 1) / 48 - epsilon];
  }
  static getFormattedRange(range, precision, separator) {
    if (range[0] === range[1]) {
      let percentage = Math.abs(range[0] * 100);
      if (Math.floor(percentage) === percentage) {
        return `${percentage}%`;
      }
      return percentage.toFixed(precision) + '%';
    }
    let lower;
    let upper;
    if (precision === 0) {
      lower = Math.floor(range[0] * 100);
      upper = Math.ceil(range[1] * 100);
    } else {
      lower = (range[0] * 100).toFixed(precision);
      upper = (range[1] * 100).toFixed(precision);
    }
    return `${lower}${separator}${upper}%`;
  }
  // Returns [min, max] damage dealt as a proportion of total HP from 0 to 1
  getDamageRange(damage) {
    if (damage[1] !== 48) {
      let ratio = damage[0] / damage[1];
      return [ratio, ratio];
    } else if (damage.length === undefined) {
      // wrong pixel damage.
      // this case exists for backward compatibility only.
      return [damage[2] / 100, damage[2] / 100];
    }
    // pixel damage
    let oldrange = Pokemon.getPixelRange(damage[3], damage[4]);
    let newrange = Pokemon.getPixelRange(damage[3] + damage[0], this.hpcolor);
    if (damage[0] === 0) {
      // no change in displayed pixel width
      return [0, newrange[1] - newrange[0]];
    }
    if (oldrange[0] < newrange[0]) {
      // swap order
      let r = oldrange;
      oldrange = newrange;
      newrange = r;
    }
    return [oldrange[0] - newrange[1], oldrange[1] - newrange[0]];
  }
  healthParse(hpstring, parsedamage, heal) {
    // returns [delta, denominator, percent(, oldnum, oldcolor)] or null
    if (!hpstring?.length) return null;
    let parenIndex = hpstring.lastIndexOf('(');
    if (parenIndex >= 0) {
      // old style damage and health reporting
      if (parsedamage) {
        let damage = parseFloat(hpstring);
        // unusual check preseved for backward compatbility
        if (isNaN(damage)) damage = 50;
        if (heal) {
          this.hp += this.maxhp * damage / 100;
          if (this.hp > this.maxhp) this.hp = this.maxhp;
        } else {
          this.hp -= this.maxhp * damage / 100;
        }
        // parse the absolute health information
        let ret = this.healthParse(hpstring);
        if (ret?.[1] === 100) {
          // support for old replays with nearest-100th damage and health
          return [damage, 100, damage];
        }
        // complicated expressions preserved for backward compatibility
        let percent = Math.round(Math.ceil(damage * 48 / 100) / 48 * 100);
        let pixels = Math.ceil(damage * 48 / 100);
        return [pixels, 48, percent];
      }
      if (hpstring.substr(hpstring.length - 1) !== ')') {
        return null;
      }
      hpstring = hpstring.substr(parenIndex + 1, hpstring.length - parenIndex - 2);
    }
    let oldhp = this.fainted ? 0 : this.hp || 1;
    let oldmaxhp = this.maxhp;
    let oldwidth = this.hpWidth(100);
    let oldcolor = this.hpcolor;
    this.side.battle.parseHealth(hpstring, this);
    if (oldmaxhp === 0) {
      // max hp not known before parsing this message
      oldmaxhp = oldhp = this.maxhp;
    }
    let oldnum = oldhp ? Math.floor(this.maxhp * oldhp / oldmaxhp) || 1 : 0;
    let delta = this.hp - oldnum;
    let deltawidth = this.hpWidth(100) - oldwidth;
    return [delta, this.maxhp, deltawidth, oldnum, oldcolor];
  }
  checkDetails(details) {
    if (!details) return false;
    if (details === this.details) return true;
    if (this.searchid) return false;
    if (details.includes(', shiny')) {
      if (this.checkDetails(details.replace(', shiny', ''))) return true;
    }
    // the actual forme was hidden on Team Preview
    details = details.replace(/(-[A-Za-z0-9-]+)?(, |$)/, '-*$2');
    return details === this.details;
  }
  getIdent() {
    let slots = ['a', 'b', 'c', 'd', 'e', 'f'];
    return this.ident.substr(0, 2) + slots[this.slot] + this.ident.substr(2);
  }
  removeVolatile(volatile) {
    this.side.battle.scene.removeEffect(this, volatile);
    if (!this.hasVolatile(volatile)) return;
    delete this.volatiles[volatile];
  }
  addVolatile(volatile, ...args) {
    if (this.hasVolatile(volatile) && !args.length) return;
    this.volatiles[volatile] = [volatile, ...args];
    this.side.battle.scene.addEffect(this, volatile);
  }
  hasVolatile(volatile) {
    return !!this.volatiles[volatile];
  }
  removeTurnstatus(volatile) {
    this.side.battle.scene.removeEffect(this, volatile);
    if (!this.hasTurnstatus(volatile)) return;
    delete this.turnstatuses[volatile];
  }
  addTurnstatus(volatile) {
    volatile = toID(volatile);
    this.side.battle.scene.addEffect(this, volatile);
    if (this.hasTurnstatus(volatile)) return;
    this.turnstatuses[volatile] = [volatile];
  }
  hasTurnstatus(volatile) {
    return !!this.turnstatuses[volatile];
  }
  clearTurnstatuses() {
    for (let id in this.turnstatuses) {
      this.removeTurnstatus(id);
    }
    this.turnstatuses = {};
    this.side.battle.scene.updateStatbar(this);
  }
  removeMovestatus(volatile) {
    this.side.battle.scene.removeEffect(this, volatile);
    if (!this.hasMovestatus(volatile)) return;
    delete this.movestatuses[volatile];
  }
  addMovestatus(volatile) {
    volatile = toID(volatile);
    if (this.hasMovestatus(volatile)) return;
    this.movestatuses[volatile] = [volatile];
    this.side.battle.scene.addEffect(this, volatile);
  }
  hasMovestatus(volatile) {
    return !!this.movestatuses[volatile];
  }
  clearMovestatuses() {
    for (let id in this.movestatuses) {
      this.removeMovestatus(id);
    }
    this.movestatuses = {};
  }
  clearVolatiles() {
    this.volatiles = {};
    this.clearTurnstatuses();
    this.clearMovestatuses();
    this.side.battle.scene.clearEffects(this);
  }
  mergePP(entry, pp) {
    let ppUsed = entry[1];
    if (typeof ppUsed === 'number') {
      if (typeof pp === 'number') {
        ppUsed += pp;
      } else {
        ppUsed = [ppUsed + pp[0], ppUsed + pp[1]];
      }
    } else {
      if (typeof pp === 'number') {
        ppUsed[0] += pp;
        ppUsed[1] += pp;
      } else {
        ppUsed[0] += pp[0];
        ppUsed[1] += pp[1];
      }
    }
    if (typeof ppUsed === 'number') {
      if (ppUsed < 0) ppUsed = 0;
    } else {
      if (ppUsed[0] < 0) ppUsed[0] = 0;
      if (ppUsed[1] < 0) ppUsed[1] = 0;
      const move = this.side.battle.dex.moves.get(entry[0]);
      let maxpp = move.pp === 1 || move.noPPBoosts ? move.pp : move.pp * 8 / 5;
      if (this.side.battle.format.isChampions) {
        maxpp = move.pp > 20 ? 20 : move.pp;
        maxpp = move.pp === 1 || move.noPPBoosts ? move.pp : (move.pp / 5 + 1) * 4;
      }
      if (ppUsed[0] > maxpp) ppUsed[0] = maxpp;
      if (ppUsed[0] < ppUsed[1]) ppUsed[0] = ppUsed[1];
      if (ppUsed[0] === ppUsed[1]) ppUsed = ppUsed[0];
    }
    return ppUsed;
  }
  rememberMove(moveName, pp = 1, recursionSource) {
    if (recursionSource === this.ident) return;
    moveName = Dex.moves.get(moveName).name;
    if (moveName.startsWith('*')) return;
    if (moveName === 'Struggle') return;
    if (this.volatiles.transform) {
      // make sure there is no infinite recursion if both Pokemon are transformed into each other
      if (!recursionSource) recursionSource = this.ident;
      this.volatiles.transform[1].rememberMove(moveName, 0, recursionSource);
      moveName = '*' + moveName;
    }
    for (const entry of this.moveTrack) {
      if (moveName === entry[0]) {
        entry[1] = this.mergePP(entry, pp);
        return;
      }
    }
    this.moveTrack.push([moveName, pp]);
  }
  rememberAbility(ability, isNotBase) {
    ability = Dex.abilities.get(ability).name;
    this.ability = ability;
    if (!this.baseAbility && !isNotBase) {
      this.baseAbility = ability;
    }
  }
  getBoost(boostStat) {
    let boostStatTable = {
      atk: 'Atk',
      def: 'Def',
      spa: 'SpA',
      spd: 'SpD',
      spe: 'Spe',
      accuracy: 'Accuracy',
      evasion: 'Evasion',
      spc: 'Spc'
    };
    if (!this.boosts[boostStat]) {
      return '1&times;&nbsp;' + boostStatTable[boostStat];
    }
    if (this.boosts[boostStat] > 6) this.boosts[boostStat] = 6;
    if (this.boosts[boostStat] < -6) this.boosts[boostStat] = -6;
    const isRBY = this.side.battle.gen <= 1 && !this.side.battle.tier.includes('Stadium');
    if (!isRBY && (boostStat === 'accuracy' || boostStat === 'evasion')) {
      if (this.boosts[boostStat] > 0) {
        let goodBoostTable = ['1&times;', '1.33&times;', '1.67&times;', '2&times;', '2.33&times;', '2.67&times;', '3&times;'];
        // let goodBoostTable = ['Normal', '+1', '+2', '+3', '+4', '+5', '+6'];
        return '' + goodBoostTable[this.boosts[boostStat]] + '&nbsp;' + boostStatTable[boostStat];
      }
      let badBoostTable = ['1&times;', '0.75&times;', '0.6&times;', '0.5&times;', '0.43&times;', '0.38&times;', '0.33&times;'];
      // let badBoostTable = ['Normal', '&minus;1', '&minus;2', '&minus;3', '&minus;4', '&minus;5', '&minus;6'];
      return '' + badBoostTable[-this.boosts[boostStat]] + '&nbsp;' + boostStatTable[boostStat];
    }
    if (this.boosts[boostStat] > 0) {
      let goodBoostTable = ['1&times;', '1.5&times;', '2&times;', '2.5&times;', '3&times;', '3.5&times;', '4&times;'];
      // let goodBoostTable = ['Normal', '+1', '+2', '+3', '+4', '+5', '+6'];
      return '' + goodBoostTable[this.boosts[boostStat]] + '&nbsp;' + boostStatTable[boostStat];
    }
    let badBoostTable = ['1&times;', '0.67&times;', '0.5&times;', '0.4&times;', '0.33&times;', '0.29&times;', '0.25&times;'];
    // let badBoostTable = ['Normal', '&minus;1', '&minus;2', '&minus;3', '&minus;4', '&minus;5', '&minus;6'];
    return '' + badBoostTable[-this.boosts[boostStat]] + '&nbsp;' + boostStatTable[boostStat];
  }
  getWeightKg(serverPokemon) {
    let autotomizeFactor = this.volatiles.autotomize?.[1] * 100 || 0;
    return Math.max(this.getSpecies(serverPokemon).weightkg - autotomizeFactor, 0.1);
  }
  getBoostType(boostStat) {
    if (!this.boosts[boostStat]) return 'neutral';
    if (this.boosts[boostStat] > 0) return 'good';
    return 'bad';
  }
  clearVolatile() {
    this.ability = this.baseAbility;
    this.boosts = {};
    this.clearVolatiles();
    for (let i = 0; i < this.moveTrack.length; i++) {
      if (this.moveTrack[i][0].startsWith('*')) {
        this.moveTrack.splice(i, 1);
        i--;
      }
    }
    // this.lastMove = '';
    this.statusStage = 0;
    this.statusData.toxicTurns = 0;
    if (this.side.battle.gen === 5) this.statusData.sleepTurns = 0;
  }
  copyVolatileFrom(pokemon, copySource) {
    this.boosts = pokemon.boosts;
    this.volatiles = pokemon.volatiles;
    // this.lastMove = pokemon.lastMove; // I think
    if (copySource === 'batonpass') {
      const volatilesToRemove = ['airballoon', 'attract', 'autotomize', 'disable', 'encore', 'foresight', 'gmaxchistrike', 'imprison', 'laserfocus', 'mimic', 'miracleeye', 'nightmare', 'saltcure', 'smackdown', 'stockpile1', 'stockpile2', 'stockpile3', 'syrupbomb', 'torment', 'typeadd', 'typechange', 'yawn'];
      for (const statName of Dex.statNamesExceptHP) {
        volatilesToRemove.push('protosynthesis' + statName);
        volatilesToRemove.push('quarkdrive' + statName);
      }
      for (const volatile of volatilesToRemove) {
        delete this.volatiles[volatile];
      }
    }
    // Shed Tail doesn't need special handling because the source already has
    // its volatiles except Substitute cleared in switchOut.
    delete this.volatiles['transform'];
    delete this.volatiles['formechange'];
    pokemon.boosts = {};
    pokemon.volatiles = {};
    pokemon.side.battle.scene.removeTransform(pokemon);
    pokemon.statusStage = 0;
  }
  copyTypesFrom(pokemon, preterastallized = false) {
    const [types, addedType] = pokemon.getTypes(undefined, preterastallized);
    this.addVolatile('typechange', types.join('/'));
    if (addedType) {
      this.addVolatile('typeadd', addedType);
    } else {
      this.removeVolatile('typeadd');
    }
  }
  getTypes(serverPokemon, preterastallized = false) {
    let types;
    if (!preterastallized && this.terastallized && this.terastallized !== 'Stellar') {
      types = [this.terastallized];
    } else if (this.volatiles.typechange) {
      types = this.volatiles.typechange[1].split('/');
    } else if (this.moddedType.length) {
      types = this.moddedType;
    } else {
      types = this.getSpecies(serverPokemon).types;
    }
    if (this.hasTurnstatus('roost') && types.includes('Flying')) {
      types = types.filter(typeName => typeName !== 'Flying');
      if (!types.length) types = ['Normal'];
    }
    const addedType = this.volatiles.typeadd ? this.volatiles.typeadd[1] : '';
    return [types, addedType];
  }
  isGrounded(serverPokemon) {
    const battle = this.side.battle;
    if (battle.hasPseudoWeather('Gravity')) {
      return true;
    } else if (this.volatiles['ingrain'] && battle.gen >= 4) {
      return true;
    } else if (this.volatiles['smackdown']) {
      return true;
    }
    let item = toID(serverPokemon ? serverPokemon.item : this.item);
    let ability = toID(this.effectiveAbility(serverPokemon));
    if (battle.hasPseudoWeather('Magic Room') || this.volatiles['embargo'] || ability === 'klutz') {
      item = '';
    }
    if (item === 'ironball') {
      return true;
    }
    if (ability === 'levitate' || ability === 'eelevate') {
      return false;
    }
    if (this.volatiles['magnetrise'] || this.volatiles['telekinesis']) {
      return false;
    }
    if (item === 'airballoon') {
      return false;
    }
    return !this.getTypeList(serverPokemon).includes('Flying');
  }
  effectiveAbility(serverPokemon) {
    const ability = this.side.battle.dex.abilities.get(serverPokemon?.ability || this.ability || serverPokemon?.baseAbility || '');
    if (this.fainted || this.volatiles['transform'] && ability.flags['notransform'] || !ability.flags['cantsuppress'] && (this.side.battle.ngasActive() || this.volatiles['gastroacid'])) {
      return '';
    }
    return ability.name;
  }
  getTypeList(serverPokemon, preterastallized = false) {
    const [types, addedType] = this.getTypes(serverPokemon, preterastallized);
    return addedType ? types.concat(addedType) : types;
  }
  getSpeciesForme(serverPokemon) {
    return this.volatiles.formechange ? this.volatiles.formechange[1] : serverPokemon ? serverPokemon.speciesForme : this.speciesForme;
  }
  getSpecies(serverPokemon) {
    return this.side.battle.dex.species.get(this.getSpeciesForme(serverPokemon));
  }
  getBaseSpecies() {
    return this.side.battle.dex.species.get(this.speciesForme);
  }
  reset() {
    this.clearVolatile();
    this.hp = this.maxhp;
    this.fainted = false;
    this.status = '';
    this.moveTrack = [];
    this.name = this.name || this.speciesForme;
  }
  // This function is used for two things:
  //   1) The percentage to display beside the HP bar.
  //   2) The width to draw an HP bar.
  //
  // This function is NOT used in the calculation of any other displayed
  // percentages or ranges, which have their own, more complex, formulae.
  hpWidth(maxWidth) {
    if (this.fainted || !this.hp) return 0;

    // special case for low health...
    if (this.hp === 1 && this.maxhp > 45) return 1;
    if (this.maxhp === 48) {
      // Draw the health bar to the middle of the range.
      // This affects the width of the visual health bar *only*; it
      // does not affect the ranges displayed in any way.
      let range = Pokemon.getPixelRange(this.hp, this.hpcolor);
      let ratio = (range[0] + range[1]) / 2;
      return Math.round(maxWidth * ratio) || 1;
    }
    if (this.side.battle.hpPercentageMod) {
      let percentage = Math.ceil(100 * this.hp / this.maxhp);
      if (percentage === 100 && this.hp < this.maxhp) {
        percentage = 99;
      }
      return percentage * maxWidth / 100;
    }
    const width = Math.round(this.hp / this.maxhp * maxWidth) || 1;
    return this.hp < this.maxhp && width === maxWidth ? maxWidth - 1 : width;
  }
  getHPText(precision = 1) {
    return Pokemon.getHPText(this, this.side.battle.reportExactHP, precision);
  }
  static getHPText(pokemon, exactHP, precision = 1) {
    if (exactHP) return `${pokemon.hp}/${pokemon.maxhp}`;
    if (pokemon.maxhp === 100) return `${pokemon.hp}%`;
    if (pokemon.maxhp !== 48) return (100 * pokemon.hp / pokemon.maxhp).toFixed(precision) + '%';
    let range = Pokemon.getPixelRange(pokemon.hp, pokemon.hpcolor);
    return Pokemon.getFormattedRange(range, precision, '\u2013');
  }
  destroy() {
    this.sprite?.destroy();
    this.sprite = null;
    this.side = null;
  }
}
class Side {
  battle;
  name = '';
  id = '';
  sideid;
  n;
  isFar;
  foe = null;
  ally = null;
  avatar = 'unknown';
  badges = [];
  rating = '';
  totalPokemon = 6;
  x = 0;
  y = 0;
  z = 0;
  missedPokemon = null;
  wisher = null;
  active = [null];
  lastPokemon = null;
  pokemon = [];
  openTeamSheet = false;
  sideConditions = {};
  faintCounter = 0;
  constructor(battle, n) {
    this.battle = battle;
    this.n = n;
    this.sideid = ['p1', 'p2', 'p3', 'p4'][n];
    this.isFar = !!(n % 2);
  }
  rollTrainerSprites() {
    let sprites = ['lucas', 'dawn', 'ethan', 'lyra', 'hilbert', 'hilda'];
    this.avatar = sprites[Math.floor(Math.random() * sprites.length)];
  }
  behindx(offset) {
    return this.x + (!this.isFar ? -1 : 1) * offset;
  }
  behindy(offset) {
    return this.y + (!this.isFar ? 1 : -1) * offset;
  }
  leftof(offset) {
    return (!this.isFar ? -1 : 1) * offset;
  }
  behind(offset) {
    return this.z + (!this.isFar ? -1 : 1) * offset;
  }
  clearPokemon() {
    for (const pokemon of this.pokemon) pokemon.destroy();
    this.pokemon = [];
    for (let i = 0; i < this.active.length; i++) this.active[i] = null;
    this.lastPokemon = null;
  }
  reset() {
    this.clearPokemon();
    this.sideConditions = {};
    this.faintCounter = 0;
  }
  setAvatar(avatar) {
    this.avatar = avatar;
  }
  setName(name, avatar) {
    if (name) this.name = name;
    this.id = toID(this.name);
    if (avatar) {
      this.setAvatar(avatar);
    } else {
      this.rollTrainerSprites();
      if (this.avatar === this.foe?.avatar) this.rollTrainerSprites();
    }
  }
  addSideCondition(effect, persist) {
    let condition = effect.id;
    if (this.sideConditions[condition]) {
      if (condition === 'spikes' || condition === 'toxicspikes') {
        this.sideConditions[condition][1]++;
      }
      this.battle.scene.addSideCondition(this.n, condition);
      return;
    }
    // Side conditions work as: [effectName, levels, minDuration, maxDuration]
    switch (condition) {
      case 'auroraveil':
        this.sideConditions[condition] = [effect.name, 1, 5, 8];
        break;
      case 'reflect':
        this.sideConditions[condition] = [effect.name, 1, 5, this.battle.gen >= 4 ? 8 : 0];
        break;
      case 'safeguard':
        this.sideConditions[condition] = [effect.name, 1, persist ? 7 : 5, 0];
        break;
      case 'lightscreen':
        this.sideConditions[condition] = [effect.name, 1, 5, this.battle.gen >= 4 ? 8 : 0];
        break;
      case 'mist':
        this.sideConditions[condition] = [effect.name, 1, 5, 0];
        break;
      case 'tailwind':
        this.sideConditions[condition] = [effect.name, 1, this.battle.gen >= 5 ? persist ? 6 : 4 : persist ? 5 : 3, 0];
        break;
      case 'luckychant':
        this.sideConditions[condition] = [effect.name, 1, 5, 0];
        break;
      case 'futuresight':
        this.sideConditions[condition] = ['Future Sight', 1, 3, 0];
        break;
      case 'doomdesire':
        this.sideConditions[condition] = ['Doom Desire', 1, 3, 0];
        break;
      case 'stealthrock':
      case 'spikes':
      case 'toxicspikes':
      case 'stickyweb':
        this.sideConditions[condition] = [effect.name, 1, 0, 0];
        break;
      case 'gmaxwildfire':
      case 'gmaxvolcalith':
      case 'gmaxvinelash':
      case 'gmaxcannonade':
        this.sideConditions[condition] = [effect.name, 1, 4, 0];
        break;
      case 'grasspledge':
        this.sideConditions[condition] = ['Swamp', 1, 4, 0];
        break;
      case 'waterpledge':
        this.sideConditions[condition] = ['Rainbow', 1, 4, 0];
        break;
      case 'firepledge':
        this.sideConditions[condition] = ['Sea of Fire', 1, 4, 0];
        break;
      default:
        this.sideConditions[condition] = [effect.name, 1, 0, 0];
        break;
    }
    this.battle.scene.addSideCondition(this.n, condition);
  }
  removeSideCondition(condition) {
    const id = toID(condition);
    if (!this.sideConditions[id]) return;
    delete this.sideConditions[id];
    this.battle.scene.removeSideCondition(this.n, id);
  }
  addPokemon(name, ident, details, replaceSlot = -1) {
    const oldPokemon = replaceSlot >= 0 ? this.pokemon[replaceSlot] : undefined;
    const data = this.battle.parseDetails(name, ident, details);
    const poke = new Pokemon(data, this);
    if (oldPokemon) {
      poke.item = oldPokemon.item;
      poke.baseAbility = oldPokemon.baseAbility;
      poke.teraType = oldPokemon.teraType;
    }
    if (!poke.ability && poke.baseAbility) poke.ability = poke.baseAbility;
    poke.reset();
    if (oldPokemon?.moveTrack.length) poke.moveTrack = oldPokemon.moveTrack;
    if (oldPokemon?.nature) poke.nature = oldPokemon.nature;
    if (replaceSlot >= 0) {
      this.pokemon[replaceSlot] = poke;
    } else {
      this.pokemon.push(poke);
    }
    if (this.pokemon.length > this.totalPokemon || this.battle.speciesClause) {
      // check for Illusion
      let existingTable = {};
      let toRemove = -1;
      for (let poke1i = 0; poke1i < this.pokemon.length; poke1i++) {
        let poke1 = this.pokemon[poke1i];
        if (!poke1.searchid) continue;
        if (poke1.searchid in existingTable) {
          let poke2i = existingTable[poke1.searchid];
          let poke2 = this.pokemon[poke2i];
          if (poke === poke1) {
            toRemove = poke2i;
          } else if (poke === poke2) {
            toRemove = poke1i;
          } else if (this.active.includes(poke1)) {
            toRemove = poke2i;
          } else if (this.active.includes(poke2)) {
            toRemove = poke1i;
          } else if (poke1.fainted && !poke2.fainted) {
            toRemove = poke2i;
          } else {
            toRemove = poke1i;
          }
          break;
        }
        existingTable[poke1.searchid] = poke1i;
      }
      if (toRemove >= 0) {
        if (this.pokemon[toRemove].fainted) {
          // A fainted Pokemon was actually a Zoroark
          let illusionFound = null;
          for (const curPoke of this.pokemon) {
            if (curPoke === poke) continue;
            if (curPoke.fainted) continue;
            if (this.active.includes(curPoke)) continue;
            if (curPoke.speciesForme === 'Zoroark' || curPoke.speciesForme === 'Zorua' || curPoke.ability === 'Illusion') {
              illusionFound = curPoke;
              break;
            }
          }
          if (!illusionFound) {
            // This is Hackmons; we'll just guess a random unfainted Pokemon.
            // This will keep the fainted Pokemon count correct, and will
            // eventually become correct as incorrect guesses are switched in
            // and reguessed.
            for (const curPoke of this.pokemon) {
              if (curPoke === poke) continue;
              if (curPoke.fainted) continue;
              if (this.active.includes(curPoke)) continue;
              illusionFound = curPoke;
              break;
            }
          }
          if (illusionFound) {
            illusionFound.fainted = true;
            illusionFound.hp = 0;
            illusionFound.status = '';
          }
        }
        this.pokemon.splice(toRemove, 1);
      }
    }
    this.battle.scene.updateSidebar(this);
    return poke;
  }
  switchIn(pokemon, kwArgs, slot = pokemon.slot) {
    this.active[slot] = pokemon;
    pokemon.slot = slot;
    pokemon.clearVolatile();
    pokemon.lastMove = '';
    this.battle.lastMove = 'switch-in';
    const effect = Dex.getEffect(kwArgs.from);
    if (['batonpass', 'zbatonpass', 'shedtail'].includes(effect.id)) {
      pokemon.copyVolatileFrom(this.lastPokemon, effect.id === 'shedtail' ? 'shedtail' : 'batonpass');
    } else if (this.battle.tier.includes(`Relay Race`) && !effect.id) {
      if (this.lastPokemon && !this.lastPokemon.fainted) pokemon.copyVolatileFrom(this.lastPokemon, 'batonpass');
    }
    this.battle.scene.animSummon(pokemon, slot);
  }
  dragIn(pokemon, slot = pokemon.slot) {
    let oldpokemon = this.active[slot];
    if (oldpokemon === pokemon) return;
    this.lastPokemon = oldpokemon;
    if (oldpokemon) {
      this.battle.scene.animDragOut(oldpokemon);
      oldpokemon.clearVolatile();
    }
    pokemon.clearVolatile();
    pokemon.lastMove = '';
    this.battle.lastMove = 'switch-in';
    this.active[slot] = pokemon;
    pokemon.slot = slot;
    this.battle.scene.animDragIn(pokemon, slot);
  }
  replace(pokemon, slot = pokemon.slot) {
    let oldpokemon = this.active[slot];
    if (pokemon === oldpokemon) return;
    this.lastPokemon = oldpokemon;
    pokemon.clearVolatile();
    if (oldpokemon) {
      pokemon.lastMove = oldpokemon.lastMove;
      pokemon.hp = oldpokemon.hp;
      pokemon.maxhp = oldpokemon.maxhp;
      pokemon.hpcolor = oldpokemon.hpcolor;
      pokemon.status = oldpokemon.status;
      pokemon.copyVolatileFrom(oldpokemon, 'illusion');
      pokemon.statusData = {
        ...oldpokemon.statusData
      };
      if (oldpokemon.terastallized) {
        pokemon.terastallized = oldpokemon.terastallized;
        pokemon.teraType = oldpokemon.terastallized;
        oldpokemon.terastallized = '';
        oldpokemon.teraType = '';
      }
      // we don't know anything about the illusioned pokemon except that it's not fainted
      // technically we also know its status but only at the end of the turn, not here
      oldpokemon.fainted = false;
      oldpokemon.hp = oldpokemon.maxhp;
      oldpokemon.status = '???';
    }
    this.active[slot] = pokemon;
    pokemon.slot = slot;
    if (oldpokemon) {
      this.battle.scene.animUnsummon(oldpokemon, true);
    }
    this.battle.scene.animSummon(pokemon, slot, true);
  }
  switchOut(pokemon, kwArgs, slot = pokemon.slot) {
    const effect = Dex.getEffect(kwArgs.from);
    if (!['batonpass', 'zbatonpass'].includes(effect.id) && !(this.battle.tier.includes(`Relay Race`) && !effect.id)) {
      pokemon.clearVolatile();
      if (effect.id === 'shedtail') {
        pokemon.volatiles = {
          substitute: ['substitute']
        };
        pokemon.sprite?.animSub(true);
      }
    } else {
      pokemon.removeVolatile('transform');
      pokemon.removeVolatile('formechange');
    }
    if (!['batonpass', 'zbatonpass', 'shedtail', 'teleport'].includes(effect.id) && !(this.battle.tier.includes(`Relay Race`) && !effect.id)) {
      this.battle.log(['switchout', pokemon.ident], {
        from: effect.id
      });
    }
    pokemon.statusData.toxicTurns = 0;
    if (this.battle.gen === 5) pokemon.statusData.sleepTurns = 0;
    if (this.battle.format.isChampions) {
      pokemon.timesAttacked = 0;
    }
    this.lastPokemon = pokemon;
    this.active[slot] = null;
    this.battle.scene.animUnsummon(pokemon);
  }
  swapTo(pokemon, slot) {
    if (pokemon.slot === slot) return;
    let target = this.active[slot];
    let oslot = pokemon.slot;
    pokemon.slot = slot;
    if (target) target.slot = oslot;
    this.active[slot] = pokemon;
    this.active[oslot] = target;
    this.battle.scene.animUnsummon(pokemon, true);
    if (target) this.battle.scene.animUnsummon(target, true);
    this.battle.scene.animSummon(pokemon, slot, true);
    if (target) this.battle.scene.animSummon(target, oslot, true);
  }
  swapWith(pokemon, target, kwArgs) {
    // method provided for backwards compatibility only
    if (pokemon === target) return;
    let oslot = pokemon.slot;
    let nslot = target.slot;
    pokemon.slot = nslot;
    target.slot = oslot;
    this.active[nslot] = pokemon;
    this.active[oslot] = target;
    this.battle.scene.animUnsummon(pokemon, true);
    this.battle.scene.animUnsummon(target, true);
    this.battle.scene.animSummon(pokemon, nslot, true);
    this.battle.scene.animSummon(target, oslot, true);
  }
  faint(pokemon, slot = pokemon.slot) {
    pokemon.clearVolatile();
    this.lastPokemon = pokemon;
    this.active[slot] = null;
    pokemon.fainted = true;
    pokemon.hp = 0;
    pokemon.terastallized = '';
    pokemon.details = pokemon.details.replace(/, tera:[a-z]+/i, '');
    pokemon.searchid = pokemon.searchid.replace(/, tera:[a-z]+/i, '');
    if (pokemon.side.faintCounter < 100) pokemon.side.faintCounter++;
    this.battle.scene.animFaint(pokemon);
  }
  destroy() {
    this.clearPokemon();
    this.battle = null;
    this.foe = null;
  }
}
class Battle {
  scene;
  viewpointSwitched = false;
  stepQueue;
  /** See battle.instantAdd */
  preemptStepQueue = [];
  waitForAnimations = true;
  /** the index of `stepQueue` currently being animated */
  currentStep = 0;
  /** null = not seeking, 0 = seek start, Infinity = seek end, otherwise: seek turn number */
  seeking = null;
  activeMoveIsSpread = null;
  subscription;
  mute = false;
  messageFadeTime = 300;
  messageShownTime = 1;
  /** for tracking when to accelerate animations in long battles full of double switches */
  turnsSinceMoved = 0;

  /**
   * * `-1` = non-battle RoomGames, or hasn't hit Team Preview or `|start`
   * * `0` = after Team Preview or `|start` but before `|turn|1`
   */
  turn = -1;
  /**
   * Are we at the end of the queue and waiting for more input?
   *
   * In addition to at the end of a battle, this is also true if you're
   * playing/watching a battle live, and waiting for a player to make a move.
   */
  atQueueEnd = false;
  /**
   * Has the battle ever been played or fast-forwarded?
   *
   * This is not exactly `turn > 0` because if you start playing a replay,
   * then pause before turn 1, `turn` will still be 0, but playback should
   * be considered started (for the purposes of displaying "Play" vs "Resume")
   */
  started = false;
  /**
   * Has playback gotten to the point where a player has won or tied?
   * (Affects whether BGM is playing)
   */
  ended = false;
  isReplay = false;
  usesUpkeep = false;
  weather = '';
  pseudoWeather = [];
  weatherTimeLeft = 0;
  weatherMinTimeLeft = 0;
  /**
   * The side from which perspective we're viewing. Should be identical to
   * `nearSide` except in multi battles, where `nearSide` is always the first
   * near side, and `mySide` is the active player.
   */
  mySide = null;
  nearSide = null;
  farSide = null;
  p1 = null;
  p2 = null;
  p3 = null;
  p4 = null;
  pokemonControlled = 0;
  sides = null;
  myPokemon = null;
  myAllyPokemon = null;
  lastMove = '';
  gen = 8;
  dex = Dex;
  teamPreviewCount = 0;
  speciesClause = false;
  tier = '';
  format = Dex.formats.get('');
  gameType = 'singles';
  compatMode = true;
  rated = false;
  rules = {};
  isBlitz = false;
  reportExactHP = false;
  hpPercentageMod = false;
  endLastTurnPending = false;
  totalTimeLeft = 0;
  graceTimeLeft = 0;
  /**
   * true: timer on, state unknown
   * false: timer off
   * number: seconds left this turn
   */
  kickingInactive = false;

  // options
  id = '';
  /** used to forward some information to the room in the old client */
  roomid = '';
  hardcoreMode = false;
  ignoreNicks = !!Dex.prefs('ignorenicks');
  ignoreOpponent = !!Dex.prefs('ignoreopp');
  ignoreSpects = !!Dex.prefs('ignorespects');
  debug;
  joinButtons = false;
  autoresize;

  /**
   * The actual pause state. Will only be true if playback is actually
   * paused, not just waiting for the opponent to make a move.
   */
  paused;
  constructor(options = {}) {
    this.id = options.id || '';
    if (options.$frame && options.$logFrame) {
      this.scene = new BattleScene(this, options.$frame, options.$logFrame);
    } else if (!options.$frame && !options.$logFrame) {
      this.scene = new BattleSceneStub();
    } else {
      throw new Error(`You must specify $frame and $logFrame simultaneously`);
    }
    this.paused = !!options.paused;
    this.started = !this.paused;
    this.debug = !!options.debug;
    if (typeof options.log === 'string') options.log = options.log.split('\n');
    this.stepQueue = options.log || [];
    this.subscription = options.subscription || null;
    this.autoresize = !!options.autoresize;
    this.p1 = new Side(this, 0);
    this.p2 = new Side(this, 1);
    this.sides = [this.p1, this.p2];
    this.p2.foe = this.p1;
    this.p1.foe = this.p2;
    this.nearSide = this.mySide = this.p1;
    this.farSide = this.p2;
    this.resetStep();
    if (this.autoresize) {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    }
  }
  onResize = () => {
    const width = $(window).width();
    if (width < 950 || this.hardcoreMode) {
      this.messageShownTime = 500;
    } else {
      this.messageShownTime = 1;
    }
    if (width && width < 640) {
      const scale = width / 640;
      this.scene.$frame?.css('transform', `scale(${scale})`);
      this.scene.$frame?.css('transform-origin', 'top left');
      this.scene.$frame?.css('margin-bottom', `${360 * scale - 360}px`);
      // this.$foeHint.css('transform', 'scale(' + scale + ')');
    } else {
      this.scene.$frame?.css('transform', 'none');
      // this.$foeHint.css('transform', 'none');
      this.scene.$frame?.css('margin-bottom', '0');
    }
  };
  subscribe(listener) {
    this.subscription = listener;
  }
  removePseudoWeather(weather) {
    for (let i = 0; i < this.pseudoWeather.length; i++) {
      if (this.pseudoWeather[i][0] === weather) {
        this.pseudoWeather.splice(i, 1);
        this.scene.updateWeather();
        return;
      }
    }
  }
  addPseudoWeather(weather, minTimeLeft, timeLeft) {
    this.pseudoWeather.push([weather, minTimeLeft, timeLeft]);
    this.scene.updateWeather();
  }
  hasPseudoWeather(weather) {
    for (const [pseudoWeatherName] of this.pseudoWeather) {
      if (weather === pseudoWeatherName) {
        return true;
      }
    }
    return false;
  }
  getAllActive() {
    const pokemonList = [];
    // Sides 3 and 4 are synced with sides 1 and 2, so they don't need to be checked
    for (let i = 0; i < 2; i++) {
      const side = this.sides[i];
      for (const active of side.active) {
        if (active && !active.fainted) {
          pokemonList.push(active);
        }
      }
    }
    return pokemonList;
  }
  // Used in Pokemon#effectiveAbility over abilityActive to prevent infinite recursion
  ngasActive() {
    for (const active of this.getAllActive()) {
      if (active.ability === 'Neutralizing Gas' && !active.volatiles['gastroacid']) {
        return true;
      }
    }
    return false;
  }
  abilityActive(abilities) {
    if (typeof abilities === 'string') abilities = [abilities];
    abilities = abilities.map(toID);
    for (const active of this.getAllActive()) {
      if (abilities.includes(toID(active.effectiveAbility()))) {
        return true;
      }
    }
    return false;
  }
  reset() {
    this.paused = true;
    this.scene.pause();
    this.resetStep();
    this.subscription?.('paused');
  }
  resetStep() {
    // battle state
    this.turn = -1;
    this.started = !this.paused;
    this.ended = false;
    this.atQueueEnd = false;
    this.weather = '';
    this.weatherTimeLeft = 0;
    this.weatherMinTimeLeft = 0;
    this.pseudoWeather = [];
    this.lastMove = '';
    for (const side of this.sides) {
      if (side) side.reset();
    }
    this.myPokemon = null;
    this.myAllyPokemon = null;

    // DOM state
    this.scene.reset();

    // activity queue state
    this.activeMoveIsSpread = null;
    this.currentStep = 0;
    this.preemptStepQueue = [];
    this.resetTurnsSinceMoved();
    this.nextStep();
  }
  destroy() {
    if (this.autoresize) {
      window.removeEventListener('resize', this.onResize);
    }
    this.scene.destroy();
    for (let i = 0; i < this.sides.length; i++) {
      if (this.sides[i]) this.sides[i].destroy();
      this.sides[i] = null;
    }
    this.mySide = null;
    this.nearSide = null;
    this.farSide = null;
    this.p1 = null;
    this.p2 = null;
    this.p3 = null;
    this.p4 = null;
  }
  log(args, kwArgs, preempt) {
    this.scene.log.add(args, kwArgs, preempt);
  }
  resetToCurrentTurn() {
    this.seekTurn(this.ended ? Infinity : this.turn, true);
  }
  switchViewpoint() {
    this.setViewpoint(this.viewpointSwitched ? 'p1' : 'p2');
  }
  setViewpoint(sideid) {
    if (this.mySide.sideid === sideid) return;
    if (sideid.length !== 2 || !sideid.startsWith('p')) return;
    const side = this[sideid];
    if (!side) return;
    this.mySide = side;
    if (side.n % 2 === this.p1.n) {
      this.viewpointSwitched = false;
      this.nearSide = this.p1;
      this.farSide = this.p2;
    } else {
      this.viewpointSwitched = true;
      this.nearSide = this.p2;
      this.farSide = this.p1;
    }
    this.nearSide.isFar = false;
    this.farSide.isFar = true;
    if (this.sides.length > 2) {
      this.sides[this.nearSide.n + 2].isFar = false;
      this.sides[this.farSide.n + 2].isFar = true;
    }
    this.resetToCurrentTurn();
  }

  //
  // activities
  //
  start() {
    this.log(['start']);
    this.resetTurnsSinceMoved();
  }
  winner(winner) {
    this.log(['win', winner || '']);
    this.ended = true;
    this.subscription?.('ended');
  }
  prematureEnd() {
    this.log(['message', 'This replay ends here.']);
    this.ended = true;
    this.subscription?.('ended');
  }
  endLastTurn() {
    if (this.endLastTurnPending) {
      this.endLastTurnPending = false;
      this.scene.updateStatbars();
    }
  }
  setHardcoreMode(mode) {
    this.hardcoreMode = mode;
    this.scene.updateSidebars();
    this.scene.updateWeather(true);
  }
  setTurn(turnNum) {
    if (turnNum === this.turn + 1) {
      this.endLastTurnPending = true;
    }
    if (this.turn > 0 && !this.usesUpkeep) this.updateTurnCounters(); // for compatibility with old replays
    this.turn = turnNum;
    this.started = true;
    if (this.seeking === null) this.turnsSinceMoved++;
    this.scene.incrementTurn();
    if (this.seeking !== null) {
      if (turnNum >= this.seeking) {
        this.stopSeeking();
      }
    } else {
      this.subscription?.('turn');
    }
  }
  resetTurnsSinceMoved() {
    this.turnsSinceMoved = 0;
    this.scene.updateAcceleration();
  }
  changeWeather(weatherName, poke, isUpkeep, ability) {
    let weather = toID(weatherName);
    if (!weather || weather === 'none') {
      weather = '';
    }
    if (isUpkeep) {
      if (this.weather && this.weatherTimeLeft) {
        this.weatherTimeLeft--;
        if (this.weatherMinTimeLeft !== 0) this.weatherMinTimeLeft--;
      }
      if (this.seeking === null) {
        this.scene.upkeepWeather();
      }
      return;
    }
    if (weather) {
      let isExtremeWeather = weather === 'deltastream' || weather === 'desolateland' || weather === 'primordialsea';
      if (poke) {
        if (ability) {
          this.activateAbility(poke, ability.name);
        }
        this.weatherTimeLeft = this.gen <= 5 || isExtremeWeather ? 0 : 8;
        this.weatherMinTimeLeft = this.gen <= 5 || isExtremeWeather ? 0 : 5;
      } else if (isExtremeWeather) {
        this.weatherTimeLeft = 0;
        this.weatherMinTimeLeft = 0;
      } else {
        this.weatherTimeLeft = this.gen <= 3 ? 5 : 8;
        this.weatherMinTimeLeft = this.gen <= 3 ? 0 : 5;
      }
    }
    this.weather = weather;
    this.scene.updateWeather();
  }
  swapSideConditions() {
    const sideConditions = ['mist', 'lightscreen', 'reflect', 'spikes', 'safeguard', 'tailwind', 'toxicspikes', 'stealthrock', 'waterpledge', 'firepledge', 'grasspledge', 'stickyweb', 'auroraveil', 'gmaxsteelsurge', 'gmaxcannonade', 'gmaxvinelash', 'gmaxwildfire'];
    if (this.gameType === 'freeforall') {
      // Court Change rotates side conditions clockwise in a free-for-all

      // the list of all sides in clockwise order
      const sides = [this.sides[0], this.sides[3], this.sides[1], this.sides[2]];
      const temp = {
        0: {},
        1: {},
        2: {},
        3: {}
      };
      for (const side of sides) {
        for (const id in side.sideConditions) {
          if (!sideConditions.includes(id)) continue;
          temp[side.n][id] = side.sideConditions[id];
          side.removeSideCondition(id);
        }
      }
      for (let i = 0; i < 4; i++) {
        const sourceSide = sides[i]; // the current side in rotation
        const sourceSideConditions = temp[sourceSide.n];
        const targetSide = sides[(i + 1) % 4]; // the next side in rotation
        for (const id in sourceSideConditions) {
          targetSide.sideConditions[id] = sourceSideConditions[id];
          this.scene.addSideCondition(targetSide.n, id);
        }
      }
      return;
    }
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    for (const id of sideConditions) {
      if (side1.sideConditions[id] && side2.sideConditions[id]) {
        [side1.sideConditions[id], side2.sideConditions[id]] = [side2.sideConditions[id], side1.sideConditions[id]];
        this.scene.addSideCondition(side1.n, id);
        this.scene.addSideCondition(side2.n, id);
      } else if (side1.sideConditions[id] && !side2.sideConditions[id]) {
        side2.sideConditions[id] = side1.sideConditions[id];
        this.scene.addSideCondition(side2.n, id);
        side1.removeSideCondition(id);
      } else if (side2.sideConditions[id] && !side1.sideConditions[id]) {
        side1.sideConditions[id] = side2.sideConditions[id];
        this.scene.addSideCondition(side1.n, id);
        side2.removeSideCondition(id);
      }
    }
  }
  updateTurnCounters() {
    for (const pWeather of this.pseudoWeather) {
      if (pWeather[1]) pWeather[1]--;
      if (pWeather[2]) pWeather[2]--;
    }
    for (const side of this.sides) {
      for (const id in side.sideConditions) {
        let cond = side.sideConditions[id];
        if (cond[2]) cond[2]--;
        if (cond[3]) cond[3]--;
      }
    }
    for (const poke of [...this.nearSide.active, ...this.farSide.active]) {
      if (poke) {
        if (poke.status === 'tox') poke.statusData.toxicTurns++;
        poke.clearTurnstatuses();
      }
    }
    this.scene.updateWeather();
  }
  useMove(pokemon, move, target, kwArgs) {
    let fromeffect = Dex.getEffect(kwArgs.from);
    this.activateAbility(pokemon, fromeffect);
    pokemon.clearMovestatuses();
    if (move.id === 'focuspunch') {
      pokemon.removeTurnstatus('focuspunch');
    }
    this.scene.updateStatbar(pokemon);
    if (fromeffect.id === 'sleeptalk') {
      pokemon.rememberMove(move.name, 0);
    }
    let callerMoveForPressure = null;
    // will not include effects that are conditions named after moves like Magic Coat and Snatch, which is good
    if (fromeffect.id && kwArgs.from.startsWith("move:")) {
      callerMoveForPressure = fromeffect;
    }
    if (!fromeffect.id || callerMoveForPressure || fromeffect.id === 'pursuit') {
      let moveName = move.name;
      if (!callerMoveForPressure) {
        const previousLine = this.stepQueue[this.currentStep - 1];
        const zPower = previousLine.startsWith('|-zpower');
        if (move.isZ && zPower) {
          pokemon.item = move.isZ;
          let item = Dex.items.get(move.isZ);
          if (item.zMoveFrom) moveName = item.zMoveFrom;
        } else if (move.name.startsWith('Z-') && zPower) {
          moveName = moveName.slice(2);
          move = Dex.moves.get(moveName);
          if (window.BattleItems) {
            for (let item in BattleItems) {
              if (BattleItems[item].zMoveType === move.type) pokemon.item = item;
            }
          }
        }
      }
      let pp = callerMoveForPressure ? 0 : 1; // 1 pp was already deducted from using the move itself
      if ((this.abilityActive('Pressure') || this.gen === 3) && move.id !== 'stickyweb') {
        const foeTargets = [];
        const moveTarget = move.pressureTarget;
        if (!target && this.gameType === 'singles' && !['self', 'allies', 'allySide', 'adjacentAlly', 'adjacentAllyOrSelf', 'allyTeam'].includes(moveTarget)) {
          // Hardcode for moves without a target in singles
          foeTargets.push(pokemon.side.foe.active[0]);
        } else if (['all', 'allAdjacent', 'allAdjacentFoes', 'foeSide'].includes(moveTarget)) {
          for (const active of this.getAllActive()) {
            if (active === pokemon) continue;
            // Pressure affects allies in gen 3 and 4
            if (this.gen <= 4 || active.side !== pokemon.side && active.side.ally !== pokemon.side) {
              foeTargets.push(active);
            }
          }
        } else if (target && target.side !== pokemon.side) {
          foeTargets.push(target);
        }
        pp = this.getPressurePP(pp, foeTargets.filter(foe => foe && !foe.fainted));
      }
      pokemon.rememberMove(callerMoveForPressure ? callerMoveForPressure.name : moveName, pp);
    }
    pokemon.lastMove = move.id;
    this.lastMove = move.id;
    if (move.id === 'wish' || move.id === 'healingwish') {
      pokemon.side.wisher = pokemon;
    }
  }
  getPressurePP(pp, foes) {
    for (const foe of foes) {
      const abilities = Object.values(this.dex.species.get(foe.speciesForme).abilities);
      const canHavePressure = this.gen === 3 && abilities.includes('Pressure');
      if (foe.effectiveAbility() === 'Pressure' || canHavePressure && abilities.length === 1) {
        if (typeof pp === 'number') {
          pp += 1;
        } else {
          pp[0] += 1;
          pp[1] += 1;
        }
      } else if (canHavePressure) {
        if (typeof pp === 'number') {
          pp = [pp, pp];
        }
        pp[0] += 1;
      }
    }
    return pp;
  }
  animateMove(pokemon, move, target, kwArgs) {
    this.activeMoveIsSpread = kwArgs.spread;
    if (this.seeking !== null || kwArgs.still) return;
    if (!target) target = pokemon.side.foe.active[0];
    if (!target) target = pokemon.side.foe.missedPokemon;
    if (kwArgs.miss && target.side) {
      target = target.side.missedPokemon;
    }
    if (kwArgs.notarget) {
      return;
    }
    if (kwArgs.prepare || kwArgs.anim === 'prepare') {
      this.scene.runPrepareAnim(move.id, pokemon, target);
      return;
    }
    let usedMove = kwArgs.anim ? Dex.moves.get(kwArgs.anim) : move;
    if (!kwArgs.spread) {
      this.scene.runMoveAnim(usedMove.id, [pokemon, target]);
      return;
    }
    let targets = [pokemon];
    if (kwArgs.spread === '.') {
      //  no target was hit by the attack
      targets.push(target.side.missedPokemon);
    } else {
      for (const hitTarget of kwArgs.spread.split(',')) {
        const curTarget = this.getPokemon(hitTarget + ': ?');
        if (!curTarget) {
          this.log(['error', `Invalid spread move target: "${hitTarget}"`]);
          continue;
        }
        targets.push(curTarget);
      }
    }
    this.scene.runMoveAnim(usedMove.id, targets);
  }
  cantUseMove(pokemon, effect, move, kwArgs) {
    pokemon.clearMovestatuses();
    this.scene.updateStatbar(pokemon);
    if (effect.id in BattleStatusAnims) {
      this.scene.runStatusAnim(effect.id, [pokemon]);
    }
    this.activateAbility(pokemon, effect);
    if (move.id) pokemon.rememberMove(move.name, 0);
    switch (effect.id) {
      case 'par':
        this.scene.resultAnim(pokemon, 'Paralyzed', 'par');
        break;
      case 'frz':
        this.scene.resultAnim(pokemon, 'Frozen', 'frz');
        break;
      case 'slp':
        this.scene.resultAnim(pokemon, 'Asleep', 'slp');
        pokemon.statusData.sleepTurns++;
        break;
      case 'truant':
        this.scene.resultAnim(pokemon, 'Loafing around', 'neutral');
        break;
      case 'recharge':
        this.scene.runOtherAnim('selfstatus', [pokemon]);
        this.scene.resultAnim(pokemon, 'Must recharge', 'neutral');
        break;
      case 'focuspunch':
        this.scene.resultAnim(pokemon, 'Lost focus', 'neutral');
        pokemon.removeTurnstatus('focuspunch');
        break;
      case 'shelltrap':
        this.scene.resultAnim(pokemon, 'Trap failed', 'neutral');
        pokemon.removeTurnstatus('shelltrap');
        break;
      case 'flinch':
        this.scene.resultAnim(pokemon, 'Flinched', 'neutral');
        pokemon.removeTurnstatus('focuspunch');
        break;
      case 'attract':
        this.scene.resultAnim(pokemon, 'Immobilized', 'neutral');
        break;
    }
    this.scene.animReset(pokemon);
  }
  activateAbility(pokemon, effectOrName, isNotBase) {
    if (!pokemon || !effectOrName) return;
    if (typeof effectOrName !== 'string') {
      if (effectOrName.effectType !== 'Ability') return;
      effectOrName = effectOrName.name;
    }
    this.scene.abilityActivateAnim(pokemon, effectOrName);
    pokemon.rememberAbility(effectOrName, isNotBase);
  }
  runMinor(args, kwArgs, nextArgs, nextKwargs) {
    if (nextArgs && nextKwargs) {
      if (args[2] === 'Sturdy' && args[0] === '-activate') {
        args[2] = 'ability: Sturdy';
      }
      if (['-crit', '-supereffective', '-resisted'].includes(args[0]) || args[2] === 'ability: Sturdy') {
        kwArgs.then = '.';
      }
      if (args[0] === '-damage' && !kwArgs.from && args[1] !== nextArgs[1] && (['-crit', '-supereffective', '-resisted'].includes(nextArgs[0]) || nextArgs[0] === '-damage' && !nextKwargs.from)) {
        kwArgs.then = '.';
      }
      if (args[0] === '-damage' && nextArgs[0] === '-damage' && kwArgs.from && kwArgs.from === nextKwargs.from) {
        kwArgs.then = '.';
      }
      if (args[0] === '-heal' && nextArgs[0] === '-heal' && kwArgs.from && kwArgs.from === nextKwargs.from) {
        kwArgs.then = '.';
      }
      if (args[0] === '-ability' && (args[2] === 'Intimidate' || args[4] === 'boost')) {
        kwArgs.then = '.';
      }
      if (args[0] === '-unboost' && nextArgs[0] === '-unboost') {
        kwArgs.then = '.';
      }
      if (args[0] === '-boost' && nextArgs[0] === '-boost') {
        kwArgs.then = '.';
      }
      if (args[0] === '-damage' && kwArgs.from === 'Leech Seed' && nextArgs[0] === '-heal' && nextKwargs.silent) {
        kwArgs.then = '.';
      }
      if (args[0] === 'detailschange' && nextArgs[0] === '-mega') {
        if (this.scene.closeMessagebar()) {
          this.currentStep--;
          return;
        }
        kwArgs.simult = '.';
      }
    }
    if (kwArgs.then) this.waitForAnimations = false;
    if (kwArgs.simult) this.waitForAnimations = 'simult';
    const CONSUMED = ['eaten', 'popped', 'consumed', 'held up'];
    switch (args[0]) {
      case '-damage':
        {
          let poke = this.getPokemon(args[1]);
          let damage = poke.healthParse(args[2], true);
          if (damage === null) break;
          let range = poke.getDamageRange(damage);
          if (kwArgs.from) {
            let effect = Dex.getEffect(kwArgs.from);
            let ofpoke = this.getPokemon(kwArgs.of);
            this.activateAbility(ofpoke, effect);
            if (effect.effectType === 'Item') {
              const itemPoke = ofpoke || poke;
              if (itemPoke.prevItem !== effect.name && !CONSUMED.includes(itemPoke.prevItemEffect)) {
                itemPoke.item = effect.name;
              }
            }
            switch (effect.id) {
              case 'brn':
                this.scene.runStatusAnim('brn', [poke]);
                break;
              case 'psn':
                this.scene.runStatusAnim('psn', [poke]);
                break;
              case 'baddreams':
                this.scene.runStatusAnim('cursed', [poke]);
                break;
              case 'curse':
                this.scene.runStatusAnim('cursed', [poke]);
                break;
              case 'confusion':
                this.scene.runStatusAnim('confusedselfhit', [poke]);
                break;
              case 'leechseed':
                this.scene.runOtherAnim('leech', [ofpoke, poke]);
                break;
              case 'bind':
              case 'wrap':
                this.scene.runOtherAnim('bound', [poke]);
                break;
            }
          } else {
            if (this.dex.moves.get(this.lastMove).category !== 'Status') {
              poke.timesAttacked++;
            }
            let damageinfo = '' + Pokemon.getFormattedRange(range, damage[1] === 100 ? 0 : 1, '\u2013');
            if (damage[1] !== 100) {
              let hover = `${damage[0] < 0 ? '\u2212' : ''}${Math.abs(damage[0])}/${damage[1]}`;
              if (damage[1] === 48) {
                // this is a hack
                hover += ' pixels';
              }
              // battle-log will convert this into <abbr>
              damageinfo = '||' + hover + '||' + damageinfo + '||';
            }
            args[3] = damageinfo;
          }
          this.scene.damageAnim(poke, Pokemon.getFormattedRange(range, 0, ' to '));
          this.log(args, kwArgs);
          break;
        }
      case '-heal':
        {
          let poke = this.getPokemon(args[1], Dex.getEffect(kwArgs.from).id === 'revivalblessing');
          let damage = poke.healthParse(args[2], true, true);
          if (damage === null) break;
          let range = poke.getDamageRange(damage);
          if (kwArgs.from) {
            let effect = Dex.getEffect(kwArgs.from);
            let ofpoke = this.getPokemon(kwArgs.of);
            this.activateAbility(ofpoke || poke, effect);
            if (effect.effectType === 'Item' && !CONSUMED.includes(poke.prevItemEffect)) {
              if (poke.prevItem !== effect.name) {
                poke.item = effect.name;
              }
            }
            switch (effect.id) {
              case 'lunardance':
                for (let trackedMove of poke.moveTrack) {
                  trackedMove[1] = 0;
                }
              // falls through
              case 'healingwish':
                this.lastMove = 'healing-wish';
                this.scene.runResidualAnim('healingwish', poke);
                poke.side.wisher = null;
                poke.statusData.sleepTurns = 0;
                poke.statusData.toxicTurns = 0;
                break;
              case 'wish':
                this.scene.runResidualAnim('wish', poke);
                break;
              case 'revivalblessing':
                this.scene.runResidualAnim('wish', poke);
                const {
                  siden
                } = this.parsePokemonId(args[1]);
                const side = this.sides[siden];
                poke.fainted = false;
                poke.status = '';
                this.scene.updateSidebar(side);
                break;
            }
          }
          this.scene.runOtherAnim('heal', [poke]);
          this.scene.healAnim(poke, Pokemon.getFormattedRange(range, 0, ' to '));
          this.log(args, kwArgs);
          break;
        }
      case '-sethp':
        {
          for (let k = 0; k < 2; k++) {
            let cpoke = this.getPokemon(args[1 + 2 * k]);
            if (cpoke) {
              let damage = cpoke.healthParse(args[2 + 2 * k]);
              let range = cpoke.getDamageRange(damage);
              let formattedRange = Pokemon.getFormattedRange(range, 0, ' to ');
              let diff = damage[0];
              if (diff > 0) {
                this.scene.healAnim(cpoke, formattedRange);
              } else {
                this.scene.damageAnim(cpoke, formattedRange);
              }
            }
          }
          this.log(args, kwArgs);
          break;
        }
      case '-boost':
        {
          let poke = this.getPokemon(args[1]);
          let stat = args[2];
          if (this.gen === 1 && stat === 'spd') break;
          if (this.gen === 1 && stat === 'spa') stat = 'spc';
          let amount = parseInt(args[3], 10);
          if (amount === 0) {
            this.scene.resultAnim(poke, 'already ' + poke.getBoost(stat), 'neutral');
            this.log(args, kwArgs);
            break;
          }
          if (!poke.boosts[stat]) {
            poke.boosts[stat] = 0;
          }
          poke.boosts[stat] += amount;
          if (!kwArgs.silent && kwArgs.from) {
            let effect = Dex.getEffect(kwArgs.from);
            let ofpoke = this.getPokemon(kwArgs.of);
            if (!(effect.id === 'weakarmor' && stat === 'spe')) {
              this.activateAbility(ofpoke || poke, effect);
            }
          }
          this.scene.resultAnim(poke, poke.getBoost(stat), 'good');
          this.log(args, kwArgs);
          break;
        }
      case '-unboost':
        {
          let poke = this.getPokemon(args[1]);
          let stat = args[2];
          if (this.gen === 1 && stat === 'spd') break;
          if (this.gen === 1 && stat === 'spa') stat = 'spc';
          let amount = parseInt(args[3], 10);
          if (amount === 0) {
            this.scene.resultAnim(poke, 'already ' + poke.getBoost(stat), 'neutral');
            this.log(args, kwArgs);
            break;
          }
          if (!poke.boosts[stat]) {
            poke.boosts[stat] = 0;
          }
          poke.boosts[stat] -= amount;
          if (!kwArgs.silent && kwArgs.from) {
            let effect = Dex.getEffect(kwArgs.from);
            let ofpoke = this.getPokemon(kwArgs.of);
            this.activateAbility(ofpoke || poke, effect);
          }
          this.scene.resultAnim(poke, poke.getBoost(stat), 'bad');
          this.log(args, kwArgs);
          break;
        }
      case '-setboost':
        {
          let poke = this.getPokemon(args[1]);
          let stat = args[2];
          let amount = parseInt(args[3], 10);
          poke.boosts[stat] = amount;
          this.scene.resultAnim(poke, poke.getBoost(stat), amount > 0 ? 'good' : 'bad');
          this.log(args, kwArgs);
          break;
        }
      case '-swapboost':
        {
          let poke = this.getPokemon(args[1]);
          let poke2 = this.getPokemon(args[2]);
          let stats = args[3] ? args[3].split(', ') : ['atk', 'def', 'spa', 'spd', 'spe', 'accuracy', 'evasion'];
          for (const stat of stats) {
            let tmp = poke.boosts[stat];
            poke.boosts[stat] = poke2.boosts[stat];
            if (!poke.boosts[stat]) delete poke.boosts[stat];
            poke2.boosts[stat] = tmp;
            if (!poke2.boosts[stat]) delete poke2.boosts[stat];
          }
          this.scene.resultAnim(poke, 'Stats swapped', 'neutral');
          this.scene.resultAnim(poke2, 'Stats swapped', 'neutral');
          this.log(args, kwArgs);
          break;
        }
      case '-clearpositiveboost':
        {
          let poke = this.getPokemon(args[1]);
          let ofpoke = this.getPokemon(args[2]);
          let effect = Dex.getEffect(args[3]);
          for (const stat in poke.boosts) {
            if (poke.boosts[stat] > 0) delete poke.boosts[stat];
          }
          this.scene.resultAnim(poke, 'Boosts lost', 'bad');
          if (effect.id) {
            switch (effect.id) {
              case 'spectralthief':
                // todo: update StealBoosts so it animates 1st on Spectral Thief
                this.scene.runOtherAnim('spectralthiefboost', [ofpoke, poke]);
                break;
            }
          }
          this.log(args, kwArgs);
          break;
        }
      case '-clearnegativeboost':
        {
          let poke = this.getPokemon(args[1]);
          for (const stat in poke.boosts) {
            if (poke.boosts[stat] < 0) delete poke.boosts[stat];
          }
          this.scene.resultAnim(poke, 'Restored', 'good');
          this.log(args, kwArgs);
          break;
        }
      case '-copyboost':
        {
          let poke = this.getPokemon(args[1]);
          let frompoke = this.getPokemon(args[2]);
          if (!kwArgs.silent && kwArgs.from) {
            let effect = Dex.getEffect(kwArgs.from);
            this.activateAbility(poke, effect);
          }
          let stats = args[3] ? args[3].split(', ') : ['atk', 'def', 'spa', 'spd', 'spe', 'accuracy', 'evasion'];
          for (const stat of stats) {
            poke.boosts[stat] = frompoke.boosts[stat];
            if (!poke.boosts[stat]) delete poke.boosts[stat];
          }
          if (this.gen >= 6) {
            const volatilesToCopy = ['focusenergy', 'gmaxchistrike', 'laserfocus'];
            for (const volatile of volatilesToCopy) {
              if (frompoke.volatiles[volatile]) {
                poke.addVolatile(volatile);
              } else {
                poke.removeVolatile(volatile);
              }
            }
          }
          this.scene.resultAnim(poke, 'Stats copied', 'neutral');
          this.log(args, kwArgs);
          break;
        }
      case '-clearboost':
        {
          let poke = this.getPokemon(args[1]);
          poke.boosts = {};
          if (!kwArgs.silent && kwArgs.from) {
            let effect = Dex.getEffect(kwArgs.from);
            let ofpoke = this.getPokemon(kwArgs.of);
            this.activateAbility(ofpoke || poke, effect);
          }
          this.scene.resultAnim(poke, 'Stats reset', 'neutral');
          this.log(args, kwArgs);
          break;
        }
      case '-invertboost':
        {
          let poke = this.getPokemon(args[1]);
          for (const stat in poke.boosts) {
            poke.boosts[stat] = -poke.boosts[stat];
          }
          this.scene.resultAnim(poke, 'Stats inverted', 'neutral');
          this.log(args, kwArgs);
          break;
        }
      case '-clearallboost':
        {
          let timeOffset = this.scene.timeOffset;
          for (const active of this.getAllActive()) {
            active.boosts = {};
            this.scene.timeOffset = timeOffset;
            this.scene.resultAnim(active, 'Stats reset', 'neutral');
          }
          this.log(args, kwArgs);
          break;
        }
      case '-crit':
        {
          let poke = this.getPokemon(args[1]);
          if (poke) this.scene.resultAnim(poke, 'Critical hit', 'bad');
          if (this.activeMoveIsSpread) kwArgs.spread = '.';
          this.log(args, kwArgs);
          break;
        }
      case '-supereffective':
        {
          let poke = this.getPokemon(args[1]);
          if (poke) {
            this.scene.resultAnim(poke, 'Super-effective', 'bad');
            if (Dex.afdMode === true) {
              // April Fool's 2018
              this.scene.runOtherAnim('hitmark', [poke]);
            }
          }
          if (this.activeMoveIsSpread) kwArgs.spread = '.';
          this.log(args, kwArgs);
          break;
        }
      case '-resisted':
        {
          let poke = this.getPokemon(args[1]);
          if (poke) this.scene.resultAnim(poke, 'Resisted', 'neutral');
          if (this.activeMoveIsSpread) kwArgs.spread = '.';
          this.log(args, kwArgs);
          break;
        }
      case '-immune':
        {
          let poke = this.getPokemon(args[1]);
          let fromeffect = Dex.getEffect(kwArgs.from);
          this.activateAbility(this.getPokemon(kwArgs.of) || poke, fromeffect);
          this.log(args, kwArgs);
          this.scene.resultAnim(poke, 'Immune', 'neutral');
          break;
        }
      case '-miss':
        {
          let target = this.getPokemon(args[2]);
          if (target) {
            this.scene.resultAnim(target, 'Missed', 'neutral');
          }
          this.log(args, kwArgs);
          break;
        }
      case '-fail':
        {
          let poke = this.getPokemon(args[1]);
          let effect = Dex.getEffect(args[2]);
          let fromeffect = Dex.getEffect(kwArgs.from);
          let ofpoke = this.getPokemon(kwArgs.of);
          if (fromeffect.id === 'clearamulet') {
            ofpoke.item = 'Clear Amulet';
          } else {
            this.activateAbility(ofpoke || poke, fromeffect);
          }
          switch (effect.id) {
            case 'brn':
              this.scene.resultAnim(poke, 'Already burned', 'neutral');
              break;
            case 'tox':
            case 'psn':
              this.scene.resultAnim(poke, 'Already poisoned', 'neutral');
              break;
            case 'slp':
              if (fromeffect.id === 'uproar') {
                this.scene.resultAnim(poke, 'Failed', 'neutral');
              } else {
                this.scene.resultAnim(poke, 'Already asleep', 'neutral');
              }
              break;
            case 'par':
              this.scene.resultAnim(poke, 'Already paralyzed', 'neutral');
              break;
            case 'frz':
              this.scene.resultAnim(poke, 'Already frozen', 'neutral');
              break;
            case 'unboost':
              this.scene.resultAnim(poke, 'Stat drop blocked', 'neutral');
              break;
            default:
              if (poke) {
                this.scene.resultAnim(poke, 'Failed', 'neutral');
              }
              break;
          }
          this.scene.animReset(poke);
          this.log(args, kwArgs);
          break;
        }
      case '-block':
        {
          let poke = this.getPokemon(args[1]);
          let ofpoke = this.getPokemon(kwArgs.of);
          let effect = Dex.getEffect(args[2]);
          this.activateAbility(ofpoke || poke, effect);
          switch (effect.id) {
            case 'quickguard':
              poke.addTurnstatus('quickguard');
              this.scene.resultAnim(poke, 'Quick Guard', 'good');
              break;
            case 'wideguard':
              poke.addTurnstatus('wideguard');
              this.scene.resultAnim(poke, 'Wide Guard', 'good');
              break;
            case 'craftyshield':
              poke.addTurnstatus('craftyshield');
              this.scene.resultAnim(poke, 'Crafty Shield', 'good');
              break;
            case 'protect':
              poke.addTurnstatus('protect');
              this.scene.resultAnim(poke, 'Protected', 'good');
              break;
            case 'safetygoggles':
              poke.item = 'Safety Goggles';
              break;
            case 'protectivepads':
              poke.item = 'Protective Pads';
              break;
            case 'abilityshield':
              poke.item = 'Ability Shield';
              break;
          }
          this.log(args, kwArgs);
          break;
        }
      case '-center':
      case '-notarget':
      case '-ohko':
      case '-combine':
      case '-hitcount':
      case '-waiting':
      case '-zbroken':
        {
          this.log(args, kwArgs);
          break;
        }
      case '-zpower':
        {
          let poke = this.getPokemon(args[1]);
          this.scene.runOtherAnim('zpower', [poke]);
          this.log(args, kwArgs);
          break;
        }
      case '-prepare':
        {
          let poke = this.getPokemon(args[1]);
          let moveid = toID(args[2]);
          let target = this.getPokemon(args[3]) || poke.side.foe.active[0] || poke;
          this.scene.runPrepareAnim(moveid, poke, target);
          this.log(args, kwArgs);
          break;
        }
      case '-mustrecharge':
        {
          let poke = this.getPokemon(args[1]);
          poke.addMovestatus('mustrecharge');
          this.scene.updateStatbar(poke);
          break;
        }
      case '-status':
        {
          let poke = this.getPokemon(args[1]);
          let effect = Dex.getEffect(kwArgs.from);
          let ofpoke = this.getPokemon(kwArgs.of) || poke;
          poke.status = args[2];
          this.activateAbility(ofpoke || poke, effect);
          if (effect.effectType === 'Item') {
            ofpoke.item = effect.name;
          }
          switch (args[2]) {
            case 'brn':
              this.scene.resultAnim(poke, 'Burned', 'brn');
              this.scene.runStatusAnim('brn', [poke]);
              break;
            case 'tox':
              this.scene.resultAnim(poke, 'Toxic poison', 'psn');
              this.scene.runStatusAnim('psn', [poke]);
              poke.statusData.toxicTurns = effect.name === "Toxic Orb" ? -1 : 0;
              break;
            case 'psn':
              this.scene.resultAnim(poke, 'Poisoned', 'psn');
              this.scene.runStatusAnim('psn', [poke]);
              break;
            case 'slp':
              this.scene.resultAnim(poke, 'Asleep', 'slp');
              if (effect.id === 'rest') {
                poke.statusData.sleepTurns = 0; // for Gen 2 use through Sleep Talk
              }
              break;
            case 'par':
              this.scene.resultAnim(poke, 'Paralyzed', 'par');
              this.scene.runStatusAnim('par', [poke]);
              break;
            case 'frz':
              this.scene.resultAnim(poke, 'Frozen', 'frz');
              this.scene.runStatusAnim('frz', [poke]);
              break;
            default:
              this.scene.updateStatbar(poke);
              break;
          }
          this.log(args, kwArgs);
          break;
        }
      case '-curestatus':
        {
          let poke = this.getPokemon(args[1]);
          let effect = Dex.getEffect(kwArgs.from);
          if (effect.id) {
            switch (effect.id) {
              case 'flamewheel':
              case 'flareblitz':
              case 'fusionflare':
              case 'sacredfire':
              case 'scald':
              case 'steameruption':
                kwArgs.thaw = '.';
                break;
            }
          }
          if (poke) {
            poke.status = '';
            switch (args[2]) {
              case 'brn':
                this.scene.resultAnim(poke, 'Burn cured', 'good');
                break;
              case 'tox':
              case 'psn':
                poke.statusData.toxicTurns = 0;
                this.scene.resultAnim(poke, 'Poison cured', 'good');
                break;
              case 'slp':
                this.scene.resultAnim(poke, 'Woke up', 'good');
                poke.statusData.sleepTurns = 0;
                break;
              case 'par':
                this.scene.resultAnim(poke, 'Paralysis cured', 'good');
                break;
              case 'frz':
                this.scene.resultAnim(poke, 'Thawed', 'good');
                break;
              default:
                poke.removeVolatile('confusion');
                this.scene.resultAnim(poke, 'Cured', 'good');
            }
          }
          this.log(args, kwArgs);
          break;
        }
      case '-cureteam':
        {
          // For old gens when the whole team was always cured
          let poke = this.getPokemon(args[1]);
          for (const target of poke.side.pokemon) {
            target.status = '';
            this.scene.updateStatbarIfExists(target);
          }
          this.scene.resultAnim(poke, 'Team Cured', 'good');
          this.log(args, kwArgs);
          break;
        }
      case '-item':
        {
          let poke = this.getPokemon(args[1]);
          let item = Dex.items.get(args[2]);
          let effect = Dex.getEffect(kwArgs.from);
          let ofpoke = this.getPokemon(kwArgs.of);
          if (!poke) {
            if (effect.id === 'frisk') {
              const possibleTargets = ofpoke.side.foe.active.filter(p => p !== null);
              if (possibleTargets.length === 1) {
                poke = possibleTargets[0];
              } else {
                this.activateAbility(ofpoke, "Frisk");
                this.log(args, kwArgs);
                break;
              }
            } else {
              throw new Error('No Pokemon in -item message');
            }
          }
          poke.item = item.name;
          poke.itemEffect = '';
          poke.removeVolatile('airballoon');
          if (item.id === 'airballoon') poke.addVolatile('airballoon');
          if (effect.id) {
            switch (effect.id) {
              case 'pickup':
                this.activateAbility(poke, "Pickup");
              // falls through
              case 'recycle':
                poke.itemEffect = 'found';
                this.scene.resultAnim(poke, item.name, 'neutral');
                break;
              case 'frisk':
                this.activateAbility(ofpoke, "Frisk");
                if (poke && poke !== ofpoke) {
                  // used for gen 6
                  poke.itemEffect = 'frisked';
                  this.scene.resultAnim(poke, item.name, 'neutral');
                }
                break;
              case 'magician':
              case 'pickpocket':
                this.activateAbility(poke, effect.name);
              // falls through
              case 'thief':
              case 'covet':
                // simulate the removal of the item from the ofpoke
                ofpoke.item = '';
                ofpoke.itemEffect = '';
                ofpoke.prevItem = item.name;
                ofpoke.prevItemEffect = 'stolen';
                ofpoke.addVolatile('itemremoved');
                poke.itemEffect = 'stolen';
                this.scene.resultAnim(poke, item.name, 'neutral');
                this.scene.resultAnim(ofpoke, 'Item Stolen', 'bad');
                break;
              case 'harvest':
                poke.itemEffect = 'harvested';
                this.activateAbility(poke, "Harvest");
                this.scene.resultAnim(poke, item.name, 'neutral');
                break;
              case 'bestow':
                poke.itemEffect = 'bestowed';
                this.scene.resultAnim(poke, item.name, 'neutral');
                break;
              case 'switcheroo':
              case 'trick':
                poke.itemEffect = 'tricked';
              // falls through
              default:
                break;
            }
          } else {
            switch (item.id) {
              case 'airballoon':
                this.scene.resultAnim(poke, 'Balloon', 'good');
                break;
            }
          }
          this.log(args, kwArgs);
          break;
        }
      case '-enditem':
        {
          let poke = this.getPokemon(args[1]);
          let item = Dex.items.get(args[2]);
          let effect = Dex.getEffect(kwArgs.from);
          if (this.gen > 4 || effect.id !== 'knockoff') {
            poke.item = '';
            poke.itemEffect = '';
            poke.prevItem = item.name;
            poke.prevItemEffect = '';
          }
          poke.removeVolatile('airballoon');
          poke.addVolatile('itemremoved');
          if (kwArgs.eat) {
            poke.prevItemEffect = 'eaten';
            this.scene.runOtherAnim('consume', [poke]);
            this.lastMove = item.id;
          } else if (kwArgs.weaken) {
            poke.prevItemEffect = 'eaten';
            this.lastMove = item.id;
          } else if (effect.id) {
            switch (effect.id) {
              case 'fling':
                poke.prevItemEffect = 'flung';
                break;
              case 'knockoff':
                if (this.gen <= 4) {
                  poke.itemEffect = 'knocked off';
                } else {
                  poke.prevItemEffect = 'knocked off';
                }
                this.scene.runOtherAnim('itemoff', [poke]);
                this.scene.resultAnim(poke, 'Item knocked off', 'neutral');
                break;
              case 'stealeat':
                poke.prevItemEffect = 'stolen';
                break;
              case 'gem':
                poke.prevItemEffect = 'consumed';
                break;
              case 'incinerate':
                poke.prevItemEffect = 'incinerated';
                break;
            }
          } else {
            switch (item.id) {
              case 'airballoon':
                poke.prevItemEffect = 'popped';
                poke.removeVolatile('airballoon');
                this.scene.resultAnim(poke, 'Balloon popped', 'neutral');
                break;
              case 'focussash':
                poke.prevItemEffect = 'consumed';
                this.scene.resultAnim(poke, 'Sash', 'neutral');
                break;
              case 'focusband':
                this.scene.resultAnim(poke, 'Focus Band', 'neutral');
                break;
              case 'redcard':
                poke.prevItemEffect = 'held up';
                break;
              default:
                poke.prevItemEffect = 'consumed';
                break;
            }
          }
          this.log(args, kwArgs);
          break;
        }
      case '-ability':
        {
          let poke = this.getPokemon(args[1]);
          let ability = Dex.abilities.get(args[2]);
          let oldAbility = Dex.abilities.get(args[3]);
          let effect = Dex.getEffect(kwArgs.from);
          let ofpoke = this.getPokemon(kwArgs.of);
          poke.rememberAbility(ability.name, effect.id && !kwArgs.fail);
          if (kwArgs.silent) {
            // do nothing
          } else if (oldAbility.id) {
            this.activateAbility(poke, oldAbility.name);
            this.scene.wait(500);
            this.activateAbility(poke, ability.name, true);
            ofpoke?.rememberAbility(ability.name);
          } else if (effect.id) {
            switch (effect.id) {
              case 'desolateland':
              case 'primordialsea':
              case 'deltastream':
                if (kwArgs.fail) {
                  this.activateAbility(poke, ability.name);
                }
                break;
              default:
                this.activateAbility(poke, ability.name);
                break;
            }
          } else {
            this.activateAbility(poke, ability.name);
          }
          this.scene.updateWeather();
          this.log(args, kwArgs);
          break;
        }
      case '-endability':
        {
          // deprecated; use |-start| for Gastro Acid
          // and the third arg of |-ability| for Entrainment et al
          let poke = this.getPokemon(args[1]);
          let ability = Dex.abilities.get(args[2]);
          poke.ability = '(suppressed)';
          if (ability.id) {
            if (!poke.baseAbility) poke.baseAbility = ability.name;
          }
          this.log(args, kwArgs);
          break;
        }
      case 'detailschange':
        {
          let poke = this.getPokemon(args[1]);
          poke.removeVolatile('formechange');
          poke.removeVolatile('typeadd');
          poke.removeVolatile('typechange');
          let newSpeciesForme = args[2];
          let commaIndex = newSpeciesForme.indexOf(',');
          if (commaIndex !== -1) {
            let level = newSpeciesForme.substr(commaIndex + 1).trim();
            if (level.startsWith('L')) {
              poke.level = parseInt(level.substr(1), 10);
            }
            newSpeciesForme = args[2].substr(0, commaIndex);
          }
          let species = this.dex.species.get(newSpeciesForme);
          if (nextArgs) {
            // Handle abilities in Mix and Mega
            if (nextArgs[0] === '-mega') {
              const item = this.dex.items.get(nextArgs[3]);
              if (item.megaStone) {
                let index = Object.values(item.megaStone).indexOf(species.name);
                if (index < 0) index = 0;
                species = this.dex.species.get(Object.values(item.megaStone)[index]);
              }
            } else if (nextArgs[0] === '-primal' && nextArgs.length > 2) {
              if (nextArgs[2] === 'Red Orb') species = this.dex.species.get('Groudon-Primal');
              if (nextArgs[2] === 'Blue Orb') species = this.dex.species.get('Kyogre-Primal');
            }
          }
          poke.speciesForme = newSpeciesForme;
          poke.ability = poke.baseAbility = species.abilities ? species.abilities['0'] : '';
          poke.details = args[2];
          poke.searchid = args[1].substr(0, 2) + args[1].substr(args[1].indexOf(':')) + '|' + args[2];
          this.scene.animTransform(poke, true, true);
          this.log(args, kwArgs);
          break;
        }
      case '-transform':
        {
          let poke = this.getPokemon(args[1]);
          let tpoke = this.getPokemon(args[2]);
          let effect = Dex.getEffect(kwArgs.from);
          if (poke === tpoke) throw new Error("Transforming into self");
          if (!kwArgs.silent) {
            this.activateAbility(poke, effect);
          }
          poke.boosts = {
            ...tpoke.boosts
          };
          poke.copyTypesFrom(tpoke, true);
          poke.ability = tpoke.ability;
          poke.timesAttacked = tpoke.timesAttacked;
          const targetForme = tpoke.volatiles.formechange;
          const speciesForme = targetForme && !targetForme[1].endsWith('-Gmax') ? targetForme[1] : tpoke.speciesForme;
          const pokemon = tpoke;
          const shiny = tpoke.shiny;
          const gender = tpoke.gender;
          const level = tpoke.level;
          poke.addVolatile('transform', pokemon, shiny, gender, level);
          poke.addVolatile('formechange', speciesForme);
          for (const trackedMove of tpoke.moveTrack) {
            poke.rememberMove(trackedMove[0], 0);
          }
          this.scene.animTransform(poke);
          this.scene.resultAnim(poke, 'Transformed', 'good');
          this.log(['-transform', args[1], args[2], tpoke.speciesForme], kwArgs);
          break;
        }
      case '-formechange':
        {
          let poke = this.getPokemon(args[1]);
          let species = Dex.species.get(args[2]);
          let fromeffect = Dex.getEffect(kwArgs.from);
          if (!poke.getSpeciesForme().endsWith('-Gmax') && !species.name.endsWith('-Gmax')) {
            poke.removeVolatile('typeadd');
            poke.removeVolatile('typechange');
            if (this.gen >= 6) poke.removeVolatile('autotomize');
          }
          if (!kwArgs.silent) {
            this.activateAbility(poke, fromeffect);
          }
          poke.addVolatile('formechange', species.name); // the formechange volatile reminds us to revert the sprite change on switch-out
          this.scene.animTransform(poke, true);
          this.log(args, kwArgs);
          break;
        }
      case '-mega':
        {
          let poke = this.getPokemon(args[1]);
          let item = Dex.items.get(args[3]);
          if (args[3]) {
            poke.item = item.name;
          }
          this.log(args, kwArgs);
          break;
        }
      case '-primal':
      case '-burst':
        {
          this.log(args, kwArgs);
          break;
        }
      case '-terastallize':
        {
          let poke = this.getPokemon(args[1]);
          let type = Dex.types.get(args[2]).name;
          let lockForme = false;
          poke.removeVolatile('typeadd');
          poke.teraType = type;
          poke.terastallized = type;
          poke.details += `, tera:${type}`;
          poke.searchid += `, tera:${type}`;
          if (poke.speciesForme.startsWith("Morpeko")) {
            lockForme = true;
            poke.speciesForme = poke.getSpeciesForme();
            poke.details = poke.details.replace("Morpeko", poke.speciesForme);
            poke.searchid = `${poke.ident}|${poke.details}`;
            delete poke.volatiles['formechange'];
          }
          this.scene.animTransform(poke, true, lockForme);
          this.scene.resetStatbar(poke);
          this.log(args, kwArgs);
          break;
        }
      case '-start':
        {
          let poke = this.getPokemon(args[1]);
          let effect = Dex.getEffect(args[2]);
          let ofpoke = this.getPokemon(kwArgs.of);
          let fromeffect = Dex.getEffect(kwArgs.from);
          this.activateAbility(poke, effect);
          this.activateAbility(ofpoke || poke, fromeffect);
          switch (effect.id) {
            case 'typechange':
              if (poke.terastallized) break;
              if (ofpoke && fromeffect.id === 'reflecttype') {
                poke.copyTypesFrom(ofpoke);
              } else {
                const types = Dex.sanitizeName(args[3] || '???');
                // Kind of a hack/hardcode protocol for now due to time constraints, should be expanded upon later
                if (fromeffect.id.startsWith('format')) {
                  poke.moddedType = types.split('/');
                }
                poke.removeVolatile('typeadd');
                poke.addVolatile('typechange', types);
                if (!kwArgs.silent) {
                  this.scene.typeAnim(poke, types);
                }
              }
              this.scene.updateStatbar(poke);
              break;
            case 'typeadd':
              const type = Dex.sanitizeName(args[3]);
              poke.addVolatile('typeadd', type);
              if (kwArgs.silent) break;
              this.scene.typeAnim(poke, type);
              break;
            case 'dynamax':
              poke.addVolatile('dynamax', !!args[3]);
              this.scene.animTransform(poke, true);
              break;
            case 'powertrick':
              this.scene.resultAnim(poke, 'Power Trick', 'neutral');
              break;
            case 'foresight':
            case 'miracleeye':
              this.scene.resultAnim(poke, 'Identified', 'bad');
              break;
            case 'telekinesis':
              this.scene.resultAnim(poke, 'Telekinesis', 'neutral');
              break;
            case 'confusion':
              if (!kwArgs.already) {
                this.scene.runStatusAnim('confused', [poke]);
                this.scene.resultAnim(poke, 'Confused', 'bad');
              }
              break;
            case 'leechseed':
              this.scene.updateStatbar(poke);
              break;
            case 'healblock':
              this.scene.resultAnim(poke, 'Heal Block', 'bad');
              break;
            case 'yawn':
              this.scene.resultAnim(poke, 'Drowsy', 'slp');
              break;
            case 'taunt':
              this.scene.resultAnim(poke, 'Taunted', 'bad');
              break;
            case 'imprison':
              this.scene.resultAnim(poke, 'Imprisoning', 'good');
              break;
            case 'disable':
              this.scene.resultAnim(poke, 'Disabled', 'bad');
              break;
            case 'embargo':
              this.scene.resultAnim(poke, 'Embargo', 'bad');
              break;
            case 'torment':
              this.scene.resultAnim(poke, 'Tormented', 'bad');
              break;
            case 'ingrain':
              this.scene.resultAnim(poke, 'Ingrained', 'good');
              break;
            case 'aquaring':
              this.scene.resultAnim(poke, 'Aqua Ring', 'good');
              break;
            case 'stockpile1':
              this.scene.resultAnim(poke, 'Stockpile', 'good');
              break;
            case 'stockpile2':
              poke.removeVolatile('stockpile1');
              this.scene.resultAnim(poke, 'Stockpile&times;2', 'good');
              break;
            case 'stockpile3':
              poke.removeVolatile('stockpile2');
              this.scene.resultAnim(poke, 'Stockpile&times;3', 'good');
              break;
            case 'perish0':
              poke.removeVolatile('perish1');
              break;
            case 'perish1':
              poke.removeVolatile('perish2');
              this.scene.resultAnim(poke, 'Perish next turn', 'bad');
              break;
            case 'perish2':
              poke.removeVolatile('perish3');
              this.scene.resultAnim(poke, 'Perish in 2', 'bad');
              break;
            case 'perish3':
              if (!kwArgs.silent) this.scene.resultAnim(poke, 'Perish in 3', 'bad');
              break;
            case 'encore':
              this.scene.resultAnim(poke, 'Encored', 'bad');
              break;
            case 'bide':
              this.scene.resultAnim(poke, 'Bide', 'good');
              break;
            case 'attract':
              this.scene.resultAnim(poke, 'Attracted', 'bad');
              break;
            case 'autotomize':
              this.scene.resultAnim(poke, 'Lightened', 'good');
              if (poke.volatiles.autotomize) {
                poke.volatiles.autotomize[1]++;
              } else {
                poke.addVolatile('autotomize', 1);
              }
              break;
            case 'focusenergy':
              this.scene.resultAnim(poke, '+Crit rate', 'good');
              break;
            case 'curse':
              this.scene.resultAnim(poke, 'Cursed', 'bad');
              break;
            case 'nightmare':
              this.scene.resultAnim(poke, 'Nightmare', 'bad');
              break;
            case 'magnetrise':
              this.scene.resultAnim(poke, 'Magnet Rise', 'good');
              break;
            case 'smackdown':
              this.scene.resultAnim(poke, 'Smacked Down', 'bad');
              poke.removeVolatile('magnetrise');
              poke.removeVolatile('telekinesis');
              if (poke.lastMove === 'fly' || poke.lastMove === 'bounce') this.scene.animReset(poke);
              break;
            case 'substitute':
              if (kwArgs.damage) {
                this.scene.resultAnim(poke, 'Damage', 'bad');
              } else if (kwArgs.block) {
                this.scene.resultAnim(poke, 'Blocked', 'neutral');
              }
              break;

            // Gen 1-2
            case 'mist':
              this.scene.resultAnim(poke, 'Mist', 'good');
              break;
            // Gen 1
            case 'lightscreen':
              this.scene.resultAnim(poke, 'Light Screen', 'good');
              break;
            case 'reflect':
              this.scene.resultAnim(poke, 'Reflect', 'good');
              break;
            case 'futuresight':
              poke.side.addSideCondition(effect, false);
              this.scene.updateWeather();
              break;
            case 'doomdesire':
              poke.side.addSideCondition(effect, false);
              this.scene.updateWeather();
              break;
          }
          if (!(effect.id === 'typechange' && poke.terastallized) && effect.id !== 'futuresight' && effect.id !== 'doomdesire') {
            poke.addVolatile(effect.id);
          }
          this.scene.updateStatbar(poke);
          this.log(args, kwArgs);
          break;
        }
      case '-end':
        {
          let poke = this.getPokemon(args[1]);
          let effect = Dex.getEffect(args[2]);
          let fromeffect = Dex.getEffect(kwArgs.from);
          poke.removeVolatile(effect.id);
          if (kwArgs.silent && !(effect.id === 'protosynthesis' || effect.id === 'quarkdrive')) {
            // do nothing
          } else {
            switch (effect.id) {
              case 'dynamax':
                this.scene.animTransform(poke);
                break;
              case 'powertrick':
                this.scene.resultAnim(poke, 'Power Trick', 'neutral');
                break;
              case 'telekinesis':
                this.scene.resultAnim(poke, 'Telekinesis&nbsp;ended', 'neutral');
                break;
              case 'skydrop':
                if (kwArgs.interrupt) {
                  this.scene.anim(poke, {
                    time: 100
                  });
                }
                break;
              case 'confusion':
                this.scene.resultAnim(poke, 'Confusion&nbsp;ended', 'good');
                break;
              case 'leechseed':
                if (fromeffect.id === 'rapidspin') {
                  this.scene.resultAnim(poke, 'De-seeded', 'good');
                }
                break;
              case 'healblock':
                this.scene.resultAnim(poke, 'Heal Block ended', 'good');
                break;
              case 'attract':
                this.scene.resultAnim(poke, 'Attract&nbsp;ended', 'good');
                break;
              case 'taunt':
                this.scene.resultAnim(poke, 'Taunt&nbsp;ended', 'good');
                break;
              case 'disable':
                this.scene.resultAnim(poke, 'Disable&nbsp;ended', 'good');
                break;
              case 'embargo':
                this.scene.resultAnim(poke, 'Embargo ended', 'good');
                break;
              case 'torment':
                this.scene.resultAnim(poke, 'Torment&nbsp;ended', 'good');
                break;
              case 'encore':
                this.scene.resultAnim(poke, 'Encore&nbsp;ended', 'good');
                break;
              case 'bide':
                this.scene.runOtherAnim('bideunleash', [poke]);
                break;
              case 'illusion':
                this.scene.resultAnim(poke, 'Illusion ended', 'bad');
                poke.rememberAbility('Illusion');
                break;
              case 'slowstart':
                this.scene.resultAnim(poke, 'Slow Start ended', 'good');
                break;
              case 'perishsong':
                // for backwards compatibility
                poke.removeVolatile('perish3');
                break;
              case 'substitute':
                this.scene.resultAnim(poke, 'Faded', 'bad');
                break;
              case 'stockpile':
                poke.removeVolatile('stockpile1');
                poke.removeVolatile('stockpile2');
                poke.removeVolatile('stockpile3');
                break;
              case 'protosynthesis':
                poke.removeVolatile('protosynthesisatk');
                poke.removeVolatile('protosynthesisdef');
                poke.removeVolatile('protosynthesisspa');
                poke.removeVolatile('protosynthesisspd');
                poke.removeVolatile('protosynthesisspe');
                break;
              case 'quarkdrive':
                poke.removeVolatile('quarkdriveatk');
                poke.removeVolatile('quarkdrivedef');
                poke.removeVolatile('quarkdrivespa');
                poke.removeVolatile('quarkdrivespd');
                poke.removeVolatile('quarkdrivespe');
                break;
              default:
                if (effect.effectType === 'Move') {
                  if (effect.name === 'Doom Desire') {
                    this.scene.runOtherAnim('doomdesirehit', [poke]);
                    poke.side.foe.removeSideCondition('Doom Desire');
                    this.scene.updateWeather();
                  }
                  if (effect.name === 'Future Sight') {
                    this.scene.runOtherAnim('futuresighthit', [poke]);
                    poke.side.foe.removeSideCondition('Future Sight');
                    this.scene.updateWeather();
                  }
                }
            }
          }
          this.scene.updateStatbar(poke);
          this.log(args, kwArgs);
          break;
        }
      case '-singleturn':
        {
          let poke = this.getPokemon(args[1]);
          let effect = Dex.getEffect(args[2]);
          if (effect.id === 'roost' && !poke.getTypeList().includes('Flying')) {
            break;
          }
          poke.addTurnstatus(effect.id);
          switch (effect.id) {
            case 'roost':
              this.scene.resultAnim(poke, 'Landed', 'neutral');
              break;
            case 'quickguard':
              this.scene.resultAnim(poke, 'Quick Guard', 'good');
              break;
            case 'wideguard':
              this.scene.resultAnim(poke, 'Wide Guard', 'good');
              break;
            case 'craftyshield':
              this.scene.resultAnim(poke, 'Crafty Shield', 'good');
              break;
            case 'matblock':
              this.scene.resultAnim(poke, 'Mat Block', 'good');
              break;
            case 'protect':
              this.scene.resultAnim(poke, 'Protected', 'good');
              break;
            case 'endure':
              this.scene.resultAnim(poke, 'Enduring', 'good');
              break;
            case 'helpinghand':
              this.scene.resultAnim(poke, 'Helping Hand', 'good');
              break;
            case 'focuspunch':
              this.scene.resultAnim(poke, 'Focusing', 'neutral');
              poke.rememberMove(effect.name, 0);
              break;
            case 'shelltrap':
              this.scene.resultAnim(poke, 'Trap set', 'neutral');
              poke.rememberMove(effect.name, 0);
              break;
            case 'beakblast':
              this.scene.runOtherAnim('bidecharge', [poke]);
              this.scene.resultAnim(poke, 'Beak Blast', 'neutral');
              break;
          }
          this.scene.updateStatbar(poke);
          this.log(args, kwArgs);
          break;
        }
      case '-singlemove':
        {
          let poke = this.getPokemon(args[1]);
          let effect = Dex.getEffect(args[2]);
          poke.addMovestatus(effect.id);
          switch (effect.id) {
            case 'grudge':
              this.scene.resultAnim(poke, 'Grudge', 'neutral');
              break;
            case 'destinybond':
              this.scene.resultAnim(poke, 'Destiny Bond', 'neutral');
              break;
          }
          this.scene.updateStatbar(poke);
          this.log(args, kwArgs);
          break;
        }
      case '-activate':
        {
          let poke = this.getPokemon(args[1]);
          let effect = Dex.getEffect(args[2]);
          let target = this.getPokemon(args[3]);
          this.activateAbility(poke, effect);
          switch (effect.id) {
            case 'poltergeist':
              poke.item = kwArgs.item;
              poke.itemEffect = 'disturbed';
              break;
            case 'symbiosis':
              poke.item = '';
              poke.itemEffect = '';
              poke.prevItem = kwArgs.item;
              poke.prevItemEffect = 'given away';
              target.item = kwArgs.item;
              target.itemEffect = 'shared';
              break;
            case 'grudge':
              poke.rememberMove(kwArgs.move, Infinity);
              break;
            case 'substitute':
              if (kwArgs.damage) {
                this.scene.resultAnim(poke, 'Damage', 'bad');
              } else if (kwArgs.block) {
                this.scene.resultAnim(poke, 'Blocked', 'neutral');
              }
              break;
            case 'attract':
              this.scene.runStatusAnim('attracted', [poke]);
              break;
            case 'bide':
              this.scene.runOtherAnim('bidecharge', [poke]);
              break;

            // move activations
            case 'aromatherapy':
              this.scene.resultAnim(poke, 'Team Cured', 'good');
              break;
            case 'healbell':
              this.scene.resultAnim(poke, 'Team Cured', 'good');
              break;
            case 'brickbreak':
              target.side.removeSideCondition('Reflect');
              target.side.removeSideCondition('LightScreen');
              break;
            case 'hyperspacefury':
            case 'hyperspacehole':
            case 'phantomforce':
            case 'shadowforce':
            case 'feint':
              this.scene.resultAnim(poke, 'Protection broken', 'bad');
              poke.removeTurnstatus('protect');
              for (const curTarget of poke.side.pokemon) {
                curTarget.removeTurnstatus('wideguard');
                curTarget.removeTurnstatus('quickguard');
                curTarget.removeTurnstatus('craftyshield');
                curTarget.removeTurnstatus('matblock');
                this.scene.updateStatbar(curTarget);
              }
              break;
            case 'eeriespell':
            case 'gmaxdepletion':
            case 'spite':
              let move = Dex.moves.get(kwArgs.move).name;
              let pp = Number(kwArgs.number);
              if (isNaN(pp)) pp = 4;
              poke.rememberMove(move, pp);
              break;
            case 'gravity':
              poke.removeVolatile('magnetrise');
              poke.removeVolatile('telekinesis');
              this.scene.anim(poke, {
                time: 100
              });
              break;
            case 'skillswap':
            case 'wanderingspirit':
              if (this.gen <= 4) break;
              let pokeability = Dex.sanitizeName(kwArgs.ability) || target.ability;
              let targetability = Dex.sanitizeName(kwArgs.ability2) || poke.ability;
              if (pokeability) {
                poke.ability = pokeability;
                if (!target.baseAbility) target.baseAbility = pokeability;
              }
              if (targetability) {
                target.ability = targetability;
                if (!poke.baseAbility) poke.baseAbility = targetability;
              }
              if (poke.side !== target.side) {
                this.activateAbility(poke, pokeability, true);
                this.activateAbility(target, targetability, true);
              }
              break;

            // ability activations
            case 'electromorphosis':
            case 'windpower':
              poke.addMovestatus('charge');
              break;
            case 'forewarn':
              if (target) {
                target.rememberMove(kwArgs.move, 0);
              } else {
                let foeActive = [];
                for (const maybeTarget of poke.side.foe.active) {
                  if (maybeTarget && !maybeTarget.fainted) foeActive.push(maybeTarget);
                }
                if (foeActive.length === 1) {
                  foeActive[0].rememberMove(kwArgs.move, 0);
                }
              }
              break;
            case 'lingeringaroma':
            case 'mummy':
              if (!kwArgs.ability) break; // if Mummy activated but failed, no ability will have been sent
              let ability = Dex.abilities.get(kwArgs.ability);
              this.activateAbility(target, ability.name);
              this.activateAbility(poke, effect.name);
              this.scene.wait(700);
              this.activateAbility(target, effect.name, true);
              break;

            // item activations
            case 'leppaberry':
            case 'mysteryberry':
              poke.rememberMove(kwArgs.move, effect.id === 'leppaberry' ? -10 : -5);
              break;
            case 'focusband':
              poke.item = 'Focus Band';
              break;
            case 'quickclaw':
              poke.item = 'Quick Claw';
              break;
            case 'abilityshield':
              poke.item = 'Ability Shield';
              break;
            default:
              if (kwArgs.broken) {
                // for custom moves that break protection
                this.scene.resultAnim(poke, 'Protection broken', 'bad');
              }
          }
          this.log(args, kwArgs);
          break;
        }
      case '-sidestart':
        {
          let side = this.getSide(args[1]);
          let effect = Dex.getEffect(args[2]);
          side.addSideCondition(effect, !!kwArgs.persistent);
          switch (effect.id) {
            case 'tailwind':
            case 'auroraveil':
            case 'reflect':
            case 'lightscreen':
            case 'safeguard':
            case 'mist':
            case 'futuresight':
            case 'doomdesire':
            case 'gmaxwildfire':
            case 'gmaxvolcalith':
            case 'gmaxvinelash':
            case 'gmaxcannonade':
            case 'grasspledge':
            case 'firepledge':
            case 'waterpledge':
              this.scene.updateWeather();
              break;
          }
          this.log(args, kwArgs);
          break;
        }
      case '-sideend':
        {
          let side = this.getSide(args[1]);
          let effect = Dex.getEffect(args[2]);
          // let from = Dex.getEffect(kwArgs.from);
          // let ofpoke = this.getPokemon(kwArgs.of);
          side.removeSideCondition(effect.name);
          this.log(args, kwArgs);
          break;
        }
      case '-swapsideconditions':
        {
          this.swapSideConditions();
          this.scene.updateWeather();
          this.log(args, kwArgs);
          break;
        }
      case '-weather':
        {
          let effect = Dex.getEffect(args[1]);
          let poke = this.getPokemon(kwArgs.of) || undefined;
          let ability = Dex.getEffect(kwArgs.from);
          if (!effect.id || effect.id === 'none') {
            kwArgs.from = this.weather;
          }
          this.changeWeather(effect.name, poke, !!kwArgs.upkeep, ability);
          this.log(args, kwArgs);
          break;
        }
      case '-fieldstart':
        {
          let effect = Dex.getEffect(args[1]);
          let poke = this.getPokemon(kwArgs.of);
          let fromeffect = Dex.getEffect(kwArgs.from);
          this.activateAbility(poke, fromeffect);
          let minTimeLeft = 5;
          let maxTimeLeft = 0;
          if (effect.id.endsWith('terrain')) {
            for (let i = this.pseudoWeather.length - 1; i >= 0; i--) {
              let pwID = toID(this.pseudoWeather[i][0]);
              if (pwID.endsWith('terrain')) {
                this.pseudoWeather.splice(i, 1);
                continue;
              }
            }
            if (this.gen > 6) maxTimeLeft = 8;
          }
          if (kwArgs.persistent) minTimeLeft += 2;
          this.addPseudoWeather(effect.name, minTimeLeft, maxTimeLeft);
          switch (effect.id) {
            case 'gravity':
              if (this.seeking !== null) break;
              for (const active of this.getAllActive()) {
                this.scene.runOtherAnim('gravity', [active]);
              }
              break;
          }
          this.log(args, kwArgs);
          break;
        }
      case '-fieldend':
        {
          let effect = Dex.getEffect(args[1]);
          // let poke = this.getPokemon(kwArgs.of);
          this.removePseudoWeather(effect.name);
          this.log(args, kwArgs);
          break;
        }
      case '-fieldactivate':
        {
          let effect = Dex.getEffect(args[1]);
          switch (effect.id) {
            case 'perishsong':
              this.scene.updateStatbars();
              break;
          }
          this.log(args, kwArgs);
          break;
        }
      case '-anim':
        {
          let poke = this.getPokemon(args[1]);
          let move = Dex.moves.get(args[2]);
          if (this.checkActive(poke)) return;
          let poke2 = this.getPokemon(args[3]);
          this.scene.beforeMove(poke);
          this.animateMove(poke, move, poke2, kwArgs);
          this.scene.afterMove(poke);
          break;
        }
      case '-hint':
      case '-message':
      case '-candynamax':
        {
          this.log(args, kwArgs);
          break;
        }
      default:
        {
          throw new Error(`Unrecognized minor action: ${args[0]}`);
          break;
        }
    }
  }
  /*
  parseSpriteData(name) {
  	let siden = 0,
  		foe = false;
  	while (true) {
  		if (name.substr(0, 6) === 'foeof-') {
  			foe = true;
  			name = name.substr(6);
  		} else if (name.substr(0, 9) === 'switched-') name = name.substr(9);
  		else if (name.substr(0, 9) === 'existing-') name = name.substr(9);
  		else if (name.substr(0, 4) === 'foe-') {
  			siden = this.p2.n;
  			name = name.substr(4);
  		} else if (name.substr(0, 5) === 'ally-') {
  			siden = this.p1.n;
  			name = name.substr(5);
  		} else break;
  	}
  	if (name.substr(name.length - 1) === ')') {
  		let parenIndex = name.lastIndexOf('(');
  		if (parenIndex > 0) {
  			let species = name.substr(parenIndex + 1);
  			name = species.substr(0, species.length - 1);
  		}
  	}
  	if (foe) siden = (siden ? 0 : 1);
  		let data = Dex.species.get(name);
  	return data.spriteData[siden];
  }
  */
  /**
   * @param name Leave blank for Team Preview
   * @param pokemonid Leave blank for Team Preview
   * @param details
   * @param output
   */
  parseDetails(name, pokemonid, details, output = {}) {
    const isTeamPreview = !name;
    output.details = details;
    output.name = name;
    output.speciesForme = name;
    output.level = 100;
    output.shiny = false;
    output.gender = '';
    output.ident = !isTeamPreview ? pokemonid : '';
    output.searchid = !isTeamPreview ? `${pokemonid}|${details}` : '';
    let splitDetails = details.split(', ');
    if (splitDetails[splitDetails.length - 1].startsWith('tera:')) {
      output.terastallized = splitDetails[splitDetails.length - 1].slice(5);
      splitDetails.pop();
    }
    if (splitDetails[splitDetails.length - 1] === 'shiny') {
      output.shiny = true;
      splitDetails.pop();
    }
    if (splitDetails[splitDetails.length - 1] === 'M' || splitDetails[splitDetails.length - 1] === 'F') {
      output.gender = splitDetails[splitDetails.length - 1];
      splitDetails.pop();
    }
    if (splitDetails[1]) {
      output.level = parseInt(splitDetails[1].substr(1), 10) || 100;
    }
    if (splitDetails[0]) {
      output.speciesForme = splitDetails[0];
    }
    return output;
  }
  parseHealth(hpstring, output = {}) {
    let [hp, status] = hpstring.split(' ');

    // hp parse
    output.hpcolor = '';
    if (hp === '0' || hp === '0.0') {
      if (!output.maxhp) output.maxhp = 100;
      output.hp = 0;
    } else if (hp.indexOf('/') > 0) {
      let [curhp, maxhp] = hp.split('/');
      if (isNaN(parseFloat(curhp)) || isNaN(parseFloat(maxhp))) {
        return null;
      }
      output.hp = parseFloat(curhp);
      output.maxhp = parseFloat(maxhp);
      if (output.hp > output.maxhp) output.hp = output.maxhp;
      const colorchar = maxhp.slice(-1);
      if (colorchar === 'r' || colorchar === 'y' || colorchar === 'g') {
        output.hpcolor = colorchar;
      }
    } else if (!isNaN(parseFloat(hp))) {
      if (!output.maxhp) output.maxhp = 100;
      output.hp = output.maxhp * parseFloat(hp) / 100;
    }

    // status parse
    if (!status) {
      output.status = '';
    } else if (status === 'par' || status === 'brn' || status === 'slp' || status === 'frz' || status === 'tox') {
      output.status = status;
    } else if (status === 'psn' && output.status !== 'tox') {
      output.status = status;
    } else if (status === 'fnt') {
      output.hp = 0;
      output.fainted = true;
    }
    return output;
  }
  parsePokemonId(pokemonid) {
    let name = pokemonid;
    let siden = -1;
    let slot = -1; // if there is an explicit slot for this pokemon
    if (/^p[1-9]($|: )/.test(name)) {
      siden = parseInt(name.charAt(1), 10) - 1;
      name = name.slice(4);
    } else if (/^p[1-9][a-f]: /.test(name)) {
      const slotChart = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5
      };
      siden = parseInt(name.charAt(1), 10) - 1;
      slot = slotChart[name.charAt(2)];
      name = name.slice(5);
      pokemonid = `p${siden + 1}: ${name}`;
    }
    return {
      name,
      siden,
      slot,
      pokemonid
    };
  }
  getSwitchedPokemon(pokemonid, details) {
    if (pokemonid === '??') throw new Error(`pokemonid not passed`);
    const {
      name,
      siden,
      slot,
      pokemonid: parsedPokemonid
    } = this.parsePokemonId(pokemonid);
    pokemonid = parsedPokemonid;
    const searchid = `${pokemonid}|${details}`;
    const side = this.sides[siden];

    // search inactive revealed pokemon
    for (let i = 0; i < side.pokemon.length; i++) {
      let pokemon = side.pokemon[i];
      if (pokemon.fainted) continue;
      // already active, can't be switching in
      if (side.active.includes(pokemon)) continue;
      // just switched out, can't be switching in
      if (pokemon === side.lastPokemon && !side.active[slot]) continue;
      if (pokemon.searchid === searchid) {
        // exact match
        if (slot >= 0) pokemon.slot = slot;
        return pokemon;
      }
      if (!pokemon.searchid && pokemon.checkDetails(details)) {
        // switch-in matches Team Preview entry
        pokemon = side.addPokemon(name, pokemonid, details, i);
        if (slot >= 0) pokemon.slot = slot;
        return pokemon;
      }
    }

    // pokemon not found, create a new pokemon object for it
    const pokemon = side.addPokemon(name, pokemonid, details);
    if (slot >= 0) pokemon.slot = slot;
    return pokemon;
  }
  rememberTeamPreviewPokemon(sideid, details) {
    const {
      siden
    } = this.parsePokemonId(sideid);
    return this.sides[siden].addPokemon('', '', details);
  }
  findCorrespondingPokemon(serverPokemon) {
    const {
      siden
    } = this.parsePokemonId(serverPokemon.ident);
    const searchid = `${serverPokemon.ident}|${serverPokemon.details}`;
    for (const pokemon of this.sides[siden].pokemon) {
      if (pokemon.searchid === searchid) {
        return pokemon;
      }
    }
    return null;
  }
  getPokemon(pokemonid, faintedOnly = false) {
    if (!pokemonid || pokemonid === '??' || pokemonid === 'null' || pokemonid === 'false') {
      return null;
    }
    const {
      siden,
      slot,
      pokemonid: parsedPokemonid
    } = this.parsePokemonId(pokemonid);
    pokemonid = parsedPokemonid;

    /** if true, don't match an active pokemon */
    const isInactive = slot < 0;
    const side = this.sides[siden];

    // search player's pokemon
    if (!isInactive && side.active[slot]) return side.active[slot];
    for (const pokemon of side.pokemon) {
      if (isInactive && !this.compatMode && side.active.includes(pokemon)) continue;
      if (faintedOnly && pokemon.hp) continue;
      if (pokemon.ident === pokemonid) {
        // name matched, good enough
        if (slot >= 0) pokemon.slot = slot;
        return pokemon;
      }
    }
    return null;
  }
  getSide(sidename) {
    if (sidename === 'p1' || sidename.startsWith('p1:')) return this.p1;
    if (sidename === 'p2' || sidename.startsWith('p2:')) return this.p2;
    if ((sidename === 'p3' || sidename.startsWith('p3:')) && this.p3) return this.p3;
    if ((sidename === 'p4' || sidename.startsWith('p4:')) && this.p4) return this.p4;
    if (this.nearSide.id === sidename) return this.nearSide;
    if (this.farSide.id === sidename) return this.farSide;
    if (this.nearSide.name === sidename) return this.nearSide;
    if (this.farSide.name === sidename) return this.farSide;
    return {
      name: sidename,
      id: sidename.replace(/ /g, '')
    };
  }
  add(command) {
    if (command) this.stepQueue.push(command);
    if (this.atQueueEnd && this.currentStep < this.stepQueue.length) {
      this.atQueueEnd = false;
      this.nextStep();
    }
  }
  addBatch(commands) {
    for (const command of commands) {
      switch (command.split('|', 2)[1]) {
        case 'c':
        case 'c:':
        case 'chat':
        case 'chatmsg':
        case 'inactive':
          this.run(command, true);
          this.preemptStepQueue.push(command);
          break;
      }
      this.stepQueue.push(command);
    }
    this.add();
  }
  /**
   * PS's preempt system is intended to show chat messages immediately,
   * instead of waiting for the battle to get to the point where the
   * message was said.
   *
   * In addition to being a nice quality-of-life feature, it's also
   * important to make sure timer updates happen in real-time.
   */
  instantAdd(command) {
    this.run(command, true);
    this.preemptStepQueue.push(command);
    this.add(command);
  }
  runMajor(args, kwArgs, preempt) {
    switch (args[0]) {
      case 'start':
        {
          this.nearSide.active[0] = null;
          this.farSide.active[0] = null;
          this.scene.resetSides();
          this.start();
          break;
        }
      case 'upkeep':
        {
          this.usesUpkeep = true;
          this.updateTurnCounters();
          // Prevents getSwitchedPokemon from skipping over a Pokemon that switched out mid turn (e.g. U-turn)
          for (const side of this.sides) {
            side.lastPokemon = null;
          }
          break;
        }
      case 'turn':
        {
          this.setTurn(parseInt(args[1], 10));
          this.log(args);
          break;
        }
      case 'tier':
        {
          this.tier = args[1];
          this.format = Dex.formats.get(this.tier);
          if (this.tier.endsWith('Random Battle')) {
            this.speciesClause = true;
          }
          if (this.tier.endsWith(' (Blitz)')) {
            this.messageFadeTime = 40;
            this.isBlitz = true;
          }
          if (this.format.isLetsGo) {
            this.dex = Dex.mod('gen7letsgo');
          }
          if (this.tier.includes('Super Staff Bros')) {
            this.dex = Dex.mod('gen9ssb');
          }
          if (this.format.isChampions) {
            this.dex = Dex.mod('champions');
          }
          this.log(args);
          break;
        }
      case 'gametype':
        {
          this.gameType = args[1];
          this.compatMode = false;
          switch (args[1]) {
            case 'multi':
            case 'freeforall':
              this.pokemonControlled = 1;
              if (!this.p3) this.p3 = new Side(this, 2);
              if (!this.p4) this.p4 = new Side(this, 3);
              this.p3.foe = this.p2;
              this.p4.foe = this.p1;
              if (args[1] === 'multi') {
                this.p4.ally = this.p2;
                this.p3.ally = this.p1;
                this.p1.ally = this.p3;
                this.p2.ally = this.p4;
              }
              this.p3.isFar = this.p1.isFar;
              this.p4.isFar = this.p2.isFar;
              this.sides = [this.p1, this.p2, this.p3, this.p4];
              // intentionally sync p1/p3 and p2/p4's active arrays
              this.p1.active = this.p3.active = [null, null];
              this.p2.active = this.p4.active = [null, null];
              break;
            case 'doubles':
              this.nearSide.active = [null, null];
              this.farSide.active = [null, null];
              break;
            case 'triples':
            case 'rotation':
              this.nearSide.active = [null, null, null];
              this.farSide.active = [null, null, null];
              break;
            default:
              for (const side of this.sides) side.active = [null];
              break;
          }
          if (!this.pokemonControlled) this.pokemonControlled = this.nearSide.active.length;
          this.scene.updateGen();
          this.scene.resetSides();
          break;
        }
      case 'rule':
        {
          let ruleName = args[1].split(': ')[0];
          if (ruleName === 'Species Clause') this.speciesClause = true;
          if (ruleName === 'Blitz') {
            this.messageFadeTime = 40;
            this.isBlitz = true;
          }
          if (ruleName === 'Exact HP Mod') this.reportExactHP = true;
          if (ruleName === 'HP Percentage Mod') this.hpPercentageMod = true;
          this.rules[ruleName] = 1;
          this.log(args);
          break;
        }
      case 'rated':
        {
          this.rated = args[1] || true;
          this.scene.updateGen();
          this.log(args);
          break;
        }
      case 'inactive':
        {
          if (!this.kickingInactive) this.kickingInactive = true;
          if (args[1].startsWith("Time left: ")) {
            let [time, totalTime, graceTime] = args[1].split(' | ');
            this.kickingInactive = parseInt(time.slice(11), 10) || true;
            this.totalTimeLeft = parseInt(totalTime, 10);
            this.graceTimeLeft = parseInt(graceTime || '', 10) || 0;
            if (this.totalTimeLeft === this.kickingInactive) this.totalTimeLeft = 0;
            return;
          } else if (args[1].startsWith("You have ")) {
            // this is ugly but parseInt is documented to work this way
            // so I'm going to be lazy and not chop off the rest of the
            // sentence
            this.kickingInactive = parseInt(args[1].slice(9), 10) || true;
            return;
          } else if (args[1].endsWith(' seconds left.')) {
            let hasIndex = args[1].indexOf(' has ');
            let userid = window.app?.user?.get('userid') || window.PS?.user.userid;
            if (toID(args[1].slice(0, hasIndex)) === userid) {
              this.kickingInactive = parseInt(args[1].slice(hasIndex + 5), 10) || true;
            }
          } else if (args[1].endsWith(' 15 seconds left this turn.')) {
            if (this.isBlitz) return;
          }
          this.log(args, undefined, preempt);
          break;
        }
      case 'inactiveoff':
        {
          this.kickingInactive = false;
          this.log(args, undefined, preempt);
          break;
        }
      case 'join':
      case 'j':
      case 'J':
        {
          if (this.roomid) {
            let room = app.rooms[this.roomid];
            let user = BattleTextParser.parseNameParts(args[1]);
            let userid = toUserid(user.name);
            if (!room.users[userid]) room.userCount.users++;
            room.users[userid] = user;
            room.userList.add(userid);
            room.userList.updateUserCount();
            room.userList.updateNoUsersOnline();
          }
          this.log(args, undefined, preempt);
          break;
        }
      case 'leave':
      case 'l':
      case 'L':
        {
          if (this.roomid) {
            let room = app.rooms[this.roomid];
            let user = args[1];
            let userid = toUserid(user);
            if (room.users[userid]) room.userCount.users--;
            delete room.users[userid];
            room.userList.remove(userid);
            room.userList.updateUserCount();
            room.userList.updateNoUsersOnline();
          }
          this.log(args, undefined, preempt);
          break;
        }
      case 'name':
      case 'n':
      case 'N':
        {
          if (this.roomid) {
            let room = app.rooms[this.roomid];
            let user = BattleTextParser.parseNameParts(args[1]);
            let oldid = args[2];
            if (toUserid(oldid) === app.user.get('userid')) {
              app.user.set({
                away: user.away,
                status: user.status
              });
            }
            let userid = toUserid(user.name);
            room.users[userid] = user;
            room.userList.remove(oldid);
            room.userList.add(userid);
          }
          if (!this.ignoreSpects) {
            this.log(args, undefined, preempt);
          }
          break;
        }
      case 'player':
        {
          let side = this.getSide(args[1]);
          side.setName(args[2]);
          if (args[3]) side.setAvatar(args[3]);
          if (args[4]) side.rating = args[4];
          if (this.joinButtons) this.scene.hideJoinButtons();
          this.log(args);
          this.scene.updateSidebar(side);
          break;
        }
      case 'badge':
        {
          let side = this.getSide(args[1]);
          // handle all the rendering further down
          const badge = args.slice(2).join('|');
          // (don't allow duping)
          if (!side.badges.includes(badge)) side.badges.push(badge);
          this.scene.updateSidebar(side);
          break;
        }
      case 'teamsize':
        {
          let side = this.getSide(args[1]);
          side.totalPokemon = parseInt(args[2], 10);
          this.scene.updateSidebar(side);
          break;
        }
      case 'win':
      case 'tie':
        {
          this.winner(args[0] === 'tie' ? undefined : args[1]);
          break;
        }
      case 'prematureend':
        {
          this.prematureEnd();
          break;
        }
      case 'clearpoke':
        {
          this.p1.clearPokemon();
          this.p2.clearPokemon();
          break;
        }
      case 'poke':
        {
          let pokemon = this.rememberTeamPreviewPokemon(args[1], args[2]);
          if (args[3] === 'mail') {
            pokemon.item = '(mail)';
          } else if (args[3] === 'item') {
            pokemon.item = '(exists)';
          }
          break;
        }
      case 'updatepoke':
        {
          const {
            siden
          } = this.parsePokemonId(args[1]);
          const side = this.sides[siden];
          for (let i = 0; i < side.pokemon.length; i++) {
            const pokemon = side.pokemon[i];
            if (pokemon.details !== args[2] && pokemon.checkDetails(args[2])) {
              side.addPokemon('', '', args[2], i);
              break;
            }
          }
          break;
        }
      case 'teampreview':
        {
          this.teamPreviewCount = parseInt(args[1], 10);
          this.scene.teamPreview();
          break;
        }
      case 'showteam':
        {
          const team = Teams.unpack(args[2]);
          if (!team.length) return;
          const side = this.getSide(args[1]);
          side.openTeamSheet = true;
          side.clearPokemon();
          for (const set of team) {
            const details = set.species + (!set.level || set.level === 100 ? '' : `, L${set.level}`) + (!set.gender || set.gender === 'N' ? '' : `, ${set.gender}`) + (set.shiny ? ', shiny' : '');
            const pokemon = side.addPokemon('', '', details);
            if (set.item) pokemon.item = set.item;
            if (set.ability) pokemon.rememberAbility(set.ability);
            for (const move of set.moves) {
              pokemon.rememberMove(move, 0);
            }
            pokemon.nature = set.nature;
            if (set.teraType) pokemon.teraType = set.teraType;
          }
          this.log(args, kwArgs);
          break;
        }
      case 'switch':
      case 'drag':
      case 'replace':
        {
          this.endLastTurn();
          let poke = this.getSwitchedPokemon(args[1], args[2]);
          let slot = poke.slot;
          poke.healthParse(args[3]);
          poke.removeVolatile('itemremoved');
          poke.terastallized = /tera:([a-z]+)$/i.exec(args[2])?.[1] || '';
          if (args[0] === 'switch') {
            if (poke.side.active[slot]) {
              poke.side.switchOut(poke.side.active[slot], kwArgs);
            }
            poke.side.switchIn(poke, kwArgs);
          } else if (args[0] === 'replace') {
            poke.side.replace(poke);
          } else {
            poke.side.dragIn(poke);
          }
          this.scene.updateWeather();
          this.log(args, kwArgs);
          break;
        }
      case 'faint':
        {
          let poke = this.getPokemon(args[1]);
          poke.side.faint(poke);
          this.log(args, kwArgs);
          break;
        }
      case 'swap':
        {
          if (isNaN(Number(args[2]))) {
            const poke = this.getPokemon(args[1]);
            poke.side.swapWith(poke, this.getPokemon(args[2]), kwArgs);
          } else {
            const poke = this.getPokemon(args[1]);
            const targetIndex = parseInt(args[2], 10);
            if (kwArgs.from) {
              const target = poke.side.active[targetIndex];
              if (target) args[2] = target.ident;
            }
            poke.side.swapTo(poke, targetIndex);
          }
          this.log(args, kwArgs);
          break;
        }
      case 'move':
        {
          this.endLastTurn();
          this.resetTurnsSinceMoved();
          let poke = this.getPokemon(args[1]);
          let move = Dex.moves.get(args[2]);
          if (this.checkActive(poke)) return;
          let poke2 = this.getPokemon(args[3]);
          this.scene.beforeMove(poke);
          this.useMove(poke, move, poke2, kwArgs);
          this.animateMove(poke, move, poke2, kwArgs);
          this.scene.afterMove(poke);
          this.log(args, kwArgs);
          break;
        }
      case 'cant':
        {
          this.endLastTurn();
          this.resetTurnsSinceMoved();
          let poke = this.getPokemon(args[1]);
          let effect = Dex.getEffect(args[2]);
          let move = Dex.moves.get(args[3]);
          this.cantUseMove(poke, effect, move, kwArgs);
          this.log(args, kwArgs);
          break;
        }
      case 'gen':
        {
          this.gen = parseInt(args[1], 10);
          this.dex = Dex.forGen(this.gen);
          this.scene.updateGen();
          this.log(args);
          break;
        }
      case 'callback':
        {
          this.subscription?.('callback');
          break;
        }
      case 'fieldhtml':
        {
          this.scene.setFrameHTML(BattleLog.sanitizeHTML(args[1]));
          break;
        }
      case 'controlshtml':
        {
          this.scene.setControlsHTML(BattleLog.sanitizeHTML(args[1]));
          break;
        }
      case 'custom':
        {
          // Style is always |custom|-subprotocol|pokemon|additional info
          if (args[1] === '-endterastallize') {
            let poke = this.getPokemon(args[2]);
            poke.removeVolatile('terastallize');
            poke.teraType = '';
            poke.terastallized = '';
            poke.details = poke.details.replace(/, tera:[a-z]+/i, '');
            poke.searchid = poke.searchid.replace(/, tera:[a-z]+/i, '');
            this.scene.animTransform(poke);
            this.scene.resetStatbar(poke);
            this.log(args, kwArgs);
          }
          break;
        }
      default:
        {
          this.log(args, kwArgs, preempt);
          break;
        }
    }
  }
  run(str, preempt) {
    if (!preempt && this.preemptStepQueue.length && str === this.preemptStepQueue[0]) {
      this.preemptStepQueue.shift();
      this.scene.preemptCatchup();
      return;
    }
    if (!str) return;
    const {
      args,
      kwArgs
    } = BattleTextParser.parseBattleLine(str);
    if (this.scene.maybeCloseMessagebar(args, kwArgs)) {
      this.currentStep--;
      this.activeMoveIsSpread = null;
      return;
    }

    // parse the next line if it's a minor: runMinor needs it parsed to determine when to merge minors
    let nextArgs = [''];
    let nextKwargs = {};
    const nextLine = this.stepQueue[this.currentStep + 1] || '';
    if (nextLine.startsWith('|-')) {
      ({
        args: nextArgs,
        kwArgs: nextKwargs
      } = BattleTextParser.parseBattleLine(nextLine));
    }
    if (this.debug) {
      if (args[0].startsWith('-') || args[0] === 'detailschange') {
        this.runMinor(args, kwArgs, nextArgs, nextKwargs);
      } else {
        this.runMajor(args, kwArgs, preempt);
      }
    } else {
      try {
        if (args[0].startsWith('-') || args[0] === 'detailschange') {
          this.runMinor(args, kwArgs, nextArgs, nextKwargs);
        } else {
          this.runMajor(args, kwArgs, preempt);
        }
      } catch (err) {
        this.log(['majorerror', 'Error parsing: ' + str]);
        const stack = PSUtils.normalizeError(err);
        if (stack) {
          for (const line of stack.split('\n')) {
            if (/\brun\b/.test(line)) {
              break;
            }
            this.log(['error', line]);
          }
        }
        this.subscription?.('error');
      }
    }

    // Replays before clicking "Play" will pause themselves on the line before `|start`
    if (nextLine.startsWith('|start') || args[0] === 'start' || args[0] === 'teampreview') {
      if (this.turn === -1) {
        this.turn = 0;
        this.scene.updateBgm();
      }
    }
  }
  checkActive(poke) {
    if (!poke.side.active[poke.slot]) {
      // SOMEONE jumped in in the middle of a replay. <_<
      poke.side.replace(poke);
    }
    return false;
  }
  pause() {
    this.paused = true;
    this.scene.pause();
    this.subscription?.('paused');
  }
  /**
   * Properties relevant to battle playback, for replay UI implementers:
   * - `ended`: has the game ended in a win/loss?
   * - `atQueueEnd`: is animation caught up to the end of the battle queue, waiting for more input?
   * - `seeking`: are we trying to skip to a specific turn
   * - `turn`: what turn are we currently on? `-1` if we haven't started yet, `0` at team preview
   * - `paused`: are we playing at all?
   */
  play() {
    this.paused = false;
    this.started = true;
    this.scene.resume();
    this.nextStep();
    this.subscription?.('playing');
  }
  skipTurn() {
    this.seekBy(1);
  }
  seekBy(deltaTurn) {
    if (this.seeking === Infinity && deltaTurn < 0) {
      return this.seekTurn(this.turn + 1);
    }
    this.seekTurn((this.seeking ?? this.turn) + deltaTurn);
  }
  seekTurn(turn, forceReset) {
    if (isNaN(turn)) return;
    turn = Math.max(Math.floor(turn), 0);
    if (this.seeking !== null && turn > this.turn && !forceReset) {
      this.seeking = turn;
      return;
    }
    if (turn === 0) {
      this.seeking = null;
      this.resetStep();
      this.scene.animationOn();
      if (this.paused) this.subscription?.('paused');
      return;
    }
    this.seeking = turn;
    if (turn <= this.turn || forceReset) {
      this.scene.animationOff();
      this.resetStep();
    } else if (this.atQueueEnd) {
      this.scene.animationOn();
      this.seeking = null;
    } else {
      this.scene.animationOff();
      this.nextStep();
    }
  }
  stopSeeking() {
    this.seeking = null;
    this.scene.animationOn();
    this.subscription?.(this.paused ? 'paused' : 'playing');
  }
  shouldStep() {
    if (this.atQueueEnd) return false;
    if (this.seeking !== null) return true;
    return !(this.paused && this.turn >= 0);
  }
  nextStep() {
    if (!this.shouldStep()) return;
    let time = Date.now();
    this.scene.startAnimations();
    let animations = undefined;
    let interruptionCount;
    do {
      // modified in this.run() but idk how to tell TS that
      this.waitForAnimations = true;
      if (this.currentStep >= this.stepQueue.length) {
        this.atQueueEnd = true;
        if (!this.ended && this.isReplay) this.prematureEnd();
        this.stopSeeking();
        if (this.ended) {
          this.scene.updateBgm();
        }
        this.subscription?.('atqueueend');
        return;
      }
      this.run(this.stepQueue[this.currentStep]);
      this.currentStep++;
      if (this.waitForAnimations === true) {
        animations = this.scene.finishAnimations();
      } else if (this.waitForAnimations === 'simult') {
        this.scene.timeOffset = 0;
      }
      if (Date.now() - time > 300) {
        interruptionCount = this.scene.interruptionCount;
        setTimeout(() => {
          if (interruptionCount === this.scene.interruptionCount) {
            this.nextStep();
          }
        }, 1);
        return;
      }
    } while (!animations && this.shouldStep());
    if (this.paused && this.turn >= 0 && this.seeking === null) {
      // initial Play button, team preview
      this.scene.pause();
      return;
    }
    if (!animations) return;
    interruptionCount = this.scene.interruptionCount;
    animations.done(() => {
      if (interruptionCount === this.scene.interruptionCount) {
        this.nextStep();
      }
    });
  }
  setQueue(queue) {
    this.stepQueue = queue;
    this.resetStep();
  }
  setMute(mute) {
    this.scene.setMute(mute);
  }
}
if (typeof require === 'function') {
  // in Node
  global.Battle = Battle;
  global.Pokemon = Pokemon;
}
window.ShowdownBattle = Battle; window.BattleSound = BattleSound;