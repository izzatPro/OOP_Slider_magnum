// var images = document.querySelectorAll('.slider img'); // 5 0-4
// document.querySelector('.right').onclick = right;
// document.querySelector('.left').onclick = left;
// var counter = 0;


// function right(){
//     images[counter].classList.remove('active'); 
//     li[counter].classList.remove('active-li'); 
//     counter++;
//     if(images.length == counter){
//         counter = 0;
//     }
//     images[counter].classList.add('active');
//     li[counter].classList.add('active-li');
//     clearTimeout(timer);
//     autoplay();
// }

// function left(){
//     images[counter].classList.remove('active'); 
//     li[counter].classList.remove('active-li'); 
//     counter--;
//     if(counter < 0){
//         counter = images.length - 1;
//     }
//     images[counter].classList.add('active');
//     li[counter].classList.add('active-li');
//     clearTimeout(timer);
//     autoplay();
// }

// var li = document.querySelectorAll('li'); // 0 - 4

// for(var i = 0; i < li.length; i++){
//     li[i].onclick = function(){
//         for(var j = 0; j < li.length; j++){
//             li[j].classList.remove('active-li');
//             images[j].classList.remove('active');
//         }
//         this.classList.add('active-li');
//         var dataSlide = this.getAttribute('data-slide'); // 4
//         images[dataSlide].classList.add('active');
//         counter = dataSlide;
//     }
// }

// var timer;

// function autoplay(){
//     timer = setTimeout(right, 3000);
// }

// autoplay();

function Slider(sliderClass , autoplay , speed = 1000 , dots ){
    this.images = document.querySelectorAll(sliderClass + ' img');
    this.prev = document.querySelector(sliderClass + ' .left');
    this.next = document.querySelector(sliderClass + ' .right');
    this.counter = 0 ;
    var context = this ;
    var timer;
    this.next.addEventListener('click', next);
    this.prev.addEventListener('click', prev);
    function next(){
        context.images[context.counter].classList.remove('active');
        if(dots == true){
            li[context.counter].classList.remove('active-li');
        }
        context.counter++;
        if(context.counter == context.images.length){
            context.counter = 0;
        }
        if(dots == true){
            li[context.counter].classList.add('active-li');
        }
        context.images[context.counter].classList.add('active');
        if (autoplay == true){
            clearTimeout(timer);
            auto();
        }
  
    }
    function prev(){
        context.images[context.counter].classList.remove('active');
        if(dots == true){
            li[context.counter].classList.remove('active-li');
        }
        context.counter--;
        if(context.counter < 0 ){
            context.counter = context.images.length-1;
        }
        context.images[context.counter].classList.add('active');
        if(dots == true){
            li[context.counter].classList.add('active-li');
        }
        if (autoplay == true){
            clearTimeout(timer);
            auto();
        }
    }
    function auto(){
        timer = setTimeout(next , speed);
    }
    if(autoplay == true ){
        auto();
    }
    if (dots == true ){
        var slider = document.querySelector(sliderClass);
        slider.insertAdjacentHTML('beforeend' , '<ul class="indicators"></ul>')
        console.log(slider);
        var ul = document.querySelector(sliderClass + ' .indicators');
        for(var i = 0 ; i < this.images.length ; i++){
            if( i == 0){
                ul.insertAdjacentHTML('beforeend' , '<li class="active-li" data-slide="'+i+'"></li>')
            }
            else{
                ul.insertAdjacentHTML('beforeend' , '<li data-slide="'+i+'"></li>')
            }
        }
        var li = document.querySelectorAll(sliderClass + ' li');
        for(var j = 0 ; j < context.images.length ; j ++){
            li[j].addEventListener('click',function(){
                for (var k = 0 ; k < context.images.length; k++){
                    li[k].classList.remove('active-li');
                    context.images[k].classList.remove('active');
                }
                this.classList.add('active-li');
                var dataSlide = this.getAttribute('data-slide');
                context.images[dataSlide].classList.add('active');
                context.counter = dataSlide ;
                if (autoplay == true){
                    clearTimeout(timer);
                    auto();
                }
            })
        }

    }
}
var slider = new Slider('.slider1' , true , 1000 , true);
var slider = new Slider('.slider2', true , 3000 , true )
// var slider2 = new Slider('.slider2')
