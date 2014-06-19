// PopUpMe v1.0.0  |  (c) 2014 Kirtan Thakkar | MIT Licence
$(document).ready(function(){
	(function ( $ ) {
			
			bgcount = 0;  //background and popupme box count, loaded = 1 , not loaded = 0
			
			$.fn.popupme = function(param){
			
				//Adding background and popupme box
				if(bgcount==0)
				{
					var htmlForBG = '<div id="popupme-bg" class="popupme-background popupme-hide"></div>';
					var htmlForPopup = '<div class="popupme popupme-hide"><div style="position:relative;"><div class="popupme-close" >X</div><div class="popupme-title"></div><div class="popupme-text"></div></div></div>';
					
					$('body').append(htmlForBG);
					$('body').append(htmlForPopup);
					
					bgcount=1;
				}
				
				$(window).resize(function(){
					popupme_center();
				});
				
				function popupme_center()
				{
					var winHeight = $(window).height();
					var winWidth = $(window).width();
					
					var max_height = (winHeight*.8);
					
					$(".popupme").css("max-height",max_height + "px");
					$(".popupme .popupme-text").css("max-height",(max_height - 100) + "px");
					
					var popupHeight = $(".popupme").height();
					var popupWidth = $(".popupme").width();
					
					var leftPer = (((winWidth - popupWidth) / winWidth) * 100 ) / 2 ;
					
					var topPer = (((winHeight - popupHeight) / winHeight) * 100 ) / 2 ;
					
					$(".popupme").css('left',leftPer+"%");
					$(".popupme").css('top',topPer+"%");	
				}
				
				$(this).on('click',function(event){
					event.preventDefault();
					
					$(".popupme .popupme-title").html(param.title);
					$(".popupme .popupme-text").html(param.text);
					
					popupme_center();  //Centering after setting text
					
					$("#popupme-bg").removeClass("popupme-hide").addClass("popupme-show-5",0);
					$(".popupme").removeClass("popupme-hide").addClass("popupme-show",0);
				});
					
				$("#popupme-bg,.popupme .popupme-close").on('click',function(){
					
					$("#popupme-bg").removeClass("popupme-show-5").addClass("popupme-hide",0);
					$(".popupme").removeClass("popupme-show").addClass("popupme-hide",0);
				});
					
				
			
			};
			
			
			
		}( jQuery ));
	});