import { helperFunctions } from "./helperFunctions.js";

export const establishHTML = {
  favicon: function(
    favicon = document.querySelector("link[rel~='icon']")
  ){ 
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(favicon);
    }
    favicon.href = 'images/favicon.png';
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
  popUpPreview : function(
    imgData, 
    imgHolder,
    popUp = helperFunctions.generateElement('section',"popUp"),
    side1 = helperFunctions.generateElement('div',"side1"),
    figure = helperFunctions.generateElement('figure'),
    overlay = helperFunctions.generateElement('div',"","overlay"),
    img = helperFunctions.generateElement('img',`popImg`,"","",imgData.path),
    side2 = helperFunctions.generateElement('div',"side2"),
    infoSection = helperFunctions.generateElement('div',"infoSection"),
    title = helperFunctions.generateElement('h1',"title","","Title: (Up to Viewer Interpretation)"),
    descript = helperFunctions.generateElement('p',"descript","","Description: U.T.V.I<br><a href='https://www.instagram.com/creativeketurah/'>See more</a>"))
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

  },
  scrollUp : function(icon = document.getElementById('scrollUp')){
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
  },
  useFunctions : function(){
    this.fetchFromJSON();
    this.favicon();
    this.scrollUp();
  }
}



establishHTML.useFunctions()


