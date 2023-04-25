(function loadGoogleMaps() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_MAP_API_KEY}`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
  })();