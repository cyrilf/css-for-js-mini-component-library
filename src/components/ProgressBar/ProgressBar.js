/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 24,
    radius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size, className }) => {
  const style = STYLES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      className={className}
      style={{
        "--height": style.height + "px",
        "--radius": style.radius + "px",
        "--padding": style.padding + "px",
      }}
    >
      <Bar
        style={{
          "--width": value + "%",
        }}
      ></Bar>
      <VisuallyHidden>{value} %</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  height: var(--height);
  border-radius: var(--radius);
  overflow: hidden;
  padding: var(--padding);
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  border-radius: var(--radius) 0 0 var(--radius);
  height: 100%;
`;

export default ProgressBar;
