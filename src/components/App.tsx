import { Grid, GridItem } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import JourneysGrid from './Journey/JourneysGrid';
import StationsGrid from './Station/StationsGrid';

function App() {
  return (
    <Router>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "main"`,
          lg: `"nav nav" "main"`,
        }}
        templateColumns={{
          base: '1fr',
          md: '1fr',
          lg: '1fr',
        }}
        templateRows={{
          base: '50px 1fr',
          md: '70px 1fr',
          lg: '70px 1fr',
        }}>
        <GridItem area='nav' pos='fixed' top={0} w='100%' zIndex={10}>
          <NavBar />
        </GridItem>

        <GridItem area='main'>
          <Routes>
            <Route path='/' element={<JourneysGrid />} />
            <Route path='/stations' element={<StationsGrid />} />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
