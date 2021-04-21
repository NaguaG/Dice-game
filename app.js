// Тоглогчийн ээлжийг хадгалах хувьсагч, 1дүгээр тоглогч = 0, 2дугаар тоглогч = 1
var activePlayer = 1;
// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр хадгалж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;
// <div class="player-score" id="score-0">43</div>
// document.querySelector('#score-0').textContent = dice;

// document.querySelector('#score-1').innerHTML = '<em>Yes<em>';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


var diceDom = document.querySelector(".dice"); 
diceDom.style.display = 'none';

document.querySelector(".btn-roll").addEventListener("click", function (){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
   diceDom.style.display = 'block';
   diceDom.src = 'dice-' + diceNumber +'.png';

});
