var httpRequest = new XMLHttpRequest();
var data;

httpRequest.open('GET', 'https://sheetsu.com/apis/v1.0/7654fbe24554', true); // Also try http://444.hu/feed
httpRequest.send(null);
httpRequest.onreadystatechange = function () {
   if(httpRequest.readyState === XMLHttpRequest.DONE) {
       data = JSON.parse(httpRequest.responseText);
   }
};
