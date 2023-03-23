// Chart setups
const ctx = document.getElementById('Wanderer_Damage_Chart');
ctx.style.backgroundColor = 'rgba(255,255,255,255)';

// Dummy Data Setup
let data = {
    labels: ["N3_1", "C1", "Hanega", "E-N3_1", "E-C1", "Burst", "WindArrow", "Swirl"],
    datasets: [
        {
            label: 'Non-Crit Hits',
            data: [1, 2, 3, 4, 5, 6, 7, 8],
            borderWidth: 1,
            hidden: false
        },
        {
            label: 'Avg Hits',
            data: [1, 2, 3, 4, 5, 6, 7, 8],
            borderWidth: 1,
            hidden: true
        },
        {
            label: 'Crit Hits',
            data: [1, 2, 3, 4, 5, 6, 7, 8],
            borderWidth: 1,
            hidden: false
        }
    ]
};

// Chart Options
let options = {
    scales:
    {
        y:
        {
            beginAtZero: true,
            title:
            {
                display: true,
                text: 'Damage'
            },
        }
    },
    plugins:
    {
        legend:
        {
            position:'right',
        },
        subtitle:
        {
            display: true,
            text: 'A compact comparison of damages across all talents'
        },
        title:
        {
            display: true,
            text: 'Wanderer Damage Calculator and Visualizer'
        },
    }
};

// Plotting the Chart
let plotData = {
    type: 'bar',
    data: data,
    options: options,
};

var WandererChart = new Chart(ctx, plotData);

// Enemy and Environment Level Multiplier
const EELM = [17.165605, 18.535048, 19.904854, 21.274903, 22.6454, 24.649613, 26.640643, 28.868587, 31.367679, 34.143343, 37.201, 40.66, 44.446668, 48.563519, 53.74848, 59.081897, 64.420047, 69.724455, 75.123137, 80.584775, 86.112028, 91.703742, 97.244628, 102.812644, 108.409563, 113.201694, 118.102906, 122.979318, 129.72733, 136.29291, 142.67085, 149.029029, 155.416987, 161.825495, 169.106313, 176.518077, 184.072741, 191.709518, 199.556908, 207.382042, 215.3989, 224.165667, 233.50216, 243.350573, 256.063067, 268.543493, 281.526075, 295.013648, 309.067188, 323.601597, 336.757542, 350.530312, 364.482705, 378.619181, 398.600417, 416.398254, 434.386996, 452.566797, 471.426268, 490.481663, 509.50428, 532.771793, 556.393323, 580.103031, 607.894973, 630.20133, 652.866818, 675.186325, 697.782682, 720.170325, 742.454652, 765.205477, 784.374617, 803.401172, 830.920776, 854.403332, 877.759777, 900.117232, 923.766661, 946.370258, 968.634183, 991.029365, 1013.527108, 1036.132954, 1066.623598, 1089.964198, 1114.964489, 1141.662656, 1171.941798, 1202.813736, 1233.939915, 1264.69967, 1305.689483, 1346.084383, 1411.738173, 1468.874501, 1524.041318, 1576.966305, 1627.613082, 1674.809242]

// Character Level Multiplier
const CLM = [17.165605, 18.535048, 19.904854, 21.274903, 22.6454, 24.649613, 26.640643, 28.868587, 31.367679, 34.143343, 37.201, 40.66, 44.446668, 48.563519, 53.74848, 59.081897, 64.420047, 69.724455, 75.123137, 80.584775, 86.112028, 91.703742, 97.244628, 102.812644, 108.409563, 113.201694, 118.102906, 122.979318, 129.72733, 136.29291, 142.67085, 149.029029, 155.416987, 161.825495, 169.106313, 176.518077, 184.072741, 191.709518, 199.556908, 207.382042, 215.3989, 224.165667, 233.50216, 243.350573, 256.063067, 268.543493, 281.526075, 295.013648, 309.067188, 323.601597, 336.757542, 350.530312, 364.482705, 378.619181, 398.600417, 416.398254, 434.386996, 452.951051, 472.606217, 492.88489, 513.568543, 539.103198, 565.510563, 592.538753, 624.443427, 651.470148, 679.49683, 707.79406, 736.671422, 765.640231, 794.773403, 824.677397, 851.157781, 877.74209, 914.229123, 946.746752, 979.411386, 1011.223022, 1044.791746, 1077.443668, 1109.99754, 1142.976615, 1176.369483, 1210.184393, 1253.835659, 1288.952801, 1325.484092, 1363.456928, 1405.097377, 1446.853458, 1488.215547, 1528.444567, 1580.367911, 1630.847528, 1711.197785, 1780.453941, 1847.322809, 1911.474309, 1972.864342, 2030.071808]

// Crystallize Shield Multiplier
const CSLM = [91.1791, 98.707667, 106.23622, 113.764771, 121.293322, 128.821878, 136.350422, 143.878978, 151.407522, 158.936078, 169.991484, 181.076253, 192.190362, 204.048207, 215.938996, 227.86275, 247.685944, 267.542105, 287.431209, 303.826417, 320.225217, 336.627633, 352.319267, 368.010913, 383.702548, 394.432358, 405.18147, 415.949907, 426.737645, 437.544709, 450.600004, 463.700301, 476.845577, 491.127512, 502.554564, 514.012104, 531.409589, 549.979601, 568.58488, 584.99652, 605.670375, 626.386206, 646.052333, 665.755638, 685.496096, 700.839402, 723.333147, 745.865265, 768.435731, 786.791945, 809.538812, 832.329057, 855.162654, 878.039628, 899.484802, 919.362018, 946.039586, 974.764223, 1003.578617, 1030.077002, 1056.634974, 1085.246306, 1113.924427, 1149.25872, 1178.064819, 1200.223743, 1227.660294, 1257.242987, 1284.917392, 1314.75288, 1342.665216, 1372.752485, 1396.320986, 1427.312436, 1458.374528, 1482.335772, 1511.910837, 1541.549377, 1569.153701, 1596.814298, 1622.419626, 1648.074031, 1666.376146, 1684.678276, 1702.980391, 1726.104684, 1754.671567, 1785.86656, 1817.137404, 1851.060358, 1885.067163, 1921.749303, 1958.523291, 2006.194108, 2041.569007, 2054.472064, 2065.97498, 2174.7226, 2186.7682, 2198.81396]

// Damage Multipliers
// Normal Attack Multipliers
const N1Multipliers = [68.7, 74.3, 79.9, 87.9, 93.5, 99.9, 108.7, 117.5, 126.2, 135.8, 145.4, 155, 164.6, 174.2, 183.8];
const N2Multipliers = [65, 70.3, 75.6, 83.2, 88.5, 94.5, 102.8, 111.1, 119.4, 128.5, 137.6, 146.7, 155.7, 164.8, 173.9];
const N31Multipliers = [47.6, 51.5, 55.4, 60.9, 64.8, 69.3, 75.3, 81.4, 87.5, 94.2, 100.8, 107.5, 114.1, 120.8, 127.4];
const N32Multipliers = [47.6, 51.5, 55.4, 60.9, 64.8, 69.3, 75.3, 81.4, 87.5, 94.2, 100.8, 107.5, 114.1, 120.8, 127.4];

// Charge Attack Multipliers
const C1Multipliers = [132.1, 142, 151.9, 165.1, 175, 184.9, 198.1, 211.3, 224.5, 237.7, 251, 264.2, 280.7, 297.2, 313.7];

// Plunge Attack Multipliers - regular plunge, low plunge, high plunge
const P1Multipliers = [56.8, 61.5, 66.1, 72.7, 77.3, 82.6, 89.9, 97.1, 104.4, 112.3, 120.3, 128.2, 136.1, 144.1, 152];
const P2Multipliers = [114, 123, 132, 145, 155, 165, 180, 194, 209, 225, 240, 256, 272, 288, 304];
const P3Multipliers = [142, 153, 165, 182, 193, 206, 224, 243, 261, 281, 300, 320, 340, 360, 380];

// Elemental Skill Multipliers
const HanegaMultipliers = [95.2, 102.3, 109.5, 119, 126.1, 133.3, 142.8, 152.3, 161.8, 171.4, 180.9, 190.4, 202.3, 214.2, 226.1];
const FushoudanMultiplers = [133, 135, 136.9, 139.5, 141.5, 143.5, 146, 148.6, 151.2, 153.7, 156.3, 158.9, 161.4, 164, 166.6];
const ToufukaiMultiplers = [126.4, 128, 129.5, 131.6, 133.2, 134.8, 136.8, 138.9, 140.9, 143, 145, 147.1, 149.1, 151.2, 153.2];
const KuugoryokuPoints = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100];

// Elemental Burst Multipliers
const BurstMultipliers = [147.2, 158.2, 169.3, 184, 195, 206.1, 220.8, 235.5, 250.2, 265, 279.7, 294.4, 312.8, 331.2, 349.6];

// Gales of Reverie Multiplier
const GaleMultipliers = [35.0];

function UpdateChart()
{
    // Data Fetching
    const BaseResistance = document.getElementById("enemyBaseRes").value*0.01;
    const ResistanceReduction = document.getElementById("ResReduction").value*0.01;

    const CharLevel = document.getElementById("charLEVEL").value*1.0;
    const EnemyLevel = document.getElementById("enemyLEVEL").value*1.0;

    const DefReduction = document.getElementById("defReduction").value*0.01;
    const DefIgnore = document.getElementById("defIgnore").value*0.01;

    const CritRate = document.getElementById("charCRate").value*0.01;
    const CritDMG = document.getElementById("charCDmg").value*0.01;

    const AnemoDMGBonus = document.getElementById("charANEMO").value*0.01;
    const ReactionDMGBonus = document.getElementById("charReactionBonus").value*0.01;

    const ATK = document.getElementById("charATK").value*1.0;
    const DEF = document.getElementById("charDEF").value*1.0;
    const EM = document.getElementById("charEM").value*1.0;
    const ER = document.getElementById("charER").value*0.01;

    const CharT1  = document.getElementById("charT1").value*1 - 1;
    const CharT2  = document.getElementById("charT2").value*1 - 1;
    const CharT3  = document.getElementById("charT3").value*1 - 1;

    // console.log(CharT1, CharT2, CharT3);

    // Multiplier Calculations
    let Resistance = BaseResistance - ResistanceReduction;
    let EnemyResMult = 1.0;
    if(Resistance < 0)
    {
        EnemyResMult = 1.0 - 0.5*Resistance;
    }
    else if(Resistance >= 0 && Resistance < 0.75)
    {
        EnemyResMult = 1.0 - Resistance;
    }
    else if(Resistance >= 0.75)
    {
        EnemyResMult = 1.0 / (4.0*Resistance + 1.0);
    }
    let EnemyDefMult = (CharLevel + 100.0)/( (CharLevel + 100.0) + (EnemyLevel + 100)*(1.0 - DefReduction)*(1.0 - DefIgnore) );

    let AvgCrit = 1.0 + CritRate*CritDMG;
    let CritMult = 1.0 + CritDMG;

    let AnemoMult = 1.0 + AnemoDMGBonus;
    let AnemoMultiplier = AnemoMult*EnemyDefMult*EnemyResMult;
    let FushoudanMultiplier = AnemoMultiplier*FushoudanMultiplers[CharT2]*0.01;
    let ToufukaiMultiplier = AnemoMultiplier*ToufukaiMultiplers[CharT2]*0.01;

    // Data console
    // console.log(Resistance, EnemyResMult, EnemyDefMult, AvgCrit, CritMult, GeoMult);

    // Damage Calculations
    // Normal Attacks
    let N1DMG = FullMultiplyArray(N1Multipliers, ATK, AnemoMultiplier);
    let AvgN1DMG = MultiplyArray(N1DMG, AvgCrit);
    let CritN1DMG = MultiplyArray(N1DMG, CritMult);

    let N2DMG = FullMultiplyArray(N2Multipliers, ATK, AnemoMultiplier);
    let AvgN2DMG = MultiplyArray(N2DMG, AvgCrit);
    let CritN2DMG = MultiplyArray(N2DMG, CritMult);

    let N31DMG = FullMultiplyArray(N31Multipliers, ATK, AnemoMultiplier);
    let AvgN31DMG = MultiplyArray(N31DMG, AvgCrit);
    let CritN31DMG = MultiplyArray(N31DMG, CritMult);

    let N32DMG = FullMultiplyArray(N32Multipliers, ATK, AnemoMultiplier);
    let AvgN32DMG = MultiplyArray(N32DMG, AvgCrit);
    let CritN33DMG = MultiplyArray(N32DMG, CritMult);

    // Charge Attacks
    let C1DMG = FullMultiplyArray(C1Multipliers, ATK, AnemoMultiplier);
    let AvgC1DMG = MultiplyArray(C1DMG, AvgCrit);
    let CritC1DMG = MultiplyArray(C1DMG, CritMult);

    // Plunge Attacks
    let P1DMG = FullMultiplyArray(P1Multipliers, ATK, AnemoMultiplier);
    let AvgP1DMG = MultiplyArray(P1DMG, AvgCrit);
    let CritP1DMG = MultiplyArray(P1DMG, CritMult);

    let P2DMG = FullMultiplyArray(P2Multipliers, ATK, AnemoMultiplier);
    let AvgP2DMG = MultiplyArray(P2DMG, AvgCrit);
    let CritP2DMG = MultiplyArray(P2DMG, CritMult);

    let P3DMG = FullMultiplyArray(P3Multipliers, ATK, AnemoMultiplier);
    let AvgP3DMG = MultiplyArray(P3DMG, AvgCrit);
    let CritP3DMG = MultiplyArray(P3DMG, CritMult);

    // Elemental Skill
    let HanegaDMG = FullMultiplyArray(HanegaMultipliers, ATK, AnemoMultiplier, 1.0, 0);
    let AvgHanegaDMG = MultiplyArray(HanegaDMG, AvgCrit);
    let CritHanegaDMG = MultiplyArray(HanegaDMG, CritMult);

    let FushoudanN1DMG = FullMultiplyArray(N1Multipliers, ATK, FushoudanMultiplier, 1.0, 0);
    let AvgFushoudanN1DMG = MultiplyArray(FushoudanN1DMG, AvgCrit);
    let CritFushoudanN1DMG = MultiplyArray(FushoudanN1DMG, CritMult);

    let FushoudanN2DMG = FullMultiplyArray(N2Multipliers, ATK, FushoudanMultiplier, 1.0, 0);
    let AvgFushoudanN2DMG = MultiplyArray(FushoudanN2DMG, AvgCrit);
    let CritFushoudanN2DMG = MultiplyArray(FushoudanN2DMG, CritMult);

    let FushoudanN31DMG = FullMultiplyArray(N31Multipliers, ATK, FushoudanMultiplier, 1.0, 0);
    let AvgFushoudanN31DMG = MultiplyArray(FushoudanN31DMG, AvgCrit);
    let CritFushoudanN31DMG = MultiplyArray(FushoudanN31DMG, CritMult);

    let FushoudanN32DMG = FullMultiplyArray(N32Multipliers, ATK, FushoudanMultiplier, 1.0, 0);
    let AvgFushoudanN32DMG = MultiplyArray(FushoudanN32DMG, AvgCrit);
    let CritFushoudanN32DMG = MultiplyArray(FushoudanN32DMG, CritMult);

    let ToufukaiDMG = FullMultiplyArray(C1Multipliers, ATK, ToufukaiMultiplier, 1.0, 0);
    let AvgToufukaiDMG = MultiplyArray(ToufukaiDMG, AvgCrit);
    let CritToufukaiDMG = MultiplyArray(ToufukaiDMG, CritMult);

    // Elemental Burst
    let BurstDMG = FullMultiplyArray(BurstMultipliers, ATK, AnemoMultiplier, 1.0, 0);
    let AvgBurstDMG = MultiplyArray(BurstDMG, AvgCrit);
    let CritBurstDMG = MultiplyArray(BurstDMG, CritMult);

    // Gales of Reverie - Wind Arrow
    let WindArrowDMG = FullMultiplyArray(GaleMultipliers, ATK, AnemoMultiplier, 1.0, 0);
    let AvgWindArrowDMG = MultiplyArray(WindArrowDMG, AvgCrit);
    let CritWindArrowDMG = MultiplyArray(WindArrowDMG, CritMult);

    // Swirl Reaction
    let EMBonus = (1.0 + (16.0 * EM)/(2000.0 + EM) + ReactionDMGBonus);
    let LevelMultipler = CLM[CharLevel - 1];
    let SwirlMultiplier = 0.6;
    let SwirlDMG = SwirlMultiplier * LevelMultipler * EMBonus * EnemyResMult;
    let AvgSwirlDMG = SwirlDMG;
    let CritSwirlDMG = SwirlDMG;

    let data1 = {
        labels: ["N3_1", "C1", "Hanega", "E-N3_1", "E-C1", "Burst", "WindArrow", "Swirl"],
        datasets: [
            {
                label: 'Non-Crit Hits',
                data: [N31DMG[CharT1], C1DMG[CharT1], HanegaDMG[CharT1], FushoudanN31DMG[CharT1], ToufukaiDMG[CharT1], BurstDMG[CharT3], WindArrowDMG[0], SwirlDMG],
                borderWidth: 1,
                hidden: false
            },
            {
                label: 'Avg Hits',
                data: [AvgN31DMG[CharT1], AvgC1DMG[CharT1], AvgHanegaDMG[CharT1], AvgFushoudanN31DMG[CharT1], AvgToufukaiDMG[CharT1], AvgBurstDMG[CharT3], AvgWindArrowDMG[0], AvgSwirlDMG],
                borderWidth: 1,
                hidden: true
            },
            {
                label: 'Crit Hits',
                data: [CritN31DMG[CharT1], CritC1DMG[CharT1], CritHanegaDMG[CharT1], CritFushoudanN31DMG[CharT1], CritToufukaiDMG[CharT1], CritBurstDMG[CharT3], CritWindArrowDMG[0], CritSwirlDMG],
                borderWidth: 1,
                hidden: false,
            }
        ]
    };

    let options1 = {
        scales:
        {
            y:
            {
                beginAtZero: true,
                title:
                {
                    display: true,
                    text: 'Damage'
                },
            }
        },
        plugins:
        {
            legend:
            {
                position:'right',
            },
            subtitle:
            {
                display: true,
                text: `A compact comparison of select damage numbers. Talents:${CharT1 + 1} - ${CharT2 + 1} - ${CharT3 + 1}`
            },
            title:
            {
                display: true,
                text: 'Wanderer Damage Calculator and Visualizer'
            },
        }
    };

    WandererChart.config.data = data1;
    WandererChart.config.options = options1;
    WandererChart.update();

}

function MultiplyArray(DamageArray, Multiplier)
{
    let y = [];
    for(let i = 0; i < DamageArray.length; i++)
    {
        let DMG = DamageArray[i] * Multiplier;
        y.push(DMG)
    }
    return y;
}

function FullMultiplyArray(TalentMultipliers, ScalingMainStat, constant, SpecialMultiplier=1.0, FlatDMG=0.0)
{
    let y = [];
    for(let i = 0; i < TalentMultipliers.length; i++)
    {
        let BaseDMG = TalentMultipliers[i] * 0.01 * ScalingMainStat;
        let DMG = (BaseDMG * SpecialMultiplier + FlatDMG) * constant;
        y.push(DMG)
    }
    return y;
}
