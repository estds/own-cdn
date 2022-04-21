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
    var vidW = this.getAttribute("data-video-width");
    var vidH = this.getAttribute("data-video-height");
    player.aspectRatio(vidW + ':' + vidH);
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
  let isPlaying = false;

  let curEp = d.parentNode.querySelector('.current-item');
  if (curEp) {
    curEp.classList.remove('current-item', 'disabled');
  }
  d.classList.add('disabled', 'current-item');

  let espList = d.closest('.episode-list-wrap');
  let vjsWrap = espList.parentNode;
  let vidFrame = espList.parentNode.querySelector('video');
  if (vidFrame) {
    let vjsPlayer = videojs(vidFrame);
    if (!vjsPlayer.paused()) {
      isPlaying = true;
    }
    vjsPlayer.dispose(); //destroy vjs player in use
  }
  let vidinfoMenu = espList.parentNode.querySelector('figcaption .video-info-menu');
  let curItemDes = vidinfoMenu.querySelectorAll('.current-vid-des');
  curItemDes.forEach(curItem => {
    curItem.remove();
  });
  if (srcDes.length > 0) {
    let vimDvder = document.createElement('div');
    vimDvder.setAttribute('class', 'dropdown-divider current-vid-des');
    let vimDesitem = document.createElement('span');
    vimDesitem.setAttribute('class', 'current-vid-des');
    vimDesitem.innerHTML = srcDes;
    vidinfoMenu.prepend(vimDvder);
    vidinfoMenu.prepend(vimDesitem);
  }
  let newVid = document.createElement('div');
  let html = '<video id="vjs-player-' + srcID + '" class="video-js vjs-yicodeplayer vjs-multiple-quality vjs-fluid" controls playsinline preload="auto" poster="' + cover + '" data-setup="{}">';
  if (srcHD.length == 0) {
    html += '<source src="' + srcSD + '" type="video/mp4" label="' + resLang.sd + '" selected="true"/>';
  } else {
    html += '<source src="' + srcSD + '" type="video/mp4" label="' + resLang.sd + '" selected="false"/><source src="' + srcHD + '" type="video/mp4" label="' + resLang.hd + '" selected="true" />';
  }
  if (srcUHD.length > 0) {
    html += '<source src="' + srcUHD + '" type="video/mp4" label="' + resLang.uhd + '" selected="false"/>';
  }
  newVid.innerHTML = html + '</video>';
  newVid = newVid.firstChild;
  vjsWrap.prepend(newVid);
  var newVJS = vjsWrap.querySelector('video');
  videojs(newVJS, {
    autoplay: isPlaying
  }, function() {
    var player = this;
    player.controlBar.addChild('QualitySelector');
    player.aspectRatio(srcW + ':' + srcH);
  });
}

// Pop the first available episode available
var vjsPlaylists = document.getElementsByClassName('vjs-playlist');
for (var i = 0; i < vjsPlaylists.length; i++) {
  let firstAvailableEP = vjsPlaylists[i].querySelector('[data-code="200"]');
  if (firstAvailableEP) {
    vjsPickEpisode(firstAvailableEP);
  }
}
