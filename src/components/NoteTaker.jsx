import React from "react";

const NoteTaker = ({
  note,
  setNote,
  onSave,
  onClear,
  warning,
  darkMode,
  language,
  translations,
}) => {
  const textAreaStyle = {
    width: "100%",
    minHeight: "100px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    resize: "vertical",
    fontFamily: "monospace",
    backgroundColor: darkMode ? "#1e1e1e" : "#68338a",
    color: "#eee",
    border: darkMode ? "1px solid #555" : "1px solid #ccc",
  };

  const buttonContainerStyle = {
    marginTop: "10px",
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor: darkMode ? "#2a2a2a" : "#68338a",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const warningStyle = {
    color: "#fbbf24",
    margin: "30px 0",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <div>
      <textarea
        className="purple-placeholder"
        placeholder={translations[language].placeholder}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        style={{
          ...textAreaStyle,
          overflow: "hidden",
        }}
      />

      <div style={buttonContainerStyle}>
        <button onClick={onSave} style={buttonStyle}>
          {translations[language].saveButton}
        </button>
        <button onClick={onClear} style={buttonStyle}>
          {translations[language].clearButton}
        </button>
      </div>

      {warning && <div style={warningStyle}>{warning}</div>}
    </div>
  );
};

export default NoteTaker;
