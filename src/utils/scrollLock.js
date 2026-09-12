// The mobile drawer and the resume dialog both used to write document.body.style.overflow
// directly and both reset it to 'auto' on close. Opening the drawer over an open dialog and
// closing it unlocked the page underneath the dialog. Counting locks fixes that: the page
// only unlocks when the last holder releases.
let holders = 0;

export const lockScroll = () => {
  holders += 1;
  document.body.style.overflow = 'hidden';
};

export const unlockScroll = () => {
  holders = Math.max(0, holders - 1);
  if (holders === 0) document.body.style.overflow = '';
};
