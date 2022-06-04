class Palette {
  constructor() {
    this.id = Date.now();
    this.colors = this.generateRandomPalette();
  }

  generateColor(hex, indexPosition) {
    var newColor = new Color(hex);
    if (this.colors[indexPosition]) {
        this.colors[indexPosition] = newColor;
    } else {
      this.colors.push(newColor);
    }
  }

  generateRandomPalette() {
    for (var i = 0; i < 5; i++) {
      this.generateColor(color.hex, i);
    }
  }


  lockUnlockColor() {
    // var newColor = new Color();
    for (var i = 0; i < palette.colors.length; i++) {
      if (palette.colors[i].locked === false) {
        palette.colors[i].locked = true;
        lockButton.innerText = '🔒';
      } else {
        palette.colors[i].locked = false;
        lockButton.innerText = '🔓';
    }
  }
 }
}