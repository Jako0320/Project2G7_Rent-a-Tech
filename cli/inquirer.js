const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const initQuestion = [
    {
        type: "confirm",
        name: "userType",
        message: "Are you looking to get your car serviced?",
    },
];

const mechQuestions = [
    {
        type: "confirm",
        name: "mechUserConfirm",
        message: "Are you a mechanic seeking to work for 'Rent-a-Tech'?",
    },
    {
        type: "input",
        name: "mechName",
        message: "Please enter a username",
    },
    {
        type: "input",
        name: "mechEmail",
        message: "Please enter your email contact"
    },
    {
        type: "input",
        name: "mechPhone",
        message: "Please enter your phone number"
    },
    {
        type: "list",
        name: "mechMake",
        choices: ["Honda/Acura", "Toyota/Lexus", "Kia", "Nissan", "Ford", "Chevrolet", "Hyundai", "Jeep", "Subaru", "Mazda", "Mercedes-Benz", "Volkswagen/BMW", "Other", "All"],
    },
    {
        type: "input",
        name: "mechOther",
        message: "If other selected, please specify:",
    },
];

const carQuestions = [
    {
        type: "list",
        name: "make",
        message: "Select the make of your car.",
        choices: ["Honda/Acura", "Toyota/Lexus", "Kia", "Nissan", "Ford", "Chevrolet", "Hyundai", "Jeep", "Subaru", "Mazda", "Mercedes-Benz", "Volkswagen/BMW", "Other"],
    },
    {
        type: "list",
        name: "issue",
        message: "Tell us what issue your car is experiencing.",
        choices: ["Tire pressure low/flat", "Shaky steering wheel/vibrations", "Observe smoke", "Check engine light", "Headlights", "Dead battery", "Car alarm","A/C issues", "Heater issues","Lockout", "Unsure", "Other", "No issue"],
    },
    {
        type: "list",
        name: "service",
        message: "Tell us what service you are requesting.",
        choices: ["Oil change", "General diagnosis", "Wheel alignment", "Replace air/engine filters", "Replace wiper blades", "Antifreeze", "Brake fluid", "State Inspection", "Towing", "Unsure", "Other"],
    },
    {
        type: "input",
        name: "other",
        message: "If other selected, please specify:",
    },
    {
        type: "input",
        name: "zip",
        message: "Find a mechanic in your area. Please enter your zip code:",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter a username.",
    },
    {
        type: "input",
        name: "contact",
        message: "Please enter your email or phone number for tech to contact."
    },
];



function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function init() {
//     inquirer.createPromptModule(initQuestion).then((answers) => writeToFile('.js', generateRequest(answers)))
//     .then(() => console.log('Successfully submitted service request!'))
//     .catch((err) => console.error(err));
// }