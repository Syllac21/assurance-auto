
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
    let tarif = tarifC;
    if(nbPhotocopie<31){
        tarif = tarifB;
    }
    if(nbPhotocopie<11) {
        tarif = tarifA;
    }
    let cout = nbPhotocopie * tarif;

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
