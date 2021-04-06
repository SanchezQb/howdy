import { FILTER_GROUPS, RESET } from './groupsActionTypes';


export const filterGroups = (searchKey) => {
    return {
        type: FILTER_GROUPS,
        payload: searchKey
    }
}


export const reset = () => {
    return {
        type: RESET,

    }
}

