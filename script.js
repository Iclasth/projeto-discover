function toggleMode() {
    const html = document.documentElement
    
    // Aqui está a possível forma de fazer o "toggle(alternar)", porém, de forma mais trabalhosa
    
 //   if (html.classList.contains ("light")) {
 //       html.classList.remove ("light") }
 //   else {
 //         html.classList.add("light")
 //    
 // }
      
      // Maneira mais fácil e simplificada →
      
          html.classList.toggle("light")
          
          
          
         //pegar a imagem 
          const img = document.querySelector ('#profile img')
          
          //substituir a imagem
    
    
        if(html.classList.contains("light")) {
            //se tiver no light mode, adicionar a imagem light
            
           img.setAttribute ("src", "./assets/assets/Arthurr77.png")
           
           //se tiver no light mode, adicionar um novo texto descritivo.
           
           img.setAttribute ("alt", "foto de iclei Arthur sorrindo para a camera num ambiente com plantas usando uma camisa azul cabelo cacheado barba e aparelho")
        }
    else {
        //se tiver sem light mode, manter a imagem normal
        
        img.setAttribute ("src", './assets/assets/iclei77.png')
        
        //se tiver sem light mode, manter o texto descritivo normal
        
        img.setAttribute ("alt", "Foto de iclei Arthur serio no espelho com roupa preta  cabelo cacheado e relogio" )
    }
    
    
    
}