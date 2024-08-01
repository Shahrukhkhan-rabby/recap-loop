var bottleColor = "yellow";
var waterQuantity = 1
var isFull = false;

// array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper');
items.push('envelope');
items.push('watch');
items.pop();

// conditionals
if(items.length >=4){
    console.log('You have too many stuff on your desk')
}
else if(items.length == 4){
    console.log('You have four items')
}
else{
    console.log('WOW You have a clean desk')
}