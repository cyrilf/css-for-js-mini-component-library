import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconSize: 16,
    fontSize: 14,
    borderBottomSize: 1,
    height: 24,
  },
  large: {
    iconSize: 24,
    fontSize: 18,
    borderBottomSize: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const style = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} size={style.iconSize}></IconWrapper>
      <TextInput
        style={{
          "--border-bottom-width": style.borderBottomSize + "px",
          "--font-size": style.fontSize / 16 + "rem",
          "--width": width + "px",
          "--height": style.height / 16 + "rem",
        }}
        {...delegated}
      ></TextInput>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-weight: 700;
  font-size: var(--font-size);
  padding-left: var(--height);
  border: 0;
  border-bottom: var(--border-bottom-width) solid ${COLORS.black};
  outline-offset: 2px;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
