let links = document.querySelector('.tabs').querySelectorAll('p');

links.forEach((e) => {
  e.addEventListener('click', function () {
    links.forEach((link) => link.classList.remove('active'));
    this.classList.add('active');
  });
});

let toggle = document.querySelector('.toggle-btn').querySelectorAll('span');

toggle.forEach((e) => {
  e.addEventListener('click', function () {
    toggle.forEach((item) => item.classList.remove('toggle-active'));
    this.classList.add('toggle-active');
  });
});
