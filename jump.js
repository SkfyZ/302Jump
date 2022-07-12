const url=window.location.search;
const url1=url.slice(1)
const realurl=decodeURI(url1);
location.href="realurl";