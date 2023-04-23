import { Card, Image,CardBody, Heading, HStack } from "@chakra-ui/react"
import { Result } from "../lib/api"
import PlateformIconList from "./PlateformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImgUrl } from "../services/image-crop";
import Emoji from "./Emoji";

interface GameCardProps {
    game: Result;
}


const GameCard = ({game}:GameCardProps) => {
    
  return (
		<Card borderRadius={10} overflow='hidden'>
			<Image src={getCroppedImgUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent={'space-between'}>
					<PlateformIconList
						platforms={game.parent_platforms.map(
							({ platform }) => platform
						)}
					/>

					{/* {game.parent_platforms.map(({ platform }) => (
						<PlateformIconList
							key={platform.id}
							platform={platform}
						/>
					))} */}
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize='2xl'>{game.name}
				<Emoji rating={game.rating_top}/>
				</Heading>
			</CardBody>
		</Card>
  );
}
export default GameCard