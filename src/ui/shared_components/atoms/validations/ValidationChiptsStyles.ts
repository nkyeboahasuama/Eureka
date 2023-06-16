import styled from "styled-components";

export const BaseValidationChip = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const ApprovedChip = styled(BaseValidationChip)`
  background-color: #03c988;
  /* color: #03c988; */
  font-weight: 500;
`;

export const RejectedChip = styled(BaseValidationChip)`
  background-color: #cd1818;
  font-size: 50px;
`;

// interface ChipVariantsTypes {
//   [key: string]: any;
// }

// export const chipVariants: ChipVariantsTypes = {
//   open: openChip,
//   closed: closedChip,
// };
