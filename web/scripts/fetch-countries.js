async function fetchCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const countries = await response.json();
  const names = countries.map((country) => country.name.common);

  document.getElementById("countries").innerHTML = names
    .map((name) => `<li>${name}</li>`)
    .join("");

  return names;
}

window.onload = async () => {
  try {
    const countries = await fetchCountries();
    console.log("Fetched countries:", countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};
