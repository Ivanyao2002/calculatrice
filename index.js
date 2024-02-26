let choix, premierNombre, deuxiemeNombre, resultat, reponse = false;// Cette variable vaut false ce qui veut dire que par défaut, nous ne reproposons par un calcul.

function addition(nombreA, nombreB) {
    let resultat = nombreA + nombreB
    return resultat
}

function multiplication(nombreA, nombreB) {
    let resultat = nombreA - nombreB
    return resultat
}

function soustraction(nombreA, nombreB) {
    let resultat = nombreA * nombreB
    return resultat
}

function division(nombreA, nombreB) {
    let resultat = nombreA / nombreB
    if (nombreB === 0) {
        throw new Error('Vous ne pouvez pas diviser par 0 !!');
    }
    return resultat
}

// On rentre dans la boucle principale
do {
    
    do{
        choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1. Addition\n 2. Soustraction\n 3. Multiplication\n 4. Division\n\n "));
    }while(choix != 1 && choix != 2 && choix != 3 && choix !=  4);
    
    do {
        premierNombre = Number(prompt('Veuillez choisir un premier nombre : \n'))
        deuxiemeNombre = Number(prompt('Veuillez choisir un deuxième nombre : \n'))
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre) ); //On redemande si l'un n'est pas un nombre 

    try {
        switch (choix) {
            case 1:
                resultat =  addition(premierNombre, deuxiemeNombre);
                break;
            case 2:
                resultat =  soustraction(premierNombre, deuxiemeNombre);
                break;
            case 3:
                resultat =  multiplication(premierNombre, deuxiemeNombre);
                break;
            case 4:
                resultat =  division(premierNombre, deuxiemeNombre);
                break;    
        
            default:
                throw new Error('Une Erreur est survenue.');
        }
        alert('Le resultat de votre oppération est : ' + resultat) //Le faire en dehors es swhitch pour ne pas avoir à se repeter sur chaque case.
        
    } catch (error) {
        alert(error);
    }
    finally {
        alert('Fin du programme');
      }

    reponse = confirm('Voulez vous refaire une opération ?');// On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer
} while (reponse);