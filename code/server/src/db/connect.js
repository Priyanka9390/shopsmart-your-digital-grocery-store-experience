const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://grocery-webapp:grocery-webapp@cluster0.oioedos.mongodb.net/grocery-webapp?retryWrites=true&w=majority'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017