class Fish extends Denizen {
  constructor(options) {
    super(options);
    this.imageUri = '/images/fish01.png';
    this.maxSwimSpeed = 100;
    this.makeNewVelocity();
    this.isTasty = true;
    this.timeScaler = 0;
  }

  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }

    let newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    while (min && newSpeed.magnitude() < min) {
      newSpeed = new Vector(randRangeInt(-max, max), randRangeInt(-max / 2, max / 2));
    }

    return newSpeed;
  }

  updateOneTick() {
    const delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }

    this.timeScaler++;
    if (this.timeScaler === 20) {
      // console.log(this.position);
      // console.log(this.constructor.name);

      if (this.constructor.name === "BiteFish") {
        this.tank.getProximateDenizens(this.position, 50).forEach(d => {
          if (this.size(this) > this.size(d)) {
            d.kill();
            console.log(`Fish ${d.id} was eaten!`);
            this.height *= 1.25;
            this.width *= 1.25;
          }
        });
      }

      this.timeScaler = 0;
    }
  }

  size(fish) {
    return (fish.height * fish.width);
  }

  makeNewVelocity(minMag) {
    this.swimVelocity = this.generateSwimVelocity(this.maxSwimSpeed, minMag || 0);
    this.timeUntilSpeedChange = randRangeInt(5);
  }
}
