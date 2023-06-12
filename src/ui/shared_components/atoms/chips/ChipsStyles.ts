import styled from "styled-components";

export const BaseChip = styled.button`
  width: 50px;
  height: 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

const openChip = styled(BaseChip)`
  background-color: rgba(3, 201, 136, 0.1);
  color: #03c988;
  font-weight: 500;

  &:hover {
    background-color: rgba(3, 201, 136, 0.2);
    font-weight: 700;
  }
`;

const closedChip = styled(BaseChip)`
  background-color: rgba(205, 24, 24, 0.1);
  color: #cd1818;
  font-weight: 500;

  &:hover {
    background-color: rgba(205, 24, 24, 0.2);
    font-weight: 700;
  }
`;

export const chipVariants = {
  open: openChip,
  closed: closedChip,
};
