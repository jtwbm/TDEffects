import p5 from 'p5';

export class TDCanvas {
  constructor({ setup, draw }) {
    this.setup = setup;
    this.draw = draw;
  }

  startAnimation() {
    new p5(this.sketch.bind(this));
  }

  sketch(s) {
    s.setup = () => {
      s.createCanvas(600, 600);
      s.background('rgba(255, 255, 255, 0)');
      s.strokeWeight(4);

      this.width = s.width;
      this.height = s.height;

      this.setup(s);
    };

    s.draw = () => {
      s.background('rgba(255, 255, 255, 0)');
      s.noLoop();

      this.draw(s);
    };
  }
}