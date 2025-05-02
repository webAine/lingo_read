import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      card: string;
      cardText: string;
      cardHeading: string;
      text: string;
      heading: string;
      accent: string;
      accentHover: string;
      border: string;
      error: string;
      success: string;
    };
    fonts: {
      body: string;
      heading: string;
      button: string;
      title: string;
    };
  }
}
