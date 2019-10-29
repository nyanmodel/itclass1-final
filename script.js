var text = "　このページは外舘による、情報基礎1の最終課題ページです。"


//buttonを押した時に文字を表示するファンクション（button側でsetInterval設定済）
function showText(){
  //p要素に文字を挿入
  document.getElementById('p').innerHTML += text.charAt(p);
  p++;
  //p文字目（最初は0）に文字を入れ、その後pに+1する

}


function SNSpoi(){

  //ツイート内容を取得
  var tweet = document.getElementById("compose").value;

  //日時を取得
  var date = new Date() ;

  //composeが空ならアラートをだし、何か入ってたらtimelineにinsertAdjacentHTMLで追加
  if(tweet == ""){
    alert("内容を入力してください。");
  }else{
    document.getElementById("timeline").insertAdjacentHTML('afterend',"<img class='icon' src='icon.png'><div class='tweet'>" + tweet + "<a class='fav' onclick='fav(this);'><i class='fas fa-star'></i><div id='favBtn'>0</div></a></div><div class='timeStamp'>" + date + "</div><hr noshade>");

    //終わったらcomposeを空にする
    document.getElementById("compose").value = "";
  }
}

//fav(this)を使えば、その要素の中だけを処理することができる
function fav(a){
  //childnodesの1番目を指定することでdivタグのinnerHTMLを取得
  var childs = a.childNodes;
  var favNum = childs[1].innerHTML;
  //ほんで数字を受け取って+1する
  favNum = Number(favNum);
  favNum++;

  //戻す
  childs[1].innerHTML = favNum;
}
