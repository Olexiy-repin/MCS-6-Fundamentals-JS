/*
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

class Timer {
  constructor(deadline) {
    // this = {}
    this.deadline = deadline;
    // return this;
  }

  start() {
    console.log('Timer start!');
  }

  stop() {
    console.log('Timer stop!');
  }
}

class PrettyTimer extends Timer {
  constructor(deadline, cssProps) {
    super(deadline);

    this.styles = cssProps;
  }

  someMethod() {
    console.log('Some method');
  }
}

const prettyTimer = new PrettyTimer('24.11.2024', { color: 'teal' });

console.log(prettyTimer);

prettyTimer.start();
prettyTimer.stop();
prettyTimer.someMethod();
