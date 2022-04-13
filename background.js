let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Couleur choisi actuellement est : %cverte', `color: ${color}`);
});

