//ロック画面の文字を表示するsetIntervalです
setInterval('titleTrans();',75);

////ロック画面のカーソルを点滅させるsetIntervalです
setInterval('tenmetsu();',500);

//ロック画面のtitle文字を表示する際に使用する関数
var t = 0;

//ロック画面のtitlejp文字を表示する際に使用する関数
var j = 0;

//ロック画面のカーソルを表示する際に使用する関数
var o = 0;

//showTextの際に使用する関数
var p = 0;
var p2 = 0;

var title = "VISION";
var titlejp = "SFC-INFO1 2019"

function titleTrans(){


  if (t < 50) {
    //tが50に達するまでtitleを表示

    document.getElementById('titletext').innerHTML += title.charAt(t);
    t++;
  }else if (t == 50){
      //tが50に達したらtitleを消去

    document.getElementById('titletext').innerHTML = "";
    t++;
  }else if (j < 50){
    //tが50以下でない時、jが50に達するまでtitlejpを表示

    document.getElementById('titletext').innerHTML += titlejp.charAt(j);
    j++;
  }else{
    //jが50を超えた時、文字を消去し関数をリセット（実行前の状態に戻す）

    document.getElementById('titletext').innerHTML = "";
    t = 0;
    j = 0;
  }
}

function tenmetsu(){
  if (o == 0) {
    //oが0の時カーソルを表示、終わったらoに+1

    document.getElementById('cursor').innerHTML += "|";
    o++;
  }else{
    //oが0以外の時カーソルを消去、終わったらoを0に

    document.getElementById('cursor').innerHTML = "";
    o = 0;
  }
}


function vanishTop(){
   //ボタンを押したら覆いかぶさっていたtitleContainerを消去するファンクション

   //titleContainerとlockのidをfadeoutに変更し、#fadeoutのcssが適用されるようにする
   document.getElementById("titleContainer").id = "fadeout";
   document.getElementById("lock").id = "fadeout";

   //ただfadeoutさせただけでは要素自体が残り下のcontentにあるbutton等が操作できないので、titleContainer要素をフェードアウト後に消す
    setTimeout(function(){
      document.getElementById("fadeout").style.display = "none";

      var lock = document.getElementsByClassName("lock");

      //classで呼び出したため配列の処理
      for(var i = 0; i < lock.length; i++) {
        lock[i].style.display = "none";
      }
    }, 1000);


}
