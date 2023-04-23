import { createContext,useContext } from 'react';
import { Result } from '../lib/api';




interface ContextProps {
    games: Result[];
    loading: boolean;
    error: string;
}


export const GameContext = createContext({} as ContextProps);


export function useGameContext(){

const context = useContext(GameContext);
if(!context){

throw new Error('useContext must be used within a GameContextProvider')
}

return context;
}