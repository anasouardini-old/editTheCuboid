function faces(){
  document.getElementById('front').style.background  = document.getElementById('frontC').value;
  document.getElementById('back').style.background   = document.getElementById('backC').value;
  document.getElementById('left').style.background   = document.getElementById('leftC').value;
  document.getElementById('right').style.background  = document.getElementById('rightC').value
                }

function bg(){document.getElementById('cuboid').style.background = "radial-gradient(circle, #FFF, "+document.getElementById('bg').value+")"}

function duration(){document.getElementById('cuboid').children[0].style.animationDuration = document.getElementById('duration').value+'s'}

function rotation(x){
    if(x == 'right'){document.getElementById('cuboid').children[0].id = 'holderRotation2'}
    else if(x == 'left'){document.getElementById('cuboid').children[0].id = 'holderRotation1'}
    
}
