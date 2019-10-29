function BMIscore(){
  var heavy = document.formBMI.heavy.value;
  var tall = document.formBMI.tall.value;

  tall = Number(tall);
  heavy = Number(heavy);

  var t2 = (tall / 100) * (tall / 100);
  var BMIex = heavy / t2;

  var BMI0 = Math.round(BMIex * 10) / 10;

//  alert(BMIname + "さんのBMI値は" + BMI0 + "です");

  if (BMI0 < 18.5) {
    document.getElementById("bmiResult").innerHTML = "BMI値は" + BMI0 + "で、「やせ型」です";
  }else if (BMI0 >=25) {
    document.getElementById("bmiResult").innerHTML = "BMI値は" + BMI0 + "で、「ふとりぎみ型」です";
  }else{
    document.getElementById("bmiResult").innerHTML = "BMI値は" + BMI0 + "で、「ふつう型」です";
  }

}



function Era_calc(){
  var year = document.formEra.year.value;

  year = Number(year);

  if (year >= 2019) {

    var reiwa = year - 2018;
    document.getElementById("yearResult").innerHTML = "西暦" + year +"年は令和" + reiwa + "年です！";
  }else if (year <= 2018 && year >= 1989) {

    var heisei = year - 1988;
    document.getElementById("yearResult").innerHTML = "西暦" + year +"年は平成" + heisei + "年です！";

  }else if (year <= 1988 && year >= 1926) {

    var showa = year - 1925;
    document.getElementById("yearResult").innerHTML = "西暦" + year +"年は昭和" + showa + "年です！";

  }else{
    alert("その年には対応していません。");
  }

}



function Leap_calc(){
  var LYear = document.formLeapYear.LeapYear.value;

  LYear = Number(LYear);

  if (LYear % 4 == 0) {

      if (LYear % 100 == 0) {

          if (LYear % 400 == 0) {
            document.getElementById("leapResult").innerHTML = "その年は閏年です。";
          }else {
            document.getElementById("leapResult").innerHTML = "その年は平年です。";
          }

      }else {
        document.getElementById("leapResult").innerHTML = "その年は閏年です。";
      }

  }else {
    document.getElementById("leapResult").innerHTML = "その年は平年です。";
  }


}


function FIZZBUZZ(){
  var FBnumber = document.formFB.FBnumber.value;

  FBnumber = Number(FBnumber);

  if (FBnumber % 3 == 0 && FBnumber % 5 == 0) {
    alert("FIZZBUZZ!");
  }else if (FBnumber % 3 == 0) {
    alert("FIZZ!");
  }else if (FBnumber % 5 == 0) {
    alert("BUZZ!");
  }

}
