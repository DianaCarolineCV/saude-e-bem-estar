
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}


document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    }
  });
});

function calcularIMC(event) {
  event.preventDefault();
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;

  if (peso && altura) {
    const imc = peso / (altura * altura);
    let categoria = '';

    if (imc < 18.5) {
      categoria = 'Baixo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      categoria = 'Sobrepeso';
    } else {
      categoria = 'Obesidade';
    }

    document.getElementById('resultado-imc').textContent = `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
  }
}


