var canvas = new fabric.Canvas('myCanvas')

block_y = 1;
block_x = 1;

block_image_width = 300;
block_image_height = 400;

var block_image_object = "";

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {

		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '82') {
		new_image('rr1.png');
		console.log("r");
	}

	if (keyPressed == '71') {
		block_x = 250;
		new_image('gr.png');
		console.log("g");
	}

	if (keyPressed == '89') {
		block_x = 400;
		new_image('yr.png');
		console.log("r");
	}

	if (keyPressed == '80') {
		block_x = 630;
		new_image('pr.png');
		console.log("r");
	}

	if (keyPressed == '66') {
		block_x = 730;
		new_image('br.png');
		console.log("r");
	}

}