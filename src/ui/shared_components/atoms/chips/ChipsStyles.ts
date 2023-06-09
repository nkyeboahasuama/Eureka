import styled from "styled-components";

export const BaseChip = styled.button`
  width: 55px;
  height: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 11px;
`;

const openChip = styled(BaseChip)`
  background-color: rgba(3, 201, 136, 0.1);
  color: #03c988;
  font-weight: 500;
`;

const closedChip = styled(BaseChip)`
  background-color: rgba(205, 24, 24, 0.1);
  color: #cd1818;
  font-weight: 500;
`;

interface ChipVariantsTypes {
  [key: string]: any;
}

export const chipVariants: ChipVariantsTypes = {
  open: openChip,
  closed: closedChip,
};
