import data from './data';
import React from 'react';
function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="index.html">amazona</a>
      
        </div>   
<div>
        <a href="card.hmtl">Cart </a>
        <a href="signin.html">Sign In </a>
        
    </div>
    </header>
    <main>
        <div className="row center">
          {
            data.prdoducts.map(product => (
             <Product key={prouduct._id} product={product} />
            ) )
          }
           
   


        </div>
        
    </main>
    <footer className="row center">
        all right reserved
    </footer>
   
</div>
  );
}

export default App;
