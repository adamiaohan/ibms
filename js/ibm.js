// 鼠标放在搜索框时，边框变色，搜索图标变色
var serout =document.querySelector('.serout');
var search =document.querySelector('.search');
var serspan =document.querySelector('.serout span');
search.onmouseover=function(){
	serout.style='border:1px solid #4178be;box-shadow: 0 0 3px #4178be';
	serspan.style='color:#4178be'
}
search.onmouseout=function(){
	serout.style='';
	serspan.style=''
}
serspan.onmouseover=function(){
	serspan.style='color:#4178be;border:1px solid #4178be;box-shadow: 0 0 3px #4178be'
}
serspan.onmouseout=function(){
	serspan.style=''
}



// 二级菜单
// 获取导航栏
var lis = document.querySelectorAll('.tul li');
// 获取导航栏对应的三个页面
var pros =document.querySelectorAll('.pro');
var product = lis[0];
var service = lis[1];
var developers= lis[3];
console.log(pros)
// 鼠标滑过导航栏，变色并出现底部边框
for(var i=0;i<lis.length;i++){
	lis[i].onmouseover=function(){
		this.style='color:#4178be;border-bottom:3px solid #4178be';
	}
	lis[i].onmouseout=function(){
		this.style='';
	}
}
product.onmouseover=function(){
	pros[0].style='height:594px';
	this.style='color:#4178be;border-bottom:3px solid #4178be';
}
product.onmouseout=function(){
	pros[0].style='height:0';
	this.style='';
}
service.onmouseover=function(){
	pros[1].style='height:594px';
	this.style='color:#4178be;border-bottom:3px solid #4178be';
}
service.onmouseout=function(){
	pros[1].style='height:0';
	this.style='';
}
developers.onmouseover=function(){
	pros[2].style='height:594px';
	this.style='color:#4178be;border-bottom:3px solid #4178be';
}
developers.onmouseout=function(){
	pros[2].style='height:0';
	this.style='';
}
for(var j=0;j<pros.length;j++){
	pros[j].onmouseover=function(){
		this.style='height:594px';
	}
	pros[j].onmouseout=function(){
		this.style='';
	}
}

// 
// 
// 
// 
// 获取下拉菜单的li标签,当鼠标滑过变色
var lls =document.querySelectorAll('.lls');
var arrows=document.querySelectorAll('.lls span');
var aw=document.querySelectorAll('.lls a');
var pright=document.querySelectorAll('.pright');
console.log(arrows)
console.log(aw)
function hideli(a){
	for(var i=0;i<lls.length;i++){
		lls[i].style='';
		arrows[i].style='';
		aw[i].style='';
		pright[i].style='display:none';
	}
	lls[a].style='background:#4178be';
	arrows[a].style='color:#fff';
	aw[a].style='color:#fff';
	pright[a].style='display:block';
}
for(var j=0;j<lls.length;j++){
	lls[j].index=j;
	lls[j].onmouseover=function(){
		hideli(this.index);
	}
}


// 下拉页面中，鼠标滑过p标签时出现下划线
var ps = document.querySelectorAll('.pro .pright p');
console.log(ps)
for(var k=0;k<ps.length;k++){
	ps[k].onmouseover=function(){
		this.style='text-decoration:underline';
	}
	ps[k].onmouseout=function(){
		this.style='';
	}
}


// banner上面的文字，鼠标滑过时，文字变色
var banp = document.querySelectorAll('.btext .bp');
	for(var m=0;m<banp.length;m++){
		banp[m].onmouseover=function(){
		this.style='color:#8ed1ff';
	}
		banp[m].onmouseout=function(){
			this.style='';
		}
	}

//在third中，鼠标滑过div，里面对应的span 变色
// var two = document.querySelector('.two');
// var twospan= document.querySelector('.two span');
