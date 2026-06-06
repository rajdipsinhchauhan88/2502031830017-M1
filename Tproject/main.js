//login
function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "" || password === ""){
        alert("Please fill all fields");
        return false;
    }

    alert("Login Successful!");
    return true;
}

//signup
function subscribe() {
    let email = document.getElementById("newsletter-email").value;

    if(email === ""){
        alert("Enter Email Address");
    } else {
        alert("Thank You For Subscribing!");
    }
}

//explore

function searchPlace() {
    let place = document.getElementById("search").value;

    if(place.toLowerCase() === "goa"){
        alert("Goa Package Available");
    }
    else if(place.toLowerCase() === "manali"){
        alert("Manali Package Available");
    }
    else{
        alert("Package Not Found");
    }
}

//book

function bookNow(place){
    alert("Booking Confirmed For " + place);
}

