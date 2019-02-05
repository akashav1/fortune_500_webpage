<!DOCTYPE html>
<head>
  <title>Rough Draft</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="style/style_fortune500.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
  <script src="scripts/check_date.js"></script>
  <script src="scripts/check_type.js"></script>
  <script src="scripts/counts.js"></script>
  <script src="scripts/filter_selection.js"></script>
</head>
<body onload="filterSelection('');showcount_type();showcount_year()">
  <div class = "container">

    <div class = "btn-group" id ="btn_type">
      <!--<button class="btn btn1 btn-secondary active" onclick="check1('all')"><p>Show all<span class="small_font" id="for_all"></p></button>-->
      <button class="btn btn1 btn-secondary active" onclick="check_type('Show all');showcount_all()">Show all <span class="small_font" id="for_all"></button>
        <button class="btn btn1 btn-secondary" onclick="check_type('Credit Card loss');showcount_year();">Credit Card loss <span class="small_font" id="Credit_card"></button>
          <button class="btn btn1 btn-secondary" onclick="check_type('Destructive Attack');showcount_year();">Destructive Attack <span class="small_font" id="Destructive_Attack"></button>
            <button class="btn btn1 btn-secondary" onclick="check_type('Intellectual Property Theft');showcount_year();">Intellectual Property Theft <span class="small_font" id="Intellectual_Property_Theft"></button>
              <button class="btn btn1 btn-secondary" onclick="check_type('Personally Identifiable Information');showcount_year();">Personally Identifiable Information <span class="small_font" id="Personally_Identifiable_Information"></button>
                <button class="btn btn1 btn-secondary" onclick="check_type('Protected Health Information');showcount_year();">Protected Health Information <span class="small_font" id="Protected_Health_Information"></button>
                  <button class="btn btn1 btn-secondary" onclick="check_type('Hardware stolen');showcount_year();">Hardware Stolen <span class="small_font" id="Hardware_stolen"></button>
                    <button class="btn btn1 btn-secondary" onclick="check_type('none');showcount_year();">None <span class="small_font" id="noone"></button>
                  </div>
                  <hr>

                  <div id="btn_date" class = "btn-group">
                    <button class="btn btn2 btn-secondary active2" onclick="check_date('Show all');showcount_all();">Show all <span class="small_font" id="for_all1"></button>
                      <button class="btn btn2 btn-secondary" onclick="check_date('2018');showcount_type();">2018 <span class="small_font" id="2018"></button>
                        <button class="btn btn2 btn-secondary" onclick="check_date('2017');showcount_type();">2017 <span class="small_font" id="2017"></button>
                          <button class="btn btn2 btn-secondary" onclick="check_date('2016');showcount_type();">2016 <span class="small_font" id="2016"></button>
                            <button class="btn btn2 btn-secondary" onclick="check_date('2015');showcount_type();">2015 <span class="small_font" id="2015"></button>
                              <button class="btn btn2 btn-secondary" onclick="check_date('2014');showcount_type();">2014 <span class="small_font" id="2014"></button>
                                <button class="btn btn2 btn-secondary" onclick="check_date('2013');showcount_type();">2013 <span class="small_font" id="2013"></button>
                                  <button class="btn btn2 btn-secondary" onclick="check_date('2012');showcount_type();">2012 <span class="small_font" id="2012"></button>
                                    <button class="btn btn2 btn-secondary" onclick="check_date('2011');showcount_type();">2011 <span class="small_font" id="2011"></button>
                                      <button class="btn btn2 btn-secondary" onclick="check_date('2010');showcount_type();">2010 <span class="small_font" id="2010"></p></button>
                                        <button class="btn btn2 btn-secondary" onclick="check_date'others');showcount_type();">Others <span class="small_font" id="others"></button>
                                        </div>
                                        <hr>
                                        <button class = "btn btn-secondary" type="submit" onclick="window.open('Fortune 500 cyber incidents_12-13-18 - Copy.xlsx')">Download the data set!</button>
                                        <hr>

                                        <?php
                                        $dbhost = 'localhost';
                                        $dbuser = 'root';
                                        $dbpass = '';
                                        $company_name = "";

                                        $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
                                        $sql = 'SELECT * FROM list_export';
                                        mysqli_select_db($conn,'fortune500');
                                        $retval = mysqli_query($conn,$sql);
                                        while ($row = mysqli_fetch_array($retval))
                                        {
                                          $det = $row["Incident_Details"];
                                          $date = DateTime::createFromFormat("Y-m-d", $row['Incident_Date']);
                                          if($company_name != $row["Company_Name"]){
                                            ?>
                                            <div class = "well well-sm asd" id = "title_<?php echo $row["Rank"];?>">
                                              <h3><?php echo $row["Company_Name"];?></h3>
                                            </div><?php $company_name = $row["Company_Name"];
                                          }
                                          if(is_null($row["Incident_Date"])){?>
                                            <div class="container">
                                              <div class = "filterDiv none others on_<?php echo $row["Rank"]?>">
                                                <div class ="row">
                                                  <div class = "col-sm-2">
                                                    <div class = "row">
                                                      <p>Rank</p>
                                                    </div>
                                                    <div class = "row">
                                                      <p><?php echo $row["Rank"]?></p>
                                                    </div>
                                                  </div>
                                                  <div class = "col-sm-10">
                                                    <div class = "row">
                                                      <p class = "no_data"> no data found</p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <hr>
                                              </div>
                                            </div>
                                            <?php
                                            continue;
                                          }else{
                                            ?>
                                            <div class="filterDiv on_<?php echo $row["Rank"]." ".$row["Incident_Type"]." ".$date->format("Y");?>">
                                              <div class = "row">
                                                <div class = "col-sm-2">
                                                  <div class = "row">
                                                    <div class = "col-sm-12">
                                                      <p> Rank </p>
                                                    </div>
                                                  </div>
                                                  <div class="row">
                                                    <div class = "col-sm-6 ">
                                                      <p><?php echo $row["Rank"];?></p>
                                                    </div>
                                                  </div>
                                                  <div class = "row">
                                                    <div class = "col-sm-12">
                                                      <p> Date </p>
                                                    </div>
                                                  </div>
                                                  <div class = "row">
                                                    <div class = "col-sm-12">
                                                      <p><?php echo $row["Incident_Date"];?> </p>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class = "col-sm-10">
                                                  <p><?php echo $det;?></p>
                                                </div>
                                              </div>
                                              <div class = "row">
                                                <div class = "col-sm-12">
                                                  <div class = "row">
                                                    <div class = "col-sm-2">
                                                      <p>Type</p>
                                                    </div>
                                                  </div>
                                                  <div class = "row">
                                                    <div class = "col-sm-2">
                                                      <p><?php echo $row["Incident_Type"];?></p>
                                                    </div>
                                                    <div class = "col-sm-10">
                                                      <a href = "<?php echo $row["Source_URL"] ?>" target = "blank_">Link</a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <hr>
                                            </div>


                                            <?php
                                          }
                                        } ?>

                                      </div>
                                    </body>
                                    </html>
