// FUNCÃO PARA AUTODIGITAÇÃO
function auto(){
    var typed = new Typed('#auto-text', {
        strings: ['<i>Animes</i>', '<i>Personagens</i>','<i>Você encontra aqui</i>'],
        typeSpeed: 100,
        loop: true
    });
}
auto()

// FUNÇÃO PARA FOCO E ALTERAÇÃO DE IMAGENS
function imgsFocus(){
    let imgs = document.querySelectorAll('.chars-box ul li img')
    let imgsFont = document.querySelectorAll('.chars-box ul li')    
    let boxChars1 = document.querySelector('.chars-1')
    let boxChars2 = document.querySelector('.chars-2')
    let boxChars3 = document.querySelector('.chars-3')            
    let count = 0
    
    var btns = document.querySelectorAll('.btns-sliders button')
    
    // FUNÇÃO PARA DEFINIÇÃO DE CORES DOS BOTÕES
    function btnsBg(){
        btns.forEach(btns => {
            btns.style.backgroundColor = "transparent"
        })
    }
    btnsBg()    

    btns[0].addEventListener('click', () => {
        count = 0
        boxChars1.style.cssText = 'display: block;'        
        boxChars2.style.cssText = 'display: none;'
        boxChars3.style.cssText = 'display: none;'

        btnsBg()
        btns[0].style.cssText = "background-color: #ffa500;"
    })
    
    btns[1].addEventListener('click', () => {
        count = 8
        boxChars2.style.cssText = 'display: block;'               
        boxChars1.style.cssText = 'display: none;'                        
        boxChars3.style.cssText = 'display: none;'

        btnsBg()
        btns[1].style.cssText = "background-color: #ffa500;"
    })

    btns[2].addEventListener('click', () => {
        count = 16
        boxChars3.style.cssText = 'display: block;'
        boxChars1.style.cssText = 'display: none;'
        boxChars2.style.cssText = 'display: none;'        

        btnsBg()
        btns[2].style.cssText = "background-color: #ffa500;"
    })

    setInterval(() => {
        for(let i = 0; i < imgs.length; i ++){
            imgs[i].style.cssText = 'border-color: #fff;'
            imgsFont[i].style.cssText = 'color: #ffffff7a;'
        }                                
        
        if(count < imgs.length){
            imgs[count].style.cssText = 'border-color: #ffa500; opacity: 100%;'
            imgsFont[count].style.cssText = 'color: #ffa500;'
            count += 1                                    

            if(count <= 8){
                boxChars1.style.cssText = 'display: block;'        
                boxChars2.style.cssText = 'display: none;'
                boxChars3.style.cssText = 'display: none;'         
                
                btnsBg()
                btns[0].style.cssText = "background-color: #ffa500;"                
                            
            }else if(count <= 16){                            
                boxChars1.style.cssText = 'display: none;'                
                boxChars2.style.cssText = 'display: block;' 
                
                btnsBg()
                btns[1].style.cssText = "background-color: #ffa500;"                                                            
            
            }else{
                boxChars2.style.cssText = 'display: none;'
                boxChars3.style.cssText = 'display: block;'         
                
                btnsBg()
                btns[2].style.cssText = "background-color: #ffa500;"
            }
        }
        
        else{
            count = 0                   
        }
        
    },1500)    

    // FUNÇÃO PARA ALTERAR GIFS DE PERSONAGENS
    function gifs(){

        var charsBox = document.querySelector('.chars-box')        

        setInterval(() => {                                        
            // KIRA
            if(count == 1){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/kira.gif);'
            // L
            }else if(count == 2){                    
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/L.gif)'
            // LUFFY
            }else if(count == 3){                    
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/luffy.gif); linear-gradient(#ffffff85,#ffa6008c);'
            // ZORO
            }else if(count == 4){                    
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/zoro.gif); linear-gradient(#ffffff85,#ffa6008c);'
            // SAITAMA
            }else if(count == 5){                    
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/saitama.gif); linear-gradient(#ffffff85,#ffa6008c);'
            // SPYKE
            }else if(count == 6){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/spyke.gif); linear-gradient(#ffffff85,#ffa6008c);'
            // KANEKI
            }else if(count == 7){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/kaneki.gif);'                                
            // EDWARLD
            }else if(count == 8){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/edwarld.gif);'                                
            // ICHIGO
            }else if(count == 9){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/ichigo.gif);'                                
            // AIZEN
            }else if(count == 10){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/aizen.gif);' 
            // URAHARA
            }else if(count == 11){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/urahara.gif);' 
            // NARUTO
            }else if(count == 12){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/naruto.gif);' 
            // ITACHI
            }else if(count == 13){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/itachi.gif);' 
            // PAIN
            }else if(count == 14){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/pain.gif);' 
            // KAKASHI
            }else if(count == 15){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/kakashi.gif);' 
            // DENJI
            }else if(count == 16){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/denji.gif);' 
            // MAKIMA
            }else if(count == 17){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/makima.gif);' 
            // THORFIN
            }else if(count == 18){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/thorfin.gif);'             
            // EREN
            }else if(count == 19){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/eren.gif);'             
            // LEVI
            }else if(count == 20){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/levi.gif);'             
            // MIKASA
            }else if(count == 21){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/mikasa.gif);'             
            // GOJO
            }else if(count == 22){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/gojo.gif);'             
            // GOKU
            }else if(count == 23){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/goku.gif);'             
            // VEGETA
            }else if(count == 24){
                charsBox.style.cssText = 'background-image: url(assets/imgs/gifs/vegeta.gif);'             
            }
        },1500)
        
    }
    gifs()
}
imgsFocus()
