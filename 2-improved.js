let first_num = 300;
let second_num = 200;
let total = total_list(first_num + second_num);

function total_list() {
   let total = 0;
    for ( i of arguments) {
    total += i
    
    } return total
}

console.log(total);
