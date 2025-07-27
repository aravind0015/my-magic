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



function handleFirstNoClick() {
    window.location.href = "no_page.html";
}
let messageIndex = 0;
function handleNoClick() {
    const noButton = document.querySelector('.no');
    const yesButton = document.querySelector('.yes');

    // First: hide button if all messages are done
    if (messageIndex >= messages.length) {
        noButton.style.display = "none";
        return;
    }

    // Only update text if message exists
    noButton.textContent = messages[messageIndex];
    messageIndex++;

    // Grow the yes button gradually
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
