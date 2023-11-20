class Cell {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = '';
    this.nextState = '';
    this.neighbors = [];
  }

  setNeighbors(neighbors) {
    this.neighbors = neighbors;
  }

  calcNextState() {
    let countRock = 0;
    let countPaper = 0;
    let countScissors = 0;

    this.neighbors.forEach((neighbor) => {
      if (neighbor) {
        if (neighbor.state === 'rock') {
          countRock++;
        } else if (neighbor.state === 'paper') {
          countPaper++;
        } else if (neighbor.state === 'scissors') {
          countScissors++;
        }
      }
    });

    if (this.state === 'rock' && countPaper > 2) {
      this.nextState = 'paper';
    } else if (this.state === 'paper' && countScissors > 2) {
      this.nextState = 'scissors';
    } else if (this.state === 'scissors' && countRock > 2) {
      this.nextState = 'rock';
    } else {
      this.nextState = this.state;
    }
  }

  update() {
    this.state = this.nextState;
  }

  display() {
    push();
    translate(this.x, this.y);
    // if (this.state) {
    //   fill(32);
    // } else {
    //   fill(255);
    // }

    pop();
    noStroke();
    if (this.state === 'rock') {
      fill(255, 0, 0); // Red for rock
    } else if (this.state === 'paper') {
      fill(0, 255, 0); // Green for paper
    } else if (this.state === 'scissors') {
      fill(0, 0, 255); // Blue for scissors
    }

    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
