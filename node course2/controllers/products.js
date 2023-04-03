const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("admin/add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
    ProductCSS: true,
    formCSS: true,
    activeProduct: true,
  });
  //can add layout false so hbs doesnt render the layout
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
