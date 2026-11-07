
let selectedProfile = "paciente";

function selectProfile(profile, button) {

    selectedProfile = profile;

    document.querySelectorAll(".profile-btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

}

document.getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Login como " + selectedProfile + "!");

    });