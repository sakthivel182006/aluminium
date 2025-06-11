import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: false },
  phoneNumber: { type: String, required: true },
  address: { type: String },

  doorOrWindow: { type: String, required: false },
  size: { type: String },
  material: { type: String, required: false },
  color: { type: String, required: false },
  installationDate: { type: Date, required: false }

}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
