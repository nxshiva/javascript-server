//let num=process.argv[2]
function check(number : number) : boolean{
    if(isNaN(number) || number<=2 || number>=10){
        return false;
    }
    return true;
} 
function equilateral(num : number) : void{
console.log("Equilateral pattern \n");
    for(let i=0;i<num;i++){
        for(let j=i;j<num-1;j++){
            process.stdout.write(" ")
        }
        for(let k=0;k<=i;k++){
            process.stdout.write("* ")
        }
        process.stdout.write("\n")
    }
}
function askAgain() : void{
    const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    rl.question("Enter a number between 2 and 10: ", function(number : number) {
       if(check(number)){
           equilateral(number)
           rl.close();
       }
       else{
        rl.close();
        askAgain();
       }
    });
}
export default function equilateralPattern(num : number){
    if(check(num)){
        equilateral(num)
    }
    else{
        askAgain()
    }
}
//equilateralPattern(num);
