import styled from "styled-components";

export const LoaderStyles = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid red;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
