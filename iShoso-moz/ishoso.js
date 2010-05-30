var orient = (function(ori) {
  var lose = false;

  return function(ori) {
    document.getElementById('ori-x').innerHTML = ori.x;
    document.getElementById('ori-y').innerHTML = ori.y;
    document.getElementById('ori-z').innerHTML = ori.z;

    if (ori.z < 0 && !lose) {
      document.getElementById('judgement-img').setAttribute('src', 'haiso.png');
      document.getElementById('judgement-img').setAttribute('alt', '敗訴');
      lose = !lose;
    }
    if (ori.z >= 0 && lose) {
      document.getElementById('judgement-img').setAttribute('src', 'shoso.png');
      document.getElementById('judgement-img').setAttribute('alt', '勝訴');
      lose = !lose;
    }

    var deg = -1 * (ori.x * 90);
    if (lose)
      deg = 180 - deg;

    document.getElementById('judgement').style.MozTransform = 'rotate(' + deg + 'deg)';
  };
})();

window.addEventListener("load", function(){
                          window.addEventListener("MozOrientation", orient, false);
                        }, false);
