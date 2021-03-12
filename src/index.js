module.exports = function check(str, bracketsConfig) {
   let stack = [];
  let keys = [];
  let value = [];
  let obj = [];


  if (str.length % 2 ===1){
    return false; 
  }

  for(let i = 0; i <bracketsConfig.length; i++){
    keys.push(bracketsConfig[i][0])
    value.push(bracketsConfig[i][i]);
    obj[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  for(let i = o; i < str.length; i++){
    if(keys.includes(str[i]) && value.includes(str[i])){
      if(stack[stack.length -1 ] === str[i]){
        stack.pop();
      }else{
        stack.push(str[i]);
      }
    }else if(keys.includes(str[i])){
      stack.push(str[i]);
    }else if(value.includes(str[i])){
      if(obj[stack[stack.length - 1]] === str[i]){
        stack.pop();
      }else{
        stack.push('1');
      }
    }
  }

  if(stack.length===0){
    return true;
  }else{
    return false;
  }


}
