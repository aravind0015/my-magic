/*
const messages = [
    "Are you sure :thinking_face:?",
    "Nijamga no ?? :thinking_face::thinking_face:",
    "Nammakam leda ?",
    " please...",
    "okasari aalochinchu :point_right::skin-tone-2::point_left::skin-tone-2:",
    "nuvvu kadu ante nenu badhapadatha..:slightly_smiling_face:",
    "chala badhapadatha...:slightly_frowning_face::slightly_frowning_face:",
    "chala chala badhapadatha.... :pensive::pensive::pensive:",
    "sare inka aapesta le , joke chesa :sneezing_face: ",
    "nammesava aapesata ante :smirk:"
];

let messageIndex = 0;
function handleFirstNoClick() {
    window.location.href = "no_page.html";
    
}

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}


function handleYesClick() {
    window.location.href = "yes_page.html";
}*/
const messages = [
    "Nijamga ?? 🤔🤔",
    "Nammakam leda ?",
    "Please...",
    "Okasari aalochinchu 👉👈",
    "Nuvvu kadu ante nenu badhapadatha..🙂",
    "Chala badhapadatha...🙁🙁",
    "Chala chala badhapadatha.... 😔😔😔",
    "Sare inka aapesta le , joke chesa 🤧",
    "Nammesava aapesata ante 😏",
];

let messageIndex = 0;

function handleFirstNoClick() {
    window.location.href = "no_page.html";
}

function handleNoClick() {
    const noButton = document.querySelector('.no');
    const yesButton = document.querySelector('.yes');

    noButton.textContent = messages[messageIndex];
    messageIndex++;

    // Hide the no button after last message
    if (messageIndex >= messages.length) {
        noButton.style.display = "none";
        return;
    }

    // Increase Yes button size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
