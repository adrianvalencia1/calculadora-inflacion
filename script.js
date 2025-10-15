var data = 0;
var inf_base_may2023 = 109.5;
var inf_base_may2022 = 109.1;

/*// Inflacion Mayo 2022
const inflacionMayo2022 = [103.9592,102.8866,108.2924,111.026,99.1453,101.4958,113.1,108.1013,107.8375,112.0351,106.0559,94.0235,98.9699,116.7477,120.3826,97.0451,86.5061,111.6615,117.1272,100.4673,73.4541,108.4,97.188,80.8396,87.5795,101.5815,95.3722,114.121,108.8984,116.7667,114.8811,104.2819,162.3663,93.8224,100,85.4531,104.7981,76.061,97.9953,104.7577,109.9665,120.5972,123.2976,105.097,102.7583,109.8837,102.2434,114.3617,110.6809,105.1245,103.0249,139.7534,106.7776];

// Inflacion Mayo 2023
const inflacionMayo2023 = [107.2738,105.635,109.8603,118.093,105.4341,102.5414,120.7,113.7589,116.7701,113.9039,110.6242,94.78,99.1939,121.1674,121.7114,96.3613,84.3834,111.367,127.5005,100.4673,94.8461,108.4,96.1672,79.5638,84.5041,103.5655,94.1604,115.757,103.1716,118.0456,114.2025,104.0714,129.7321,96.543,100,81.4679,104.7981,73.3282,100.3404,104.8103,111.7215,122.2228,129.4708,106.5599,102.7583,113.0599,101.088,116.1587,124.1243,107.7855,103.704,144.3636,108.7684];
const infFeb2020 = [100.8,98.4,104.5,103.8,103.3,88.1,93.8,104.5,105.5,100.1,104.3,96.3,99,113.8,115.9,97.2,88.6,111.7,104.9,101.2,96.7,108,96.2,81.4,87.7,103.7,94.9,111.6,108.3,112.1,112.4,101.9,109.9,93.5,100,86.9,104.8,80.2,96.8,105.1,108.7,121.5,129.2,111.7,103.6,108,100.5,116.4,111.9,105.1,102,133.4,105.7];
const inf2013 = [100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100];
const infEne2023 = [109.9,115.0,93.9,105.2,103.9,108.5,110.0,102.1,98.6,117.9,142.9,110.6];
const infAbr2023 = [106.265,105.1212,112.3663,117.8738,105.5831,101.898,123.4,111.7807,115.9376,114.1655,110.2124,95.4285,104.3439,121.0562,121.4456,96.5227,84.9101,111.367,127.1074,100.4673,95.0102,108.4,96.1527,79.6488,84.7998,103.5088,94.3569,115.3281,102.8866,118.0456,114.2025,104.0714,126.7308,96.9721,100,81.5274,104.7981,73.3282,100.2227,104.8061,111.7062,122.0422,129.4708,106.5599,102.7583,112.7271,101.1007,116.1587,124.1243,107.7855,103.704,144.1481,109.4018];
var firstComp = inflacionMayo2022;

// Weights
var weights = [0.0432002646183423,0.0657573225869797,0.0079800006679035,0.0341505900137915,0.00964251307521878,0.00701762648722301,0.0184103321165089,0.00576340183389083,0.014102014185037,0.00691898975280935,0.0105569446622945,0.00063299913257661,0.000232513202252221,0.00355256710915964,0.00208192055601155,0.056274205310744,0.0205257946892562,0.0223516811061598,0.0142912111348877,0.0129747015567606,0.0344600055034459,0.000922400698746043,0.0108301960457453,0.00533619214333634,0.0113022506575875,0.00234555443729317,0.00243140396440892,0.0455544027516287,0.0242221514310688,0.00841313315022849,0.00136471541870266,0.0213071318940388,0.0711129044833908,0.0750799636225711,0.000154294246404991,0.031714516348746,0.0109311894048489,0.0134188064529095,0.0205511311137372,0.0458471521070283,0.0137966978020338,0.00378619377547651,0.0157070515949191,0.00744486061212591,0.000748087792955014,0.070800155644828,0.00438080314784735,0.00204425583275091,0.0111226502699738,0.00438648741862603,0.00506564768597413,0.0649278490303911,0.00207215096960885];
const weightsOriginal = weights;
*/


// Inflacion
const inf2013 = [100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0,100.0];
const inf2019 = [101.92905,111.3234167,95.37221667,101.630675,101.67395,110.0496833,103.6698833,103.5437667,100.32545,118.4148667,132.3054583,107.088575];
const infMayo2022 = [105.7818,113.1189,94.4136,95.1632,103.5486,112.1277,124.0973,102.521,98.4539,117.3876,139.2093,108.4682];
const infEne2023 = [109.9494,115.0032,93.8589,105.1764,103.9236,108.5003,110.0296,102.0962,98.5843,117.9483,142.9477,110.6389];
const infAbr2023 = [110.0555,116.3315,93.6231,105.5022,103.4997,109.0798,110.7766,102.0589,98.3429,121.748,143.5748,112.4303];
const infMayo2023 = [110.234,116.0071,93.3705,105.4986,103.6732,109.2387,111.8383,102.0519,98.3655,121.748,143.7763,112.6246];
var firstComp = infMayo2022;

// Importancia relativa
var weights = [0.2235081,0.0064746,0.0767876,0.0850276,0.0778475,0.0339916,0.1674685,0.0428478,0.0973684,0.0238969,0.0669804,0.097801];
const weightsOriginal = weights;

// Educacion
const wEducPrimaria = 0.0084884; // Enseñanza Preescolar y Primaria
const wEducSecundaria = 0.0073261; // Enseñanza Secundaria
const wEducTerciaria = 0.0073827; // Enseñanza Terciaria
const wEducOtros = 0.0006997; // Enseñanza no Atribuible a Ningún Nivel

// Transporte
const wVehiculo = 0.0432347; // Adquisición de Vehículos
const wMantenimientoTransporte = 0.0673711; // Funcionamiento de Equipo de Transporte Personal
const wServiciosTransporte = 0.0568627; // Servicios de Transporte

// Restaurantes y hoteles
const wRestaurante = 0.0658753; // Servicios de Restaurantes, Café y Establecimientos Similares
const wHotel = 0.0011051; // Servicios de Alojamiento

// Vivienda, Agua, Electricidad y Gas
const wMantenimientoVivienda = 0.0137372; // Conservación y Reparación de la Vivienda 
const wAlquiler = 0.023093; // Alquileres Efectivos del Alojamiento
const wViviendaTotal = 0.0850276;
const wEnergiaGas = 0.0347373;

// Alimentos
const wPan = 0.043200265; // Pan y cereales
const wCarne = 0.065757323; // Carne
const wPescado = 0.007980001; // Pescado
const wLacteos = 0.03415059; // Leche, queso, y huevos
const wTeCafe = 0.00691899; // Café, té y cacao

// Alcohol y Tabaco
const wAlcohol = 0.0049694; // Bebidas Alcohólicas
const wTabaco = 0.0015052; // Tabaco

// Variables de colores
var good = "rgb(0, 200, 60)";
var bad = "red";
function colorFade(color) {
    var originalColor = "rgb(13, 34, 64)";
    document.getElementById("counting").style.color = color;
    setTimeout(function(){
        document.getElementById("counting").style.color = originalColor;
    }, 800);
}

var oldData;
function recolor(oldData) {
    if(oldData < data) {
        colorFade(bad);
    } else if(oldData > data) {
        colorFade(good);
    }
}

// TEST
function test() {
    var sum = 0;
    for(var x = 0; x < weightsOriginal.length; x++) {
        sum+=weightsOriginal[x];
    }
    document.getElementById("test").innerText = sum;
}

function fecha(id) {
    oldData = data;
    if(id == "fecha1") {
        currComp = inf2013; // 2013
    } else if(id == "fecha2") {
        currComp = inf2019; // 2019              
    } else if(id == "fecha3") {
        currComp = infMayo2022; // Mayo 2022           
    } else if(id == "fecha4") {
        currComp = infEne2023; // Enero 2023             
    } else if(id == "fecha5") {
        currComp = infAbr2023; // Abril 2023              
    }
    data = load(currComp);
    update();
    recolor(oldData);
}

function educacion(id) { // Pagas por educacion privada?
    oldData = data;
    if(id == "educacion0") { // default
        weights[9] = 0.0238969;              
    } else if(id == "educacion1") { // Si, pago por educación preescolar, primaria, o secundaria. 
        weights[9] = 0.0238969;
        weights[9] = weightsOriginal[9] - wEducTerciaria; 
    } else if(id == "educacion2") { // Si, pago por educación terciaria.
        weights[9] = 0.0238969;
        weights[9] = weightsOriginal[9] - wEducPrimaria - wEducSecundaria;            
    } else if(id == "educacion3") { // No.
        weights[9] = 0.0238969;
        weights[9] = 0.0;            
    }

    data = load(currComp);
    update();
    recolor(oldData);
}

function restaurante(id) {
    oldData = data;
    if(id == "restaurante0") { // default
        weights[10] = 0.0669804; 
    } else if(id == "restaurante1") { // 2 o 3 veces por semana.
        weights[10] = 0.0669804;
        weights[10] = weightsOriginal[10] - 0.0;
    } else if(id == "restaurante2") { // Menos de dos veces por semana.
        weights[10] = 0.0669804;
        weights[10] = wRestaurante - 0.02;  // 2/3 menos que promedio restaurantes
    } else if(id == "restaurante3") { // Mas de 3 veces por semana.
        weights[10] = 0.0669804;
        weights[10] = wRestaurante + 0.02;  // 2/3 mas que promedio restaurantes
    } else if(id == "restaurante4") {
        weights[10] = 0.0669804;
        weights[10] = 0.0; // restaurantes
    }

    data = load(currComp);
    update();
    recolor(oldData);
}

const subsidio = [infEne2023, infAbr2023, infMayo2022];
function auto(id) { // ¿Tienes auto?
    oldData = data;
    if(id == "auto0") { // default
        weights[6] = 0.1674685;
    } else if(id == "auto1") { // Si.
        weights[6] = 0.1674685;
        if (subsidio.includes(currComp)) {
            weights[6] = weightsOriginal[6] - wServiciosTransporte - (wMantenimientoTransporte/2);
        } else {
            weights[6] = weightsOriginal[6] - wServiciosTransporte;
        }
    } else if(id == "auto2") { // No.
        weights[6] = 0.1674685;
        weights[6] = weightsOriginal[6] - wVehiculo - wMantenimientoTransporte;
    }                                                                                                           
    data = load(currComp);                                                               
    update();                                                                           
    recolor(oldData);                                                                   
}

function alcoholTabaco(id) { // Consumes bebidas alcoholicas y/o tbaco?
    oldData = data;
    if(id == "alcohol-tabaco0") { // default
        weights[1] = 0.0064746;
    } else if(id == "alcohol-tabaco1") { // Si.
        weights[1] = 0.0064746;
        weights[1] = weightsOriginal[1]; 
    } else if(id == "alcohol-tabaco2") { // Solo alcohol.
        weights[1] = 0.0064746;
        weights[1] = weightsOriginal[1] - wTobaco; 
    } else if(id == "alcohol-tabaco3") { // Solo tabaco.
        weights[1] = 0.0064746;
        weights[1] = weightsOriginal[1] - wAlcohol; 
    } else if(id == "alcohol-tabaco4") { // No.
        weights[1] = 0.0064746;
        weights[1] = 0; 
    }
    data = load(currComp);
    update();
    recolor(oldData);
}

function alimentos(id) { // ¿Consumes té o café?
    oldData = data;
    if(id == "alimentos0") { // default
        weights[0] = 0.2235081;
    } else if(id == "alimentos1") { // Si.
        weights[0] = 0.2235081;
        weights[0] = weightsOriginal[0]; 
    } else if(id == "alimentos2") { // No.
        weights[0] = 0.2235081;
        weights[0] = weightsOriginal[0] - wTeCafe; 
    } else if(id == "alimentos3") { // No.
        weights[0] = 0.2235081;
        weights[0] = weightsOriginal[0] - wTeCafe; 
    } else if(id == "alimentos4") { // No.
        weights[0] = 0.2235081;
        weights[0] = weightsOriginal[0] - wTeCafe; 
    } 
    data = load(currComp);
    update();
    recolor(oldData);
}
var propietarioVar = 0;
function propietario(id) { // ¿Eres proprietario de vivienda?
    oldData = data;
    if(id == "propietario0") { // default
        weights[3] = wViviendaTotal + energiaVar;
        propietarioVar = 0;
    } else if(id == "propietario1") { // Si.
        weights[3] = wViviendaTotal - wAlquiler + energiaVar;
        propietarioVar = 0 - wAlquiler;
    } else if(id == "propietario2") { // No.
        weights[3] = wViviendaTotal - wMantenimientoVivienda + energiaVar; 
        propietarioVar = 0 - wMantenimientoVivienda;
    }
    data = load(currComp);
    update();
    recolor(oldData);
}
var energiaVar = 0;
function energia(id) { // ¿Consumes mas de 300 kW/mes?
    oldData = data;
    if(id == "energia0") { // default
        weights[3] = wViviendaTotal - propietarioVar;
        energiaVar = 0;
    } else if(id == "energia1") { // Si.
        weights[3] = wViviendaTotal + wEnergiaGas - propietarioVar; 
        energiaVar = 0 + wEnergiaGas;
    } else if(id == "energia2") { // No.
        weights[3] = wViviendaTotal - propietarioVar;
        energiaVar = 0; 
    } 
    data = load(currComp);
    update();
    recolor(oldData);
}

var updateLoad;
var currComp = infMayo2022;
function load(currComp) {
    weights = weightsOriginal;
    if(currComp == undefined) {
        currComp = firstComp;
        updateLoad = true;
    }
    var weightedValue = 0;

    var sumCurr = 0;
    for(var i = 0; i < infMayo2023.length; i++) {
        weightedValue = weightsOriginal[i] * infMayo2023[i];
        sumCurr += weightedValue;
    }

    var sumComp = 0;
    for(i = 0; i < currComp.length; i++) {
        weightedValue = weightsOriginal[i] * currComp[i];
        sumComp += weightedValue;
    }

    data = sumCurr - sumComp;
    if(updateLoad == true) {
        update();
    }
    return data;
}

function update() {
    document.getElementById("counting").innerText = (Math.round((data + Number.EPSILON) * 100) / 100) + '%';
    if(currComp==infMayo2022) {
        document.getElementById("ipc").innerText = 0.4 + '%';
    } else if(currComp==infAbr2023) {
        document.getElementById("ipc").innerText = 0.2 + '%';
    } else if(currComp==infEne2023) {
        document.getElementById("ipc").innerText = 0.69 + '%';
    } else if(currComp==inf2019) {
        document.getElementById("ipc").innerText = 4.69 + '%';
    } else if(currComp==inf2013) {
        document.getElementById("ipc").innerText = 9.55 + '%';
    }
    
}

var moreInfoOpen = false;
var lastOpen;
function moreInfo(id) {
    if ((moreInfoOpen==true) && (lastOpen == (id+"Text"))) {
        document.getElementById(lastOpen).classList.toggle("show");
        moreInfoOpen = false;   
    } else if (moreInfoOpen==true) {
        document.getElementById(lastOpen).classList.toggle("show");
        document.getElementById(id+"Text").classList.toggle("show");
        lastOpen = id + "Text";
    } else {
        document.getElementById(id+"Text").classList.toggle("show");
        moreInfoOpen = true; 
        lastOpen = id + "Text";
    }
}
