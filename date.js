// Variables
var data;
var inflacion;
var importanciaRelativa;
var importanciaRelativaBase;
var keys;
var product;
var inflacionAnual;
var inflacionAnualBase;
var interval = 12;
var myChart = {};
var chartExists = false;

// LOAD
async function load() {
  inflacion = inflacionJson;
  importanciaRelativa = Object.values(importanciaRelativaJson[0]);
  importanciaRelativaBase = Object.values(importanciaRelativaJson[0]);
  keys = Object.keys(inflacion[0]);
  product = await applyWeights(inflacion, importanciaRelativa);
  inflacionAnualBase = await inflationTotal(product);
  inflacionAnual = inflacionAnualBase;
  drawChart();
  update();
}
// GRAPH
function drawChart() {
  if (chartExists) {
    myChart.destroy();
    chartExists = false;
  }
  const ctx = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: Array.from(inflacionAnual.keys()),
      datasets: [
        {
          label: "Tu Nivel de Precio",
          data: Array.from(inflacionAnual.values()),
          borderWidth: 1,
        },
        {
          label: "Nivel de Precio Oficial",
          data: Array.from(inflacionAnualBase.values()),
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { beginAtZero: false } },
      plugins: {
        title: { display: true, text: "Nivel de Precio (2013 = 100)" },
      },
    },
  });
  chartExists = true;
}
// UPDATE
var currIdInterval;
function update(idInterval) {
  oldData = data;
  interval = intervalToInteger(idInterval);
  data = calcInf(inflacionAnual, interval);
  document.getElementById("counting").innerText =
    Math.round((data + Number.EPSILON) * 100) / 100 + "%";
}

// Variable assignment helper functions
function applyWeights(inflacionObj, importanciaRelativaObj) {
  // RETURNS PROMISE
  return new Promise((resolve, reject) => {
    try {
      let result = [];
      const keys = Object.keys(inflacionObj[0]);
      for (let i = 0; i < inflacionObj.length; i++) {
        const entry = {};
        for (let j = 0; j < keys.length; j++) {
          if (keys[j] === "Date") {
            entry[keys[j]] = inflacionObj[i][keys[j]];
          } else {
            entry[keys[j]] =
              inflacionObj[i][keys[j]] * importanciaRelativaObj[j - 1];
          }
        }
        result.push(entry);
      }

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
function inflationTotal(weightedInflation) {
  // RETURNS PROMISE
  return new Promise((resolve, reject) => {
    try {
      let result = new Map();

      for (let i = 0; i < weightedInflation.length; i++) {
        let sum = 0;
        let date = weightedInflation[i]["Date"];
        let keys = Object.keys(weightedInflation[i]);
        for (let j = 0; j < keys.length; j++) {
          if (typeof weightedInflation[i][keys[j]] === "number") {
            if (!isNaN(weightedInflation[i][keys[j]])) {
              sum += weightedInflation[i][keys[j]];
            }
          }
        }
        result.set(date, sum);
      }

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
function calcInf(infObj, interval = 12) {
  let dataTemp;
  const inf = Array.from(infObj.values());
  dataTemp = inf[inf.length - 1] - inf[inf.length - interval - 1];
  return dataTemp;
}
// Variables de colores
var good = "rgb(0, 200, 60)";
var bad = "red";
function colorFade(color) {
  var originalColor = "rgb(13, 34, 64)";
  document.getElementById("counting").style.color = color;
  setTimeout(function () {
    document.getElementById("counting").style.color = originalColor;
  }, 800);
}
var oldData;
function recolor(oldData) {
  if (oldData < data) {
    colorFade(bad);
  } else if (oldData > data) {
    colorFade(good);
  }
}

// Questions
function intervalToInteger(idInterval) {
  currIdInterval = idInterval;
  if (idInterval == "interanual") {
    return 12;
  } else if (idInterval == "intermensual") {
    return 1;
  } else if (idInterval == "yearToDate") {
    return 6;
  } else if (idInterval == "preCovid") {
    return 39;
  }
}
function redistWeights(start, end, operator, operand) {
  for (let i = start; i < end; i++) {
    if (operator == "sum") {
      importanciaRelativa[i] += operand;
    } else if (operator == "subtract") {
      importanciaRelativa[i] -= operand;
    }
  }
}
var noEduc = false;
async function educacion(id) {
  // Pagas por educacion privada?
  // 0-14 Alimentos y bebidas
  let educAvg =
    importanciaRelativaBase[41] +
    importanciaRelativaBase[42] +
    importanciaRelativaBase[43] +
    importanciaRelativaBase[44];
  educAvg /= 15;
  if (id == "educacion0") {
    // default
    importanciaRelativa[41] = importanciaRelativaBase[41];
    importanciaRelativa[42] = importanciaRelativaBase[42];
    importanciaRelativa[43] = importanciaRelativaBase[43];
    importanciaRelativa[44] = importanciaRelativaBase[44];
    if (noEduc) {
      redistWeights(0, 14, "subtract", educAvg);
      noEduc = false;
    }
  } else if (id == "educacion1") {
    // Si, pago por educación preescolar o primaria.
    importanciaRelativa[41] =
      importanciaRelativaBase[41] +
      importanciaRelativaBase[42] +
      importanciaRelativaBase[43] +
      importanciaRelativaBase[44];
    importanciaRelativa[42] = 0;
    importanciaRelativa[43] = 0;
    importanciaRelativa[44] = 0;
    if (noEduc) {
      redistWeights(0, 14, "subtract", educAvg);
      noEduc = false;
    }
  } else if (id == "educacion2") {
    // Si, pago por educación secundaria.
    importanciaRelativa[41] = 0;
    importanciaRelativa[42] =
      importanciaRelativaBase[41] +
      importanciaRelativaBase[42] +
      importanciaRelativaBase[43] +
      importanciaRelativaBase[44];
    importanciaRelativa[43] = 0;
    importanciaRelativa[44] = 0;
    if (noEduc) {
      redistWeights(0, 14, "subtract", educAvg);
      noEduc = false;
    }
  } else if (id == "educacion3") {
    // Si, pago por educación terciaria.
    importanciaRelativa[41] = 0;
    importanciaRelativa[42] = 0;
    importanciaRelativa[43] =
      importanciaRelativaBase[41] +
      importanciaRelativaBase[42] +
      importanciaRelativaBase[43] +
      importanciaRelativaBase[44];
    importanciaRelativa[44] = 0;
    if (noEduc) {
      redistWeights(0, 14, "subtract", educAvg);
      noEduc = false;
    }
  } else if (id == "educacion4") {
    // No.
    importanciaRelativa[41] = 0;
    importanciaRelativa[42] = 0;
    importanciaRelativa[43] = 0;
    importanciaRelativa[44] = 0;
    redistWeights(0, 14, "sum", educAvg);
    noEduc = true;
  }
  const prod = await applyWeights(inflacion, importanciaRelativa);
  inflacionAnual = await inflationTotal(prod);
  update(currIdInterval);
  drawChart();
  recolor(oldData);
}
var noRest = false;
async function restaurante(id) {
  // 0-14 Alimentos y bebidas
  let restAvg = importanciaRelativaBase[45] * 0.5;
  restAvg /= 15;
  if (id == "restaurante0") {
    // default
    importanciaRelativa[45] = importanciaRelativaBase[45];
    if (noRest == true) {
      redistWeights(0, 14, "sum", restAvg);
      noRest = false;
    }
  } else if (id == "restaurante1") {
    // 2 o 3 veces por semana.
    importanciaRelativa[45] = importanciaRelativaBase[45];
    if (noRest == true) {
      redistWeights(0, 14, "sum", restAvg);
      noRest = false;
    }
  } else if (id == "restaurante2") {
    // Menos de dos veces por semana.
    importanciaRelativa[45] =
      importanciaRelativaBase[45] - importanciaRelativaBase[45] * 0.5;
    if (noRest == true) {
      redistWeights(0, 14, "sum", restAvg);
      noRest = false;
    }
  } else if (id == "restaurante3") {
    // Mas de 3 veces por semana.
    importanciaRelativa[45] =
      importanciaRelativaBase[45] + importanciaRelativaBase[45] * 0.5;
    if (noRest == true) {
      redistWeights(0, 14, "subtract", restAvg);
      noRest = false;
    }
  } else if (id == "restaurante4") {
    importanciaRelativa[45] = 0;
    if (noRest == true) {
      redistWeights(0, 14, "sum", importanciaRelativa[45] / 15);
      noRest = false;
    }
  }
  const prod = await applyWeights(inflacion, importanciaRelativa);
  inflacionAnual = await inflationTotal(prod);
  update(currIdInterval);
  drawChart();
  recolor(oldData);
}
async function auto(id) {
  // ¿Tienes auto?
  if (id == "auto0") {
    // default
    importanciaRelativa[31] = importanciaRelativaBase[31];
    importanciaRelativa[32] = importanciaRelativaBase[32];
    importanciaRelativa[33] = importanciaRelativaBase[33];
  } else if (id == "auto1") {
    // Si.
    importanciaRelativa[31] =
      importanciaRelativaBase[31] + importanciaRelativaBase[33] / 2;
    importanciaRelativa[32] =
      importanciaRelativaBase[32] + importanciaRelativaBase[33] / 2;
    importanciaRelativa[33] = 0;
  } else if (id == "auto2") {
    // No.
    importanciaRelativa[31] = 0;
    importanciaRelativa[32] = 0;
    importanciaRelativa[33] =
      importanciaRelativaBase[33] +
      importanciaRelativaBase[32] +
      importanciaRelativaBase[31];
  }
  const prod = await applyWeights(inflacion, importanciaRelativa);
  inflacionAnual = await inflationTotal(prod);
  update(currIdInterval);
  drawChart();
  recolor(oldData);
}

async function propietario(id) {
  // ¿Eres proprietario de vivienda?
  if (id == "propietario0") {
    // default
    importanciaRelativa[17] = importanciaRelativaBase[17];
    importanciaRelativa[18] = importanciaRelativaBase[18];
  } else if (id == "propietario1") {
    // Si.
    importanciaRelativa[17] = 0;
    importanciaRelativa[18] =
      importanciaRelativaBase[18] + importanciaRelativaBase[17];
  } else if (id == "propietario2") {
    // No.
    importanciaRelativa[17] =
      importanciaRelativaBase[17] + importanciaRelativaBase[18];
    importanciaRelativa[18] = 0;
  }
  const prod = await applyWeights(inflacion, importanciaRelativa);
  inflacionAnual = await inflationTotal(prod);
  update(currIdInterval);
  drawChart();
  recolor(oldData);
}

async function teCafe(id) {
  // ¿Consumes té o café?
  if (id == "teCafe0") {
    // default
    importanciaRelativa[9] = importanciaRelativaBase[9];
    importanciaRelativa[10] = importanciaRelativaBase[10];
  } else if (id == "teCafe1") {
    // si.
    importanciaRelativa[9] =
      importanciaRelativaBase[9] + importanciaRelativaBase[10];
    importanciaRelativa[10] = 0;
  } else if (id == "teCafe2") {
    // no.
    importanciaRelativa[9] = 0;
    importanciaRelativa[10] =
      importanciaRelativaBase[10] + importanciaRelativaBase[9];
  }
  const prod = await applyWeights(inflacion, importanciaRelativa);
  inflacionAnual = await inflationTotal(prod);
  update(currIdInterval);
  drawChart();
  recolor(oldData);
}

var energiaBool = false;
async function energia(id) {
  // ¿Consumes mas de 300 kW/mes?
  // 0-14 Alimentos y bebidas
  let energiaAvg = importanciaRelativaBase[21] * 0.5;
  energiaAvg /= 15;
  if (id == "energia0") {
    // default
    importanciaRelativa[21] = importanciaRelativaBase[21];
    if (energiaBool == true) {
      redistWeights(0, 14, "sum", energiaAvg);
      energiaBool = false;
    }
  } else if (id == "energia1") {
    // Si.
    importanciaRelativa[21] =
      importanciaRelativaBase[21] + importanciaRelativaBase[21] * 0.5;
    if (energiaBool == true) {
      redistWeights(0, 14, "subtract", energiaAvg);
      energiaBool = false;
    }
  } else if (id == "energia2") {
    // No.
    importanciaRelativa[21] =
      importanciaRelativaBase[21] - importanciaRelativaBase[21] * 0.5;
    if (energiaBool == true) {
      redistWeights(0, 14, "sum", energiaAvg);
      energiaBool = false;
    }
  }
  const prod = await applyWeights(inflacion, importanciaRelativa);
  inflacionAnual = await inflationTotal(prod);
  update(currIdInterval);
  drawChart();
  recolor(oldData);
}

var seguroSi = false;
var seguroNo = false;
async function seguro(id) {
  // 0-14 Alimentos y bebidas
  let seguroSiAvg = importanciaRelativaBase[50] * (1 / 2);
  let seguroNoAvg = importanciaRelativaBase[50];
  seguroSiAvg /= 15;
  seguroNoAvg /= 15;
  if (id == "seguro0") {
    // default
    importanciaRelativa[50] = importanciaRelativaBase[50];
    if (seguroSi == true) {
      redistWeights(0, 14, "sum", seguroSiAvg);
      seguroNo = false;
    } else if (seguroNo == true) {
      redistWeights(0, 14, "subtract", seguroNoAvg);
      seguroNo = false;
    }
  } else if (id == "seguro1") {
    // Si.
    if (seguroNo == true) {
      redistWeights(0, 14, "subtract", seguroNoAvg);
      seguroNo = false;
    }
    importanciaRelativa[50] =
      importanciaRelativaBase[50] + importanciaRelativaBase[50] * (1 / 2);
    if (seguroSi == true) {
      redistWeights(0, 14, "subtract", seguroSiAvg);
      seguroSi = false;
    }
  } else if (id == "seguro2") {
    // No.
    if (seguroSi == true) {
      redistWeights(0, 14, "subtract", seguroSiAvg);
      seguroSi = false;
    }
    importanciaRelativa[50] = 0;
    if (seguroNo == true) {
      redistWeights(0, 14, "subtract", seguroNoAvg);
      seguroNo = false;
    }
  }
  const prod = await applyWeights(inflacion, importanciaRelativa);
  inflacionAnual = await inflationTotal(prod);
  update(currIdInterval);
  drawChart();
  recolor(oldData);
}
