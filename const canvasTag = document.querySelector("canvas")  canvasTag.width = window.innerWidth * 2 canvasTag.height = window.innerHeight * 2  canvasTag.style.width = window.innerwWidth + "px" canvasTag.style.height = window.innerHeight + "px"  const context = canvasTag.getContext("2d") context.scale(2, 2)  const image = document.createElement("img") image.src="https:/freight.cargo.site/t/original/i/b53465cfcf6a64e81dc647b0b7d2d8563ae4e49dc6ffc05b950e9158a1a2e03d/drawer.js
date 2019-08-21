const canvasTag = document.querySelector("canvas")

canvasTag.width = window.innerWidth * 2
canvasTag.height = window.innerHeight * 2

canvasTag.style.width = window.innerwWidth + "px"
canvasTag.style.height = window.innerHeight + "px"

const context = canvasTag.getContext("2d")
context.scale(2, 2)

const image = document.createElement("img")
image.src="https://freight.cargo.site/t/original/i/b53465cfcf6a64e81dc647b0b7d2d8563ae4e49dc6ffc05b950e9158a1a2e03d/3-4.jpg"

document.addEventListener("mousemove", function (event) {
	if (image.complete) {
		context.drawImage(image, event.pageX - 200, event.pageY - 300, 400, 600)
	}
})
