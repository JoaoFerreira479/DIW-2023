
const mPD = [
    { Dia: 22, Mês: 10, Ano: 2023, Horário: "00:29", Fase: "Lua Crescente" },
    { Dia: 28, Mês: 10, Ano: 2023, Horário: "17:24", Fase: "Lua Cheia" },
    { Dia: 5, Mês: 11, Ano: 2023, Horário: "05:36", Fase: "Lua Minguante" },
    { Dia: 13, Mês: 11, Ano: 2023, Horário: "06:27", Fase: "Lua Nova" },
    { Dia: 20, Mês: 11, Ano: 2023, Horário: "07:49", Fase: "Lua Crescente" },
    { Dia: 27, Mês: 11, Ano: 2023, Horário: "06:16", Fase: "Lua Cheia" },
    { Dia: 5, Mês: 12, Ano: 2023, Horário: "02:49", Fase: "Lua Minguante" },
    { Dia: 12, Mês: 12, Ano: 2023, Horário: "20:32", Fase: "Lua Nova" },
    { Dia: 19, Mês: 12, Ano: 2023, Horário: "15:39", Fase: "Lua Crescente" },
    { Dia: 26, Mês: 12, Ano: 2023, Horário: "21:33", Fase: "Lua Cheia" },
];

function buildMoonPhaseTable() {
    const table = document.getElementById("fasesdalua-table");
    const header = table.createTHead();
    const row = header.insertRow(0);

    for (let key in mPD[0]) {
        const th = document.createElement("th");
        th.innerText = key;
        row.appendChild(th);
    }

    for (let i = 0; i < mPD.length; i++) {
        const row = table.insertRow(i + 1);
        for (let key in mPD[i]) {
            const cell = row.insertCell();
            cell.innerText = mPD[i][key];
            cell.style.textAlign = "center";
        }
    }
}

window.onload = buildMoonPhaseTable;
