import { ActionTypes } from '../../constants/action-types';

const initialState = {
	products: {},
};

export const selectedProductsReducer = (
	state = initialState,
	{ type, payload }
) => {
	switch (type) {
		case ActionTypes.SELECTED_PRODUCT:
			return { ...state, ...payload };
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			return {};
		default:
			return state;
	}
};
