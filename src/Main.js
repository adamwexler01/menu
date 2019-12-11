import React from 'react'

function Main(){
  const listOfMain = [{name:"Tortelli Di Formaggio", description: "Each ravioli is stuffed with a mixture of four cheeses: fontina, gruyere, ricotta and parmesan, with a hint of gorgonzola added. Served in a light creamy tomato sauce"}, {name: "Tortelli Di Spinaci", description: "A type of ravioli, this fresh pasta 'cushion' encloses a delicious blend of pureed spinach and ricotta cheese flavored by various herbs and just a touch of pancetta"}, {name: "Ravioli Di Carne", description: "Small emilian ravioli overflowing with a mixture of several seasoned meats. Served with a mushroom cream sauce"}]

  return(
    <div style={{width:'50%', display:'flex', flexDirection:'column'}}>
      <h2>Main Dishes</h2>
      <ul style={{listStyleType:"none", textAlign:"left"}}>
        {
          listOfMain.map((item, index) => {
            return(<div>
                      <li style={{textAlign: "left", paddingTop:"1.5%"}} key={index}>{item.name} : {item.description}</li>
                   </div>)
          })
        }
      </ul>
    </div>
  );
}

export default Main;
