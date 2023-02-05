export default async function connect(client) {
  await client.connect();
  await client.db('unshelled').command({ ping: 1 });
  return 'done';
}
