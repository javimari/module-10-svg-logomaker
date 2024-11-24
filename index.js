const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer'); // This will work for v8 and above
const { Circle, Square, Triangle } = require('./lib/shapes.js');

async function getUserInput() {
  const inputData = {};

  // Prompt for logo text (up to 3 characters)
  const textResponse = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for your logo (maximum 3 characters):',
      validate: (input) => (input.length <= 3 ? true : 'Text must be 3 characters or fewer.'),
    }
  ]);
  inputData.text = textResponse.text;

  // Prompt for text color
  const textColorResponse = await inquirer.prompt([
    {
      type: 'input',
      name: 'textColor',
      message: 'Choose a color for your text:',
    }
  ]);
  inputData.textColor = textColorResponse.textColor;

  // Prompt to select the shape
  const shapeResponse = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedShape',
      message: 'Select a shape for your logo:',
      choices: ['Circle', 'Square', 'Triangle'],
    }
  ]);
  inputData.selectedShape = shapeResponse.selectedShape;

  // Additional prompt for shape color based on selection
  const shapeColorResponse = await inquirer.prompt([
    {
      type: 'input',
      name: 'shapeColor',
      message: `Enter a color for the ${inputData.selectedShape.toLowerCase()}:`,
    }
  ]);
  inputData.shapeColor = shapeColorResponse.shapeColor;

  return inputData;
}

async function createLogo() {
  // Collect user input
  const inputData = await getUserInput();

  // Determine the selected shape and create an instance
  let shapeInstance;
  switch (inputData.selectedShape) {
    case 'Circle':
      shapeInstance = new Circle(inputData.shapeColor);
      break;
    case 'Square':
      shapeInstance = new Square(inputData.shapeColor);
      break;
    case 'Triangle':
      shapeInstance = new Triangle(inputData.shapeColor);
      break;
    default:
      console.error('Invalid shape selection.');
      return;
  }

  // Generate the SVG content
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeInstance.render()}
      <text x="150" y="130" font-size="40" text-anchor="middle" fill="${inputData.textColor}" dominant-baseline="middle">
        ${inputData.text}
      </text>
    </svg>
  `;

  // Save the generated SVG file
  const outputPath = path.join(__dirname, 'logo.svg');
  fs.writeFileSync(outputPath, svgContent);

  console.log('Your logo has been successfully created as logo.svg!');
}

// Execute the program
createLogo();
