export async function fetchData(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error en la API: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error(`Error al obtener datos de ${url}:`, error);
    return null;
  }
}

export async function postData(url: string, body: object) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error(`Error en la API: ${res.statusText}`);
    return await res.json();
  } catch (error) {
    console.error(`Error al enviar datos a ${url}:`, error);
    return null;
  }
}
