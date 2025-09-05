const realine=require("readline");

const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

console.log("---------------------------");
console.log("Factorial Application");
console.log("1. Say Hello");
console.log("2. Factorial");
console.log("3. Exit Application");
console.log("---------------------------");

r1.question("Enter your choice (1-3): ", choice =>{
    console.log(choice);

    if (choice ==="1"){
    console.log("Hello");
    } else if (choice ==="2"){
     console.log("Factorial");
    } else if (choice === "3"){
        console.log("Existing Application");
    } else {
        console.log("Invalid Choice. Please Try Again");
    }

})