chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = details.url
    const filters = ['googleadservices', 'googlesyndication', 'g.doubleclick']
    for (const filter of filters) {
      if(url.indexOf(filter) != -1){
        return {
          cancel: true,
        }
      }
    }
    return {
      cancel: false,
    };
  },
  {
    urls: [
      '<all_urls>',
    ],
  },
  ['blocking']
);
