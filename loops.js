//for loop example
function forLoop(array) {
  for(var i =0; i<25; i++) {
    if(i==1) {
      array.push("I am 1 strange loop.");
  } else {
    array.push(`I am ${i} strange loops`);
    }
  }
  return array;
}

//while loop example
function whileLoop(number) {
  while(number > 0) {
    console.log(number);
    number--;
  }
  return 'done';
}

//do while loop example
