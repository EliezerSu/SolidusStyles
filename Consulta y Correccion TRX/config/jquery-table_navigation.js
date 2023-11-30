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

 $(document).ready(function(){ tableHoverable(); });

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
		          $(this).addClass('hovered');     // On hover add the class 'hovered' and apply the hovered styles 
		       }, function() {
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
		   $('#'+nombreTabla+' tr').keyup(function(e) {
			   	var trTable = $(this);
			   	switch(e.keyCode){
		            // up arrow
		            case 40:
		            	var tdTable = trTable.removeClass('hovered')
		                	   .next()
		                       .addClass('hovered')
		                       .children('td:last');
	                    if (typeFocus!="" && typeFocus!="radio"){
	                    	tdTable=tdTable.children('input[type="'+typeFocus+'"]');
			            }
			            tdTable.focus();
		                break;
		            // down arrow
		            case 38:
		            	var tdTable = trTable.removeClass('hovered')
		                	   .prev()
		                       .addClass('hovered')
		                       .children('td:last');
	                    if (typeFocus!="" && typeFocus!="radio"){
	                    	tdTable=tdTable.children('input[type="'+typeFocus+'"]');
			            }
		            	tdTable.focus();
		                break;
			            // tecla escape
		            case 27:
		            	if (eval("typeof setFocusToElement == 'function'")) {
		            		setFocusToElement();
		            	}	
		            	if (eval("typeof cerrarFrameConsulta == 'function'")) {
		            		cerrarFrameConsulta();
		            	}
		            	break;
		            case 13:
						if(enter){
							var tdTable = trTable.children('td:last')
			            						 .children('input[type="'+typeFocus+'"]')
			            						 .trigger(evtTrigger);
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
		$("#"+nombreTabla+" tr").children('td:first').focus();
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
	