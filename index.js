#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
// Person class
class Person {
    personality = 'Mystery';
    answer;
    constructor(answer) {
        this.answer = answer;
    }
    getPersonality() {
        switch (this.answer) {
            case 'Extrovert: You like to talk to others':
                this.personality = 'Extrovert';
                break;
            case 'Introvert: You would rather keep to yourself':
                this.personality = 'Introvert';
                break;
            case 'Reserved: You prefer to be more reserved':
                this.personality = 'Reserved';
                break;
            case 'Moody: You have mood swings':
                this.personality = 'Moody';
                break;
            case 'Happy: You generally feel happy':
                this.personality = 'Happy';
                break;
            case 'Sad: You often feel sad':
                this.personality = 'Sad';
                break;
            default:
                this.personality = 'Mystery';
                break;
        }
        return this.personality;
    }
    displayPersonality() {
        const personality = this.getPersonality();
        console.log(chalk.bold.hex('#FF33FF')(`\nYour personality is "${chalk.hex('#00FFFF').italic(personality)}"`));
    }
}
// Student class inherits from Person class
class Student extends Person {
    _name = '';
    get userName() {
        return this._name;
    }
    set userName(value) {
        this._name = value;
    }
    displayPersonality() {
        const personality = this.getPersonality();
        console.log(chalk.bold.hex('#FF33FF')(`\nYour name is ${chalk.hex('#FFFF00').italic(this._name)} and your personality is "${chalk.hex('#00FFFF').italic(personality)}"`));
    }
}
// Function to animate rainbow-colored text
function animateRainbowText(text) {
    const rainbow = chalkAnimation.rainbow(text);
    setTimeout(() => {
        rainbow.stop();
    }, 5000); // Stop animation after 5 seconds
}
// Function to display static rainbow-colored text
function displayRainbowText(text) {
    const rainbow = chalkAnimation.rainbow(text);
    rainbow.render();
    rainbow.stop(); // Stop the animation immediately, keeping the color
}
// Welcome Message with animation
console.log(chalk.bold.hex('#FFFFFF')('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'));
displayRainbowText('\n\t\t\t\t\tWELCOME TO NMJ OOP APP\n');
console.log(chalk.bold.hex('#FFFFFF')('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'));
// Main function to run the prompts
async function main() {
    try {
        // Ask for name
        const nameAnswer = await inquirer.prompt({
            name: 'ans',
            message: chalk.bold.magentaBright('\nEnter your name'),
            type: 'input'
        });
        // Ask for personality type
        const personalityAnswer = await inquirer.prompt({
            name: 'ans',
            message: chalk.bold.yellow('\nPlease select a type of personality'),
            type: 'list',
            choices: [
                'Extrovert: You like to talk to others',
                'Introvert: You would rather keep to yourself',
                'Reserved: You prefer to be more reserved',
                'Moody: You have mood swings',
                'Happy: You generally feel happy',
                'Sad: You often feel sad'
            ],
        });
        const student = new Student(personalityAnswer.ans);
        student.userName = nameAnswer.ans;
        student.displayPersonality();
        console.log(chalk.bold.hex('#FFFFFF')('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'));
        displayRainbowText('\n\t\t\t\tThanks for using NMJ App\n');
        console.log(chalk.bold.hex('#FFFFFF')('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@'));
    }
    catch (error) {
        console.error(chalk.red('An error occurred:'), error);
    }
}
// Run the main function
main();
