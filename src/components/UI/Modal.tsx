import { FC } from "react";
import styled from "styled-components";

const StyledModalBackground = styled.div`
  overflow: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

const Modal = (props: any) => {
  return <StyledModalBackground onClick={props.clickHandler} />;
};

export default Modal;
