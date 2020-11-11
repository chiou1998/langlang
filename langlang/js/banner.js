let slidewrap = document.getElementById("slide-wrap");
let slidecontent = document.getElementById("slide-content")
let viewwidth = document.documentElement.clientWidth || document.body.clienWidth;
let firstul = document.getElementsByTagName("ul")[7];
let aitem = slidewrap.getElementsByTagName('ul')[1].children;
let liitem = firstul.children;
var slidenext = slidewrap.getElementsByTagName('span')[1]
var slideprev = slidewrap.getElementsByTagName('span')[0]
let index = 0;
console.log(slidecontent)
//设置滑动对象的宽度
slidecontent.style.width = viewwidth * liitem.length + "px"
 //设置li的宽度
let flag = false
 let flagtimer = null
 let outtimer = null


for(let i = 0; i < liitem.length; i++) {
    liitem[i].style.width = viewwidth + 'px';
}
     
// for(let i = 0; i < aitem.length; i++){
//     aitem[i].onclick = function(){
//         for(let i = 0;i < aitem.length; i++){
//             aitem[i].style.backgroundColor="#d9efef"
//         }
//         this.style.backgroundColor="white"
//     }
//      }

for(let i = 0; i < aitem.length; i++){
    aitem[i].onclick = function(){
        for(let i = 0;i < aitem.length; i++){
            aitem[i].className='';
        }
        aitem[i].className="current";  
        imgslide(i);
        index = i; 
    }
     }

//图片滑动方法
function imgslide(index){
    let left = index * viewwidth;
    slidecontent.style.left = -left + 'px';
    flagtimer = setTimeout(function(){
        flag = false
        clearTimeout(flagtimer)
    },1000)
    
}

//分页按钮切换效果
function tooglehigh(){
    for(let i = 0;i < aitem.length; i++){
        aitem[i].className='';
    }
    aitem[index].className="current";
}

slideprev.onclick = function(){
    if(flag){return false}
    flag = true
   index--
   if(index < 0){
       index = aitem.length - 1
   }
   imgslide(index)
   tooglehigh()
}

slidenext.onclick = function(){
    if(flag){return false}
    flag = true
    index++
    if(index == aitem.length){
        index = 0
    }
    tooglehigh()
    imgslide(index)
}

//轮播图自动右滑
outtimer = setInterval(() => {
       outtimerone()
},3000);

function outtimerone(){
    index++
    if(index == aitem.length){
        index = 0
    }
    tooglehigh()
    imgslide(index)
}
//鼠标进入slide-wrap  轮播图计时器结束

slidewrap.onmouseenter = () =>{
    clearInterval(outtimer)
}
slidewrap.onmouseleave = () =>{
    outtimer = setInterval(() => {
        outtimerone()
    }, 3000);
}