const form = document.getElementById('rps-form');
const resultEl = document.getElementById('result');


function cpuPick() {
const picks = ['Rock', 'Paper', 'Scissors'];
return picks[Math.floor(Math.random() * picks.length)];
}


function decide(p1, p2) {
if (p1 === p2) return "It's a tie!";
if (
(p1 === 'Rock' && p2 === 'Scissors') ||
(p1 === 'Paper' && p2 === 'Rock') ||
(p1 === 'Scissors' && p2 === 'Paper')
) return 'You win!';
return 'Computer wins!';
}


form.addEventListener('submit', (e) => {
e.preventDefault();
const name = document.getElementById('name').value.trim() || 'Player';
const user = document.getElementById('choice').value;
const cpu = cpuPick();
const verdict = decide(user, cpu);
resultEl.textContent = `${name} chose ${user}. Computer chose ${cpu}. → ${verdict}`;
});