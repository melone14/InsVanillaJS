import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
}
*, *::after,*::before{
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
 
body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.black};
    
    a, button {
        font-family: 'Open Sans', sans-serif;
    }
}
`;
