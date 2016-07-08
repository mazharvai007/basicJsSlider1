/**
 * Created by swopnil on 7/2/16.
 */

var imageCount = 1;
var total = 5;

function slide(x){
    var Image = document.getElementById('sliderImage');
    imageCount = imageCount + x;

    if(imageCount > total){
        imageCount = 1;
    } else if (imageCount < 1){
        imageCount = total;
    }
    Image.src = "img/slider" + imageCount + ".jpg";

    clearInterval(time);
    time = window.setInterval(function sliders() {
        var Image = document.getElementById('sliderImage');
        imageCount = imageCount + 1;

        if(imageCount > total){
            imageCount = 1;
        } else if (imageCount < 1){
            imageCount = total;
        }
        Image.src = "img/slider" + imageCount + ".jpg";
    }, 2000);
}

var time = window.setInterval(function sliders(){
    var Image = document.getElementById('sliderImage');
    imageCount = imageCount + 1;

    if(imageCount > total){
        imageCount = 1;
    } else if (imageCount < 1){
        imageCount = total;
    }
    Image.src = "img/slider" + imageCount + ".jpg";
}, 2000);