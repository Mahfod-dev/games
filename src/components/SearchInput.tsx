import { useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";


interface SearchInputProps {
    onSearch: (value: string) => void;
}


const SearchInput = ({onSearch}:SearchInputProps) => {

 const refInput = useRef<HTMLInputElement>(null)

  return (
		<form onSubmit={
            (e) => {

                if(!refInput.current) return;

                e.preventDefault();
                onSearch(refInput.current.value)

                if(refInput.current) refInput.current.value = '';
            }
        }>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				<Input
                    ref={refInput}
					borderRadius={20}
					placeholder='Search games...'
					variant={'filled'}
				/>
			</InputGroup>
		</form>
  );
}
export default SearchInput


