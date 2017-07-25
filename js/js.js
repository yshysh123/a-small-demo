	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	var box4 = document.getElementById('box4');
	var box5 = document.getElementById('box5');
	var num = 0;
	var t = new TimelineMax();
	var t2 = new TimelineMax();
	var t3 = new TimelineMax();
	var t4 = new TimelineMax();
	var t5 = new TimelineMax();
	var t6 = new TimelineMax();
	var t7 = new TimelineMax();
	var t8 = new TimelineMax();
	var t9 = new TimelineMax();
	var t10 = new TimelineMax();
	var t11 = new TimelineMax();
	var t12 = new TimelineMax();
	var t13 = new TimelineMax();
	var t14 = new TimelineMax();
	var zhalan = document.getElementById('zhalan');
	var zhuazim = document.getElementsByClassName('zhuazim')[0];
	var zhuazi = document.getElementById('zhuazi');
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    onSlideChangeEnd : function(){
//			    	console.log(mySwiper.activeIndex);
	    	if(mySwiper.activeIndex==0){
	    		oneAnimate.init();
	    	}
	    	if(mySwiper.activeIndex==1){
	    		twoAnimate.init();
	    	}
	    	if(mySwiper.activeIndex==2){
	    		threeAnimate.init();
	    	}
	    	if(mySwiper.activeIndex==3){
	    		fourAnimate.init();
	    	}
	    	if(mySwiper.activeIndex==4){
	    		fiveAnimate.init();
	    	}
	  	}
	})
	var oneAnimate = {};
	oneAnimate.init = function(){
		box1.className = 'swiper-no-swiping';
		t.to( "#chilun1",0,{
			rotation : 0,
			ease : Linear.easeIn ,
		}),
		t2.to( "#chilun2",0,{
			rotation : 0,
			ease : Linear.easeIn ,
		}),
		t3.to( "#chilun3",0,{
			rotation : 0,
			ease : Linear.easeIn ,
		}),
		t4.to( "#chilun4",0,{
			rotation : 0,
			ease : Linear.easeIn ,
		}),
		t5.to( "#chilun5",0,{
			rotation : 0,
			ease : Linear.easeIn ,
		}),
		t6.to( "#chilun6",0,{
			rotation : 0,
			ease : Linear.easeIn ,
		}),
		t7.to( "#chilun7",0,{
			rotation : 0,
			ease : Linear.easeIn ,
		}),
		t8.to( "#chilun8",0,{
			rotation : 0,
			ease : Linear.easeIn ,
		}),
		t9.to( "#zhalan",0,{
			y:0,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#word2",0,{
			scale : 0,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#word0",0,{
			scale : 0,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#word1",0,{
			scale : 0,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#word7",0,{
			scale : 0,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#zhuazim",0,{
			y:0,
			ease : Linear.easeIn ,
		}),
		t9.to( "#m",0,{
			y:0,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#lianzileft",0,{
			opacity : 0,
			ease : Linear.easeIn ,
		}),
		t9.to( "#lianziright",0,{
			opacity : 0,
			ease : Linear.easeIn ,
		}),
		t9.to( "#zhuazi",0,{
			x:0,
			ease : Linear.easeIn ,
		}),
//				zhalan.style.transform = 'matrix(1,0,0,1,0,-752)';
//			    zhuazim.style.transform = 'matrix(1,0,0,1,0,-980)';
//			    zhuazi.style.transform = 'matrix(1,0,0,1,210,0)';
		t.to( "#chilun1",5,{
			rotation : 360,
			ease : Linear.easeIn ,
		}),
		t2.to( "#chilun2",5,{
			rotation : -360,
			ease : Linear.easeIn ,
		}),
		t3.to( "#chilun3",5,{
			rotation : 360,
			ease : Linear.easeIn ,
		}),
		t4.to( "#chilun4",5,{
			rotation : -360,
			ease : Linear.easeIn ,
		}),
		t5.to( "#chilun5",5,{
			rotation : -360,
			ease : Linear.easeIn ,
		}),
		t6.to( "#chilun6",5,{
			rotation : -360,
			ease : Linear.easeIn ,
		}),
		t7.to( "#chilun7",5,{
			rotation : -360,
			ease : Linear.easeIn ,
		}),
		t8.to( "#chilun8",5,{
			rotation : -360,
			ease : Linear.easeIn ,
		}),
		t9.to( "#zhalan",3,{
			y:270,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#word2",0.5,{
			scale : 1,
			ease : Bounce.easeOut ,
		},"-=0.5"),
		t9.to( "#word0",0.5,{
			scale : 1,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#word1",0.5,{
			scale : 1,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#word7",0.5,{
			scale : 1,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#zhuazim",2,{
			y:400,
			ease : Linear.easeIn ,
		}),
		t9.to( "#m",2,{
			y:120,
			ease : Bounce.easeOut ,
		}),
		t9.to( "#lianzileft",0.1,{
			opacity : 1,
			ease : Linear.easeIn ,
		}),
		t9.to( "#lianziright",0.1,{
			opacity : 1,
			ease : Linear.easeIn ,
		}),
		t9.to( "#zhuazi",1,{
			x:150,
			ease : Linear.easeIn ,
			onComplete : function(){
				box1.className = '';
			},
		})
		t10.to( "#word2",1,{
			y : 15 ,
			ease : Linear.easeIn ,
		}),
		t10.to( "#word2",1,{
			y : 0 ,
			ease : Linear.easeIn ,
		}),
		t11.to( "#word0",1,{
			y : -15 ,
			ease : Linear.easeIn ,
		}),
		t11.to( "#word0",1,{
			y : 0 ,
			ease : Linear.easeIn ,
		}),
		t12.to( "#word1",1,{
			y : 15 ,
			ease : Linear.easeIn ,
		}),
		t12.to( "#word1",1,{
			y : 0 ,
			ease : Linear.easeIn ,
		}),
		t13.to( "#word7",1,{
			y : -15 ,
			ease : Linear.easeIn ,
		}),
		t13.to( "#word7",1,{
			y : 0 ,
			ease : Linear.easeIn ,
		}),
		t14.to( "#xia",1,{
			y : 20 ,
			ease : Linear.easeIn ,		
		}),
		t14.to( "#xia",1,{
			y : 0 ,
			ease : Linear.easeIn ,
		}),
		t.repeat( -1 );
		t2.repeat( -1 );
		t3.repeat( -1 );
		t4.repeat( -1 );
		t5.repeat( -1 );
		t6.repeat( -1 );
		t7.repeat( -1 );
		t8.repeat( -1 );
		t10.repeat( -1 );
		t11.repeat( -1 );
		t12.repeat( -1 );
		t13.repeat( -1 );
		t14.repeat( -1 );
//				console.log(t9.totalDuration());
	}
//			
	oneAnimate.init();
	

	//第二屏
	var page2t1 = new TimelineMax();
	var page2t2 = new TimelineMax();
	var page2t3 = new TimelineMax();
	var page2t4 = new TimelineMax();
	var suipian = document.getElementById('suipian');
	var lis = suipian.getElementsByTagName('li');
	for(var i=0;i<100;i++){
		suipian.innerHTML += '<li><img src="images/page2_zuanshitop.png"></li>';
	}
	var twoAnimate = {};
	twoAnimate.init = function(){
		box2.className = 'swiper-no-swiping';
		page2t2.to("#page2_word",0,{
			ease : Linear.easeInOut,
			width : 0,
		})
		page2t1.staggerTo(lis,0,{
			x:0,
			y:0,
		})
		page2t2.to("#page2_word",0,{
			ease : Linear.easeInOut,
			width : 0,
		})
		page2t1.to("#page2_border_bottom",0,{
			width :0,
			x:-0,
			ease : Linear.easeIn ,
		})
		page2t1.to("#page2_border_left,#page2_border_right",0,{
			height :0,
			ease : Linear.easeIn ,
		})
		page2t1.to("#page2_border_topleft,#page2_border_topright",0,{
			width:0,
			ease : Linear.easeIn ,
		})
		page2t1.to("#miaowei",0,{
			opacity : 0,
			ease : Linear.easeIn ,
		})
		page2t1.to("#bottomimg",0,{
			y : 0,
			ease : Linear.easeIn ,
		})
		page2t1.staggerTo(lis,3,{
			ease : Linear.easeInOut,
			cycle : {
				rotation : function(i){
					return 1.666666*i
				},
				rotationY : function(i){
					return randomFn(-45,45)
				},
				rotationX : function(i){
					return randomFn(-45,45)
				},
				bezier : function(){
				return [
					{x:0,y:0},
					{x:-randomFn(300,600),y:randomFn(200,400)},
					{x:-randomFn(400,800),y:randomFn(100,300)},
					{x:-randomFn(600,1000),y:randomFn(-600,-400)},
					{x:-randomFn(300,600),y:randomFn(-1400,-1000)},
					{x:-randomFn(100,400),y:randomFn(-500,-200)},
					{x:-randomFn(300,600),y:randomFn(-200,0)},
					{x:-randomFn(200,900),y:randomFn(-900,-200)},
					]
				},
			},
			onComplete : function(){
				this.target.style.transform = 'rotateY(90deg)';
			},
		},0.01)
		setTimeout(function(){
			page2t2.to("#page2_word",1.5,{
				ease : Linear.easeInOut,
				width : 900,
			})
		},3000)
		page2t1.to("#page2_border_bottom",1,{
			width :790,
			x:-395,
			ease : Linear.easeIn ,
		})
		page2t1.to("#page2_border_left,#page2_border_right",1,{
			height :309,
			ease : Linear.easeIn ,
		})
		page2t1.to("#page2_border_topleft,#page2_border_topright",1,{
			width:185,
			ease : Linear.easeIn ,
		})
		page2t1.to("#miaowei",0.5,{
			opacity : 1,
			ease : Linear.easeIn ,
		})
		page2t1.to("#bottomimg",0.5,{
			y : 180,
			ease : Linear.easeIn ,
			onComplete : function(){
				box2.className = '';
			},
		})
	}
	
	
	//第三屏
	var page3t1 = new TimelineMax();
	var gongzuoneirongword = document.getElementById('gongzuoneirongword');
	var gongzuodivs = gongzuoneirongword.getElementsByTagName('div');
	var renzhitiaojianword = document.getElementById('renzhitiaojianword');
	var renzhidivs = renzhitiaojianword.getElementsByTagName('div');
	var str = '';
	var str2 = '';
	
	str = '<div class="page3_word1_top page3_word1_left" style="left:0;top:0;">';
	for(var i=1;i<9;i++){
		str += '<div class="page3_word1_top" style="left:79px;top:0;">';
	}
	str += '<div class="page3_word1_top page3_word1_right" style="left:79px;top:0;"><div class="page3_word1_right" style="left:0px;top:129.5px;">';
	for(var i=9;i>1;i--){
		str += '<div style="left:-79px;top:0;">';
	}
	str += '<div class="page3_word1_left" style="left:-79px;top:0px"><div class="page3_word1_left" style="left:0px;top:129.5px;">';
	for(var i=1;i<9;i++){
		str += '<div style="left:79px;top:0">';
	}
	str += '<div class="page3_word1_right" style="left:79px;top:0px"><div class="page3_word1_bottom page3_word1_right" style="left:0;top:129.5px;">';
	for(var i=9;i>1;i--){
		str += '<div class="page3_word1_bottom" style="left:-79px;top:0;">';
	}
	str += '<div class="page3_word1_bottom page3_word1_left" style="left:-79px;top:0;">';
	for(var i=0;i<40;i++){
		str += '</div>';
	}
	gongzuoneirongword.innerHTML += str;
	
	str2 = '<div class="page3_word2_top page3_word2_left" style="left:0;top:0;">';
	for(var i=1;i<9;i++){
		str2 += '<div class="page3_word2_top" style="left:79px;top:0;">';
	}
	str2 += '<div class="page3_word2_top page3_word2_right" style="left:79px;top:0;"><div class="page3_word2_right" style="left:0px;top:110px;">';
	for(var i=9;i>1;i--){
		str2 += '<div style="left:-79px;top:0;">';
	}
	str2 += '<div class="page3_word2_left" style="left:-79px;top:0px"><div class="page3_word2_left" style="left:0px;top:110px;">';
	for(var i=1;i<9;i++){
		str2 += '<div style="left:79px;top:0">';
	}
	str2 += '<div class="page3_word2_right" style="left:79px;top:0px"><div class="page3_word2_right" style="left:0px;top:110px;">';
	for(var i=9;i>1;i--){
		str2 += '<div style="left:-79px;top:0">';
	}
	str2 += '<div class="page3_word2_left" style="left:-79px;top:0px"><div class="page3_word2_left" style="left:0px;top:110px;">';
	for(var i=1;i<9;i++){
		str2 += '<div style="left:79px;top:0">';
	}
	str2 += '<div class="page3_word2_right" style="left:79px;top:0px"><div class="page3_word2_bottom page3_word2_right" style="left:0;top:110px;">';
	for(var i=9;i>1;i--){
		str2 += '<div class="page3_word2_bottom" style="left:-79px;top:0;">';
	}
	str2 += '<div class="page3_word2_bottom page3_word2_left" style="left:-79px;top:0;">';
	for(var i=0;i<40;i++){
		str2 += '</div>';
	}
	renzhitiaojianword.innerHTML += str2;
	var gongzuoneirongul = document.getElementById('gongzuoneirongul');
	var renzhitiaojianul = document.getElementById('renzhitiaojianul');
	var gongzuoneironglis = gongzuoneirongul.getElementsByTagName('li');
	var renzhitiaojianlis = renzhitiaojianul.getElementsByTagName('li');
	var gongzuoneirongarr1 = ['1','.','定','制','I','T','课','程','相','关','的','创','意','活','动','策','划',';'];
	var gongzuoneirongarr2 = ['2','.','言','之','有','物',',','诉','求','精','准','的','文','案','撰','写',';'];
	var gongzuoneirongarr3 = ['3','.','严','谨','有','序','的','资','源','安','排',',','人','员','部','署',';'];
	var gongzuoneirongarr4 = ['4','.','坚','定','地','执','行','力','!','!'];
	var gongzuoneirongarr5 = ['5','.','为','结','果','负','责','.'];
	var renzhitiaojianarr1 = ['1','.','三','年','以','上','I','T','产','品','或','服','务','经','营','经'];
	var renzhitiaojianarr2 = ['验',',','有','成','功','运','作','案','例',';'];
	var renzhitiaojianarr3 = ['2','.','永','远','保','持','紧','迫','感','与','危','机','意','识',',','有'];
	var renzhitiaojianarr4 = ['方','法','论','、','有','信','心',';'];
	var renzhitiaojianarr5 = ['3','.','2','4','岁','以','上',',','社','会','阅','历','丰','富',';'];
	var renzhitiaojianarr6 = ['4','.','熟','悉','“','前','端','开','发','”','行','业',',','对','社','群'];
	var renzhitiaojianarr7 = ['运','营','有','一','定','心','得','体','会',';'];
	for(var i=0;i<gongzuoneirongarr1.length;i++){
		gongzuoneironglis[0].innerHTML += '<span>'+gongzuoneirongarr1[i]+'</span>';
	}
	for(var i=0;i<gongzuoneirongarr2.length;i++){
		gongzuoneironglis[1].innerHTML += '<span>'+gongzuoneirongarr2[i]+'</span>';
	}
	for(var i=0;i<gongzuoneirongarr3.length;i++){
		gongzuoneironglis[2].innerHTML += '<span>'+gongzuoneirongarr3[i]+'</span>';
	}
	for(var i=0;i<gongzuoneirongarr4.length;i++){
		gongzuoneironglis[3].innerHTML += '<span>'+gongzuoneirongarr4[i]+'</span>';
	}
	for(var i=0;i<gongzuoneirongarr5.length;i++){
		gongzuoneironglis[4].innerHTML += '<span>'+gongzuoneirongarr5[i]+'</span>';
	}
	for(var i=0;i<renzhitiaojianarr1.length;i++){
		renzhitiaojianlis[0].innerHTML += '<span>'+renzhitiaojianarr1[i]+'</span>';
	}
	for(var i=0;i<renzhitiaojianarr2.length;i++){
		renzhitiaojianlis[1].innerHTML += '<span>'+renzhitiaojianarr2[i]+'</span>';
	}
	for(var i=0;i<renzhitiaojianarr3.length;i++){
		renzhitiaojianlis[2].innerHTML += '<span>'+renzhitiaojianarr3[i]+'</span>';
	}
	for(var i=0;i<renzhitiaojianarr4.length;i++){
		renzhitiaojianlis[3].innerHTML += '<span>'+renzhitiaojianarr4[i]+'</span>';
	}
	for(var i=0;i<renzhitiaojianarr5.length;i++){
		renzhitiaojianlis[4].innerHTML += '<span>'+renzhitiaojianarr5[i]+'</span>';
	}
	for(var i=0;i<renzhitiaojianarr6.length;i++){
		renzhitiaojianlis[5].innerHTML += '<span>'+renzhitiaojianarr6[i]+'</span>';
	}
	for(var i=0;i<renzhitiaojianarr7.length;i++){
		renzhitiaojianlis[6].innerHTML += '<span>'+renzhitiaojianarr7[i]+'</span>';
	}
	var threeAnimate = {};
	threeAnimate.init = function(){
		box3.className = 'swiper-no-swiping';
		page3t1.to("#gongzuoneirongimg",0,{
			y : 0,
		})
		page3t1.to("#renzhitiaoojianimg",0,{
			y : 0,
		})
		page3t1.staggerTo(gongzuodivs,0,{
			rotationY : -90,
		})
		page3t1.staggerTo(renzhidivs,0,{
			rotationY : -90,
		})
		page3t1.staggerTo("#gongzuoneirongul li span",0,{
			rotationY : -90,
			scale : 0,
		})
		page3t1.staggerTo("#renzhitiaojianul li span",0,{
			rotationY : -90,
			scale : 0,
		})
		page3t1.to("#gongzuoneirongimg",1,{
			y : 285,
			ease : Bounce.easeOut ,
		})
		page3t1.staggerTo(gongzuodivs,1,{
			rotationY : 0,
		},0.1)
		page3t1.staggerTo("#gongzuoneirongul li span",1,{
			rotationY : 0,
			scale : 1,
		},0.05)
		page3t1.to("#renzhitiaoojianimg",1,{
			y : 285,
			ease : Bounce.easeOut ,
		})
		page3t1.staggerTo(renzhidivs,1,{
			rotationY : 0,
		},0.1)
		page3t1.staggerTo("#renzhitiaojianul li span",1,{
			rotationY : 0,
			scale : 1,
			onComplete : function(){
				box3.className = '';
			},
		},0.05)
	}
	
	
	//第四屏
	var page4_spall = document.getElementById('page4_spall');
	var page4_spalldivs = page4_spall.getElementsByTagName('img');
	var page4_wenzi = document.getElementById('page4_wenzi');
	for(var i=0;i<page4_spalldivs.length;i++){
		page4_spalldivs[i].style.left = randomFn(0,1000)+'px';
		page4_spalldivs[i].style.top = randomFn(0,1800)+'px';
	}
	var page4t1 = new TimelineMax();
	var str_page4 = '';
	var str2_page4 = '';
	var str3_page4 = '';
	var str4_page4 = '';
	var str5_page4 = '';
	var str6_page4 = '';
	var str7_page4 = '';
	var str8_page4 = '';
	var str9_page4 = '';
	var str10_page4 = '';
	var page4t2 = new TimelineMax();
	var page4t3 = new TimelineMax();
	var page4t4 = new TimelineMax();
	var page4t5 = new TimelineMax();
	var page4t6 = new TimelineMax();
	var page4t7 = new TimelineMax();
	var page4t8 = new TimelineMax();
	var page4t9 = new TimelineMax();
	var page4t10 = new TimelineMax();
	var page4t11 = new TimelineMax();
	//生成文字div
	str_page4 = '<div id="page4_word1" style="width:874px;height:85.2px;"><div class="page4_top page4_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str_page4 += '<div class="page4_top" style="left:'+((Math.floor(87.4*10*i))/10)+'px;top:0;"></div>';
	}
	str_page4 += '<div class="page4_top page4_right" style="left:786.6px;top:0;"></div></div>';
	str2_page4 = '<div id="page4_word2" style="width:874px;height:85.2px;position:absolute;top:85.2px"><div class="page4_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str2_page4 += '<div style="left:'+ ((Math.floor(87.4*10*i))/10) +'px;top:0;"></div>';
	}
	str2_page4 += '<div class="page4_right" style="left:786.6px;top:0;"></div></div>';
	str3_page4 = '<div id="page4_word3" style="width:874px;height:85.2px;position:absolute;top:170.4px"><div class="page4_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str3_page4 += '<div style="left:'+((Math.floor(87.4*10*i))/10)+'px;top:0;"></div>';
	}
	str3_page4 += '<div class="page4_right" style="left:786.6px;top:0;"></div></div>';
	str4_page4 = '<div id="page4_word4" style="width:874px;height:85.2px;position:absolute;top:255.6px"><div class="page4_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str4_page4 += '<div style="left:'+((Math.floor(87.4*10*i))/10)+'px;top:0;"></div>';
	}
	str4_page4 += '<div class="page4_right" style="left:786.6px;top:0;"></div></div>';
	str5_page4 = '<div id="page4_word5" style="width:874px;height:85.2px;position:absolute;top:340.8px"><div class="page4_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str5_page4 += '<div style="left:'+((Math.floor(87.4*10*i))/10)+'px;top:0;"></div>';
	}
	str5_page4 += '<div class="page4_right" style="left:786.6px;top:0;"></div></div>';
	str6_page4 = '<div id="page4_word6" style="width:874px;height:85.2px;position:absolute;top:426px"><div class="page4_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str6_page4 += '<div style="left:'+((Math.floor(87.4*10*i))/10)+'px;top:0;"></div>';
	}
	str6_page4 += '<div class="page4_right" style="left:786.6px;top:0;"></div></div>';
	str7_page4 = '<div id="page4_word7" style="width:874px;height:85.2px;position:absolute;top:511.2px"><div class="page4_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str7_page4 += '<div style="left:'+((Math.floor(87.4*10*i))/10)+'px;top:0;"></div>';
	}
	str7_page4 += '<div class="page4_right" style="left:786.6px;top:0;"></div></div>';
	str8_page4 = '<div id="page4_word8" style="width:874px;height:85.2px;position:absolute;top:596.4px"><div class="page4_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str8_page4 += '<div style="left:'+((Math.floor(87.4*10*i))/10)+'px;top:0;"></div>';
	}
	str8_page4 += '<div class="page4_right" style="left:786.6px;top:0;"></div></div>';
	str9_page4 = '<div id="page4_word9" style="width:874px;height:85.2px;position:absolute;top:681.6px"><div class="page4_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str9_page4 += '<div style="left:'+((Math.floor(87.4*10*i))/10)+'px;top:0;"></div>';
	}
	str9_page4 += '<div class="page4_right" style="left:786.6px;top:0;"></div></div>';
	str10_page4 = '<div id="page4_word10" style="width:874px;height:85.2px;position:absolute;top:766.8px"><div class="page4_bottom page4_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str10_page4 += '<div class="page4_bottom" style="left:'+((Math.floor(87.4*10*i))/10)+'px;top:0;"></div>';
	}
	str10_page4 += '<div class="page4_bottom page4_right" style="left:786.6px;top:0;"></div></div>';
	
	page4_wenzi.innerHTML += str_page4+str2_page4+str3_page4+str4_page4+str5_page4+str6_page4+str7_page4+str8_page4+str9_page4+str10_page4;
	
	var page4_wenzi2 = document.getElementById('page4_wenzi2');
	var page4_wenzi2lis = page4_wenzi2.getElementsByTagName('li');
	var fourAnimate = {};
	fourAnimate.init = function(){
		for(var i=0;i<page4_spalldivs.length;i++){
			page4_spalldivs[i].style.left = randomFn(0,1000)+'px';
			page4_spalldivs[i].style.top = randomFn(0,1800)+'px';
		}
		
		page4t2.staggerTo("#page4_word1 div",0,{
			rotationY:-90,
		})
		page4t3.staggerTo("#page4_word2 div",0,{
			rotationY:-90,
		})
		page4t4.staggerTo("#page4_word3 div",0,{
			rotationY:-90,
		})
		page4t5.staggerTo("#page4_word4 div",0,{
			rotationY:-90,
		})
		page4t6.staggerTo("#page4_word5 div",0,{
			rotationY:-90,
		})
		page4t7.staggerTo("#page4_word6 div",0,{
			rotationY:-90,
		})
		page4t8.staggerTo("#page4_word7 div",0,{
			rotationY:-90,
		})
		page4t9.staggerTo("#page4_word8 div",0,{
			rotationY:-90,
		})
		page4t10.staggerTo("#page4_word9 div",0,{
			rotationY:-90,
		})
		page4t11.staggerTo("#page4_word10 div",0,{
			rotationY:-90,
		})
		page4t11.staggerTo(page4_wenzi2lis,0,{
			rotationY : -90,
		})
		page4t1.staggerTo(page4_spalldivs,3,{
			ease : Linear.easeInOut,
			cycle : {
				rotationY : function(i){
					return randomFn(-45,45)
				},
				rotationX : function(i){
					return randomFn(-45,45)
				},
				bezier : function(){
					return [
						{x:randomFn(-500,200),y:0},
						{x:randomFn(-100,200),y:-500},
						{x:randomFn(0,200),y:-1000},
						{x:randomFn(-100,200),y:-1300},
						{x:randomFn(-500,200),y:-3800},
						]
					},
				},
		},0.1)
		page4t1.repeat(-1);
		page4t2.staggerTo("#page4_word1 div",1,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.1)
		page4t3.staggerTo("#page4_word2 div",1.1,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.11)
		page4t4.staggerTo("#page4_word3 div",1.2,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.12)
		page4t5.staggerTo("#page4_word4 div",1.3,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.13)
		page4t6.staggerTo("#page4_word5 div",1.4,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.14)
		page4t7.staggerTo("#page4_word6 div",1.5,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.15)
		page4t8.staggerTo("#page4_word7 div",1.6,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.16)
		page4t9.staggerTo("#page4_word8 div",1.7,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.17)
		page4t10.staggerTo("#page4_word9 div",1.8,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.18)
		page4t11.staggerTo("#page4_word10 div",1.9,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.19)
		page4t11.staggerTo(page4_wenzi2lis,1,{
			rotationY : 0,
			ease : Bounce.easeOut ,
		},0.2)
	}
	
	
	//第五屏
	var page5_jianli = document.getElementById('page5_jianli');
	var str_page5 = '';
	var str2_page5 = '';
	var str3_page5 = '';
	var str4_page5 = '';
	var page5t1 = new TimelineMax();
	var page5t2 = new TimelineMax();
	var page5t3 = new TimelineMax();
	var page5t4 = new TimelineMax();
	str_page5 = '<div id="page5_word1" style="width:828px;height:106px;"><div class="page5_top page5_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str_page5 += '<div class="page5_top" style="left:'+82.8*i+'px;top:0;"></div>';
	}
	str_page5 += '<div class="page5_top page5_right" style="left:745.2px;top:0;"></div></div>';
//			console.log(str_page5);
	str2_page5 = '<div id="page5_word2" style="width:828px;height:106px;position:absolute;top:106px"><div class="page5_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str2_page5 += '<div style="left:'+82.8*i+'px;top:0;"></div>';
	}
	str2_page5 += '<div class="page5_right" style="left:745.2px;top:0;"></div></div>';
//			console.log(str2_page5);
	str3_page5 = '<div id="page5_word3" style="width:828px;height:106px;position:absolute;top:212px"><div class="page5_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str3_page5 += '<div style="left:'+82.8*i+'px;top:0;"></div>';
	}
	str3_page5 += '<div class="page5_right" style="left:745.2px;top:0;"></div></div>';
//			console.log(str3_page5);
	str4_page5 = '<div id="page5_word4" style="width:828px;height:106px;position:absolute;top:318px"><div class="page5_bottom page5_left" style="left:0;top:0;"></div>';
	for(var i=1;i<9;i++){
		str4_page5 += '<div class="page5_bottom" style="left:'+82.8*i+'px;top:0;"></div>';
	}
	str4_page5 += '<div class="page5_bottom page5_right" style="left:745.2px;top:0;"></div></div>';
//			console.log(str4_page5);
	page5_jianli.innerHTML += str_page5+str2_page5+str3_page5+str4_page5;
	
	
	var fiveAnimate = {};
	fiveAnimate.init = function(){
		page5t1.staggerTo("#page5_word1 div",1,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.1)
		page5t2.staggerTo("#page5_word2 div",1.5,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.1)
		page5t3.staggerTo("#page5_word3 div",2,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.1)
		page5t4.staggerTo("#page5_word4 div",2.5,{
			rotationY:0,
			ease : Linear.easeInOut,
		},0.1)
		page5t4.to("#page5_wenzi",1,{
			opacity : 1,
			ease : Linear.easeInOut,
		})
	}
	
	
	function randomFn (first,end){
		return Math.random()*(end-first)+first;
	}