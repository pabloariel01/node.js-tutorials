const fs = require("fs");
const path = require("path");
const basePath = require("../util/path");
const p = path.join(basePath, "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContet) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContet));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
