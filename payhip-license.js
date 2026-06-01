const PAYHIP_VERIFY_URL = "https://payhip.com/api/v2/license/verify";
const PAYHIP_USAGE_URL  = "https://payhip.com/api/v2/license/usage";

const PRODUCT_SECRET_KEY = "prod_sk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

export async function verifyLicenseKey(licenseKey) {
    try {
        const url = `${PAYHIP_VERIFY_URL}?license_key=${encodeURIComponent(licenseKey)}`;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "product-secret-key": PRODUCT_SECRET_KEY
            }
        });

        const result = await response.json();

        if (!result.data || !result.data.enabled) {
            return { valid: false };
        }

        return {
            valid: true,
            email: result.data.buyer_email,
            uses: result.data.uses,
            product: result.data.product_link
        };

    } catch (error) {
        console.error("License verification failed:", error);
        return { valid: false };
    }
}

export async function increaseLicenseUsage(licenseKey) {
    try {
        const response = await fetch(PAYHIP_USAGE_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "product-secret-key": PRODUCT_SECRET_KEY
            },
            body: `license_key=${encodeURIComponent(licenseKey)}`
        });

        const result = await response.json();

        if (!result.data) {
            return { success: false };
        }

        return { success: true, uses: result.data.uses };

    } catch (error) {
        console.error("Usage update failed:", error);
        return { success: false };
    }
}
