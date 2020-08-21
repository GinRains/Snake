
(function(){
  var Tools = {
    getRandom: function(x, y) {
      return Math.round(Math.random()*(y-x)+x);
    }
  }

  window.Tools = Tools
})()
