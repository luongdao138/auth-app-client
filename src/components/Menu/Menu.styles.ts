import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1000;
  right: 0;
  top: 45px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  padding: 10px;
`;

export const List = styled.ul`
  a {
    display: flex;
    align-items: center;
    width: 100%;
    transition: all 0.25s ease-in-out;
    padding: 10px;
    width: 150px;
    border-radius: 8px;
    color: #4f4f4f;
    font-weight: 500;
    font-size: 12px;

    &:hover {
      background-color: #f2f2f2;
    }

    svg {
      margin-right: 10px;
      font-size: 20px;
    }
  }
`;
export const Divider = styled.div`
  width: 100%;
  background-color: #e1e1e1;
  height: 1px;
  margin: 5px 0;
`;
