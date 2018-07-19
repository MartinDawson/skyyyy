export default (state = [], action) => {
    switch (action.type) {
        case 'MESSAGES_LOADING_FULFILLED':
        return [
            ...state,
            ...action.payload,
        ];
        default:
        return state
    }
}