const fs = require("fs/promises");
const path = require("path");
const glassesFilePath = path.join(
  __dirname,
  "../",
  "../",
  "db",
  "glasses.json"
);

const getAllGlasses = async (req, res) => {
  const glasses = await fs.readFile(glassesFilePath);
  const glassesDataParsed = JSON.parse(glasses);
  const glassesSorted = glassesDataParsed.sort((a, b) => a.localeCompare(b));

  res.json({ glasses: glassesSorted });
};

module.exports = getAllGlasses;
