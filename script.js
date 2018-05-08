var ip="192.168.0.17";
console.log("start");
var xhr = new XMLHttpRequest();
var json;
var url = "http://"+ip+":8080/getRecords";
var temp = "";
var txt ="";
var jan_recd="";
var jul_recd="";
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json",'charset=UTF-8');
console.log("hgsdj");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        json = JSON.parse(xhr.responseText);
   	    console.log(json);
        for (x in json) {

            temp = "<tr><td>" + json[x].employeeId +"</td>" +
            		"<td>" + json[x].employeeName +"</td>" +
            		"<td>" + json[x].designation +"</td>" +
                    "<td>" + json[x].emailId +"</td>"

                    if(json[x].profession=="Faculty"){
                        //console.log("fuck my life")
                        
                        console.log("onload");
                    var select = document.getElementById("selectLevel1"); 
                   
                      var options = ["10", "11", "12", "13A1", "13A2","14","14A"]; 
                    
                    console.log("its script")
                    //select.innerHTML = "<option selected disabled>Choose a number</option>"
                    // Optional: Clear all existing options first:
                      
                    // Populate list with options:
                    var text="";
                    for(var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        text += "<option value=\"" + opt + "\">" + opt + "</option>";
                    }
                    temp = temp + "<td>"+
                         "<select id=\"selectLevel"+x+"\" value= \""+json[x].level+"\" onload=\"data12("+x+")\" onchange=\"data12("+x+");\">"+
                                   "<option selected disabled>Choose a number</option>"+
                                    text+
                               "</select>"+
                            "</td>"
                    "<td><a onclick=editData(" + x + ")> Edit</a></td>"+
                    "</tr>" 
                    console.log(temp);
                    }
                    else{             
                      var options = ["1", "2", "3", "4", "5","6","7","8","9","10","11","12","13","14","15","16","17"];
                    ;
                    }
                    lev=json[x].level;
                    var options=[];
                    if(lev=="10"){
                      options = ["98200"]; //fill salaries
                    }
                    else if(lev=="11"){
                      options = ['98300', '101200', '104200', '107300', '110500', '113800', '117200']; //fill salaries
                    }
                    else if(lev=="12"){
                      options = ['101500', '104500', '107600', '110800', '114100', '117500', '121000', '124600', '128300', '132100', '136100', '140200', '144400', '148700', '153200', '157800', '162500', '167400']; //fill salaries
                    }
                    else if(lev=="13A1"){
                      options = ['131400', '135300', '139400', '143600', '147900', '152300', '156900', '161600', '166400', '171400', '176500', '181800', '187300', '192900', '198700', '204700']; //fill salaries
                    }
                    else if(lev=="13A2"){
                      options = ['139600', '143800', '148100', '152500', '157100', '161800', '166700', '171700', '176900', '182200', '187700', '193300', '199100', '205100', '211300']; //fill salaries
                    }
                    else if(lev=="14"){
                      options = ['144200', '148500', '153000', '157600', '162300', '167200', '172200', '177400', '182700', '188200', '193800', '199600', '205600', '211800']; //fill salaries
                    }
                    else if(lev=="14A"){
                      options = ['159100', '163900', '168800', '173900', '179100', '184500', '190000', '195700', '201600', '207600', '213800', '220200']; //fill salaries
                    }
                    else if(lev=="15"){
                      options = ['182200', '187700', '193300', '199100', '205100', '211300', '217600', '224100']; //fill salaries
                    }
                    console.log("onload");
                    //var select = document.getElementById("selectLevel1"); 
                   
                      //var options = ["10", "11", "12", "13A1", "13A2","14","14A"]; 
                    
                    console.log("its script")
                    var text="";
                    for(var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        text += "<option value=\"" + opt + "\">" + opt + "</option>";
                    }
                    temp = temp + "<td>"+
                         "<select id=\"salary"+x+"\">"+
                                   "<option selected disabled>Choose a number</option>"+
                                    text+
                               "</select>"+
                            "</td>"
                    "<td><a onclick=editData(" + x + ")> Edit</a></td>"+
                    "</tr>" 
                    
                    //ng-click="submit()"
                    //temp += "<td> <a ng-click=\"submit1("+x+")\">Update</a></td>"

                    temp += "<td><button ng-click=\"submit("+x+")\" >Update</button></td>"

                    temp += "<td> <a onclick = editData("+x +")>edit</a></td>"
                    console.log(temp);

            txt += temp;
            if(json[x].increment=="Jan"){
                jan_recd +=temp; 
            }
            else if(json[x].increment=="Jul"){
                jul_recd +=temp;
            } 
        }      
        document.getElementById("demo").innerHTML = txt;
        document.getElementById("record1").innerHTML = jan_recd;
        document.getElementById("record2").innerHTML = jul_recd;
        load()
        
        //document.getElementById("demo").innerHTML = txt;
        //document.getElementById("record1").innerHTML = jan_recd;
        //document.getElementById("record2").innerHTML = jul_recd;
        
    }
};

var data = JSON.stringify({"username": "admin", "password": "admin"});
console.log("hgdsaf");
xhr.send(data);
function editData(i){
    console.log(i);
    document.getElementById("viewAll").className="hidden";
    document.getElementById("update_form_div").className="unhidden";
    document.getElementById("increments").className="hidden";
    //document.getElementById("update_form_div").className="unhidden";
    document.getElementById("incrementHeader").className="inactive";
    document.getElementById("view_allHeader").className="inactive";
    document.getElementById("ser_id").value=json[i].id;
    document.getElementById("Emp_id").value=json[i].employeeId;
    document.getElementById("Emp_name").value=json[i].employeeName;
    document.getElementById("email_id").value=json[i].emailId;
    document.getElementById("profession").value=json[i].profession;
    data();
    document.getElementById("designation").value=json[i].designation;
    document.getElementById("JoiningDate").value=json[i].joiningDate;
    document.getElementById("phd_comp").value=json[i].phdCompletionDate;
    document.getElementById("phd_exp").value=json[i].postPhdExperience;
    document.getElementById("selectLevel").value=json[i].level;
    data1();
    document.getElementById("Initialpay").value=json[i].salary;
    document.getElementById("increment").value=json[i].increment;
}
function load(){
    for(x in json){
        doc="selectLevel"+x;
        doc1="salary"+x;
        document.getElementById(doc).value=json[x].level;
        document.getElementById(doc1).value=json[x].salary;
    }
}

function data12(x){
                        console.log("onload1");
                     //console.log(document.getElementById("JoiningDate").value);
                    //var select = document.getElementById("Initialpay"); 
                    var options=[];
                    var doc="selectLevel"+x;
                    console.log(document.getElementById(doc).value);
                    if(document.getElementById(doc).value=="10"){
                      options = ["98200"]; //fill salaries
                    }
                    else if(document.getElementById(doc).value=="11"){
                      options = ['98300', '101200', '104200', '107300', '110500', '113800', '117200']; //fill salaries
                    }
                    else if(document.getElementById(doc).value=="12"){
                      options = ['101500', '104500', '107600', '110800', '114100', '117500', '121000', '124600', '128300', '132100', '136100', '140200', '144400', '148700', '153200', '157800', '162500', '167400']; //fill salaries
                    }
                    else if(document.getElementById(doc).value=="13A1"){
                      options = ['131400', '135300', '139400', '143600', '147900', '152300', '156900', '161600', '166400', '171400', '176500', '181800', '187300', '192900', '198700', '204700']; //fill salaries
                    }
                    else if(document.getElementById(doc).value=="13A2"){
                      options = ['139600', '143800', '148100', '152500', '157100', '161800', '166700', '171700', '176900', '182200', '187700', '193300', '199100', '205100', '211300']; //fill salaries
                    }
                    else if(document.getElementById(doc).value=="14"){
                      options = ['144200', '148500', '153000', '157600', '162300', '167200', '172200', '177400', '182700', '188200', '193800', '199600', '205600', '211800']; //fill salaries
                    }
                    else if(document.getElementById(doc).value=="14A"){
                      options = ['159100', '163900', '168800', '173900', '179100', '184500', '190000', '195700', '201600', '207600', '213800', '220200']; //fill salaries
                    }
                    else if(document.getElementById(doc).value=="15"){
                      options = ['182200', '187700', '193300', '199100', '205100', '211300', '217600', '224100']; //fill salaries
                    }
                    //select.innerHTML = "<option selected disabled>Choose a number</option>"
                    // Optional: Clear all existing options first:
                      
                    // Populate list with options:
                    doc1="salary"+x;
                    console.log(doc1);
                    var select1 = document.getElementById(doc1);
                    select1.innerHTML = "<option selected disabled>Choose a number</option>"
                    for(var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        select1.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
                    }
                } 

       function Faculty(){
                        console.log("onload");

                    var select = document.getElementById("selectLevel1"); 
                   
                      var options = ["10", "11", "12", "13A1", "13A2","14","14A"]; 
                    
                    console.log("its script")
                    select.innerHTML = "<option selected disabled>Choose a number</option>"
                    // Optional: Clear all existing options first:
                      
                    // Populate list with options:
                    for(var i = 0; i < options.length; i++) {
                        var opt = options[i];
                        select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
                    }
                      }

               
//$("tr").click(function(){
//   window.location = "example.html";
// });