const PAYHIP_VERIFY_URL = "https://payhip.com/api/v2/license/verify";
const PAYHIP_USAGE_URL  = "https://payhip.com/api/v2/license/usage";

const PRODUCT_SECRET_KEY = "prod_sk_6lZQc_58f13caab190d340f456c20f21d87ce205ea785b";

export async function verifyLicenseKey(licenseKey) {
    try {
        const response = await fetch(PAYHIP_VERIFY_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                product_secret_key: PRODUCT_SECRET_KEY,
                license_key: licenseKey
            })
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
        // Build query string for GET request (even though this makes no sense for updating usage)
        const url = `${PAYHIP_USAGE_URL}?product_secret_key=${encodeURIComponent(PRODUCT_SECRET_KEY)}&license_key=${encodeURIComponent(licenseKey)}`;

        const response = await fetch(url, {
            method: "GET"
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
