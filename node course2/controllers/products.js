const products = [];

exports.getAddProduct = (req, res, next) => {
  //   res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Products",
    path: "/admin/add-product",
    ProductCSS: true,
    formCSS: true,
    activeProduct: true,
  });
  //can add layout false so hbs doesnt render the layout
};

exports.postAddProduct = (req, res) => {
  console.log("adminjs", req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //   console.log("shopjs", adminData.products);
  //   res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};
