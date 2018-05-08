console.log("start");
var xhr = new XMLHttpRequest();
var json;
var url = "http://192.168.0.17:8080/getRecords";
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
            if(json[x].increment == 'Jan'){
            temp = "<div class=\"col-sm-4 plan price-one wow fadeInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\"><ul><li class=\"heading-one\"><h2>"+
                        json[x].employeeName+"</h2>"+
                        "<li>"+json[x].employeeId+"</li>"+
                        "<li>"+json[x].level+"</li>"+
                        "<li>"+json[x].salary+"</li>"+
                        "<li class=\"plan-action\"><a href=\"\" class=\"btn btn-primary\">View</a></li></div>"
                    ;
              }
              else{
                temp = "<div class=\"col-sm-4 plan price-two wow fadeInDown\" data-wow-offset=\"0\" data-wow-delay=\"0.6s\"><ul><li class=\"heading-two\"><h2>"+
                        json[x].employeeName+"</h2>"+
                        "<li>"+json[x].employeeId+"</li>"+
                        "<li>"+json[x].level+"</li>"+
                        "<li>"+json[x].salary+"</li>"+
                        "<li class=\"plan-action\"><a href=\"\" class=\"btn btn-primary\">View</a></li></div>"
                    ; 
              }      
//            txt += temp;
            if(json[x].increment=="Jan"){
                jan_recd +=temp; 
            }
            else if(json[x].increment=="Jul"){
                jul_recd +=temp;
            } 
        }      
        //document.getElementById("j").innerHTML = txt;
        document.getElementById("jan_noti").innerHTML = jan_recd;
        document.getElementById("july_noti").innerHTML = jul_recd;  
    }
};
var data = JSON.stringify({"username": "admin", "password": "admin"});
console.log("hgdsaf");
xhr.send(data);
