
// police d'assurance

// récupération des éléments du formulaire
const inputAnciennete = document.getElementById('anciennete');
const inputAge = document.getElementById('age');
const inputPermis = document.getElementById('permis');
const inputNbAccidents = document.getElementById('nb_accident');
const envoieInformations = document.getElementById('informations');
const AffichageContrat = document.getElementById('assurance');





function generate(anciennete, age, jeuneConducteur, nbAccident){

    let classeContrat = 4 + anciennete + age + jeuneConducteur + nbAccident
    
    if(classeContrat < 1){
        classeContrat = 1;
    } else if(classeContrat > 4){
        classeContrat = 5;
    }
    
    let reponse = 'Vous pouvez bénéficier du contrat au tarif ';
    switch (classeContrat) {
        case 1 :
            reponse += 'A';
            break;
        case 2 :
            reponse += 'B';
            break;
        case 3 :
            reponse += 'C';
            
            break;
        case 4 :
            reponse += 'D';
            break;
        case 5 :
            reponse ='Nous sommes désolé, mais vous ne pouvez pas vous assurer chez nous';
            break;
    }
    
    return reponse;

}

const submit = envoieInformations.addEventListener("submit", (event)=>{
    event.preventDefault();
    //création des variable en nombre
    let nbAnContrat =Number(inputAnciennete.value);
    let ageCandidat = Number(inputAge.value);
    let nbAnPermis = Number(inputPermis.value);
    let nbAccident = Number(inputNbAccidents.value);

    let anciennete = nbAnContrat>1 ? -1 : 0 ;
    let age = ageCandidat>25 ? -1 : 0;
    let jeuneConducteur = nbAnPermis>2 ? -1 : 0;   

    let reponse = generate(anciennete, age, jeuneConducteur, nbAccident);
    AffichageContrat.innerHTML = reponse;
})


// photocopie

const inputNbPhotocopie = document.getElementById('nb_photocopie');
const envoiePhotocopie = document.getElementById('form_photocopie');
const retourPhotocopie = document.getElementById('tarif_photocopie')

const tarifA = 0.10;
const tarifB = 0.09;
const tarifC = 0.08;

const submitPhotocopie = envoiePhotocopie.addEventListener('submit', (event)=>{
    event.preventDefault();
    let nbPhotocopie = Number(inputNbPhotocopie.value);
    let cout = 0;

    if (nbPhotocopie<10){
        cout = nbPhotocopie * tarifA
    }
    if(nbPhotocopie<31){
        cout = 10*tarifA + (nbPhotocopie-10) * tarifB
    }
    if(nbPhotocopie<11) {
        cout = 10 * tarifA + 20 * tarifB + (nbPhotocopie-30) * tarifC
    }
    
    cout = Math.round(cout*100)/100;

    let reponsePhotocopie = `cela vous coutera ${cout}€.`;
    retourPhotocopie.innerHTML = reponsePhotocopie;

})

// impots
const inputSexe = document.getElementById('sexe');
const inputAgeImpots = document.getElementById('age_impots');
const envoieImpots = document.getElementById('form_impots');
const retourImpots = document.getElementById('retour_impots');

const submitImpots = envoieImpots.addEventListener('submit', (event)=>{
    event.preventDefault();
    let sexe = inputSexe.value;
    let ageImpots = Number(inputAgeImpots.value);
    let reponseImpots = 'vous ne payez pas d\'impots'

    if(ageImpots >= 18){
        if(sexe === 'homme' || ageImpots < 35){
            reponseImpots = 'Pas de chance, vous payez des impots';
        }
    }
    retourImpots.innerHTML = reponseImpots;

})

// étoiles décroissantes
const afficheEtoile = document.getElementById('etoilesUp');
let text = '*********';

for(let i=0 ; i<9 ; i++){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = text;
    afficheEtoile.appendChild(newDiv)
    text = text.slice(0,-1);

}

// étoiles croissantes
const afficheEtoileDown = document.getElementById('etoilesDown');

for (let i = 0; i<9; i++){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = text;
    afficheEtoileDown.appendChild(newDiv);
    text += "*";
}

// occurences
const inputLettre = document.getElementById('lettre');
const retourOcc = document.getElementById('reponse_occ');

let t = ['h','j','x','k','x','j'];
let rangs ="";


function occurences(t,lettre){
    let index = [];
    for(let i = 0 ; i < t.length ; i++){
        if(t[i] === lettre){
            index.push(i);
        }
    }
    return index;
}

const afficheOcc = document.addEventListener('change',()=>{
    let lettre = inputLettre.value;
    let index = occurences(t,lettre);
    retourOcc.innerHTML = index;
})

// tri à bulles
const afficheListeDebut = document.getElementById('listeDebut');
const afficheListefin = document.getElementById('listeFin');
const btnTrier = document.getElementById('trier');

let listedebut = [5,1,3,2,4];
afficheListeDebut.innerHTML = listedebut;

function tri(listedebut){
    for(let i = listedebut.length ; i > 0 ; i--){
        for(let j=listedebut.length ; j > 0 ; j--){
            if(listedebut[j] > listedebut[j-1]){
                let temporaire = listedebut[j];
                listedebut[j] = listedebut[j-1];
                listedebut[j-1] = temporaire;
            }
        }
    }

    return listedebut;
}

const lancerTri = document.addEventListener('click',()=>{
    let listefin = tri(listedebut);
    afficheListefin.innerHTML = listefin
})

// palindrome
const inputPalindrome = document.getElementById('mot');
const formPalindrome = document.getElementById('formPalindrome');
const retourPalindrome = document.getElementById('retourPalindrome');

let verifPalindrome = document.addEventListener('submit',(event)=>{
    event.preventDefault();
    let mot = inputPalindrome.value;
    let reponse = true;
    for(let i = 0 ; i < mot.length ; i++){
        
        if(mot.charAt(i) != mot.charAt(mot.length-i-1)){
            reponse = false;
        }
    }
    if(reponse){
        retourPalindrome.innerHTML = 'ce mot est un palindrome';
    } else {
        retourPalindrome.innerHTML = 'Ce mot n\'est pas un palindrome';
    }
})

// tour de Hannoï
// const colA = document.getElementById('colA');
// const colB = document.getElementById('colB');
// const colC = document.getElementById('colC');
// const element1 = document.getElementById('element1');
// const element2 = document.getElementById('element2');
// const element3 = document.getElementById('element3');
// const btnJouer = document.getElementById('btnJouer');

// let listElem = ['element1', 'element2', 'element3'];
// let listCol = ['colA', 'colB', 'colC'];
// let tableau = [[],[],[]];

// let color = ['red', 'blue', 'green']

// function createDiv(numElem, numCol){
//     let newDiv = document.createElement('div');
//     newDiv.setAttribute('class','element');
//     newDiv.setAttribute('id',`element${numElem}`);
//     newDiv.style.width = `${numElem * 20}%`;
//     newDiv.style.backgroundcolor =`${color[numElem]}`;
//     listCol[numCol-1].appendChild(newDiv);
//     tableau[numCol].unshift(numElem); 
// }

// function removeDiv(numElem, numCol){
//     listElem[numElem - 1].remove();
// }

// function initJeuxAnoi(){
//     element1.remove();
//     element2.remove();
//     element3.remove();
//     let div1 = createDiv(1,1);
//     let div2 = createDiv(2,1);
//     let div3 = createDiv(3,1);

// }

// let lancerJeu = document.addEventListener('click', ()=>{
//     initJeuxAnoi();
// })

// const inputNbDisques = document.getElementById('nbDisques');
// const retourHanoi = document.getElementById('retourHanoi');
// let nbDisques = Number(inputNbDisques.value) ;
// let colA = 1;
// let colB = 2;
// let colC = 3;

// function hanoi(nbDisques, colA, colB, colC){
//     if(nbDisques>0){
//         hanoi(nbDisques-1, colA, colC, colB);

//         let newDiv = document.createElement('div');
//         newDiv.innerHTML = "col " + colA + " vers " + "col " + colC;
//         retourHanoi.appendChild(newDiv);
//         hanoi(nbDisques-1,colB , colA, colC);
//     }
// }

// let lancerJeu =document.addEventListener('change', ()=>{
//     retourHanoi.innerHTML = "";
//     hanoi(nbDisques, colA, colB, colC);
// })


// diese et Asterix
const retourDiese = document.getElementById('diese');
let charA = '#';
let charB = '*';
let binome = charA + charB;
let chaine = "";

for(let i = 0 ; i<6 ; i++){
    for(let j = 0 ; j < 5 ; j++){
        if(i % 2 === 0){
            binome = charB + charA;
            
        } else {
            binome = charA + charB;
        }
        
        chaine += binome
    }
    let newDiv = document.createElement('div');
    newDiv.innerHTML = chaine;
    retourDiese.appendChild(newDiv);
    chaine ='';
}

// cryptage

const inputMotClair = document.getElementById('motClair');
const formCryptage = document.getElementById('cryptage');
const retourCryptage = document.getElementById('retourCryptage');
let motClair = inputMotClair.value;
let alphabet = 'abcdefghijklmnopqrstuvwxyz';


function cryptageMotClair(motClair){
    let motCrypte = '';
    retourCryptage.innerHTML = '';
    for(let i = 0 ; i < motClair.length ; i++){
        for(let j = 0 ; j < alphabet.length ; j++){
            if(alphabet.charAt(j) === motClair.charAt(i)){
                
                if(j+3>alphabet.length){
                    motCrypte += alphabet.charAt(j+3-alphabet.length);
                    console.log(motCrypte);
                } else{
                    motCrypte += alphabet.charAt(j+3);
                    
                }
            }
        }
    }
    retourCryptage.innerHTML = 'le mot crypté est : ' + motCrypte;
}

let lancerCrypte = document.addEventListener('submit', (event)=>{
    cryptageMotClair(motClair);
})

// Mouah
const retourMouah = document.getElementById('retourMouah');
let moua = 'Moua';
for(let i = 0 ; i < 6 ; i++){
    moua += 'ah'
}
retourMouah.innerHTML = moua;

// Frais km
const inputNbPassagers = document.getElementById('nbPassagers');
const inputNbKm = document.getElementById('nbKm');
const formFraisKm = document.getElementById('fraisKm');
const retourFraisKm = document.getElementById('retourFraisKm');

let calculFraisKm = document.addEventListener('submit', (event)=>{
    let nbKm = Number(inputNbKm.value);
    let nbPassagers = Number(inputNbPassagers.value);
    let totalFraisKm = Math.round(100 * nbKm * (0.6 - nbPassagers * 0.05))/100;
    let coutParPassager = Math.round(totalFraisKm * 100 / nbPassagers)/100;
    retourFraisKm.innerHTML = `Les frais se montent à ${totalFraisKm}€ pour ${nbPassagers} soit ${coutParPassager}€ par personne.`;
})

// tri note
const retourTriNote = document.getElementById('retourTriNote');
let etudiants = [
    { nom: 'Agathe', note: 14 },
    { nom: 'Wlad', note: 17 },
    { nom: 'Yohann', note: 16 },
    { nom: 'Laureline', note: 17 },
    { nom: 'Christian', note: 12 },
    { nom: 'Yannick', note: 19 },
    { nom: 'Kaique', note: 17 },
    { nom: 'Angélique', note: 18 },
    { nom: 'Dorian', note: 15 },
    { nom: 'emmanuel', note: 16 },
    { nom: 'Jeremy', note: 13 },
    { nom: 'Sylvain', note: 17 },
    { nom: 'Yann', note: 15 },
    { nom: 'Amin', note: 16 }
    ];

let bonneMoyenne =[];

for(let i = 0 ; i < etudiants.length ; i++){
    if(etudiants[i].note > 15){
        bonneMoyenne.push(etudiants[i].nom)
    }
}
let newDiv = document.createElement('div');
newDiv.innerHTML = bonneMoyenne;
//retourTriNote.appendChild(newDiv);

// let ordreAlpha = [];

// for(let i = 0 ; i < etudiants.length ; i++){
//     ordreAlpha += etudiants[i].nom;
    
// }

// for(let i = 0 ; i < ordreAlpha.length ; i++){
//     for(let j = 0 ; j < ordreAlpha.length ; j++){
//         if(ordreAlpha[j] > ordreAlpha[j+1]){
            
//             let temp = ordreAlpha[j];
//             ordreAlpha[j] = ordreAlpha[j+1];
//             ordreAlpha[j + 1] = temp;
//         }
//     }
// }

// retourTriNote.innerHTML = ordreAlpha;