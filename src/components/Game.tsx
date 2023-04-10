import React, { useEffect } from 'react';
import Phaser from 'phaser';
import MainScene from '../scenes/MainScene';

const Game: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-root',
      scene: [MainScene],
    };

    new Phaser.Game(config);
  }, []);

  return <div id="game-root" />;
};

export default Game;
