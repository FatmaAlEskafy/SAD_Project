function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "manager" && password === "123") {
        window.location.href = "manager-dashboard.html"; 
    } else if (username === "pharmacist" && password === "123") {
        window.location.href = "pharmacist-dashboard.html"; 
    } else {
        alert("Invalid username or password");
    }
}
