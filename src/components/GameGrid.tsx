import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";



const GameGrid = () => {
    const { games ,error} = useGames();
    
    const gameList = games.map(game => (<li key={game.id}>{game.name}</li>));
    console.log(gameList);
    
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {gameList}
    </ul>
    </>
  )
}

export default GameGrid