import { sharedHTML,helperFunctions } from "../js/index.js";


const establishHTML = {
resumeHTML : function(
    main = document.querySelector('main'),
    resumeLink = helperFunctions.generateElement("a","resumeLink","","","../resources/ErikQ.Birch(resume4.0).pdf"),
    resumeImg = helperFunctions.generateElement('img',"resumeImg","","","../resources/img/2022Resume.png"),
    returnBtn = helperFunctions.generateElement('a',"returnBtn","button","Return","../index.html"),
  ){
    resumeLink.appendChild(resumeImg);
    main = helperFunctions.appendChildren(main, resumeLink, returnBtn);
  },
}





function startUp (){
  console.log("HELLOW");
  sharedHTML.header();
  sharedHTML.main();
  establishHTML.resumeHTML();
  sharedHTML.footer();
}

startUp();