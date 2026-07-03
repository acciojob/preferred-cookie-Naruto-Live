const form = document.querySelector("form");
const fontSize = document.getElementById("fontsize");
const fontColor = document.getElementById("fontcolor");

function getCookie(name) {
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");

        if (key === name) {
            return value;
        }
    }

    return null;
}

const savedSize = getCookie("fontsize");
const savedColor = getCookie("fontcolor");

if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize);
    fontSize.value = parseInt(savedSize);
}

if (savedColor) {
    document.documentElement.style.setProperty("--fontcolor", savedColor);
    fontColor.value = savedColor;
}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const size = fontSize.value + "px";
    const color = fontColor.value;

    document.cookie = `fontsize=${size}; path=/`;
    document.cookie = `fontcolor=${color}; path=/`;

    document.documentElement.style.setProperty("--fontsize", size);
    document.documentElement.style.setProperty("--fontcolor", color);

});