const dynamicText = document.querySelector(".dynamic-text");

const messages = ["Dev Backend", "Analista Cybersec", "Entusiasta de Programação"];
let index = 0;

function typeEffect() {
    let message = messages[index];
    let charIndex = 0;

    const interval = setInterval(() => {
        if (charIndex < message.length) {
            dynamicText.textContent += message[charIndex];
            charIndex++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                deleteEffect();
            }, 1500);
        }
    }, 100);
}

function deleteEffect() {
    let message = messages[index];
    let charIndex = message.length - 1;

    const interval = setInterval(() => {
        if (charIndex >= 0) {
            dynamicText.textContent = message.slice(0, charIndex);
            charIndex--;
        } else {
            clearInterval(interval);
            index = (index + 1) % messages.length;
            typeEffect();
        }
    }, 100);
}


typeEffect();
