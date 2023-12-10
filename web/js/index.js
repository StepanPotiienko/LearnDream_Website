var Scrollbar = window.Scrollbar
const options = { "damping": .06, "autoScrollbarTrack": true, }
Scrollbar.init(document.querySelector('#smooth-scroll', options), { syncCallbacks: true });

const AddTextToMarqueeTextBlock = () => {
    const textBlocks = document.getElementsByClassName("marquee-animation-text-block")

    // Required text parts to fill up the width of the page.
    const textParts = 40

    const PlaceText = (j, i) => {
        const color = j % 2 == 0 ? "blue" : "yellow"

        if (i % 2 == 0) {
            textBlocks[j].innerHTML += `<span class="text-accent-${color} text-animation"> Додаткова освіта</span>`
        } else {
            textBlocks[j].innerHTML += `<span span class="text-animation">Додаткова освіта</span>`
        }
    }

    for (let j = 0; j < textBlocks.length; j++) {
        if (j % 2 == 0) {
            for (let i = 0; i < textParts; i++) {
                PlaceText(j, i)
            }
        } else if (j % 2 != 0) {
            for (let i = 0; i < textParts; i++) {
                PlaceText(j, i)
            }
        }
    }
}

const ChangePanda = () => {
    //TODO: Image of Panda changes randomly after every reload
    return
}
