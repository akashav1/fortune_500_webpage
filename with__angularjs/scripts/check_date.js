function check_date(c){
  var x = document.getElementsByClassName("active");
  var myString = x[0].textContent;
  myString = myString.substring(0, myString.lastIndexOf(" "));
  if (c == "Show all") c = ""
  if (myString == "Show all") myString = ""
  //console.log(c);
  myString = myString + " " + c;
  //console.log(myString);
  filterSelection(myString);
}
