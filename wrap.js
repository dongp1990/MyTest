# MyTest
(function(){
    //获取dom
    var div = document.getElementById('wrap');
    var wrap = document.getElementById('ul_wrap');
    var leftBtn = document.getElementById('wrap_left');
    var rightBtn = document.getElementById('wrap_right');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    var timer;
    //创建轮播动画
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
    //向左轮播点击事件
    leftBtn.onclick = function(){
        index -= 1;
        if(index < 1){
            index = 3;
        }
        buttonsShow();
        animate(1440);
    }
    //向右轮播点击事件
    rightBtn.onclick = function(){
        index += 1;
        if(index > 3){
            index = 1;
        }
        buttonsShow();
        animate(-1440);
    }
    //自动播放
    function autoWrap(){
        timer = setInterval(function(){
            leftBtn.onclick();
        },2000);
    }
    //停止自动播放
    function stopWrap(){
        clearInterval(timer);
    }
    //焦点事件
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
    //调用方法
    div.onmouseover = stopWrap;
    div.onmouseout = autoWrap;
    autoWrap();
})();

