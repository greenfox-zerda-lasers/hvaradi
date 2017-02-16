function changeImg(event) {
  event = event;
  var targetElement = event.target;
  document.getElementById('mainPic').src = targetElement.getAttribute('src');
}
changeImg()
