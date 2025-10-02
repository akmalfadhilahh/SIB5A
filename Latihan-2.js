class Enemy {
  constructor(name) {
    // Properties
    this.name = name;
    this.speed = 2;
    this.attackPower = 5;
    this.health = 100;
    this.defend = 2;
  }

  // Method attack
  attack() {
    console.log("Enemy attack! Attack =", this.attackPower);
  }

  // Method walk
  walk() {
    console.log("Enemy walk, speed =", this.speed);
  }

  // Method dash
  dash() {
    console.log("Enemy dash, speed = 5");
  }

  // Method informasi lengkap
  getInformation() {
    console.log(
      `${this.name} memiliki speed=${this.speed}, attack=${this.attackPower}, health=${this.health}, dan defend=${this.defend}`
    );
  }
}

// ---- Contoh penggunaan ----
const goblin = new Enemy("Goblin");

goblin.attack();
goblin.walk();
goblin.dash();
goblin.getInformation();
