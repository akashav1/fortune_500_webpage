function showcount_type(){
  var Credit_card = 0;
  var Destructive_Attack = 0;
  var Intellectual_Property_Theft = 0;
  var Personally_Identifiable_Information = 0;
  var Protected_Health_Information = 0;
  var Hardware_stolen = 0
  var none = 0;
  var all = 0;
  for(i=0;i<501;i++){
    j=document.getElementsByClassName("on_"+i);
    for(k=0;k<j.length;k++){
      if (j[k].classList.contains("Credit")&&j[k].classList.contains("show")) Credit_card = Credit_card + 1
      else if (j[k].classList.contains("Destructive")&&j[k].classList.contains("show")) Destructive_Attack = Destructive_Attack + 1
      else if (j[k].classList.contains("Intellectual")&&j[k].classList.contains("show")) Intellectual_Property_Theft = Intellectual_Property_Theft + 1
      else if (j[k].classList.contains("Personally")&&j[k].classList.contains("show")) Personally_Identifiable_Information = Personally_Identifiable_Information + 1
      else if (j[k].classList.contains("Protected")&&j[k].classList.contains("show")) Protected_Health_Information = Protected_Health_Information + 1
      else if (j[k].classList.contains("Hardware")&&j[k].classList.contains("show")) Hardware_stolen = Hardware_stolen + 1
      else if (j[k].classList.contains("none")&&j[k].classList.contains("show")) none = none + 1;
      all = all + 1
    }
  }
  document.getElementById("for_all").innerHTML = "(" + all + ")";
  document.getElementById("Credit_card").innerHTML = "(" + Credit_card + ")";
  document.getElementById("Destructive_Attack").innerHTML = "(" + Destructive_Attack + ")";
  document.getElementById("Intellectual_Property_Theft").innerHTML = "(" + Intellectual_Property_Theft + ")";
  document.getElementById("Personally_Identifiable_Information").innerHTML = "(" + Personally_Identifiable_Information + ")";
  document.getElementById("Protected_Health_Information").innerHTML = "(" + Protected_Health_Information + ")";
  document.getElementById("Hardware_stolen").innerHTML = "(" + Hardware_stolen + ")";
  document.getElementById("noone").innerHTML = "(" + none + ")";
  document.getElementById("for_all1").innerHTML = "(" + all + ")";
  showcount_year_nc();
}

function showcount_year(){
  var all = 0;
  var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,u=0,ou=0;
  for(i=0;i<501;i++){
    j=document.getElementsByClassName("on_"+i);
    for(k=0;k<j.length;k++){
      if(j[k].classList.contains("2018")&&j[k].classList.contains("show")) a = a + 1 ;
      else if(j[k].classList.contains("2017")&&j[k].classList.contains("show")) b = b + 1 ;
      else if(j[k].classList.contains("2016")&&j[k].classList.contains("show")) c = c + 1 ;
      else if(j[k].classList.contains("2015")&&j[k].classList.contains("show")) d = d + 1 ;
      else if(j[k].classList.contains("2014")&&j[k].classList.contains("show")) e = e + 1 ;
      else if(j[k].classList.contains("2013")&&j[k].classList.contains("show")) f = f + 1 ;
      else if(j[k].classList.contains("2012")&&j[k].classList.contains("show")) g = g + 1 ;
      else if(j[k].classList.contains("2011")&&j[k].classList.contains("show")) h = h + 1 ;
      else if(j[k].classList.contains("2010")&&j[k].classList.contains("show")) u = u + 1 ;
      else if(j[k].classList.contains("othe")&&j[k].classList.contains("show")) ou = ou + 1 ;
      all = all + 1;
    }
  }
  document.getElementById("for_all1").innerHTML = "(" + all + ")";
  document.getElementById("2018").innerHTML = "(" + a + ")";
  document.getElementById("2017").innerHTML = "(" + b + ")";
  document.getElementById("2016").innerHTML = "(" + c + ")";
  document.getElementById("2015").innerHTML = "(" + d + ")";
  document.getElementById("2014").innerHTML = "(" + e + ")";
  document.getElementById("2013").innerHTML = "(" + f + ")";
  document.getElementById("2012").innerHTML = "(" + g + ")";
  document.getElementById("2011").innerHTML = "(" + h + ")";
  document.getElementById("2010").innerHTML = "(" + u + ")";
  document.getElementById("others").innerHTML = "(" + ou + ")";
  showcount_type_nc();
}

function showcount_all(){
  showcount_year();
  showcount_type();
}

function showcount_type_nc(){
  var Credit_card = 0;
  var Destructive_Attack = 0;
  var Intellectual_Property_Theft = 0;
  var Personally_Identifiable_Information = 0;
  var Protected_Health_Information = 0;
  var Hardware_stolen = 0
  var none = 0;
  var all = 0;
  for(i=0;i<501;i++){
    j=document.getElementsByClassName("on_"+i);
    for(k=0;k<j.length;k++){
      if (j[k].classList.contains("Credit")) Credit_card = Credit_card + 1
      else if (j[k].classList.contains("Destructive")) Destructive_Attack = Destructive_Attack + 1
      else if (j[k].classList.contains("Intellectual")) Intellectual_Property_Theft = Intellectual_Property_Theft + 1
      else if (j[k].classList.contains("Personally")) Personally_Identifiable_Information = Personally_Identifiable_Information + 1
      else if (j[k].classList.contains("Protected")) Protected_Health_Information = Protected_Health_Information + 1
      else if (j[k].classList.contains("Hardware")) Hardware_stolen = Hardware_stolen + 1
      else if (j[k].classList.contains("none")) none = none + 1;
      all = all + 1
    }
  }
  document.getElementById("for_all").innerHTML = "(" + all + ")";
  document.getElementById("Credit_card").innerHTML = "(" + Credit_card + ")";
  document.getElementById("Destructive_Attack").innerHTML = "(" + Destructive_Attack + ")";
  document.getElementById("Intellectual_Property_Theft").innerHTML = "(" + Intellectual_Property_Theft + ")";
  document.getElementById("Personally_Identifiable_Information").innerHTML = "(" + Personally_Identifiable_Information + ")";
  document.getElementById("Protected_Health_Information").innerHTML = "(" + Protected_Health_Information + ")";
  document.getElementById("Hardware_stolen").innerHTML = "(" + Hardware_stolen + ")";
  document.getElementById("noone").innerHTML = "(" + none + ")";
  document.getElementById("for_all1").innerHTML = "(" + all + ")";
}

function showcount_year_nc(){
  var all = 0;
  var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,u=0,ou=0;
  for(i=0;i<501;i++){
    j=document.getElementsByClassName("on_"+i);
    for(k=0;k<j.length;k++){
      if(j[k].classList.contains("2018")) a = a + 1 ;
      else if(j[k].classList.contains("2017")) b = b + 1 ;
      else if(j[k].classList.contains("2016")) c = c + 1 ;
      else if(j[k].classList.contains("2015")) d = d + 1 ;
      else if(j[k].classList.contains("2014")) e = e + 1 ;
      else if(j[k].classList.contains("2013")) f = f + 1 ;
      else if(j[k].classList.contains("2012")) g = g + 1 ;
      else if(j[k].classList.contains("2011")) h = h + 1 ;
      else if(j[k].classList.contains("2010")) u = u + 1 ;
      else if(j[k].classList.contains("others")) ou = ou + 1 ;
      all = all + 1;
    }
  }

  document.getElementById("for_all1").innerHTML = "(" + all + ")";
  document.getElementById("2018").innerHTML = "(" + a + ")";
  document.getElementById("2017").innerHTML = "(" + b + ")";
  document.getElementById("2016").innerHTML = "(" + c + ")";
  document.getElementById("2015").innerHTML = "(" + d + ")";
  document.getElementById("2014").innerHTML = "(" + e + ")";
  document.getElementById("2013").innerHTML = "(" + f + ")";
  document.getElementById("2012").innerHTML = "(" + g + ")";
  document.getElementById("2011").innerHTML = "(" + h + ")";
  document.getElementById("2010").innerHTML = "(" + u + ")";
  document.getElementById("others").innerHTML = "(" + ou + ")";
}
