import { handler as exceptionHandler } from '@/app/exceptions';
import TeamMemberService from '@/app/services/TeamMemberService';

exports.index = async (req, res) => {
  try {
    return res.json(await TeamMemberService.getAll());
  } catch (err) {
    return exceptionHandler(err, res);
  }
};

exports.show = async (req, res) => {
  try {
    const id = req.params.id ?? null;

    return res.json(await TeamMemberService.getById(id));
  } catch (err) {
    return exceptionHandler(err, res);
  }
};

exports.store = async (req, res) => {
  try {
    const newItem = await TeamMemberService.create(req.body);
    return res.json(newItem);
  } catch (err) {
    return exceptionHandler(err, res);
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id ?? null;
    const updatedItem = await TeamMemberService.update(id, req.body);

    return res.json(updatedItem);
  } catch (err) {
    return exceptionHandler(err, res);
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id ?? null;
    await TeamMemberService.destroy(id);

    return res.json(null);
  } catch (err) {
    return exceptionHandler(err, res);
  }
};
