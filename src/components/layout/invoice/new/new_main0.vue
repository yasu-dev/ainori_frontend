<template>
  <div class="container">
    <div class="item1">
	    <ul class="progress-bar">
	      <li class="active" id="active">
            配送元
	        <div class="progress-status"></div>
	        <div class="progress-status_bar"></div>
	      </li>
	    </ul>
	  </nav>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
}
.item1 {
  order: 1;
  background-color: pink;
  width: 100px;
  flex-grow: 1;
}
.progress-bar {
  margin: 0;
}
.progress-bar li {
  margin: 0 40px 0 0;
  padding: 0;
  position: relative;
  z-index: 40;
  display: inline-block;
  min-width: 60px;
  font-size: 12px;
  color: gray;
}
.progress-bar li .progress-status {
  position: absolute;
  left: 40%;
  width: 0px;
  height: 0px;
  margin: 8px auto 0;
  z-index: 30;
}
.progress-status_bar {
  position: absolute;
  left: 0%;
  top: 40px;
  bottom: 5px;
  display: block;
  width: 150px;
  height: 4px;
  background: gray;
  z-index: 30;
}
#active {
  color: #4169e1;
}
#active .progress-status {
  width: 0px;
  height: 0px;
  margin: 8px auto 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 15px solid gray;
}
</style>
