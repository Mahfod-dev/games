import { useState } from 'react';
import { Box, Flex, Grid,GridItem,HStack,Heading,Show } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import './App.css'
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Result } from './lib/api.genre';
import { PlatformResult } from './lib/api.plateform';
import PlateformSelector from './components/PlateformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
	genre: Result | null;
	plateform: PlatformResult | null;
	sort: string;
	search: string;
}


function App() {

const [query, setQuery] = useState<GameQuery>({} as GameQuery)
const onSearch = (value: string) => {
	setQuery((prev) => ({
		...prev,
		search: value,
	}));
};
	
return (
	<Grid
		templateAreas={{
			base: '"nav" "main"',
			lg: '"nav nav" "aside main"',
		}}
		templateColumns={{
			base: '1fr',
			lg: '200px 1fr',
		}}
	>
		<GridItem gridArea='nav'>
			<Navbar onSearch={onSearch} />
		</GridItem>
		<Show above='lg'>
			<GridItem gridArea='aside' paddingX={5}>
				<GenreList
					onSelected={(genre) => {
						setQuery((prev) => ({
							...prev,
							genre,
						}));
					}}
					selectedGenre={query.genre}
				/>
			</GridItem>
		</Show>
		<GridItem gridArea='main'>
			<Box paddingLeft={2}>
				<GameHeading gameQuery={query} />

				<Flex marginBottom={2}>
					<Box marginRight={5}>
						<PlateformSelector
							selectedPlateform={query.plateform}
							onFilterPlateform={(plateform) => {
								setQuery((prev) => ({
									...prev,
									plateform,
								}));
							}}
						/>
					</Box>
					<SortSelector
						sortOrder={query.sort}
						onSelectSortOrder={(sort) => {
							setQuery((prev) => ({
								...prev,
								sort,
							}));
						}}
					/>
				</Flex>
			</Box>
			<GameGrid query={query} />
		</GridItem>
	</Grid>
);
}

export default App
