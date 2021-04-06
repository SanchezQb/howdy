import { FILTER_GROUPS, RESET } from './groupsActionTypes';
const initialState = {
    filteredGroups: [],
    groups: [
        {
            title: 'Learn Python programming',
            author: {
                firstName: 'Miguel',
                surname: 'De Cervantes'
            },
        },
        {
            title: 'Negotiations Study Group',
            author: {
                firstName: 'John',
                surname: 'Bunyan'
            },
        },
        {
            title: 'Jazz Improv Study Group',
            author: {
                firstName: 'Emily',
                surname: 'Brontë'
            },
        },
        {
            title: 'Business & Music Specialization',
            author: {
                firstName: 'Jonathan',
                surname: 'Swift'
            },
        },
        {
            title: 'Peer to Peer Songwriting',
            author: {
                firstName: 'Henry',
                surname: 'Fielding'
            },
        },
        {
            title: 'Playing Guitar Peer Study Group',
            author: {
                firstName: 'Laurence',
                surname: 'Sterne'
            },
        },
        {
            title: 'Meditation Discussion Group',
            author: {
                firstName: 'Jane',
                surname: 'Austen'
            },
        },


    ]
}
const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_GROUPS:
            return {
                ...state,
                filteredGroups: state.groups.filter(group => {
                    const groupTitle = group.title.toLowerCase()
                    return groupTitle.includes(action.payload)
                })
            }
        default: return state
    }
}

export default groupsReducer;