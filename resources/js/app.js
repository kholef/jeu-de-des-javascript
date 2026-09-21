let lancer = document.querySelector(".btn-lancer");
let commuter = document.querySelector(".btn-commuter");
let nouveau = document.querySelector(".btn-nouveau");
let img = document.querySelector(".de")


let image ={
    1:"./resources/images/de-1.png",
    2:"./resources/images/de-2.png",
    3:"./resources/images/de-3.png",
    4:"./resources/images/de-4.png",
    5:"./resources/images/de-5.png",
    6:"./resources/images/de-6.png"}
nouveau.addEventListener("click",initialiserJeu)

let encours1=document.querySelector("#encours-1")
let encours2=document.querySelector("#encours-2")
let score1=document.querySelector("#score-1")
let score2=document.querySelector("#score-2")
document.querySelector(`.de`).style.display = 'none'; 

encours1.textContent = "0";
encours2.textContent = "0";
score1.textContent = "0";
score2.textContent = "0";

lancer.addEventListener("click",()=>{
    document.querySelector(`.de`).style.display = 'block';
    let dés = (Math.floor(Math.random()*6)+1)
    let imageCorrespondante = image[dés];
    img.setAttribute("src", imageCorrespondante) 
    calculScore(joueurActif, dés)    
    if (dés === 1) {
        joueurActif = joueurActif === 1 ? 2 : 1;
    
        document.querySelector('.joueur-1-panel').classList.toggle('active'); 
        document.querySelector('.joueur-2-panel').classList.toggle('active'); 

    }
})
let joueurActif = 1;

function calculScore(joueur, dés){
    let encourElement = document.querySelector(`#encours-${joueur}`)
    let enCour =parseInt(encourElement.textContent)

    if (dés !== 1){
        enCour += dés
    }
  
    else {
        enCour = 0
    }
    
    encourElement.textContent=enCour; 
}

commuter.addEventListener("click",()=>{
    let scoreElement = document.querySelector(`#score-${joueurActif}`)
    let encourElement = document.querySelector(`#encours-${joueurActif}`)
   
    let score = parseInt(scoreElement.textContent);
    let encour = parseInt(encourElement.textContent);

    score += encour
    scoreElement.textContent= score

    encourElement.textContent= "0";

    if (score >= 100){
        let bravo = document.querySelector(`#nom-${joueurActif}`)
        bravo.textContent="Bravo !!!"
        bravo.style.color= "green";
        lancer.disabled = true;
        commuter.disabled = true;
        document.querySelector(`.de`).style.display = 'none'; 
        return
    }
    joueurActif = joueurActif === 1 ? 2 : 1;

    document.querySelector('.joueur-1-panel').classList.toggle('active'); 
    document.querySelector('.joueur-2-panel').classList.toggle('active'); 
})

nouveau.addEventListener("click",initialiserJeu)

function initialiserJeu(){
    score1.textContent = "0";
    score2.textContent = "0";
    encours1.textContent = "0";
    encours2.textContent = "0";
    joueurActif = 1;

    document.querySelector("#nom-1").textContent = "Joueur 1";
    document.querySelector("#nom-2").textContent = "Joueur 2";
    document.querySelector("#nom-1").style.color = "black";
    document.querySelector("#nom-2").style.color = "black";
    document.querySelector(`.de`).style.display = 'none'; 

    lancer.disabled = false;
    commuter.disabled = false;

    img.setAttribute("src","./resources/images/de-1.png")

}
initialiserJeu();




