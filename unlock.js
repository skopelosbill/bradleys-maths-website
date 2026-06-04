alert("unlock.js LOADED");


document.getElementById("unlock-btn").addEventListener("click", async () => {
    const key = document.getElementById("license-input").value.trim();
    const status = document.getElementById("status");

    // 🔥 MASTER OVERRIDE
    if (key === "BRADLEY-ELITE-2026") {
        localStorage.setItem("app_unlocked", "true");
        window.location.href = "unified-revision-hub.html";
        return;
    }

    status.textContent = "Checking key…";

    // 🔥 FREE KEYS
    const freeKeys = await fetch("free_keys.json").then(r => r.json());
    if (freeKeys.includes(key)) {
        localStorage.setItem("app_unlocked", "true");
        localStorage.setItem("licenseKey", key);
        window.location.href = "unified-revision-hub.html";
        return;
    }

    // 🔥 MAIN 5000 KEYS
    const keyFile = await fetch("keys.json").then(r => r.json());
    if (keyFile.keys.includes(key)) {
        localStorage.setItem("app_unlocked", "true");
        localStorage.setItem("licenseKey", key);
        window.location.href = "unified-revision-hub.html";
        return;
    }

    // ❌ INVALID
    status.textContent = "Invalid licence key.";
    status.style.color = "red";
});
