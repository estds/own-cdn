// some localisation
var resLang = {
  sd: "SD",
  hd: "HD",
  uhd: "UHD",
};
var resolutionZH = {
  sd: "标清",
  hd: "高清",
  uhd: "超清",
};
var currentLanguage = document.getElementsByTagName('html')[0].getAttribute('lang');
if (currentLanguage == 'zh-CN') {
  var resLang = resolutionZH;
}

//initialise vjs with multiple quality selector
var vjsplayers = document.getElementsByClassName('vjs-multiple-quality');
Array.prototype.forEach.call(vjsplayers, function(el) {
  videojs(el, {}, function() {
    var player = this;
    player.controlBar.addChild('QualitySelector');
  });
});


// pick episodes from list
function vjsPickEpisode(d) {
  let cover = d.getAttribute("data-cover");
  let srcSD = d.getAttribute("data-sd");
  let srcHD = d.getAttribute("data-hd");
  let srcUHD = d.getAttribute("data-UHD");
  let srcW = d.getAttribute("data-width");
  let srcH = d.getAttribute("data-height");
  let srcDes = d.getAttribute("data-des");
  let srcID = d.getAttribute("data-vid");

  d.parentNode.querySelector('.current-item').classList.remove('current-item', 'disabled');
  d.classList.add('disabled', 'current-item');

  let espList = d.closest('.episode-list-wrap');
  let vjsWrap = espList.parentNode;
  let vidFrame = espList.parentNode.querySelector('video');
  let vjsPlayer = videojs(vidFrame);
  let vidDes = espList.parentNode.querySelector('figcaption #vid-des');
  vidDes.innerHTML = srcDes;
  vjsPlayer.dispose(); //destroy vjs player in use
  let newVid = document.createElement('div');
  newVid.innerHTML = '<video id="vjs-player-' + srcID + '" class="video-js vjs-yicodeplayer vjs-multiple-quality vjs-fluid" controls playsinline preload="auto" poster="' + cover + '" data-setup="{}"><source src="' + srcSD + '" type="video/mp4" label="' + resLang.sd + '" /><source src="' + srcHD + '" type="video/mp4" label="' + resLang.hd + '" selected="true" /><source src="' + srcUHD + '" type="video/mp4" label="' + resLang.uhd + '" /></video>';
  newVid = newVid.firstChild;
  vjsWrap.prepend(newVid);
  var newVJS = vjsWrap.querySelector('video');
  videojs(newVJS, {}, function() {
    var player = this;
    player.controlBar.addChild('QualitySelector');
  });
}
