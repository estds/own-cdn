$('.vjs-multiple-quality').each(function() {

  videojs(this, {}, function() {
    var player = this;
    player.controlBar.addChild('QualitySelector');
  });

});
