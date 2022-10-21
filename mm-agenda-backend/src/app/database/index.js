import Datastore from 'nedb';
// import environment from '@/config/environment';

// const db = new Datastore({ filename: environment.DB_PATH, autoload: true });
const dbInstance = new Datastore({ autoload: true });

const destroy = (query, multi = false) => {
  return new Promise((resolve, reject) => {
    dbInstance.remove(query, { multi }, function (err, numRemoved) {
      if (err) reject(err);
      resolve(numRemoved);
    });
  });
};

const find = params => {
  return new Promise((resolve, reject) => {
    dbInstance.find(params, function (err, docs) {
      if (err) reject(err);
      resolve(docs);
    });
  });
};

const findOne = params => {
  return new Promise((resolve, reject) => {
    dbInstance.findOne(params, function (err, docs) {
      if (err) reject(err);
      resolve(docs);
    });
  });
};

const insert = data => {
  return new Promise((resolve, reject) => {
    dbInstance.insert(data, function (err, docs) {
      if (err) reject(err);
      resolve(docs);
    });
  });
};

const update = (id, data) => {
  return new Promise((resolve, reject) => {
    dbInstance.update({ _id: id }, data, { returnUpdatedDocs: true }, function (err, numAffected, docs, isUpsert) {
      if (err) reject(err);
      resolve(docs);
    });
  });
};

export default {
  db: dbInstance,
  destroy,
  find,
  findOne,
  insert,
  update,
};
