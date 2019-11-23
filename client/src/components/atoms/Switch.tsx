import React from "react";
import styled from "styled-components";

interface SwitchProps {
  isActive?: boolean;
  onClick?: () => void;
};

const SwitchContainer = styled.div<SwitchProps>`

width: auto;
height: auto;
display: flex;
justify-content: center;
align-items: center;

.react-switch-checkbox {
  height: 0;
  width: 0;
  visibility: hidden;
}

.react-switch-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 32px;
  height: 12px;
  background: ${(p: SwitchProps) => p.isActive ? "#f69174" : "#bbbbbb"};
  border-radius: 32px;
  position: relative;
}
.react-switch-label .react-switch-button {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: ${(p: SwitchProps) => p.isActive ? "#ee4465" : "#f69174"};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
}

.react-switch-checkbox:checked + .react-switch-label .react-switch-button {
  left: 100%;
  transform: translateX(-100%);
}

.react-switch-label:active .react-switch-button {
  width: 32px;
}
`;

const Switch: React.FC<SwitchProps> = ({isActive, onClick}) => {
  const [active, toggle] = React.useState(isActive);
  return(
    <SwitchContainer isActive={active}>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked={active}
        onChange={() => toggle(!active)}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </SwitchContainer>
  );
};

export default Switch;