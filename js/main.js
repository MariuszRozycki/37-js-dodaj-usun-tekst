const buttonAdd = document.getElementById('add');
const buttonRemove = document.getElementById('remove');
const paragraph = document.getElementById('text');

buttonAdd.addEventListener('click', function () {
  paragraph.innerText = `To tekst w paragrafie, ktory pojawia sie po kliknieciu w przycisk 'Dodaj tekst'.`;
});

buttonRemove.addEventListener('click', function () {
  paragraph.innerText = ``;
})