# Albedo - Damage Calculator

## Credits
* Created by: Arun
* Testers: Gaminggenius, BlackRock, SavagePanda, Nevembra, Captain John, Pargar, PandaHero.
* Special thanks to the testers for helping me (Arun) with the testing of this calculator, and for their feedback.

## How do I use this Calculator?

* Fill-in the details listed in the stats.
* Press calculate to update the graphs
* Activate/Deactivate the damage values in the graphs and have a look.
  
## Some reasons why your numbers might be off
* Artifact/weapon passive might've been activated/deactivated and that would not have been included. We live-tested this intensely for several hours and found this to be the potential reason.
* If there is an actual error, let me know.

## Character stats

<div class="row">

<div class="col-4 col-12-medium">
<label for="charHP">HP</label>
<input type="number" name="charHP" id="charHP" min="0" step="1" value="200" max="100000">
<br>
<label for="charATK">ATK</label>
<input type="number" name="charATK" id="charATK" min="0" step="0.1" value="200" max="10000">
<br>
<label for="charDEF">DEF</label>
<input type="number" name="charDEF" id="charDEF" min="0" step="0.1" value="200" max="10000">
</div>

<div class="col-4 col-12-medium">
<label for="charCRate">Crit Rate %</label>
<input type="number" name="charCRate" id="charCRate" min="5" step="0.1" value="5" max="100">
<br>
<label for="charCDmg">Crit DMG %</label>
<input type="number" name="charCDmg" id="charCDmg" min="50" step="0.1" value="50" max="700">
<br>
<label for="charER">Energy Recharge %</label>
<input type="number" name="charER" id="charER" min="100" step="0.1" value="100" max="700">
</div>

<div class="col-4 col-12-medium">
<label for="charEM">Elemental Mastery</label>
<input type="number" name="charEM" id="charEM" min="0" step="1" value="0" max="5000">
<br>
<label for="charHB">Healing Bonus %</label>
<input type="number" name="charHB" id="charHB" min="0" step="0.1" value="0" max="500">
<br>
<label for="charIHB">Incoming Healing Bonus %</label>
<input type="number" name="charIHB" id="charIHB" min="0" step="0.1" value="0" max="500">
</div>

</div>
---
<div class="row">

<div class="col-4 col-12-medium">
<label for="charLEVEL">Character Level</label>
<input type="number" name="charLEVEL" id="charLEVEL" min="1" step="1" value="50" max="90">
<br>
<label for="charANEMO">Anemo DMG Bonus %</label>
<input type="number" name="charANEMO" id="charANEMO" min="0" step="0.1" value="0" max="500">
<br>
<label for="charGEO">Geo DMG Bonus %</label>
<input type="number" name="charGEO" id="charGEO" min="0" step="0.1" value="0" max="500">
</div>

<div class="col-4 col-12-medium">
<label for="charELECTRO">Electro DMG Bonus %</label>
<input type="number" name="charELECTRO" id="charELECTRO" min="0" step="0.1" value="0" max="500">
<br>
<label for="charDENDRO">Dendro DMG Bonus %</label>
<input type="number" name="charDENDRO" id="charDENDRO" min="0" step="0.1" value="0" max="500">
<br>
<label for="charHYDRO">Hydro DMG Bonus %</label>
<input type="number" name="charHYDRO" id="charHYDRO" min="0" step="0.1" value="0" max="500">
</div>

<div class="col-4 col-12-medium">
<label for="charPYRO">Pyro DMG Bonus %</label>
<input type="number" name="charPYRO" id="charPYRO" min="0" step="0.1" value="0" max="500">
<br>
<label for="charCRYO">Cryo DMG Bonus %</label>
<input type="number" name="charCRYO" id="charCRYO" min="0" step="0.1" value="0" max="500">
<br>
<label for="charPHY">Physical DMG Bonus %</label>
<input type="number" name="charPHY" id="charPHY" min="0" step="0.1" value="0" max="500">
</div>

</div>

---

## Constellation, Ascension, and Weapon Passives
At the moment, A1 Passive is working. Need to verify C2, C4, and C6 Passives.

If you are using Cinnabar Spindle, fill the refinement value in the input box. Leave it at zero if you are using some other weapon.

<div class="row">

<div class="col-4 col-12-medium">
<input type="checkbox" id="A1Passive" name="A1Passive"> </input>
<label for="A1Passive">A1 Passive</label>
<br>
<label for="cinnabar-spindle">Cinnabar Spindle Refinement</label>
<input type="number" name="cinnabar-spindle" id="cinnabar-spindle" min="0" step="1" value="0" max="5">
<br>
</div>

<div class="col-4 col-12-medium">
<input type="checkbox" id="C2Passive" name="C2Passive"> </input>
<label for="C2Passive">C2 Passive - 4 stacks</label>
<br>
<input type="checkbox" id="C4Passive" name="C4Passive"> </input>
<label for="C4Passive">C4 Passive</label>
<br>
</div>

<div class="col-4 col-12-medium">
<input type="checkbox" id="C6Passive" name="C6Passive"> </input>
<label for="C6Passive">C6 Passive</label>
</div>

</div>

---

## Additional Stats
<div class="row">

<div class="col-4 col-12-medium">
<label for="enemyLEVEL">Enemy Level</label>
<input type="number" name="enemyLEVEL" id="enemyLEVEL" min="1" step="1" value="50" max="100">
<br>
<label for="enemyBaseRes">Enemy Base Resistance %</label>
<input type="number" name="enemyBaseRes" id="enemyBaseRes" min="0" step="1" value="50" max="100">
</div>

<div class="col-4 col-12-medium">
<label for="defIgnore">Defence Ignore %</label>
<input type="number" name="defIgnore" id="defIgnore" min="0" step="1" value="0" max="200">
<br>
<label for="ResReduction">Resistance Reduction %</label>
<input type="number" name="ResReduction" id="ResReduction" min="0" step="1" value="50" max="100">
</div>

<div class="col-4 col-12-medium">
<label for="defReduction">Defence Reduction %</label>
<input type="number" name="defReduction" id="defReduction" min="0" step="1" value="0" max="200">
<br>
<br>
<button type="button" onclick="UpdateChart()">Calculate</button>
</div>

</div>
---

## Elemental Skill - Abiogenesis: Solar Isotoma
<canvas id="Albedo_ESkill_Chart">
</canvas>
---

## Elemental Burst - Rite of Progeniture: Tectonic Tide
<canvas id="Albedo_EBurst_Chart">
</canvas>

---

## Normal Attack Section
For Albedo, you don't need to level or use normal attack skills, as his normal attacks don't contribute a lot to his personal damage. However, if you want to use his normal attacks with or without elemental infusion, do check this out!

### Normal Attacks
<canvas id="Albedo_NA_Chart">
</canvas>

---

### Charged Attacks
<canvas id="Albedo_CA_Chart">
</canvas>

---

### Plunge Attacks
<canvas id="Albedo_PA_Chart">
</canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="./AlbedoCalculations.js">
</script>

<br>

## Feedback from the testers
* Functionally, it is working perfectly. Damage values accurate to +/- 1
* UI/UX can be better - at the moment, there are too many input variables. Might need simplification.
* Weapon passives / artifact passives can be included via automation
* People do not know the enemy resistances, it can be automated too.
* While the graphs are functional, it takes some getting used to it.
* Constellation passives need testing.
