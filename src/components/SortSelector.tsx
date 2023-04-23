import { Menu,MenuButton,Button,MenuList,MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"



interface SortOrder {
    sortOrder: string;
    onSelectSortOrder: (value: string) => void;
}


  const sortOrders = [
		{ value: '', label: 'Relevance' },
		{ value: '-added', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-rating', label: 'Average rating' },
  ];



const SortSelector = ({onSelectSortOrder,sortOrder}:SortOrder) => {
	  const currentSortOrder = sortOrders.find(
		(order) => order.value === sortOrder
	);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by {currentSortOrder?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map((sortOrder) => (
					<MenuItem
						key={sortOrder.value}
						onClick={() => onSelectSortOrder(sortOrder.value)}
					>
						{sortOrder.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
}
export default SortSelector