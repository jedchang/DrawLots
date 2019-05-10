(function() {
  let inputRadio = document.getElementsByName('category');
  let startBtn = document.querySelector('.start-btn');
  let resetBtn = document.querySelector('.reset-btn');
  let selectList = document.querySelectorAll('.select-list');
  let mainArea = document.querySelector('.main-area');
  let startArea = document.querySelector('.start-area');
  let titleType = document.querySelector('.r-type');
  let txtType = document.querySelector('.p-type');

  selectList.forEach(function(radio) {
    radio.addEventListener('click', clickHandler);
  });

  function clickHandler() {
    for (let i = 0; i < inputRadio.length; i++) {
      if (inputRadio[i].checked) {
        startBtn.classList.remove('disabled');
      }
    }
  }

  function poemType() {
    let thePoem = ['大吉', '中吉', '小吉', '小兇', '中兇', '大凶'];
    function random() {
      return parseInt(Math.random() * 6);
    }
    let resultRandom = thePoem[random()];
    titleType.innerHTML = resultRandom;
    txtType.innerHTML = resultRandom;
    console.log(resultRandom);
  }

  function startHandler() {
    if (!startBtn.classList.contains('disabled')) {
      startBtn.style.display = 'none';
      mainArea.classList.add('active');
      startArea.classList.add('active');
      titleType.innerHTML = '';
      txtType.innerHTML = '';
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
  }

  startBtn.addEventListener('click', startHandler);
  resetBtn.addEventListener('click', resetHandler);
})();
