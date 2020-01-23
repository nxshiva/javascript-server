let num=process.argv[2];
if(isNaN(num)){
    const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    rl.question("Enter a number between 2 and 10: ", function(number) {
        
for(let i=0;i<number;i++) {
    
    for(let j = number-1; j > i; j--){
        process.stdout.write(" ");
    }

    for(let k=0;k<=i;k++){
        process.stdout.write("* ");
    }

    process.stdout.write('\n');
}

for(let i = number; i > 0; i--) {
    for(j = number; j > i; j--){
        process.stdout.write(" ");
    }

    for(let k = 0; k < i; k++){
        process.stdout.write("* ");
    }

    process.stdout.write('\n');
}
        rl.close();
    });

rl.on("close", function() {
    process.exit(0);
});
}
else if(num<=2 || num>10){
    const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    rl.question("Enter a number between 2 and 10: ", function(number) {
        
for(let i=0;i<number;i++) {
    
    for(let j = number-1; j > i; j--){
        process.stdout.write(" ");
    }

    for(let k=0;k<=i;k++){
        process.stdout.write("* ");
    }

    process.stdout.write('\n');
}

for(let i = number; i > 0; i--) {
    for(j = number; j > i; j--){
        process.stdout.write(" ");
    }

    for(let k = 0; k < i; k++){
        process.stdout.write("* ");
    }

    process.stdout.write('\n');
}
        rl.close();
    });

rl.on("close", function() {
    process.exit(0);
});
}
else
{
   
for(let i=0;i<num;i++) {
    
    for(let j = num-1; j > i; j--){
        process.stdout.write(" ");
    }

    for(let k=0;k<=i;k++){
        process.stdout.write("* ");
    }

    process.stdout.write('\n');
}

for(let i = num; i > 0; i--) {
    for(j = num; j > i; j--){
        process.stdout.write(" ");
    }

    for(let k = 0; k < i; k++){
        process.stdout.write("* ");
    }

    process.stdout.write('\n');
}
}
