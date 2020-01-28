import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'
class SongList extends React.Component{
    renderList(){
   return this.props.Songs.map((song)=>{
    return(
        <div className="item" key={song.tittle}>
            
            <div className="right floated content">
            <button className="ui button primary" onClick={()=>this.props.selectSong(song)}>buttion</button>
            </div>   
            <div className="content">{song.tittle}</div> 
         </div>
    )
   })
    }
render() {
    // console.log(this.props)
    return(
        <div className="ui divided list">
            {this.renderList()}
        </div>
    )
}

}


//**get the state */
const mapSStoreProp=(state)=>{ 
    console.log(state)
return{
    Songs:state.Songs
}
}

export default connect(mapSStoreProp,{selectSong})(SongList)