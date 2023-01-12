import { helperFunctions } from "./helperFunctions.js";
import { indexContent } from "./index.js";

export const homeContent = {

  constructPage : function(
    body = document.querySelector('body')
  ){
    indexContent.favicon();
    body = helperFunctions.appendChildren(body, this.header(), indexContent.nav(), this.main())
  },
  header: function(
    headerElement = helperFunctions.generateElement('header'),
    bannerANDlogo = helperFunctions.generateElement('div',"bannerANDlogo"),
    logoHolder = indexContent.logoHolder(),
  ){
    headerElement = helperFunctions.nestChildren(headerElement, bannerANDlogo, logoHolder);    
    // headerElement.appendChild(navElement);
    return headerElement;
  },
  main: function(
    mainElement = helperFunctions.generateElement('main'),
    filter = helperFunctions.generateElement('div',"filter"),
    content = helperFunctions.generateElement('div',"content"),
    pageLabel = helperFunctions.generateElement('div',"pageLabel"),
    h1 = helperFunctions.generateElement('h1',"","","About Keturah"),
  ){
    mainElement = helperFunctions.nestChildren(mainElement, filter, pageLabel, h1);
    content = helperFunctions.appendChildren(content, this.description(), this.figure());
    filter.appendChild(content);
    return mainElement;
  },
  description: function(
    p = helperFunctions.generateElement('p',"about", "","LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, LOTS OF TEXT, ")
  ){
    return p;
  },
  figure: function(
    figure = helperFunctions.generateElement('figure'),
    img = helperFunctions.generateElement('img',"creative keturah","","","../images/profilePic_temp.png")
  ){
    figure.appendChild(img);
    return figure;
  }
}



homeContent.constructPage()


