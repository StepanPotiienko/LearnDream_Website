const Scrollbar = window.Scrollbar
const options = { "damping": .06, "autoScrollbarTrack": true, }
Scrollbar.init(document.querySelector('#smooth-scroll', options), {
    syncCallbacks: true, plugins: {
        disableScroll: {
            direction: 'x',
        }
    }
});

// Scrollbar.track.xAxis.element.remove()

const AddTextToMarqueeTextBlock = () => {
    if (window.matchMedia('(min-width: 1400px)').matches) {
        const textBlocks = document.getElementsByClassName("marquee-animation-text-block")

        // Required text parts to fill up the width of the page.
        const textParts = 80

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
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        if (entry.isIntersecting) {
            entry.target.classList.add("animation-show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el))



const ChangePanda = () => {
    //TODO: Image of Panda changes randomly after every reload
    return
}
