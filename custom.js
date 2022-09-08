// Bringing from the Dom 
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.getElementById('.circle')

// stores vale in 1 means active 
let currentActive = 1

// addEventListener for button increments
next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

// addEventListener for button increments
prev.addEventListener('click', () => {
        currentActive--


        if (currentActive < 1) {
            currentActive = 1
        }

        update()
    })
    // create next previous functions
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}