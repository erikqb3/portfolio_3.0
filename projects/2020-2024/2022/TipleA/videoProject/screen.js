p_Elements = [
  "<p class='group0'>START</p> ",
"  <p class='group1'>Human Society</p> ",
  "<p class='group1'>Consisting of Individuals</p>",
  "<p class='group1'>Evolving through Experts</p>",

  "<p class='group2'>Everyone has a time to shine</p>",
  "<p class='group2'>a dream to catch</p>",
  "<p class='group2'>a voice to be heard!</p>",

  "<p class='group3'>But it can't be done alone</p>",
  "<p class='group3'>All experts of any field knows...</p>",
  
  "<p class='group4 hold'>\"You can design...</p>",
  "<p class='group4 hold'>and create...</p>",
  "<p class='group4 hold'>and build the most...</p>",
  "<p class='group4 hold'>wonderful place on earth...</p>",

  "<p class='group5 dropPrev'>BLANK</p>",
  "<p class='group5 hold'>But it takes PEOPLE</p>",
  "<p class='group5'>to make the DREAM...</p>",
  "<p class='group5 dropPrev'>BLANK</p>",
  "<p class='group5 hold'>a REALITY!\"</p>",
  "<p class='group5'>Walt Disney</p>",

  "<p class='group6 dropPrev'>So how do you find your people?</p>",
  "<p class='group6'>You make yourself<br>KNOWN</p>",

  "<p class='group7'><img src='resources/logo1.png' alt='Instagram'></p>",
  "<p class='group7'><img src='resources/logo2.png' alt='YouTube'></p>",
  "<p class='group7'><img src='resources/logo3.png' alt='Twitter'></p>",
  "<p class='group7'><img src='resources/logo4.png' alt='LinkedIn'></p>",
  
  "<p class='group8'>You will be Found <br>on sites like these</p>",
  "<p class='group8'>But will you be Known?</p>",

  "<p class='group9 hold'>What makes your social media profile<br>different<br>from hundreds of others?</p>",

  "<p class='group10 dropPrev'>Your life's work <br>deserves more than this</p>",
  "<p class='group10 '>Dont' just get found</p>",
  "<p class='group10 '>Get Known</p>",

  "<p class='group11'>Have a Website</p>",

  "<p class='group12 hold'>Your portfolio is</p>",
  "<p class='group12'>your museum</p>",

  "<p class='group13 dropPrev'>BLANK</p>",
  "<p class='group13 hold'>Display your works,</p>",
  "<p class='group13 '>like the masterpieces they are!</p>",

  "<p class='group14 dropPrev'>Whether you hire help...</p>",
  "<p class='group14'>or build off the shoulders of </br><span>GIANTS </span>...</p>",
  "<p class='group14'>What matters most is what you display</p>",
  "<p class='group14'>And how you do it</p>",

  "<p class='group15'>Because the world is full of people,</p>",
  "<p class='group15'>Supports and Specialists,</p>",
  "<p class='group15'>who will KNOW who you are...</p>",

  "<p class='group16'>...when you let your work Shine</p>",
  "<p class='group16'>Get Known</p>",
  "<p>Special Thanks to the following and their amazing Portfolios and Artwork:</p>"
]

function nextText(
  counter = 0,
  textHolder = document.querySelector(".id_text"),
  video=document.querySelector('video')
) {
  document.addEventListener('keydown',(e)=>{
    if (video.paused){
      playVideo();
    }
    // let key = String.fromCharCode(e.key)
    console.log(e.key, counter);
    if (counter > -1){
      switch(e.key){
        case "d":
        case "l":
        case " ":
          try {
            textHolder.innerHTML = textHolder.innerHTML + p_Elements[counter];
            console.log(textHolder.children[counter-1])
            if (!textHolder.children[counter-1].classList.contains("hold")){
              textHolder.children[counter-1].classList.add("wiped");
            }
            if (textHolder.children[counter].classList.contains("dropPrev")){
              console.log("dropPrev")
              for (hold of document.querySelectorAll('.hold')){
                hold.classList.add('wiped');
              };
            }
          }
          catch(err){
            console.log(err);
          }
          ++counter;
          break;
        case "a":
        case "j":
          textHolder.lastChild.remove();
          textHolder.lastChild.classList.remove('wiped');
          counter = counter - 1;
          break;
        default:
          break;
      }
    }
    // if (key == "A")

  })
}
function playVideo(
  video=document.querySelector('video')
){
  video.play();
}

nextText();