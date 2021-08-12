import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-top: 30px;
  border: 1px solid #bdbdbd50;
  border-radius: 12px;

  @media (max-width: 800px) {
    border: none;
  }
`;
export const Header = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    margin-right: 20px;
  }
  @media (max-width: 500px) {
    padding: 20px 15px;
  }
  .big {
    font-weight: 400;
    font-size: 20px;
    color: #e0e0e0;
  }
  .small {
    font-size: 13px;
    font-weight: 500;
    color: #828282;
  }

  button {
    border: 1px solid #828282;
    padding: 4px 20px;
    border-radius: 12px;
    background-color: transparent;
    color: #e0e0e0;
  }
`;
export const Content = styled.ul`
  img {
    width: 72px;
    height: 72px;
    border-radius: 8px;
    object-fit: cover;
  }

  li {
    border-top: 1px solid #bdbdbd50;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    .title {
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 500;
      color: #e0e0e080;
      flex: 1;
    }

    .value {
      font-size: 18px;
      color: #e0e0e0;
      font-weight: 500;
      line-height: 25px;
      flex: 2.5;
    }

    @media (max-width: 500px) {
      justify-content: space-between;
      padding: 20px 15px;
      .title {
        font-size: 11px;
      }
      .value {
        font-size: 14px;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-top: 20px;
  color: #e0e0e080;
  font-size: 13px;
  @media (max-width: 800px) {
    padding: 0px 15px;
  }
`;
