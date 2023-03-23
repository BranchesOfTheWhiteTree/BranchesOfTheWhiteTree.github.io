// Chart setups
const ctx1 = document.getElementById('Albedo_ESkill_Chart');
ctx1.style.backgroundColor = 'rgba(255,255,255,255)';

const ctx2 = document.getElementById('Albedo_EBurst_Chart');
ctx2.style.backgroundColor = 'rgba(255,255,255,255)';

const ctx3 = document.getElementById('Albedo_NA_Chart');
ctx3.style.backgroundColor = 'rgba(255,255,255,255)';

const ctx4 = document.getElementById('Albedo_CA_Chart');
ctx4.style.backgroundColor = 'rgba(255,255,255,255)';

const ctx5 = document.getElementById('Albedo_PA_Chart');
ctx5.style.backgroundColor = 'rgba(255,255,255,255)';

// Dummy Data Setup
let data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    datasets: [
        {
            label: 'Skill Damage',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            borderWidth: 1
        },
        {
            label: 'Transient Blossom Damage',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            borderWidth: 1
        }
    ]
};

// Chart Options
let options1 = {
    scales:
    {
        y:
        {
            beginAtZero: true
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
            text: 'A compact comparison of Elemental Skill damages across all talent levels'
        },
        title:
        {
            display: true,
            text: 'Albedo Skill Damage Calculator and Visualizer'
        },
    }
};

let options2 = {
    scales:
    {
        y:
        {
            beginAtZero: true
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
            text: 'A compact comparison of Elemental Burst damages across all talent levels'
        },
        title:
        {
            display: true,
            text: 'Albedo Burst Damage Calculator and Visualizer'
        },
    }
};

let options3 = {
    scales:
    {
        y:
        {
            beginAtZero: true
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
            text: 'A compact comparison of Normal Attack damages across all talent levels'
        },
        title:
        {
            display: true,
            text: 'Albedo Normal Attack Damage Calculator and Visualizer'
        },
    }
};

let options4 = {
    scales:
    {
        y:
        {
            beginAtZero: true
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
            text: 'A compact comparison of Charged Attack damages across all talent levels'
        },
        title:
        {
            display: true,
            text: 'Albedo Charged Attack Damage Calculator and Visualizer'
        },
    }
};

let options5 = {
    scales:
    {
        y:
        {
            beginAtZero: true
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
            text: 'A compact comparison of Plunge Attack damages across all talent levels'
        },
        title:
        {
            display: true,
            text: 'Albedo Plunge Attack Damage Calculator and Visualizer'
        },
    }
};

// Plotting the Chart
let plotData1 = {
    type: 'bar',
    data: data,
    options: options1,
};

let plotData2 = {
    type: 'bar',
    data: data,
    options: options2,
};

let plotData3 = {
    type: 'bar',
    data: data,
    options: options3,
};

let plotData4 = {
    type: 'bar',
    data: data,
    options: options4,
};

let plotData5 = {
    type: 'bar',
    data: data,
    options: options5,
};

var AlbedoESChart = new Chart(ctx1, plotData1);
var AlbedoEBChart = new Chart(ctx2, plotData2);
var AlbedoNAChart = new Chart(ctx3, plotData3);
var AlbedoCAChart = new Chart(ctx4, plotData4);
var AlbedoPAChart = new Chart(ctx5, plotData5);

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
const P2Multipliers = [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.70, 270.54, 288.38, 306.22, 324.05, 341.89];
const P3Multipliers = [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.20, 382.48, 404.76, 427.04];

// Elemental Skill Multipliers
const ESkillMultipliers = [130.4, 140.18, 149.96, 163, 172.78, 182.56, 195.6, 208.64, 221.68, 234.72, 247.76, 260.8, 277.1, 293.4, 309.7];
const TransientBlossomMultipliers = [133.6, 143.62, 153.64, 167, 177.02, 187.04, 200.4, 213.76, 227.12, 240.48, 253.84, 267.2, 283.9, 300.6, 317.3];

// Elemental Burst Multipliers
const EBurstMultipliers = [367.20, 394.74, 422.28, 459, 486.54, 514.08, 550.80, 587.52, 624.24, 660.96, 697.68, 734.40, 780.30, 826.20, 872.10];
const FatalBlossomMultipliers = [72, 77.4, 82.8, 90, 95.4, 100.8, 108, 115.2, 122.4, 129.6, 136.8, 144, 153, 162, 171];

const SpotlessHeartMultipliers = [0.0, 0.4, 0.5, 0.6, 0.7, 0.8]

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

    const CinnabarSpindle = document.getElementById("cinnabar-spindle").value*1;

    const PhysicalDMGBonus = document.getElementById("charPHY").value*0.01;
    const AnemoDMGBonus = document.getElementById("charANEMO").value*0.01;
    const GeoDMGBonus = document.getElementById("charGEO").value*0.01;
    const ElectroDMGBonus = document.getElementById("charELECTRO").value*0.01;
    const DendroDMGBonus = document.getElementById("charDENDRO").value*0.01;
    const HydroDMGBonus = document.getElementById("charHYDRO").value*0.01;
    const PyroDMGBonus = document.getElementById("charPYRO").value*0.01;
    const CryoDMGBonus = document.getElementById("charCRYO").value*0.01;

    const ATK = document.getElementById("charATK").value*1.0;
    const DEF = document.getElementById("charDEF").value*1.0;
    const HP = document.getElementById("charHP").value*1.0;
    const EM = document.getElementById("charEM").value*1.0;
    const ER = document.getElementById("charER").value*0.01;
    const HB = document.getElementById("charHB").value*0.01;
    const IHB = document.getElementById("charIHB").value*0.01;

    const A1Passive = document.getElementById("A1Passive").checked;
    const C2Passive = document.getElementById("C2Passive").checked;
    const C4Passive = document.getElementById("C4Passive").checked;
    const C6Passive = document.getElementById("C6Passive").checked;

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

    let PhyMult = 1.0 + PhysicalDMGBonus;
    let AnemoMult = 1.0 + AnemoDMGBonus;
    let GeoMult = 1.0 + GeoDMGBonus;
    let ElectroMult = 1.0 + ElectroDMGBonus;
    let DendroMult = 1.0 + DendroDMGBonus;
    let HydroMult = 1.0 + HydroDMGBonus;
    let PyroMult = 1.0 + PyroDMGBonus;
    let CryoMult = 1.0 + CryoDMGBonus;
    
    let PhysicalMultiplier = PhyMult*EnemyDefMult*EnemyResMult;
    let AnemoMultiplier = AnemoMult*EnemyDefMult*EnemyResMult;
    let GeoMultiplier = GeoMult*EnemyDefMult*EnemyResMult;
    let ElectroMultiplier = ElectroMult*EnemyDefMult*EnemyResMult;
    let DendroMultiplier = DendroMult*EnemyDefMult*EnemyResMult;
    let HydroMultiplier = HydroMult*EnemyDefMult*EnemyResMult;
    let PyroMultiplier = PyroMult*EnemyDefMult*EnemyResMult;
    let CryoMultiplier = CryoMult*EnemyDefMult*EnemyResMult;

    let RegularMultiplier = GeoMult*EnemyDefMult*EnemyResMult;
    let AdjustedPhysicalMultiplier = PhyMult*EnemyDefMult*EnemyResMult;
    let A1PassiveMultiplier = GeoMult*EnemyDefMult*EnemyResMult;
    let C2PassiveMultiplier = GeoMult*EnemyDefMult*EnemyResMult;
    let C4PassiveMultiplier = PhyMult*EnemyDefMult*EnemyResMult;

    let C2FlatDMG = 0.0;

    if(C6Passive)
    {
        if(A1Passive)
            A1PassiveMultiplier = (GeoMult + 0.25 + 0.17)*EnemyDefMult*EnemyResMult;
    
        AdjustedPhysicalMultiplier = (PhyMult + 0.17)*EnemyDefMult*EnemyResMult;
        C4PassiveMultiplier = (PhyMult + 0.30 + 0.17)*EnemyDefMult*EnemyResMult;
        C2FlatDMG += 4.0 * 0.30 * DEF;
        C2PassiveMultiplier = (GeoMult + 0.17)*EnemyDefMult*EnemyResMult;
    }
    else
    {
        if(A1Passive)
            A1PassiveMultiplier = (GeoMult + 0.25)*EnemyDefMult*EnemyResMult;
        
        if(C4Passive)
        {
            C4PassiveMultiplier = (PhyMult + 0.30)*EnemyDefMult*EnemyResMult;
            C2FlatDMG += 4.0 * 0.30 * DEF;
            // C2PassiveMultiplier = (GeoMult)*EnemyDefMult*EnemyResMult;
        }
        else
        {
            if(C2Passive)
            {
                C2FlatDMG += 4.0 * 0.30 * DEF; // C2 Passive
                // C2PassiveMultiplier = (GeoMult)*EnemyDefMult*EnemyResMult;
            }
            
        }
    }

    // console.log("Cinnabar spindle refinement:", SpotlessHeartMultipliers[CinnabarSpindle])
    
    // Cinnabar Spindle Passive
    const SpotlessHeart = SpotlessHeartMultipliers[CinnabarSpindle] * DEF;

    // Data console
    // console.log(Resistance, EnemyResMult, EnemyDefMult, AvgCrit, CritMult, GeoMult);

    // Damage Calculations
    // Normal Attaks
    let N1DMG = FullMultiplyArray(N1Multipliers, ATK, AdjustedPhysicalMultiplier);
    let AvgN1DMG = MultiplyArray(N1DMG, AvgCrit);
    let CritN1DMG = MultiplyArray(N1DMG, CritMult);
    let N2DMG = FullMultiplyArray(N2Multipliers, ATK, AdjustedPhysicalMultiplier);
    let AvgN2DMG = MultiplyArray(N2DMG, AvgCrit);
    let CritN2DMG = MultiplyArray(N2DMG, CritMult);
    let N3DMG = FullMultiplyArray(N3Multipliers, ATK, AdjustedPhysicalMultiplier);
    let AvgN3DMG = MultiplyArray(N3DMG, AvgCrit);
    let CritN3DMG = MultiplyArray(N3DMG, CritMult);
    let N4DMG = FullMultiplyArray(N4Multipliers, ATK, AdjustedPhysicalMultiplier);
    let AvgN4DMG = MultiplyArray(N4DMG, AvgCrit);
    let CritN4DMG = MultiplyArray(N4DMG, CritMult);
    let N5DMG = FullMultiplyArray(N5Multipliers, ATK, AdjustedPhysicalMultiplier);
    let AvgN5DMG = MultiplyArray(N5DMG, AvgCrit);
    let CritN5DMG = MultiplyArray(N5DMG, CritMult);
    
    // Charge Attacks
    let C1DMG = FullMultiplyArray(C1Multipliers, ATK, AdjustedPhysicalMultiplier);
    let AvgC1DMG = MultiplyArray(C1DMG, AvgCrit);
    let CritC1DMG = MultiplyArray(C1DMG, CritMult);
    let C2DMG = FullMultiplyArray(C2Multipliers, ATK, AdjustedPhysicalMultiplier);
    let AvgC2DMG = MultiplyArray(C2DMG, AvgCrit);
    let CritC2DMG = MultiplyArray(C2DMG, CritMult);
    
    // Plunge Attacks
    let P1DMG = FullMultiplyArray(P1Multipliers, ATK, C4PassiveMultiplier);
    let AvgP1DMG = MultiplyArray(P1DMG, AvgCrit);
    let CritP1DMG = MultiplyArray(P1DMG, CritMult);
    let P2DMG = FullMultiplyArray(P2Multipliers, ATK, C4PassiveMultiplier);
    let AvgP2DMG = MultiplyArray(P2DMG, AvgCrit);
    let CritP2DMG = MultiplyArray(P2DMG, CritMult);
    let P3DMG = FullMultiplyArray(P3Multipliers, ATK, C4PassiveMultiplier);
    let AvgP3DMG = MultiplyArray(P3DMG, AvgCrit);
    let CritP3DMG = MultiplyArray(P3DMG, CritMult);

    // Elemental Skill
    let SkillDMG = FullMultiplyArray(ESkillMultipliers, ATK, RegularMultiplier, 1.0, SpotlessHeart);
    let AvgSkillDMG = MultiplyArray(SkillDMG, AvgCrit);
    let CritSkillDMG = MultiplyArray(SkillDMG, CritMult);
    let TransientBlossomDMG = FullMultiplyArray(TransientBlossomMultipliers, DEF, A1PassiveMultiplier, 1.0, SpotlessHeart);
    let AvgTransientBlossomDMG = MultiplyArray(TransientBlossomDMG, AvgCrit);
    let CritTransientBlossomDMG = MultiplyArray(TransientBlossomDMG, CritMult);

    // Elemental Burst
    let BurstDMG = FullMultiplyArray(EBurstMultipliers, ATK, C2PassiveMultiplier, 1.0, C2FlatDMG);
    let AvgBurstDMG = MultiplyArray(BurstDMG, AvgCrit);
    let CritBurstDMG = MultiplyArray(BurstDMG, CritMult);
    let FatalBlossomDMG = FullMultiplyArray(FatalBlossomMultipliers, ATK, C2PassiveMultiplier, 1.0, C2FlatDMG);
    let AvgFatalBlossomDMG = MultiplyArray(FatalBlossomDMG, AvgCrit);
    let CritFatalBlossomDMG = MultiplyArray(FatalBlossomDMG, CritMult);

    let data1 = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [
            {
                label: 'Skill Damage',
                data: SkillDMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'Transient Blossom Damage',
                data: TransientBlossomDMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'Average Skill Damage',
                data: AvgSkillDMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Average Transient Blossom Damage',
                data: AvgTransientBlossomDMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Critical Skill Damage',
                data: CritSkillDMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Critical Transient Blossom Damage',
                data: CritTransientBlossomDMG,
                borderWidth: 1,
                hidden: true,
            },
        ]
    };

    let data2 = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [
            {
                label: 'Burst Damage',
                data: BurstDMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'Fatal Blossom Damage',
                data: FatalBlossomDMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'Average Burst Damage',
                data: AvgBurstDMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Average Fatal Blossom Damage',
                data: AvgFatalBlossomDMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Critical Burst Damage',
                data: CritBurstDMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Critical Fatal Blossom Damage',
                data: CritFatalBlossomDMG,
                borderWidth: 1,
                hidden: true,
            },
        ]
    };

    let data3 = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [
            {
                label: 'N1 Damage',
                data: N1DMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'N2 Damage',
                data: N2DMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'N3 Damage',
                data: N3DMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'N4 Damage',
                data: N4DMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'N5 Damage',
                data: N5DMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'Avg N1 Damage',
                data: AvgN1DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Avg N2 Damage',
                data: AvgN2DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Avg N3 Damage',
                data: AvgN3DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Avg N4 Damage',
                data: AvgN4DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Avg N5 Damage',
                data: AvgN5DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Crit N1 Damage',
                data: CritN1DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Crit N2 Damage',
                data: CritN2DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Crit N3 Damage',
                data: CritN3DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Crit N4 Damage',
                data: CritN4DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Crit N5 Damage',
                data: CritN5DMG,
                borderWidth: 1,
                hidden: true,
            },
        ]
    };

    let data4 = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [
            {
                label: 'C1 Damage',
                data: C1DMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'C2 Damage',
                data: C2DMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'Avg C1 Damage',
                data: AvgC1DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Avg C2 Damage',
                data: AvgC2DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Crit C1 Damage',
                data: CritC1DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Crit C2 Damage',
                data: CritC2DMG,
                borderWidth: 1,
                hidden: true,
            },
        ]
    };

    let data5 = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [
            {
                label: 'Plunge Damage',
                data: P1DMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'Low Plunge',
                data: P2DMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'High Plunge',
                data: P3DMG,
                borderWidth: 1,
                hidden: false,
            },
            {
                label: 'Avg Plunge Damage',
                data: AvgP1DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Avg Low Plunge Damage',
                data: AvgP2DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Avg High Plunge Damage',
                data: AvgP3DMG,
                borderWidth: 1,
                hidden: true,
            },
            
            {
                label: 'Crit Plunge Damage',
                data: CritP1DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Crit Low Plunge',
                data: CritP2DMG,
                borderWidth: 1,
                hidden: true,
            },
            {
                label: 'Crit High Plunge',
                data: CritP3DMG,
                borderWidth: 1,
                hidden: true,
            },
        ]
    };

    AlbedoESChart.config.data = data1;
    AlbedoESChart.update();

    AlbedoEBChart.config.data = data2;
    AlbedoEBChart.update();

    AlbedoNAChart.config.data = data3;
    AlbedoNAChart.update();

    AlbedoCAChart.config.data = data4;
    AlbedoCAChart.update();

    AlbedoPAChart.config.data = data5;
    AlbedoPAChart.update();

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
