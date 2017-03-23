# MyTest
(function(){
    var div = document.getElementById('wrap');
    var wrap = document.getElementById('ul_wrap');
    var leftBtn = document.getElementById('wrap_left');
    var rightBtn = document.getElementById('wrap_right');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    var timer;

    function animate(offset){
        var newLeft = parseInt(wrap.style.left) + offset;
        wrap.style.left = newLeft + 'px';

        if(newLeft > 0){
            wrap.style.left = -2880 + 'px';
        }
        if(newLeft < -2880){
            wrap.style.left = 0 + 'px';
        }
    }

    leftBtn.onclick = function(){
        index -= 1;
        if(index < 1){
            index = 3;
        }
        buttonsShow();
        animate(1440);
    }

    rightBtn.onclick = function(){
        index += 1;
        if(index > 3){
            index = 1;
        }
        buttonsShow();
        animate(-1440);
    }

    function autoWrap(){
        timer = setInterval(function(){
            leftBtn.onclick();
        },2000);
    }

    function stopWrap(){
        clearInterval(timer);
    }

    function buttonsShow(){
        for(var i = 0; i < buttons.length; i++){
            if(buttons[i].className == "one"){
                buttons[i].className = "";
            }
        }
        buttons[index - 1].className = "one";
    }

    for(var i = 0; i < buttons.length; i++){
        (function(i){
            buttons[i].onclick = function(){
                console.log(i);
                var clickIndex = parseInt(this.getAttribute("index"));
                var offset = 1440 * (index - clickIndex);
                animate(offset);
                index = clickIndex;
                buttonsShow();
            }
        })(i);
    }

    div.onmouseover = stopWrap;
    div.onmouseout = autoWrap;
    autoWrap();
})();

