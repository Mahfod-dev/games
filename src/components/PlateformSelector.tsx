import { useEffect } from "react"
import { Button, Menu,MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { useAsync } from "../reducer/fetchReducer/useAsync"
import { PlateformAPI,PlatformResult } from "../lib/api.plateform"
import GameCardSkeleton from "./GameCardSkeleton"


interface PlateformSelectorProps {
    onFilterPlateform: (plateform: PlatformResult) => void;
    selectedPlateform: PlatformResult | null
}

const PlateformSelector = ({onFilterPlateform,selectedPlateform}:PlateformSelectorProps) => {

const {data, error, status, run} = useAsync<PlateformAPI>()


useEffect(() => {


    run('/platforms/lists/parents')
},[])

switch (status) {
    case 'idle':
        return <Spinner/>
    case 'pending':
        return <GameCardSkeleton/>
    case 'rejected':
        throw error
    case 'resolved':
   return <Menu>
		<MenuButton as={Button} rightIcon={<BsChevronDown />}>
			{selectedPlateform?.name || 'Plateform'}
		</MenuButton>
		<MenuList>
			{
                data?.results.map((plateform) => (
                    
                    <MenuItem key={plateform.id}
                    onClick={() => {
                        onFilterPlateform(plateform)
                    }}

                    >{plateform.name}</MenuItem>
                ))
            }
		</MenuList>
	</Menu>;
    default:
        throw new Error('Should be impossible')

}
}
export default PlateformSelector