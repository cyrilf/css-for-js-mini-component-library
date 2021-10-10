import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>
        {displayedValue}
        <SelectIcon id="chevron-down" size={24} strokeWidth={2}></SelectIcon>
      </CustomSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;
const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const CustomSelect = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 16px;
  padding-right: 42px;
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    /*Found some answers about native outline on SO:
        - https://stackoverflow.com/a/38571103
        - https://stackoverflow.com/a/38498539
    */
    outline: 1px dotted #212121;
    outline: auto 2px Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 0;
  right: 8px;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`;

export default Select;
