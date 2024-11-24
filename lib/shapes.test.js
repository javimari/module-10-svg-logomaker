// lib/shapes.test.js
const { Circle, Square, Triangle } = require('./shapes');

describe('Circle class', () => {
  test('renders an SVG circle with a blue fill color', () => {
    const circle = new Circle('blue');
    const expectedSvg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="105" font-size="20" text-anchor="middle" fill="white" dominant-baseline="middle"></text>
      </svg>
    `.replace(/\s+/g, ' ').trim(); // Normalize whitespace

    const actualSvg = circle.render().replace(/\s+/g, ' ').trim(); // Normalize whitespace in actual output
    expect(actualSvg).toBe(expectedSvg);
  });

  test('renders an SVG circle with a pink fill color', () => {
    const circle = new Circle('pink');
    const expectedSvg = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="pink" />
        <text x="150" y="105" font-size="20" text-anchor="middle" fill="white" dominant-baseline="middle"></text>
      </svg>
    `.replace(/\s+/g, ' ').trim(); // Normalize whitespace

    const actualSvg = circle.render().replace(/\s+/g, ' ').trim(); // Normalize whitespace in actual output
    expect(actualSvg).toBe(expectedSvg);
  });
});
