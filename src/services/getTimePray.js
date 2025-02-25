export function getTimePray() {
  return fetch("https://ezanvakti.imsakiyem.com/api/locations/districts?stateId=506")
    .then(res => {
      if (!res.ok) throw new Error("Fetch failed");
      return res.json();
    });
}
