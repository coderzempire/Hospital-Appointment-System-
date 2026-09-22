/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");
}


/* =========================================
   SCROLL FUNCTIONS
========================================= */

function scrollToAppointment() {

    document.getElementById("appointment")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function scrollToDoctors() {

    document.getElementById("doctors")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================================
   LOGIN MODAL
========================================= */

function openLogin() {

    const modal = document.getElementById("loginModal");

    modal.classList.add("active");
}


function closeLogin() {

    const modal = document.getElementById("loginModal");

    modal.classList.remove("active");
}


function loginMessage() {

    alert(
        "Login system will be connected to the Java backend in the backend development part."
    );
}


/* =========================================
   DEPARTMENTS
========================================= */

function showDepartments() {

    alert(
        "Departments section will be connected with the hospital database later."
    );
}


/* =========================================
   DOCTOR SELECTION
========================================= */

function selectDoctor(doctorName) {

    const doctorSelect =
        document.getElementById("doctor");

    doctorSelect.value = doctorName;

    scrollToAppointment();
}


/* =========================================
   APPOINTMENT FORM
========================================= */

const appointmentForm =
    document.getElementById("appointmentForm");


appointmentForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const patientName =
            document.getElementById("patientName").value.trim();

        const patientEmail =
            document.getElementById("patientEmail").value.trim();

        const doctor =
            document.getElementById("doctor").value;

        const date =
            document.getElementById("date").value;


        if (
            patientName === "" ||
            patientEmail === "" ||
            doctor === "" ||
            date === ""
        ) {

            alert(
                "Please fill in all required fields."
            );

            return;
        }


        alert(
            "Appointment request received for " +
            patientName +
            ".\n\nDoctor: " +
            doctor +
            "\nDate: " +
            date +
            "\n\nBackend/database connection will be added later."
        );


        appointmentForm.reset();
    }
);


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("loginModal");

        if (event.target === modal) {

            closeLogin();
        }
    }
);


/* =========================================
   SET MINIMUM APPOINTMENT DATE
========================================= */

const dateInput =
    document.getElementById("date");


const today =
    new Date().toISOString().split("T")[0];


dateInput.setAttribute(
    "min",
    today
);