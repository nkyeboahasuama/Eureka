import styled from "styled-components";

export const BaseValidationChip = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 13px;
  text-align: center;
`;

export const ApprovedChip = styled(BaseValidationChip)`
  background-color: #03c988;
`;

export const RejectedChip = styled(BaseValidationChip)`
  background-color: #cd1818;
`;
