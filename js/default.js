var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('数あてゲーム。0~2の数字を入力してください！'));
var i ;
var a ;
var message;

while(a<1){
if(answer === number){
  message = 'あたり！';
  a=1;
}else if (answer < number){
  message = '残念！もっと大きいです';
  a=0;
}else if (number < answer){
  message = '残念！もっと小さいです';
  a=0;
}else{
  message = '0~3の数字を入力してください';
  a=0;
}
}
document.getElementById('choice').textContent = message;
