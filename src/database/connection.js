module.exports = async function (client) {
  await client.connect();
  await client.db('unshelled').command({ ping: 1 });
  return 'done';
};
