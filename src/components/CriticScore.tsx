import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
    score: number;
}


const CriticScore = ({score}:CriticScoreProps) => {

let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize={"14px"} padding={1} borderRadius={"4px"} colorScheme={color} fontWeight={"bold"}>{score}</Badge>
  )
}
export default CriticScore