
/*
 * funcion hace que cuando se de el foco por teclado o mouse a todo campo texto, el contenido se seleccione dando 
 * la posibilidad de borrar el contedido de una forma rapida  
 * */
	function JQtextSelection(){
		$("input[type=text]").ready(function() {
			$('.formulariocampo,.formulariocampoRight').click(function() {
			    $(this).select();
			});
		});	
	}
/*
 * funcion hace que se desaparezca la imagen de procesando para las ventanas que utilizan el codigo:
 * 
 * <!-- usado para presentar imagen de cargando -->
 *  <div id="idProcesando">
 *    <img height='20' width='90' src='<%=request.getContextPath()%>/imgs/wait.gif' />
 *  </div>
 * <!-- usado para presentar imagen de cargando -->
 * 
 * */
	function JQimageProcesando(){
	 jQuery(window).load(function() {
		jQuery('#idProcesando').hide();
	 });
	}
	
/*
 * funcion muestra leyenda en forma de popup 
 * 
 */	
	function JQmostrarPopup(idObj) {
	   $("#"+idObj).fadeIn('slow');
	}
	

/*
 * funcion que agrega el evento click para los objetos con clase marginPopup para esconder 
 * la ventana popup
 * 
 */	
	function JQcerrarPopup(){
		$(document).ready(function (){
		   //Funci�n para cerrar el popup
		   $('.marginPopup').click(function (){
		      $(this).fadeOut('slow');
		   });
		});
	}
	
/*
 * ejecuta eventos manualmente
 * */	
	 function ejecutaEventosObj1(evento,obj){	
	        //var evtObj = document.createEventObject();
	        //if (evento=="onkeypress") {
	        //  evtObj.keyCode = 13;
	        //}
	        $("#"+obj).trigger(evento);
	        //document.getElementById(obj).fireEvent(evento,evtObj);
	        //evtObj=null; 
	 }
	 
	 function jqProcesaPeticion(urlProcess,modal,messageError,dataSend,idButtonBlock){
		    $.ajax({
			    url: urlProcess,
			    type:'POST',
			    dataType: "xml",
			    data: dataSend,
			    success: 
			        function(data, textStatus, jqXHR){
			    		xmlDoc = $.parseXML( jqXHR.responseText );
			    		//$xml = $( xmlDoc ),
			    		parseMessage(xmlDoc);
			    		//$nombre = $xml.find( "NOMBRE" );
			            // ill want to do something with divs here later i.e a refresh or toggle
			        },  
				//If there was no resonse from the server
		        error: function(jqXHR, textStatus, errorThrown){
		        	if (messageError == ""){
						alert("No termino correctamente el Proceso ...");
					}else{
						alert(messageError);
					}
		        },
		         
		        //capture the request before it was sent to server
		        beforeSend: function(jqXHR, settings){
		        	if (idButtonBlock!="") {
		        		$("#"+idButtonBlock).attr('disabled' , true);
		        	}
		        	if (modal){
		        		showModalProcess("idProcesando","Procesando ...","","","" );
		        	}
		        },
		         
		        //this is called after the response or error functions are finsihed
		        //so that we can take some action
		        complete: function(jqXHR, textStatus){
		        	if (idButtonBlock!="") {
		        		$("#"+idButtonBlock).attr('disabled' , false);
		        	}
		        	if (modal){
		        		jqProcesandoStop("idProcesando","");
		        	}
		        }		 		
		 
		 	});	 
	 }	 
	 
	 function jqProcesandoStart(id,time,opacity){
		 if(time==""){
			 time=250;
		 }
		 if(opacity==""){
			 opacity=0.5;
		 }
		 $("#"+id).fadeTo(time,opacity);
	 }
	 
	 function jqProcesandoStop(id,time){
		 if(time==""){
			 time=250;
		 }
		 $("#"+id).fadeOut(time);
	 }
	 
	 function showModalProcess(id,msjProc,rutaImg,rutaObj,time){
		  cargar(id,msjProc,rutaImg,rutaObj);
		  jqProcesandoStart(id,time,"");
	 }
	 
	 function autoCompletarPlantillas(cantCarac, ruta){
		 $( "#identificacion" ).autocomplete({
		      minLength: cantCarac,
		      search : function(event,ui){
		    	  var newUrl = ruta+"/dcto/nacc_dcto_plantillasAutocompletar.jsp?opcion=CONS_CEDULA&cedula=" + $("#identificacion").val();
		          $(this).autocomplete("option","source",newUrl)
		      },
		      focus: function( event, ui ) {
		        $( "#identificacion" ).val( ui.item.iden );
		        return false;
		      },
		      select: function( event, ui ) {
		        $( "#identificacion" ).val( ui.item.iden );
		        $( "#razonSocial" ).val( ui.item.desc );
		        $( "#beneficiario" ).val( ui.item.bene );
		        $( "#idProveedor" ).val( ui.item.idPe );
		        lleneDistritoDireccionProveedor();
		        return false;
		      }
		    })
		    .autocomplete( "instance" )._renderItem = function( ul, item ) {
		      return $( "<li>" )
		        .append( "<div><span class=\"cedProveedor\">" + item.iden + "</span><br><span class=\"razonSocProveedor\">" + item.desc + "</span></div>" )
		        .appendTo( ul );
		    };
	 }
	 
	 function autoCompletarProveedor(cantCarac, ruta){
		 $( "#identificacion" ).autocomplete({
		      minLength: cantCarac,
		      search : function(event,ui){
		    	  var newUrl = ruta+"/dcto/nacc_dcto_plantillasAutocompletar.jsp?opcion=CONS_PROVEEDOR&cedula=" + $("#identificacion").val()+"&pais=" + $("#pais").val();
		          $(this).autocomplete("option","source",newUrl)
		      },
		      focus: function( event, ui ) {
		        $( "#identificacion" ).val( ui.item.iden );
		        return false;
		      },
		      select: function( event, ui ) {
		        $( "#identificacion" ).val( ui.item.iden );
		        $( "#idRazon" ).val( ui.item.desc );
		        enviar();
		        return false;
		      }
		    })
		    .autocomplete( "instance" )._renderItem = function( ul, item ) {
		      return $( "<li style=\"margin-top:0px; margin-bottom:0px;\">" )
		        .append( "<div height=\"5px\"><span class=\"cedProveedor\">" + item.iden + "</span>&emsp;<span class=\"razonSocProveedor\">" + item.desc + "</span></div>" )
		        .appendTo( ul );
		    };
	 }
	 
	function autoCompletarConsultaSeguimiento(cantCarac, ruta){
		 $( "#txt_idProveedor0" ).autocomplete({
		      minLength: cantCarac,
		      search : function(event,ui){
		    	  var newUrl = ruta+"/dcto/nacc_dcto_plantillasAutocompletar.jsp?opcion=CONS_CEDULA&cedula=" + $("#txt_idProveedor0").val();
		          $(this).autocomplete("option","source",newUrl)
		      },
		      focus: function( event, ui ) {
		        $( "#txt_idProveedor0" ).val( ui.item.iden );
		        return false;
		      },
		      select: function( event, ui ) {
		        $( "#txt_idProveedor0" ).val( ui.item.iden );
		        $( "#txt_razonSocial0" ).val( ui.item.desc );
		        $( "#txt_p_idPersona0" ).val( ui.item.idPe );
		        return false;
		      }
		    })
		    .autocomplete( "instance" )._renderItem = function( ul, item ) {
		      return $( "<li>" )
		        .append( "<div><span class=\"cedProveedor\">" + item.iden + "</span><br><span class=\"razonSocProveedor\">" + item.desc + "</span></div>" )
		        .appendTo( ul );
		    };
	 }
	 