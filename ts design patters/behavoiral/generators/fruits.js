const { readdir, readFile, writeFile } = require("fs/promises");

const fruits = ["apple", "lemon", "Oranges", "kiwi"];

function* fruitShop() {
  for (const fruit of fruits) {
    yield fruit;
  }
}

const getFruits = fruitShop();
// console.log(getFruits.next())
// console.log(getFruits.next())
// console.log(getFruits.next())

function makeSalad() {
  let fruitbasket = getFruits.next();
  if (!fruitbasket.done) {
    console.log(fruitbasket.value);
    makeSalad();
  } else {
    console.log("out of fruits");
  }
}

// async generators

async function* getFilesgenerator() {
  try {
    const readDirectory = await readdir(inbox);
    for (const file of readDirectory) {
        yield file
    }
  } catch (error) {throw error}
}

await function reverseText(text){
return text
}
async function process(){
    try {
        const allFiles= await getFilesgenerator() //async generator object
        for await(const file of allFiles) {
            const read= await readFile(join(inbox,file),"utf8");
            const reverse=await reverseText(read)
            await writeFile(join(outbox, file),reverse)
        }
    } catch (error) {
        console.log(error)
    }
}