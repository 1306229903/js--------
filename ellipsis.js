 // 多行文本省略
 (function(){
    var maintext = document.querySelectorAll('.maintext')
    var str = []
    for (var i = 0; i < maintext.length; i++) {
        maintext[i].ofheight = maintext[i].offsetHeight
        str.push(maintext[i].innerText)
        maintext[i].innerText = ""
        for (var j = 0; j < str[i].length; j++) {
            maintext[i].innerText = str[i].substr(0, j)

            if (maintext[i].scrollHeight > maintext[i].ofheight) {
                maintext[i].style.overflow = 'hidden';
                maintext[i].innerText = str[i].substr(0, j - 3) + '...';
                break;
            }
        }
    }
    })()
    