import { helperFunctions } from "./helperFunctions.js";
import { indexContent } from "./index.js";

export const homeContent = {
  constructPage : function(
    body = document.querySelector('body')
  ){
    indexContent.favicon();
    body = helperFunctions.appendChildren(body, this.header(), indexContent.nav(), this.main(), indexContent.scrollUp())
    this.fetchFromJSON();
  },
  header: function(
    headerElement = helperFunctions.generateElement('header'),
    bannerANDlogo = helperFunctions.generateElement('div',"bannerANDlogo"),
    logoHolder = indexContent.logoHolder(),
    banner = helperFunctions.generateElement('img',"banner","","","images/Keepers/Numb21.webp"),
    navElement = indexContent.nav()
  ){
    headerElement = helperFunctions.nestChildren(headerElement, bannerANDlogo, logoHolder);
    bannerANDlogo.appendChild(banner);
    // headerElement.appendChild(navElement);
    return headerElement;
  },
  fetchFromJSON : async function(
    json = "js/images.json"
  ){
    try {
      await fetch (json)
        .then((response)=>{return response.json()})
        .then((jsObject)=>{
          this.gallery(jsObject);
        })
    }
    catch(err){console.log(err)} 
  },
  gallery : function(
    jsObject,
    main = document.querySelector("main"),
    gallery = helperFunctions.generateElement('section',"gallery"),
    grid = helperFunctions.generateElement('div',"grid")
  ){
    for (let img of Object.keys(jsObject)){
      let imgArticle = this.imgArticle(jsObject[img])
      grid.appendChild(imgArticle)
    }
    gallery.appendChild(grid);
    main.appendChild(gallery);

  },
  imgArticle : function (
    img,
    imgHolder = helperFunctions.generateElement('article',img.title,"imgHolder"),
    imgOverlay = helperFunctions.generateElement('div',"","imgOverlay"),
    imgElement = helperFunctions.generateElement('img', `${img.title}_pic`,`${img.type}`,"",img.path)
  ){

    // if (img.type == "tall"){
    //   imgElement = helperFunctions.generateElement('img',`${img.title}_pic`,"tall","",img.path)
    // }
    // else if (img.type == "wide"){
    //   imgElement = helperFunctions.generateElement('img',`${img.title}_pic`,"wide","",img.path)
    // }
    // else if (img.type == "square")

    imgHolder = helperFunctions.appendChildren(imgHolder, imgOverlay,imgElement);
    imgHolder.addEventListener('click',(e)=>{
      this.popUpPreview(img, imgHolder);
    })

    // console.log(imgHolder);
    return imgHolder;
  },
  main: function(
    mainElement = helperFunctions.generateElement('main'),
    pageLabel = helperFunctions.generateElement('div',"pageLabel"),
    h1 = helperFunctions.generateElement('h1',"","","Portfolio Sketches"),
    p = helperFunctions.generateElement('p',"","subtext","(Click to enlarge)")
  ){
    mainElement = helperFunctions.nestChildren(mainElement, pageLabel, h1);
    pageLabel.appendChild(p);
    return mainElement;
  },
  popUpPreview : function(
    imgData, 
    imgHolder,
    popUp = helperFunctions.generateElement('section',"popUp"),
    side1 = helperFunctions.generateElement('div',"side1"),
    figure = helperFunctions.generateElement('figure'),
    overlay = helperFunctions.generateElement('a',"","overlay","","https://www.instagram.com/creativeketurah/"),
    img = helperFunctions.generateElement('img',`popImg`,"","",imgData.path),
    side2 = helperFunctions.generateElement('div',"side2"),
    infoSection = helperFunctions.generateElement('div',"infoSection"),
    title = helperFunctions.generateElement('h1',"title","","Title: (Up to Viewer Interpretation)"),
    descript = helperFunctions.generateElement('p',"descript","","Description: U.T.V.I<br>Click to See More"))
    {
      if (imgData.type == "tall"){
        figure.classList.add("tall");
      }
      else {
        figure.classList.add('wide')
      }

      figure.appendChild(img);
      side1 = helperFunctions.nestChildren(side1,figure,overlay);
      overlay = helperFunctions.appendChildren(overlay, title, descript);
      // infoSection = helperFunctions.appendChildren(infoSection, title,descript)
      // side2.appendChild(infoSection);
      // popUp = helperFunctions.appendChildren(popUp, side1,side2);
      popUp.appendChild(side1);
      popUp.classList.add('fadeIn');
      popUp.addEventListener('click',(e)=>{
        popUp.remove();
      })
      document.querySelector('body').appendChild(popUp);

  }
}



homeContent.constructPage()


