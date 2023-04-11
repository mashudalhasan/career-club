// add data to local storage
const addToDb = (id) => {
  let jobCart = {};

  // get previous data from local storage
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    jobCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = jobCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    jobCart[id] = newQuantity;
  } else {
    jobCart[id] = 1;

    // jobCart = {
    //     '623853b2614ad5aba311fdd1' : 1
    // }
  }

  // set data to local storage
  localStorage.setItem("job-cart", JSON.stringify(jobCart));
};

// get stored data from cart
const getStoredCart = () => {
  let jobCart = {};

  // get previous data from local storage
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    jobCart = JSON.parse(storedCart);
  }

  return jobCart;
};

// remove a specific element from local storage
const removeFromDb = (id) => {
  // get previous data from local storage
  const storedCart = localStorage.getItem("job-cart");
  if (storedCart) {
    const jobCart = JSON.parse(storedCart);
    if (id in jobCart) {
      delete jobCart[id];
      localStorage.setItem("job-cart", JSON.stringify(jobCart));
    }
  }
};

// clear all data from local storage
const deleteShoppingCart = () => localStorage.removeItem("job-cart");

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart };