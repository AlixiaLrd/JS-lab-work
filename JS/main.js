function userForm(event){
    event.preventDefault();

    const name = document.getElementById("fname").value + document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;


    if(document.getElementById("premium").checked === true){
        var membership = "premium";

    }else if(document.getElementById("standard").checked === true){
        var membership = "standard";

    } else{
        var membership = "basic";
    }

    console.log(name, email, address, city, province, membership);

    document.getElementById("affichage").innerHTML= " Full name: " + name + "</br>" + "Email : " +email + "</br>" + "Address : " +address+ " " +city+ " " +province+ "</br>" + "Membership : " +membership;
}


function myExcelFuns(event){
    const numberStr = document.getElementById("numbers").value;

    if(numberStr === 0){
        alert("you have to enter 2 or more numbers separated by spaces");
    } else {
        const numberStr2 = numberStr.trim();
        const numberArr = numberStr2.split(" "); // numberArr is an array; split() converts a string into an array

        let finalNumericArray =[];
        for (var i = 0; i<numberArr.length; i++){
            if (numberArr[i] != ""){
            finalNumericArray.push(numberArr[i]);
            }
        }

        var sum = 0; 
        var max=finalNumericArray[0];
        var min=finalNumericArray[0];
        var result;

     if(document.getElementById("autoSum").checked === true){
            for (var i = 0; i<finalNumericArray.length; i++){
                sum += parseInt(finalNumericArray[i]);
         }
         result=sum;

     }else if(document.getElementById("average").checked === true){
         for (var i = 0; i<finalNumericArray.length; i++){
               sum += parseInt(finalNumericArray[i]);
         }
         sum /= finalNumericArray.length;
         result=sum;
    
     }else if (document.getElementById("max").checked === true){
         for (var i = 1; i<finalNumericArray.length; i++){
              if (finalNumericArray[i]>max){
                 max = finalNumericArray[i];
             }
            }
            result=max;
  
        }else{
          for (var i = 1; i<finalNumericArray.length; i++){
              if (finalNumericArray[i]<min){
                   min = finalNumericArray[i];
                }
            } 
            result= min;
        }
    } 
    document.getElementById("result").innerHTML = "result : " + result;
}

const e1= document.getElementById("send");
if (e1){
e1.addEventListener("click",userForm);}

const e2= document.getElementById("calculate");
if (e2){
e2.addEventListener("click",myExcelFuns);}