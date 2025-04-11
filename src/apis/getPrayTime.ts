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
  const res = await fetch("https://ipapi.co/json/");
  return await res.json();
}
