import { useCallback, useReducer } from 'react';
import { fetchReducer } from './FetchReducer';
import { AsyncAction, AsyncState } from './FetchTypeProvider';
import axios, { AxiosRequestConfig } from 'axios';
import api from '../../services/api-client';

export function useAsync<DataType>() {
	const [state, dispatch] = useReducer<
		React.Reducer<AsyncState<DataType>, AsyncAction<DataType>>
	>(fetchReducer, {
		status: 'idle',
		data: null,
		error: null,
	});

	const { data, error, status } = state;

	const run = useCallback(
		(type: string, requestConfig?: AxiosRequestConfig) => {
			dispatch({ type: 'pending' });
			const controller = new AbortController();
			api.get(type, {
				signal: controller.signal,
				...requestConfig,
			})
				.then((res) => {
					;
					dispatch({ type: 'resolved', data: res.data });
				})
				.catch((err) => {
					if (err.name === 'CanceledError') return;
					dispatch({ type: 'rejected', error: err });
				});
				return () => controller.abort();

		},
		[]
	);

	return {
		error,
		status,
		data,
		run,
	};
}
