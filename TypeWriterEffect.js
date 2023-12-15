document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".typing").forEach(function (element) {
        element.style.height = element.offsetHeight + "px";
        typeWriter(element.textContent, element);
    });
});

function typeWriter(text, target, isBack = false, n = 0) {
    if (!isBack) {
        if (n < text.length) {
            target.textContent = text.substring(0, n + 1);
            n++;
            setTimeout(function () {
                typeWriter(text, target, false, n);
            }, 100);
        } else {
            if (!target.classList.contains("no-repeat")) {
                setTimeout(function () {
                    typeWriter(text, target, true, text.length);
                }, target.getAttribute("typing-delay")??5000);
            } else if (target.classList.contains("no-blink-after")) {
                target.classList.remove("typing");
            }
        }
    } else {
        if (n > -1) {
            target.textContent = text.substring(0, n - 1);
            n--;
            setTimeout(function () {
                typeWriter(text, target, true, n);
            }, 10);
        } else {
            typeWriter(text, target);
        }
    }
}
