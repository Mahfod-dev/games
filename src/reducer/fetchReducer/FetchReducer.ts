import { AsyncAction, AsyncState } from './FetchTypeProvider';

export function fetchReducer<DataType>(
	state: AsyncState<DataType>,
	action: AsyncAction<DataType>
): AsyncState<DataType> {
	switch (action.type) {
		case 'pending': {
			return {
				status: 'pending',
				data: null,
				error: null,
			
			};
		}
		case 'resolved': {
		
			return {
				status: 'resolved',
				data: action.data,
				error: null,
			
			};
		}
		case 'rejected': {
	
			return {
				status: 'rejected',
				data: null,
				error: action.error,
		
			};
		}

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}
