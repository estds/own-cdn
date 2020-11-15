$.fn.meuPlugin = function(options) {
  // Set default options
  var defaults = {
    'myText': ['Lorem ipsum dummy text.'],
    'color': '#333',
    'backgroundColor': 'transparent',
    'aling': 'left',
    'size': 'inherit',
    'speed': 'normal',
    'infinity': false,
    'interval': 2000
  };

  var settings = $.extend( {}, defaults, options );
  
  // Start the plugin
  return this.each(function() {
    var arraySpeed = {'fast': 50, 'normal': 75, 'slow': 100};
    var i = 0;
    var $text = settings.myText[i];
    var $textSplit = $text.split('');
    var $speed = arraySpeed[settings.speed];
    var $this = $(this);

    function typingText(){
      $textSplit.forEach(function (letter, index) {
        setTimeout(function () {
          $this.append(letter);
          if (index + 1 == $textSplit.length){
            i++;
            if (i < settings.myText.length || settings.infinity) {
              setTimeout(function () { eraseText(i); }, settings.interval);
            }
          }
        }, index * $speed);
      });
    }

    function eraseText(indice){
      $textSplit.forEach(function (letter, index) {
        setTimeout(function () {
          var textLength = $this.text().length-1;
          var text = $this.text();
          var subText = text.substring(0,textLength);
          $this.text(subText);
          if (textLength == 0){
            setTimeout(function () { setTextArray(indice) }, 500);
          }
        }, index * 25);
      });
    }

    // Check if you have another word to view
    function setTextArray(indice){
      if (settings.myText[indice]) {
        $this.text("");
        $text = settings.myText[indice];
        $textSplit = $text.split('');
        typingText();
      }
      else{
        i = 0;
        // If it's infinity, call the function to write the first string again
        if (settings.infinity) {
          setTimeout(function () { setTextArray(i) }, 500);				
        }
      }
    }
    setTextArray(0);


    // Add style
    $(this).css({
      color: settings.color,
      backgroundColor: settings.backgroundColor,
      textAlign: settings.aling,
      fontSize: settings.size
    });
  });
}; 