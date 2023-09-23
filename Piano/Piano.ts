const Keys = document.querySelectorAll(".Key");

Keys.forEach(Key => {
    Key.addEventListener("click", () => playNote(Key), {
    })
})

function playNote(Keys) {
    const noteAudio = document.getElementById(Keys.dataset.note);

    // TODO: Get this thing to actually play dang notes...
}