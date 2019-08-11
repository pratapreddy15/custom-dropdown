
'use strict';

window.onload = () => {
    document.querySelector('my-dropdown').options = {
        option1: { label: 'Option 1' },
        option2: { label: 'Option 2' },
        option3: { label: 'Option 3' },
        option4: { label: 'Option 4' },
        option5: { label: 'Option 5' },
        option6: { label: 'Option 6' },
        option7: { label: 'Option 7' },
        option8: { label: 'Option 8' },
        option9: { label: 'Option 9' },
        option10: { label: 'Option 10' }
      };
    
      document
        .querySelector('my-dropdown')
        .addEventListener('onChange', event => console.log(`New option is selected: ${event.detail}`));
};