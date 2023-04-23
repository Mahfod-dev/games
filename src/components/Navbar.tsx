import { HStack,Image } from "@chakra-ui/react"
import Logo from "../assets/Logo/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


interface NavbarProps {
	onSearch: (value: string) => void;
}

const Navbar = ({onSearch}:NavbarProps) => {
  return (
		<HStack  padding='10px'>
			<Image src={Logo} boxSize='60px' alt='Logo' />
			<SearchInput onSearch={onSearch} />
			<ColorModeSwitch />
		</HStack>
  );
}
export default Navbar