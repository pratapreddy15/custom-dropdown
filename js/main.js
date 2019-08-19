
"use strict";

const hrithikWiki = 
  `<div class="photo" style="height: 200px; background-image: url(images/hrithik_wikipedia_200.jpg); background-repeat: no-repeat; background-position: center; background-attachment: fixed;"></div>
  
  <p>Hrithik Roshan is an Indian actor who appears in Bollywood films. 
  He has portrayed a variety of characters and is known for his dancing skills. One of the highest-paid actors in India, he has won many awards, 
  including six Filmfares, four for Best Actor and one each for Best Debut and Best Actor (Critics). Starting in 2012, he appeared in 
  Forbes India's Celebrity 100 based on his income and popularity.</p>
  
  <p>Roshan has frequently collaborated with his father. He made brief appearances as a child actor in several films in the 1980s and later worked 
  as an assistant director on four of his father's films. His first leading role was in the box-office success Kaho Naa... Pyaar Hai (2000), 
  for which he received several awards. Performances in the 2000 terrorism drama Fiza and the 2001 ensemble melodrama Kabhi Khushi Kabhie Gham... 
  consolidated his reputation but were followed by several poorly received films.</p>
  
  <p><a href="https://en.wikipedia.org/wiki/Hrithik_Roshan" target="_blank">Source</a></p>`;

const vidyutWiki = 
  `<div class="photo" style="height: 200px; background-image: url(images/vidyut_wikipedia_200.jpg); background-repeat: no-repeat; background-position: center; background-attachment: fixed;"></div>
  
  <p>Vidyut Jammwal (Born 10 December 1980 in Jammu, Jammu and Kashmir) is an Indian film actor, martial artist, and stunt performer, who predominantly 
  works in Hindi films. He is a trained martial artist, having learnt the Indian martial art of Kalaripayattu since the age of three. He is popularly known as 
  "The New Age Action Hero of Bollywood" and is considered to be among the world's top martial arts film actors. He has also worked in Kollywood and Tollywood films.</p>
  
  <p>Jammwal was born in Jammu, Jammu and Kashmir, in a Rajput family. He was one of three children born to an Indian Army officer, and lived in various parts 
  of India (owing to his father's transferable job) and trained in Kalaripayattu in an ashram in Palakkad, Kerala since he was three years old, 
  which was run by his mother. He traveled to many countries training with martial artists in various forms, some of which find their base in Kalaripayattu. 
  After earning a degree in martial arts, Jammwal traveled to over 25 countries, where he performed in live action shows. He participated as a contestant in 
  Gladrags in the year 2000 and has been living in Mumbai ever since. He was a model in Delhi since 1996, but after a dismal career in modelling, landed his debut 
  role in Shakti, a Telugu film. He later landed his first role in a Bollywood movie in Nishikant Kamat's Force after one audition.</p>
  
  <p><a href="https://en.wikipedia.org/wiki/Vidyut_Jammwal" target="_blank">Source</a></p>`;

const siddharthWiki = 
  `<div class="photo" style="height: 200px; background-image: url(images/siddharth_wikipedia_200.jpg); background-repeat: no-repeat; background-position: center; background-attachment: fixed;"></div>
  
  <p>Siddharth Nigam is an Indian actor, who works in Indian television and films and is known for his roles of Sahir/Samar in Dhoom 3 
  and Ashoka in Chakravartin Ashoka Samrat. He is currently seen as Aladdin in Sab TV's Aladdin—Naam Toh Suna Hoga.</p>
  
  <p>Nigam was brought up in Allahabad, Uttar Pradesh. He completed his tenth class studies at Khelgaon Public School, where he practiced for gymnastics. 
  Later he moved to Mumbai from Allahabad. Nigam has won a gold medal in parallel bar and a silver medal in high bar at 58th National School Games, Pune. 
  He has an elder brother (Abhishek Nigam) and his mother runs an NGO and a beauty parlour.</p>

  <p>Nigam started off as a gymnast. He was selected on the national-level gymnastics, where he won a gold medal.</p>
  
  <p><a href="https://en.wikipedia.org/wiki/Siddharth_Nigam" target="_blank">Source</a></p>`;

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

    const dialog = document.querySelector("my-dialog");

    document.getElementById("hrithik_wiki").addEventListener("click", () => {
      dialog.isOpen = true;
      dialog.content = hrithikWiki;
    });

    document.getElementById("vidyut_wiki").addEventListener("click", () => {
      dialog.isOpen = true;
      dialog.content = vidyutWiki;
    });

    document.getElementById("siddharth_wiki").addEventListener("click", () => {
      dialog.isOpen = true;
      dialog.content = siddharthWiki;
    });
};