function showActiveTab(
  url=window.location.href,
  snippet = url.slice((url.length-8),(url.length-5),
  navList=document.querySelector(".ul-navList").children,
  li_array = document.querySelectorAll('li'))
){
  // console.log(navList)
  for (let i=0; i<navList.length; i++){
    console.log(navList[i].id);
    if (navList[i].id.includes(snippet)){
      navList[i].classList.add('current')
    }

  }

}

function scrollHeaderEffect(
  header=document.querySelector('header')
){
  // window.onscroll = function(e) { //KEEP THIS
  //   // print "false" if direction is down and "true" if up
  //   console.log(this.oldScroll > this.scrollY, window.scrollY);
  //   this.oldScroll = this.scrollY;
  // }

  window.onscroll = function(e) {
    if (window.scrollY > 100){
      if (this.oldScroll > this.scrollY){
        console.log("scrollUp");
        header.style.top = "0rem";
      } else {
        header.style.top = "-5rem";
      }
      console.log(this.oldScroll > this.scrollY, window.scrollY);
      this.oldScroll = this.scrollY;
    }
    // console.log(this.oldScroll > this.scrollY, window.scrollY);
    this.oldScroll = this.scrollY;
  }
}







showActiveTab();
scrollHeaderEffect();
console.log("HELLOW")