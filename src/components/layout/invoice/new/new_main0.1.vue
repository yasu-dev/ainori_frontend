<template>
	<div class="invoice-management__main0">
	新規登録
  <el-steps :active="$store.state.step_number">
    <el-step title="配送先" description="Some description"></el-step>
    <el-step title="商品選定" description="Some description"></el-step>
    <el-step title="配送考慮" description="Some description"></el-step>
    <el-step title="配送元" description="Some description"></el-step>
    <el-step title="配送業者" description="Some description"></el-step>
    <el-step title="内容確認" description="Some description"></el-step>
    <el-step title="依頼完了" description="Some description"></el-step>
  </el-steps>



<ul class="cp_stepflow04">
	<li class="completed">
		<span class="text"><p class="title">配送先</p></span>
		<span class="bubble"></span>
	</li>
	<li class="completed">
		<span class="text"><p class="title">商品選定</p></span>
		<span class="bubble"></span>
	</li>
	<li class="active">
		<span class="text"><p class="title">配送考慮</p></span>
		<span class="bubble"></span>
	</li>
	<li class="completed">
		<span class="text"><p class="title">配送元</p></span>
		<span class="bubble"></span>
	</li>
	<li class="completed">
		<span class="text"><p class="title">配送業者</p></span>
		<span class="bubble"></span>
	</li>
	<li class="completed">
		<span class="text"><p class="title">内容確認</p></span>
		<span class="bubble"></span>
	</li>
	<li class="completed">
		<span class="text"><p class="title">依頼完了</p></span>
		<span class="bubble"></span>
	</li>
</ul>



</div>
</template>

<style>
.invoice-management__main0 {
  max-width: 1000px;
  position: relative;
}




.cp_stepflow04 {
	font-size: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	margin: 0 0 1em;
	padding: 0;
}
.cp_stepflow04 > li {
	position: relative;
	display: block;
	width: auto;
	margin: 0;
	padding: 0;
	list-style: none;
	text-overflow: ellipsis;
	color: #b0bec5;
	-ms-flex: 1;
	-moz-flex: 1;
	-webkit-box-flex: 1;
  flex: 1;
}
.cp_stepflow04 > li .title {
	font-weight: normal;
}
.cp_stepflow04 > li .text {
	display: block;
	padding-right: 0em;
	padding-bottom: 0em;
	padding-left: 0em;
}
.cp_stepflow04 > li .bubble {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #4169e1;
}
.cp_stepflow04 > li .bubble::after,
.cp_stepflow04 > li .bubble::before {
	position: absolute;
	bottom: 14px;
	display: block;
	width: 100%;
	height: 3px;
	content: '';
	background-color: #808080;
}
.cp_stepflow04 > li.completed,
.cp_stepflow04 > li.completed .bubble {
	color: #00acc1;
}
.cp_stepflow04 > li.completed .bubble,
.cp_stepflow04 > li.completed .bubble::after,
.cp_stepflow04 > li.completed .bubble::before {
	background-color: #4dd0e1;
}
.cp_stepflow04 > li:last-child .bubble::after,
.cp_stepflow04 > li:last-child .bubble::before {
	width: 0%;
	margin-right: 50%;
}
.cp_stepflow04 > li.active,
.cp_stepflow04 > li.active .bubble {
	color: #f57c00;
}
.cp_stepflow04 > li.active .bubble,
.cp_stepflow04 > li.active .bubble::after,
.cp_stepflow04 > li.active .bubble::before {
	background-color: #fb8c00;
}

</style>
