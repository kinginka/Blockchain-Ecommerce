import React, {useState, useEffect} from 'react';
import getBlockchain from './ethereum';
import Store  from './Store.js';


function App() {
    const [paymentProcessor, setpaymentProcessor] = useState(undefined);
    const [dai, setDai] = useState(undefined);

    useEffect(()=> {
      const init = async () => {
      const {paymentProcessor,dai} = await getBlockchain();
      setpaymentProcessor(paymentProcessor);
      setDai(dai);
      }
      init();
    })

    if(typeof window.ethereum === 'undefined'){
      return(
        <div className='container'>
          <div className='col-sm-12'>
            <h1>Blockchain Ecommerce App</h1>
            <p>You need to install latest version of metamask</p>
          </div>
        </div>
      )
    }

  return (
    <div className='container'>
      <div className='col-sm-12'>
      <h1>Blockchain Ecommerce App</h1>
      <Store paymentProcessor={paymentProcessor} dai= {dai} />
      </div>
    </div>
  );
}

export default App;
