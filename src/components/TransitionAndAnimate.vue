<template>
  <div>
    <h2>缓动效果</h2>
    <code>
      <pre>ease\ease-in\ease-out\ease-in-out</pre>
      <pre>
        /* http://cubic-bezier.com/ */
        cubic-bezier()
      </pre>
    </code>
    <div>
      <label class="cubic-bezier">
        Your username:
        <input value="leaverou"/>
        <span class="callout">
        Only letters, numbers, underscores (_) and hyphens (-) allowed!
        </span>
      </label>
    </div>

    <h2>逐帧动画</h2>
    <code>
      <pre>steps()</pre>
    </code>
    <div class="loader">Loading…</div>

    <h2>闪烁</h2>
    <code>
      <pre>blink-1/blank-2</pre>
    </code>

    <h2 class="print-animate">打字动画</h2>
    <h2>状态平滑的动画</h2>
    <code>
      <pre>animation-play-state: paused;</pre>
    </code>
    <div class="panoramic"></div>

    <h2>沿环形路径平移的动画</h2>
    <div class="path">
      <div class="avatar">
        <img src="../assets/images/touxiang.jpg" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  label.cubic-bezier {
    position: relative;
    text-align: left;
    display: flex;
    input:not(:focus) + .callout:not(:hover) {
      transform: scale(0);
      transition: .25s transform;
    }

    .callout {
      transition: .5s cubic-bezier(.25,.1,.3,1.5) transform;
      transform-origin: 1.4em -.4em;
    }
    input {
      display: block;
      padding: 0 .4em;
      font: inherit;
    }

    .callout {	
      position: absolute;
      max-width: 14em;
      padding: .6em .8em;
      border-radius: .3em;
      margin: .3em 0 0 -.2em;
      background: #fed;
      border: 1px solid rgba(0,0,0,.3);
      box-shadow: .05em .2em .6em rgba(0,0,0,.2);
      font-size: 75%;
      left: 9em;
      top: 2.6em;
    }

    .callout:before {
      content: "";
      position: absolute;
      top: -.4em;
      left: 1em;
      padding: .35em;
      background: inherit;
      border: inherit;
      border-right: 0;
      border-bottom: 0;
      transform: rotate(45deg);
    }
  }
  @keyframes loader {
    to { background-position: -800px 0; }
  }
  .loader {
    width: 100px; height: 100px;
    text-indent: 999px; overflow: hidden; /* Hide text */
    background: url(http://dabblet.com/img/loader.png) 0 0;
    animation: loader 1s infinite steps(8);
  }
  @keyframes typing {
    from { width: 0 }
  }

  @keyframes caret {
    50% { border-right-color: transparent; }
  }
  .print-animate {
    font: bold 200% Consolas, Monaco, monospace;
    width: 7ch;
    white-space: nowrap;
    overflow: hidden;
    border-right: .05em solid;
    animation: typing 4s steps(4),caret 1s steps(1) infinite;
  }

  @keyframes panoramic {
    to { background-position: 100% 0; }
  }

  .panoramic {
    width: 150px; 
    height: 400px;
    background: url('../assets/images/7T7A3831.jpg') no-repeat;
    background-size: auto 100%;	
    animation: panoramic 10s linear infinite alternate;
    animation-play-state: paused;
  }

  .panoramic:hover, .panoramic:focus {
    animation-play-state: running;
  }

  .avatar {
    width: 50px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
  }

  .avatar > img {
    display: block;
    width: inherit;
  }

  .path {
    width: 300px; height: 300px;
    padding: 10px;
    border-radius: 50%;
    background: #fb3;
  }
  @keyframes spin {
    to { transform: rotate(1turn); }
  }

  .avatar {
    animation: spin 5s infinite linear;
    transform-origin: 50% 150px;
  }

  .avatar > img {
    animation: inherit;
    animation-direction: reverse;
  }
</style>

