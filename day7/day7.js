function validate() {

    var form1 = document.getElementById("RegForm");

    var name = form1.Name.value;
    var email = form1.Email.value;
    var phone = form1.Telephone.value;
    var subject = form1.Subject.value;
    var password = form1.Password.value;

    var regEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var regPhone = /^\d{10}$/;

    if (name == "") {
        window.alert("Please Enter Your Name");
        return false;
    }

    else if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }

    else if (password == "") {
        alert("Please enter your password");
        return false;
    }

    else if (password.length < 6) {
        alert("Password should be atleast 6 character long");
        return false;
    }

    else if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        return false;
    }

    else if (subject == "") {
        alert("Please select your course.");
        return false;
    }

    return true;
}