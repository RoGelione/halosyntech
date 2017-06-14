$(function(){
						var c=0;//自动滑页下标
						var b=0;//滑页向左百分比
						var t;//循环事件赋值，好控制
						var w;//获取可视区宽度
						var lic;									
						/*
						 * 自动换页
						 */
						$(".sImg div").each(function(){//根据图片个数添加滑页点个数
						$("#yuandian").append("<li class=''><a href='#'></a></li>")
						});
						function timedCount(){
						w=$(window).width();
						b=(c)%3*w;
//						$(".p-list").animate({bottom: b+"px"},500)}
						//$(".p-list").css("margin-left","-"+b+"%");
						$(".sImg").animate({marginLeft:"-"+b+"px"});
						lic = $("#yuandian li").eq(c);
						lic.addClass("open");
						lic.siblings().removeClass("open");
						//b=(c+1)%4*100;							
						c++;
						if (c==3) {
						c=0;}
						t=setTimeout(timedCount,3000);				
						}	

						timedCount();//循环开始
						/*
						 * 手动换页
						 */
						
						var a;//手动换页下标
						$("#yuandian").on("mouseenter","li",function(){
						t=clearTimeout(t);//鼠标停留，停止循环
						a=($(this).index());
						
						$("#yuandian li").removeClass().filter(":eq("+a+")").addClass("open");
						b=a*w;
						c=a;						
						//$(".p-list").css("margin-left","-"+b+"%");
						$(".sImg").animate({marginLeft:"-"+b+"px"});
					}).mouseleave(t);//鼠标离开继续循环					
				});