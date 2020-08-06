// @@include('_vendors.js');



// $(document).ready(function () {



// function ibg() {
//   $.each($('.ibg'), function (index, val) { if ($(this).find('img').length > 0) { $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")'); } });

// }

// ibg();

/*burger & navigation*/
  // $('.main-header__burger').click(function (event) {
  //   event.preventDefault();
  //   $('.main-header__burger,.main-header,.main-header__navigation').toggleClass('active');
  //   $('body').toggleClass('lock');
  // });

/*scroll to*/
  // $('.navigation__link').click(function () {
  //   $('.main-header__burger,.main-header,.main-header__navigation').toggleClass('active');
  //   if ($('body').hasClass('lock')) {
  //     $('body').removeClass('lock');
  //   }
  //   let scroll_el = $(this).attr('href');
  //   let destination = $(scroll_el).offset().top;
  //   if ($(scroll_el).length != 0) {
  //     $('html, body').animate({ scrollTop: destination - 66 }, 800);
  //   }
  //   return false;
  // });
/*slick-slider */
  // $('.slider').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1169.98,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 839.98,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 479.98,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //         arrows: false
  //       }
  //     }
  //   ]
  // });
/*spoilers */
  // $('.spoilers__title').click(function (event) {
  //   $(this).toggleClass('active').next().slideToggle(400);;
  // });
// });
/*tabs */
// let $tabs = function (target) {
//   let elemTabs = (typeof target === 'string' ? document.querySelector(target) : target);
//   let eventTabsShow;
//   let showTab = function (tabsLinkTarget) {
//     let tabsPaneTarget,
//       tabsLinkActive,
//       tabsPaneShow;
//     tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
//     tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__btn--active');
//     tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__content--active');
//     if (tabsLinkTarget === tabsLinkActive) {
//       return;
//     }
//     if (tabsLinkActive !== null) {
//       tabsLinkActive.classList.remove('tabs__btn--active');
//     }
//     if (tabsPaneShow !== null) {
//       tabsPaneShow.classList.remove('tabs__content--active');
//     }
//     tabsLinkTarget.classList.add('tabs__btn--active');
//     tabsPaneTarget.classList.add('tabs__content--active');
//     document.dispatchEvent(eventTabsShow);
//   };
//   let switchTabTo = function (tabsLinkIndex) {
//     let tabsLinks = elemTabs.querySelectorAll('.tabs__btn');
//     if (tabsLinks.length > 0) {
//       if (tabsLinkIndex > tabsLinks.length) {
//         tabsLinkIndex = tabsLinks.length;
//       } else if (tabsLinkIndex < 1) {
//         tabsLinkIndex = 1;
//       }
//       showTab(tabsLinks[tabsLinkIndex - 1]);
//     }
//   };

//   eventTabsShow = new CustomEvent('tab.show', { detail: elemTabs });

//   elemTabs.addEventListener('click', function (e) {
//     let tabsLinkTarget = e.target;
//     if (!tabsLinkTarget.classList.contains('tabs__btn')) {
//       return;
//     }
//     e.preventDefault();
//     showTab(tabsLinkTarget);
//   });

//   return {
//     showTab: function (target) {
//       showTab(target);
//     },
//     switchTabTo: function (index) {
//       switchTabTo(index);
//     }
//   }
// };
// $tabs('.tabs');
