import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #333333;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-top: 20px;
`;

export const BackBtn = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  color: #2d9cdb;

  svg {
    font-size: 22px;
    margin-right: 2px;
  }
`;
