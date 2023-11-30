/*	
 * las funciones :
 * cerrarFrameConsulta  >> codigo que cierra frame de subconsulta
 * setFocusToElement    >> luego de cerrar frame da el foco a objeto indicado
 * 
 * estas funciones deben de declararse en c/subconsulta
 * 
 * como class poner:
 * 		TableHovered hoverable
 * 
 * 
 * */

var $lastHovered = undefined;

 $(document).ready(function(){ 
	$lastHovered = undefined;
	tableHoverable(); 
});
 
/**
 * tableHoverable 
 * realiza el cambio de color en la columna en que el mouse se posicione
 * en la tabla debe de estar declarada la clase class="hoverable"
 * y en la pagina deben de estar cargados los estilos de tabla TableHovered 
 */
  function tableHoverable(){
		$('.hoverable tbody tr:even').addClass('even');
		$('.hoverable tbody tr:odd').addClass('odd');
		$('.hoverable tbody tr').hover(
		   function() {
				  $(this).focus();
				  $(this).siblings().removeClass('hovered');
		          $(this).addClass('hovered');     // On hover add the class 'hovered' and apply the hovered styles 
				  $lastHovered = $(this);
		       }, function() {
				  $(this).blur();
		          $(this).removeClass('hovered');  // On mouseout remove the class 'hovered' and reset the styles   
	      	}
		);
	}
	
/**
 * navigationTable(nombreTabla,enter,typeFocus,evtTrigger) 
 * permite moverse con teclado en la tabla.
 * nombreTabla  nombre de la tabla en la que se va a mover con teclado
 * enter		indica si al dar enter en la fila ejecuta el evento click de el objeto enviado en campoFocus  
 * typeFocus	tipo del campo al cual se va a dar el enfoque para la ejecucion del enter
 * evtTrigger	nombre del evento el cual se va a ejecutar 
 * 
 */
	function navigationTable(nombreTabla,enter,typeFocus,evtTrigger) {
			$(document).on('keydown', function(e) {
			    var $hovered = $('#'+nombreTabla+' .hovered');
				if (!$hovered.length && $lastHovered) {
					$hovered = $lastHovered
				}
				
				// down arrow
			    if (e.keyCode == 38) {
					if (typeFocus!="" && typeFocus!="radio"){
                    	$hovered.find('input[type="'+typeFocus+'"]').focus();
		            }
					else {
						e.preventDefault();
						if($hovered.prev().length){
			            	$lastHovered = $hovered.removeClass('hovered').prev().addClass('hovered')
				        } else{
							$lastHovered = $('#'+nombreTabla+ ' tbody tr').removeClass('hovered').last().addClass('hovered');
						}
						$lastHovered[0].focus();
						if(!isInViewport($lastHovered[0])) {
							$lastHovered[0].scrollIntoView(false);
						}
						
					}
			    } 
				// up arrow
				else if (e.keyCode == 40) {
					if (typeFocus!="" && typeFocus!="radio"){
                    	$hovered.find('input[type="'+typeFocus+'"]').focus();
		            }
					else {
						e.preventDefault();
						if($hovered.next().length){
			            	$lastHovered = $hovered.removeClass('hovered').next().addClass('hovered')
				        }else{
				            $lastHovered = $('#'+nombreTabla+ ' tbody tr').removeClass('hovered').first().addClass('hovered'); 
				        }
						$lastHovered[0].focus();
						if(!isInViewport($lastHovered[0])) {
							$lastHovered[0].scrollIntoView(true);
						}
					}
			        
			    } 
 				// tecla escape 
				else if (e.keyCode == 27) {
					if (eval("typeof setFocusToElement == 'function'")) {
		            		setFocusToElement();
		            	}	
		            	if (eval("typeof cerrarFrameConsulta == 'function'")) {
		            		cerrarFrameConsulta();
		            	}
				} 
				 // tecla enter
				else if (e.keyCode == 13) {
					if(enter){
						var selected = $('#'+nombreTabla+ ' .hovered');
						if (selected.length < 1) {
							selected = $('#'+nombreTabla+ ' .selected');
						}
						if (selected.length) {
							$(selected[0]).find("td:last input[type="+typeFocus+"]").trigger(evtTrigger);
						}
					}
				}
				
			});
			
		   $('#'+nombreTabla+' tr').click(function() {
			    $(this).closest('#'+nombreTabla).find('tr').removeClass('selected');
			    $(this).addClass("selected");
			});		   
		}
	
	/**
	 * setFocusTable(nombreTabla) 
	 * da el enfoque a la primera fila de la tabla indicada por parametro
	 * nombreTabla  nombre de la tabla a dar el enfoque
	 * 
	 */
	function setFocusTable(nombreTabla) {
		var $table = $("#"+nombreTabla);
		$table.attr('tabindex', 0);
		$table.focus();
	}

	function isInViewport(element) {
		
	    var rect = element.getBoundingClientRect();
	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
	}
	
/*
 * Funciones para mantener la cabecera de la tabla fija
 * 
 * como class poner:
 * 		tableWithFloatingHeader 
 * 
 * */
	/********  inicio  *********/

	$(document).ready(function(){ ActivateFloatingHeaders("table.tableWithFloatingHeader"); });
	
	function UpdateTableHeaders() {
        $("div.divTableWithFloatingHeader").each(function() {
            var floatingHeaderRow = $(".tableFloatingHeader", this);
            var offset = $(this).offset();
            var scrollTop = $(window).scrollTop();
            //var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
            if ((scrollTop > offset.top) && (scrollTop < offset.top + $(this).height())) {
                floatingHeaderRow.css("visibility", "visible");
                floatingHeaderRow.css("top", Math.min(scrollTop - offset.top, $(this).height() - floatingHeaderRow.height()) + "px");
            }
            else {
                floatingHeaderRow.css("visibility", "hidden");
                floatingHeaderRow.css("top", "0px");
            }
        });
    }

	function ActivateFloatingHeaders(selector_str){
	    $(selector_str).ready(function() {
	        $("table.tableWithFloatingHeader").each(function() {
	            $(this).wrap("<div class=\"divTableWithFloatingHeader\" style=\"position:relative;clear:both;\"></div>");

	            var originalHeaderRow = $("tr:first", this);
	            originalHeaderRow.children().css("width", function(i, val){
	    			return $(originalHeaderRow).children().eq(i).css("width", val);
	    		});
	            originalHeaderRow.before(originalHeaderRow.clone());
	            
	            var clonedHeaderRow = $("tr:first", this);
	            clonedHeaderRow.addClass("tableFloatingHeader");
	            clonedHeaderRow.css("position", "absolute");
	            clonedHeaderRow.css("top", "0px");
	            clonedHeaderRow.css("left", $(this).css("margin-left"));
	            clonedHeaderRow.css("visibility", "hidden");

	            originalHeaderRow.addClass("tableFloatingHeaderOriginal");
	        });
	        UpdateTableHeaders();
	        $(window).scroll(UpdateTableHeaders);
	        $(window).resize(UpdateTableHeaders);
	    });
	}	
	
    /********  fin  *********/
	