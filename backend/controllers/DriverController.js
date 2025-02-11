import Driver from '../models/Driver.js';

// Get all drivers
export const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get driver by ID
export const getDriverById = async (req, res) => {
  try {
    const driver = await Driver.findById(req.params.id);
    if (!driver) return res.status(404).json({ message: 'Driver not found' });
    res.json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Create a new driver
export const createDriver = async (req, res) => {
   
  const { name, nic, dob, telephone, vehicleRegNo, vehicle, licenseNo } =
    req.body;

  try {
    const newDriver = new Driver({
      name,
      nic,
      dob,
      telephone,
      vehicleRegNo,
      vehicle,
      licenseNo,
    });

    const savedDriver = await newDriver.save();
    res.status(201).json(savedDriver);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};


// Update a driver by ID
export const updateDriver = async (req, res) => {
  try {
    // res.json(req.body);
    const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });

    //Check if the driver was found
    if (!updatedDriver) return res.status(404).json({ message: 'Driver not found' });

    res.json(updatedDriver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Delete a driver by ID
export const deleteDriver = async (req, res) => {
  try {
    console.log(req.params.id);
    const driver = await Driver.findByIdAndDelete(req.params.id);
    if (!driver) return res.status(404).json({ message: 'Driver not found' });
    res.json({ message: 'Driver deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};