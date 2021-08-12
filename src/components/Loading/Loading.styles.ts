import styled from 'styled-components';

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  border: 4px solid #e0e0e0;
  border-top: 4px solid #2d9cdb;
  animation: spin 0.8s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
