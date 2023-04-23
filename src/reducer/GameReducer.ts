import { GameState } from './GameProvider';
import { Result } from '../lib/api';



type GameActionType =
| { type: '[Game] -Pending'}
| { type: '[Game] - GetGames', payload: Result[] }
| { type: '[Game] - GetGamesError', payload: string };



export const GameReducer = (state: GameState, action: GameActionType): GameState => {

switch (action.type) {
       case '[Game] -Pending':
                  return {
...state,
loading: true,
};     
case '[Game] - GetGames':
          
            return {
                 
...state,
games: action.payload,
loading: false,
};
      case '[Game] - GetGamesError':
           
            return {
...state,
games:[],
loading: false,
error: action.payload,

};


      default:
            return state;
};
};