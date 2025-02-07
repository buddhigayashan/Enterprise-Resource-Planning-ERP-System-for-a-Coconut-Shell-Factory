import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import {
  FaTruck,
  FaCog,
  FaSignOutAlt,
  FaListAlt,
  FaPlusCircle,
  FaTasks,
  FaMoon,
  FaSun,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import logo from "../asset/logo.png";


function Layout() {
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();



  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [darkMode]);

  const toggleDeliveryDropdown = () => {
    setIsDeliveryOpen(!isDeliveryOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex">
      <div
        className={`h-screen w-64 p-5 flex flex-col justify-between ${
          darkMode ? "bg-gray-800 text-white" : "bg-slate-200 text-black"
        }`}
      >
        <div>
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="logo"
              className="w-20 h-20 rounded-full border-2 border-orange-500"
            />
          </div>

          <div className="mb-8">
            <h2
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Menu
            </h2>
            <nav>
              <ul>
                <li className="mb-4">
                  <button
                    onClick={() => handleNavigate("/dashboard")}
                    className={`flex items-center w-full text-left rounded-lg px-4 py-3 transition-colors duration-300 ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-orange-100"
                    }`}
                  >
                    <FaListAlt className="h-6 w-6 mr-4" />
                    Dashboard
                  </button>
                </li>

                <li className="mb-4">
                  <button
                    onClick={toggleDeliveryDropdown}
                    className={`flex items-center w-full text-left rounded-lg px-4 py-3 transition-colors duration-300 ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-orange-100"
                    }`}
                  >
                    <FaTruck className="h-6 w-6 mr-4" />
                    Deliveries
                  </button>
                  {isDeliveryOpen && (
                    <ul
                      className={`ml-4 mt-2 space-y-1 ${
                        darkMode ? "bg-gray-700" : "bg-gray-100"
                      } rounded-lg`}
                    >
                      <li>
                        <button
                          onClick={() => handleNavigate("deliverydetail")}
                          className={`flex items-center rounded-lg px-4 py-2 transition-colors duration-300 ${
                            darkMode
                              ? "text-white hover:bg-gray-600"
                              : "text-black hover:bg-orange-200"
                          }`}
                        >
                          <FaPlusCircle className="h-6 w-6 mr-4" />
                          Delivery Details
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavigate("adddelivery")}
                          className={`flex items-center rounded-lg px-4 py-2 transition-colors duration-300 ${
                            darkMode
                              ? "text-white hover:bg-gray-600"
                              : "text-black hover:bg-orange-200"
                          }`}
                        >
                          <FaPlusCircle className="h-6 w-6 mr-4" />
                          Add Delivery
                        </button>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="mb-4">
                  <button
                    onClick={() => handleNavigate("drivervehicledetails")}
                    className={`flex items-center rounded-lg px-4 py-3 transition-colors duration-300 ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-orange-100"
                    }`}
                  >
                    <FaTasks className="h-6 w-6 mr-4" />D & V Details
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <nav>
              <ul>
                <li className="mb-4">
                  <button
                    onClick={() => handleNavigate("settings")}
                    className={`flex items-center rounded-lg px-4 py-3 transition-colors duration-300 ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-black hover:bg-orange-100"
                    }`}
                  >
                    <FaCog className="h-6 w-6 mr-4" />
                    Settings
                  </button>
                </li>

                <li className="mb-4">
                  <button
                    onClick={() => handleNavigate("logout")}
                    className={`flex items-center rounded-lg px-4 py-3 transition-colors duration-300 ${
                      darkMode
                        ? "text-white hover:bg-red-700"
                        : "text-black hover:bg-red-100"
                    }`}
                  >
                    <FaSignOutAlt className="h-6 w-6 mr-4" />
                    Logout
                  </button>
                </li>

                <li className="mb-4">
                  <button
                    onClick={toggleDarkMode}
                    className={`flex items-center w-full rounded-lg px-4 py-3 transition-colors duration-300 ${
                      darkMode
                        ? "bg-yellow-400 text-gray-900"
                        : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    {darkMode ? (
                      <FaSun className="h-6 w-6 mr-4" />
                    ) : (
                      <FaMoon className="h-6 w-6 mr-4" />
                    )}
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div
          className={`mt-8 pt-4 border-t ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div
            className={`flex items-center mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <FaEnvelope className="mr-2" />
            <span className="text-sm">info@jayasinghe.com</span>
          </div>
          <div
            className={`flex items-center mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <FaPhone className="mr-2" />
            <span className="text-sm">+94 11 234 5678</span>
          </div>
          <div
            className={`flex items-center ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <FaClock className="mr-2" />
            <span className="text-sm">
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <Outlet />
         
      </div>
    </div>
  );
}

export default Layout;
