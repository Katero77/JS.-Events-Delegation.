'use strict';
/*1.
1.1. 
1.2 */

document.addEventListener('click', toggleVisibility);

function toggleVisibility({ target }) {
  if (!target.classList.contains('headListItem')) return;
  const currentSubListItem = target.querySelector('.subList');
  const subListItems = document.querySelectorAll('.subList');
  const currentVisibility = currentSubListItem.hidden;
  subListItems.forEach(item => item.hidden = true);
  currentSubListItem.hidden = !currentVisibility;
}