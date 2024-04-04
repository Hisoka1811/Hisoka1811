let sectionInicio = document.getElementById('sanvalen')
let sectionPresentacion = document.getElementById("presentacion")
let sectionExplicacion = document.getElementById("explicacion")
let sectionRegalo = document.getElementById("regalo")
let sectionEncuesta = document.getElementById("encuesta")
let sectionEncuesta2 = document.getElementById("encuesta2")
let sectionEncuesta3 = document.getElementById("encuesta3")
let botonDeInicio = document.getElementById("btnInicio");
let botonsiguiente = document.getElementById("siguiente");
let botonsiguiente2 = document.getElementById("siguiente2");
let btNo =  document.getElementById('noBtn')
let btNo2=  document.getElementById('noBtn2')
let btNo3 =  document.getElementById('noBtn3')
let btnSi = document.getElementById("siBtn")
let btnSi2 = document.getElementById("siBtn2")
let btnSi3 = document.getElementById("siBtn3")
let regaloSorpresa = document.getElementById("sorpresa")
let numeroDefault = 9

// let frases = ["EN SERIO!!!","Me lo esperaba","Me lo suponia","No sigas :((","Mentirosa😭💜","USTED NO ME AMA","MIENTESSS!!"]

botonDeInicio.addEventListener('click',(e)=>{
    sectionInicio.style.display = "none"
    sectionPresentacion.style.display  = "block"
})

botonsiguiente.addEventListener("click",(e)=>{    
sectionPresentacion.style.display = "none"
sectionExplicacion.style.display  = "block"
})
botonsiguiente2.addEventListener("click",(e)=>{    
sectionExplicacion.style.display  = "none"
sectionEncuesta.style.display  = "block"
})

btNo.addEventListener("mouseenter", (e) => {
    let posX = Math.random() * (window.innerWidth - 200); 
    let posY = Math.random() * (window.innerHeight - 50)

    noBtn.style.position = 'absolute';
    noBtn.style.transition = 'all 0.5s'; 
    noBtn.style.left = posX + 'px';
    noBtn.style.top = posY + 'px';

    frasesBtn()

  });

btNo2.addEventListener("mouseenter", (e) => {

    let posX = Math.random() * (window.innerWidth - 200); 
    let posY = Math.random() * (window.innerHeight - 50)

    noBtn2.style.position = 'absolute';
    noBtn2.style.transition = 'all 0.5s'; 
    noBtn2.style.left = posX + 'px';
    noBtn2.style.top = posY + 'px';

    frasesBtn()

  });
  
btNo3.addEventListener("mouseenter", (e) => {
    let posX = Math.random() * (window.innerWidth - 200); 
    let posY = Math.random() * (window.innerHeight - 50)

    noBtn3.style.position = 'absolute';
    noBtn3.style.transition = 'all 0.5s'; 
    noBtn3.style.left = posX + 'px';
    noBtn3.style.top = posY + 'px';

    frasesBtn()

  });  

btnSi.addEventListener('click',(e)=>{
    sectionEncuesta.style.display  = "none"
    sectionEncuesta2.style.display  = "block"
});

btnSi2.addEventListener('click',(e)=>{
    sectionEncuesta2.style.display  = "none"
    sectionEncuesta3.style.display  = "block"
});

btnSi3.addEventListener('click',(e)=>{
    sectionEncuesta3.style.display  = "none"
    sectionRegalo.style.display  = "block"
});

regaloSorpresa.addEventListener('click',(e)=>{
    sectionRegalo.style.display  = "none"
})

function frasesBtn (){
    
i = aleatorio(0,numeroDefault - 1   )

let numero = i

let frases = {
"0":"(SI) NO MIENTAS DI QUE SI😭",
"1":"SI (EN SERIO!!!)",
"2":"SI (Me lo esperaba)",
"3":"SI (Me lo suponia)",
'4':"SI (No sigas 🙁)",
'5':"SI (Mentirosa😭💜)",
'6':"SI (USTED NO ME AMA)",
'7':"SI (MIENTESSS!!)",
'8':"SI (Severa hp 🙂)",
'9':"SI (DIME QUE SI POR FAVOR😭)",
}    

let frase = frases[numero] || numeroDefault

btnSi.innerHTML = frase
btnSi2.innerHTML = frase
btnSi3.innerHTML = frase


}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
