
function mDown(obj) {
    obj.style.backgroundColor = "green";
    obj.style.color="white";
    obj.innerHTML = "Let go!";
  }
  
function mUp(obj) {
    obj.style.backgroundColor="white";
    obj.style.color="green";
    obj.style.border="3px solid green"
    obj.innerHTML="Order now!";
  }
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}