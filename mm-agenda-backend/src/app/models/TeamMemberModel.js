import db from '@/app/database';

const find = async (params = {}) => {
  return await db.find(params);
};

const findOne = async (params = {}) => {
  return await db.findOne(params);
};

const findById = async id => {
  return await findOne({
    _id: id,
  });
};

const create = async data => {
  return await db.insert(data);
};

const update = async (id, data) => {
  return await db.update(id, data);
};

const destroy = async id => {
  const totalRemoved = await db.destroy({ _id: id });
  return null;
};

export default {
  find,
  findOne,
  findById,
  create,
  update,
  destroy,
};
