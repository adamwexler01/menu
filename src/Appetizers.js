import React from 'react'

function Appetizers(){

  //Extract these list of apps, so they are being presented by the parent
  const listOfApps = [{name: "Calamari Fritti", description: "Rings of calamari deep-fried and served with a spicy tomato sauce"}, {name:"Antipasto Fredo", description: "Shrimp, calamari and scallops seasoned with tomatoes, fresh parsley, garlic and pure olive oil. Mildly spicy"}, {name:"Carpacio Di Manzo", description: "Thinly sliced beef filet covered with onions, arugula, parmesan cheese, heart of palms, cucumbers and dijon dressing"}];

  return(
    <div style={{width:'50%', display:'flex', flexDirection:'column'}}>
      {/* Have the title being passed in by the parent */}
      <h2 style={{textAlign:'center'}}>Appetizers</h2>
      <ul style={{listStyleType:'none', padding:'0px 20px'}}>
        {
          //Have the list of items being passed in by the parent
          listOfApps.map((item, index) => {
            return(
              <div>
                <li style={{textAlign:'left', paddingTop: '1.5%'}} key={index}>{item.name}: {item.description}</li>
              </div>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Appetizers;
