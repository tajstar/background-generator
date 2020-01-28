// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

var body = document.querySelector('#grad');
var background = document.querySelector('h3');
var text = document.querySelectorAll('h3')[1];
var backgroundHexBase = document.querySelector('.pcr-result');
var button = document.querySelector('.button');
var button2 = document.querySelectorAll('.button')[1];



function backgroundColor(theColor){
  var backgroundHex = document.querySelector('.pcr-result').value;
  var textColor = Colors.complement(backgroundHex);
  body.style.background = textColor;
  body.style.color = backgroundHex;
  button.style.background = backgroundHex;
  button.style.color = textColor;
  button2.style.background = backgroundHex;
  button2.style.color = textColor;
  printColors(backgroundHex,textColor);
  console.log(backgroundHex);
  console.log(textColor);
}

function randomBackgroundColor(){
  var randoColor = Colors.rand('hex');
  var backgroundHex = randoColor
  var textColor = Colors.complement(randoColor);
  body.style.background = textColor;
  body.style.color = backgroundHex;
  button.style.background = backgroundHex;
  button.style.color = textColor;
  button2.style.background = backgroundHex;
  button2.style.color = textColor;
  printColors(backgroundHex, textColor);
  console.log(backgroundHex);
  console.log(textColor);
}

function printColors(bg, words){
  text.textContent = words;
  background.textContent = bg;
}

backgroundColor();
button.addEventListener('click',backgroundColor);
button2.addEventListener('click',randomBackgroundColor);
