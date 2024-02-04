import styled from 'styled-components';
import { Field } from 'formik';



export const Label = styled.label`
  color: var(--black-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const StyledField = styled(Field)`
  display: flex;
  padding: 12px 10px;
  align-items: center;
  position: relative;
  width: 100%;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  background: #fff;
  color: #407bff;
  &::placeholder {
    color: #9ebbff;

    font-size: 16px;

    font-weight: 400;
    line-height: 1.25;
  }
  &:focus-visible {
    outline: none;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border: none;
  width: 100%;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:focus {
    box-shadow: 0px;
  }
`;


export const SvgStyled = styled.svg`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  fill: none;
  stroke: var(--black-color);
`;
export const InputWrapper = styled.div`
  position: relative;
`;
export const ErrorMsg = styled.div`
  font-size: 14px;
  color: red;
`;