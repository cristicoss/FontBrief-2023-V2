'use strict';

const checkbox = document.querySelectorAll('.filters_checkbox');
const resetButtons = document.querySelectorAll('.filtru_reset-checkbox');
const serifCheckbox = document.getElementById('serif');
const sansCheckbox = document.getElementById('sans');
const columnView = document.querySelector('.controls_columns-button');
const iconColumn = document.querySelector('.icon_view-column');
const listView = document.querySelector('.controls_list-button');
const iconList = document.querySelector('.icon_view-list');
const gridView = document.querySelector('.controls_grid-button');
const iconGrid = document.querySelector('.icon_view-grid');
const cmsList = document.querySelector('.cms_list');
const listWrapper = document.querySelector('.cms_list-wrapper');
const colorWheel = document.querySelector('.button_colour-wheel');
const overlayColor = document.querySelector('.cms_overlay-color');
const gradientHeader = document.querySelector('.header_gradient');
const buttonResetAll = document.querySelector('.button_reset');
const rangeSliders = document.getElementsByTagName('input');
const rangeSlider = rangeSliders[46];
const foundries = document.querySelectorAll('.foundry');
const items = document.querySelectorAll('.cms_item');
const imageFont = document.querySelector('.image_font-title-dynamic-grid');
const sectionBuffer = document.getElementById('section4');
const sectionBuffer2 = document.getElementById('section4b');
const targetListAnimation = document.querySelector('.section_disable-scrolling');
const sectionPromo = document.querySelector('.section_promoted-fonts');
const bgList = document.querySelector('.cms_background-white');
const promoImages = document.querySelectorAll('.promo_image-wrapper');
const imageWrapper = document.querySelector('.image_wrapper');
const promoWrapper = document.querySelectorAll('.promo_collection-wrapper');

const section2 = document.getElementById('section-font-list');

////// hide newsletter popup for 1 day///

const bannercloser = document.getElementById('closePopup');
const banner = document.getElementById('nlPopup');
const closeNL = document.getElementById('buttonCloseNl');

banner?.classList.remove('hidden');
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function checkCookie() {
  if (getCookie('banner')) {
    banner.classList.add('hidden');
  } else {
    banner.classList.remove('hidden');
  }
}
checkCookie();

bannercloser.addEventListener('click', () => {
  setTimeout(function () {
    banner.classList.remove('hidden');
  }, 1 * 60 * 60 * 60 * 1000);
  var d = new Date();
  d.setTime(d.getTime() + 1 * 60 * 60 * 60 * 1000);
  var expires = '; expires=' + d.toGMTString();
  document.cookie = 'banner=1' + expires + '; path=/';
  banner.classList.add('hidden');
});

closeNL.addEventListener('click', () => {
  setTimeout(function () {
    banner.classList.remove('hidden');
  }, 1 * 60 * 60 * 60 * 1000);
  var d = new Date();
  d.setTime(d.getTime() + 1 * 60 * 60 * 60 * 1000);
  var expires = '; expires=' + d.toGMTString();
  document.cookie = 'banner=1' + expires + '; path=/';
  setTimeout(function () {
    banner.classList.add('hidden');
  }, 2000);
});
/////// hide newsletter popup for 1 day///

////////Reset all filters and interractions////
function resetAll() {
  for (const resetButton of resetButtons) {
    if (!resetButton.classList.contains('hidden')) {
      resetButton.classList.add('hidden');
    }
  }
  for (let foundry of foundries) {
    foundry.classList.remove('opacity-null');
  }
  cmsList?.classList.remove('cms_list');
  cmsList.classList.add('dynamic');
  document.body.style.backgroundColor = 'white';
  overlayColor?.classList.add('hidden');
  listWrapper.style.filter = 'invert(0%)';
  listWrapper.style.mixBlendMode = 'multiply';
  gradientHeader.style.opacity = '100%';
  iconGrid?.classList.remove('hidden');
  gridView.classList.add('underline');
  buttonResetAll.classList.add('inactive');
  //listWrapper.style.width = '60em';
  //rangeSlider.value = '60';
  //rangeSlider.disabled = false;
  currentIndex = 0;
}
resetAll();
buttonResetAll?.addEventListener('click', function () {
  resetAll();
});

////////Reset all filters and interractions////

/////// Select a range of checkboxes
checkbox.forEach(function (elem) {
  elem.addEventListener('change', function () {
    // var section = document.getElementById('section_list');
    // section.scrollIntoView({ behavior: 'smooth' });
    // Remove the event listener for mouse movement
    scrollToFontSection();

    document.getElementById(this.id[0] + '_filtru')?.classList.add('hidden');
    let currentChecked = Number(this.id[1]);
    for (let i = 1; i <= 5; i++) {
      if (document.getElementById(this.id[0] + i).checked && currentChecked !== i) {
        previousChecked = i;
      }
    }

    if (previousChecked < currentChecked - 1 && previousChecked !== 0) {
      for (let i = previousChecked + 1; i < currentChecked; i++) {
        if (currentChecked !== i) {
          document.getElementById(this.id[0] + i)?.click();
          document.getElementById(this.id[0] + '_filtru')?.classList.remove('hidden');
          currentChecked = previousChecked - 1;
        }
      }
    } else if (previousChecked > currentChecked + 1 && previousChecked !== 0) {
      for (let i = currentChecked + 1; i < previousChecked; i++) {
        document.getElementById(this.id[0] + i)?.click();
        document.getElementById(this.id[0] + '_filtru')?.classList.remove('hidden');
        previousChecked = currentChecked + 1;
      }
    } else if (
      (previousChecked === currentChecked - 1 || previousChecked === currentChecked + 1) &&
      previousChecked !== 0
    ) {
      document.getElementById(this.id[0] + '_filtru')?.classList.remove('hidden');
    }
    // Add the event listener for mouse movement back
  });
});

/*
function addCheckboxListeners(groupName, resetFilterName) {
  const checkboxes = document.querySelectorAll(`input[type="checkbox"][id^="${groupName}"]`);
  const resetFilter = document.getElementById(resetFilterName);
  resetFilter.classList.add('hidden');

  let previousCheckbox = null;

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      scrollToFontSection();
      resetFilter.classList.add('hidden');

      if (!previousCheckbox) {
        previousCheckbox = checkbox;
        buttonResetAll.classList.remove('inactive');
        return;
      }

      const start = parseInt(previousCheckbox.id.slice(1), 10);
      const end = parseInt(checkbox.id.slice(1), 10);

      // Click all checkboxes in between the start and end points
      for (let i = Math.min(start, end) + 1; i < Math.max(start, end); i++) {
        const currentCheckbox = document.getElementById(`${groupName}${i}`);
        currentCheckbox.click();
        currentCheckbox.checked = true;
      }

      resetFilter.classList.remove('hidden');
      previousCheckbox = checkbox;
    });
  });
  */

// const checkboxes = document.querySelectorAll(`input[type="checkbox"][id^="${groupName}"]`);
// const resetFilter = document.getElementById(resetFilterName);
// resetFilter.classList.add('hidden');
// resetFilter.addEventListener('click', () => {
//   checkboxes.forEach(checkbox => {
//     if (checkbox.checked) {
//       checkbox.click();
//       checkbox.checked = false;
//     }
//   });
//   checkActive();
//   resetFilter.classList.add('hidden');
//   previousCheckbox = null;
// });

// addCheckboxListeners('e', 'e_filtru');
// addCheckboxListeners('r', 'r_filtru');
// addCheckboxListeners('f', 'f_filtru');
// addCheckboxListeners('o', 'o_filtru');
// addCheckboxListeners('p', 'p_filtru');
// addCheckboxListeners('d', 'd_filtru');
// addCheckboxListeners('x', 'x_filtru');
// addCheckboxListeners('w', 'w_filtru');
////////select range of checkboxes///

////////makes the Reset Button inactive//
// function checkActive() {
//   var allChecked = true;
//   var checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   for (var i = 0; i < checkboxes.length; i++) {
//     if (checkboxes[i].checked) {
//       allChecked = false;
//       break;
//     }
//   }
//   if (allChecked) {
//     buttonResetAll?.classList.add('inactive');
//   }
// }

//////// scrolls to the font list section if above the section
function scrollToFontSection() {
  const sectionTop =
    section2.offsetTop - 1 * parseFloat(getComputedStyle(document.documentElement).fontSize);
  if (window.pageYOffset > sectionTop) {
    return;
  }
  window.scrollTo({ top: sectionTop, behavior: 'smooth' });
  bgList.classList.add('white');
}

////////// hover range of checkboxes////
let previousChecked;
checkbox.forEach(function (elem) {
  elem.addEventListener('mouseover', function () {
    let checkedBox;
    for (let i = 1; i <= 5; i++) {
      if (document.getElementById(elem.id[0] + i).checked) {
        checkedBox = i;
      }
      if (checkedBox < this.id[1]) {
        for (let i = checkedBox; i < this.id[1]; i++) {
          document.getElementById(elem.id[0] + i).classList.add('hoverFiltru');
        }
      }
      if (checkedBox > this.id[1]) {
        for (let i = this.id[1]; i < checkedBox; i++) {
          document.getElementById(elem.id[0] + i).classList.add('hoverFiltru');
        }
      }
    }
  });
  elem.addEventListener('mouseout', function () {
    let checkedBox;
    for (let i = 1; i <= 5; i++) {
      if (document.getElementById(elem.id[0] + i).checked) {
        checkedBox = i;
      }
      if (checkedBox < this.id[1]) {
        for (let i = checkedBox; i < this.id[1]; i++) {
          document.getElementById(elem.id[0] + i).classList.remove('hoverFiltru');
        }
      }
      if (checkedBox > this.id[1]) {
        for (let i = this.id[1]; i < checkedBox; i++) {
          document.getElementById(elem.id[0] + i).classList.remove('hoverFiltru');
        }
      }
    }
  });
});

/////////// hover range of checkboxes////

///uncheck category of filters////
resetButtons.forEach(function (elem) {
  elem.addEventListener('click', function () {
    for (let i = 1; i <= 5; i++) {
      if ((document.getElementById(this.id[0] + i).checked = true)) {
        document.getElementById(this.id[0] + i)?.click();
        previousChecked = 0;
      }
      document.getElementById(elem.id[0] + i).classList.remove('hoverFiltru');
      this.classList.add('hidden');
    }
  });
});
///uncheck category of filters////

//////////toogle between sans and serif checkboxes///
serifCheckbox?.addEventListener('click', function () {
  if (sansCheckbox.checked === true && this.checked === true) {
    sansCheckbox.click();
  }
});

sansCheckbox?.addEventListener('click', function () {
  if (serifCheckbox.checked === true && this.checked === true) {
    serifCheckbox.click();
  }
});
//////////toogle between sans and serif checkboxes///

////////// Switch between grid & list view ///
gridView?.addEventListener('click', function () {
  cmsList.classList.remove('cms_list');
  if (!cmsList.classList.contains('dynamic')) {
    cmsList.classList.add('dynamic');
  }
  if (!gridView.classList.contains('underline')) {
    gridView.classList.add('underline');
  }
  listView.classList.remove('underline');
  columnView.classList.remove('underline');
  iconList?.classList.add('hidden');
  iconColumn?.classList.add('hidden');
  iconGrid?.classList.remove('hidden');
  imageFont?.classList.remove('.image_font-title-list');
  for (const foundry of foundries) {
    foundry.classList.add('opacity-null');
  }
  rangeSlider.disabled = true;
});

columnView?.addEventListener('click', function () {
  cmsList.classList.remove('cms_list');
  cmsList.classList.remove('dynamic');
  gridView.classList.remove('underline');
  listView.classList.remove('underline');
  columnView.classList.add('underline');
  iconList?.classList.add('hidden');
  iconColumn?.classList.remove('hidden');
  iconGrid?.classList.add('hidden');
  for (const foundry of foundries) {
    foundry.classList.add('opacity-null');
  }
  rangeSlider.disabled = true;
});

listView?.addEventListener('click', function () {
  cmsList.classList.add('cms_list');
  cmsList.classList.remove('dynamic');
  gridView.classList.remove('underline');
  listView.classList.add('underline');
  columnView.classList.remove('underline');
  iconList?.classList.remove('hidden');
  iconColumn?.classList.add('hidden');
  iconGrid?.classList.add('hidden');
  for (const foundry of foundries) {
    foundry.classList.add('opacity-null');
  }
  rangeSlider.disabled = false;
});

///////////Change background and font colors //
const colors = [
  'white',
  'white',
  '#F7F695',
  '#0062EE',
  'black',
  '#B1EEB4',
  '#F1CACB',
  '#ECC59D',
  'white',
];
let currentIndex = 0;
colorWheel?.addEventListener('click', function () {
  document.body.style.cssText = 'background-color: ' + colors[currentIndex];
  currentIndex++;

  overlayColor.classList.add('hidden');
  if (currentIndex === 1) {
    listWrapper.style.cssText = 'white';
    overlayColor.classList.remove('hidden');
    overlayColor.style.backgroundColor = 'blue';
  }
  if (currentIndex === 2) {
    overlayColor.classList.remove('hidden');
    overlayColor.style.backgroundColor = 'red';
  }
  if (currentIndex === 4 || currentIndex === 5) {
    listWrapper.style.filter = 'invert(100%)';
    listWrapper.style.mixBlendMode = 'screen';
    gradientHeader.style.opacity = '30%';
  } else {
    listWrapper.style.filter = 'invert(0%)';
    listWrapper.style.mixBlendMode = 'multiply';
    gradientHeader.style.opacity = '100%';
  }
  if (currentIndex === undefined || currentIndex >= colors.length) {
    currentIndex = 0;
  }
});
///////////Change background and font colors //

////////// Animation for the menu when scrolling the intro//
const fixedLogo = document.querySelector('.menu_left-container');
const fixedMenu = document.querySelector('.menu_right-container');
const menuTitles = document.querySelectorAll('.menu_title');
const filterWrappers = document.querySelectorAll('.filters_wrapper');
const filterContainer = document.querySelector('.filters_container');
const logo = document.getElementById('logo');
const logoTop = logo.getBoundingClientRect().top;

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY;
  const logoPosition = logoTop - scrollPosition;

  if (logoPosition <= -100) {
    fixedLogo.classList.add('in-view');
    fixedMenu.classList.add('intro-right');
    filterContainer.classList.remove('upscale');
    filterContainer.classList.add('downscale');
    for (let i = 0; i < menuTitles.length; i++) {
      setTimeout(function () {
        menuTitles[i].classList.add('intro-title1');
      }, i * 200);
    }
    for (let i = 0; i < filterWrappers.length; i++) {
      filterWrappers[i].classList.add('filter' + i);
    }
  } else {
    fixedLogo.classList.remove('in-view');
    fixedMenu.classList.remove('intro-right');
    filterContainer.classList.remove('downscale');
    filterContainer.classList.add('upscale');

    for (let i = 0; i < menuTitles.length; i++) {
      setTimeout(function () {
        menuTitles[i].classList.remove('intro-title1');
      }, i * 200);
    }
    for (let i = 0; i < filterWrappers.length; i++) {
      filterWrappers[i].classList.remove('filter' + i);
    }
  }
});
////////////End of intro animation of menu//

///////////When Section Buffer touches the top of the viewport////////
function onScroll() {
  const targetTop = targetListAnimation.offsetTop;
  const scrollY = window.scrollY;

  if (scrollY >= targetTop) {
    bgList.classList.add('white');
    imageWrapper.classList.add('paused');
    //sectionPromo?.classList.add('hidden');
  } else {
    bgList.classList.remove('white');
    imageWrapper.classList.remove('paused');
    //sectionPromo?.classList.remove('hidden');
  }
}

window.addEventListener('scroll', onScroll);

//////////change size of fonts with the range slider///
rangeSlider.addEventListener('input', function () {
  let x = this.value;
  listWrapper.style.width = x + 'EM';

  if (x < 45) {
    for (const foundry of foundries) {
      foundry.classList.add('opacity-null');
    }
  } else {
    for (const foundry of foundries) {
      foundry.classList.remove('opacity-null');
    }
  }
});

////////////pause promo fonts on mouse over image/////////
promoImages.forEach(function (elem) {
  elem.addEventListener('mouseover', function () {
    let wrapperID = elem.id.slice(0, 7);
    document.getElementById(wrapperID + 'a')?.classList.add('paused');
    document.getElementById(wrapperID + 'b')?.classList.add('paused');
  });
  elem.addEventListener('mouseout', function () {
    let wrapperID = elem.id.slice(0, 7);
    document.getElementById(wrapperID + 'a')?.classList.remove('paused');
    document.getElementById(wrapperID + 'b')?.classList.remove('paused');
  });
});

////////////Show FIU on mouse over promo font//////

let followMouse = null;

promoWrapper.forEach(function (elem) {
  elem.addEventListener('mouseover', function () {
    document.getElementById('promo-w1-fiu')?.classList.add('hidden');
    document.getElementById('promo-w2-fiu')?.classList.add('hidden');
    document.getElementById('promo-w3-fiu')?.classList.add('hidden');
    document.getElementById('promo-w4-fiu')?.classList.add('hidden');
    followMouse = document.getElementById(this.id + '-fiu');
    followMouse?.classList.remove('hidden');

    document.addEventListener('mousemove', moveMouse);
  });

  elem.addEventListener('mouseout', function () {
    followMouse?.classList.add('hidden');
  });
});

document.addEventListener('mousemove', function () {
  if (followMouse !== null) {
    requestAnimationFrame(moveMouse);
  }
});

let lastTime = 0;
const fps = 60; // Limit to 60 fps
function moveMouse(event) {
  const parentRect = followMouse.closest('.promo_collection-wrapper').getBoundingClientRect();
  const mouseX = event.clientX - parentRect.left;
  const mouseY = event.clientY - parentRect.top;

  // Position followMouse element left or right of the mouse position
  const pageWidth = document.documentElement.clientWidth;
  if (mouseX > pageWidth / 2) {
    followMouse.style.left = `${mouseX - followMouse.offsetWidth}px`;
  } else {
    followMouse.style.left = `${mouseX}px`;
  }

  const currentTime = performance.now();
  const timeElapsed = currentTime - lastTime;
  const timeToCall = 1000 / fps - timeElapsed;

  if (timeToCall > 0) {
    // Throttle the function
    setTimeout(() => {
      requestAnimationFrame(moveMouse);
    }, timeToCall);
  } else {
    // Call the function without throttling
    requestAnimationFrame(moveMouse);
  }

  lastTime = currentTime;
}
