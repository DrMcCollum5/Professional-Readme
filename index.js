// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'github', 
        type: 'input',
        message: 'What is your github username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    },
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your project?'
        },
        {
            name:"description",
            type:'input',
            message:'What is the description of the project?' 
        },
        {
            name:'installiation', 
            type:'input',
            message:'What are the installation instructions?'
        },
        {
            name:'usage',
            type:'input',
            message:'What are the usage instructions?'
        },
        {
            name:'contribution',
            type:'input',
            message: 'What are the contribution guidelines?'
        },
        {
            name:'test',
            type:'input',
            message:'What are the test instructions?'
        },
        {
            name:'license',
            type:'list',
            message:'What type of license did you use?',
            choices: [ 'MIT', 'Apache','GNU General Public','Boost Software']
        }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data)=>{
        console.log (data.title)
        fs.writeFileSync('data', inquirerResponse, data);    
    })
.catch((err) => {
    console.log(err);
});

}


//use fs to call the generateMarkdown function
// Function call to initialize app
init();

