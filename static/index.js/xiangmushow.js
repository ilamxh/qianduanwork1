window.addEventListener("load", function () {
  var box = document.getElementById("box");
  var divarr = box.getElementsByTagName("li");
  var circle = document.getElementById("circle");
  var XiangmuShow = document.getElementById("XiangmuShow");
  var index = 0;
  var alla = circle.getElementsByTagName("a");
  alla[index].style.backgroundColor = "black";
  for (var i = 0; i < alla.length; i++) {
    alla[i].num = i;
    alla[i].onclick = function () {
      index = this.num;
      box.style.left = -1100 * index + "px";
      alla[index].style.backgroundColor = "black";
      setA();
      move(box, "left", -1100 * index, 20, function () {});
    };
  }
  autoChange();
  function setA() {
    if (index >= divarr.length - 1) {
      index = 0;
      box.style.left = 0;
    }
    for (var i = 0; i < alla.length; i++) {
      alla[i].style.backgroundColor = "";
    }
    alla[index].style.backgroundColor = "black";
  }
  function autoChange() {
    setInterval(function () {
      index++;
      index %= divarr.length;
      move(box, "left", -1100 * index, 20, function () {
        setA();
      });
    }, 3000);
  }
});
