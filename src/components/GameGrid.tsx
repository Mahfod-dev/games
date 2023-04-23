import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useAsync } from "../reducer/fetchReducer/useAsync";
import { useEffect } from "react";
import { Welcome } from "../lib/api";
import { GameQuery } from "../App";


interface GameGridProps{
	query:GameQuery
}

const skeletons = [1, 2, 3, 4, 5, 6];
const GameGrid = ({query}:GameGridProps) => {

const {data, error ,status,run} = useAsync<Welcome>()

useEffect(()=>{
const controller = new AbortController();
run('/games',{signal:controller.signal,params:{genres:query.genre?.id,platforms:query.plateform?.id,
ordering:query.sort,
search:query.search
}})

return () => {
controller.abort();
}
},[query,run])


switch(status){
case 'idle':
return (

		<SimpleGrid
			columns={{ sm: 1, md: 3, lg: 4, xl: 5 }}
			padding='10px'
			spacing={6}
		>
			{skeletons.map((skeleton) => (
				<GameCardSkeleton key={skeleton} />
			))}
		</SimpleGrid>

);
case 'pending':
return (
	<>
		<SimpleGrid
			columns={{ sm: 1, md: 3, lg: 4, xl: 5 }}
			padding='10px'
			spacing={6}
		>
			{skeletons.map((skeleton) => (
				<GameCardSkeleton key={skeleton} />
			))}
		</SimpleGrid>
	</>
);
case 'resolved':
return (
<>
<SimpleGrid     columns={{ sm: 1, md: 3, lg: 4, xl: 5 }}
      padding="10px"
      spacing={6}>
{data?.results.map((game) => (
<GameCard game={game} key={game.id} />
))}
</SimpleGrid>
</>
)
case 'rejected':
 throw error
default:
	throw new Error('This should be impossible');
}

}
export default GameGrid