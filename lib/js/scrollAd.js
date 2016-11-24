			window.onload=function(){

				/*顶部滚动广告*/
				var odiv = document.getElementById('marquee1');
				var oul = odiv.getElementsByTagName('ul')[0];
				var ali = oul.getElementsByTagName('li');
				var spa = -2;				
				oul.innerHTML=oul.innerHTML+oul.innerHTML;
				oul.style.width=ali[0].offsetWidth*ali.length+'px';
				function move(){
					if(oul.offsetLeft<-oul.offsetWidth/2){
						oul.style.left='0';
					}
					if(oul.offsetLeft>0){
						oul.style.left=-oul.offsetWidth/2+'px'
					}
					oul.style.left=oul.offsetLeft+spa+'px';
				}
				var timer = setInterval(move,60)
				
				odiv.onmousemove=function(){clearInterval(timer);}
				odiv.onmouseout=function(){timer = setInterval(move,60)};

			var odiv2 = document.getElementById('marquee2');
		/*底部滚动广告*/
		if(odiv2){
				
				var oul2 = odiv2.getElementsByTagName('ul')[0];
				var ali2 = oul2.getElementsByTagName('li');
				var spa2 = -2;				
				oul2.innerHTML=oul2.innerHTML+oul2.innerHTML;
				oul2.style.width=ali2[0].offsetWidth*ali2.length+'px';
				
				function move2(){
					if(oul2.offsetLeft<-oul2.offsetWidth/2){
						oul2.style.left='0';
					}
					if(oul2.offsetLeft>0){
						oul2.style.left=-oul2.offsetWidth/2+'px'
					}
					oul2.style.left=oul2.offsetLeft+spa2+'px';
				}
				var timer2 = setInterval(move2,60)
				
				odiv2.onmousemove=function(){clearInterval(timer2);}
				odiv2.onmouseout=function(){timer2 = setInterval(move2,60)};
			}else{
				return
			}


			}
