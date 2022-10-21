import TeamMemberModel from '@/app/models/TeamMemberModel';
import TeamMemberValidator from '@/app/validators/TeamMemberValidator';
import { ModelNotFoundException } from '@/app/exceptions';

const modelExists = async params => (await TeamMemberModel.findOne(params)) !== null;

const create = async data => {
  await TeamMemberValidator.validate(data);

  const newData = await TeamMemberModel.create({
    name: data.name,
    email: data.email,
    phone_number: data.phone_number,
  });

  return newData;
};

const update = async (id, data) => {
  if (!(await modelExists({ _id: id }))) {
    throw new ModelNotFoundException();
  }

  await TeamMemberValidator.validate(data);

  const updatedData = await TeamMemberModel.update(id, {
    name: data.name,
    email: data.email,
    phone_number: data.phone_number,
  });

  return updatedData;
};

const destroy = async id => {
  if (!(await modelExists({ _id: id }))) {
    throw new ModelNotFoundException();
  }

  await TeamMemberModel.destroy(id);
  return null;
};

const getAll = async () => {
  return await TeamMemberModel.find();
};

const getById = async id => {
  return await TeamMemberModel.findById(id);
};

export default {
  create,
  update,
  destroy,
  getAll,
  getById,
};
