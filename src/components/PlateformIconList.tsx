import { HStack, Icon, Text } from "@chakra-ui/react";
import {FaWindows, FaPlaystation, FaXbox, FaApple,FaLinux,FaAndroid} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md"
import {SiNintendo} from "react-icons/si"
import {BsGlobe} from "react-icons/bs"
import { IconType } from "react-icons";
import { EsrbRating } from "../lib/api";

interface PlateformIconListProps {
    platforms: EsrbRating[]

}


const PlateformIconList = ({platforms}:PlateformIconListProps) => {

    const iconMap:{
        [key:string]:IconType
    } = {
        "pc": FaWindows,
        "playstation": FaPlaystation,
        "xbox": FaXbox,
        "ios": FaApple,
        "linux": FaLinux,
        "android": FaAndroid,
        "nintendo": SiNintendo,
        "iphone": MdPhoneIphone,
        "web": BsGlobe
    }



  return (
	
	<HStack marginY={1}>
        {platforms.map((platform) => (
            <Icon as={iconMap[platform.slug]} key={platform.id} />
         ))}	
            </HStack>
);
}
export default PlateformIconList