
'use strict';

const template1 = document.createElement("template");

template1.innerHTML = 
    `
        <link rel="stylesheet" href="custom-elements/custom-dropdown/css/custom-dropdown.css">

        <div class="dropdown">
            <div class="button-container">
                <button></button>
                <i class="arrow arrow-down"></i>
            </div>

            <div class="dropdown-list-container">
                <ul class="dropdown-list"></ul>
            </div>
        </div>
    `;

class Dropdown extends HTMLElement {
    constructor() {
        super();

        this._sR = this.attachShadow({ mode: "open" });
        this._sR.appendChild(template1.content.cloneNode(true));

        this.open = false;

        this.$buttonContainer = this._sR.querySelector(".button-container");
        this.$button = this._sR.querySelector(".button-container button");
        this.$toggler = this._sR.querySelector(".button-container i");
        this.$dropdown = this._sR.querySelector(".dropdown");
        this.$dropdownList = this._sR.querySelector(".dropdown-list");

        this.$buttonContainer.addEventListener("click", () => {
            this.toggleOpen();
        });

        document.addEventListener("click", (event) => {
            if (event.target.tagName.toLowerCase() !== "my-dropdown" && this.$dropdownList.classList.contains("open")) {
                this.open = false;
                this.$dropdownList.classList.remove("open");
                this.$dropdownList.classList.add("close");

                this.toggleArrow();
            }
        });
    }

    static get observedAttributes() {
        return [ "option", "options" ];
    }

    toggleOpen() {
        this.open = !this.open;

        if (this.open) {
            this.$dropdownList.classList.add("open");
            this.$dropdownList.classList.remove("close");
        } else {
            this.$dropdownList.classList.remove("open");
            this.$dropdownList.classList.add("close");
        }

        this.toggleArrow();
    }

    toggleArrow() {
        if (this.open) {
            this.$toggler.classList.remove("arrow-down");
            this.$toggler.classList.add("arrow-up");
        } else {
            this.$toggler.classList.remove("arrow-up");
            this.$toggler.classList.add("arrow-down");
        }
    }

    get option() {
        return this.getAttribute("option");
    }

    set option(value) {
        return this.setAttribute("option", value);
    }

    get options() {
        return JSON.parse(this.getAttribute("options"));
    }

    set options(value) {
        return this.setAttribute("options", JSON.stringify(value));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {
        this.$button.textContent = "Select Option";

        if (this.options && (this.option !== null && this.option !== undefined)) {
            this.$button.textContent = this.options[this.option].label;
        }

        this.$dropdownList.innerHTML = "";
        Object.keys(this.options || {}).forEach(key => {
            let option = this.options[key];
            let $option = document.createElement("li");
            $option.innerHTML = option.label;

            if (this.option && this.option === key) {
                $option.classList.add('selected');
            }

            $option.addEventListener('click', () => {
                this.option = key;
                this.toggleOpen();

                this.dispatchEvent(
                    new CustomEvent("onChange", { detail: key })
                );
                this.render();
            });

            this.$dropdownList.appendChild($option);
        });
    }
}

window.customElements.define("my-dropdown", Dropdown);