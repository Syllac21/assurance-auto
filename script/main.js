// récupération des éléments du formulaire
const inputAnciennete = document.getElementById('anciennete');
const inputAge = document.getElementById('age');
const inputPermis = document.getElementById('permis');
const inputNbAccidents = document.getElementById('nb_accident');
const envoieInformations = document.getElementById('informations');
const AffichageContrat = document.getElementById('root');

//création des variable en nombre
nbAnContrat =Number(inputAnciennete.value);
ageCandidat = Number(inputAge.value);
nbAnPermis = Number(inputPermis.value);
nbAccident = Number(inputNbAccidents.value);

let anciennete = nbAnContrat>1 ? -1 : 0 ;
let age = ageCandidat>25 ? -1 : 0;
let jeuneConducteur = nbAnPermis>2 ? -1 : 0;

function generate(anciennete, age, jeuneConducteur, nbAccident){
    let classeContrat = 4 + anciennete + age + jeuneConducteur - nbAccident
    
    if(classeContrat < 1){
        classeContrat = 1;
    } else if(classeContrat > 4){
        classeContrat = 5;
    }
    let reponse = 'Vous pouvez bénéficier du contrat au tarif '
    switch (classeContrat) {
        case '1' :
            reponse += 'A';
            break;
        case '2' :
            reponse += 'B';
            break;
        case '3' :
            reponse += 'C';
            break;
        case '4' :
            reponse += 'D';
            break;
        case '5' :
            reponse ='';
            reponse ='Nous sommes désolé, mais vous ne pouvez pas vous assurer chez nous'
            break;
    }

    return reponse;

}

const submit=envoieInformations.addEventListener("submit", (event)=>{
    event.preventDefault();
    let reponse = generate(anciennete, age, jeuneConducteur, nbAccident);
    AffichageContrat.innerHTML = reponse;
})
