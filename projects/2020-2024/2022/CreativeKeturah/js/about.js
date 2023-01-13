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
    p = helperFunctions.generateElement('p',"about", "","Drawing ever since she was young, Keturah Williams enjoys the simplicity of sketching to convey ideas, concepts, and emotions. Whether it’s the beauty of belonging, the silence within shadows, or the fondness of fantasy; Keturah utilizes shading and texture to share her stories. Much of her inspiration stems from dreams she’s had, experiences of interest, or simple imagination.<br><br>One of the key features of her artwork is the ability for viewers to interpret her work according to their understanding. Thus many of her pieces (with some exceptions) exclude detailed backgrounds or expressive facial features. There’s a story behind every masterpiece, but viewers are given the liberty to dream up the tales themselves.")
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


