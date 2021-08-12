import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 95%;
  max-width: 1200px;
  margin: auto;
`;

export const Content = styled.div`
  padding: 18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  position: relative;
  .button {
    background-color: transparent;
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      object-fit: cover;
    }

    & > span,
    & > svg {
      @media (max-width: 500px) {
        display: none;
      }
    }

    & > span {
      color: #e0e0e0;
      margin-left: 10px;
      font-size: 12px;
      font-weight: 600;
    }

    & > svg {
      color: #e0e0e0;
      margin-left: 10px;
      font-size: 20px;
    }
  }
`;
