import GlobalStyles from "./styles/global";
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

export default App;
