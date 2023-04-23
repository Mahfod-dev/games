import { Result,ResultListGenre } from "../lib/api.genre"
import { HStack, Image, List, ListItem, Text,Spinner, Button, Heading } from "@chakra-ui/react"
import { getCroppedImgUrl } from "../services/image-crop"
import genres from "../data/genres"

interface GenreListProps {
  onSelected: (genre: Result) => void,
  selectedGenre: Result | null
}


const GenreList = ({selectedGenre,onSelected}:GenreListProps) => {

if(!genres){
	  return <Spinner />
	    }

// const { data:genres, error, status } = useAsync<ResultListGenre>()

// useEffect(() => {

// run('/genres')

// },[run])

// switch (status) {
//   case 'idle':
//     return <>Wait</>
//   case 'pending':
//     return <Spinner />
//   case 'rejected':
//     throw error
//   case 'resolved':
//     return (
return	<>
  <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
			<List>
				{genres?.map((genre) => (
					<ListItem key={genre.id} padding={'5px'}>
						<HStack>
							<Image
								src={getCroppedImgUrl(genre.image_background)}
								alt={genre.name}
								boxSize='32px'
							/>
							<Button
								whiteSpace='normal'
								textAlign='left'
								fontWeight={
									selectedGenre?.id === genre.id
										? 'bold'
										: 'normal'
								}
								variant={'link'}
								onClick={() => {
									onSelected(genre);
								}}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	// );
  
//   default:
//   throw new Error('Should be impossible')
// }


 
}
export default GenreList