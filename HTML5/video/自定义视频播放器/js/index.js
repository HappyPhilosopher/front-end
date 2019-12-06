(function() {
  'use strict';
  const player = document.querySelector('#player');
  const controllerBar = document.querySelector('.video__controllers');
  const playBtn = document.querySelector('.video__control-play');
  const currentTime = document.querySelector('.video__time-currentTime');
  const duration = document.querySelector('.video__time-duration');
  const processBar = document.querySelector('.video__process');
  const bufferBar = document.querySelector('.video__process-buffer');
  const processDragger = document.querySelector('.video__process-dragger');
  const currentTimeBar = document.querySelector('.video__process-currentTime');
  const fullScreenBtn = document.querySelector('.video__fullScreen');
  const volumeBar = document.querySelector('.video__volume-bar');
  const volumeDragger = document.querySelector('.video__volume-dragger');
  const volumeBarWidth = volumeBar.getBoundingClientRect().width;
  const volumeBarLeft = volumeBar.getBoundingClientRect().left;
  const processBarWidth = processBar.getBoundingClientRect().width;
  const processBarLeft = processBar.getBoundingClientRect().left;

  // 鼠标移动到播放器，显示控件
  player.addEventListener('mouseover', function() {
    controllerBar.style.opacity = 1;
  });

  // 鼠标移出播放器，隐藏控件
  player.addEventListener('mouseout', function() {
    controllerBar.style.opacity = 0;
  });

  // 鼠标移动到控件栏，显示控件
  controllerBar.addEventListener('mouseover', function() {
    this.style.opacity = 1;
  });

  // 鼠标移出控件栏，隐藏控件
  controllerBar.addEventListener('mouseout', function() {
    this.style.opacity = 0;
  });

  // 点击播放按钮，切换按钮显示样式，并切换视频播放/暂停
  playBtn.addEventListener('click', function() {
    this.classList.toggle('video__control-pause');
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  });

  player.addEventListener('loadedmetadata', function() {
    // 获取视频总长度
    const videoDuration = this.duration;
    const min = parseInt(videoDuration / 60);
    const sec = parseInt(videoDuration % 60)
      .toString()
      .padStart(2, '0');
    duration.innerHTML = `${min}:${sec}`;

    // 点击设置当前播放进度
    processBar.addEventListener('click', function(e) {
      const scale = (e.clientX - processBarLeft) / processBarWidth;
      currentTimeBar.style.width = e.clientX - processBarLeft + 'px';
      processDragger.style.left =
        e.clientX -
        processBarLeft -
        processDragger.getBoundingClientRect().width / 2 +
        'px';
      player.currentTime = scale * videoDuration;
    });
  });

  // 获取当前播放时间
  player.addEventListener('timeupdate', function() {
    const videoCurrentTime = this.currentTime;
    const min = parseInt(videoCurrentTime / 60);
    const sec = parseInt(videoCurrentTime % 60)
      .toString()
      .padStart(2, '0');
    currentTime.innerHTML = `${min}:${sec}`;

    // 获取视频缓冲条
    const videoDuration = this.duration;
    if (this.buffered.length) {
      for (let i = 0; i < this.buffered.length; i++) {
        const bufferScale = this.buffered.end(i) / videoDuration;
        bufferBar.style.width = bufferScale * processBarWidth + 'px';
        console.log(this.buffered.start(i) + ' --- ' + this.buffered.end(i));
      }
    }

    // 当前时间进度条随播放前进
    const scale = videoCurrentTime / videoDuration;
    currentTimeBar.style.width = scale * processBarWidth + 'px';
    processDragger.style.left =
      scale * processBarWidth -
      processDragger.getBoundingClientRect().width / 2 +
      'px';
  });

  /**
   * 使元素全屏显示
   * @param {Object} el 待全屏的元素对象
   */
  function toFullScreen(el) {
    if (el.requestFullScreen) {
      el.requestFullScreen();
    } else if (el.webkitRequestFullScreen) {
      el.webkitRequestFullScreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else {
      el.msRequestFullScreen();
    }
  }

  // 视频全屏
  fullScreenBtn.addEventListener('click', function() {
    toFullScreen(player);
  });

  /**
   * 进度块拖拽限制
   */
  class ProcessDragger extends Drag {
    constructor(el) {
      super(el);
    }
    setStyle(posX) {
      posX = Math.max(posX, 0);
      posX = Math.min(
        posX,
        processBarWidth - this.el.getBoundingClientRect().width / 2
      );
      this.el.style.left = posX + 'px';
    }
  }
  new ProcessDragger('.video__process-dragger');

  /**
   * 音量拖动
   */
  class VolumeDragger extends Drag {
    constructor(el) {
      super(el);
    }
    setStyle(posX) {
      posX = Math.max(posX, 0 + this.el.getBoundingClientRect().width / 2);
      posX = Math.min(
        posX,
        volumeBarWidth - this.el.getBoundingClientRect().width / 2
      );
      this.el.style.left = posX + 'px';
    }
  }
  new VolumeDragger('.video__volume-dragger');

  // 点击改变音量
  volumeBar.addEventListener('click', function(e) {
    const scale = (e.clientX - volumeBarLeft) / volumeBarWidth;
    volumeDragger.style.left = scale * volumeBarWidth + 'px';
    player.volume = scale;
  });
})();
