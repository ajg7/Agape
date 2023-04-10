import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload(): void {
    // Load your game assets here
  }

  create(): void {
    // Create your game objects and add them to the scene here
    this.add.text(400, 300, 'Hello Phaser with React and TypeScript!', { fontSize: '32px', color: '#fff' }).setOrigin(0.5);
  }

  update(): void {
    // Update game logic here
  }
}

export default MainScene;
