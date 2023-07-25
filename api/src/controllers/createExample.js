const { Example } = require("../db");

const createExamples = async (name) => {
  const newExample = await Example.create({
    id: 2,
    name: name,
    definition: "etc",
  });
  return newExample;
};

module.exports = createExamples;
