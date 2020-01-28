import React from 'react'
import Songlist from '../components/songList'
import Songdetals from '../components/songdatails'
// import songdatails from '../components/songdatails'
function App(){
return(
    <div className="ui container grid">
        <div className="ui row">
            <div className="column eight wide">
        <Songlist/>
        </div>
        <div className="column eight wide">
            <Songdetals/>
        
        </div>
        </div>
        </div>
)

}

export default App;