export type AsyncState<DataType> =
	| {
			status: 'idle';
			data?: null;
			error?: null;
		
	  }
	| {
			status: 'pending';
			data?: null;
			error?: null;
			
	  }
	| {
			status: 'resolved';
			data: DataType;
			error: null;
			
	  }
	| {
			status: 'rejected';
			data: null;
			error: Error;
		
	  };

export type AsyncAction<DataType> =
	| { type: 'reset' }
	| { type: 'pending'}
	| { type: 'resolved'; data: DataType }
	| { type: 'rejected'; error: Error };
