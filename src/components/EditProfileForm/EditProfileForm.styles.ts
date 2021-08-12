import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd50;
  border-radius: 12px;
  margin-top: 10px;
  @media (max-width: 800px) {
    border: none;
  }
`;
export const Content = styled.div`
  width: 100%;
  padding: 30px;
  padding-right: 0;
  max-width: 400px;

  @media (max-width: 500px) {
    padding: 15px;
  }
`;

export const Header = styled.div`
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
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const Label = styled.span`
  font-weight: 500;
  color: #e0e0e0;
  font-size: 13px;
  margin-bottom: 4px;
  display: block;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  outline: none;
  resize: none;
  background-color: transparent;
  padding: 13px;
  font-size: 16px;
  font-weight: 400;
  color: #e0e0e0;
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: #2f80ed;
  color: #fff;
  /* width: 100%; */
  padding: 12px 20px;
  margin-top: 10px;
  font-weight: 500;
`;

export const ChangeImage = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;

  .image {
    position: relative;
    cursor: pointer;
    img {
      width: 72px;
      height: 72px;
      border-radius: 8px;
      object-fit: cover;
    }
    margin-right: 30px;

    .black,
    svg {
      position: absolute;
      transition: all 0.25s ease-in-out;
      opacity: 0;
      visibility: hidden;
    }
    :hover svg {
      opacity: 1;
      visibility: visible;
    }
    :hover .black {
      opacity: 1;
      visibility: visible;
    }

    .black {
      overflow: hidden;
      top: 0;
      left: 0;
      right: 0;
      bottom: 4px;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 8px;
    }

    svg {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      z-index: 20;
    }
  }

  .change {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    transition: all 0.25s ease-in-out;
    color: #e0e0e0;

    :hover {
      color: #2f80ed;
    }
  }
`;
