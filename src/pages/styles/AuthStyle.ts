import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333333;
  padding-top: 50px;

  @media (max-width: 500px) {
    padding-top: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 420px;
  margin: auto;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  padding: 20px 25px;

  @media (max-width: 500px) {
    padding: 15px;
    border: none;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;

  span {
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    left: 10px;
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: #2f80ed;
  color: #fff;
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  font-weight: 500;
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  @media (max-width: 500px) {
    margin-top: 25px;
    .icon_wrapper {
      margin-top: 20px;
    }
  }

  .icon_wrapper {
    display: flex;
    margin-top: 15px;
    span {
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0px 15px;
      border: 1px solid #828282;
      display: flex;
      cursor: pointer;
      transition: all 0.25s ease-in-out;
      :hover {
        border: 1px solid #2f80ed;
        svg {
          color: #2f80ed;
        }
      }

      svg {
        transition: all 0.25s ease-in-out;
        margin: auto;
        color: #828282;
        font-size: 20px;
      }
    }
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
  display: block;
  margin-bottom: 10px;
`;
