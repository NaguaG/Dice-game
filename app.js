// Тоглоомд шаардлагатай хувьсагчуудыг эхлэж зарлах
// Идэвхитэй тоглогчийн инкекс
var activePlayer;
//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores;
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;
// Тоглоом дууссаныг шалгах боолеан хувьсагчид утгыг хадгалах
var isNewGame;
// Шооны зургийг үзүүлдэг элемэнтийг домоос хайж олоод diceDom хувьсагчид хадгалж байна
var diceDom = document.querySelector(".dice"); 

 initGame();
 // Тоглоом эхлүүлэн функц буюу 'New Game' товчийг дарахад ажиллах дараалал
 function initGame(){
     isNewGame = true;
    // Тоглогчийн ээлжийг хадгалах хувьсагч, 1дүгээр тоглогч = 0, 2дугаар тоглогч = 1
  activePlayer = 0;  
   // Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
   // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
   roundScore = 0;
   // <div class="player-score" id="score-0">43</div>
   // document.querySelector('#score-0').textContent = dice;
   // document.querySelector('#score-1').innerHTML = '<em>Yes<em>';
   document.getElementById('score-0').textContent = '0';
   document.getElementById('score-1').textContent = '0';
   document.getElementById('current-0').textContent = '0';
   document.getElementById('current-1').textContent = '0';
// Тоглогчдын нэрийг буцааж гаргах
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
   diceDom.style.display = 'none';
   }

// шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function (){
if (isNewGame) { // 1-6 хүртэлх тооноос санамсаргүй нэг тоог гаргаж авна.
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шооны зургыг вэб дээр гаргаж харуулна.
   diceDom.style.display = 'block';

   // Буусан тооны шоонын зургыг вэб дээр гаргана.
   diceDom.src = 'dice-' + diceNumber +'.png';
   if (diceNumber !== 1) {
// 1-с ялгаатай тоо буувал буусан тоог тоглогчийн оноо дээр нэмнэ
       roundScore = roundScore + diceNumber;
document.getElementById('current-' + activePlayer).textContent = roundScore;}
   else {
        
       switchToNextPlayer();
    //    if (activePlayer === 0) {
    //        activePlayer = 1;
    //     }else (activePlayer = 0);
     
   }} else {
       alert('Тоглоом дууссан байна. New Game товчийг дарж дахин эхэлнэ үү.')
   }}
   );
// HOLD товчийн эвент листенер
document.querySelector('.btn-hold').addEventListener("click", function() {
    if(isNewGame) {
        // Уг тоглогчийн цуглуулсан оноог глобал оноо дээрээ нэмж өгнө
scores[activePlayer] = scores[activePlayer] + roundScore;
// Тоглогчийн цуглуулсан оноог дэлгэцэнд харуулна
document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

// Уг тоглогч хожсон эсэхийг (түрүүлж 100 оноо хүрсэн эсэх) шалгах
if (scores[activePlayer] >= 100) {
    isNewGame = false;
    document.getElementById('name-' + activePlayer).textContent = 'WINNER !!!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
} else {
    // Тоглогчийн ээлжийг солино.
    switchToNextPlayer();
}} else {
    alert('Тоглоом дууссан байна. New Game товчийг дарж дахин эхэлнэ үү.')
}
    }
)
function switchToNextPlayer (){
    // 1 буувал тоглогчийн ээлжийг нөгөө тоглогч болгож солино
// Энэ тоглогчид 1 буусан тул оноог 0 болгох
document.getElementById('current-' + activePlayer).textContent = 0;
roundScore = 0;
// Хэрэв идэвхитэй тоглогч нь 0 байвал идэвхитэй тоглогчийг 1 болгоно
// Үгүй бол идэвхитэй тоглогчийг 0 болгоно.
activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); 
// Улаан цэгийг шилжүүлэх кодыг хийнэ
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
// Шоог түр алга болгоно.
diceDom.style.display = 'none';
}
// Шинэ тоглоом эхлүүлэх товчны эвент листенер
document.querySelector('.btn-new').addEventListener('click', initGame);
