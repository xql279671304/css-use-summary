<template>
  <div>
    <div class="content">
      <h1>选用适合的鼠标光标</h1>
      <div>
        <button class="btn_awesome">
          <span>Hover me I'm awesome.</span>
        </button>
      </div>
      <div class="cursor">
        <img src="../assets/images/光标.jpg">
        <img src="../assets/images/光标2.png">
      </div>
      <h1>扩大可点击区域</h1>
      <div class="expand">
        <button type="button">+</button>
        <button type="button">+</button>
      </div>
      <h1>复选框和单选框</h1>
      <div class="input">
        <input type="checkbox" id="awesome" autofocus />
        <label for="awesome">Awesome!</label>
      </div>
      <div class="input">
        <input type="checkbox" id="awesome2" checked />
        <label for="awesome2">Awesome!</label>
      </div>
      <div class="input">
        <input type="checkbox" id="awesome3" disabled />
        <label for="awesome3">Awesome!</label>
      </div>
      <div class="input">
        <input type="checkbox" id="awesome4" checked disabled />
        <label for="awesome4">Awesome!</label>
      </div>
      <div class="input-btn">
        <input type="checkbox" id="awesome5" autofocus />
        <label for="awesome5">Awesome!</label>
      </div>
      <div class="input-btn">
        <input type="checkbox" id="awesome6" autofocus />
        <label for="awesome6">Awesome!</label>
      </div>

      <h1>dimming-box-shadow</h1>
      <div>
        <button onclick="document.querySelector('#img').style.display='block'">Click me</button>
        <img id="img" src="http://csssecrets.io/images/adamcatlace.jpg" class="lightbox" onclick="this.style.display='none'"/>
      </div>
      <div>
        <button onclick="document.querySelector('#modal').showModal()">Click me</button>
        <dialog id="modal">
          O HAI!
          <button onclick="this.parentNode.close()">Close</button>
        </dialog>
      </div>
      <h1>毛玻璃背景</h1>
      <div>
        <button type="button" id="dialog2">show dialog</button>
      </div>
      <h1>滚动提示</h1>
      <ul>
        <li>Ada Catlace</li>
        <li>Alan Purring</li>
        <li>Schrödingcat</li>
        <li>Tim Purrners-Lee</li>
        <li>Webkitty</li>
        <li>Json</li>
        <li>Void</li>
        <li>Neko</li>
        <li>NaN</li>
        <li>Cat5</li>
        <li>Vector</li>
      </ul>
      <h1>交互式的图片对比控件</h1>
      <div class="image-slider">
        <div><img src="../assets/images/adamcatlace-before.jpg" alt="Before" /></div>
        <img src="../assets/images/adamcatlace.jpg" />
      </div>
      <div class="image-slider-1">
        <img src="../assets/images/adamcatlace-before.jpg" alt="Before" />
        <img src="../assets/images/adamcatlace.jpg" alt="After" />
      </div>
    </div>
    <dialog id="dialog2-modal">O HAI, I’m a dialog. Click on me to dismiss.</dialog>
  </div>
</template>
<style scoped>
  .cursor img{
    display: block;
    max-width: 80%;
    margin: auto;
  }

  .expand button {
    padding: .3em .5em;
    border: 10px solid transparent;
    border-radius: 50%;
    background: #58a;
    background-clip: padding-box;
    box-shadow: 0 0 0 1px rgba(0,0,0,.3) inset;
    color: white;
    font: bold 150%/1 sans-serif;
    cursor: pointer;
  }
  .expand button:last-child {
    position: relative;
    padding: .3em .5em;
    background: #58a;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.3);
    box-shadow:  0 .1em .2em -.05em rgba(0,0,0,.5);
    color: white;
    font: bold 150%/1 sans-serif;
    cursor: pointer;
  }

  .expand button:last-child:before {
    content: '';
    position: absolute;
    top: -10px; right: -10px;
    bottom: -10px; left: -10px;
  }
  .expand button:hover {
    outline: none
  }

  .input input[type="checkbox"] {
    position: absolute;
    clip: rect(0,0,0,0);
  }

  .input input[type="checkbox"] + label::before {
    content: '\a0';
    display: inline-block;
    vertical-align: .2em;
    width: .8em;
    height: .8em;
    margin-right: .2em;
    border-radius: .2em;
    background: silver;
    text-indent: .15em;
    line-height: .65;
  }
  .input input[type="checkbox"]:checked + label::before {
    content: '\2713';
    background: yellowgreen;
  }
  .input input[type="checkbox"]:focus + label::before {
    box-shadow: 0 0 .1em .1em #58a;
  }
  .input input[type="checkbox"]:disabled + label::before {
    background: gray;
    box-shadow: none;
    color: #555;
    cursor: not-allowed;
  }

  .input-btn input[type="checkbox"] {
    position: absolute;
    clip: rect(0,0,0,0);
  }
  .input-btn input[type="checkbox"] + label {
    display: inline-block;
    padding: .35em .5em .2em;
    background: #ccc;
    background-image: linear-gradient(#ddd, #bbb);
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3em;
    box-shadow: 0 1px white inset;
    text-align: center;
    text-shadow: 0 1px 1px white;
    cursor: pointer;
  }
  .input-btn input[type="checkbox"]:checked + label,
  .input-btn input[type="checkbox"]:active + label {
    box-shadow: .04em .1em .2em rgba(0,0,0,.6) inset;
    border-color: rgba(0,0,0,.3);
    background: #bbb;
  }

  .lightbox {
    display: none;
    position: fixed;
    top: 50%; left: 50%;
    margin: -200px;
    box-shadow: 0 0 0 50vmax rgba(0,0,0,.8);
  }
  dialog#modal::backdrop {
    background: rgba(0,0,0,.8)
  }

  .content {
    transition: .6s;
    background: white;
  }
  .content.de-emphasized {
    -webkit-filter: blur(3px);
    filter: blur(3px);
  }
  dialog#dialog2-modal {
    position: fixed;
    top: 50%; left: 50%;
    z-index: 1;
    width: 10em;
    padding: 2em;
    margin: -5em;
    border: 1px solid silver;
    border-radius: .5em;
    box-shadow: 0 .2em .5em rgba(0,0,0,.5), 0 0 0 100vmax rgba(0,0,0,.2);
  }
  dialog#dialog2-modal:not([open]) {
    display: none;
  }

  ul {
    display: inline-block;
    overflow: auto;
    width: 7.2em;
    height: 7em;
    border: 1px solid silver;
    padding: .3em .5em;
    list-style: none;
    margin-top: 2em;
    font: 100 200%/1.6 'Frutiger LT Std', sans-serif;
    background: linear-gradient(white 15px, hsla(0,0%,100%,0)) 0 0 / 100% 50px,
    radial-gradient(at top, rgba(0,0,0,.2), transparent 70%) 0 0 / 100% 15px,
    linear-gradient(to top, white 15px, hsla(0,0%,100%,0)) bottom / 100% 50px,
    radial-gradient(at bottom, rgba(0,0,0,.2), transparent 70%) bottom / 100% 15px;
    background-repeat: no-repeat;
    background-attachment: local, scroll, local, scroll;
    margin-top: 30px;
  }

  .image-slider {
    position:relative;
    display: inline-block;
  }
  .image-slider > div {
    position: absolute;
    top: 0; bottom: 0; left: 0;
    width: 50%;
    max-width: 100%;
    overflow: hidden;
    resize: horizontal;
  }
  .image-slider > div:before {
    content: '';
    position: absolute;
    right: 0; bottom: 0;
    width: 12px; height: 12px;
    padding: 5px;
    background: linear-gradient(-45deg, white 50%, transparent 0);
    background-clip: content-box;
    cursor: ew-resize;
    -webkit-filter: drop-shadow(0 0 2px black);
    filter: drop-shadow(0 0 2px black);
  }
  .image-slider img {
    display: block;
    user-select: none;
  }

</style>
<style>
  .image-slider-1 {
    position:relative;
    display: inline-block;
  }
  .image-slider-1 > div {
    position: absolute;
    top: 0; bottom: 0; left: 0; width: 50%;
    overflow: hidden;
  }
  .image-slider-1 img {
    display: block;
    user-select: none;
  }
  .image-slider-1 input {
    position: absolute;
    left: 0;  bottom: 10px;
    width: 100%;
    margin: 0;
    filter: contrast(.5);
    mix-blend-mode: luminosity;
    width: 50%;
    transform: scale(2);
    transform-origin: left bottom;
  }
</style>
<style lang="scss" scoped>

/* button awesome */
.btn_awesome {
  position: relative;
  appearance: none;
  background: #f72359;
  padding: 1em 2em;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 100px;

  span {
    position: relative;
  }

  &::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #4405f7, transparent);
    transform: translate(-50%, -50%);
    transition: width .2s ease, height .2s ease;
  }

  &:hover::before {
    --size: 400px;
  }
}
</style>

<script>
  function $ (sel) {
    return document.querySelector(sel)
  }

  export default {
    mounted () {
      this.mouseMove()

      var dialog = $('#dialog2-modal')
      var main = $('.content')

      $('#dialog2').onclick = function () {
        dialog.setAttribute('open', '')
        main.classList.add('de-emphasized')
      }

      dialog.onclick = function () {
        if (dialog.close) {
          dialog.close()
        } else {
          dialog.removeAttribute('open')
        }

        main.classList.remove('de-emphasized')
      }

      document.querySelectorAll('.image-slider-1').forEach(function (slider) {
        // 创建附加的div元素，并用它包住第一个图片元素
        var div = document.createElement('div')
        var img = slider.querySelector('img')
        slider.appendChild(div)
        slider.insertBefore(img, div)
        div.appendChild(img)
        // 创建滑块
        var range = document.createElement('input'); range.type = 'range'
        range.oninput = function () {
          div.style.width = this.value + '%'
        }
        slider.appendChild(range)
      })
    },
    methods: {
      mouseMove () {
        document.querySelector('.btn_awesome').onmousemove = (e) => {
          const x = e.pageX - e.target.offsetLeft
          const y = e.pageY - e.target.offsetTop
          e.target.style.setProperty('--x', `${x}px`)
          e.target.style.setProperty('--y', `${y}px`)
        }
      }
    }
  }
</script>