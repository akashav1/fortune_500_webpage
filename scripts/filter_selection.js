function filterSelection(c) {
  var x, i,j;
  x = document.getElementsByClassName("filterDiv")
  if (c == "Show all " || c==" Show all") c = "";
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("show");;
    if (x[i].className.indexOf(c) > -1) x[i].classList.add("show");;
  }
  for(r=1;r<501;r++){
    j = document.getElementsByClassName("on_"+r)
    k = document.getElementById("title_"+r);
    for (l=0;l<j.length;l++){
      if (l==0) k.classList.remove("show");
      if (j[l].className.indexOf("show")>-1) k.classList.add("show");
    }
  }
  var header = document.getElementById("btn_type");
  var btns = header.getElementsByClassName("btn1");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  var header2 = document.getElementById("btn_date");
  var btns2 = header2.getElementsByClassName("btn2");
  for (var i = 0; i < btns2.length; i++) {
    btns2[i].addEventListener("click", function() {
      var current2 = document.getElementsByClassName("active2");
      current2[0].className = current2[0].className.replace(" active2", "");
      this.className += " active2";
    });
  }
}
