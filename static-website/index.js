currentIndex=0
images=["first pic.jpg","second pic.jpg","third pic.jpg","fourth pic.jpg"]

setInterval(
    function() {
    currentIndex=Math.round(Math.random()*4)
     document.getElementById("img1").src = images[currentIndex]
    },20000
)

function changeImage(arrowtype){
    if(arrowtype=="right arrow image"){
        currentIndex = currentIndex==4?0:++currentIndex
    }
    else if(arrowtype=="left arrow image"){
        currentIndex = currentIndex==0?4:--currentIndex 
    }
    document.getElementById("img1").src=images[currentIndex]
}

function ImageUpAndDown(direction){
    if(direction=="up-icon"){
        document.getElementById("down-icon").style.display="block"
        document.getElementById("up-icon").style.display="none"
        document.getElementById("img1").style.display="none"
    }
   if(direction=="down-icon"){
    document.getElementById("down-icon").style.display="none"
    document.getElementById("up-icon").style.display="block"
    document.getElementById("img1").style.display="Block"
   }
}
// function ImageUpAndDown(direction){
//     if(direction=="up arrow"){
//         document.getElementById("down-icon").style.display="block"
//         document.getElementById("up-icon").style.display="none"
//         document.getElementById("slide-show").style.display="none"
//     }
//    if(input=="down arrow"){
//     document.getElementById("down").style.display="none"
//     document.getElementById("up").style.display="block"
//     document.getElementById("slide-show").style.display="Block"
//    }
// }

// function arrowChange(direction) {
//     var img = document.getElementById('img1');
//     var upIcon = document.getElementById('up-icon');
//     var downIcon = document.getElementById('down-icon');
    
//     if (direction === 'up') {
//       img.style.transform = 'translateY(-100%)';
//       upIcon.style.display = 'none';
//       downIcon.style.display = 'inline-block';
//     } else if (direction === 'down') {
//       img.style.transform = 'translateY(0)';
//       upIcon.style.display = 'inline-block';
//       downIcon.style.display = 'none';
//     }
//   }