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

//Events
window.addEventListener('load', (event) => {
    alert("Hello World")
  });

  window.onload = (event) => {
    console.log('page is fully loaded');
  };

  function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }

  <p>Bring your mouse inside the division to see the result:</p>
    <div onmouseover="over()" onmouseout="out()">
        <h2> This is inside the division </h2>
    </div>

    <p>Click the following button and see result</p>      
    <form>
       <input type = "button" onclick = "sayHello()" value = "Say Hello" />
    </form>

    <p id="para">Some text here</p>
  <button onclick="changeColor('blue');">blue</button>
  <button onclick="changeColor('red');">red</button>