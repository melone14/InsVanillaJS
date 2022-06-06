import DisplayBreweries from 'components/organisms/DisplayBreweries/DisplayBreweries'; // PaginatedItems,
import PaginatedItems from 'components/organisms/text';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DisplayBreweries itemsPerPage={10} />
      {/* <PaginatedItems itemsPerPage={10} /> */}
    </ThemeProvider>
  </>
);

export default Root;
