# JS-DrawLots

![image](https://img.shields.io/badge/JavaScript-exercise-brightgreen.svg)
![image](https://img.shields.io/badge/jQuery-exercise-brightgreen.svg)

![images](https://github.com/jedchang/JS-DrawLots/blob/master/preview.jpg)

## checked 判斷
判斷是否有點選任一個 radio 按鈕後，才能執行開始求籤 button。

```javascript
// forEach 針對取回的每一個 radio 做偵聽
selectList.forEach(function(radio) {
  radio.addEventListener('click', clickHandler);
});

function clickHandler() {
  for (let i = 0; i < inputRadio.length; i++) {
    if (inputRadio[i].checked) {
      // console.log('checked:' + inputRadio[i].checked);
      startBtn.classList.remove('disabled');
    }
  }
}
```

## 隨機運勢文字
每次點選後，隨機運勢文字自動產出

```javascript
function poemType() {
  let thePoem = ['大吉', '中吉', '小吉', '小兇', '中兇', '大凶'];
  function random() {
    return parseInt(Math.random() * 6);
  }
  let resultRandom = thePoem[random()];
  titleType.innerHTML = resultRandom;
  txtType.innerHTML = resultRandom;
  // console.log(resultRandom);
}
```

## 頁面切換
原生 JavaScript 做動態效果有點累... 偷懶使用 jQuery 來操作

```javascript
// 開始執行
function startHandler() {
  if (!startBtn.classList.contains('disabled')) {
    startBtn.style.display = 'none';
    mainArea.classList.add('active');
    startArea.classList.add('active');
    poemType();
    $('.main-page')
      .delay(450)
      .fadeOut(1000, function() {
        $('.secondary-page')
          .css('display', 'flex')
          .hide()
          .delay(450)
          .fadeIn(1000);
        $('.result-fortune')
          .delay(2900)
          .fadeOut(450, function() {
            $('.result-poem')
              .css('display', 'flex')
              .hide()
              .delay(450)
              .fadeIn(1000);
          });
      });
  }
}

// 重新執行
function resetHandler() {
  (function clearChecked() {
    for (let i = 0; i < inputRadio.length; i++) {
      inputRadio[i].checked = false;
    }
  })();
  $('.result-poem')
    .delay()
    .fadeOut(1000, function() {
      $('.secondary-page')
        .css('display', 'none')
        .hide()
        .fadeOut();
      $('.main-page')
        .css('display', 'flex')
        .hide()
        .fadeIn(1000);
      $('.result-fortune').fadeIn(1000);
      mainArea.classList.remove('active');
      startArea.classList.remove('active');
      startBtn.style.display = 'block';
    });
  startBtn.classList.add('disabled');
  titleType.innerHTML = '';
  txtType.innerHTML = '';
}
```
