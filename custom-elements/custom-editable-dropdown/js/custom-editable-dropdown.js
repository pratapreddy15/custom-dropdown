
'use strict';

const editableDropdownTemplate = document.createElement("template");

editableDropdownTemplate.innerHTML = 
    `
        <link rel="stylesheet" href="custom-elements/custom-editable-dropdown/css/custom-editable-dropdown.css">

        <div class="editable-dropdown">
            <div class="textbox-container">
                <input type="text" placeholder="Select Option" />
                <i class="arrow arrow-down"></i>
            </div>

            <div class="dropdown-list-container">
                <ul class="dropdown-list"></ul>
            </div>
        </div>
    `;

class EditableDropdown extends HTMLElement {
    constructor() {
        super();

        this._sR = this.attachShadow({ mode: 'open' });
        this._sR.appendChild(editableDropdownTemplate.content.cloneNode(true));

        this.open = false;

        this.$dropdown = this._sR.querySelector(".dropdown");
        this.$toggler = this._sR.querySelector(".textbox-container i");
        this.$textBox = this._sR.querySelector(".textbox-container input");
        this.$dropdownList = this._sR.querySelector(".dropdown-list");
        this.$textBoxContainer = this._sR.querySelector(".textbox-container");
        this.filteredOptions;

        this.$textBox.addEventListener("click", (event) => {
            if (!this.open)
                this.toggleOpen();
        });

        this.$textBox.addEventListener("keyup", (event) => {
            if (event.key !== "CapsLock" && event.key !== "NumLock" && event.key !== "Tab" && event.key !== "Shift" && event.key !== "Control" && event.key !== "Alt") {
                const _value = event.target.value.toLowerCase();
                if (_value === "" || _value === undefined || _value === null) {
                    this.render(this.options);
                    this.option = null;
                } else {
                    this.filteredOptions = this.options.filter(_item => {
                        const _key = Object.keys(_item)[0];
                        const _label = _item[_key].label.toLowerCase();
                        return _label.indexOf(_value) > -1;
                    });
                    this.render(this.filteredOptions);
                }
            }
        });

        document.addEventListener("click", (event) => {
            if (event.target.tagName.toLowerCase() !== "my-editable-dropdown" && this.$dropdownList.classList.contains("open")) {
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
        const json = JSON.stringify(value);
        this.filteredOptions = JSON.parse(json);
        return this.setAttribute("options", json);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
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

    render(dropdownOptions) {
        if (this.options && (this.option !== null && this.option !== undefined)) {
            const acitveOption = this.options.filter(_item => Object.keys(_item)[0] === this.option)[0];
            this.$textBox.value = acitveOption[Object.keys(acitveOption)[0]].label;
        }

        if (dropdownOptions === undefined || dropdownOptions === null) {
            dropdownOptions = this.filteredOptions;
        }

        this.$dropdownList.innerHTML = "";

        Object.keys(dropdownOptions || {}).forEach(key => {
            const item = dropdownOptions[key];
            let option = item[Object.keys(item)[0]];
            let $option = document.createElement("li");
            $option.innerHTML = option.label;

            if (this.option && this.option === Object.keys(this.options[key])[0]) {
                $option.classList.add('selected');
            }

            $option.addEventListener('click', () => {
                this.option = Object.keys(this.filteredOptions[key])[0];
                
                this.toggleOpen();

                this.dispatchEvent(
                    new CustomEvent("onChange", { detail: option.label })
                );
                this.filteredOptions = this.options;
                this.render();
            });

            this.$dropdownList.appendChild($option);
        });
    }
}

window.customElements.define("my-editable-dropdown", EditableDropdown);