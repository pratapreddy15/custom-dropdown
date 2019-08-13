
"use strict";

window.onload = () => {
    document.querySelector("my-dropdown").options = {
        option1: { label: "Option 1" },
        option2: { label: "Option 2" },
        option3: { label: "Option 3" },
        option4: { label: "Option 4" },
        option5: { label: "Option 5" },
        option6: { label: "Option 6" },
        option7: { label: "Option 7" },
        option8: { label: "Option 8" },
        option9: { label: "Option 9" },
        option10: { label: "Option 10" }
      };
    
      document
        .querySelector("my-dropdown")
        .addEventListener("onChange", event => console.log(`New option is selected: ${event.detail}`));

        document.querySelector("my-editable-dropdown").options = [
          { option1: { label: "Editable Option One" } },
          { option2: { label: "Editable Option One Two" } },
          { option3: { label: "Editable Option One Two Three" } },
          { option4: { label: "Editable Option One Two Three Four" } },
          { option5: { label: "Editable Option Five" } },
          { option6: { label: "Editable Option Six" } },
          { option7: { label: "Editable Option Seven" } },
          { option8: { label: "Editable Option Eight" } },
          { option9: { label: "Editable Option Nine" } },
          { option10: { label: "Editable Option Ten"  }}
        ];

        document.querySelector("my-editable-dropdown")
          .addEventListener("onChange", event => console.log(`New option is selected from editable dropdown: ${event.detail}`));
};