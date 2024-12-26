const messages = [
    "2025년도 부자되세요💛",
    "2024년도 수고하셨습니다 🔥",
    "2025년도 대박나세요 👍",
    "해피뉴이어 🥰",
    "Happy New Year" 🤍",
    "하는 일마다 대박나세요 ⭐️",
    "즐거운 2025년 되세요 🥳",
    "Happy New Year 💙"
];

let isAnimating = false;

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
} 

function toggleVis(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return;
    isAnimating = true;
    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';
    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false;
            if (callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return;
    const postcardElement = document.getElementById('CARD');
    const nameElement = document.querySelector('.p-name');

    toggleVis(postcardElement, false);
    toggleVis(nameElement, false);

    setTimeout(() => {
        typeMessage(() => {
            toggleVis(nameElement, true);
        });
        toggleVis(postcardElement, true);
    }, 500);
}

window.onload = () => {
    renewMessage();
};

/*let isAnimating = false;

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function toggleVis(element, show) {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('opened', show);
}

function typeMessage(callback) {
    if (isAnimating) return;
    isAnimating = true;
    const randomMessage = getRandomMessage();
    const messageElement = document.querySelector('.p-message');
    messageElement.innerHTML = '';
    let i = 0;

    function typeNextCharacter() {
        if (i < randomMessage.length) {
            messageElement.innerHTML += randomMessage[i];
            i++;
            setTimeout(typeNextCharacter, 100);
        } else {
            isAnimating = false;
            if (callback) {
                callback();
            }
        }
    }

    typeNextCharacter();
}

function renewMessage() {
    if (isAnimating) return;
    const postcardElement = document.getElementById('postcard');
    const nameElement = document.querySelector('.p-name');

    toggleVis(postcardElement, false);
    toggleVis(nameElement, false);

    setTimeout(() => {
        typeMessage(() => {
            toggleVis(nameElement, true);
        });
        toggleVis(postcardElement, true);
    }, 500);
}

window.onload = () => {
    renewMessage();
};*/