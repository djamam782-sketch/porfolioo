/* =============================================
   TARIFS.JS — Currency Converter FDJ → EUR / USD
   Official fixed rates (FDJ pegged to USD since 1949)
   1 USD = 177.721 FDJ (Official rate — Central Bank of Djibouti)
   1 EUR ≈ 191.50 FDJ (Calculated via floating USD/EUR)
   ============================================= */

// Fallback rates if API fails
const RATE_USD_PER_FDJ = 1 / 177.721;   // FDJ → USD
let   RATE_EUR_PER_FDJ = 1 / 191.50;    // FDJ → EUR (updated if API succeeds)

// Attempt to fetch live EUR/USD rate
(async function loadLiveRate() {
    try {
        const res  = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();
        if (data && data.rates && data.rates.EUR) {
            const eurPerUsd   = data.rates.EUR;
            RATE_EUR_PER_FDJ  = RATE_USD_PER_FDJ * eurPerUsd;
            document.getElementById("rate-source-badge").textContent = "✅ Live rates updated";
        } else {
            throw new Error("missing data");
        }
    } catch(e) {
        document.getElementById("rate-source-badge").textContent = "📌 Fixed reference rates";
    } finally {
        document.getElementById("rate-eur-label").textContent =
            RATE_EUR_PER_FDJ.toFixed(6);
        document.getElementById("rate-usd-label").textContent =
            RATE_USD_PER_FDJ.toFixed(6);
        const convInput = document.getElementById("conv-fdj");
        if (convInput && convInput.value) convertFromFDJ();
    }
})();

function convertFromFDJ() {
    const raw = parseFloat(document.getElementById("conv-fdj").value);
    if (isNaN(raw) || raw < 0) {
        document.getElementById("conv-eur").value = "";
        document.getElementById("conv-usd").value = "";
        return;
    }
    const eur = (raw * RATE_EUR_PER_FDJ).toFixed(2);
    const usd = (raw * RATE_USD_PER_FDJ).toFixed(2);

    document.getElementById("conv-eur").value =
        parseFloat(eur).toLocaleString("en-US", { minimumFractionDigits: 2 }) + " €";
    document.getElementById("conv-usd").value =
        parseFloat(usd).toLocaleString("en-US", { minimumFractionDigits: 2 }) + " $";
}

function setAmount(amount) {
    const inp = document.getElementById("conv-fdj");
    inp.value = amount;
    convertFromFDJ();
    inp.style.borderColor = "var(--accent-orange)";
    inp.style.boxShadow   = "0 0 0 3px rgba(230,126,34,0.18)";
    setTimeout(() => {
        inp.style.borderColor = "";
        inp.style.boxShadow   = "";
    }, 800);
}
