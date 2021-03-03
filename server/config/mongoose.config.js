const mongoose = require('mongoose');

module.exports = DB_NAME => {
   mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false
   })
   .then(() => console.log(`Successfully connected to ${DB_NAME}`))
   .catch(err => console.log("mongoose connection failed: ", err));
}
