// Importer les bibliothèques React et ReactDOM.
import React from 'react';
import ReactDOM from 'react-dom';

// Créer un composant React (2 méthodes : à base de fonction, à base de classe).
// 1ere méthode : à base de fonction
function getTextBtn() {
    return "Valider le champ";
}

const App = () => { // ou function() {}
    const textBtn = "Valider";
    const textBtn1 = ["Valider", " le bouton", " 1234", " hello", " end"]; // Tableau
    const textBtn2 = {text : "Valider"}; // Objet : passer l'objet entier en interpolation est impossible, mais possible pour ses propriétés.
    const monStyle = {backgroundColor:'blue', color:'white'};
    return (
    <div>
        <label className="label" htmlFor="name">Veuillez entrer votre nom</label>
        <input type="text" id="name"/>
        <button type="submit" style={monStyle}>{textBtn}</button>
        <button type="submit" style={monStyle}>{textBtn1}</button>
        <button type="submit" style={monStyle}>{textBtn2.text}</button>
        <button type="submit" style={monStyle}>{getTextBtn()}</button>
  </div>
  )
}

// Afficher le composant à l'écran.
ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);