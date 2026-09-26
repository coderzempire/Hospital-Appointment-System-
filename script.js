/* =================================
   CURRENT ROLE
================================= */

let currentRole = "Doctor";


/* =================================
   CHANGE PATIENT / DOCTOR / ADMIN
================================= */

function changeRole(role) {

    currentRole = role;

    // Change heading
    document.getElementById("loginTitle").textContent =
        "Login as " + role;


    // Get all buttons
    const buttons = document.querySelectorAll(".user-type");


    // Remove active class
    buttons.forEach(function(button) {
        button.classList.remove("active");
    });


    // Find clicked button
    buttons.forEach(function(button) {

        if (button.textContent.trim() === role) {
            button.classList.add("active");
        }

    });


    // Change placeholder according to role
    const username = document.getElementById("username");

    if (role === "Patient") {

        username.placeholder = "Patient Username";

    } else if (role === "Doctor") {

        username.placeholder = "Doctor Username";

    } else if (role === "Admin") {

        username.placeholder = "Admin Username";

    }

}


/* =================================
   LOGIN
================================= */

document.getElementById("loginForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value.trim();


        // Empty field check
        if (username === "" || password === "") {

            alert("Please enter username and password.");

            return;
        }


        // Demo login
        alert(
            "Login attempted as " +
            currentRole +
            "\nUsername: " +
            username
        );

    }
);