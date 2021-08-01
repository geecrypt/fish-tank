class BiteFish extends Fish {
  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bite-fish.gif'; // Set the image
    // this.timeScaler = 0;
  }

  // when a fish gets to close to this BiteFish, kill the fish and grow this BiteFish size
  // Solutions:
  // 1. store all BiteFish positions in array.
  //    Each updateOneTick, in fish class, check if this.position is near position of any BiteFish in array.
  //    If true, this.kill() the fish and increment size counter of first nearby BiteFish detected
  eatFish() {

  }

  // updateOneTick() {
  //   const delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (1 + this.surgeSecondsLeft * this.surgMult));
  //   this.position.addMut(delta);
  //   this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
  //   if (this.timeUntilSpeedChange < 0) {
  //     this.makeNewVelocity();
  //   }

  //   this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);

  // }
}
