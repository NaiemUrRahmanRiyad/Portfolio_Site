function validateClubForm() {
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const department = document.getElementById("department").value;
    const password = document.getElementById("password").value;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const studentIdError = document.getElementById("studentIdError");
    const departmentError = document.getElementById("departmentError");
    const passwordError = document.getElementById("passwordError");

    // Clear all previous errors
    nameError.innerText = "";
    emailError.innerText = "";
    studentIdError.innerText = "";
    departmentError.innerText = "";
    passwordError.innerText = "";

    let isValid = true;

    if (name.length < 10) {
        nameError.innerText = "Full Name must be at least 10 characters.";
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@diu\.edu\.bd$/;
    if (!email.match(emailPattern)) {
        emailError.innerText = "Use a valid DIU email (e.g., yourname@diu.edu.bd).";
        isValid = false;
    }

    const studentIdPattern = /^\d{3}-\d{2}-\d{4}$/;
    if (!studentIdPattern.test(studentId)) {
        studentIdError.innerText = "Student ID must be in the format 221-15-4685.";
        isValid = false;
    }

    if (department === "") {
        departmentError.innerText = "Please select a department.";
        isValid = false;
    }

    if (password.length < 6 || !/\d/.test(password)) {
        passwordError.innerText = "Password must be at least 6 characters and include a number.";
        isValid = false;
    }

    if (isValid) {
        alert("Successfully joined the Tech Club!");
    }

    return isValid;
}
