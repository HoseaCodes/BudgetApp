import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function FontAwesomeIcon({ name, size, color }) {
  return <FontAwesome name={name} size={size} color={color} />;
}

export default FontAwesomeIcon;