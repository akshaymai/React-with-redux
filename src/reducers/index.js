
import {combineReducers} from 'redux';

const songReducer=()=>{
    return[

        {tittle:'Mahi ra',duration:'2:21'},
        {tittle:'Marea Dil vi kitna pagal ha ',duration:'6:21'},
        {tittle:'jadu tari nazar',duration:'7:21'},
        {tittle:'Dhera dera sa mara jiggadi ana',duration:'4:21'},
        {tittle:'Dil mara char deya to',duration:'4.30'}

    ]
}



const seletedSongReducer=(seletedSong=null,action)=>{
if(action.type==='SELECT_SONG')
{
return action.payload
}
return seletedSong
}


export default combineReducers({

    Songs:songReducer,
    selectsong:seletedSongReducer
})