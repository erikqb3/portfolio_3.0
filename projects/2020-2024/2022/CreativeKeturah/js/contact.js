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
    h1 = helperFunctions.generateElement('h1',"","","Contact Methods"),
  ){
    mainElement = helperFunctions.nestChildren(mainElement, filter, pageLabel, h1);
    content = helperFunctions.appendChildren(content, this.description());
    filter.appendChild(content);
    return mainElement;
  },
  description: function(
    p = helperFunctions.generateElement('p',"about", "",
    "<i class='fa-brands fa-instagram'></i>\
    <i class='fa-brands fa-facebook'></i>\
    <i class='fa-regular fa-envelope'></i>")
  ){
    for (let i=0; i < p.children.length; i++){
      console.log(p.children[i])
      p.children[i].addEventListener('click', (e)=>{
        console.log(e.target);
        if (e.target.classList.contains('fa-instagram')){
          window.location.href = "https://www.instagram.com/creativeketurah/";
        }
        else if (e.target.classList.contains('fa-facebook')){
          window.location.href = "https://www.facebook.com/profile.php?id=100077059182593";
        }
        else {
          let email = "email@email.com";
          navigator.clipboard.writeText(email);
          alert(`copied, ${email}, to clipboard`);
        }
      })
    }
    return p;
  },
}



homeContent.constructPage()


