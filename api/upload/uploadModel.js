const db = require('../../data/db-config');

const add = async (data) => {
  return await db('cases').insert(data);
};

const update = async (data) => {
  return await db('cases')
    .where({ case_id: data.case_id })
    .update({ ...data, status: 'review' });
};

module.exports = {
  add,
  update,
};
