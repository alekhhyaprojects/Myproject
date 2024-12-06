import React, { useState } from "react";

function App() {
  // Create state for each section to track if it's open or closed
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  // Functions to toggle the visibility of each section
  const toggleOpen1 = () => setIsOpen1(!isOpen1);
  const toggleOpen2 = () => setIsOpen2(!isOpen2);
  const toggleOpen3 = () => setIsOpen3(!isOpen3);
  const toggleOpen4 = () => setIsOpen4(!isOpen4);
  const toggleOpen5 = () => setIsOpen5(!isOpen5);

  return (
    <div style={{
      width: "80%", 
      margin: "20px auto", 
      padding: "20px", 
      borderRadius: "10px", 
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
      border: "1px solid #ddd"
    }}>
      

      {/* First Section */}
      <div onClick={toggleOpen1} style={sectionStyle}>
        {isOpen1 ? "- What is the Global Vaccine Congress 2025?" : "+ What is the Global Vaccine Congress 2025?"}
        {isOpen1 && (
          <div style={contentStyle}>
            <p>
              The Global Vaccine Congress 2025 is an international event focusing on advancements in vaccine research,
              development, and distribution. It will bring together scientists, policymakers, healthcare professionals,
              and industry leaders to discuss innovations and challenges in global vaccine initiatives.
            </p>
          </div>
        )}
      </div>
 <div onClick={toggleOpen2} style={sectionStyle}>
        {isOpen2 ? "- What is the main goal of the Congress?" : "+ What is the main goal of the Congress?"}
        {isOpen2 && (
          <div style={contentStyle}>
            <p>
              The main goal of the Global Vaccine Congress 2025 is to foster collaboration among global leaders in
              vaccine development and distribution, ensuring equitable access to vaccines worldwide.
            </p>
          </div>
        )}
      </div>
      <div onClick={toggleOpen3} style={sectionStyle}>
        {isOpen3 ? "- Who will attend the Congress?" : "+ Who will attend the Congress?"}
        {isOpen3 && (
          <div style={contentStyle}>
            <p>
              The Congress will be attended by scientists, healthcare professionals, policymakers, and representatives 
              from the pharmaceutical industry to discuss current challenges in the global vaccine landscape.
            </p>
          </div>
        )}
      </div>
 {/* Fourth Section */}
 <div onClick={toggleOpen4} style={sectionStyle}>
        {isOpen4 ? "- What topics will be covered?" : "+ What topics will be covered?"}
        {isOpen4 && (
          <div style={contentStyle}>
            <p>
              Topics at the Congress will include vaccine research innovations, public health strategies, pandemic preparedness, 
              and global health policy initiatives.
            </p>
          </div>
        )}
      </div>

      {/* Fifth Section */}
      <div onClick={toggleOpen5} style={sectionStyle}>
        {isOpen5 ? "- When and where will it take place?" : "+ When and where will it take place?"}
        {isOpen5 && (
          <div style={contentStyle}>
            <p>
              The Global Vaccine Congress 2025 will take place in early April 2025 in Geneva, Switzerland, with a hybrid 
              format allowing both in-person and virtual attendance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const sectionStyle = {
  margin: "20px 0",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
};

const contentStyle = {
  marginTop: "10px",
  padding: "10px",
  fontSize: "16px",
  borderLeft: "4px solid #ddd",
  backgroundColor: "#fff",
};

export default App;

