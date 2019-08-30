import React from 'react'
import {connect} from 'react-redux'
import { startSetCategory } from '../../redux/actions/category';
import _ from 'lodash'
import {startSetEvent} from '../../redux/actions/event'
import {Link} from 'react-router-dom'
class ListEvents extends React.Component{
   
    
    render(){
    return(
        <div>
            {_.isEmpty(this.props.categories)?(<p>Loading</p>):
                (<div>
                    <h3>Categories</h3>
                <ul>
                {this.props.categories.map(category => {
                     return <li key={category._id}>{category.name}</li>
                })}
            </ul>
            <h3>Events</h3>
            <ul>
                {this.props.events.map(event => {
                     return <li key={event._id}><Link>{event.name}</Link></li>
                })}
            </ul>
            </div>
                ) }
            
        </div>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        events:state.events
    }
}

export default connect(mapStateToProps)(ListEvents)