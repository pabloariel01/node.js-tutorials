function* type (string) {
  let index = 0;
  
  while (index < string.length) {
    yield string.slice(0, ++index);
  }
  
  //return string; // fiinal function return
}

const print = (render, text, timeout) => {
  render(text);
  
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

(async function () {
  for (const value of type("Hello, World!")) {
    await print(console.log, value, 250);
  }
})();