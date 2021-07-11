
login = (event) => {
    event.preventDefault();
    var username= $('#username').val();
    var password = $('#password').val();
    $.ajax({
        url: "http://localhost:9999/login",
        method: "POST",
        data: {
            username: username,
            password: password
        },
        success: (result) => {
            console.log(result);
            if (result.status === 'ok') {
                alert("success");
                    window.location.replace('/home');
            }
            else {
                alert("Authentication Failed");
            }
        },
    });
}