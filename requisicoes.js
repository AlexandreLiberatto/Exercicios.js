/* async function requsicoesFetch () {
    const objetoResposta = await fetch('https://brasilapi.com.br/api/fipe/marcas/v1/carros')
    
    const respostaJSON = await objetoResposta.json()
  
    console.log(respostaJSON)
  }
  
  requsicoesFetch()
 */ 
  
  /* https://brasilapi.com.br/ */
  /* npm install node-fetch */                         

  async function requsicoesFetch () {
    const objetoResposta = await fetch('https://brasilapi.com.br/api/cep/v2/{88060221}')
    
    const respostaJSON = await objetoResposta.json()
  
    console.log(respostaJSON)
  }
  
  requsicoesFetch()
 
