import { helperFunctions } from "./helperFunctions.js";

export const indexContent = {
  favicon: function(
    favicon = document.querySelector("link[rel~='icon']")
  ){ 
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(favicon);
    }
    
    let pathAdjuster = this.getPathAdjuster();
    favicon.href = `${pathAdjuster[0] + "images/favicon.png"}`
  },
  scrollUp : function(icon = helperFunctions.generateElement('i',"scrollUp","fa-solid fa-arrow-up")){
    window.addEventListener('scroll', (e)=>{
      let scroll = window.scrollY;
      try{
          if (scroll > 0){
              icon.style.opacity=1;
          }
          else{
              icon.style.opacity=0
          }
          icon.addEventListener('click',(e)=>{
              document.documentElement.scrollTop = 0;
          })
          
      }
      catch(err){console.log(err)}
          
      })
    return icon;
  },
  getPathAdjuster: function(
    url = window.location.href,
    isIndex = false,
    pathAdjuster = ["","pages/"]
  ){

    if (url.includes('index') || url.includes('home')){
      isIndex = true;
    }
    if (isIndex == false){
      pathAdjuster = ["../",""];
    }
  return pathAdjuster;
  },
  nav: function(
    navElement = helperFunctions.generateElement('nav'),
    ulElement = helperFunctions.generateElement('ul'),
    pathAdjuster = this.getPathAdjuster()
  ){

    let decor1 = helperFunctions.generateElement('li',"","decor","-");
    let portfolioLink = helperFunctions.generateElement('li',"","",`<a href=${pathAdjuster[0] + "index.html"}>Portfolio</a>`)
    let aboutLink = helperFunctions.generateElement('li',"","",`<a href=${pathAdjuster[1] + "about.html"}>About</a>`)
    let contactLink = helperFunctions.generateElement('li',"","",`<a href=${pathAdjuster[1] + "contact.html"}>Contact</a>`)
    let decor2 = helperFunctions.generateElement('li',"","decor","-");
    
    ulElement = helperFunctions.appendChildren(ulElement, decor1, portfolioLink, aboutLink, contactLink, decor2);
    navElement.appendChild(ulElement);
    return navElement;
  },
  logoHolder: function(
    logoHolder = helperFunctions.generateElement('div',"logoHolder"),
    logoImg = helperFunctions.generateElement('img',"logo","","",),
    pathAdjuster = this.getPathAdjuster()
  ){
    console.log(pathAdjuster[0])
    logoImg.setAttribute('src',`${pathAdjuster[0] + "images/CK_logo_white.png"}`)
    logoHolder.appendChild(logoImg);
    return logoHolder;
  }
}