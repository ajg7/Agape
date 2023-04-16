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

    for (let i = 0; i < starsCount; i++) {
      const x = Math.random() * this.scale.width;
      const y = Math.random() * this.scale.height;
      const size = Math.random() * 3;
      const color = 0xffffff;

      graphics.fillStyle(color);
      graphics.fillCircle(x, y, size);
    }
  }

  update(): void {
    // Update game logic here
  }
}

export default MainScene;
