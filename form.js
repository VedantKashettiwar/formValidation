function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML="";
    }
}
function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm(){
    let returnval =true;
    clearErrors()

    var correct_way = /^[A-Za-z]+$/
    let name = document.forms['myForm']['fname'].value;
    if(name==null || name==""){
        seterror("name","*Name can't be blank");
        returnval =false;
    }
    else if(!name.match(correct_way)){
        seterror("name","*Name should not contain numbers and special characters");
        returnval =false;
    }
    else if(name.length>10){
        seterror("name","*name length must not exceed 10 characters");
        returnval =false;
    }

    let email = document.forms['myForm']['femail'].value;
    if(email.length>30){
        seterror("email","*Length is too long");
        returnval =false;
    }
    else if(email.search(/[@]/) < 0){
        seterror("email","*Email should contain '@'");
        returnval =false;
    }
    else if(!email.endsWith(".co") && !email.endsWith(".in") && !email.endsWith(".com")){
        seterror("email","Email should end with '.com , .in , .co' domain name");
        returnval =false;
    }


    var correct_wayp = /^[0-9]+$/
    let phone = document.forms['myForm']['fphone'].value;
    if(phone.length != 10){
        seterror("phone","*Phone number should be of 10 digits!");
        returnval =false;
    }
    else if(!phone.match(correct_wayp)){
        seterror("phone","*Phone should not contain Alphabets and special characters");
        returnval =false;
    }
    else if(!phone.startsWith("7") && !phone.startsWith("8") && !phone.startsWith("9")){
        seterror("phone","*Phone number should start with digits '7' '8' '9'!");
        returnval =false;
    }

    let password = document.forms['myForm']['fpass'].value;
    if(password==null || password==""){
        seterror("pass","*Please add password");
        returnval =false;
    }
    else if(password.length<8){
        seterror("pass","*Password should be atleast 8 character long!");
        returnval =false;
    }
    else if(password.search(/[0-9]/) < 0){
        seterror("pass","*Password should contain atleast one numbers");
        returnval =false;
    }
    else if(password.search(/[@#$%^&*]/) < 0){
        seterror("pass","*Password should atleast contain one special characters");
        returnval =false;
    }
    else if(password.length>15){
        seterror("pass","*Password length must not exceed 15 characters");
        returnval =false;
    }
    


    let cpassword = document.forms['myForm']['fcpass'].value;
    if(cpassword != password){
        seterror("cpass","*Password and Confirm Password should match!");
        returnval =false;
    }
    
    return returnval
}

