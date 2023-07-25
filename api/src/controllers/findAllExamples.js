const { Example } = require("../db");

const findAllExamples = async () => {
  const examples = await Example.findAll();
  return examples;
};

module.exports = findAllExamples;
