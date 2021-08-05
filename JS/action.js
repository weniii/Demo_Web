/*=============== Header Scrolltop ===============*/
let bodyClassList = document.body.classList;
let lastScrollY = hideHereY = displayHereY = 0;
let hideOrNot = false;

window.addEventListener('scroll',function() {
  let nowScrollY = this.scrollY;
// scroll down
  if (nowScrollY > lastScrollY) {
    if (hideHereY === 0) {
      hideHereY = nowScrollY + 100;
    }
    // already hide
    if (hideOrNot === true && nowScrollY > hideHereY) {
      displayHereY = nowScrollY - 100;
    }
    // hide
    else if (hideOrNot === false && nowScrollY > hideHereY) {
      bodyClassList.add('hideHeader');
      hideOrNot = true;
    }
  }
// scroll up
  else if(nowScrollY < lastScrollY) {
    // display
    if (nowScrollY < displayHereY && hideOrNot === true) {
      bodyClassList.remove('hideHeader');
      hideOrNot = false;
    }
    // already dsiplay
    else if (nowScrollY < displayHereY && hideOrNot === false) {
      hideHereY = nowScrollY + 100;
    }
  }
  lastScrollY = nowScrollY
});