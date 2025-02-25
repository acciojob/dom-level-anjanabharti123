//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    let element = document.getElementById("level");
    let level = 0;

    // Traverse up the DOM tree and count levels
    while (element) {
        level++;
        element = element.parentElement;
    }

    // Display the result using alert
    alert(`The level of the element is: ${level}`);
});
