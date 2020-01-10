//CallBacks
function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);

  //Recursion
  function countDown(n) {
    console.log (n);
    if (n >= 1) {  // Exit or terminal condition
      countDown(n-1);
    }
  }

  //Closure
var globalVariable = 'Global variable.';
 
function outerFunction() {
  var outerFunctionVariable = 'Outer function variable.';
  
  function innerFunction () {
    var innerFunctionVariable = 'Inner function variable.';
    console.log("This is " + innerFunctionVariable);
    console.log("I can also access " + outerFunctionVariable);
    console.log("This is a " + globalVariable);
  };
  innerFunction();
};
outerFunction();