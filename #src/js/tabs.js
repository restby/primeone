/*tabs */
let $tabs = function (target) {
  let elemTabs = (typeof target === 'string' ? document.querySelector(target) : target);
  let eventTabsShow;
  let showTab = function (tabsLinkTarget) {
    let tabsPaneTarget,
      tabsLinkActive,
      tabsPaneShow;
    tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
    tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__btn--active');
    tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__content--active');
    if (tabsLinkTarget === tabsLinkActive) {
      return;
    }
    if (tabsLinkActive !== null) {
      tabsLinkActive.classList.remove('tabs__btn--active');
    }
    if (tabsPaneShow !== null) {
      tabsPaneShow.classList.remove('tabs__content--active');
    }
    tabsLinkTarget.classList.add('tabs__btn--active');
    tabsPaneTarget.classList.add('tabs__content--active');
    document.dispatchEvent(eventTabsShow);
  };
  let switchTabTo = function (tabsLinkIndex) {
    let tabsLinks = elemTabs.querySelectorAll('.tabs__btn');
    if (tabsLinks.length > 0) {
      if (tabsLinkIndex > tabsLinks.length) {
        tabsLinkIndex = tabsLinks.length;
      } else if (tabsLinkIndex < 1) {
        tabsLinkIndex = 1;
      }
      showTab(tabsLinks[tabsLinkIndex - 1]);
    }
  };

  eventTabsShow = new CustomEvent('tab.show', { detail: elemTabs });

  elemTabs.addEventListener('click', function (e) {
    let tabsLinkTarget = e.target;
    if (!tabsLinkTarget.classList.contains('tabs__btn')) {
      return;
    }
    e.preventDefault();
    showTab(tabsLinkTarget);
  });

  return {
    showTab: function (target) {
      showTab(target);
    },
    switchTabTo: function (index) {
      switchTabTo(index);
    }
  }
};
tabs('.tabs');
