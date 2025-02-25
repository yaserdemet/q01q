export async function getTimePray() {
  // Loading state'i görebilmek için 2 saniye gecikme ekliyoruz
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return fetch(
    "https://ezanvakti.imsakiyem.com/api/locations/districts?stateId=506",
  ).then((res) => {
    if (!res.ok) throw new Error("Fetch failed");
    return res.json();
  });
}
