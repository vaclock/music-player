!function(t){function e(){this.init()}function n(t){this.dom=t,this.startX=0,this.disX=0,this.startPoint=0,this.init()}e.prototype={init:function(){this.getDom(),this.progressWidth=this.bgFront.parentElement.offsetWidth},getDom:function(){this.curTime=document.querySelector(".curTime"),this.circle=document.querySelector(".circle"),this.bgFront=document.querySelector(".bgFront"),this.totalTime=document.querySelector(".totalTime")},renderTotalTime:function(t){t=this.formatTime(t);this.totalTime.innerHTML=t},formatTime:function(t){t=Math.round(t);let e=Math.floor(t/60),n=t%60;return e=e<10?"0"+e:e,n=n<10?"0"+n:n,`${e}:${n}`},update:function(e){const n=this;this.progressTimer||(this.progressTimer=setInterval(function(){var t=n.formatTime(e.currentTime);n.curTime.innerHTML=t,n.move(e.currentTime/e.duration)},1e3))},stop:function(){clearInterval(this.progressTimer),this.progressTimer=null},clear:function(){this.curTime.innerHTML="00:00"},move:function(t){this.bgFront.style.width=100*t+"%",this.circle.style.transform=`translatex(${Math.floor(t*this.progressWidth)}px)`}},n.prototype={init:function(){const e=parseFloat(this.dom.getBoundingClientRect().left),n=this;this.dom.addEventListener("touchstart",function(t){n.startX=t.changedTouches[0].pageX,n.onstart&&n.onstart(),void 0}),this.dom.addEventListener("touchmove",function(t){n.disX=t.changedTouches[0].pageX-n.startX;var e=n.disX+n.startPoint;n.per=e/n.dom.parentElement.offsetWidth,n.per<0&&(n.per=0),1<n.per&&(n.per=1),n.onmove&&n.onmove(n.per),t.preventDefault()}),this.dom.addEventListener("touchend",function(t){n.startPoint=t.changedTouches[0].pageX-e,n.onend&&n.onend(n.per)})}},t.progress={pro:function(){return new e},drag:function(t){return new n(t)}}}(window.player||(window.player={}));