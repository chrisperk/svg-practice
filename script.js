console.log('hi');

const rect = document.querySelector('.rect');

rect.addEventListener('click', function () {
    console.log(this);
    this.classList.add('green');
})