import { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { filterGroups, reset } from '../redux'


const Groups = (props) => {

    const searchInput = useRef(null);


    const [msg, setMsg] = useState('')

    useEffect(() => {
        searchInput.current.focus();
    }, [])


    const filterGroups = (val) => {
        if (val.length < 3) {
            setMsg('Please type in at least 3 characters to search')
        }

        else {
            setMsg('')
            props.filterGroups(val.toLowerCase())
        }
    }
    return (
        <>
            <div className="groups-container">
                <div>
                    <input
                        ref={searchInput}
                        placeholder="Group Title"
                        onChange={(e) => filterGroups(e.target.value)} />
                    <div style={{ color: 'red' }}>
                        {msg}
                    </div>

                </div>
                <div>
                    {props.groups.filteredGroups.map((group, i) => {
                        return (
                            <div key={i} className="group-card">
                                <h4>{group.title}</h4>
                                <p>{`${group.author.firstName} ${group.author.surname}`}</p>
                            </div>
                        )
                    })}
                    <div>
                        {!props.groups.filteredGroups.length && <p>No Results Found</p>}
                    </div>
                </div>
            </div>
        </>

    );
}

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        filterGroups: (val) => dispatch(filterGroups(val)),
        reset: () => dispatch(reset())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Groups);