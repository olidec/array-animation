imageArray = ['waiting.png','3.png','2.png','1.png','kaboom.jpg']
var imageNumber = 0


function animate() {
    document.getElementById('countdown').src = imageArray[ imageNumber ]
    if (imageNumber < 4) {
        setTimeout(animate, 1000)
        imageNumber++
    }
}

function startAnimation() {
    animate()
}