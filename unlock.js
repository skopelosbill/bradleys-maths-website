import { verifyLicenseKey, increaseLicenseUsage } from "./payhip-license.js";

document.getElementById("unlock-btn").addEventListener("click", async () => {
    const key = document.getElementById("license-input").value.trim();
    const status = document.getElementById("status");

    if (key === "BRADLEY-ELITE-2026") {
        localStorage.setItem("app_unlocked", "true");
        window.location.href = "unified-revision-hub.html";
        return;
    }

    status.textContent = "Checking key…";

    // 🔥 CHECK FREE KEYS (this is the new block)
    const freeKeys = await fetch("free_keys.json").then(r => r.json());
    if (freeKeys.includes(key)) {
        localStorage.setItem("app_unlocked", "true");
        window.location.href = "unified-revision-hub.html";
        return;
    }
    // 🔥 END FREE KEYS BLOCK

    const result = await verifyLicenseKey(key);

    if (!result.valid) {
        status.textContent = "Invalid or disabled license key.";
        status.style.color = "red";
        return;
    }

    await increaseLicenseUsage(key);

    localStorage.setItem("app_unlocked", "true");
    localStorage.setItem("license_key", key);

    status.textContent = "License verified. Unlocking…";
    status.style.color = "green";

    window.location.href = "unified-revision-hub.html";
});
