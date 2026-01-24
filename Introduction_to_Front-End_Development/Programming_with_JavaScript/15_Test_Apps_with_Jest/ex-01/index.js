function convertToUppercase(str){
  try{
    if(typeof str !== "string")
      throw new Error("*** invalid text!");
    return str.toUpperCase();
  }catch(err){
    console.error(err.message);
  }
}

module.exports = convertToUppercase;