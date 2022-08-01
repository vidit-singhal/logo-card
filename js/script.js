$(document).ready(function () {
    $('.form-control').on('keyup', function () {
        var formVal = $(this).val();
        if (formVal == "") {
            $(this).parents(".col-md").find(".text-danger").show()
        } else {
            $(this).parents(".col-md").find(".text-danger").hide()
        }
    })
    $('.form-select').on('onChange', function () {
        var formVal = $(this).val();
        if (formVal == "") {
            $(this).parents(".col-md").find(".text-danger").show()
        } else {
            $(this).parents(".col-md").find(".text-danger").hide()
        }
    })
})

var form = document.getElementById("form")

var phone_number = window.intlTelInput(
    document.querySelector(".phoneNumber"),
    {
        separateDialCode: true,
        preferredCountries: ["in"],
        hiddenInput: "full",
        utilsScript:
            "//cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.3/js/utils.js",
    }
);


form.addEventListener('submit', function (event) {


    event.preventDefault()


    var name = document.getElementById("name").value;
    var email = document.getElementById("inputEmail").value;
    var number = document.getElementById("inputNumber").value;
    var enquiry = document.getElementById("enquiry").value;
    var info = document.getElementById("info").value;

    var fullNumber = phone_number.getNumber(
        intlTelInputUtils.numberFormat.E164
    );


    if (name == "" && email == "" && info == "" && number == "" && enquiry == "") {

        document.getElementById("errorName").innerHTML = " ** Please fill the Full Name field";

        document.getElementById('errorEmail').innerHTML = " ** Please fill the email idx` field";
        document.getElementById('errorInfo').innerHTML = " ** Please fill the Information field";
        document.getElementById('errorContact').innerHTML = " ** Please fill the Contact field";
        document.getElementById("errorEnquiry").innerHTML =
            " ** Please choose the Enquiry field";
        remove();

        return false;
    }


    if (name == "" && email == "") {

        document.getElementById("errorName").innerHTML = " ** Please fill the Full Name field";

        document.getElementById('errorEmail').innerHTML = " ** Please fill the email idx` field";

        remove();

        return false;
    }

    if (name == "" && info == "") {

        document.getElementById("errorName").innerHTML = " ** Please fill the Full Name field";


        document.getElementById('errorInfo').innerHTML = " ** Please fill the Information field";

        remove();

        return false;
    }

    if (email == "" && info == "") {



        document.getElementById('errorEmail').innerHTML = " ** Please fill the email idx` field";
        document.getElementById('errorInfo').innerHTML = " ** Please fill the Information field";

        remove();

        return false;
    }
    if (number == "" && info == "") {



        document.getElementById('errorContact').innerHTML = " ** Please fill the contact field";
        document.getElementById('errorInfo').innerHTML = " ** Please fill the Information field";

        remove();

        return false;
    }



    if (enquiry == "" && info == "") {



        document.getElementById("errorEnquiry").innerHTML =
            " ** Please choose the Enquiry field";
        document.getElementById('errorInfo').innerHTML = " ** Please fill the Information field";

        remove();

        return false;
    }

    if (number == "" && enquiry == "") {



        document.getElementById('errorContact').innerHTML = " ** Please fill the contact field";
        document.getElementById("errorEnquiry").innerHTML =
            " ** Please choose the Enquiry field";

        remove();

        return false;
    }
    if (name == "") {
        document.getElementById("errorName").innerHTML =
            " ** Please fill the Full Name field";
        remove();


        return false;
    }

    if (email == "") {
        document.getElementById('errorEmail').innerHTML = " ** Please fill the email idx` field";
        // setTimeout(() => removeError(), 3000);
        remove();

        return false;
    }
    if (number == "") {
        document.getElementById('errorContact').innerHTML = " ** Please fill the contact field";
        // setTimeout(() => removeError(), 3000);
        remove();

        return false;
    }

    if (enquiry == "") {
        document.getElementById("errorEnquiry").innerHTML =
            " ** Please choose the Enquiry field";
        remove();


        return false;
    }

    if (info == "") {
        document.getElementById('errorInfo').innerHTML = " ** Please fill the Information field";
        // setTimeout(() => removeError(), 3000);
        remove();

        return false;


    }






    if (name.length <= 2 || name.length > 30) {
        document.getElementById("errorName").innerHTML =
            " ** invalid name";
        // setTimeout(() => removeError(), 3000);
        remove();


        return false;
    }
    if (!isNaN(name)) {
        document.getElementById("errorName").innerHTML =
            " ** only characters are allowed";
        setTimeout(() => removeError(), 3000);

        return false;
    }






    if (email.indexOf('@') <= 0) {
        document.getElementById('errorEmail').innerHTML = " ** @ Invalid Position";
        setTimeout(() => removeError(), 3000);

        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('errorEmail').innerHTML = " ** . Invalid Position";
        setTimeout(() => removeError(), 3000);

        return false;
    }



    else {
        console.log(name)
        console.log(email)
        console.log(fullNumber)
        console.log(enquiry)
        console.log(info)






        swal({
            title: "Success!",
            text: "Your form is submitted!",
            icon: "success",
            button: "OK",
        });

        // clear fields 

        // name = '';
        // email = '';
        // number = '';
        // enquiry = '';
        // info = '';
    }



})