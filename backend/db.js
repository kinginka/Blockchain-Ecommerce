const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://test:32486566@cluster0.6j0pm.mongodb.net/Cluster0?retryWrites=true&w=majority',
  {useNewUrlParser: true, useUnifiedTopology: true},
);

const paymentSchema = new mongoose.Schema({
  id: String,
  itemId: String,
  paid: Boolean
});
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
  Payment
};
