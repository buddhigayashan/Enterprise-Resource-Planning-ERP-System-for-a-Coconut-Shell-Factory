const AddDelivery = () => {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Sidebar - Pending Orders */}
      <div className="w-1/2 p-4 bg-blue-500 text-white">
        <h2 className="text-2xl mb-4">Pending Orders</h2>
        <div className="space-y-4">
          {/* Example order item - Repeat this div for each order */}
          <div className="p-4 bg-white text-black rounded">
            {/*  <p>Vidumini Chalanika</p>   
            <p>Order ID: ORDER-1728820393018</p>
            <p>Items Price: Rs.84640</p>*/}
          </div>
          {/* Add more order items as needed */}
        </div>
      </div>

      {/* Main Content - Delivery Information */}
      <div className="w-1/2 p-6">
        <h2 className="text-2xl mb-4">Delivery Information</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2">First Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="block mb-2">Last Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter last name"
            />
          </div>
          <div>
            <label className="block mb-2">Telephone Number</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter telephone number"
            />
          </div>
          <div>
            <label className="block mb-2">Address</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter address"
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block mb-2">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter city"
              />
            </div>
            <div>
              <label className="block mb-2">Province</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter province"
              />
            </div>
            <div>
              <label className="block mb-2">Postal Code</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter postal code"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2">Items</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter items"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded"
          >
            Submit Delivery
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDelivery;
