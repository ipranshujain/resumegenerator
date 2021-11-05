import { useState } from "react";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";
import { fonts } from "../utils/inputUtil";
const styles = reactCSS({
  default: {
    swatch: {
      padding: "5px",
      background: "#fff",
      borderRadius: "1px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      display: "inline-block",
      cursor: "pointer",
    },
    popover: {
      position: "absolute",
      zIndex: "2",
    },
    cover: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  },
});
export default function ChangeTheme({ theme, handleChange, handleFontChange }) {
  const [displayColorPickers, setDisplayColorPickers] = useState([
    { name: "primaryColor", isShow: false, label: "Change Primary Color" },
    { name: "secondaryColor", isShow: false, label: "Change Secondary Color" },
    {
      name: "backgroundColor",
      isShow: false,
      label: "Change Background Color",
    },
  ]);
  const [displayfontPickers, setDisplayfontPickers] = useState([
    { name: "primaryFont", isShow: false, label: "Change Primary Font Family" },
    {
      name: "secondaryFont",
      isShow: false,
      label: "Change Secondary Font Family",
    },
  ]);
  const handleClose = (idx) => {
    displayColorPickers[idx].isShow = false;
    setDisplayColorPickers([...displayColorPickers]);
  };
  const handleClick = (idx) => {
    displayColorPickers[idx].isShow = !displayColorPickers[idx].isShow;
    setDisplayColorPickers([...displayColorPickers]);
  };

  return (
    <div className="change-theme">
      {displayColorPickers.map((obj, idx) => {
        const field = obj.name;
        const isShow = obj.isShow;
        return (
          <div key={idx}>
            <div
              className="change-theme-element"
              onClick={() => handleClick(idx)}
            >
              <div
                className="color-pick"
                style={{ background: `${theme[field]}` }}
              />
              <div className="color-pick-label">{obj.label}</div>
            </div>
            {isShow ? (
              <div style={styles.popover}>
                <div style={styles.cover} onClick={() => handleClose(idx)} />
                <SketchPicker
                  color={theme[field]}
                  onChange={(color) => handleChange(color, field)}
                />
              </div>
            ) : null}
          </div>
        );
      })}
      {displayfontPickers.map((obj, idx) => {
        return (
          <select
            key={idx}
            className="change-theme-element font-select"
            value={`${theme[obj.name]}`}
            onChange={(e) => handleFontChange(e, obj.name)}
          >
            {fonts.map((font, idx) => {
              return (
                <option key={idx} className="font-option" value={font}>
                  {font}
                </option>
              );
            })}
          </select>
        );
      })}
    </div>
  );
}
