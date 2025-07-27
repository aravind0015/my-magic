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
    "Are you sure 🤔?",
    "Nijamga ?? 🤔🤔",
    "Nammakam leda ?",
    "Please...",
    "Okasari aalochinchu 👉👈",
    "Nuvvu kadu ante nenu badhapadatha..🙂",
    "Chala badhapadatha...🙁🙁",
    "Chala chala badhapadatha.... 😔😔😔",
    "Sare inka aapesta le , joke chesa 🤧",
    "Nammesava aapesata ante 😏"
];

let messageIndex = 0;

function handleFirstNoClick() {
    window.location.href = "no_page.html";
}

function handleNoClick() {
    const noButton = document.querySelector('.no') || document.querySelector('button:nth-of-type(2)');
    const yesButton = document.querySelector('.yes') || document.querySelector('button:nth-of-type(1)');

    // Set button message
    noButton.textContent = messages[messageIndex];

    // Increase YES button size progressively
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Final message logic
    if (messages[messageIndex] === "Nammesava aapesata ante 😏") {
        // Hide no button
        noButton.style.display = "none";

        // Style YES button massively
        yesButton.style.fontSize = "60px";
        yesButton.style.padding = "20px 40px";
        yesButton.style.margin = "100px auto";
        yesButton.style.display = "block";
        yesButton.style.transition = "all 0.5s ease";
    }

    // Advance message index
    messageIndex = (messageIndex + 1) % messages.length;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
