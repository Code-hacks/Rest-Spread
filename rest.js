function sum(...args){
    let total = 0;
    for(const arg of args){
        total += arg;
    }
    return total;
}

const ans1 = sum(1,2,3);
const ans2 = sum(1,2,3,4)

console.log(ans1);
console.log(ans2);