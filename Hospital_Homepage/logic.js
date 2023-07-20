console.log("Hello its connected!");
document.getElementById("selected_dob").max = new Date().toISOString().split("T")[0];

function ageCalc(){
    console.log("date selected")
}
//Age calculator
function myDate()
{
    console.log((document.getElementById("selected_dob").value).toString());
    var year=(document.getElementById("selected_dob").value).toString().substring(0,4);
    var Month=(document.getElementById("selected_dob").value).toString().substring(5,7);
    var Day=(document.getElementById("selected_dob").value).toString().substring(8,10);
    var today = new Date();
             age = today.getFullYear() - parseInt(year);
           if(((today.getMonth()-parseInt(Month))<0)&&age>0)               	
           {
               	 age=age-1;
           }
            else
            {
              	age=age-0;
            }
                  console.log(age);
                  document.getElementById("age").value="Your Age: "+age;
}
function clickMe(btnId)
{
    var element = document.getElementById(btnId);
    console.log(btnId)
    debugger;
    element.classList.remove("x-button");
    element.classList.remove("btn-secondary");
    console.log(element.classList.contains("x-button"));
    element.classList.add("btn-primary");
    console.log(element.classList.contains("btn-primary"));
    var btns= document.getElementsByClassName("x-button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
      }
   
}