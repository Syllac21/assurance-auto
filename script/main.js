// récupération des éléments du formulaire
const inputAnciennete = document.getElementById('anciennete');
const inputAge = document.getElementById('age');
const inputPermis = document.getElementById('permis');
const inputNbAccidents = document.getElementById('nb_accident');
const btn_envoyer = document.getElementById('btn_envoyer');
const AffichageContrat = document.getElementById('root');

//création des variable en nombre
nbAnContrat =Number(inputAnciennete.value);
ageCandidat = Number(inputAge.value);
nbAnPermis = Number(inputPermis.value);
nbAccident = Number(inputNbAccidents.value);

let anciennete = nbAnContrat>1 ? -1 : 0 ;
let age = ageCandidat>25 ? -1 : 0;
let jeuneConducteur = nbAnPermis>2 ? -1 : 0;

function generate(){
    
}
