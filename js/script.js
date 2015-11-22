/**
 * Variables *
 */


/** 
 * Should we append digits to the display?  It depends on whether we've just hit an operation button or a number button.  This variable keeps track of what we're supposed to do.  
 */
var appendDigits = false;

/** 
 * Remember the number that was in the display 
 */
var prevResult = '';

/** 
 * Remember the operation
 */
var op = "=";

/**
 * Functions
 */

/**
 * Clears the display
 */ 
function clearDisplay() {
  document.calculator.display.value = 0;
  prevResult = 0;
  appendDigits = false;
  op = "=";
} 

/**
 * Function  doOp(op) *
 * Executes the *previous* operation (e.g., when the user types 2 + 4 - 2, when the "-" is clicked, the "+" should be executed). 
 */
function doOp(newop)
{
  // Get the argument
  var newArg = eval(document.calculator.display.value)
  // Do the operation
  if (op == "+") {
    prevResult = prevResult + newArg;
  }
  else if (op == "-") {
    prevResult = prevResult - newArg;
  } 
  else if (op == "/") {
    prevResult = prevResult / newArg;
  }
  else if (op == "*") {
    prevResult = prevResult * newArg;
  }
  else if (op == "^") {
    prevResult = Math.pow (prevResult, newArg);
  }  
  else if (op == "=") {
    prevResult = newArg;
  }
  else { // if something's wrong
    prevResult = newArg;
  }
  // Display the result and update values
  document.calculator.display.value = prevResult;
  appendDigits = false;
  op = newop;
}

/**
 * Function digit(D)
 *  Reacts to the user typing a digit **
 */
function digit(dig)
{
  if (appendDigits) {
    document.calculator.display.value += dig;
  }
  else {
    document.calculator.display.value = dig;
    appendDigits = true;
  }
}

