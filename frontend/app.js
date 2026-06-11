function rand(min, max) {
    return Math.random() * (max - min) + min;
}

// AI Multi-Agent Simulation
function runPrediction() {

    const home = document.getElementById("home").value;
    const away = document.getElementById("away").value;
    const odds = parseFloat(document.getElementById("odds").value);

    // ===== AI AGENTS =====

    const dataAgent = rand(55, 75);
    const tacticAgent = rand(50, 75);
    const modelAgent = rand(55, 80);
    const riskAgent = rand(0, 20);

    // ===== WIN PROBABILITY =====
    let winProb =
        (dataAgent * 0.3 +
         tacticAgent * 0.2 +
         modelAgent * 0.5) / 100;

    winProb -= (riskAgent / 100);

    winProb = Math.max(0, Math.min(1, winProb));

    const drawProb = (1 - winProb) * 0.25;
    const awayProb = 1 - winProb - drawProb;

    // ===== EV =====
    const ev = (winProb * odds) - 1;

    // ===== CONFIDENCE =====
    let confidence = "C";
    if (winProb > 0.60) confidence = "A";
    else if (winProb > 0.55) confidence = "B";

    const bet = ev > 0 && winProb > 0.52;

    // ===== OUTPUT =====
    document.getElementById("result").innerHTML = `
        <h3>${home} vs ${away}</h3>
        <hr>

        <p>Data Agent: ${dataAgent.toFixed(2)}</p>
        <p>Tactical Agent: ${tacticAgent.toFixed(2)}</p>
        <p>Model Agent: ${modelAgent.toFixed(2)}</p>
        <p>Risk Penalty: ${riskAgent.toFixed(2)}</p>

        <hr>

        <h3 class="good">Home Win: ${(winProb * 100).toFixed(2)}%</h3>
        <p>Draw: ${(drawProb * 100).toFixed(2)}%</p>
        <p>Away: ${(awayProb * 100).toFixed(2)}%</p>

        <hr>

        <p>Odds: ${odds}</p>
        <p>EV: ${ev.toFixed(3)}</p>

        <h3>Confidence: ${confidence}</h3>

        <h3 class="${bet ? 'good' : 'bad'}">
            Recommendation: ${bet ? "BET" : "NO BET"}
        </h3>
    `;
}
