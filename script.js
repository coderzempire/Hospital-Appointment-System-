// ==========================================
// MediCare Doctor Dashboard - JavaScript
// ==========================================


// ---------- SIDEBAR MENU ----------

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
}


// ---------- NAVIGATION ----------

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Remove active class from all links
        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        // Add active class to clicked link
        link.classList.add("active");

        // Close mobile sidebar
        if (window.innerWidth <= 950) {
            sidebar.classList.remove("open");
        }

    });

});


// ---------- SEARCH ----------

const searchBox = document.getElementById("search");

if (searchBox) {

    searchBox.addEventListener("input", function () {

        const searchText = searchBox.value.toLowerCase();

        const patients = document.querySelectorAll(".patient-row");

        patients.forEach(function (patient) {

            const patientText =
                patient.innerText.toLowerCase();

            if (patientText.includes(searchText)) {

                patient.style.display = "grid";

            } else {

                patient.style.display = "none";

            }

        });

    });

}


// ---------- MESSAGE BUTTON ----------

const messageBtn = document.getElementById("messageBtn");

if (messageBtn) {

    messageBtn.addEventListener("click", function () {

        alert("You have no new messages.");

    });

}


// ---------- NOTIFICATION BUTTON ----------

const bellBtn = document.getElementById("bellBtn");

if (bellBtn) {

    bellBtn.addEventListener("click", function () {

        alert("You have 3 new notifications.");

    });

}


// ---------- LOGOUT ----------

const logoutBtn = document.getElementById("logout");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function (event) {

        event.preventDefault();

        const confirmLogout =
            confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            alert(
                "Logout functionality will be connected to the Java backend later."
            );

        }

    });

}


// ---------- APPOINTMENT REQUEST - ACCEPT ----------

const acceptButtons =
    document.querySelectorAll(".request-buttons .ok");

acceptButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const request =
            button.closest(".request-row");

        if (request) {

            request.style.opacity = "0.45";

            button.disabled = true;

            alert("Appointment accepted successfully.");

        }

    });

});


// ---------- APPOINTMENT REQUEST - REJECT ----------

const rejectButtons =
    document.querySelectorAll(".request-buttons .no");

rejectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const request =
            button.closest(".request-row");

        if (request) {

            request.remove();

            alert("Appointment rejected.");

        }

    });

});


// ---------- CALENDAR ----------

const calendarDates =
    document.querySelectorAll(".dates span:not(.muted)");

calendarDates.forEach(function (date) {

    date.addEventListener("click", function () {

        // Remove selected date
        calendarDates.forEach(function (item) {

            item.classList.remove("selected");

        });

        // Select clicked date
        date.classList.add("selected");

    });

});


// ---------- PAGE LOAD ----------

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "MediCare Doctor Dashboard loaded successfully."
    );

});