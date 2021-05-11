const db = require('../../data/db-config');

const add = async (data) => {
  return await db('cases').insert(data);
};

module.exports = {
  add,
};
