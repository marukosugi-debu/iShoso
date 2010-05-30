var orient = (function(ori) {
  var x = 0;
  var i = 0;

  return function(ori) {
    var div_x = x - ori.x;
    
    document.getElementById('ori-x').innerHTML = ori.x;
    document.getElementById('ori-y').innerHTML = ori.y;
    document.getElementById('ori-z').innerHTML = ori.z;

    if (Math.abs(div_x) > 0.05) {
      console.log(i++ + ' yes');
    } else {
    }
    x = ori.x;

//     if (0.9 <= ori.x)
//       document.getElementById('shouso').innerHTML = '勝訴';
//     else if (-0.9 >= ori.x)
//       document.getElementById('shouso').innerHTML = '敗訴';
//     else
//       document.getElementById('shouso').innerHTML = '示談';

    console.log("-moz-transform: rotate(" + (ori.x * 90) + "deg);");
    document.getElementById('shoso').setAttribute('style', "-moz-transform: rotate(" + -1 * (ori.x * 90) + "deg);");

    var dst = document.getElementById('dst');
    dst.style.left = 100 + 100 * ori.x + "px";
    dst.style.top = 100 + 100 * ori.y + "px";
    console.log('rgb(' + (ori.z + 1) * 128 + ', 0, 0)');
    dst.style.background = 'rgb(' + (ori.z + 1) * 128 + ', 0, 0)';
  };
})();

window.addEventListener("MozOrientation", orient, true);
