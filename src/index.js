module.exports = function check(str, bracketsConfig) {
  var chars = str.split(''),
      stack = [],
      openBrackets = [],
      closeBrackets = [],
      exception = [],
      exceptionIndex,
      closeIndex,
      openIndex;

  for(let i = 0; i < bracketsConfig.length; i++){
    if( bracketsConfig[i][0] != bracketsConfig[i][1]){
      openBrackets[i] = bracketsConfig[i][0];
      closeBrackets[i] = bracketsConfig[i][1]; 
    } 
    else{
      exception.push(bracketsConfig[i][0]);
    }
  }

  for (var i = 0; i < chars.length; i++) {
    openIndex = openBrackets.indexOf(chars[i]);
    if (openIndex !== -1) {        
        stack.push(openIndex);
        continue;
    }
    closeIndex = closeBrackets.indexOf(chars[i]);
    if (closeIndex !== -1) {
        openIndex = stack.pop();
        if (closeIndex !== openIndex) {
            return false;
        }
    }
    exceptionIndex = exception.indexOf(chars[i]);
    if (exceptionIndex !== -1){
      let temp = stack[stack.length - 1];
        if(temp == chars[i]){
          stack.splice(stack.length - 1, 1);
        }
        else{
          stack.push(chars[i])
        }
     }
 }
 return (stack.length !== 0) ? false : true;    
}
