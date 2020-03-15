module.exports = function check(str, bracketsConfig) {
  //return optionOne(str,bracketsConfig);
  let oldLength;
  let newLength;

  do {
    oldLength = str.length;

    for(let i = 0; i < bracketsConfig.length; i++) {
      str = str.replace(bracketsConfig[i][0] + bracketsConfig[i][1], '');
    }

    newLength = str.length;

  } while(oldLength != newLength)    

  return str.length > 0 ? false : true;
}
