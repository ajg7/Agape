import Phaser from "phaser";

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload(): void {
    // Load your game assets here
  }

  create(): void {
    // Create your game objects and add them to the scene here
    const starsCount = 200;
    const graphics = this.add.graphics();

    for (let i = 0; i <= starsCount; i++) {
      const x = Math.random() * this.scale.width;
      const y = Math.random() * this.scale.height;
      const size = Math.random() * 3;
      const color = 0xffffff;

      graphics.fillStyle(color);
      graphics.fillCircle(x, y, size);
    }

    // Create starship texture
    const starshipTexture = this.createStarshipTexture();

    // Add the starship sprite and set the position, origin, and rotation
    const starshipSprite = this.add.sprite(this.scale.width / 2, this.scale.height - 100, 'starship');
    starshipSprite.setOrigin(1.75, 0.75);
    starshipSprite.angle = 270;
  }

  update(): void {
    // Update game logic here
  }

  createStarshipTexture(): Phaser.Textures.Texture {
    const renderTexture = this.textures.createCanvas('starship', 50, 100);
    const ctx = renderTexture.getContext();

    // Main body (rectangle)
    ctx.fillStyle = '#ff69b4'; // Pink
    ctx.fillRect(0, 0, 50, 100);

    // Triangle wings (two triangles)
    ctx.fillStyle = '#c0c0c0'; // Silver
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 0);
    ctx.lineTo(-25, 50);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(50, 100);
    ctx.lineTo(-25, 50);
    ctx.closePath();
    ctx.fill();

    // Circular window
    ctx.fillStyle = '#808080'; // Gray
    ctx.beginPath();
    ctx.arc(20, 50, 15, 0, 2 * Math.PI);
    ctx.fill();

    renderTexture.refresh();
    return renderTexture;
  }
}

export default MainScene;
