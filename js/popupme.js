// PopUpMe v1.1.0  |  (c) 2014 Kirtan Thakkar | MIT Licence
$(document).ready(function(){
	(function ( $ ) {
			
			bgcount = 0;  //background and popupme box count, loaded = 1 , not loaded = 0
			
			$.fn.popupme = function(param){
			
				//Adding background and popupme box
				if(bgcount==0)
				{
					var htmlForBG = '<div id="popupme-bg" class="popupme-background popupme-hide"></div>';
					var htmlForPopup = '<div class="popupme popupme-opacity-0"><div style="position:relative;"><div class="popupme-close" >X</div><div class="popupme-title"></div><div class="popupme-text"></div></div></div>';
					
					$('body').append(htmlForBG);
					$('body').append(htmlForPopup);
					
					bgcount=1;
				}
				
				$(window).resize(function(){
					popupme_center();
				});
				
				var topPer,leftPer;
				var anim = param.animation;
				
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
					
					$("#popupme-bg").removeClass("popupme-hide").addClass("popupme-show-5");
					
					//removing previosly added classes for the animations
					$(".popupme").attr('class', 'popupme popupme-opacity-0');
					
					if(typeof(anim) == "undefined" || anim == null || anim == "fade-in")
					{
						$(".popupme").show().addClass("popupme-fadein");
					}
					else if(anim == "zoom-in")
					{
						$(".popupme").addClass("popupme-zoomin-set").show().addClass("popupme-zoomin");
					}
					else if(anim == "zoom-out")
					{
						$(".popupme").addClass("popupme-zoomout-set").show().addClass("popupme-zoomout");
					}
					else if(anim == "rotate")
					{
						$(".popupme").addClass("popupme-rotate-set").show().addClass("popupme-rotate");
					}
					
					
				
					//----------Exiting Click function on background and close button-------------
						$("#popupme-bg,.popupme .popupme-close").on('click',function(){
							
							$("#popupme-bg").removeClass("popupme-show-5").addClass("popupme-hide");
							
							if(typeof(anim) == "undefined" || anim == null || anim == "fade-in")
							{
								$(".popupme").removeClass("popupme-fadein").addClass("popupme-fadein-remove");
							}
							else if( anim == 'zoom-in' )
							{
								$(".popupme").removeClass("popupme-zoomin").addClass("popupme-zoomin-remove");
							}
							else if( anim == 'zoom-out' )
							{
								$(".popupme").removeClass("popupme-zoomout").addClass("popupme-zoomout-remove");
							}
							else if( anim == 'rotate' )
							{
								$(".popupme").removeClass("popupme-rotate").addClass("popupme-rotate-remove");
							}
							
							//On Exit remove click binding to remove redundant call for all the popups
							$("#popupme-bg,.popupme .popupme-close").off('click');
							
						});
					
				});
				
			
			};
			
			
			
		}( jQuery ));
	});