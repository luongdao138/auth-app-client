import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Noto Sans', sans-serif;
    }

    body {
      min-height: 100vh;
      background-color: #333333;
    }

    button {
      outline: none;
      cursor: pointer;
      border: none;
    }

    a {
      text-decoration: none;
    }

    li {
     list-style: none;
    }
`;

interface InputProps {
  icon?: boolean;
  color?: string;
  placeholder_color?: string;
  border_color?: string;
  font_size?: number;
  font_weight?: number;
  background_color?: string;
  width?: string;
}

interface TextProps {
  color?: string;
  font_weight?: number;
  font_size?: number;
  line_height?: number;
}

interface IconProps {
  font_size?: number;
  color?: string;
}

export const Input = styled.input`
  outline: none;
  border: ${({ border_color }: InputProps) =>
    `1px solid ${border_color || '1px solid #BDBDBD'}`};
  border-radius: 8px;
  font-size: ${({ font_size }: InputProps) => `${font_size || 16}px`};
  color: ${({ color }: InputProps) => color || '#e0e0e0'};
  background-color: ${({ background_color }: InputProps) =>
    background_color || 'transparent'};
  padding: ${({ icon }: InputProps) => (icon ? '13px 13px 13px 36px' : '13px')};
  font-weight: ${({ font_weight }: InputProps) => font_weight || 400};
  width: ${({ width }: InputProps) => width || '100%'};

  ::place-holder {
    color: ${({ placeholder_color }: InputProps) =>
      placeholder_color || '#828282'};
  }
`;

export const Typography = styled.p`
  font-size: ${({ font_size }: TextProps) => `${font_size || 16}px`};
  font-weight: ${({ font_weight }: TextProps) => font_weight || 400};
  color: ${({ color }: TextProps) => color || '#ffffff'};
  line-height: ${({ line_height }: TextProps) => `${line_height || 22}px`};
`;

export const Icon = styled.span`
  font-size: ${({ font_size }: IconProps) => `${font_size || 16}px`};
  color: ${({ color }: IconProps) => color || '#ffffff'};
`;

export default GlobalStyle;
