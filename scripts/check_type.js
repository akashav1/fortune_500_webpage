function check_type(c){
  var x = document.getElementsByClassName("active2");
  var myString = x[0].textContent;
  myString = myString.substring(0, myString.lastIndexOf(" "));
  if (c == "Show all") c = ""
  if (myString == "Show all") myString = ""
  myString = c + " " + myString;
  //console.log(myString);
  filterSelection(myString);
}
