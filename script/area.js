var base = document.querySelector('.base');
var height = document.querySelector('.height');
var output = document.querySelector('.output');

document.addEventListener('submit', (e) => {

    e.preventDefault();

    let b = base.value;
    let h = height.value;

    let area = ((1.0 / 2.0) * b * h).toFixed(2);

    output.innerHTML = `<p>The area of the triangle is ${area} cm  <sup>2</sup></p>`;

    output.style.display = "block";

});
