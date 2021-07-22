function showMessage() {

    const num = document.getElementById("num").value;

    if (num.length >=3) {
        document.getElementById("message").innerHTML = "You have entered the numbers correctly";
    }
}