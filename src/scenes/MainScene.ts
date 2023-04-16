import Phaser from "phaser";
import spaceImage from "../assets/space.png";

class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload(): void {
    // Load your game assets here
    this.load.image("background", spaceImage);
  }

  create(): void {
    // Create your game objects and add them to the scene here
    this.add.image(400, 300, "background").setOrigin(0.5);
  }

  update(): void {
    // Update game logic here
  }
}

export default MainScene;
