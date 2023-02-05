import { MongoClient } from 'mongodb';

export default function dbInstance(uri) {
  return new MongoClient(uri);
}
