var orient = (function(ori) {
  var lose = false;
  var size = {
    shosoW: 387,
    shosoH: 870,
    haisoW: 378,
    haisoH: 868
  };

  return function(ori) {
    document.getElementById('ori-x').innerHTML = ori.x;
    document.getElementById('ori-y').innerHTML = ori.y;
    document.getElementById('ori-z').innerHTML = ori.z;

    var judge = document.getElementById('judgement');
    var judgeImg = document.getElementById('judgement-img');

    if (ori.z < 0 && !lose) {
      judgeImg.setAttribute('src', 'haiso.png');
      judgeImg.setAttribute('alt', '敗訴');
      judge.style.width = size.haisoW + 'px';
      judge.style.height = size.haisoH + 'px';
      lose = !lose;
    }
    if (ori.z >= 0 && lose) {
      judgeImg.setAttribute('src', 'shoso.png');
      judgeImg.setAttribute('alt', '勝訴');
      judge.style.width = size.shosoW + 'px';
      judge.style.height = size.shosoH + 'px';
      lose = !lose;
    }

    var deg = -1 * (ori.x * 90);
    if (lose)
      deg = 180 - deg;

    judge.style.MozTransform = 'rotate(' + deg + 'deg)';
  };
})();

window.addEventListener("load", function(){
                          window.addEventListener("MozOrientation", orient, false);
                        }, false);
