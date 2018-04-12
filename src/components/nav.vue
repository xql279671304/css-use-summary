<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" active-class="active">
          <span>css处理形状</span>
        </router-link>
      </li>
      <li>
        <router-link to="/visualEffect" active-class="active">
          <span>阴影</span>
        </router-link>
      </li>
      <li>
        <router-link to="/font" active-class="active">
          <span>字体</span>
        </router-link>
      </li>
      <li>
        <router-link to="/userOptimization" active-class="active">
          <span>用户体验</span>
        </router-link>
      </li>
      <li>
        <router-link to="/structureAndLayout" active-class="active">
          <span>结构与布局</span>
        </router-link>
      </li>
      <li>
        <router-link to="/transitionAndAnimate" active-class="active">
          <span>过渡与动画</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
  nav {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    background-color: #ffffff;
    box-shadow: 0 0 2em 0 #cccccc;
    width: 120px;
  }
  nav ul{
    margin: 0;
    padding: 0;
  }
  nav ul li{
    list-style: none;
    text-align: left;
    padding: 10px;
  }
  nav ul li a{
    display: block;
    color: #000000;
    text-decoration: none;
  }
</style>
<style>
  .router-link-exact-active.active {
    color: blue;
    font-weight: bold;
  }
</style>


