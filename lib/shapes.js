// For Circle Shape
class Circle {
	constructor(color) {
		this.color = color;
	}
	setColor(color) {
		this.color = color;
	}
	render(text = "") {
		return `
			<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
				<circle cx="150" cy="100" r="80" fill="${this.color}" />
				<text x="150" y="105" font-size="20" text-anchor="middle" fill="white" dominant-baseline="middle">${text}</text>
			</svg>
		`;
	}
}

// For Square Shape
class Square {
	constructor(color) {
		this.color = color;
	}
	setColor(color) {
		this.color = color;
	}
	render(text = "") {
		return `
			<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
				<rect x="90" y="40" width="120" height="120" fill="${this.color}" />
				<text x="150" y="100" font-size="20" text-anchor="middle" fill="white" dominant-baseline="middle">${text}</text>
			</svg>
		`;
	}
}

// For Triangle Shape
class Triangle {
	constructor(color) {
		this.color = color;
	}
	setColor(color) {
		this.color = color;
	}
	render(text = "") {
		return `
			<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
				<polygon points="150,18 244,182 56,182" fill="${this.color}" />
				<text x="150" y="120" font-size="20" text-anchor="middle" fill="white" dominant-baseline="middle">${text}</text>
			</svg>
		`;
	}
}

module.exports = { Circle, Square, Triangle };
