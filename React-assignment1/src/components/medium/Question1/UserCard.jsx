
 export const UserCard=({data})=>{
    return(
        <div style={{border: '2px solid  black',height:'15vh',width:'20vh',margin:'10px',textAlign:'center'}}>
    <h4> Name: {data.name}  </h4>
    <h4>Age: {data.age}</h4>
    <br/>

   </div>
       
    )
}