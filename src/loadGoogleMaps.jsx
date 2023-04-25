export async function loadGoogleMaps() {
    const script = document.getElementById("google-maps-script");
    const apiKey = script.getAttribute("data-api-key");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    return new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
    });
  }