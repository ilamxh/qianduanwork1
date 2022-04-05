function showDiv() {
  var showId1 = document.getElementById("text1");
  var showId2 = document.getElementById("text2");
  var showId3 = document.getElementById("hezhao");
  var showId7 = document.getElementById("yunying-wrap");
  var showId4 = document.getElementById("erpxitong");
  var showId5 = document.getElementById("jieshaotop");
  var showId6 = document.getElementById("jieshaobottom");
  var showId8 = document.getElementById("biaoQian1");
  var showId9 = document.getElementById("biaoQian2");
  var showId10 = document.getElementById("biaoQian3");
  var showId11 = document.getElementById("biaoQian4");
  var showId12 = document.getElementById("biaoQian5");
  var showId13 = document.getElementById("biaoQian6");
  var showId14 = document.getElementById("biaoQian7");
  var showId15 = document.getElementById("biaoQian8");
  var showId16=document.getElementById("hezhao");

  var clients =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  var divTop1 = showId1.getBoundingClientRect().top;
  var divTop2 = showId2.getBoundingClientRect().top;
  var divTop4 = showId4.getBoundingClientRect().top;
  var divTop5=showId16.getBoundingClientRect().top;

  if (divTop1 <= clients || divTop2 <= clients) {
    showId1.classList.add("fadeInLeft");
    showId2.classList.add("fadeInLeft");
  } else {
    showId1.classList.remove("fadeInLeft");
    showId2.classList.remove("fadeInLeft");
  }
  if(divTop1<=clients){
    showId3.classList.add("flyToLeft");
  }
  else{
      showId3.classList.remove("flyToLeft");
  }
  if (divTop1 <= clients&&divTop5>=clients) {
   
    showId8.className="flyToAround1";
    showId9.className="flyToAround2";
    showId10.className="flyToAround3";
    showId11.className="flyToAround4";
    showId12.className="flyToAround5";
    showId13.className="flyToAround6";
    showId14.className="flyToAround7";
    showId15.className="flyToAround8";
  }
 

  showId8.addEventListener("animationend",function(){
      showId8.className="afterFly1";
  });
  showId9.addEventListener("animationend",function(){
    showId9.className="afterFly2";
});
showId10.addEventListener("animationend",function(){
    showId10.className="afterFly3";
});
showId11.addEventListener("animationend",function(){
    showId11.className="afterFly4";
});
showId12.addEventListener("animationend",function(){
    showId12.className="afterFly5";
});
showId13.addEventListener("animationend",function(){
    showId13.className="afterFly6";
});
showId14.addEventListener("animationend",function(){
    showId14.className="afterFly7";
});
showId15.addEventListener("animationend",function(){
    showId15.className="afterFly8";
});

  if (divTop4 <= clients) {
    showId4.classList.add("flyToRight");
    showId5.classList.add("flyToBottom");
    showId6.classList.add("flyToTop");
  } else {
    showId4.classList.remove("flyToRight");
    showId5.classList.remove("flyToBottom");
    showId6.classList.remove("flyToTop");
  }
  showId8.a
}
window.onscroll = showDiv;
