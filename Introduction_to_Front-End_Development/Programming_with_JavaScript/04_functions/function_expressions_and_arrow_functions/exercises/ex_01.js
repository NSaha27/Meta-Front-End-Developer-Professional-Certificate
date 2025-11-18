/*
  function expression
  -------------------
*/

const getDemoUsers = function(url){
  try{
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(users => {
        console.log(users);
      })
  }catch(err){
    throw new Error(err.message);
  }
};

const requestUrl = 'https://dummyjson.com/users/1030';
// getDemoUsers(requestUrl);

/*
  arrow function
  --------------
*/

const getDemoProduct = (url, id) => {
  try{
    fetch((url.concat("/",id)))
      .then(res => res.json())
      .then(product => {
        console.log(product);
      })
  }catch(err){
    throw new Error(err.message);
  }
};

const requestProdUrl = "https://dummyjson.com/products";
getDemoProduct(requestProdUrl, 12);