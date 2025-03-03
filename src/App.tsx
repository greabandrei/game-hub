import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";

function App() {
  const [itIs, setItIs] = useState(true);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <Button onClick={() => setItIs(!itIs)}>It Is</Button>
        </GridItem>
      </Show>

      <GridItem area="main">{itIs ? <GameGrid /> : <h1>Is Not!</h1>}</GridItem>
    </Grid>
  );
}

export default App;
