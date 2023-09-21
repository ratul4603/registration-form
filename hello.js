
var form = document.querySelector("form");
var nAme = form.querySelector("input[name=name]");
var email = form.querySelector("input[name=email]");
var country = document.getElementById("country");
var phone = document.getElementById("phn");
var selectPhn = document.getElementById("slct-phn");
var password = form.querySelector("input[type=password]"); 
var checkbox = form.querySelector("input[type=checkbox]");
var submit = document.getElementById("submit");

// myFun
const myFun = (e)=>{
    e.preventDefault();
        var details = localStorage.getItem("details") ? JSON.parse(localStorage.getItem("details")) : [];
        details.push({       
                    name: nAme.value,
                    email: email.value,
                    country: country.value,
                    phone: selectPhn.value + phone.value,
                    password: password.value,
                    agree: checkbox.value});
        
        localStorage.setItem("details", JSON.stringify(details));

        nAme.value = "";
        email.value = "";
        country.value = "";
        phone.value = "";
        password.value = "";
};

form.addEventListener("submit",myFun);
