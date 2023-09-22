const fs = require("fs/promises");
const path = require("path");
const categoriesFilePath = path.join(
  __dirname,
  "../",
  "../",
  "db",
  "categories.json"
);

const getAllCategories = async (req, res) => {
  const categories = await fs.readFile(categoriesFilePath);
  const categoriesDataParsed = JSON.parse(categories);
  const categoriesSorted = categoriesDataParsed.sort((a, b) =>
    a.localeCompare(b)
  );

  res.json({ categories: categoriesSorted });
};

module.exports = getAllCategories;
