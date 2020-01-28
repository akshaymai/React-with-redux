// // import Redux from 'redux';
// // import { act } from 'react-dom/test-utils';
// // const {createStore,combineReducers}=Redux
// // ///**action creater */
// // const createPolicy=(Name,Amount)=>{
// // return {
// // type:'CREATE_POLICY',
// // playload:{
// //     Name:Name,
// //     Amount:Amount
// // }
// // }
// // }
// // const deletePolicy=(Name)=>{
// // return {
// //     type:'DELETE_POLICY',
// //     playload:{
// //         Name
// //     }
// // }
// // }
// // const createClaim=(Name,AmountClaim)=>{
// // return{
// //     type:"CREATE_CLAIM",
// //     playload:{
// //         Name:Name,
// //         AmountClaim:AmountClaim
// //     }
// // }
// // }


// // ///**reducer *////



// // const =(oldPolicyLsit=[],action)=>{
// //  if(action.type==='CREATE_CLAIM'){
// //     return [...oldPolicyLsit,action]
// //  }
// // return oldPolicyLsit;
// // }



// //***Action cretare****///
  
// const createPolicy=(name,amout)=>{
//     return{
//       type:'CREATE_POLICY',
//       payload:{
//         name:name,
//         amount:amount
//       }
//     }
//   }
  
//   //***Action cretare****///
  
//   const deletePolicy=(name)=>{
    
//     return{
//       type:'DELETE_POLICY',
//       payload:{
//         name:name
//       }
//     }
//   }
  
//   //***Action cretare****///
  
  
//   const createClaim=(name,amoutOfMoneytoClaim)=>{
    
//     return{
//       type:'CREATE_CLAIM',
//       payload:{
//         name:name,
//         amoutOfMoneytoClaim:amoutOfMoneytoClaim
//       }
//     }
//   }
  
//   // *****reducer//////
//   const claimHitory=(oldListOfClaim=[],action)=>{
//     if(action.type==='CREATE_POLICY')
//       {
//         return [...oldListOfClaim,action.payload]
//       }
//    return  oldListOfClaim
//   }
  
  
  
//   // *****reducer//////
  
//   const account=(bagOfMoney=100,action)=>{
//     if(action.type==='CREATE_CLAIM')
//       {
  
//         return bagOfMoney-action.payload.amoutOfMoneytoClaim
        
//       }
//     else if(action.type==='CREATE_POLICY')
//     {
            
//       return bagOfMoney+action.payload.amount
//      }
//     return bagOfMoney
//   }
  
  
//   // *****reducer//////
  
//   const policies=(oldpolicy=[],action)=>{
    
//     if(action.type==='CREATE_POLICY')
//     {
//       return [...oldpolicy,action.payload.name]
//     }
//     if(action.type==='DELETE_POLICY')
//        {
//        return oldpolicy.filter((name)=>name!==action.payload.name)
//        }
//     return oldpolicy;
    
//   }
//   const {createStore,combineReducers}=Redux;
//   const ourdept=combineReducers({
//    Claim:createClaim,
//    Accounting:account,
//   policies:policies
//   })
  
//   const store=createStore(ourdept)
//   store.dispatch(createPolicy('Akshay',33000))
//   store.dispatch(createPolicy('Mitu',30))
//   store.dispatch(createPolicy('Raju',3040))
//   store.dispatch(createClaim('Anamika',300))
//   store.dispatch(createClaim('Akshay',3000))
//   store.dispatch(createClaim('raju',3000))
//   store.dispatch(createPolicy('kaka',3000))
//   console.log(store.getState())
 

// function ageMessage(age){


//   let reg=age<=3?'hi babey':age<=4?'hi chield':age<=18?'hi audelt':'you are old man'
//   console.log(reg)
// }
// ageMessage(121)

const arr=[310,20,130,40,50,60]
let reg;
for(let i=0;i<arr.length;i++)
{
for(let j=i+1;j<arr.length;j++)
{
if(arr[i]>arr[j])
{
  reg=arr[i]
  console.log(reg)
}
}
}

