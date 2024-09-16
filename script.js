// Password generation logic
function generatePassword(length, useUppercase, useNumbers, useSymbols) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}<>?";

    let characters = lowercase;
    if (useUppercase) characters += uppercase;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Toggle visibility
document.getElementById("toggleVisibility").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

// Password generation
document.getElementById("generate").addEventListener("click", function() {
    const length = document.getElementById("length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const password = generatePassword(length, useUppercase, useNumbers, useSymbols);
    document.getElementById("password").value = password;
    document.getElementById("message").textContent = "";
});

// Copy password
document.getElementById("copy").addEventListener("click", function() {
    const password = document.getElementById("password").value;
    if (password) {
        navigator.clipboard.writeText(password);
        document.getElementById("message").textContent = "Password copied to clipboard!";
    } else {
        document.getElementById("message").textContent = "Generate a password first.";
    }
});

// Strength buttons
const strengthButtons = document.querySelectorAll('.strength-btn');
strengthButtons.forEach(button => {
    button.addEventListener('click', function() {
        const strength = this.getAttribute('data-strength');
        const length = strength === 'weak' ? 8 : strength === 'medium' ? 16 : 24;
        document.getElementById("length").value = length;
        document.getElementById("lengthValue").textContent = length;
    });
});