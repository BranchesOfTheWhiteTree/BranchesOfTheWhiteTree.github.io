# Wanderer - Damage Calculator

## Character stats

<div class="row">

<div class="col-3 col-6-medium col-6-small">
<label for="charATK">ATK</label>
<input type="number" name="charATK" id="charATK" min="0" step="0.1" value="200" max="10000">
<br>
<label for="charEM">Elemental Mastery</label>
<input type="number" name="charEM" id="charEM" min="0" step="1" value="0" max="5000">
<br>
<label for="charCRate">Crit Rate %</label>
<input type="number" name="charCRate" id="charCRate" min="5" step="0.1" value="5" max="100">
</div>

<div class="col-3 col-6-medium col-6-small">
<label for="charANEMO">Anemo DMG Bonus %</label>
<input type="number" name="charANEMO" id="charANEMO" min="0" step="0.1" value="0" max="500">
<br>
<label for="charLEVEL">Character Level</label>
<input type="number" name="charLEVEL" id="charLEVEL" min="1" step="1" value="50" max="90">
<br>
<label for="charCDmg">Crit DMG %</label>
<input type="number" name="charCDmg" id="charCDmg" min="50" step="0.1" value="50" max="700">
</div>

<div class="col-3 col-6-medium col-6-small">
<label for="charT1">Normal Level</label>
<input type="number" name="charT1" id="charT1" min="1" step="1" value="1" max="15">
<br>
<label for="charT2">Skill Level</label>
<input type="number" name="charT2" id="charT2" min="1" step="1" value="1" max="15">
<br>
<label for="charT3">Burst Level</label>
<input type="number" name="charT3" id="charT3" min="1" step="1" value="1" max="15">
</div>

<div class="col-3 col-6-medium col-6-small">
<label for="charER">Energy Recharge %</label>
<input type="number" name="charER" id="charER" min="100" step="0.1" value="100" max="700">
<br>
<label for="charDEF">DEF</label>
<input type="number" name="charDEF" id="charDEF" min="0" step="0.1" value="200" max="10000">
<br>
<label for="charReactionBonus">Reaction Bonus %</label>
<input type="number" name="charReactionBonus" id="charReactionBonus" min="0" step="0.1" value="0" max="500">
</div>

</div>

---

## Additional Details

Need testing for Constellation passives. They are not tested yet.

<div class="row">

<div class="col-4 col-6-medium col-6-small">
<label for="enemyLEVEL">Enemy Level</label>
<input type="number" name="enemyLEVEL" id="enemyLEVEL" min="1" step="1" value="50" max="100">
<br>
<br>
<label for="enemyBaseRes">Enemy Base Resistance %</label>
<input type="number" name="enemyBaseRes" id="enemyBaseRes" min="0" step="1" value="10" max="100">
</div>

<div class="col-4 col-6-medium col-6-small">
<label for="defIgnore">Defence Ignore %</label>
<input type="number" name="defIgnore" id="defIgnore" min="0" step="1" value="0" max="200">
<br>
<br>
<label for="ResReduction">Resistance Reduction %</label>
<input type="number" name="ResReduction" id="ResReduction" min="0" step="1" value="0" max="100">
</div>

<div class="col-4 col-6-medium col-6-small">
<label for="defReduction">Defence Reduction %</label>
<input type="number" name="defReduction" id="defReduction" min="0" step="1" value="0" max="200">
<br>
<br>
<br>
<button type="button" onclick="UpdateChart()">Calculate</button>
</div>

</div>

---

## Damage Chart
<canvas id="Wanderer_Damage_Chart">
</canvas>

---

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"></script>
<script src="./WandererCalculations.js">
</script>

<br>

## Feedback from the testers
* Functionally, it is working perfectly. Damage values accurate to +/- 1
* UI/UX can be better - at the moment, there are too many input variables. Might need simplification.
* Weapon passives / artifact passives can be included via automation
* People do not know the enemy resistances, it can be automated too.
* While the graphs are functional, it takes some getting used to it.
* Constellation passives need testing.
