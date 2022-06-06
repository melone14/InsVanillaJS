import DisplayBreweries from 'components/organisms/DisplayBreweries/DisplayBreweries';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DisplayBreweries itemsPerPage={10} />
    </ThemeProvider>
  </>
);

export default Root;
