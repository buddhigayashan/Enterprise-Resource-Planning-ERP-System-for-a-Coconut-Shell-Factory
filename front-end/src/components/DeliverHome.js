import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ChatBox from "../chat/ChatBox";
const DeliverHome = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Navigate to the profile page when the button is clicked
    navigate("/profile");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#f0f8ff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        style={{
          color: "#4682B4",
          fontSize: "3rem",
          fontWeight: "bold",
          letterSpacing: "1.5px",
        }}
      >
        Welcome to Deliver Home
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        style={{
          color: "#696969",
          fontSize: "1.2rem",
          margin: "20px 0",
        }}
      >
        Your one-stop solution for all your delivery needs.
      </motion.p>
      <ChatBox />
      {/* My Profile Button */}
      <motion.div
        onClick={handleProfileClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#4682B4",
          color: "#fff",
          padding: "15px 30px",
          borderRadius: "10px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          fontSize: "1.2rem",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        My Profile
      </motion.div>
    </motion.div>
  );
  
};

export default DeliverHome;
