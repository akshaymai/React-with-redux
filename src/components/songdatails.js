import React from 'react'
import {connect} from 'react-redux'

function songDetails({selectsongss}){
if(!selectsongss)
{
    return <div>Select a song</div>
}
     
    return(
    
        <div>
  <h1>  tittle:    {selectsongss.tittle}</h1> 
  <br/>
  <h2>  duration:{selectsongss.duration}</h2>
        </div>
    )
}




const mapstatetoprops=(state)=>{


    return {selectsongss:state.selectsong}
}



export default connect(mapstatetoprops) (songDetails);
