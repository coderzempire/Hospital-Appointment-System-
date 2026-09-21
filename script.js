/* =========================================================
   HOSPITAL APPOINTMENT SYSTEM
   PROFESSIONAL JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. OPEN APPOINTMENT SECTION
   ========================================================= */

function openAppointment() {

    const appointmentSection =
        document.getElementById("appointment");

    if (appointmentSection) {

        appointmentSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Patient name field par focus
        setTimeout(function () {

            const patientName =
                document.getElementById("patientName");

            if (patientName) {
                patientName.focus();
            }

        }, 700);
    }
}


/* =========================================================
   2. SCROLL TO DOCTORS
   ========================================================= */

function scrollToDoctors() {

    const doctorsSection =
        document.getElementById("doctors");

    if (doctorsSection) {

        doctorsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================================
   3. LOGIN
   ========================================================= */

function openLogin() {

    alert(
        "Login system will be connected with the backend soon."
    );
}


/* =========================================================
   4. SEARCH DOCTOR
   ========================================================= */

function searchDoctor() {

    const searchInput =
        document.getElementById("doctorSearch");

    if (!searchInput) {
        return;
    }

    const searchValue =
        searchInput.value.trim().toLowerCase();


    if (searchValue === "") {

        alert(
            "Please enter a doctor name or medical specialty."
        );

        searchInput.focus();

        return;
    }


    const doctors =
        document.querySelectorAll(".doctor-card");

    let doctorFound = false;


    doctors.forEach(function (doctor) {

        const doctorText =
            doctor.innerText.toLowerCase();

        if (doctorText.includes(searchValue)) {

            doctorFound = true;

            doctor.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            doctor.style.transform =
                "translateY(-12px)";

            doctor.style.boxShadow =
                "0 25px 50px rgba(13, 156, 148, 0.25)";


            setTimeout(function () {

                doctor.style.transform = "";
                doctor.style.boxShadow = "";

            }, 1800);
        }

    });


    if (!doctorFound) {

        alert(
            "No matching doctor found. Please try another name or specialty."
        );
    }
}


/* =========================================================
   5. BOOK SPECIFIC DOCTOR
   ========================================================= */

function bookDoctor(doctorName) {

    const doctorSelect =
        document.getElementById("doctor");


    if (doctorSelect) {

        let optionFound = false;


        for (let i = 0; i < doctorSelect.options.length; i++) {

            const optionText =
                doctorSelect.options[i].text.toLowerCase();


            if (
                optionText.includes(
                    doctorName.toLowerCase()
                )
            ) {

                doctorSelect.selectedIndex = i;

                optionFound = true;

                break;
            }
        }


        if (!optionFound) {

            doctorSelect.value = "";

        }
    }


    // Appointment section par le jao
    openAppointment();
}


/* =========================================================
   6. APPOINTMENT FORM SUBMISSION
   ========================================================= */

function submitAppointment(event) {

    event.preventDefault();


    const patientName =
        document.getElementById("patientName").value.trim();

    const patientEmail =
        document.getElementById("patientEmail").value.trim();

    const doctor =
        document.getElementById("doctor").value;

    const appointmentDate =
        document.getElementById("appointmentDate").value;

    const appointmentTime =
        document.getElementById("appointmentTime").value;

    const message =
        document.getElementById("message").value.trim();


    /* -----------------------------------------
       BASIC VALIDATION
    ----------------------------------------- */

    if (patientName === "") {

        alert("Please enter patient name.");

        return;
    }


    if (patientEmail === "") {

        alert("Please enter email address.");

        return;
    }


    if (doctor === "") {

        alert("Please select a doctor.");

        return;
    }


    if (appointmentDate === "") {

        alert("Please select appointment date.");

        return;
    }


    if (appointmentTime === "") {

        alert("Please select appointment time.");

        return;
    }


    /* -----------------------------------------
       DATE VALIDATION
    ----------------------------------------- */

    const selectedDate =
        new Date(appointmentDate);

    const today =
        new Date();

    today.setHours(0, 0, 0, 0);


    if (selectedDate < today) {

        alert(
            "Please select today or a future date."
        );

        return;
    }


    /* -----------------------------------------
       SUCCESS MESSAGE
    ----------------------------------------- */

    alert(
        "Appointment request submitted successfully!\n\n" +
        "Patient: " + patientName + "\n" +
        "Email: " + patientEmail + "\n" +
        "Appointment Date: " + appointmentDate + "\n" +
        "Appointment Time: " + appointmentTime
    );


    /* -----------------------------------------
       RESET FORM
    ----------------------------------------- */

    const appointmentForm =
        document.getElementById("appointmentForm");

    if (appointmentForm) {

        appointmentForm.reset();

    }
}


/* =========================================================
   7. SET MINIMUM APPOINTMENT DATE
   ========================================================= */

function setMinimumDate() {

    const dateInput =
        document.getElementById("appointmentDate");


    if (!dateInput) {
        return;
    }


    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(today.getMonth() + 1)
        .padStart(2, "0");


    const day =
        String(today.getDate())
        .padStart(2, "0");


    const formattedDate =
        year + "-" + month + "-" + day;


    dateInput.min =
        formattedDate;
}


/* =========================================================
   8. INITIALIZE WEBSITE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setMinimumDate();

        console.log(
            "Hospital Appointment System loaded successfully."
        );

    }
);