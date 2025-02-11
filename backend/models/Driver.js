import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true, default: "" },
  nic: { type: String, required: true, default: "" },
  dob: { type: Date, required: true },
  telephone: { type: String, required: true, default: "" },
  vehicleRegNo: { type: String, required: true, default: "" },
  vehicle: { type: String, required: true, default: "" },
  licenseNo: { type: String, required: true, default: "" },
});

const Driver = mongoose.model("Driver", driverSchema);

export default Driver;
