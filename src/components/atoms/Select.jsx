import * as React from "react";
import SelectMenu, { components } from "react-select";

const colourStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "#F5F6FA",
    borderWidth: "1px",
    borderColor: isFocused ? "var(--primary-color)" : "#fff",
    boxShadow: "none",
    height: "36px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all .25s ease-in-out",
    maxWidth: "432px",
    zIndex: '1',
    ":hover": {
      borderColor: "var(--primary-color)",
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //   const color = chroma(data.color);
    return {
      ...styles,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        //   backgroundColor: !isDisabled
        //     ? isSelected
        //       ? data.color
        //       : color.alpha(0.3).css()
        //     : undefined,
      },
    };
  },
  input: (styles) => ({
    ...styles,
    width: "100%",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "14px",
    lineHeight: "20px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    fontSize: "14px",
    lineHeight: "20px",
  }),
};

export default function Select({
  placeholder,
  selectRef,
  options,
  onChange,
  required,
  value,
  ...rest
}) {
  return (
    <div id="select1">
      <SelectMenu
        className="basic-single"
        classNamePrefix="select"
        options={options}
        placeholder={placeholder}
        autosize={true}
        styles={colourStyles}
        ref={selectRef}
        openMenuOnFocus={true}
        isSearchable={false}
        onChange={onChange}
        value={value}
        input
        required
        components={{
          IndicatorSeparator: () => null,
        }}
        {...rest}
      />
    </div>
  );
}
