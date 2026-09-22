/* =========================================
   SIDEBAR MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function () {

    sidebar.classList.toggle("show");

});


/* =========================================
   SIDEBAR ACTIVE MENU
========================================= */

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navItems.forEach(function (nav) {
            nav.classList.remove("active");
        });

        item.classList.add("active");

    });

});


/* =========================================
   SEARCH
========================================= */

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const appointmentRows =
        document.querySelectorAll(".appointment-row");

    appointmentRows.forEach(function (row) {

        const rowText = row.innerText.toLowerCase();

        if (rowText.includes(searchText)) {

            row.style.display = "grid";

        } else {

            row.style.display = "none";

        }

    });

});


/* =========================================
   ACCEPT / REJECT APPOINTMENT
========================================= */

const acceptButtons =
    document.querySelectorAll(".accept");

const rejectButtons =
    document.querySelectorAll(".reject");


acceptButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const request =
            button.closest(".request-row");

        alert("Appointment request accepted.");

        request.style.opacity = "0.5";

        button.disabled = true;

    });

});


rejectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const request =
            button.closest(".request-row");

        alert("Appointment request rejected.");

        request.style.display = "none";

    });

});


/* =========================================
   NOTIFICATION
========================================= */

const notification =
    document.querySelector(".notification-btn");

notification.addEventListener("click", function () {

    alert("You have 3 new notifications.");

});


/* =========================================
   MESSAGES
========================================= */

const messageButton =
    document.querySelector(".icon-btn");

messageButton.addEventListener("click", function () {

    alert("No new messages.");

});


/* =========================================
   PATIENT ACTION BUTTONS
========================================= */

const patientButtons =
    document.querySelectorAll(".patient-buttons button");

patientButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const action = button.innerText.trim();

        alert(action + " clicked.");

    });

});


/* =========================================
   SEE ALL
========================================= */

const seeAllButtons =
    document.querySelectorAll(".see-all");

seeAllButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("More records will be available here.");

    });

});


/* =========================================
   LOGOUT
========================================= */

const logoutBtn =
    document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function (event) {

    event.preventDefault();

    const confirmLogout =
        confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        alert("Logout system will be connected with Java backend later.");

    }

});


/* =========================================
   CALENDAR
========================================= */

const calendarDates =
    document.querySelectorAll(".calendar-grid span");

calendarDates.forEach(function (date) {

    date.addEventListener("click", function () {

        if (!date.classList.contains("muted")) {

            calendarDates.forEach(function (item) {
                item.classList.remove("selected");
            });

            date.classList.add("selected");

        }

    });

});