export default (state = [], action) => {
    switch (action.type) {
        case 'MEMBERS_LOADING_FULFILLED':
        return [
            ...state,
            ...action.payload,
        ];
        default:
        return state
    }
}