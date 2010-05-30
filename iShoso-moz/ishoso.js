var orient = function(ori) {
  document.getElementById('ori-x').innerHTML = ori.x;
  document.getElementById('ori-y').innerHTML = ori.y;
  document.getElementById('ori-z').innerHTML = ori.z;

  document.getElementById('shoso').style.MozTransform = 'rotate(' + -1 * (ori.x * 90) + 'deg)';
};

window.addEventListener("load", function(){
                          window.addEventListener("MozOrientation", orient, false);
                        }, false);
