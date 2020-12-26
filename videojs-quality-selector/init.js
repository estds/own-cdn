var vjsplayers = document.getElementsByClassName('vjs-multiple-quality');
Array.prototype.forEach.call(vjsplayers, function(el) {
  videojs(el, {}, function() {
    var player = this;
    player.controlBar.addChild('QualitySelector');
  });
});
