const url =
  "https://ezanvakti.imsakiyem.com/api/locations/districts?stateId=505";
export const getPrayTime = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    throw error;
  }
};

export async function getLocationFromIP() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

  try {
    const res = await fetch("https://ipapi.co/json/", {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`Failed to fetch location: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (data.error) {
      throw new Error(`API Error: ${data.reason || "Unknown error"}`);
    }

    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    console.error("Error fetching location:", error);

    // Fallback data to prevent app crash
    return {
      city: "Istanbul",
      country: "Turkey",
      country_name: "Turkey",
      ip: "0.0.0.0",
    };
  }
}
