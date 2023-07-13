var form = document.getElementById(email);

function alert(){
    // error check
    if(form.checkValidity()){
        alert("Email sent!");
    }
    
}