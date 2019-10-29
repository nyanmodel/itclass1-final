var rireki = ""; //文章表示用変数
var yhp = 200; //勇者HP
var ehp = 300; //魔王HP
var ymp = 20; //勇者MP
var emp = 20; //魔王MP
var shouhai = false; //勝敗判定変数

function main() { //プログラム本体
  if (shouhai == true) { //勝敗が決して入ればプログラムから抜け出す
    return 0;
  }
  var command = document.getElementById('command').value; //コマンド読み取り
  command = Number(command);
  var random = Math.floor( Math.random() * 11 ); //勇者ダメージ用乱数生成
  var damage = 0;

  switch (command) { //勇者の行動分岐
    case 1: //勇者攻撃コマンド
      damage = 20 + random;
      ehp -= damage;
      rireki += "<p class='yusha'><img src='yusha.png' class='icon'>勇者の攻撃！魔王に" + damage +　"のダメージ！(魔王の残りHP：" + ehp + ")(勇者の残りHP：" + yhp + ")(勇者の残りMP：" + ymp + ")</p>";
      break;

    case 2: //勇者攻撃呪文コマンド
      damage = 30 + random;
      ymp -= 2;
      if (ymp > 0) {
        ehp -= damage;
        rireki += "<p class='yusha'><img src='yusha.png' class='icon'>勇者はメラを唱えた！魔王に" + damage +　"のダメージ！(魔王の残りHP：" + ehp + ")(勇者の残りHP：" + yhp + ")(勇者の残りMP：" + ymp + ")</p>";
      } else {
        ymp = 0
        rireki += "<p class='yusha'><img src='yusha.png' class='icon'>勇者はメラを唱えた！しかしMPが足りなかった！(魔王の残りHP：" + ehp + ")(勇者の残りHP：" + yhp + ")(勇者の残りMP：" + ymp + ")</p>";
      }
      break;

    case 3: //勇者回復呪文コマンド
      damage = 20 + random;
      ymp -= 3;
      if (ymp > 0) {
        yhp += damage;
        rireki += "<p class='yusha'><img src='yusha.png' class='icon'>勇者はホイミを唱えた！勇者のHPが" + damage +　"回復した！(魔王の残りHP：" + ehp + ")(勇者の残りHP：" + yhp + ")(勇者の残りMP：" + ymp + ")</p>";
      } else {
        ymp = 0
        rireki += "<p class='yusha'><img src='yusha.png' class='icon'>勇者はホイミを唱えた！しかしMPが足りなかった！(魔王の残りHP：" + ehp + ")(勇者の残りHP：" + yhp + ")(勇者の残りMP：" + ymp + ")</p>";
      }
      break;

    default: //例外設定
      alert("1〜3の数字を入力してください");
      break;
  }

  random = Math.floor( Math.random() * 11 ); //ダメージの決定

  if (ehp < 0) { //魔王のHPが0未満なら行動をスキップ
    command = 3;
  }

  if (command > 0 && command < 4) { //1~3以外の数字が入力された場合の例外設定
    command = Math.floor( Math.random() * 3 ); //魔王の行動選択
  } else {
    command = 4
  }

  switch (command) { //魔王の行動分岐
    case 0: //魔王攻撃コマンド
      damage = 20 + random;
      yhp -= damage;
      rireki += "<p class='mao'><img src='mao.png' class='icon'>魔王の攻撃！勇者に" + damage +　"のダメージ！(魔王の残りHP：" + ehp + ")(勇者の残りHP：" + yhp + ")(勇者の残りMP：" + ymp + ")</p>";
      break;

    case 1: //魔王攻撃呪文コマンド
      damage = 30 + random;
      emp -= 2;
      if (emp > 0) {
        yhp -= damage;
        rireki += "<p class='mao'><img src='mao.png' class='icon'>魔王はヒャドを唱えた！勇者に" + damage +　"のダメージ！(魔王の残りHP：" + ehp + ")(勇者の残りHP：" + yhp + ")(勇者の残りMP：" + ymp + ")</p>";
      } else {
        rireki += "<p class='mao'><img src='mao.png' class='icon'>魔王はヒャドを唱えた！しかしMPが足りなかった！(魔王の残りHP：" + ehp + ")(勇者の残りHP：" + yhp + ")(勇者の残りMP：" + ymp + ")</p>";
      }
      break;

    case 2: //魔王回復呪文コマンド
      damage = 20 + random;
      emp -= 3;
      if (emp > 0) {
        ehp += damage;
        rireki += "<p class='mao'><img src='mao.png' class='icon'>魔王はホイミを唱えた！魔王のHPが" + damage +　"回復した！(魔王の残りHP：" + ehp + ")(勇者の残りHP：" + yhp + ")(勇者の残りMP：" + ymp + ")</p>";
      } else {
        rireki += "<p class='mao'><img src='mao.png' class='icon'>魔王はホイミを唱えた！しかしMPが足りなかった！(魔王の残りHP：" + ehp + ")(勇者の残りHP：" + yhp + ")(勇者の残りMP：" + ymp + ")</p>";
      }
      break;

    default:
      break;
  }

  if (ehp < 0) { //勇者勝利処理
    rireki += "<p class='mao'><img src='mao.png' class='icon'>魔王は倒れた！</p>";
    shouhai = true;
  } else if (yhp < 0) { //魔王勝利処理
    rireki += "<p class='yusha'><img src='yusha.png' class='icon'>勇者は倒れた！</p>";
    shouhai = true;
  }

  document.getElementById('honbun').innerHTML = rireki; //HTMLに記述

  document.getElementById('command').value = "";

  var a = document.documentElement;
  var y = a.scrollHeight - a.clientHeight;
  window.scroll(0, y);
}
