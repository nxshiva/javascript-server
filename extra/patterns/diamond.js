let num=process.argv[2]
function check(number){
    if(isNaN(number) || number<=2 || number>=10){
        return false;
    }
    return true;
}
function diamond(number){
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
for(let j = number; j > i; j--){
process.stdout.write(" ");
}

for(let k = 0; k < i; k++){
process.stdout.write("* ");
}

process.stdout.write('\n');
}
}
function askAgain(){
    const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    rl.question("Enter a number between 2 and 10: ", function(number) {
       if(check(number)){
           diamond(number)
           rl.close();
       }
       else{
        rl.close();
        askAgain();
       }
    });
}
export default function diamondPattern(num){
    if(check(num)){
        diamond(num)
    }
    else{
        askAgain()
    }
}
//diamondPattern(num);
