function createParticle() {
  const particle = document.createElement('div');
  const size = Math.random() * 3 + 1;
  particle.className = 'particle';
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
  particle.style.animationDelay = `${Math.random() * 2}s`;
  document.querySelector('.background-pattern').appendChild(particle);
  setTimeout(() => particle.remove(), 10000);
}

for (let i = 0; i < 50; i++) createParticle();
setInterval(createParticle, 200);

function toggleAnswer(id) {
  const answer = document.getElementById(id);
  answer.classList.toggle('open');
}
