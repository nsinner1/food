var likeFood = prompt ('Do you like food?');
console.log(likeFood);

var greeting;

if (likeFood === 'Yes') {
greeting = "Me too!";
} else if (likeFood === 'No') {
    greeting = "How are you still alive?";
}

console.log('Our responce', greeting);

for (var i = 0; i < 20; i++){
    console.log ('How many do you want?');
    if (i === 20){
        console.log (i);
        break;
    }
}