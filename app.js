var likeFood = prompt ('Do you like food?');
console.log(likeFood);

var greeting;

if (likeFood === 'Yes') {
greeting = "Me too!";
} else if (likeFood === 'No') {
    greeting = "How are you still alive?";
}

console.log('Our responce', greeting);

var howMany = function(){
var count = prompt ('how many things do you want to order?')
}
while(count === "" || isNaN(count)){
    count = prompt('please enter number');
}

return number(count);
howMany();