(function(){
var tabs=document.querySelector('[data-tabs]');if(tabs)tabs.addEventListener('click',function(e){var b=e.target.closest('[data-c]');if(!b)return;var c=b.getAttribute('data-c');tabs.querySelectorAll('[data-c]').forEach(function(x){x.setAttribute('aria-pressed',String(x===b));});document.querySelectorAll('[data-rc]').forEach(function(r){r.style.display=c==='all'||r.getAttribute('data-rc')===c?'':'none';});});
var n=4,base=4,sv=document.querySelector('[data-serv]');function upd(){document.querySelectorAll('[data-q]').forEach(function(q){var v=+q.getAttribute('data-q')*n/base;q.textContent=(Math.round(v*10)/10).toString().replace('.',',');});if(sv)sv.textContent=n;}
document.querySelectorAll('[data-sd]').forEach(function(b){b.addEventListener('click',function(){n=Math.max(1,Math.min(12,n+(+b.getAttribute('data-sd'))));upd();});});
document.querySelectorAll('.stp li').forEach(function(l){l.addEventListener('click',function(){l.classList.toggle('done');});});
var p=document.querySelector('[data-print]');if(p)p.addEventListener('click',function(){window.print();});})();
