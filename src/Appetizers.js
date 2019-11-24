import React from 'react'

function Appetizers(){

  //Extract these list of apps, so they are being presented by the parent
  const listOfApps = ["Focaccia", "Mozzarella in Carozza", "Sardine Sandwich"];

  return(
    <div style={{width:'50%', display:'flex', flexDirection:'column'}}>
      {/* Have the title being passed in by the parent */}
      <h2 style={{textAlign:'center'}}>Appetizers</h2>
      <ul style={{listStyleType:'none', padding:'0px 20px'}}>
        {
          //Have the list of items being passed in by the parent
          listOfApps.map((value, index) => {
            return <li style={{textAlign:'left'}} key={index}>{value}</li>
          })
        }
      </ul>
    </div>
  );
}

export default Appetizers;
