// ==================================== DATABASE =============================
const { MongoClient } = require("mongodb");

async function run(input) {
  const uri = "mongodb+srv://admin:zhatch5201@cluster0.klt1m.mongodb.net/Casa_order_project_2.0.0?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  await client.connect();

  const dbName = "orders_test_0";
  const collectionName = "order_test_1-27";
  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const order_info = input;
  try {
    await collection.insertOne(order_info);
    console.log(`Added ${JSON.stringify(order_info)} successfully!`);
  } catch (err) {
    console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  }
  // Make sure to call close() on your client to perform cleanup operations
  await client.close();
}
// ==================================== DATABASE =============================
// ==================================== EXPRESS ==============================
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('front-end'));
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.post('/add-order', (req, res) => {
  const body = req.body;
  console.log(body);
  run(req.body).catch();
  res.end(JSON.stringify(req.body));
});
