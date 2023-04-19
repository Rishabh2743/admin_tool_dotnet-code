function ValidateLogin() {
    var Email = $('#Email').val();
    var password = $('#password').val();
   
    var MyUrl = "/home/loginUser";
    $.ajax({
        url: MyUrl,
        data: { "Email": Email, "password": password },
        type: "POST",
        success: function (msg) {
            if (msg == "Student") {
                window.location = "/UserProfile";
            }
            else if (msg == "Admin") {
                window.location = "/AdminProfile";
            }
            else {
                alert("Invalid Username or Password, please try again.");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            if (XMLHttpRequest.statusText.toLowerCase() == "unknown" || XMLHttpRequest.statusText.toLowerCase() == "unauthorized" || XMLHttpRequest.statusText.toLowerCase() == "error") {
                window.location = "/home";
            }
            else
                alert(XMLHttpRequest.statusText);
        }
    });
}