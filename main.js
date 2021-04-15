// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeHeart = document.querySelector("span.like-glyph")
let errorModal = document.querySelector("div#modal")

function reinstateErrorHide () {
  errorModal.className = "hidden"
  console.log("what the what?")
}


likeHeart.addEventListener("click", (evt) => {
  console.log("A heart was clicked")
  mimicServerCall()
  .then(data => {
    console.log('Success:', data);
    if(likeHeart.innerText === EMPTY_HEART){
      likeHeart.innerText = FULL_HEART;
      likeHeart.className = "activated-heart"
    } else {
      likeHeart.innerText = EMPTY_HEART;
      likeHeart.removeAttribute("class")
    }
    
    
  })
  .catch((error) => {
    console.error('Error:', error);
    errorModal.removeAttribute("class");
    setTimeout(reinstateErrorHide,3000)
  });
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
