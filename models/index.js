// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Categories have many Products
Category.belongsToMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tag",
});
// Tags belongToMany Products (through ProductTag)

Tag.belongToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_tag",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
