export default class Navigationsleiste {

    constructor() {
        this._html = this._html_generieren();
    }

    _html_generieren() {
        let navigationsleiste = document.createElement("nav");
        navigationsleiste.setAttribute("id", "navigationsleiste");
        navigationsleiste.innerHTML = `<a href="#"><span id="markenname">Liqui-Planner</span></a>`

        return navigationsleiste
    }

    anzeigen() {
        let body = document.querySelector("body");
        if (body !== null) {
            body.insertAdjacentElement("afterbegin", this._html);
        }
    }
    
}