import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { GameContext } from './GameContext';
import { GameReducer } from './GameReducer';
import api from '../services/api-client';
import { Result, Welcome } from '../lib/api';
import { useAsync } from './fetchReducer/useAsync';




export interface GameState {
games: Result[];
loading: boolean;
error: string;
}

const Game_INITIAL_STATE: GameState = {

games:[],
loading: false,
error: '',
};
export const GameProvider: FC<PropsWithChildren> = ({ children }) => {
const [state, dispatch] = useReducer(GameReducer, Game_INITIAL_STATE);


useEffect(()=>{
 
        
dispatch({
        type: "[Game] -Pending",
     
});
const controller = new AbortController();

api.get<Welcome>('/games').then((response)=>{
   
dispatch({ type: '[Game] - GetGames', payload: 
    
        response.data.results,
    
  
 });
}
).catch((error)=>{
       
dispatch({ type: '[Game] - GetGamesError', payload: error.message });
})

return () => {
controller.abort();
}

},[])

return (
<GameContext.Provider
value={{
...state
}}>
{children}
</GameContext.Provider>
);
};