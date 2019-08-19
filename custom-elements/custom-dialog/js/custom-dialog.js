
'use strict';

// <img class="dialog-close-icon" src="custom-elements/icons/times-solid.svg" alt="Close">

const dialogTemplate = document.createElement("template");

dialogTemplate.innerHTML = 
    `
        <link rel="stylesheet" href="custom-elements/custom-dialog/css/custom-dialog.css">

        <div class="overlay-panel"></div>
        <div class="dialog-container">
            <div class="dialog">
                <div class="dialog-close">X</div>
                <div class="dialog-content"></div>
            </div>
        </div>
    `;

class Dialog extends HTMLElement {
    constructor() {
        super();

        this._sR = this.attachShadow({ mode: 'open' });
        this._sR.appendChild(dialogTemplate.content.cloneNode(true));

        this.$overlayPanel = this._sR.querySelector(".overlay-panel");
        this.$dialogContainer = this._sR.querySelector(".dialog-container");
        this.$dialog = this._sR.querySelector(".dialog");
        this.$dialogCloseButton = this._sR.querySelector(".dialog-close");
        this.$content = this._sR.querySelector(".dialog-content");

        this.$dialogContainer.classList.remove("open");
        this.$overlayPanel.classList.remove("open");
        this.$dialogContainer.classList.remove("close");
        this.$overlayPanel.classList.remove("close");

        this.$dialogCloseButton.addEventListener("click", () => {
            this.closeDialog();
        });
    }

    closeDialog() {
        this.isOpen = false;
        this.render();
    }

    static get observedAttributes() {
        return [ "content", "isOpen" ];
    }

    get content() {
        return this.getAttribute("content");
    }

    set content(value) {
        this.setAttribute("content", value);
    }

    get isOpen() {
        return this.getAttribute("isOpen");
    }

    set isOpen(value) {
        this.setAttribute("isOpen", value);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        if (JSON.parse(this.isOpen)) {
            console.log("Adding");
            this.$dialogContainer.classList.add("open");
            this.$overlayPanel.classList.add("open");

            this.$dialogContainer.classList.remove("close");
            this.$overlayPanel.classList.remove("close");
        } else {
            console.log("Removing");
            this.$dialogContainer.classList.remove("open");
            this.$overlayPanel.classList.remove("open");

            this.$dialogContainer.classList.add("close");
            this.$overlayPanel.classList.add("close");
        }
        this.$content.innerHTML = this.content;
    }
}

window.customElements.define("my-dialog", Dialog);