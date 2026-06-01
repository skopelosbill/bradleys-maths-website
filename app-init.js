export function isUnlocked() {
    return localStorage.getItem("app_unlocked") === "true";
}
