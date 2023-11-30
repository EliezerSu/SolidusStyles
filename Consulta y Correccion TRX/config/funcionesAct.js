//Archivo de funciones JavaScript (.js) Reusables.
var NUMERO_DE_PROVINCIAS = 24;

String.prototype.lPad = function (n,c) {var i; var a = this.split(''); for (i = 0; i < n - this.length; i++) {a.unshift (c)}; return a.join('')}

String.prototype.rPad = function (n,c) {var i; var a = this.split(''); for (i = 0; i < n - this.length; i++) {a.push (c)}; return a.join('')}

var appName=top.location.href.split("/")[3];

if(!this.$){
	script = document.createElement('script');
	script.src = "/"+appName+"/config/jquery/external/jquery/jquery.js"
	if(document.head) document.head.appendChild(script);
	else if(document.body) document.body.appendChild(script);	
}

/************************************************************************************************/
if(!document._oldGetElementById){
    document._oldGetElementById = document.getElementById;
    document.getElementById = function(elemIdOrName) {
        var result = document._oldGetElementById(elemIdOrName);
        if (! result) {
            var elems = document.getElementsByName(elemIdOrName); 
            if (elems && elems.length > 0) {
                result = elems[0];
            }
        }
    
        return result;
    };
}

/************************************************************************************************/
//elimina una fila de la tabla
  function eliminaFila(pni_fila){    
	if (pr_ni_cantidadR > 0) {
			pr_ni_arregloR= pr_ni_arregloR - 1;
      pr_ni_cantidadR = pr_ni_cantidadR - 1;   
			document.getElementById("FilaR"+pni_fila).outerText="";
		}
  };
// funci�n que se utiliza para restablecer la imagen original	
 function MM_swapImgRestore() { 
	  var i,x,a=document.MM_sr; for(i=0;a && i<a.length && (x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
	};
// funci�n que se utiliza para buscar un objeto (Imagen)
	function MM_findObj(n, d) { 
	  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	  if(!(x=d[n])&&d.all) 
		  x=d.getElementById(n); 
	  for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
	  if(!x && d.getElementById) x=d.getElementById(n); return x;
	};
// funci�n que se utiliza para intercambiar una imagen por otra
	function MM_swapImage() { 
	  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
	   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
	};

// funcion que modifica el frameset para que se vea frame para las b�squedas
function ayuda(ps_nombrePagina, ps_parametrosRetorno){
    var ps_parametros = ps_parametrosRetorno;
    var ps_valoresParametros = "";
    var idObjeto  = "";
    var ps_contenido = "";
    for (i=0;i<ps_parametros.toString().length;i++){
 		i = ps_parametros.toString().indexOf("@");
	    if (i != -1) {
			idObjeto             = ps_parametros.toString().substring(0,i);
      if (parent.fms_cabeceraCriterio.document.getElementById(idObjeto)) ps_contenido         = parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value;
      if (ps_contenido == "") ps_contenido = " ";
			ps_valoresParametros = ps_valoresParametros + ps_contenido +"@";
      ps_parametros        = ps_parametros.toString().substring(i+1,ps_parametros.toString().length);
			i                    = ps_parametros.toString().indexOf("@");
			if (i == -1){
				idObjeto         = ps_parametros.toString().substring(0,ps_parametros.toString().length);		
        if (parent.fms_cabeceraCriterio.document.getElementById(idObjeto)) ps_contenido         = parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value;
        if (ps_contenido == "") ps_contenido = " ";        
 			  ps_valoresParametros = ps_valoresParametros + ps_contenido +"@" ;
		    break;
			 }
       
       
		   }else{
		     idObjeto        = ps_parametros.toString();				 
         if (parent.fms_cabeceraCriterio.document.getElementById(idObjeto)) ps_contenido         = parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value;
         if (ps_contenido == "") ps_contenido = " ";        
 			   ps_valoresParametros = ps_valoresParametros + ps_contenido +"@" ;
				 break;
	     }// End if
	}// End for	  
  
  
  ps_valoresParametros = ps_valoresParametros.toString().substring(0,ps_valoresParametros.toString().length-1);

  for (pi_n=0;pi_n<ps_valoresParametros.length;pi_n++){
	     pi_plus=ps_valoresParametros.indexOf("+");
  	     if (pi_plus!=-1){
	         ps_valoresParametros = ps_valoresParametros.replace("+","PLUS");
	      }else{
			    pi_n = ps_valoresParametros.length + 1;
	     }
     }
    
    
    if (!parent.frames[1].name){
       if (parent.frames[2].name) return;
    }
    
    if (parent.frames[1].name=="fms_bodyCriterioDOWN" ){
         parent.frames[1].location="../busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros);	
     }else if (parent.frames[1].name=="fms_bodyCriterioDOWN1" ){        
           parent.frames[1].location="../busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros);	
     }else if (parent.frames[2].name=="fms_bodyCriterioDOWN" ){        
           parent.frames[2].location="../busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros);	
     }	 
  parent.document.getElementById("framePA").rows = "40%,*";
}


function ayudaDiv(ps_nombrePagina, ps_parametrosRetorno){
    var ps_parametros = ps_parametrosRetorno;
    var ps_valoresParametros = "";
    var idObjeto  = "";
    var ps_contenido = "";
    for (i=0;i<ps_parametros.toString().length;i++){
 		i = ps_parametros.toString().indexOf("@");
	    if (i != -1) {
			idObjeto             = ps_parametros.toString().substring(0,i);
      if (document.getElementById(idObjeto)) ps_contenido         = document.getElementById(idObjeto).value;
      if (ps_contenido == "") ps_contenido = " ";
			ps_valoresParametros = ps_valoresParametros + ps_contenido +"@";
      ps_parametros        = ps_parametros.toString().substring(i+1,ps_parametros.toString().length);
			i                    = ps_parametros.toString().indexOf("@");
			if (i == -1){
				idObjeto         = ps_parametros.toString().substring(0,ps_parametros.toString().length);		
        if (document.getElementById(idObjeto)) ps_contenido         = document.getElementById(idObjeto).value;
        if (ps_contenido == "") ps_contenido = " ";        
 			  ps_valoresParametros = ps_valoresParametros + ps_contenido +"@" ;
		    break;
			 }
       
       
		   }else{
		     idObjeto        = ps_parametros.toString();				 
         if (document.getElementById(idObjeto)) ps_contenido         = document.getElementById(idObjeto).value;
         if (ps_contenido == "") ps_contenido = " ";        
 			   ps_valoresParametros = ps_valoresParametros + ps_contenido +"@" ;
				 break;
	     }// End if
	}// End for	  
  
  
  ps_valoresParametros = ps_valoresParametros.toString().substring(0,ps_valoresParametros.toString().length-1);

  for (pi_n=0;pi_n<ps_valoresParametros.length;pi_n++){
	     pi_plus=ps_valoresParametros.indexOf("+");
  	     if (pi_plus!=-1){
	         ps_valoresParametros = ps_valoresParametros.replace("+","PLUS");
	      }else{
			    pi_n = ps_valoresParametros.length + 1;
	     }
     }
    
    if (!document.getElementById("framePA").children[0].id){
//       if (document.getElementById("framePA").children[1].id) 
	if (document.getElementById("framePA").children[1].id=="oculto" ){
	$( document ).ready(function() {
	$("#"+document.getElementById("framePA").children[1].id).load("/nAccounting/busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros));       	
    });
	if (document.getElementById("oculto")){
		document.getElementById("oculto").style.height = "275px";
		document.getElementById("oculto").style.overflow = "auto";
		document.getElementById("oculto").style.position = "relative";
		document.getElementById("oculto").style.background = "#dadada";
		document.getElementById("fms_bodyCriterioDOWN").style.height = "60px";
		
	 }
    	return;}
	}
    
    if (document.getElementById("framePA_Det")){
	$( document ).ready(function() {
	$("#"+document.getElementById("framePA_Det").children[1].id).load("/nAccounting/busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros));
	});     
	} else if (document.getElementById("framePA").children[0].id=="fms_bodyCriterioDOWN" ){
	$( document ).ready(function() {
	$("#"+document.getElementById("framePA").children[0].id).load("/nAccounting/busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros));
	});     
	}else if (document.getElementById("framePA").children[1].id=="fms_bodyCriterioDOWN1" ){
	$( document ).ready(function() {
	$("#"+document.getElementById("framePA").children[1].id).load("/nAccounting/busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros));       	
    }); 
	}else if (document.getElementById("framePA").children[1].id=="fms_bodyCriterioDOWN" ){
	$( document ).ready(function() {
	$("#"+document.getElementById("framePA").children[1].id).load("/nAccounting/busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros));    
 	});    
	 }
	 else if (document.getElementById("framePA").children[1].id=="fms_cabeceraDetalle" ){
	$( document ).ready(function() {
	$("#"+document.getElementById("framePA").children[1].id).load("/nAccounting/busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros));    
 	});    
	 }	 

	
	    if (document.getElementById("frameAA") && document.getElementById("framePA")){
		document.getElementById("fms_bodyCriterioUP").style.height = "0";
		document.getElementById("fms_bodyCriterioDOWN").style.height = "252px";
		document.getElementById("fms_bodyCriterioDOWN").style.overflow = "auto";
		document.getElementById("fms_bodyCriterioDOWN").style.position = "relative";
		document.getElementById("fms_bodyCriterioDOWN").style.background = "#dadada";
	 }
	 	else if (document.getElementById("fms_diarioDet") && document.getElementById("fms_docDet") && document.getElementById("fms_docDetOculto") && document.getElementById("fms_docDetOcultoMatricial")){
		document.getElementById("fms_diarioDet").style.overflow = "auto";
		document.getElementById("fms_docDet").style.overflow = "auto";
		document.getElementById("fms_docDet").style.position = "relative";
		document.getElementById("fms_docDet").style.background = "#dadada";
	 }
		else if (document.getElementById("fms_bodyCriterioUP") && document.getElementById("fms_bodyCriterioDOWN") && document.getElementById("fms_bodyCriterioFoot")){
		document.getElementById("fms_bodyCriterioUP").style.height = "45%";
		document.getElementById("fms_bodyCriterioUP").style.overflow = "auto";
		document.getElementById("fms_bodyCriterioDOWN").style.height = "57%";
		document.getElementById("fms_bodyCriterioDOWN").style.position = "relative";
		document.getElementById("fms_bodyCriterioDOWN").style.background = "#dadada";
		document.getElementById("fms_bodyCriterioDOWN").style.overflow = "auto";
	 }	
	 	else if (document.getElementById("fms_bodyCriterioUPDivs")&& document.getElementById("fms_bodyCriterioDOWNDivs")){
		$("#fms_bodyCriterioDOWNDivs").load("./busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros));       	
		document.getElementById("fms_bodyCriterioUPDivs").style.height = "28%";
		document.getElementById("fms_bodyCriterioUPDivs").style.overflow = "auto";
		document.getElementById("fms_bodyCriterioDOWNDivs").style.height = "77%";
		document.getElementById("fms_bodyCriterioDOWNDivs").style.position = "relative";
		document.getElementById("fms_bodyCriterioDOWNDivs").style.background = "#dadada";
		document.getElementById("fms_bodyCriterioDOWNDivs").style.overflow = "auto";
	 }
	    else if (document.getElementById("fms_bodyCriterioUP")){
		document.getElementById("fms_bodyCriterioUP").style.height = "44%";
		document.getElementById("fms_bodyCriterioUP").style.overflow = "auto";
		document.getElementById("fms_bodyCriterioDOWN").style.height = "56%";
		document.getElementById("fms_bodyCriterioDOWN").style.position = "relative";
		document.getElementById("fms_bodyCriterioDOWN").style.background = "#dadada";
		document.getElementById("fms_bodyCriterioDOWN").style.overflow = "auto";
	 }	
	 	
	 
	 	else if (document.getElementById("fms_cabeceraDetalle")){
		document.getElementById("fms_cabeceraCriterio").style.height = "44%";
		document.getElementById("fms_cabeceraCriterio").style.overflow = "auto";
		document.getElementById("fms_cabeceraDetalle").style.height = "56%";
		document.getElementById("fms_cabeceraDetalle").style.position = "relative";
		document.getElementById("fms_cabeceraDetalle").style.background = "#dadada";
		document.getElementById("fms_cabeceraDetalle").style.overflow = "auto";
	 }
		else if (document.getElementById("fms_cabeceraCriterio") && document.getElementById("fms_bodyCriterioDOWN")){
		document.getElementById("fms_cabeceraCriterio").style.height = "41%";
		document.getElementById("fms_cabeceraCriterio").style.overflow = "auto";
		document.getElementById("fms_bodyCriterioDOWN").style.height = "60%";
		document.getElementById("fms_bodyCriterioDOWN").style.overflow = "auto";
		document.getElementById("fms_bodyCriterioDOWN").style.position = "relative";
		document.getElementById("fms_bodyCriterioDOWN").style.background = "#dadada";
		document.getElementById("fms_bodyCriterioDOWN").style.border = "1px solid";
	 } 
		else if (document.getElementById("fms_bodyCriterioDOWN1")){       
		document.getElementById("fms_cabeceraCriterio").style.height = "51%";
		document.getElementById("fms_cabeceraCriterio").style.overflow = "auto";
		document.getElementById("fms_bodyCriterioDOWN1").style.height = "83%";
		document.getElementById("fms_bodyCriterioDOWN1").style.overflow = "auto";
		document.getElementById("fms_bodyCriterioDOWN1").style.position = "relative";
		document.getElementById("fms_bodyCriterioDOWN1").style.background = "#dadada";
        }

		if (document.getElementById("fmsDetalleEntrega")){
		document.getElementById("fms_cabeceraCriterio").style.height = "54%";
		document.getElementById("fmsDetalleEntrega").style.height = "174px";
		document.getElementById("fmsDetalleEntrega").style.overflow = "scroll";
		document.getElementById("fms_bodyCriterioDOWN").style.height = "42%";
		document.getElementById("fms_bodyCriterioDOWN").style.overflow = "auto";
		document.getElementById("fms_bodyCriterioDOWN").style.background = "#dadada";
		document.getElementById("fms_bodyCriterioDOWN").style.position = "absolute";
		document.getElementById("fms_bodyCriterioDOWN").style.width = "98.97%";
	 }

}

// funcion que cierra los frames de las b�squedas
function cierraAyuda(ps_valoresParametros){
  var idObjeto  = "";
	var valObjeto = "";  
  var idFocus   = ps_parametros.toString().substring(0,ps_parametros.toString().indexOf("@"));	
//  alert(ps_valoresParametros);
    for (i=0;i<ps_parametros.toString().length;i++){
 		i = ps_parametros.toString().indexOf("@");
		k = ps_valoresParametros.toString().indexOf("@");
	    if (i != -1) {
			idObjeto             = ps_parametros.toString().substring(0,i);			
			valObjeto            = unescape(ps_valoresParametros.toString().substring(0,k));     
			/* Reemplazo el %22 por el car�cter '"' */
			for (m=0;m<valObjeto.length;m++){
				o=valObjeto.indexOf("%22");
					if (o!=-1){
						valObjeto = valObjeto.replace("%22",'"');
					}else{
						m = valObjeto.length + 1;
					}
			}        
			/* Termina el reemplazo */
          
			if(parent.fms_cabeceraCriterio!=null){
				if (parent.fms_cabeceraCriterio.document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
					parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value = valObjeto;
				}		
			}else{
				if (parent.statusFrame.document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
					parent.statusFrame.document.getElementById(idObjeto).value = valObjeto;
				}		
			}		 
			ps_parametros        = ps_parametros.toString().substring(i+1,ps_parametros.toString().length);
			i                    = ps_parametros.toString().indexOf("@");
			ps_valoresParametros = ps_valoresParametros.toString().substring(k+1,ps_valoresParametros.toString().length);
			k                    = ps_valoresParametros.toString().indexOf("@");
			if (i == -1){
				idObjeto         = ps_parametros.toString().substring(0,ps_parametros.toString().length);			
				valObjeto        = unescape(ps_valoresParametros.toString().substring(0,ps_valoresParametros.toString().length));
				/* Reemplazo el %22 por el car�cter '"' */
				for (m=0;m<valObjeto.length;m++){
					o=valObjeto.indexOf("%22");
					if (o!=-1){
						valObjeto = valObjeto.replace("%22",'"');
					}else{
						m = valObjeto.length + 1;
					}
				}        
				/* Termina el reemplazo */
				if(parent.fms_cabeceraCriterio!=null){
					if (parent.fms_cabeceraCriterio.document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
						parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value = valObjeto;
					}	
				}else{
					if (parent.statusFrame.document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
						parent.statusFrame.document.getElementById(idObjeto).value = valObjeto;
					}
				}
				
				break;
			}
		   	}else{
		         idObjeto        = ps_parametros.toString();
				 valObjeto 		 = unescape(ps_valoresParametros.toString());

				 /* Reemplazo el %22 por el car�cter '"' */
				 for (m=0;m<valObjeto.length;m++){
					 o=valObjeto.indexOf("%22");
					 if (o!=-1){
						 valObjeto = valObjeto.replace("%22",'"');
					 }else{
						 m = valObjeto.length + 1;
					 }
				 }        
				 /* Termina el reemplazo */
				 if(parent.fms_cabeceraCriterio!=null){
					 if (parent.fms_cabeceraCriterio.document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
						 parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value = valObjeto;
					 }					 
				 }else{
					 if (parent.statusFrame.document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
						 parent.statusFrame.document.getElementById(idObjeto).value = valObjeto;
					 }
				 }
				 
				 break;
		   	}// End if
    	}// End for	
    if(parent.fms_cabeceraCriterio!=null){
    	if (parent.fms_cabeceraCriterio.document.getElementById(idFocus).type != "hidden"){
        	parent.fms_cabeceraCriterio.document.getElementById(idFocus).focus();
        }
        if (parent.fms_cabeceraCriterio.document.getElementById(idFocus).type != "hidden"){
        	parent.fms_cabeceraCriterio.document.getElementById(idFocus).focus();
        }    	
    }else{
    	if (parent.statusFrame.document.getElementById(idFocus).type != "hidden"){
        	parent.statusFrame.document.getElementById(idFocus).focus();
        }
        if (parent.statusFrame.document.getElementById(idFocus).type != "hidden"){
        	parent.statusFrame.document.getElementById(idFocus).focus();
        }
    }
    
    if (parent.frames[1].name=="ciudadFrame" ){
    	parent.frames[1].location="../gene/nscc_gene_blank.jsp";
    	parent.document.getElementById("statusFrame").rows = "100%,*";
    	parent.document.getElementById("divCiudad").style.display="none";
    }else{
        if (parent.frames[1].name=="fms_bodyCriterioDOWN" ){
        	parent.frames[1].location="../gene/nscc_gene_blank.jsp";	
        }else if (parent.frames[1].name=="fms_bodyCriterioDOWN1" ){
        	parent.frames[1].location="../gene/nscc_gene_blank.jsp";	 
        }else if (parent.frames[2].name=="fms_bodyCriterioDOWN" ){        
        	parent.frames[2].location="../gene/nscc_gene_blank.jsp";	
        }
    		parent.document.getElementById("framePA").rows = "100%,*";    
		// se añadio para mostrar el listado de tipos de comprobantes de envio y recepcion de archivos de diarios contables
    	if(parent.document.getElementById("frameAA")){ 
			parent.document.getElementById("frameAA").rows = "100%,0%,0%";   
		}	  	
    }
}


function cierraAyudaDiv(ps_valoresParametros){
  var idObjeto  = "";
	var valObjeto = "";  
  var idFocus   = ps_parametros.toString().substring(0,ps_parametros.toString().indexOf("@"));
//  alert(ps_valoresParametros);
    for (i=0;i<ps_parametros.toString().length;i++){
 		i = ps_parametros.toString().indexOf("@");
		k = ps_valoresParametros.toString().indexOf("@");
	    if (i != -1) {
			idObjeto             = ps_parametros.toString().substring(0,i);			
			valObjeto            = unescape(ps_valoresParametros.toString().substring(0,k));     
			/* Reemplazo el %22 por el car�cter '"' */
			for (m=0;m<valObjeto.length;m++){
				o=valObjeto.indexOf("%22");
					if (o!=-1){
						valObjeto = valObjeto.replace("%22",'"');
					}else{
						m = valObjeto.length + 1;
					}
			}        
			/* Termina el reemplazo */

			if(document.getElementById("fms_cabeceraCriterio")!=null){
				if (document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
					document.getElementById(idObjeto).value = valObjeto;
				}		
			}else{
				if (document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
					document.getElementById(idObjeto).value = valObjeto;
				}		
			}		 
			ps_parametros        = ps_parametros.toString().substring(i+1,ps_parametros.toString().length);
			i                    = ps_parametros.toString().indexOf("@");
			ps_valoresParametros = ps_valoresParametros.toString().substring(k+1,ps_valoresParametros.toString().length);
			k                    = ps_valoresParametros.toString().indexOf("@");
			if (i == -1){
				idObjeto         = ps_parametros.toString().substring(0,ps_parametros.toString().length);			
				valObjeto        = unescape(ps_valoresParametros.toString().substring(0,ps_valoresParametros.toString().length));
				/* Reemplazo el %22 por el car�cter '"' */
				for (m=0;m<valObjeto.length;m++){
					o=valObjeto.indexOf("%22");
					if (o!=-1){
						valObjeto = valObjeto.replace("%22",'"');
					}else{
						m = valObjeto.length + 1;
					}
				}        
				/* Termina el reemplazo */
				if(document.getElementById("fms_cabeceraCriterio")!=null){
					if (document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
						document.getElementById(idObjeto).value = valObjeto;
					}	
				}else{
					if (document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
						document.getElementById(idObjeto).value = valObjeto;
					}
				}
				
				break;
			}
		   	}else{
		         idObjeto        = ps_parametros.toString();
				 valObjeto 		 = unescape(ps_valoresParametros.toString());

				 /* Reemplazo el %22 por el car�cter '"' */
				 for (m=0;m<valObjeto.length;m++){
					 o=valObjeto.indexOf("%22");
					 if (o!=-1){
						 valObjeto = valObjeto.replace("%22",'"');
					 }else{
						 m = valObjeto.length + 1;
					 }
				 }        
				 /* Termina el reemplazo */
				 if(document.getElementById("fms_cabeceraCriterio")!=null){
					 if (document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
						 document.getElementById(idObjeto).value = valObjeto;
					 }					 
				 }else{
					 if (document.getElementById(idObjeto)){	// VERIFICO EXISTENCIA DEL CAMPO
						 document.getElementById(idObjeto).value = valObjeto;
					 }
				 }
				 
				 break;
		   	}// End if
    	}// End for	
    if(document.getElementById("fms_cabeceraCriterioDivs")!=null){
    	if (document.getElementById(idFocus).type != "hidden"){
        	document.getElementById(idFocus).focus();
        }
        if (document.getElementById(idFocus).type != "hidden"){
        	document.getElementById(idFocus).focus();
        }    	
    }else if(document.getElementById("fms_cabeceraCriterio")!=null){
    	if (document.getElementById(idFocus).type != "hidden"){
        	document.getElementById(idFocus).focus();
        }
        if (document.getElementById(idFocus).type != "hidden"){
        	document.getElementById(idFocus).focus();
        }    	
    }else{
    	if (document.getElementById(idFocus).type != "hidden"){
        	document.getElementById(idFocus).focus();
        }
        if (document.getElementById(idFocus).type != "hidden"){
        	document.getElementById(idFocus).focus();
        }
    }
    if (parent.frames[1].name=="ciudadFrame" ){
    	parent.frames[1].location="../gene/nscc_gene_blank.jsp";
    	parent.document.getElementById("statusFrame").rows = "100%,*";
    	parent.document.getElementById("divCiudad").style.display="none";
    }else{
        if (document.getElementById("framePA").children[0].id=="fms_bodyCriterioDOWN" ){
			$( document ).ready(function() {
				$("#"+document.getElementById("framePA").children[0].id).html("");
			}); 
        }else if (document.getElementById("framePA_Det")){
			$( document ).ready(function() {
			$("#"+document.getElementById("framePA_Det").children[1].id).html("");
			});     
		}else if (document.getElementById("fms_cabeceraCriterioS")){
			$( document ).ready(function() {
				$(document.getElementById("fms_cabeceraCriterioS")).parent().children().eq(1).html("");
			}); 
			 
        }else if (document.getElementById("fms_cabeceraCriterioIncluye")){
			$( document ).ready(function() {
				$("#framePA #fms_bodyCriterioDOWN").html("");
			}); 	 
        }else if (document.getElementById("framePA").children[1].id=="fms_cabeceraDetalle" ){        
			$( document ).ready(function() {
				$("#"+document.getElementById("framePA").children[1].id).html("");
			}); 
		}else if (document.getElementById("framePA").children[1].id=="fms_bodyCriterioDOWN1" ){
			$( document ).ready(function() {
				$("#"+document.getElementById("framePA").children[1].id).html("");
			}); 	 
        }else if (document.getElementById("fms_bodyCriterioDOWN_combLice")){
			$( document ).ready(function() {
				$("#fms_bodyCriterioDOWN_combLice #fms_bodyCriterioDOWN").html("");
			}); 
		}else if (document.getElementById("framePA_BA")){        
			$( document ).ready(function() {
				$("#"+document.getElementById("framePA_BA").children[1].id).html("");
			}); 
        }else if (document.getElementById("framePA").children[1].id=="fms_bodyCriterioDOWN" ){        
			$( document ).ready(function() {
				$("#"+document.getElementById("framePA").children[1].id).html("");
			}); 
        }else if (document.getElementById("framePA").children[1].id=="oculto" ){        
			$( document ).ready(function() {
				$("#"+document.getElementById("framePA").children[1].id).html("");
			}); 
        }

		if (document.getElementById("cabeceraCombinacion")&& document.getElementById("bodyCombinacion")){
			document.getElementById("cabeceraCombinacion").style.height = "100%";
			document.getElementById("cabeceraCombinacion").style.overflow = "auto";
			document.getElementById("bodyCombinacion").style.height = "0%";
			$("#bodyCombinacion").html("");		
					
		}
		else if(document.getElementById("framePATrans")){ 
			document.getElementById("fms_cabeceraCriterio").style.height = "100%"; 
			document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
			document.getElementById("fms_bodyCriterioDOWN").style.position = "fixed";	
	
			}
		else if(document.getElementById("fms_cabeceraCriterio_Delega")&& document.getElementById("fms_bodyCriterioDOWN_Delega")&& document.getElementById("oculto_Delega")){ 
			document.getElementById("fms_cabeceraCriterio_Delega").style.height = "100%";
			document.getElementById("fms_cabeceraCriterio_Delega").style.overflow = "inherit";
			document.getElementById("fms_bodyCriterioDOWN_Delega").style.height = "0%";
			$(document.getElementById("fms_bodyCriterioDOWN_Delega")).html("");
			}
	    	else if(document.getElementById("frameAA")){ 
				document.getElementById("fms_cabeceraCriterio").style.height = "100%";
				document.getElementById("fms_cabeceraCriterio").style.overflow = "auto";
				document.getElementById("framePA").style.height = "0%";	
				document.getElementById("fms_bodyCriterioUP").style.height = "0%";	
				document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
				document.getElementById("fms_bodyCriterioDOWN").style.background = "#ffffff";	
	
			}else if(document.getElementById("frameCO")){
				$("#frameCO #fms_cabeceraCriterio").css("height", "100%");
				$("#frameCO #fms_cabeceraCriterio").css("overflow", "auto");
				$("#frameCO #fms_bodyCriterioDOWN").css("height", "0%");
				$("#frameCO #fms_bodyCriterioDOWN").html("");
	 		}
			else if (document.getElementById("fms_diarioDet") && document.getElementById("fms_docDet") && document.getElementById("fms_docDetOculto") && document.getElementById("fms_docDetOcultoMatricial")){
				document.getElementById("fms_diarioDet").style.overflow = "auto";
				document.getElementById("fms_docDet").style.overflow = "inherit";
				document.getElementById("fms_docDet").style.background = "white";
			 }
			else if(document.getElementById("fms_cabeceraDetalle")){ 
					document.getElementById("fms_cabeceraCriterio").style.height = "100%"; 
					document.getElementById("fms_cabeceraDetalle").style.height = "0%";
					document.getElementById("fms_cabeceraDetalle").style.position = "fixed";	
			}
						
		else if ($("#fms_bodyCriterioDOWN_combLice #fms_cabeceraCriterio").get(0)){
				$("#fms_bodyCriterioDOWN_combLice #fms_cabeceraCriterio").get(0).style.height = "100%";
				$("#fms_bodyCriterioDOWN_combLice #fms_cabeceraCriterio").get(0).style.overflow = "inherit";
				$("#fms_bodyCriterioDOWN_combLice #fms_bodyCriterioDOWN").get(0).style.height = "0%";
				
			}
		
		else if (document.getElementById("fms_bodyCriterioUPDivs")&& document.getElementById("fms_bodyCriterioDOWNDivs")){
			document.getElementById("fms_bodyCriterioUPDivs").style.height = "100%";
			document.getElementById("fms_bodyCriterioUPDivs").style.visibility = "";
			document.getElementById("fms_bodyCriterioUPDivs").style.overflow = "inherit";
			document.getElementById("fms_bodyCriterioDOWNDivs").style.height = "0%";
			$("#fms_bodyCriterioDOWNDivs").html("");
		}
		
		else if (document.getElementById("fms_cabeceraCriterio")&& document.getElementById("fms_bodyCriterioDOWN")&& document.getElementById("fms_bodyCriterioUP")){
				document.getElementById("fms_bodyCriterioUP").style.height = "100%";
				document.getElementById("fms_bodyCriterioUP").style.overflow = "inherit";
				document.getElementById("fms_bodyCriterioDOWN").style.height = "0";
				
		}
			
		else if (document.getElementById("fms_cabeceraCriterioS") && document.getElementById("oculto")){	
			document.getElementById("fms_cabeceraCriterioS").style.height = "100%"; 
			document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
			document.getElementById("fms_bodyCriterioDOWN").style.position = "fixed";
			$(document.getElementById("fms_bodyCriterioDOWN")).html("");
			}

		else if (document.getElementById("fms_cabeceraCriterioIncluye")&& document.getElementById("fms_bodyCriterioDOWN")&& document.getElementById("oculto")){
			document.getElementById("fms_cabeceraCriterioIncluye").style.height = "100%"; 
			document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
			}
			
			
		else if (document.getElementById("fms_cabeceraCriterio")&& document.getElementById("fms_bodyCriterioDOWN")&& document.getElementById("oculto")){
				document.getElementById("fms_cabeceraCriterio").style.height = "100%"; 
				document.getElementById("fms_cabeceraCriterio").style.overflow = "visible"; 
			document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
			document.getElementById("fms_bodyCriterioDOWN").style.position = "fixed";
			$("#fms_bodyCriterioDOWN").html("");
			}
						
		else if (document.getElementById("fms_cabeceraCriterio") && document.getElementById("fms_bodyCriterioDOWN")){        
			document.getElementById("fms_cabeceraCriterio").style.height = "100%";
			document.getElementById("fms_cabeceraCriterio").style.overflow = "auto"; 
			document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
			document.getElementById("fms_bodyCriterioDOWN").style.background = "#ffffff";
        }

		else if (document.getElementById("fms_bodyCriterioUP")){        
			document.getElementById("fms_bodyCriterioUP").style.height = "100%";
			document.getElementById("fms_bodyCriterioUP").style.overflow = "auto"; 
			document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
        }

		else if (document.getElementById("fms_bodyCriterioDOWN1")){        
			document.getElementById("fms_cabeceraCriterio").style.height = "100%";
			document.getElementById("fms_cabeceraCriterio").style.overflow = "inherit"; 
			document.getElementById("fms_bodyCriterioDOWN1").style.height = "0%";
        }
		
		else if (document.getElementById("fms_bodyCriterioDet")){
			document.getElementById("fms_cabeceraCriterio").style.height = "100%";
			document.getElementById("fms_cabeceraCriterio").style.overflow = "auto";
			document.getElementById("fms_bodyCriterioDet").style.height = "0%";			
		}

		if(document.getElementById("fmsDetalleEntrega")){ 
			document.getElementById("fmsDetalleEntrega").style.height = "449px";
			document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";		
		}
		
	 
		// se añadio para mostrar el listado de tipos de comprobantes de envio y recepcion de archivos de diarios contables
	  	
    }
}


//funci�n que abre un frame de Ayuda
function ayudaDocumento(ps_nombrePagina, ps_parametrosRetorno,ps_callOrigen,ps_task){
    var ps_parametros = ps_parametrosRetorno;
    var ps_valoresParametros = "";
    var idObjeto  = "";
    var ps_contenido = "";
    
	    var existeValor = false;
		
	    for (i=0;i<ps_parametros.toString().length;i++){
	 		i = ps_parametros.toString().indexOf("@");
		    if (i != -1) {
				idObjeto             = ps_parametros.toString().substring(0,i); 
	      ps_contenido         = parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value;
	      if (ps_contenido == ""){ 
		  	ps_contenido = " ";
		  }else{
		  	//alert(ps_contenido);
			//if(ps_nombrePagina == 'nacc_busq_proveedorAyuda_detalle'){
				for(i_conten=0; i_conten<ps_contenido.length; i_conten++){
					var caracter = ps_contenido.substr(i_conten,1);
					if(caracter!="%"){
						existeValor = true;
					}
				}
			//}
		  }
				ps_valoresParametros = ps_valoresParametros + ps_contenido +"@";
	      ps_parametros        = ps_parametros.toString().substring(i+1,ps_parametros.toString().length);
				i                    = ps_parametros.toString().indexOf("@");
				if (i == -1){
					idObjeto         = ps_parametros.toString().substring(0,ps_parametros.toString().length);		
	        ps_contenido         = parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value;
	        if (ps_contenido == "") ps_contenido = " ";        
	 			  ps_valoresParametros = ps_valoresParametros + ps_contenido +"@" ;
			    break;
				 }
			   }else{
			     idObjeto        = ps_parametros.toString();				 
	         ps_contenido         = parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value;
	         if (ps_contenido == "") ps_contenido = " ";        
	 			   ps_valoresParametros = ps_valoresParametros + ps_contenido +"@" ;
					 break;
		     }// End if
		     
		}// End for	  
	  ps_valoresParametros = ps_valoresParametros.toString().substring(0,ps_valoresParametros.toString().length-1);
	
	  for (pi_n=0;pi_n<ps_valoresParametros.length;pi_n++){
		     pi_plus=ps_valoresParametros.indexOf("+");
	  	     if (pi_plus!=-1){
		         ps_valoresParametros = ps_valoresParametros.replace("+","PLUS");
		      }else{
				    pi_n = ps_valoresParametros.length + 1;
		     }
	     }
		 if(ps_nombrePagina != 'nacc_busq_proveedorAyuda_detalle.jsp'){
		 	existeValor = true;	
		 }
		if(existeValor){
			parent.fms_bodyCriterioDOWN.location="../../busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros)+"&ps_task="+ps_task;	
	  		parent.document.getElementById("framePA").rows = "40%,*,0%";
	    }else{
			if(ps_nombrePagina == 'nacc_busq_proveedorAyuda_detalle.jsp')
			alert(pg_msgCriterioProveedor);
		}
}

//funci�n que cierra el frame de Ayuda
function cierraAyudaDocumentoDiv(ps_valoresParametros,ps_task){ 
  var docSec    = "";
  var nroDiario = "";
  var idObjeto  = "";
	var valObjeto = "";

  var name      =  "";
  
 // alert(ps_task);
  
  //alert(ps_valoresParametros+"-"+ps_parametros);
  var idFocus   = ps_parametros.toString().substring(0,ps_parametros.toString().indexOf("@"));	
    for (i=0;i<ps_parametros.toString().length;i++){
 		i = ps_parametros.toString().indexOf("@");
		k = ps_valoresParametros.toString().indexOf("@");
	    if (i != -1) {
			idObjeto             = ps_parametros.toString().substring(0,i);			
			valObjeto            = unescape(ps_valoresParametros.toString().substring(0,k));     
    /* Reemplazo el %22 por el car�cter '"' */
     for (m=0;m<valObjeto.length;m++){
	     o=valObjeto.indexOf("%22");
  	     if (o!=-1){
	         valObjeto = valObjeto.replace("%22",'"');
	      }else{
			    m = valObjeto.length + 1;
	     }
     }       
	
	 document.getElementById(idObjeto).value = valObjeto;

      // no lo USO ACTUALMENTE
      // concateno la identificaci�n del documento secundario
      if (idObjeto == "idNRO_DOCUMENTO_S_TCABDOC1") nroDiario = valObjeto;
      if (idObjeto == "idDESCRIPCION_S_TCABDOC1") docSec = valObjeto;
      ///////////////////////////////////////////////////////
      
            ps_parametros        = ps_parametros.toString().substring(i+1,ps_parametros.toString().length);
			i                    = ps_parametros.toString().indexOf("@");
			ps_valoresParametros = ps_valoresParametros.toString().substring(k+1,ps_valoresParametros.toString().length);
			k                    = ps_valoresParametros.toString().indexOf("@");
			if (i == -1){
				idObjeto         = ps_parametros.toString().substring(0,ps_parametros.toString().length);			
				valObjeto        = unescape(ps_valoresParametros.toString().substring(0,ps_valoresParametros.toString().length));
    /* Reemplazo el %22 por el car�cter '"' */
     for (m=0;m<valObjeto.length;m++){
	     o=valObjeto.indexOf("%22");
  	     if (o!=-1){
	         valObjeto = valObjeto.replace("%22",'"');
	      }else{
			    m = valObjeto.length + 1;
	     }
     }        	
     			if(idObjeto == "actividadProveedor" && valObjeto == "NN"){
     				valObjeto = pg_mjeProveedorSinActividad;
     			}     				
				document.getElementById(idObjeto).value = valObjeto;
      // concateno la identificaci�n del documento secundario
      if (idObjeto == "idNRO_DOCUMENTO_S_TCABDOC1") nroDiario = valObjeto;      
      if (idObjeto == "idDESCRIPCION_S_TCABDOC1") docSec = valObjeto;
      ///////////////////////////////////////////////////////
			    break;
			 }
		   }else{
		         idObjeto        = ps_parametros.toString();
				 valObjeto 		 = unescape(ps_valoresParametros.toString());
    /* Reemplazo el %22 por el car�cter '"' */
     for (m=0;m<valObjeto.length;m++){
	     o=valObjeto.indexOf("%22");
  	     if (o!=-1){
	         valObjeto = valObjeto.replace("%22",'"');
	      }else{
			    m = valObjeto.length + 1;
	     }
     }        
     /* Termina el reemplazo */
 				 document.getElementById(idObjeto).value = valObjeto;
         
      // concateno la identificaci�n del documento secundario
      if (idObjeto == "idNRO_DOCUMENTO_S_TCABDOC1") nroDiario = valObjeto;            
      if (idObjeto == "idDESCRIPCION_S_TCABDOC1") docSec = valObjeto;
      ///////////////////////////////////////////////////////
				 break;
	     }// End if
	}// End for	

     // Displayo la identificacion de documento secundario
     if (document.getElementById("documentAttach")){
         if (nroDiario != "") {           
            document.getElementById("tituloDocSec").style.display = "";
            document.getElementById("lbldocumentAttach").style.display = "";
            document.getElementById("documentAttach").style.display = "";
            document.getElementById("documentAttach").innerHTML = docSec;
            document.getElementById("lblnroDiarioAttach").style.display = "";
            document.getElementById("nroDiarioAttach").style.display = "";
            document.getElementById("nroDiarioAttach").innerHTML = nroDiario;
         }
     }     

	$("#fms_bodyCriterioDOWN").html(""); 
	if(document.getElementById("frameCO")){
			$("#frameCO #fms_cabeceraCriterio").css("height", "100%");
			$("#frameCO #fms_cabeceraCriterio").css("overflow", "auto");
			$("#frameCO #fms_bodyCriterioDOWN").css("height", "0%");
			$("#frameCO #fms_bodyCriterioDOWN").html("");
	 }
	else if(document.getElementById("framePA")){
       document.getElementById("fms_cabeceraCriterio").style.height = "100%";
	   document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
	   document.getElementById("oculto").style.height = "0%";
	}
	
	if(document.getElementById("dv_bodyCriterioDOWN")){
		document.getElementById("dv_bodyCriterioDOWN").style.display="none";
	}
}

function cierraAyudaDocumento(ps_valoresParametros,ps_task){ 
  var docSec    = "";
  var nroDiario = "";
  var idObjeto  = "";
	var valObjeto = "";

  var name      =  "";
  
 // alert(ps_task);
  
  //alert(ps_valoresParametros+"-"+ps_parametros);
  var idFocus   = ps_parametros.toString().substring(0,ps_parametros.toString().indexOf("@"));	
    for (i=0;i<ps_parametros.toString().length;i++){
 		i = ps_parametros.toString().indexOf("@");
		k = ps_valoresParametros.toString().indexOf("@");
	    if (i != -1) {
			idObjeto             = ps_parametros.toString().substring(0,i);			
			valObjeto            = unescape(ps_valoresParametros.toString().substring(0,k));     
    /* Reemplazo el %22 por el car�cter '"' */
     for (m=0;m<valObjeto.length;m++){
	     o=valObjeto.indexOf("%22");
  	     if (o!=-1){
	         valObjeto = valObjeto.replace("%22",'"');
	      }else{
			    m = valObjeto.length + 1;
	     }
     }       
	
	 getElementByIdOrName(fms_cabeceraCriterio, idObjeto).value = valObjeto;

      // no lo USO ACTUALMENTE
      // concateno la identificaci�n del documento secundario
      if (idObjeto == "idNRO_DOCUMENTO_S_TCABDOC1") nroDiario = valObjeto;
      if (idObjeto == "idDESCRIPCION_S_TCABDOC1") docSec = valObjeto;
      ///////////////////////////////////////////////////////
      
            ps_parametros        = ps_parametros.toString().substring(i+1,ps_parametros.toString().length);
			i                    = ps_parametros.toString().indexOf("@");
			ps_valoresParametros = ps_valoresParametros.toString().substring(k+1,ps_valoresParametros.toString().length);
			k                    = ps_valoresParametros.toString().indexOf("@");
			if (i == -1){
				idObjeto         = ps_parametros.toString().substring(0,ps_parametros.toString().length);			
				valObjeto        = unescape(ps_valoresParametros.toString().substring(0,ps_valoresParametros.toString().length));
    /* Reemplazo el %22 por el car�cter '"' */
     for (m=0;m<valObjeto.length;m++){
	     o=valObjeto.indexOf("%22");
  	     if (o!=-1){
	         valObjeto = valObjeto.replace("%22",'"');
	      }else{
			    m = valObjeto.length + 1;
	     }
     }        	
     			if(idObjeto == "actividadProveedor" && valObjeto == "NN"){
     				valObjeto = pg_mjeProveedorSinActividad;
     			}     				
				parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value = valObjeto;
      // concateno la identificaci�n del documento secundario
      if (idObjeto == "idNRO_DOCUMENTO_S_TCABDOC1") nroDiario = valObjeto;      
      if (idObjeto == "idDESCRIPCION_S_TCABDOC1") docSec = valObjeto;
      ///////////////////////////////////////////////////////
			    break;
			 }
		   }else{
		         idObjeto        = ps_parametros.toString();
				 valObjeto 		 = unescape(ps_valoresParametros.toString());
    /* Reemplazo el %22 por el car�cter '"' */
     for (m=0;m<valObjeto.length;m++){
	     o=valObjeto.indexOf("%22");
  	     if (o!=-1){
	         valObjeto = valObjeto.replace("%22",'"');
	      }else{
			    m = valObjeto.length + 1;
	     }
     }        
     /* Termina el reemplazo */
 				 parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value = valObjeto;
         
      // concateno la identificaci�n del documento secundario
      if (idObjeto == "idNRO_DOCUMENTO_S_TCABDOC1") nroDiario = valObjeto;            
      if (idObjeto == "idDESCRIPCION_S_TCABDOC1") docSec = valObjeto;
      ///////////////////////////////////////////////////////
				 break;
	     }// End if
	}// End for	

     // Displayo la identificacion de documento secundario
     if (parent.fms_cabeceraCriterio.document.getElementById("documentAttach")){
         if (nroDiario != "") {           
            parent.fms_cabeceraCriterio.document.getElementById("tituloDocSec").style.display = "";
            parent.fms_cabeceraCriterio.document.getElementById("lbldocumentAttach").style.display = "";
            parent.fms_cabeceraCriterio.document.getElementById("documentAttach").style.display = "";
            parent.fms_cabeceraCriterio.document.getElementById("documentAttach").innerHTML = docSec;
            parent.fms_cabeceraCriterio.document.getElementById("lblnroDiarioAttach").style.display = "";
            parent.fms_cabeceraCriterio.document.getElementById("nroDiarioAttach").style.display = "";
            parent.fms_cabeceraCriterio.document.getElementById("nroDiarioAttach").innerHTML = nroDiario;
         }
     }     

  //  parent.fms_cabeceraCriterio.document.getElementById(idFocus).focus();
	parent.fms_bodyCriterioDOWN.location="../gene/nscc_gene_blank.jsp";	 
	if(parent.document.getElementById("framePA")){
       parent.document.getElementById("framePA").rows = "100%,0%,0%";
	}
	
	if(parent.document.getElementById("dv_bodyCriterioDOWN")){
		parent.document.getElementById("dv_bodyCriterioDOWN").style.display="none";
	}
}

//funci�n que abre un frame de Ayuda
function doStartCodificaDocumentoDiv(ps_nombrePagina){
		var s_location ="/"+appName+"/dcto/"+ps_nombrePagina;
		
		if($("#frameset #frameCO #framePA")){
		$("#frameset #frameCO #framePA #fms_cabeceraCriterio").load(s_location);	
		$("#frameset #frameCO #framePA #fms_cabeceraCriterio").css({"height": "100%"});
		$("#frameset #frameCO #framePA #fms_bodyCriterioDOWN").css({"height": "0%"});
		$("#frameset #frameCO #framePA #fms_bodyCriterioDOWN").css({"display": "none"});
 		$("#frameset #frameCO #framePA #bottom").css({"height": "0%"});
	   }
	   else{
		$("#fms_cabeceraCriterio").load(s_location);	
        document.getElementById("fms_cabeceraCriterio").style.height = "100%";
        document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
        document.getElementById("fms_bodyCriterioDOWN").style.display = "none";
        document.getElementById("fms_bodyCriterioBOTTOM").style.height = "0%";
	   }
}

function doStartCodificaDocumento(ps_nombrePagina){
		var s_location ="/"+appName+"/dcto/"+ps_nombrePagina;
	parent.fms_cabeceraCriterio.location=s_location;	
  parent.document.getElementById("framePA").rows = "100%,0%,0%";
}

function submitAct (form){            
	var frame = findFrame(window, form.target);
            if(!frame) return;
            var formData = new FormData(form);      
			formData = new URLSearchParams(formData).toString();              
			var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
				if (this.readyState != 4) return;
                	if (this.status == 200) {
                    	var data = this.responseText;
                    	frame.contentWindow.document.open();
                     	frame.contentWindow.document.write(data);
                    	frame.contentWindow.document.close();
                    }
                };
                xhr.open("POST",form.action, true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=ISO-8859-1');
                xhr.send(formData);
}


function submitDiv(form){      
	var div = $("#"+form.target);
	let enc = (form.enctype||form.encoding); 
	let method = (form.method||"GET").toLocaleUpperCase();
	let action = form.action;
	if(!div.length && top.document.getElementById("message_dialog_container").frame){
		div = $("#"+form.target , top.document.getElementById("message_dialog_container").frame.document) ;
	}
    if(!div) return;
		var formData = null
	if(form.children){
		formData = new FormData(form);      
	}       
	var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
		if (this.readyState != 4) return;
    	if (this.status == 200) {
        	var data = this.responseText;
		div.html(data);
        }
    };
	if(method=="GET" && formData){
		var c = action.indexOf("?")==-1?"?":"&";
	    action += c+(formData?new URLSearchParams(formData).toString():"");
		formData = "";
	}
	
    xhr.open(method,action, true);
	if(!enc || enc.trim()!='multipart/form-data' || (form.method||"GET").toLocaleUpperCase()=="GET"){
    	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=ISO-8859-1');
	    formData = formData?new URLSearchParams(formData).toString():null;
	}
    xhr.send(formData);
		
}
 
  function submitFormDiv(event, method){
	  event = event||window.event;
	  event.preventDefault();
	  method?method():submitDiv(event.target);
  }

function loadDiv(div,url){
$("#"+div).load(url);
}

function findFrame(wnd, name){
    if(wnd.name == name)
        return wnd;
	if(wnd.parent == wnd)
        return null;
    if(wnd.parent.name == name)
        return wnd.parent;
    var frames = wnd.parent.document.getElementsByTagName("frame");
    for(var i = 0; i<frames.length; i++){
        if(frames[i].name==name)
            return frames[i];
            var ff = findChildFrame(frames[i], name);
            if(ff)
                return ff;
    }
	return findFrame(wnd.parent, name);              
}

function findChildFrame(frame, name){
    if(!frame.contentDocument) return;
	var childrens = frame.contentDocument.getElementsByTagName("frame");
    for(var j=0; j<childrens.length; j++){
        if(childrens[j].name == name)
            return childrens[j];
            var f = findChildFrame(childrens[j], name);
            if(f)
               return f;
    }
}

//funci�n que cierra el frame de Ayuda
function doStopCodificaDocumento(){ 
// alert("aqui ");
  if (arguments[0]==null){ 
  //  alert("aqui 22 ");
	   parent.fms_cabeceraCriterio.location="../gene/nscc_gene_blank.jsp";	 
     parent.document.getElementById("framePA").rows = "0%,0%,100%";
     hideBtn(parent.fms_bodyCriterioBOTTOM.document.getElementById("btn_codificar"),'P');
  }else{
    //alert("aqui 33 ");
          parent.parent.fms_cabeceraCriterio.location="../gene/nscc_gene_blank.jsp";	 
          parent.parent.document.getElementById("framePA").rows = "0%,0%,100%";
  }
}


//funci�n que desabilita la barra que contiene las opciones del Men�
function cierraMenu(){
   //parent.document.getElementById("frameZZ").cols = "*,100%";
   top.nscc_index_frameset.bottomFrame.document.getElementById("frameZZ").cols = "*,100%";
   top.nscc_index_frameset.topFrame.document.getElementById("imgAbrirMnu").style.visibility = "visible";
}

//funci�n que habilita la barra que contiene las opciones del Men�
function abreMenu(){
   top.nscc_index_frameset.bottomFrame.document.getElementById("frameZZ").cols = "220,*"; // para las paginas cuerpo
   top.nscc_index_frameset.topFrame.document.getElementById("imgAbrirMnu").style.visibility = "hidden";
}

function ventanaDiv(pagina,campos,indice,tipo,id,nombre){
		var valoresCampos="";
		var s_ruta="<%=s_rutaModActf%>";
		var grupo = getElementByIdOrName(document, "txt_t_idGrupo").value;
		var cuenta = getElementByIdOrName(document, "txt_p_idCuenta").value;
		var tipoActivo = getElementByIdOrName(document, "txt_t_idTipoActivo").value;
		var idDetalle = getElementByIdOrName(document, "txt_t_idDetalleGto").value;
		var ps_accionPage = '<%=s_numTask%>';
		if(ps_accionPage != "5"){
 		   if(cuenta == "" || idDetalle == ""){
			 alert("Debe Ingresar la Cuenta de Mayor y el Auxiliar respectivo");
			 return false;
		   }
		 }
		var s_idLice="<%=ps_idLiceSesion%>";
		if (document.getElementById(id).value==""){
			document.getElementById(id).value = " ";
		}
		//alert(document.getElementById(id).value+"@"+document.getElementById(nombre).value);
		valoresCampos=document.getElementById(id).value+"@"+document.getElementById(nombre).value;
		if (document.getElementById(id).value ==" "){
			document.getElementById(id).value = "";
		}
		
 		$( document ).ready(function() {
 			$("#fms_bodyCriterioDOWN").load("./busq/"+pagina+"?ps_parametrosRetorno="+
 		                                      campos+"&ps_valoresParametros="+escape(valoresCampos)+
 											  "&indice="+indice+"&tipo="+tipo+"&grupo="+grupo+"&cuenta="+cuenta+"&tipoActivo="+tipoActivo+"&idLice="+s_idLice+"&idDetalleGastoDeprec="+idDetalle);
 			});
		 if(tipo == "M"){
  		  //document.getElementById("framePA").style.height = "20%,20%,60%,0%";
   		document.getElementById("fms_cabeceraDetalle").style.height = "20%";
 	  	document.getElementById("fms_cabeceraDetalle").style.overflow = "auto";
 	  	document.getElementById("fms_cabeceraDetalle").style.position = "relative";
 	 	document.getElementById("fms_cabeceraCriterio").style.height = "20%";
		document.getElementById("fms_cabeceraCriterio").style.overflow = "auto";
		document.getElementById("fms_cabeceraCriterio").style.position = "relative";
 		document.getElementById("fms_bodyCriterioDOWN").style.height = "60%";
 		document.getElementById("fms_bodyCriterioDOWN").style.overflow = "auto";
	    document.getElementById("fms_bodyCriterioDOWN").style.position = "relative";		
 		document.getElementById("fms_bodyCriterioDOWN").style.background = "#dadada";
		}else if(tipo == "T"){
		  //document.getElementById("framePA").style.height = "40%,0%,60%,0%";
		document.getElementById("fms_cabeceraCriterio").style.height = "40%";
	 	document.getElementById("fms_cabeceraCriterio").style.overflow = "auto";
	 	document.getElementById("fms_cabeceraCriterio").style.position = "relative";
	 	document.getElementById("fms_bodyCriterioDOWN").style.height = "60%";
	 	document.getElementById("fms_bodyCriterioDOWN").style.overflow = "auto";
		document.getElementById("fms_bodyCriterioDOWN").style.position = "relative";
		document.getElementById("fms_bodyCriterioDOWN").style.background = "#dadada";
		}
		
		
   	}

function cerrarFrame(){
    if (parent.frames[1].name=="ciudadFrame" ){
    	parent.frames[1].location="../gene/nscc_gene_blank.jsp";
    	parent.document.getElementById("statusFrame").rows = "100%,*";
    	parent.document.getElementById("divCiudad").style.display="none";
    }else{
        if (parent.frames[1].name=="fms_bodyCriterioDOWN" ){
        	parent.frames[1].location="../gene/nscc_gene_blank.jsp";	
        }else if (parent.frames[1].name=="fms_bodyCriterioDOWN1" ){
        	parent.frames[1].location="../gene/nscc_gene_blank.jsp";	 
        }else if (parent.frames[2].name=="fms_bodyCriterioDOWN" ){        
        	parent.frames[2].location="../gene/nscc_gene_blank.jsp";	
        }
		// se añadio para mostrar el listado de tipos de comprobantes de envio y recepcion de archivos de diarios contables
    	if(parent.document.getElementById("frameAA")){ 
			parent.document.getElementById("frameAA").rows = "100%,0%,0%";   
		}
		parent.document.getElementById("framePA").rows = "100%,*";     	
    }
}

function cerrarDiv(){
    if (parent.frames[1].name=="ciudadFrame" ){
    	parent.frames[1].location="../gene/nscc_gene_blank.jsp";
    	parent.document.getElementById("statusFrame").rows = "100%,*";
    	parent.document.getElementById("divCiudad").style.display="none";
    }else{
		if (document.getElementById("framePA_Det")){
			$( document ).ready(function() {
			$("#"+document.getElementById("framePA_Det").children[1].id).html("");
			});     
		}else if (document.getElementById("framePA").children[0].id=="fms_bodyCriterioDOWN" ){
        	$( document ).ready(function() {
				$("#"+document.getElementById("framePA").children[0].id).html("");
			}); 	
        }else if (document.getElementById("framePA").children[1].id=="fms_bodyCriterioDOWN1" ){
        	$( document ).ready(function() {
				$("#"+document.getElementById("framePA").children[1].id).html("");
			}); 	 
        }else if (document.getElementById("framePA_BA")){        
        	$( document ).ready(function() {
				$("#"+document.getElementById("framePA_BA").children[1].id).html("");
			}); 	
        }else if (document.getElementById("framePA").children[1].id=="fms_bodyCriterioDOWN" ){        
        	$( document ).ready(function() {
				$("#"+document.getElementById("framePA").children[1].id).html("");
			}); 	
        }else if (document.getElementById("framePA").children[1].id=="oculto" ){        
        	$( document ).ready(function() {
				$("#"+document.getElementById("framePA").children[1].id).html("");
			}); 	
        }
		// se añadio para mostrar el listado de tipos de comprobantes de envio y recepcion de archivos de diarios contables
    	if(document.getElementById("frameAA")){ 
//		parent.document.getElementById("frameAA").rows = "100%,0%,0%";   
		document.getElementById("fms_cabeceraCriterio").style.height = "100%";
		document.getElementById("fms_cabeceraCriterio").style.overflow = "inherit";
		document.getElementById("framePA").style.height = "0";
		}
		else if (document.getElementById("fms_diarioDet") && document.getElementById("fms_docDet") && document.getElementById("fms_docDetOculto") && document.getElementById("fms_docDetOcultoMatricial")){
		document.getElementById("fms_diarioDet").style.overflow = "auto";
		document.getElementById("fms_docDet").style.overflow = "inherit";
		document.getElementById("fms_docDet").style.background = "white";
	    }
		else if (document.getElementById("fms_bodyCriterioUPDivs")&& document.getElementById("fms_bodyCriterioDOWNDivs")){
		document.getElementById("fms_bodyCriterioUPDivs").style.height = "100%";
		document.getElementById("fms_bodyCriterioUPDivs").style.visibility = "";
		document.getElementById("fms_bodyCriterioUPDivs").style.overflow = "inherit";
		document.getElementById("fms_bodyCriterioDOWNDivs").style.height = "0%";
		$("#fms_bodyCriterioDOWNDivs").html("");
		}
		else if(document.getElementById("fms_cabeceraCriterio_Delega")&& document.getElementById("fms_bodyCriterioDOWN_Delega")&& document.getElementById("oculto_Delega")){ 
		document.getElementById("fms_cabeceraCriterio_Delega").style.height = "100%";
		document.getElementById("fms_cabeceraCriterio_Delega").style.overflow = "inherit";
		document.getElementById("fms_bodyCriterioDOWN_Delega").style.height = "0%";
		$(document.getElementById("fms_bodyCriterioDOWN_Delega")).html("");
		}else if(document.getElementById("frameCO")){
			$("#frameCO #fms_cabeceraCriterio").css("height", "100%");
			$("#frameCO #fms_cabeceraCriterio").css("overflow", "auto");
			$("#frameCO #fms_bodyCriterioDOWN").css("height", "0%");
			$("#frameCO #fms_bodyCriterioDOWN").html("");
	 	}
		else if (document.getElementById("fms_cabeceraCriterio")&& document.getElementById("fms_bodyCriterioDOWN")&& document.getElementById("fms_bodyCriterioUP")){
		document.getElementById("fms_bodyCriterioUP").style.height = "100%";
		document.getElementById("fms_bodyCriterioUP").style.visibility = "";
		document.getElementById("fms_bodyCriterioUP").style.overflow = "inherit";
		document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
		document.getElementById("fms_cabeceraCriterio").style.overflow = "inherit";
		$("#fms_bodyCriterioDOWN").html("");
		}	
		else if (document.getElementById("fms_bodyCriterioUP")&& document.getElementById("fms_bodyCriterioDOWN")&&document.getElementById("fms_cabeceraCriterioDiv")){
			document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
			document.getElementById("fms_bodyCriterioDOWN").innerHTML = "";
			document.getElementById("fms_bodyCriterioUP").style.height = "100%";
		}	
		else if (document.getElementById("framePA")&& document.getElementById("fms_bodyCriterioUP")&& document.getElementById("fms_bodyCriterioDOWN")){
			document.getElementById("fms_cabeceraCriterio").style.height = "100%";
			document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
			document.getElementById("fms_bodyCriterioDOWN").style.position = "fixed";
			document.getElementById("fms_bodyCriterioDOWN").style.border="";
		}			
		else if (document.getElementById("fms_cabeceraCriterio") && document.getElementById("fms_bodyCriterioDOWN")){     
		document.getElementById("fms_cabeceraCriterio").style.height = "100%";
		document.getElementById("fms_cabeceraCriterio").style.overflow = "visible";
		document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
		document.getElementById("fms_bodyCriterioDOWN").style.background = "#ffffff";
		$("#fms_bodyCriterioDOWN").html("");
        }

		else if (document.getElementById("fms_bodyCriterioUP")){        
		document.getElementById("fms_bodyCriterioUP").style.height = "100%";
		document.getElementById("fms_bodyCriterioUP").style.overflow = "inherit";
		document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
		$("#fms_bodyCriterioDOWN").html("");
        }

		else if (document.getElementById("fms_bodyCriterioDOWN1")){       
		document.getElementById("fms_cabeceraCriterio").style.height = "100%";
		document.getElementById("fms_cabeceraCriterio").style.overflow = "inherit";
		document.getElementById("fms_bodyCriterioDOWN1").style.height = "0%";
        }
		
		else if (document.getElementById("fms_bodyCriterioDet")){
			document.getElementById("fms_cabeceraCriterio").style.height = "100%";
			document.getElementById("fms_cabeceraCriterio").style.overflow = "auto";
			document.getElementById("fms_bodyCriterioDet").style.height = "0%";			
		}
		
		else if(document.getElementById("fmsDetalleEntrega")){ 
		document.getElementById("fmsDetalleEntrega").style.height = "457px";
		document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";		
		}
 	
    }
}

/**
  Creado por: Sudamericana de Software 
  Fecha Creaci?n: 02/02/2006
  Version: 1.0
  Descripci?n: Valida si una cadena es nula o es espacios en blanco
  Par?metros de Entrada: 
                         - CADENA: objeto que se desea analizar
  Par?metros de Salida:  
                         - STR: true si est? vacia, false en caso contrario 
  Evento: 
  Browser: Pruebas realizadas en IE 6.0.26000., FireFox 1.5 y Netscape 8.1
*/

function esVacio(cadena) 
{
   if (cadena == null || cadena == "" || cadena == " ") 
   {
      return true;
   }
   return false;
}

//funci�n que maximiza una ventana nueva
function maximize(){
      window.moveTo(0,0);
      window.resizeTo(screen.availWidth, screen.availHeight);
}
// funci�n que recarga la p�gina si el navegador es IE4 o posterior
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
//Funcion que crea un objeto que posee los datos de columnas que contiene el parametro tabla para 
//realizar el ordenamiento dinamico esta funcion es llamada en el evento Load
var theTable, theTableBody;
 function init(nombre_tabla) {   
   theTable = document.getElementById(nombre_tabla);
   theTableBody = theTable.tBodies[0];
  }

/************************************************************************************************/

//Funci�n que controla los valores de tipo caracter
function ValidaSoloCaracteres(event){
	var key = getKeyCode(event);
	if (!esKeyCodeDesplazamiento(key) &&
			!(key>=45 && key<=57 || key>=65 && key<=90 || key>=97 && key<=122 || key==32 || key==95 || key == 40 || key == 41)){
		cancelEvent(event);
	}
	return;
}

//Funci�n que controla los valores de tipo caracter, permite el ingreso de la letra ñ
function ValidaSoloCaracteresExcep(event){
	var key = getKeyCode(event);
	if (!esKeyCodeDesplazamiento(key) &&
			!(key>=45 && key<=57 || key>=65 && key<=90 || key>=97 && key<=122 || key==32 || key==95 || key == 40 || key == 41 || key == 241)){
		cancelEvent(event);
	}
	return;
}
/*************************************************************************************************/

//funcion para validar si dentro de un campo texto solo se ingresaron caracteres especiales sin letras ni numeros
//sirve para usarse en la valdiacion de Direccion del proveedor
function validarCaracteresEspecialesCampoTexto(texto){
	var cadena = "";
	var str = document.getElementById(texto).value;
 
	cadena = str.replace(/[$&#*-.1234567890?¿]/g,'');
    if(cadena.length==0){
    	return false
    }else if(cadena==' '){
    	return false;
    }else{
    	return true;
    }
}
function ValidaRucPNaturales(identificacion){ 
	
	var par=0;
	var imp=0;
	
	var lv_prov = new Number(identificacion.substring(0, 2));
	
	if (!(lv_prov > 0 && lv_prov <= NUMERO_DE_PROVINCIAS)) {
		return 0;
	}
	
	var d=new Array(10);
	
	//Asignamos el string a un array
	for (var i = 0; i < d.length; i++) {
	    d[i] = parseInt(identificacion.charAt(i) + "");
	}
	
	
	//sumamos los duplos de posici�n impar
	for (var i = 0; i < d.length; i += 2) {
	    d[i] = ((d[i] * 2) > 9) ? ((d[i] * 2) - 9) : (d[i] * 2);
	    imp += d[i];
	}
	
	//sumamos los digitos de posici�n par
	for (var i = 1; i < (d.length - 1); i += 2) {
	    par += d[i];
	}
		
	var suma = imp + par;
	
	//Restamos de la decena superior
	var d10 = parseInt(((suma + 10)+"").substring(0, 1) + "0") - suma;
	
	//Si es diez el d�cimo d�gito es cero
	d10 = (d10 == 10) ? 0 : d10;
	//alert("digito:"+d10+":"+d[9]);
	//si el d�cimo d�gito calculado es igual al digitado la c�dula es correcta
	var retorno =0;
	if (d10 == d[9]){
		retorno =1;
	}
	
	return retorno;
}

function ValidaRucEmpresaPublica(numruc){ 
	///////////////// validaRucEmpresaPublica
	var lv_prov = new Number(numruc.substring(0, 2));
	var coeficientes = new Array(3,2,7,6,5,4,3,2);
	var constante = 11;
	if (!(lv_prov > 0 && lv_prov <= NUMERO_DE_PROVINCIAS)) {
		return 0;
	}
	
	var d=new Array(numruc.length);

	//Asignamos el string a un array
	for (var i = 0; i < d.length; i++) {
	    d[i] = parseInt(numruc.charAt(i) + "");
	}	
	
	var suma = 0;
	for (var i=0; i< coeficientes.length; i++) {
    	d[i] = d[i] * coeficientes[i];
    	suma += d[i];
    }	

	var modulo = 0;
	var digito = 0;
	
	modulo = suma % constante;
	
	digito = (modulo == 0) ? 0 : (constante - modulo);
	
	digito = (digito == 10) ? 0 : digito;	
	//alert("digito:"+digito+":"+d[8]);
	var result=0;
	if(digito == d[8]){
		result=1;
	}
	return result;
}

function ValidaRucJuridica(numruc){ 
	///////////////// ValidaRucSociedades
	var coeficientes = new Array(4,3,2,7,6,5,4,3,2);
	var constante = 11;

	var lv_prov = new Number(numruc.substring(0, 2));
	
	if (!(lv_prov > 0 && lv_prov <= NUMERO_DE_PROVINCIAS)) {
		return 0;
	}
	
	var d=new Array(numruc.length);
	var suma = 0;
	//Asignamos el string a un array
	for (var i = 0; i < d.length; i++) {
	    d[i] = parseInt(numruc.charAt(i) + "");
	}		
	
    for (var i=0; i< coeficientes.length; i++) {
    	d[i] = d[i] * coeficientes[i];
    	suma += d[i];
    }	    
    var modulo, digito;
    
    modulo = suma % constante;

    digito = (modulo == 0) ? 0 : (constante - modulo);
    
    digito = (digito == 10) ? 0 : digito;	
	//alert("digito:"+digito+":"+d[9]);	
	var result=0;
	if(digito == d[9]){
		result=1;
	}
	return result;	
}


function ValidaRuc(txtnumruc){ 
	
	var identificacion=document.getElementById(txtnumruc).value;
	
	if ((isNaN(identificacion) || (identificacion=="")) || !(identificacion.length=13)){
	    document.getElementById(txtnumruc).value="";
		return 0;
	};
	 
	var tipoRuc=identificacion.substring(2,3);
	var retorno=0;
	if (tipoRuc>=0 && tipoRuc<6){ ///RUC de personas naturales
		retorno=ValidaRucPNaturales(identificacion);
	}else if (tipoRuc==6) { // RUC para empresas p�blicas
		retorno=ValidaRucEmpresaPublica(identificacion);
	}else if (tipoRuc==9){ // RUC de persona jur�dica o extranjera
		retorno=ValidaRucJuridica(identificacion);
	}else{ // ruc erroneo
		retorno=0;
	}
	return retorno;
	
}




//-------------------------------------
//----Nuevos----

function ValidaRuc_ECU(txtnumruc){ 
	//alert("validar RUC ECUADOR");
	var identificacion=document.getElementById(txtnumruc).value;
	
	if ((isNaN(identificacion) || (identificacion=="")) || !(identificacion.length=13)){
	    document.getElementById(txtnumruc).value="";
		return 0;
	};
	 
	var tipoRuc=identificacion.substring(2,3);
	var retorno=0;
	if (tipoRuc>=0 && tipoRuc<6){ ///RUC de personas naturales
		retorno=ValidaRucPNaturales(identificacion);
	}else if (tipoRuc==6) { // RUC para empresas p�blicas
		retorno=ValidaRucEmpresaPublica(identificacion);
	}else if (tipoRuc==9){ // RUC de persona jur�dica o extranjera
		retorno=ValidaRucJuridica(identificacion);
	}else{ // ruc erroneo
		retorno=0;
	}
	return retorno;
	
}


//
function ValidaCedula_ECU(numced){
	//alert("validar CEDULA ECUADOR");
	if (document.all(numced).value.length==10) {   
		if ( (isNaN(document.all(numced).value)) || (document.all(numced).value=="") ){
			document.all(numced).value="";    
			return 0;
		};
		var pav_numced=document.all(numced).value;
	}else{
		if (isNaN(numced) || (numced=="") || (numced.length!=10)){ 
			return 0;    
		};
		var pav_numced=numced;
	};
	
	return ValidaRucPNaturales(pav_numced);
	
}


 function ValidaRuc_COL(txtIdentificacion){
	//alert("validar RUC COLOMBIA");
	var retorno=0;
	var identificacion = document.getElementById(txtIdentificacion).value;
	
	retorno = Formula_DigitoVerificador_NITColombia(identificacion);
	return retorno;
 }
 
 
 function ValidaCedula_COL(txtIdentificacion){
	    //alert("validar CEDULA COLOMBIA");
		var retorno=0;
		var identificacion = document.getElementById(txtIdentificacion).value;
		retorno = 1;
		//retorno = Formula_DigitoVerificador_NITColombia(identificacion);
		return retorno;
	 }

    
  function  Formula_DigitoVerificador_NITColombia(identificacion){
     var vpri, x, y, z, i, nit1, dv1, digitoTxt;
     // Identificacion completa (NIT o RUC, Cedula de Colombia)
     //nit1 = document.getElementById(txtIdentificacion).value;
    
     if(isNaN(identificacion)){
	        //alert('El valor de Identificacion No es un Numero Valido');
    	     return 0;
	    }else{
	            vpri = new Array(16); 
                digitoTxt = identificacion.substr(identificacion.length-1);
                nit1 =  identificacion.substr(0,identificacion.length-1);
                x=0 ; y=0 ; z=nit1.length;
	            vpri[1]=3;
	            vpri[2]=7;
	            vpri[3]=13; 
	            vpri[4]=17;
	            vpri[5]=19;
	            vpri[6]=23;
	            vpri[7]=29;
	            vpri[8]=37;
	            vpri[9]=41;
	            vpri[10]=43;
	            vpri[11]=47;  
	            vpri[12]=53;  
	            vpri[13]=59; 
	            vpri[14]=67; 
	            vpri[15]=71;
	   
	            for(i=0 ; i<z ; i++){
	               y=(nit1.substr(i,1));
	               x+=(y*vpri[z-i]);
	             }
	            y=x%11;
	              
				if(y >1){
	               dv1=11-y;
	             }else{
	               dv1=y;
	             }

		         if(digitoTxt != dv1){
                     //alert("Identificacion no es Valida, Digito de Verificacion no es Correcto");
		        	 return 0;
                  }else{
                	 return 1;
                  }   
         }
	}
  
	function consultaDigitoVerificador_NITColombia(identificacion){
	     var vpri, x, y, z, i, dv1;
	     // Identificacion sin digito verificador (NIT o RUC, Cedula de Colombia)
	    
	     if(isNaN(identificacion)){
	    	 return -1;
		 }else{
		    	vpri = new Array(16); 
	            x=0 ; y=0 ; z=identificacion.length;
		        vpri[1]=3;
		        vpri[2]=7;
		        vpri[3]=13; 
		        vpri[4]=17;
		        vpri[5]=19;
		        vpri[6]=23;
		        vpri[7]=29;
		        vpri[8]=37;
		        vpri[9]=41;
		        vpri[10]=43;
		        vpri[11]=47;  
		        vpri[12]=53;  
		        vpri[13]=59; 
		        vpri[14]=67; 
		        vpri[15]=71;
		   
		        for(i=0 ; i<z ; i++){
		        	y=(identificacion.substr(i,1));
		            x+=(y*vpri[z-i]);
		        }
		        y=x%11;
		              
				if(y >1){
					dv1=11-y;
		        }else{
		        	dv1=y;
		        }
				
				return dv1;  
	         }
		}
  
/************************************************************************************************/
/************************************************************************************************/

/************************************************************************************************/

function IsDigits(FormName, ObjName, FieldName)	{
	var number=eval('document.' + FormName + '.' + ObjName + '.value');
	var VALID_CHAR = "1234567890";
	//var VALID_CHAR = "1234567890.";
	for (i = number.length - 1; i >= 0; i--) {
		esta = false;
		for (var k = 0; k < VALID_CHAR.length ; k++) {
			if (number.charAt(i) == VALID_CHAR.charAt(k)) esta = true;
		}
		if (!esta)	{
			var message='Datos no validos en el campo ' + FieldName + ' (Solo Numeros)';
			alert(message);
			eval('document.' + FormName + '.' + ObjName + '.value=""');
			eval('document.' + FormName + '.' + ObjName + '.focus()');
			return false;
		}
	}
	return true;
}

/************************************************************************************************/

//Funcion que valida un valor numerico
function IsDigitsVal(FormName,ObjName, ValNum, FieldName) {
	var number=ValNum;
	var VALID_CHAR = "1234567890.";
	//var VALID_CHAR = "1234567890.";
	for (i = number.length - 1; i >= 0; i--) {
		esta = false;
		for (var k = 0; k < VALID_CHAR.length ; k++) {
			if (number.charAt(i) == VALID_CHAR.charAt(k)) esta = true;
		}
		if (!esta)	{
			var message='Datos no validos en el campo ' + FieldName + ' (Solo Numeros)';
			alert(message);
			eval('document.' + FormName + '.' + ObjName + '.focus()');
			return false;
		}
	}
	return true;
}

/************************************************************************************************/

//Funcion que localiza en la posicion correspondiente un elemento de la lista
//en un combo
function Mail(FormName, ObjName, FieldName) {
	var number=eval('document.' + FormName + '.' + ObjName + '.value');
	var VALID_CHAR = "@.";
	esta = 0;
	if (number=="") esta = true;
	for (i = number.length - 1; i >= 0; i--)	{
		for (var k = 0; k < VALID_CHAR.length ; k++){
			if (number.charAt(i) == VALID_CHAR.charAt(k)) esta ++;
		}
	}
	if (esta < VALID_CHAR.length) {
		var message='Los datos del campo ' + FieldName + ' son incorrectos';
		alert(message);
		eval('document.' + FormName + '.' + ObjName + '.value=""');
		eval('document.' + FormName + '.' + ObjName + '.focus()');
		return false;
	}
	return true;
}

/************************************************************************************************/

//Funcion que valida si el control tiene la propiedad valor esta vacia
//devuelve un mensaje si es asi y envia el foco a ese control
function Vacio(FormName, ObjName, FieldName) {
	var VarTmp=eval('document.' + FormName + '.' + ObjName + '.value');
	if (VarTmp=="")	{
		var message='Faltan datos en el campo ' + FieldName;
		alert(message);
		eval('document.' + FormName + '.' + ObjName + '.focus()');
		return false;
	}
	return true;
}


// para uso de struts cuando los check son indexed
function SelectAllCheckStruts(NameChk,value){
	for (var Tmp=0; Tmp < 1000 ; Tmp++){
		if ( document.getElementsByName(NameChk +"["+Tmp+"].checked").item(0) ){
			document.getElementsByName(NameChk +"["+Tmp+"].checked").item(0).checked=value;
		}else {
			return true;
		}
	}
}
// para uso de struts cuando los check son indexed
function SelectAllCheckStrutsDiv(NameChk,value,div){
	var div = $("#"+div+",[name='"+div+"']");
	for (var Tmp=0; Tmp < 1000 ; Tmp++){
		if ( div.find("[name='"+NameChk+"["+Tmp+"].checked']").length ){
			div.find("[name='"+NameChk+"["+Tmp+"].checked']").prop("checked", value)
		}else {
			return true;
		}
	}
}

/************************************************************************************************/

  //Funcion que devuelve el residuo de la division de dos numeros
  //la variable devuelve un variable global denominada "res"

function residuo(IntDvdo, IntDvsor)	{
	do{
		IntDvdo-=IntDvsor;
	}while ( IntDvsor < IntDvdo );
	res=IntDvdo;
}

/************************************************************************************************/

//Validacion de la fecha para un campo texto
function ValDateText(StrFormName, StrObjName, dia, mes, anio) {
	if (trim(dia)=="") {
		alert("Digite el dia en la fecha. \n 'dd/mm/aaaa'");
		eval("document." + StrFormName + "." + StrObjName + ".focus()");
		return false;
	}
	if (trim(mes)=="") {
		alert("Digite el mes en la fecha. \n dd/mm/aaaa");
		eval("document." + StrFormName + "." + StrObjName + ".focus()");
		return false;
	}
	// validacion del a�o //
	if (anio.length < 4 || trim(anio)=="") {
		alert("En el a�o se deben ingresar 4 digitos. \n 'dd/mm/aaaa'");
		eval("document." + StrFormName + "." + StrObjName + ".focus()");
		return false;
	}
	if (!IsDigitsVal(StrFormName, StrObjName,anio,'A�o')) {
		return false;
	}
	var a= new Date;
	if ((eval(anio) < 1910 || eval(anio) > 2050) ) {
		alert("El a�o solo acepta numeros entre el intervalo 1910 al 2050. \n 'dd/mm/aaaa'");
		eval("document." + StrFormName + "." + StrObjName + ".focus()");
		return false;
	}
	residuo(eval(anio),4);
	pri=res;
	residuo(eval(anio),100);
	seg=res;
	residuo(eval(anio),400);
	tri=res;
	if (eval(mes)==2 && eval(dia)>29) {
		alert("Este mes no acepta este numero de dia. \n 'dd/mm/aaaa'");
		eval("document." + StrFormName + "." + StrObjName + ".focus()");
		return false;
	}
	
	if (consisfec(dia,mes,anio) == false) {
		alert("Este a�o no es bisiesto y no acepta este numero de d�a en este mes.");
		eval("document." + StrFormName + "." + StrObjName + ".focus()");
		return false;
	}
	//validacion del mes //
	if (mes>12) {
		alert("El numero de mes es incorrecto. \n 'dd/mm/aaaa'");
		eval("document." + StrFormName + "." + StrObjName + ".focus()");
		return false;
	}
	if ((mes == 1 || mes == 3 || mes== 5 || mes==7 || mes==8 || mes==10 || mes==12) && (dia >= 32))	{
		alert("Este mes no acepta este numero de dia. \n 'dd/mm/aaaa'");
		eval("document." + StrFormName + "." + StrObjName + ".focus()");
		return false;
	}
	if ((mes == 4 || mes == 6 || mes== 9 || mes==11) && (dia >= 31))	{
		alert("Este mes no acepta este numero de dia. \n 'dd/mm/aaaa'");
		eval("document." + StrFormName + "." + StrObjName + ".focus()");
		return false;
	}
	return true ;
}

/************************************************************************************************/

// Funci�n que controla el formato de la fecha y que sea una fecha correcta.
function MiFecha(StrFormName, StrNameObj)    {
	OFecha=eval("document." + StrFormName +  "." + StrNameObj);
	if (OFecha.value.length ==2 || OFecha.value.length ==5) {
		OFecha.value += "/";
	}
	if (OFecha.value.length ==10)  { 
		if (ValDateText(StrFormName,StrNameObj,OFecha.value.substring(0,2),OFecha.value.substring(3,5),OFecha.value.substring(6,10) ) == false ) {
			OFecha.value = "";
		}
	}
	return;
}

/************************************************************************************************/

// Funci�n que controla la longitud del RUC que sea de 11 d�gitos o en blanco
function LongRUC(StrFormName, StrNameObj) {
	ORUC=eval("document." + StrFormName +  "." + StrNameObj);
	//if (ORUC.value.length < 11 && ORUC.value.length > 0) {
	if (ORUC.value.length !=13 && ORUC.value.length > 0) {
		alert("El Ruc debe ser de 13 d�gitos.");
		eval("document." + StrFormName +  "." + StrNameObj + ".focus()");
		return false;
	}
	return;
}


/************************************************************************************************/

//Funci�n que controla los valores num�ricos que se ingresan (0123456789.)
function ValidarNumericos(evt){
	var key=getKeyCode(evt);
	
	if (!esKeyCodeDesplazamiento(key) &&
			!(key>=48 && key<=57) ) {
		cancelEvent(evt);
	}
	return;
}

/************************************************************************************************/

//Funci�n que controla los valores num�ricos que se ingresan incluido el punto  (0123456789 ".")
function ValidarNumericosDec(event,obj){
  var key = getKeyCode(event);
  if (!esKeyCodeDesplazamiento(key) &&
		  !(key>=48 && key<=57) && (!(key==46))) {
	  cancelEvent(event);
  }
  if (obj==null) return; 
  if ( (key==46) && obj.value.indexOf(".")!=-1) {
	cancelEvent(event);
    return;
  }
	return;
}
//Funci�n que controla los valores num�ricos que se ingresan incluido el punto y el signo "-" (0123456789 ".")
function ValidarNumericosDecNeg(event,obj){
  var key = getKeyCode(event);
  if (!esKeyCodeDesplazamiento(key) &&
		  !(key>=48 && key<=57) && (!(key==46)) && (!(key==45))) {
	  cancelEvent(event);
  }
  if (obj==null) return;

  if (key==45) {
	  cancelEvent(event);
    if (obj.value.substr(0,1)!="-"){
		obj.value="-"+obj.value;
	}	
    return;
  }
  if ( (key==46) && obj.value.indexOf(".")!=-1) {
	cancelEvent(event);
    return;
  }
	return;
}

/************************************************************************************************/

//Funci�n que controla los valores num�ricos con porcentaje que se ingresan (0123456789.%)
function ValidarPorcen(event){
	var key = getKeyCode(event);
	if (!esKeyCodeDesplazamiento(key) &&
			!(key>=48 && key<=57 || key==37) && (!(key==46))) {
		cancelEvent(event);
	}
	return;
}


/************************************************************************************************/

//Funci�n que controla los valores v�lidos para email. (nombre@dominio.com)
function ValidateMail(objSrc, strText) {
	var i = 0;
	var p = 0;
	strError='Error';
	if (objSrc.value == '') return true;
	var sLength = objSrc.value.length;
	var x = 0;
	while ((i < sLength) ){
		if (objSrc.value.charAt(i)  == '@'){
			x = x + 1;
			p =  i;
			if (objSrc.value.charAt(i+1)  == '.')
				return false;
		}
		if  (x > 1)
		return false;
		i++;
	}
	if  (x == 0)
		return false;
	i = 0;
	while ((i < sLength) ) {
		if (objSrc.value.charAt(i)  == '.') {
			x = x + 1;
			if (objSrc.value.charAt(i+1)  == '.')
				return false;
		}
		i++;
	}
	if (objSrc.value.charAt(i-1)  == '.')
	return false;
	i = p;
	x = 0;
	while (i < sLength)	{
		if (objSrc.value.charAt(i)  == '.')	{    
			x = x + 1;
			if (objSrc.value.charAt(i+1)  == '.')
				return false;
		}
		i++;
	}
	if  (x == 0)
	return false;
	while (i < sLength)	{
		if (objSrc.value.charAt(i) == ' ')
			return false;
		i++;
	}
	return true;
}


/************************************************************************************************/

//Funci�n que recorta los valores en blanco.
function trim(s) {
	var idx  = 0;
	var idxf = 0;
	var str  = String(s);
	while (str.charAt(idx) == " " && idx < str.length)
		idx++;
	if (idx == str.length)
		str = "";
	else{
		str  = str.substring(idx,str.length);
		idxf = str.length - 1;
		while(str.charAt(idxf) == " ")
		idxf--;
		str = str.substring(0, idxf + 1);
	}
	return str;
}

/************************************************************************************************/

//verfica la Validez de la Fecha
function consisfec(xdia,xmes,xano) {
  var meses=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
  meses[1]=((xano % 4)==0) ? 29 : 28;
  return ((xdia<=meses[xmes-1]) ? true : false );  // true -> OK     false -> KO
 }


/************************************************************************************************/


function KeyPress(what,e,max,action) {
    if (document.layers) {
        if (e.target.value.length >= max)
            eval(action);
    }
    else if (document.all) {
        if (what.value.length > (max-1))
            eval(action);
    }
}

/************************************************************************************************/

//Funcion que retorna la fecha y hora del sistema
function fechaHora() {
	var hours, minutes, seconds, ap;
	var intHours, intMinutes, intSeconds;
	var today;
	
	today = new Date();
	
	var months=new Array(13);
	months[1]="enero";
	months[2]="febrero";
	months[3]="marzo";
	months[4]="abril";
	months[5]="mayo";
	months[6]="junio";
	months[7]="julio";
	months[8]="agosto";
	months[9]="septiembre";
	months[10]="octubre";
	months[11]="noviembre";
	months[12]="diciembre";
	var time=new Date();
	var lmonth=months[time.getMonth() + 1];
	var date=time.getDate();
	var year=time.getYear();
	if (year < 2000)
	year = year + 1900;
	
	var fechaCad = "" + date + " de "+lmonth + ", " + year + "&nbsp;";  
	document.getElementById('Clock').innerHTML = fechaCad ;
}


/************************************************************************************************/

function cambiaColor(id,accion,fondo){
	          if (accion == "A"){
               //if (fondo == "S") 
                 document.getElementById("idTdLogout").style.backgroundImage = "url(imgs/nscc_barraArribaFechaGrisFondo.gif)";
                 document.getElementById("idTdLogout").style.border = "#000000";
                 document.getElementById("idTdLogout").style.borderStyle = "solid";
                 document.getElementById("idTdLogout").style.borderTopWidth = "1px";
                 document.getElementById("idTdLogout").style.borderRightWidth = "1px"; 
                 document.getElementById("idTdLogout").style.borderBottomWidth = "1px"; 
                 document.getElementById("idTdLogout").style.borderLeftWidth = "1px";                 
                 document.getElementById(id).style.color= "blue" ;
             }else if (accion == "O"){
                  //if (fondo == "S") 
                 document.getElementById("idTdLogout").style.border = "transparent";
                 document.getElementById("idTdLogout").style.backgroundImage = "url(imgs/nscc_barraArribaFechaGrisFondo.gif)";
                 document.getElementById("idTdLogout").style.borderStyle = "none";
                 document.getElementById("idTdLogout").style.backgroundColor="transparent";		              
                 document.getElementById(id).style.color="#000333";
		        }	
          }

function muestraLOGOUT(){  
   parent.topFrame.document.getElementById("LOGOUT").innerHTML = "<span style='cursor:hand;' onMouseOver=cambiaColor(parent.topFrame.document.getElementById(\"LOGOUT\").id,'A','N'); onMouseOut=cambiaColor(parent.topFrame.document.getElementById(\"LOGOUT\").id,'O','N'); onClick=cierraSession('"+pg_mensaje+"'); >"+pg_logout+"</span>";
   parent.topFrame.document.getElementById("idLabelUser").innerHTML = pg_labelUsuario;
   parent.topFrame.document.getElementById("idUser").innerHTML      = pg_usuario+"/"+pg_nombreEmpresa+"/"+pg_desLocalidad+"/"+pg_desRolUsuario;  // "/SERVICIOS CONTABLES S.A.";
   parent.topFrame.document.getElementById("namePais").innerHTML    = pg_descPais+", ";
   parent.topFrame.document.getElementById("imgAbrirMnu").alt       = unescape(pg_openMnu);
}


function cierraSession(ps_mensaje){
	if (confirm(unescape(ps_mensaje))) { 	
       parent.topFrame.document.forms[0].quienCierraSesion.value = "NORMAL";
       parent.parent.location = "ScontrolFlujo?ps_cierraSession=S";
       parent.topFrame.document.getElementById("LOGOUT").innerHTML      = "";
       parent.topFrame.document.getElementById("idLabelUser").innerHTML = "";
       parent.topFrame.document.getElementById("idUser").innerHTML      = "";
       parent.topFrame.document.getElementById("imgAbrirMnu").style.visibility = "hidden";
    }		
}   

/************************************************************************************************/
/************************************************************************************************/
/************************************************************************************************/
var theTable;
var theTableBody;

var theTable=new Array(100);     // Inactivo
var theTableBody=new Array(200); // Activo
// init(): Inicializa los TBODYs exixtentes en un documento, al cual en su Estructura se encuentra definido un detalle 
function initTableDoc() {
   for (ni_cols=2;ni_cols<pni_columnas+2;ni_cols++){
        var s_id = "myTABLE"+ni_cols;
        theTableBody[ni_cols] = document.getElementById(s_id).tBodies[0];
   }
}
/** Cambia el color de los items por fila del TBODY del detalle del documento */
function cambiaColorItems(id,accion,s_colorOriginal){
	          if (accion == "A"){
                 document.getElementById(id).style.backgroundImage = "url(../imgs/barra-arriba-fecha-gris-fondo-a.gif)";
             }else if (accion == "O"){
                 document.getElementById(id).style.background=s_colorOriginal; //"none";	
		        }	
          }

/** Cambia el color de los items por fila del TBODY del detalle del documento */
function cambiaColorItemsImp(ps_id,ps_accion,ps_color){
            var s_colorA = "#FFFF99";
            var s_colorO = "#FFFFCC";
            if (ps_color=="W"){ s_colorO = "#FFFFFF"; s_colorA = "#EEEEEE"; }
	          if (ps_accion == "A"){
                 document.getElementById(ps_id).style.background = s_colorA;
             }else if (ps_accion == "O"){
                 document.getElementById(ps_id).style.background = s_colorO;	
		        }	
          }

// funci�n que verifica si los check's se encuentran vacios y al menos uno este chequeado
function verificaCheck(ps_msgSel){
  var s_band = "0";
  
    var objInput = document.getElementsByName("chk_codCombinacion");
    for (k=0;k<objInput.length;k++){
        var id = objInput[k].id;
        if (document.getElementById(id).checked){
            s_band = "1";
            break;
         }        
     }  

   if (s_band=="0"){
      alert(ps_msgSel);
      return false;
    }else if (s_band=="1"){
           return true;
   } 
}


function setHiddenSecCampo(ps_idCampo,ps_secCampo,ps_descSecCampo){
   // alert(ps_descSecCampo);
    var strTMP = "";   
    output  ="<input name='sec_"+ps_idCampo+"' type='hidden' id='sec_"+ps_idCampo+"' value="+ps_secCampo+">";  
    output3 ="<input name='des_"+ps_idCampo+"' type='hidden' id='des_"+ps_idCampo+"' value="+ps_descSecCampo+">";  
    strTMP = document.getElementById("Ly_Eliminados").innerHTML;
    strTMP = strTMP + output + output3 ;
    document.getElementById("Ly_Eliminados").innerHTML=strTMP;     
}


function trim(inputString) {
   // Removes leading and trailing spaces from the passed string. Also removes
   // consecutive spaces and replaces it with one space. If something besides
   // a string is passed in (null, custom object, etc.) then return the input.
   if (typeof inputString != "string") { return inputString; }
   var retValue = inputString;
   var ch = retValue.substring(0, 1);
   while (ch == " ") { // Check for spaces at the beginning of the string
      retValue = retValue.substring(1, retValue.length);
      ch = retValue.substring(0, 1);
   }
   ch = retValue.substring(retValue.length-1, retValue.length);
   while (ch == " ") { // Check for spaces at the end of the string
      retValue = retValue.substring(0, retValue.length-1);
      ch = retValue.substring(retValue.length-1, retValue.length);
   }
   while (retValue.indexOf("  ") != -1) { // Note that there are two spaces in the string - look for multiple spaces within the string
      retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ")+1, retValue.length); // Again, there are two spaces in each of the strings
   }
   return retValue; // Return the trimmed string back to the user
} // Ends the "trim" function
/************************************************************************************************/
/************************************************************************************************/

/************************************************************************************************/

/************************************************************************************************/

function click(e) {
if (document.all) {
if (event.button == 2) {
alert(message);
return false;}}
if (document.layers) {
if (e.which == 3) {
alert(message);
return false;}}}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);}


/************************************************************************************************/
//Funcion que recupera los par�metros de la p�gina y verifica su contenido, para poder realizar una consulta especif�ca
  function vacios(event,valor,adicional,extra,claseejecutar,metodoejecutar,clasecontenedor,cod_compuesto){
     //adicional.focus();
     //alert("Inicia"+adicional);
	 var key = getKeyCode(event);
     if (key == 13 && valor!= ""){
        var ni_cont=0;
        var s_arreglo = cod_compuesto.split("@");
        var s_contenido_arreglo =""; 
        //alert("INGRESO");
		    if(s_arreglo.length >1){
			     for (var ni_i=1;s_arreglo.length > ni_i;ni_i++){
		           var s_cadenaValida = s_arreglo[ni_i]; 
               //alert('parent.'+s_cadenaValida+'.value');
               if(eval('parent.'+s_cadenaValida+'.value')== ""){
			           ni_cont++;    
			          }else{
                  s_contenido_arreglo+= "@"+eval('parent.'+s_cadenaValida+'.value');
                }
			       }
	         if(ni_cont>0){
		          return false; 
		        } else {
			        s_contenido_arreglo = s_contenido_arreglo.substring(s_contenido_arreglo.indexOf("@")+1); 
		          valor+="@"+s_contenido_arreglo;
		        } 	   
         }
        //alert(valor);
       enterSub(event,valor,adicional,extra,claseejecutar,metodoejecutar,clasecontenedor);
	     return true;
	   }
   }

function vaciosDiv(event,valor,adicional,extra,claseejecutar,metodoejecutar,clasecontenedor,cod_compuesto){
     //adicional.focus();
     //alert("Inicia"+adicional);
	 var key = getKeyCode(event);
     if (key == 13 && valor!= ""){
        var ni_cont=0;
        var s_arreglo = cod_compuesto.split("@");
        var s_contenido_arreglo =""; 
        //alert("INGRESO");
		    if(s_arreglo.length >1){
			     for (var ni_i=1;s_arreglo.length > ni_i;ni_i++){
		           var s_cadenaValida = s_arreglo[ni_i]; 
               //alert('parent.'+s_cadenaValida+'.value');
               if(eval(s_cadenaValida+'.value')== ""){
			           ni_cont++;    
			          }else{
                  s_contenido_arreglo+= "@"+eval(s_cadenaValida+'.value');
                }
			       }
	         if(ni_cont>0){
		          return false; 
		        } else {
			        s_contenido_arreglo = s_contenido_arreglo.substring(s_contenido_arreglo.indexOf("@")+1); 
		          valor+="@"+s_contenido_arreglo;
		        } 	   
         }
        //alert(valor);
       enterSubDiv(event,valor,adicional,extra,claseejecutar,metodoejecutar,clasecontenedor);
	     return true;
	   }
   }
/**********************************************************************/    

//Funcion que retorna los datos asociados a un codigo Determinado mediante la accion del ENTER, Version Parametrizada
 function enterSub(event,ourvalue,ourtext,ourextra,claseejecutar,metodoejecutar,clasecontenedor) 
  {
	 var key = getKeyCode(event);
      if (key == 13){
         parent.oculto.retorna(ourvalue,ourtext,ourextra,claseejecutar,metodoejecutar,clasecontenedor);
        }
      return true;   
  }

function enterSubDiv(event,ourvalue,ourtext,ourextra,claseejecutar,metodoejecutar,clasecontenedor) 
  {
	 var key = getKeyCode(event);
      if (key == 13){
         retornaDiv(ourvalue,ourtext,ourextra,claseejecutar,metodoejecutar,clasecontenedor);
        }
      return true;   
  }  
/**********************************************************************/    

//Funcion que recupera los par�metros de la p�gina y verifica su contenido, para poder realizar una consulta especif�ca
  
  function vaciosComb(event,valor,adicional,extra,claseejecutar,metodoejecutar,clasecontenedor,cod_compuesto,include){
	  var key = getKeyCode(event);
     if (key == 13 && valor!= ""){
        var ni_cont=0;
        var s_arreglo = cod_compuesto.split("@");
        var s_contenido_arreglo =""; 
		    if(s_arreglo.length >1){
			     for (var ni_i=1;s_arreglo.length > ni_i;ni_i++){
		           var s_cadenaValida = s_arreglo[ni_i]; 
               if(eval('parent.'+s_cadenaValida+'.value')== ""){
			           ni_cont++;    
			          }else{
                  s_contenido_arreglo+= "@"+eval('parent.'+s_cadenaValida+'.value');
                }
			       }
	         if(ni_cont>0){
		          return false; 
		        } else {
			        s_contenido_arreglo = s_contenido_arreglo.substring(s_contenido_arreglo.indexOf("@")+1); 
		          valor+="@"+s_contenido_arreglo;
		        } 	   
         }
    //  alert(valor);
       enterSubComb(event,valor,adicional,extra,claseejecutar,metodoejecutar,clasecontenedor,include);
	     return true;
	   }
   }
//Funcion que retorna los datos asociados a un codigo Determinado mediante la accion del ENTER, Version Parametrizada
 function enterSubComb(event,ourvalue,ourtext,ourextra,claseejecutar,metodoejecutar,clasecontenedor,include) 
  {
	 var key = getKeyCode(event);
      if (key == 13){
         parent.oculto.retorna(ourvalue,ourtext,include,ourextra,claseejecutar,metodoejecutar,clasecontenedor);
        }
      return true;   
  }




/***********************************/
var vecesDocumento = 0;
function consultaDocumento(ps_nroDocumento,ps_objNroDocumento,ps_include){ 
   var cadena = "../dcto/nacc_dcto_procesoEnter.jsp?task=REALIZA&code="+ps_nroDocumento+"&target="+ps_objNroDocumento+"&ps_include="+ps_include+"&hd_p_TIPOTRANSACCION=DOCUMENTO";
   parent.oculto.location.href = cadena;
}


function capturarTeclaFuncion(evt){
	var key = getKeyCode(evt);
	var l_respuesta=true;
	
	if (key == 114){ // F3
      l_respuesta=false;
	}else if (key == 115){ // F4
	  l_respuesta=false;		
	}else if (key == 116){ // F5
      l_respuesta=false;      
	}else if (key == 122){ // F11
      l_respuesta=false;      
	}      
	if (!l_respuesta){
		cancelEvent(evt);
	}	
      return;
   }

function cargaHistorialMnuTecGral(evt){
	var key = getKeyCode(evt);
	var l_respuesta=true;
	if (key == 114){ // F3
      l_respuesta=false;
      top.nscc_index_frameset.bottomFrame.document.getElementById("frameZZ").cols = "*,100%";
	}else if (key == 115){ // F4
	  l_respuesta=false;		
	  top.nscc_index_frameset.bottomFrame.document.getElementById("frameZZ").cols = "220,*";
	}else if (key == 116){ // F5
      l_respuesta=false;      
	}else if (key == 122){ // F11
      l_respuesta=false;      
	}      
	if (!l_respuesta){
		cancelEvent(evt);
	}
  return;  
}

function cargaHistorialMnuTecGralDiv(evt){
	var key = getKeyCode(evt);
	var l_respuesta=true;
	if (key == 114){ // F3
      l_respuesta=false;
	  document.getElementById("izquierda").style.width="0%";
	  document.getElementById("framePA").style.width="100%";
	}else if (key == 115){ // F4
	  l_respuesta=false;		
	  var leftWidth = 220;
      document.getElementById("izquierda").style.width = leftWidth + "px";
      var remainingWidth = window.innerWidth - leftWidth;
      document.getElementById("framePA").style.width = remainingWidth + "px";
	}else if (key == 116){ // F5
      l_respuesta=false;      
	}else if (key == 122){ // F11
      l_respuesta=false;      
	}      
	if (!l_respuesta){
		cancelEvent(evt);
	}
  return;  
}

/**********************************************************************/    

// Function que cambia de color los links
  function swapText(ps_valId,ps_accion,ps_background){
      if (ps_accion=="O"){
	       document.getElementById(ps_valId).style.background = ps_background;
	       document.getElementById(ps_valId).style.color      = "#0033FF";
	    }else if (ps_accion=="P"){
	       document.getElementById(ps_valId).style.background = ps_background;		      
	       document.getElementById(ps_valId).style.color      = "#000066";		      
	   }
	   return true;
  }



var theTable, theTableBody;

function initTablaDepreciacion() {
 theTable = document.getElementById("idTablaDepre");
 theTableBody = theTable.tBodies[0];
}

/////
//////////////
// Author: William Cargua Freire
function Comparar_Fecha(Obj1,Obj2) 
	{
	String1 = Obj1;
	String2 = Obj2;
	// Si los dias y los meses llegan con un valor menor que 10 
	// Se concatena un 0 a cada valor dentro del string 
	if (String1.substring(1,2)=="/") {
	String1="0"+String1;
	}
	if (String1.substring(4,5)=="/"){
	String1=String1.substring(0,3)+"0"+String1.substring(3,9);
	}
	
	if (String2.substring(1,2)=="/") {
	String2="0"+String2;
	}
	if (String2.substring(4,5)=="/"){
	String2=String2.substring(0,3)+"0"+String2.substring(3,9);
	}
	
	dia1=String1.substring(0,2);
	mes1=String1.substring(3,5);
	anyo1=String1.substring(6,10);
	dia2=String2.substring(0,2);
	mes2=String2.substring(3,5);
	anyo2=String2.substring(6,10);
	
	
	if (dia1 == "08") // parseInt("08") == 10 base octogonal
	dia1 = "8";
	if (dia1 == '09') // parseInt("09") == 11 base octogonal
	dia1 = "9";
	if (mes1 == "08") // parseInt("08") == 10 base octogonal
	mes1 = "8";
	if (mes1 == "09") // parseInt("09") == 11 base octogonal
	mes1 = "9";
	if (dia2 == "08") // parseInt("08") == 10 base octogonal
	dia2 = "8";
	if (dia2 == '09') // parseInt("09") == 11 base octogonal
	dia2 = "9";
	if (mes2 == "08") // parseInt("08") == 10 base octogonal
	mes2 = "8";
	if (mes2 == "09") // parseInt("09") == 11 base octogonal
	mes2 = "9";
	
	dia1=parseInt(dia1);
	dia2=parseInt(dia2);
	mes1=parseInt(mes1);
	mes2=parseInt(mes2);
	anyo1=parseInt(anyo1);
	anyo2=parseInt(anyo2);
	
	if (anyo1>anyo2)
	{
		return false;
	}
	
	if ((anyo1==anyo2) && (mes1>mes2))
	{
		return false;
	}
	if ((anyo1==anyo2) && (mes1==mes2) && (dia1>dia2))
	{
		return false;
	} 

	return true;
}

function validaFechaValidez(){
    formObj = document.frm_documento;
    if (arguments[0]==null) return false;
    if (arguments[1]==null) return false;
    if (arguments[0].value != "" && arguments[1].value != "" ) {
    	if (  $('input[name="idPaisLice"]').val()  ){
	    	if ( $('input[name="idPaisLice"]').val() == "COL" ){
	    		var bandCondicion = 1;
	    		if (arguments[2] != null){
	    			bandCondicion = arguments[2];
	    		}
    			if (!Comparar_Fecha(arguments[1].value, arguments[0].value)){ 
				setTimeout(function(){ 
						arguments[0].select();
						arguments[0].focus(); 
						}, 0 ,arguments[0]);
			        if (bandCondicion == 1){
			        	alert(pg_msgFechaSugerida); //"La fecha de emision resolucion de SRI no debe ser mayor que la fecha de emisi�n del documento.");		  							  
						if (eval('document.getElementById("'+arguments[0].id+'")' )) 
								setTimeout(function(){ 
								eval('document.getElementById("'+arguments[0]+'").focus()');
							}, 0 , arguments[0].id);
			        }else{
			        	if (bandCondicion == 2){
			        		alert(pg_msgFechaValRes);
							if (eval('document.getElementById("'+arguments[1].id+'")' )) 
								setTimeout(function(){ 
								eval('document.getElementById("'+arguments[0]+'").focus()');
							}, 0 , arguments[1].id);
			        		
			        	}
			        }
			        return false;	
			    }// END IF DE RESULTADO DE LA FUNCION DE COMPARACION DE FECHAS
	    		
	    	}else{
				if (!Comparar_Fecha(arguments[1].value,arguments[0].value)){ // pg_msgFechaValSRI esta variable funciona cuando ya este generado todas las plantillas de nuevo
					alert(pg_msgFechaValSRI); //"La fecha de validez de SRI no debe ser menor que la fecha de emisi�n del documento.");
					 document.getElementById("fechaSugeridaPago").value = "";
					setTimeout(function(){ 
						if (eval('document.getElementById("'+arguments[0].id+'")' )) eval('document.getElementById("'+arguments[0].id+'").focus()');
					}, 0 , arguments[0]);  
					return false;
				}// END IF DE RESULTADO DE LA FUNCION DE COMPARACION DE FECHAS
				
    	}// END IF DE SI EXISTEN LAS DOS FECHAS A COMPARAR
		if (arguments[0].value != "" && arguments[1].value == "" ) {
			arguments[0].value = "";
			alert(pg_mensajeFemision);
			setTimeout(function(){ 
				if (eval('document.getElementById("'+arguments[0]+'")' )) eval('document.getElementById("'+arguments[0]+'").focus()');
			}, 0 , arguments[1].id);                
			return false;
		}
        return true;
    }

	}
 }
 

// Author: William Cargua Freire
function validaFechaVencimiento(){
    formObj = document.frm_documento;
    if (arguments[0]==null) return;
    if (arguments[1]==null) return;
    if (arguments[0].value != "" && arguments[1].value != "" ) {
       if (!Comparar_Fecha(arguments[1].value,arguments[0].value)){ // pg_msgFechaValSRI esta variable funciona cuando ya este generado todas las plantillas de nuevo
			alert(pg_msgFechaVencimiento); //"La fecha de vencimiento no debe ser menor que la fecha de emision del documento.");
			document.getElementById("fechaVencimiento").value = "";
			setTimeout(function(){ 
						arguments[0].select();//.value = "";
						arguments[0].focus();						 
						}, 0,arguments[0] ); 
           return;
       }// END IF DE RESULTADO DE LA FUNCION DE COMPARACION DE FECHAS
    }// END IF DE SI EXISTEN LAS DOS FECHAS A COMPARAR
    if (arguments[0].value != "" && arguments[1].value == "" ) {
        setTimeout(function(){ 
						arguments[0].select();//.value = "";
						arguments[0].focus();						 
						}, 0,arguments[0] );
        alert(pg_mensajeFemision);
        return;
     }
   return true;
 }

var pg_contaClick = 0;
function ocultaCarrusel(form,ps_msgVer,ps_msgOcu) {
	var oneRow, newCell, rank;
	if (pg_contaClick == 0){
	     if (theTable.tHead) {
	        theTable.tHead.rows[1].cells[8].style.display = "";
	        theTable.tHead.rows[1].cells[9].style.display = "";
	        theTable.tHead.rows[1].cells[10].style.display = "";
	        theTable.tHead.rows[1].cells[11].style.display = "";
	        theTable.tHead.rows[1].cells[12].style.display = "";
	        theTable.tHead.rows[1].cells[13].style.display = "";
	        theTable.tHead.rows[1].cells[14].style.display = "";
	        theTable.tHead.rows[1].cells[15].style.display = "";
	        theTable.tHead.rows[1].cells[16].style.display = "";
	        theTable.tHead.rows[1].cells[17].style.display = "";
	        theTable.tHead.rows[1].cells[18].style.display = "";
	
	        theTable.tHead.rows[0].cells[14].style.display = "";
	        theTable.tHead.rows[0].cells[15].style.display = "";
	      }
	      
	     for (var i = 0; i < theTableBody.rows.length; i++) {
	         if (theTableBody.rows[i].cells[20]) theTableBody.rows[i].cells[20].style.display = "";
	         if (theTableBody.rows[i].cells[21]) theTableBody.rows[i].cells[21].style.display = "";
	         if (theTableBody.rows[i].cells[22]) theTableBody.rows[i].cells[22].style.display = "";
	         if (theTableBody.rows[i].cells[23]) theTableBody.rows[i].cells[23].style.display = "";
	         if (theTableBody.rows[i].cells[24]) theTableBody.rows[i].cells[24].style.display = "";
	         if (theTableBody.rows[i].cells[25]) theTableBody.rows[i].cells[25].style.display = "";
	         if (theTableBody.rows[i].cells[26]) theTableBody.rows[i].cells[26].style.display = "";
	         if (theTableBody.rows[i].cells[27]) theTableBody.rows[i].cells[27].style.display = "";
	         if (theTableBody.rows[i].cells[28]) theTableBody.rows[i].cells[28].style.display = "";
	         if (theTableBody.rows[i].cells[29]) theTableBody.rows[i].cells[29].style.display = "";
	         if (theTableBody.rows[i].cells[30]) theTableBody.rows[i].cells[30].style.display = "";
	         if (theTableBody.rows[i].cells[31]) theTableBody.rows[i].cells[31].style.display = "";
	      } 
	     pg_contaClick = 1; 
	     document.getElementById("idBtnCarrusel").innerHTML = "<B>"+ps_msgOcu+"</B>";
	     document.getElementById("idTablaDepre").width = "96%";
	  }else if (pg_contaClick == 1){
	     if (theTable.tHead) {
	        theTable.tHead.rows[1].cells[8].style.display = "none";
	        theTable.tHead.rows[1].cells[9].style.display = "none";
	        theTable.tHead.rows[1].cells[10].style.display = "none";
	        theTable.tHead.rows[1].cells[11].style.display = "none";
	        theTable.tHead.rows[1].cells[12].style.display = "none";
	        theTable.tHead.rows[1].cells[13].style.display = "none";
	        theTable.tHead.rows[1].cells[14].style.display = "none";
	        theTable.tHead.rows[1].cells[15].style.display = "none";
	        theTable.tHead.rows[1].cells[16].style.display = "none";
	        theTable.tHead.rows[1].cells[17].style.display = "none";
	        theTable.tHead.rows[1].cells[18].style.display = "none";
	
	        theTable.tHead.rows[0].cells[14].style.display = "none";
	        theTable.tHead.rows[0].cells[15].style.display = "none";
	      }
	     for (var i = 0; i < theTableBody.rows.length; i++) {
	         if (theTableBody.rows[i].cells[20]) theTableBody.rows[i].cells[20].style.display = "none";
	         if (theTableBody.rows[i].cells[21]) theTableBody.rows[i].cells[21].style.display = "none";
	         if (theTableBody.rows[i].cells[22]) theTableBody.rows[i].cells[22].style.display = "none";
	         if (theTableBody.rows[i].cells[23]) theTableBody.rows[i].cells[23].style.display = "none";
	         if (theTableBody.rows[i].cells[24]) theTableBody.rows[i].cells[24].style.display = "none";
	         if (theTableBody.rows[i].cells[25]) theTableBody.rows[i].cells[25].style.display = "none";
	         if (theTableBody.rows[i].cells[26]) theTableBody.rows[i].cells[26].style.display = "none";
	         if (theTableBody.rows[i].cells[27]) theTableBody.rows[i].cells[27].style.display = "none";
	         if (theTableBody.rows[i].cells[28]) theTableBody.rows[i].cells[28].style.display = "none";
	         if (theTableBody.rows[i].cells[29]) theTableBody.rows[i].cells[29].style.display = "none";
	         if (theTableBody.rows[i].cells[30]) theTableBody.rows[i].cells[30].style.display = "none";
	         if (theTableBody.rows[i].cells[31]) theTableBody.rows[i].cells[31].style.display = "none";
	      }
	     pg_contaClick = 0; 
	     document.getElementById("idBtnCarrusel").innerHTML = "<B>"+ps_msgVer+"</B>";
	     document.getElementById("idTablaDepre").width = "80%";
	 }
}

//Funcion que le da formato a un numero consultado
function formatConsulta(){ 
 if (arguments[0]==null) return;
 if (arguments[1]==null) return;
 if (arguments[2]==null) return;
 
 var numero = new oNumero(arguments[0]); 
 var nroFormateado = numero.formato(arguments[1], arguments[2]);
 return nroFormateado;
}

// Funciones para la mascara de entrada de un text

//Objeto oNumero
function oNumero(numero)
	{  
	//Propiedades 
	this.valor = numero || 0;
	this.dec = -1;
	//M�todos 
	this.formato = numFormat;
	this.ponValor = ponValor;
	//Definici�n de los m�todos 
	function ponValor(cad)
	{
		if (cad =='-' || cad=='+') return
		if (cad.length ==0) return
		if (cad.indexOf('.') >=0)
		    this.valor = parseFloat(cad);
		else 
		    this.valor = parseInt(cad);
	} 
	
	function numFormat(dec, miles)
		{
		var num = this.valor, signo=3, expr;
		var cad = ""+this.valor;
		var ceros = "", pos, pdec, i;

		pos = cad.indexOf('.');
		if (pos < 0)
		    cad = retornaFormatoDecimales(cad, dec);
		else
		    {
		    pdec = cad.length - pos -1;
		    if (pdec <= dec && dec !=0)
		        {
		    	cad = retornaFormatoDecimales(cad, dec);
		        }else{
		        cad = new String(roundNumber(num, dec));
		        }
		    }

		if (cad.substr(0,1)=='-' || cad.substr(0,1) == '+') 
		       signo = 4;
		if (miles)
		    do{
		        expr = /([+-]?\d)(\d{3}[\.\,]\d*)/;
		        cad.match(expr);
		        cad=cad.replace(expr, RegExp.$1+','+RegExp.$2);
		    } while (cad.indexOf(',') > signo);
		
		    if (dec<0) cad = cad.replace(/\./,'');
		        return cad;
	}
}//Fin del objeto oNumero:


// FUNCION QUE QUITA LAS COMAS SEPARADORAS DE MILES EN UNA CANTIDAD STRING FORMATEADA (###,###,###,00)
function limpiarComas(valor){
	/*
	while(valor.indexOf(",")!=-1){
		valor = valor.replace(",","");
		
	}*/
	return valor.replace(/\,/g,'');
}    


//coloca un numero en un formato indicado
function formatoNumero (formato,separador,id){
		var contar = 0;
		var result = "";
		var indice = 0;
		var numero = document.getElementById(id).value;
		var separa = "";
		var OutString = "";
		if (trim(numero)!=""){
			for (m=0;m<numero.length;m++){
				separa1 = numero.charAt(m);
				separa += separa1.replace(separador,"");
			}
			for (var i=0;i<formato.length-1;i++){
				result = formato.charAt(i);
				if (result != separador){
					contar++;
				}else{
					cadena = separa.substring (indice,contar);
					indice = contar;
					OutString += cadena+"-";
				}
			}
			OutString += separa.substring (indice, separa.length);
			document.getElementById(id).value = OutString;
		}
}


function validaLetrasSinEspacio(evt) {
    keynum = evt.keyCode || evt.which;
  
	if ((keynum < 97 || keynum > 122)//letras mayusculas
        && (keynum < 65 || keynum > 90) //letras minusculas
        && (keynum != 241) //ñ
         && (keynum != 209) //Ñ
        ){
            return false;
		}
}


function esNumeroValido(evt) {
    keynum = evt.keyCode || evt.which;
  
	if ((keynum < 48 || keynum > 57)//Numeros
        ){
    	cancelEvent(evt);
		}
    return;
}


function esCaracterValido(evt) {
    keynum = evt.keyCode || evt.which;
    
    if ((keynum < 97 || keynum > 122)//letras mayusculas
            && (keynum < 65 || keynum > 90) //letras minusculas
            && (keynum != 45) //retroceso
            && (keynum != 241) //ñ
            && (keynum != 209) //Ñ
             && (keynum < 48 || keynum > 57) //Numeros
            ){
    	       cancelEvent(evt);
    		}
     return;
}

//  AGRANDA TOTALMENTE EL FRAME HACIA LA IZQUIERDA O DERECHA EN LOS FRAMES DE CODIFICACION

// VARIABLES GLOBALES PARA MANEJAR EL TAMA�O DE LOS FRAMES DE CODIFICACION
var columnaIzq = 98;
var columnaDer = 2;
var timer;

var bndDer = false;
var bndIzq = false;

// Funci�n que sirve para la navegaci�n en los frames "avance por segundo" de la parte de codificaci�n del Documento
var ni_incDec = 1; // SIEMPRE DEBE TENER "1" COMO CONTENIDO
function startResizing(direction) {
    manageFrameCodificaDiv(direction);
    timer = setInterval(function () {
        manageFrameCodificaDiv(direction);
    }, 40);
}

function stopResizing() {
    clearInterval(timer);
}


function manageFrameCodificaDiv(direction) {
    if (!direction) return;

    switch (direction) {
        case "D":
            if (columnaIzq > 0 && columnaIzq <= 99 || bndIzq == true) {
                bndIzq = false;
                columnaIzq = columnaIzq - ni_incDec;
                columnaDer = columnaDer + ni_incDec;
                if(document.getElementById("fms_bodyConsulta")){ 
					document.getElementById("fms_bodyConsulta").style.height = columnaDer + "%";
               		document.getElementById("fms_bodyConsulta").style.top =  columnaIzq + "%";
               		document.getElementById("fms_cabeceraCriterioConsulta").style.height = "100%";
                }else{
	        	document.getElementById("framePA").style.width = columnaIzq + "%";
                $("#frameCO #framePR").last().css("left", columnaIzq + "%");
                $("#frameCO #framePR").last().css("width", columnaDer + "%");
	            }  
            } else {
                bndDer = true;
                if (columnaIzq == 0) {
                    break;
                }
                columnaDer = columnaDer - ni_incDec;
            }
            break;
        case "I":
            if (columnaDer > 0 && columnaDer <= 99 || bndDer == true) {
                bndDer = false;
                columnaDer = columnaDer - ni_incDec;
                columnaIzq = columnaIzq + ni_incDec;
                if(document.getElementById("fms_bodyConsulta")){
                	document.getElementById("fms_bodyConsulta").style.height = columnaDer + "%";
                	document.getElementById("fms_bodyConsulta").style.top =  columnaIzq + "%";
                	document.getElementById("fms_cabeceraCriterioConsulta").style.height = "100%";
                }else{
					document.getElementById("framePA").style.width = columnaIzq + "%";
                	$("#frameCO #framePR").last().css("left", columnaIzq + "%");
                	$("#frameCO #framePR").last().css("width", columnaDer + "%");
             }
            } else {
                bndIzq = true;
                if (columnaDer == 0) {
                    break;
                }
                columnaIzq = columnaIzq - ni_incDec;
            }
            break;
    }
}


function manageFrameCodificaFlashDiv(direction) {
    if (!direction) return;
    switch (direction) {
        case "D":
			if(document.getElementById("fms_bodyConsulta")){
            	document.getElementById("fms_cabeceraCriterioConsulta").style.height = "99%";
        		document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
        		document.getElementById("fms_bodyConsulta").style.height = "1%";
        		document.getElementById("fms_bodyConsulta").style.top = "0%";
        		document.getElementById("oculto").style.height = "0%";
            }else{
        		document.getElementById("framePA").style.width = "99%";
            	$("#frameCO #framePR").last().css("left", "99%");
            	$("#frameCO #framePR").last().css("width", "1%");
        	} 
            columnaIzq = 99;
            columnaDer = 1;
            break;
        case "I":
			if(document.getElementById("fms_bodyConsulta")){
				document.getElementById("fms_cabeceraCriterioConsulta").style.height = "1%";
        		document.getElementById("fms_bodyCriterioDOWN").style.height = "0%";
        		document.getElementById("fms_bodyConsulta").style.height = "99%";
        		document.getElementById("fms_bodyConsulta").style.top = "0%";
        		document.getElementById("oculto").style.height = "0%";  
	        }else{
       	        document.getElementById("framePA").style.width = "1%";
       	        $("#frameCO #framePR").last().css("left", "1%");
       	        $("#frameCO #framePR").last().css("width", "99%");
	       	}
            columnaIzq = 1;
            columnaDer = 99;
            break;
    }
}


function manageFrameCodifica(){
    if (arguments[0]==null) return;
    
    switch(arguments[0]){
          case "I": 
          if ( columnaIzq > 0 && columnaIzq <= 99 || bndIzq==true ){ 
             bndIzq = false;
             columnaIzq = columnaIzq - ni_incDec;
             columnaDer = columnaDer + ni_incDec;
	          if(parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("frameCO")){ 
	              parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("frameCO").cols = columnaIzq+"%,"+columnaDer+"%";
	          }else{
	        	 parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("framePA").rows = columnaIzq+"%,0%,"+columnaDer+"%,*";
	          }   
             timer = window.setTimeout("manageFrameCodifica('I');", 40);
          }else{
               bndDer = true;
               if (columnaIzq == 0){                  
                  break;
               }               
               columnaDer = columnaDer - ni_incDec; 
               window.clearTimeout(timer);
          }
          break;
          case "D": 
          if ( columnaDer > 0 && columnaDer <= 99 || bndDer==true ){
             bndDer = false;          
             columnaDer = columnaDer - ni_incDec;
             columnaIzq = columnaIzq + ni_incDec;
             if(parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("frameCO")){ 
                parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("frameCO").cols = columnaIzq+"%,"+columnaDer+"%";
             }else{
            	parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("framePA").rows = columnaIzq+"%,0%,"+columnaDer+"%,*"; 
             }  
             timer = window.setTimeout("manageFrameCodifica('D');", 40);
          }else{
               bndIzq = true;
               if (columnaDer == 0){                  
                  break;
               }
               columnaIzq = columnaIzq - ni_incDec; 
               window.clearTimeout(timer);               
          }
          break;
    } 
    
}

function manageFrameCodificaFlash(){
    if (arguments[0]==null) return;
    switch(arguments[0]){
          case "D": 
        	if(parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("frameCO")){
                  parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("frameCO").cols = "99%,1%";
        	}else{
        		  parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("framePA").rows = "99%,0%,1%,*";   
        	} 
            columnaIzq = 99;
            columnaDer = 1;
            break;
          case "I":  
             if(parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("frameCO")){
	              parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("frameCO").cols = "1%,99%";
	       	 }else{
	       		parent.parent.frames[2].parent.frames[1].frames[1].document.getElementById("framePA").rows = "1%,0%,99%,*";         
	       	 }
          columnaIzq = 1;
          columnaDer = 99;
          break;
      }
}

// Funci�n que muestra los botones de navegacion del
// "Frame que contiene las pantallas del m�dulo documentos"
// Nota: Esta funci�n se ejecuta por el evento "onLoad" de una p�gina
function getNavLoadPagCod(ps_fase,ps_consulta){
     if (ps_fase == "2" || ps_fase == "3"){
         if (parent.parent.parent.parent.frames[0].name == "topFrame"){ //Flujo de Documento
	        if (parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod"))
	             parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = "";
	        parent.parent.parent.frames[1].frames[0].columnaIzq = 98;
	        parent.parent.parent.frames[1].frames[0].columnaDer = 2;
	      }
      }
     
     if (ps_fase == "4"){ 
         if (ps_consulta == "C"){
            if (parent.parent.parent.parent.frames[0].name == "topFrame"){ //Flujo de Documento
                 if (parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod"))
	                 parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = "";
	           parent.parent.parent.frames[1].frames[0].columnaIzq = 98;
	           parent.parent.parent.frames[1].frames[0].columnaDer = 2;                
	         }  
          }else{
             if (parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod"))
                 parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = "";
           parent.parent.parent.parent.frames[1].frames[0].columnaIzq = 98;
           parent.parent.parent.parent.frames[1].frames[0].columnaDer = 2;                 
         }
      }

     if (ps_fase == "5"){ 
         if (ps_consulta == "C"){
           if (parent.parent.parent.parent.frames[0].name == "topFrame"){ //Flujo de Documento
              if (parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod")){
                 parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = ""; 
                }
              parent.parent.parent.frames[1].frames[0].columnaIzq = 98;
              parent.parent.parent.frames[1].frames[0].columnaDer = 2;    
           }
         }
      }
      
} 

function getNavLoadPagCodDiv(ps_fase,ps_consulta){
     if (ps_fase == "2" || ps_fase == "3"){
         if (parent.parent.frames[0].name == "topFrame"){ //Flujo de Documento
	        if (document.getElementById("btnNavCod"))
	             document.getElementById("btnNavCod").style.display = "";
	        parent.parent.frames[1].frames[0].columnaIzq = 98;
	        parent.parent.frames[1].frames[0].columnaDer = 2;
	      }
      }
     
     if (ps_fase == "4"){ 
         if (ps_consulta == "C"){
            if (parent.parent.frames[0].name == "topFrame"){ //Flujo de Documento
                 if (document.getElementById("btnNavCod"))
	                 document.getElementById("btnNavCod").style.display = "";
	           parent.parent.frames[1].frames[0].columnaIzq = 98;
	           parent.parent.frames[1].frames[0].columnaDer = 2;                
	         }  
          }else{
             if (document.getElementById("btnNavCod"))
                 document.getElementById("btnNavCod").style.display = "";
           parent.parent.frames[1].frames[0].columnaIzq = 98;
           parent.parent.frames[1].frames[0].columnaDer = 2;                 
         }
      }

     if (ps_fase == "5"){ 
         if (ps_consulta == "C"){
           if (parent.parent.frames[0].name == "topFrame"){ //Flujo de Documento
              if (document.getElementById("btnNavCod")){
                 document.getElementById("btnNavCod").style.display = ""; 
                }
              parent.parent.frames[1].frames[0].columnaIzq = 98;
              parent.parent.frames[1].frames[0].columnaDer = 2;    
           }
         }
      }
      
} 


// Funci�n que esconde los botones de navegacion del
// "Frame que contiene las pantallas del m�dulo documentos"
// Nota: Esta funci�n se ejecuta por el evento "onUnload" de una p�gina
function setNavLoadPagCod(ps_fase,ps_consulta){
     if (ps_fase == "2"){ 
         if (parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod"))
             parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = "none";
      }
     if (ps_fase == "3"){
         if (parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod"))
             parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = "none";     
     }
     if (ps_fase == "2" || ps_fase =="3"){ 
        parent.parent.parent.parent.frames[1].frames[0].columnaIzq = 98;
        parent.parent.parent.parent.frames[1].frames[0].columnaDer = 2;             
     }
     if (ps_fase == "4"){ 
         if (ps_consulta == "C"){
             if (parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod"))
                 parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = "none";
           parent.parent.parent.parent.frames[1].frames[0].columnaIzq = 98;
           parent.parent.parent.parent.frames[1].frames[0].columnaDer = 2;                                 
          }else{
               if (parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod"))
                   parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = "none";
           parent.parent.parent.parent.frames[1].frames[0].columnaIzq = 98;
           parent.parent.parent.parent.frames[1].frames[0].columnaDer = 2;                                    
          }                   
      }
     if (ps_fase == "5"){ 
         if (ps_consulta == "C"){
             if (parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod"))
                 parent.parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = "none";
           parent.parent.parent.parent.frames[1].frames[0].columnaIzq = 98;
           parent.parent.parent.parent.frames[1].frames[0].columnaDer = 2;                
         }
      }      
} 

function setNavLoadPagCodDiv(ps_fase,ps_consulta){
     if (ps_fase == "2"){ 
         if (document.getElementById("btnNavCod"))
             document.getElementById("btnNavCod").style.display = "none";
      }
     if (ps_fase == "3"){
         if (document.getElementById("btnNavCod"))
             document.getElementById("btnNavCod").style.display = "none";     
     }
     if (ps_fase == "2" || ps_fase =="3"){ 
        parent.parent.frames[1].frames[0].columnaIzq = 98;
        parent.parent.frames[1].frames[0].columnaDer = 2;             
     }
     if (ps_fase == "4"){ 
         if (ps_consulta == "C"){
             if (document.getElementById("btnNavCod"))
                 document.getElementById("btnNavCod").style.display = "none";
           parent.parent.frames[1].frames[0].columnaIzq = 98;
           parent.parent.frames[1].frames[0].columnaDer = 2;                                 
          }else{
               if (document.getElementById("btnNavCod"))
                   document.getElementById("btnNavCod").style.display = "none";
           parent.parent.frames[1].frames[0].columnaIzq = 98;
           parent.parent.frames[1].frames[0].columnaDer = 2;                                    
          }                   
      }
     if (ps_fase == "5"){ 
         if (ps_consulta == "C"){
             if (document.getElementById("btnNavCod"))
                 document.getElementById("btnNavCod").style.display = "none";
           parent.parent.frames[1].frames[0].columnaIzq = 98;
           parent.parent.frames[1].frames[0].columnaDer = 2;                
         }
      }      
} 

/**************************************************************************/
      function validaCaracteresMail() {
    	var key = getKeyCode(event);  
        if (!(key>=64 && key<=90 || key>=97 && key<=122 || key==95 || key==46 || key>=48 && key<=57)){
        	cancelEvent(event);
        }
      }

/**************************************************************************/

  function SinComilla(event) {
	  var key = getKeyCode(event); 
	  if ( key==44 || key == 39 || key == 34 || key == 13 || key == 60 || key == 62){
    	  cancelEvent(event);
      }
  }
  
/**************************************************************************/
  //
  function ValidaCaracterersEspec(event) {
	  var key = getKeyCode(event); 
      if ( key==47 || key == 45 || key == 95 || key == 13 || key == 35 || key == 36 || key == 37 || key == 38 || key == 40 || key == 41 || key == 91){
    	  cancelEvent(event);
      }
  }
  /*no valida los caracterers '-','_'*/
  function ValidaCaracterersEspecExcep(event) {
	  var key = getKeyCode(event); 
      if ( key==47 || key == 13 || key == 35 || key == 36 || key == 37 || key == 38 || key == 40 || key == 41 || key == 91){
    	  cancelEvent(event);
      }
  }
  
/**************************************************************************/

// Funci�n que devuelve el valor absoluto de un n�mero
  function valorAbsoluto(value){
    if (!isNaN(new Number(value))==false ){
       alert("El valor no es num�rico");
       return 0;
    }    
    return Math.abs(value);    
  }
  
// Funci�n que valida si un Valor en n�mero devuelve "true" si es n�mero caso contario "false"  
  function isNum(value){
    return !isNaN(new Number(value));
  }

//funcion que permite dar el foco al campo especificado en ps_campo
 function nextCampo(event,ps_campo) 
  {
  	//	alert(event+"   "+key);
	  var key = getKeyCode(event);
	  if (key == 13){
		   eval('parent.'+ps_campo+'.focus()');
		}
  }
//funcion que permite dar el foco al campo especificado en ps_campo
 function nextCampoDiv(event,ps_campo) 
  {
  	//	alert(event+"   "+key);
	  var key = getKeyCode(event);
	  if (key == 13){
		   eval(ps_campo+'.focus()');
		}
  }   

 
 // Funcion para dar enfoque al objeto enviado
 function siguienteObjeto(event,campo1,campo2){
	 var key = getKeyCode(event); 
	if(key=="13"){
		focusObj(campo1,campo2);
	}
 }

 function focusObj(campo1,campo2){
	if (document.getElementById(campo1).value!=""){                // $("#"+campo1).val()
		if (document.getElementById(campo2))
			document.getElementById(campo2).focus();
	}else if ( document.getElementById(campo1).value=="" ){
		document.getElementById(campo1).focus();
	}
 }

//Valida la fecha ingresada de acuerdo al formato especificado
//el formato puede estar dado en cualquier orden 
//pero debe especificarse con las letras dd para dia, mm para mes y yyyy � yy para ano
//si el ano esta dado en yy solo validara del a�o 2000 al 2099 caso contrario del 1900 al 2099
    function fechas(idCaja, formato) {
	   caja = document.getElementById(idCaja).value;
	   if(formato == null || formato == ""){ formato = "dd/mm/yyyy";  }
	   maxLen = formato.length;

	   if ( caja.length != maxLen && caja!=""){
			setTimeout(function(){ 
		     document.getElementById(idCaja).select();
		    }, 0);
	   		return false;
	   }
	   
	   
	   formato = formato.toLowerCase();
	   var separador = "/";
	   //Se obtiene el separador
		var i = 0;
		for (i=0; i<maxLen; i++){	
		    var carac = formato.substr(i,1);
			if (((carac<"0") || (carac>"9")) && carac!="d" && carac!="m" && carac != "y"){
				separador = formato.substr(i,1);
				break;  
			}  
		}
	   //Se obtienen las posiciones de los separadores
	   var pos1 = formato.indexOf(separador);
	   var formatoAux = formato.substr(0,pos1);
	   formatoAux = formatoAux+formato.substr(pos1+1,formato.length);
	   var pos2 = formatoAux.indexOf(separador)+1;
	   
	   //Se obtiene las variables de dia mes y a�o para validar el formato
	   var lenAno = 4;
	   var posDia = formato.indexOf("dd");
	   var posMes = formato.indexOf("mm");
	   var posAno = formato.indexOf("yyyy");
	   if(posAno == -1){
	       posAno = formato.indexOf("yy");
		   lenAno = 2;
	   }
	   //Para horas minutos y segundos
	   
	   var posHor = formato.indexOf("hh");
	   var posMin = formato.indexOf("mi");
	   var posSeg = formato.indexOf("ss");
	   var posEsp = posHor - 1;
	   var posH2  = posHor + 2;
	   var posH3  = posHor + 5;
	   var errorFormato = false;
	   if(posDia == -1 || posMes == -1 || posAno == -1){
	   	   borrar = '';
		   alert("formato de fecha incorrecto");
		   errorFormato = true;
	   }
	   if (caja)
	   {  
		  borrar = caja;
		  if ((caja.substr(pos2,1) == separador) && (caja.substr(pos2,1) == separador) /*&& (caja.substr(posH2,1) == ":") && (caja.substr(posH3,1) == ":")*/)
		  {      
			 for (i=0; i<maxLen; i++)
			 {
				if (((caja.substr(i,1)<"0") || (caja.substr(i,1)>"9")) && (i != pos1) && (i != pos2) && (i != posH2) && (i != posH3) && (i != posEsp))
				{
				   borrar = '';//existen caracteres no validos en la fecha
				   break;  
				}  
			 }
			 if (borrar)
			 { 
				a = caja.substr(posAno,lenAno);
				m = caja.substr(posMes,2);
				d = caja.substr(posDia,2);
				hh = caja.substr(posHor,2);
				mi = caja.substr(posMin,2);
				ss = caja.substr(posSeg,2);
				//si solo hay dos numeros en el a�o se debe anteponer el 20 para que sea del 2000 en adelante
				if(lenAno == 2){//Soporta  formato yy de ano
					a = "20"+a;
				}
				if((a < 1900) || (a > 2099) || (m < 1) || (m > 12) || (d < 1) || (d > 31)){
				   //alert("dia mayor a 31 en meses de 31 dias");
				   borrar = '';//dia mayor a 31 en meses de 31 dias
				}else{
				   if((a%4 != 0) && (m == 2) && (d > 28)){
				      //alert("A�o no viciesto y es febrero y el dia es mayor a 28");
					  borrar = ''; // A�o no viciesto y es febrero y el dia es mayor a 28
				   }else{
					  if ((((m == 4) || (m == 6) || (m == 9) || (m==11)) && (d>30)) || ((m==2) && (d>29))){
					     //alert("dia mayor a 30 en meses de 30 dias y es viciesto y el dia es mayor 29");
						 borrar = '';//dia mayor a 30 en meses de 30 dias y es viciesto y el dia es mayor 29
					  }else{
						if(posHor!=-1  &&  hh>24){
								//alert("La hora no puede pasar de 24");
								borrar = '';
						}
						if(posMin!=-1  &&  mi>60){
								//alert("Los minutos no puede pasar de 60");
								borrar = '';
						}
						if(posSeg!=-1  &&  ss>60){
								//alert("Los segundos no puede pasar de 60");
								borrar = '';
						}
					  }
				   }  // else
				} // fin else
			 } // if (error)
		  } // if ((caja.substr(2,1) == \"/\") && (caja.substr(5,1) == \"/\"))			    			
		  else{
		     //alert("separadores invalidos");
		     borrar = '';//separadores invalidos
		  }
		  //alert("borrar "+borrar);
		  if (borrar == ''){
		     //if(errorFormato == false){
		    //	 cancelEvent(event);
			 //}
			 document.getElementById(idCaja).focus();
		     document.getElementById(idCaja).select();
		     //cancelEvent(event);
			 return false;
		  }
		  return true;
		  //eval('parent.'+ps_campo+'.focus()');
	   } // if (caja)   
	} // FUNCION 
	
	
	
//Da formato a la fecha dependiendo del formato especificado 	
	function formatoFecha(event,idFecha, formato){
		var key = getKeyCode(event);
		if(key == 13){
			fechas(idFecha, formato, true);
			event.returnValue = false;
			return false;
		}
		
	    if(formato == null || formato == ""){ formato = "dd/mm/yyyy"; }
		maxLen = formato.length;
		formato = formato.toLowerCase();
	    var separador = "/";
		//Se obtiene el separador
		var i = 0;
		for (i=0; i<10; i++){	
		    var carac = formato.substr(i,1);
			if (((carac<"0") || (carac>"9")) && carac!="d" && carac!="m" && carac != "y" && carFecha!="h" && carFecha!="i" && carFecha!="s"){
				separador = formato.substr(i,1);
				break;  
			}  
		}
		//////////////////////
	    var maxF = maxLen;
		fecha = document.getElementById(idFecha).value;
		if ( key==9 && fecha.length < maxF  ){
			document.getElementById(idFecha).select();			
			cancelEvent(event);
			return false;
		}
		
		if ( !esKeyCodeDesplazamiento(key) && !(key>=48 && key<=57) ){
			cancelEvent(event);
			return false;
		}
		
		if(!esKeyCodeDesplazamiento(key) && fecha.length == maxF && key!= 13 ){
			fechas(idFecha, formato, true);
			cancelEvent(event);
			return false;
		}
		
		if( (key>=48 && key<=57) && fecha.length < maxF ){
		    var lenFecha = fecha.length;
			var carFecha = formato.substr(lenFecha,1);
			if(carFecha!="d" && carFecha!="m" && carFecha!="y" && carFecha!="h" && carFecha!="i" && carFecha!="s"){
				document.getElementById(idFecha).value = document.getElementById(idFecha).value+formato.substr(lenFecha,1);
			}
		}
		return true;
	}

  



// funci�n que realiza la validaci�n de n�meros de c�dula
function ValidaCedula2(numced){
	if (document.all(numced).value.length==10) {   
		if ( (isNaN(document.all(numced).value)) || (document.all(numced).value=="") ){
			document.all(numced).value="";    
			return 0;
		};
		var pav_numced=document.all(numced).value;
	}else{
		if (isNaN(numced) || (numced=="") || (numced.length!=10)){ 
			return 0;    
		};
		var pav_numced=numced;
	};
	
	return ValidaRucPNaturales(pav_numced);
	
}

// FUNCION QUE CIERRA LA PANTALLA DE INGRESO DE PROVEEDORES DESDE DOCUMENTOS
 function cerrarVentanaProveedor(ps_paginaBlanco){
    var s_location = ps_paginaBlanco;
    parent.parent.document.getElementById("frameCO").cols = "100%,0%";
    parent.parent.document.getElementById("framePA").rows = "100%,0%,0%";    
    parent.parent.fms_bodyLeftUP.location   = s_location;
 }
 
// FUNCION QUE BLOQUEA CUALQUIER ACCION DE LA TECLA ENTER PRESIONADA EN CUALQUIER LUGAR DEL HTML 
 function bloqueaEnter(event){
	 var key = getKeyCode(event);
      if (key==13) {
    	  cancelEvent(event);
      }
 }


 // Funci�n que elimina un Objeto HTML de una p�gina HTML en funci�n de su propiedad NAME.
 function hideBtn(){
     if (arguments[0]==null) return;
     if (arguments[1]==null) return;      
     if (arguments[1]=='O'){
      }else if (arguments[1]=='P'){
    	  if (eval("document.getElemetById(\""+arguments[0].id+"\")")) eval("document.getElementById(\""+arguments[0].id+"\").style.display = 'none';");   
             if (eval('parent.fms_bodyCriterioBOTTOM.document.getElementById("'+arguments[0].id+'")')) eval('parent.fms_bodyCriterioBOTTOM.document.getElementById("'+arguments[0].id+'").style.display = "";');   
     }      
 } 
  
  
  
//Da formato de ingreso del n�mero de la factura
	function formatoNroFactura(event,idCampo){
		var key = getKeyCode(event); 
	  var formato = "xxx-xxx-xxxxxxxxx"; 
		maxLen = formato.length;	
		formato = formato.toLowerCase();
	    var separador = "-";
		//Se obtiene el separador
		var i = 0;
		for (i=0; i<10; i++){	
		    var carac = formato.substr(i,1);
			if (((carac<"0") || (carac>"9")) && carac!="x" ){
				separador = formato.substr(i,1);
				break;  
			}  
		}
		//////////////////////
	    var maxF = maxLen;
		campo = document.getElementById(idCampo).value;
		
		if((campo.length == maxF) && key != 13){
			cancelEvent(event);
			return;
		}
		if ( !(key>=48 && key<=57) ){
			cancelEvent(event);
			return;
		}
		if( (key>=48 && key<=57) && campo.length < maxF ){
		    var lenCampo = campo.length;
			var carCampo = formato.substr(lenCampo,1);
			if(carCampo!="x" ){
				document.getElementById(idCampo).value = document.getElementById(idCampo).value+formato.substr(lenCampo,1);
			}
		}      
		return;
	}

// ENCERA EL CAMPO QUE PIERDE EL FOCO Y NO TIENE VALOR
function encera(){
      if (arguments[0]==null) return;
      if (eval("document.getElementById(\""+arguments[0].id+"\")") ){
          if (arguments[0].value == ""){
              arguments[0].value = "0.00";  
          }
       }
}

//FUNCION UTILIZADA PARA BOTONES DE NAVEGACION
function botonNavegacion(){
  if (parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod"))
    parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = "";
}  

function botonNavegacionDiv(){
  if (document.getElementById("btnNavCod"))
    document.getElementById("btnNavCod").style.display = "";
}  

//FUNCION ESCONDE BOTON DE NAVEGACION
function botonNavegacionOculto(){
    if (parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod"))
             parent.parent.parent.frames[1].frames[0].document.getElementById("btnNavCod").style.display = "none";
} 

// FUNCION QUE EJECUTA UN ENTER POR LA EJECUCION CORRECTA DE UN ENTER SUPERIOR
function descripcionSecundaria(ps_idInput,ps_idInputSecundario){
 if (eval("document.getElementById(\""+ps_idInput+"\").value") != ""){
     ejecutaEventosObj('keypress',ps_idInputSecundario);
     window.clearTimeout(pg_timerDetaAux);
  }else{
    if (pg_valorEspera == 0){
       clearTimeout(pg_timerDetaAux);
     }else{
       pg_timerDetaAux = window.setTimeout("descripcionSecundaria('"+ps_idInput+"','"+ps_idInputSecundario+"');", 300);                                   
       pg_valorEspera = pg_valorEspera -1 ;
    }
 }
}


// Author: William Cargua Freire
// Objetivo Funci�n: Comparar dos fechas para identificar cual es la mayor 
//                   , y el mensaje de resultado es seteado desde fuera en
//                   una varible global
 function validaFechaMayor(){
    formObj = document.frm_documento;
    if (arguments[0]==null) return;
    if (arguments[1]==null) return;
    if (arguments[0].value != "" && arguments[1].value != "" ) {
       if (!Comparar_Fecha(arguments[1].value,arguments[0].value)){ // pg_msgFechaValSRI esta variable funciona cuando ya este generado todas las plantillas de nuevo
           arguments[0].value = "";
           alert(pg_msgFechaContable); //"La fecha de validez de SRI no debe ser menor que la fecha de emisi�n del documento.");
           if (eval('document.getElementById(\"'+arguments[0].id+'\")')) eval('document.getElementById(\"'+arguments[0].id+'\").focus()');
           return;
       }// END IF DE RESULTADO DE LA FUNCION DE COMPARACION DE FECHAS
    }// END IF DE SI EXISTEN LAS DOS FECHAS A COMPARAR
   //  window.event.returnValue = false;
   return true;
 }


//Funci�n que controla los valores de tipo caracter
function soloLetras(event){
	var key = getKeyCode(event);
	if ( !esKeyCodeDesplazamiento(key) &&
			!(key>=65 && key<=90 || key==46 || key>=97 && key<=122 || key==32 || key==95 || key==45  ||key==37 || key == 40 || key == 41)  ){
		cancelEvent(event);
	}
	return;
}


// formatea valores negativos
function NumberFormatNeg(event,obj,numDec)
{
  var key = getKeyCode(event);	 
  NUM_DECIMAL = numDec;
  l_neg = false;
  if (obj.value.substring(0,1)=="-"){
 	valorIngresado=obj.value.substring(1); 
  	l_neg=true;
  }else{
  	valorIngresado=obj.value;
  }
//  alert(valorIngresado);
  
  if ( (key>=30 && key<=40) ) {
	  cancelEvent(event);
        return;
  }
  //valida numero tenga decimales 
  if (valorIngresado.indexOf(".")!=-1){
	var dec=valorIngresado.substring(valorIngresado.indexOf(".")+1);
	if (dec.length > NUM_DECIMAL) {
		ent=valorIngresado.substring(0,valorIngresado.indexOf("."));
		dec=valorIngresado.substring(valorIngresado.indexOf("."));
		valorIngresado=ent+dec.substring(0,(dec.length)-1);
        }
  }

  // separa los enteros con los decimales
  var entero="";decimales=""; entero_comas="";
  if (valorIngresado.indexOf(".")==-1){
	entero=valorIngresado;
	decimales="";
  }else{
  	entero   =valorIngresado.substring(0,valorIngresado.indexOf("."));
        entero_comas = entero;
	decimales=valorIngresado.substring(valorIngresado.indexOf("."));
  }

  // quita las comas
  entero=entero.replace(',', '');
  var aux_entero=entero;
  var ind=0;
  while (aux_entero.indexOf(",")!=-1){
        aux_entero=aux_entero.replace(',', '');
  }
  entero=aux_entero;
  if (decimales.length==1 && key!=110){
	decimales="";
  }

  // agrega las comas 
  if (entero.length > 3) {
    var number="";
    var aux="";
    var i=0;
    var j=0;
    for (i=entero.length-3;i>0;i=i-3) {
	if (i>0){
  	   aux=","+entero.substring(i, i+3);
	   number=aux + number+"";
	}
	j=i;
    }
    if (i <= 0){ number=entero.substring(0,j)+number; }
    valorIngresado=number+decimales;
  }else{
     if (entero_comas.length>3){
	valorIngresado=entero+decimales;
     }else if (decimales.length<1){
     	valorIngresado=entero+decimales;
     }else if (entero.length==0 && decimales.length>1){
	valorIngresado="0"+decimales;
     }
  }

  if (l_neg==true){
	valorIngresado="-"+valorIngresado;
  }
  obj.value=valorIngresado;
  return;
}

//funcion utilizada para borrar campos del formulario
function borrarCampo()
{
	if (arguments[0] == null) return;
    for (var ni_ind=0; ni_ind<arguments.length; ni_ind++){
		  if ( eval("document.getElementById(\""+arguments[ni_ind]+"\")") ){ 
		     if ( eval("document.getElementById(\""+arguments[ni_ind]+"\").value") != "") {
		          eval("document.getElementById(\""+arguments[ni_ind]+"\").value = '' ");
		      } 
		  }
    }    
}


/*nueva funcion que recibe la cantidad de nuemeros decimales de precision que debe usar para el redondeo*/
function roundNumber(numero,decimales){
	if (numero==null || trim(numero)==""){
		return numero;
	}
	if(isNaN(numero)){
		return numero = "0.00";
	}
   var num = eval(numero);
	if(isNaN(decimales)){
		decimales = 2;
	}else if(decimales>0){
		decimales = Math.abs(parseInt(decimales)) || 2;
			numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');   // Expresion regular para numeros con un cierto numero de decimales o mas
	    if (numeroRegexp.test(num)) {         // Ya que el numero tiene el numero de decimales requeridos o mas, se realiza el redondeo
	        return Number(roundFixed(num,decimales));
	    } else {
	        return Number(roundFixed(num,decimales)) === 0 ? 0 : num;  // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado), si no lo es se devuelve el numero otra vez.
	    }
	}else if (decimales==0){
		var multiplier = Math.pow(10, decimales);
		var result= (Math.round(num * multiplier) / multiplier);

		if(decimales==0){
			result+=".00";
		}
	   return result;
	}else{
		return Number(num);
	}
}

/**METODO DE REDONDEO QUE FUNCIONA PARA CHROME Y PARA I.EXPLORES EDGE, NO FUNCIONA EN EXPLORER 20H2
function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}*/

function validaFechaPeriodoVigente(objFechaVig,objFechaEmi) { 
      if (objFechaVig==null) return;
      if (objFechaEmi==null) return;
      if (objFechaVig.value != "" && objFechaEmi.value != ""){
         var fechaVig= new Date( objFechaVig.value.substring(6,10) ,objFechaVig.value.substring(3,5) ,objFechaVig.value.substring(0,2)  );
         var fechaEmi= new Date(objFechaEmi.value.substring(6,10) ,objFechaEmi.value.substring(3,5) ,objFechaEmi.value.substring(0,2) );
         if (  fechaEmi < fechaVig ){
            alert("Fecha de emision no puede ser menor que el periodo actual vigente");
         }
      }
} 


///////////// FUNCIONES UTILIZADAS PARA EL MOVIMIENTO DE OBJETOS 
////////////  AUTOMATICO SEGUN EL DESPLAZAMIENTO DEL SCROLL BAR
function setVariables() {
//    if (navigator.appName == "Netscape") {
//      v=".top=";
//      dS="document.";
//      sD="";
//      y="window.pageYOffset";
//    }else {	
    	if(arguments.length>0){
    		 y="document.body.scrollTop+"+arguments[0];
    	}else{
    		 y="document.body.scrollTop+50";
    	}
       v=".pixelTop=";
       dS="";
       sD=".style";
      
//       }
}

 function checkLocation(objGrpBtn) {
      try{
		  object=objGrpBtn;
	      yy=eval(y);
	      
		  eval(dS+object+sD+v+yy);
		  setTimeout("checkLocation('"+objGrpBtn+"')",10);
      }catch(e){
    	  
      }
 }
///////////////////////////////////////////////////////

function limpiar_argumentos()
{
	if (arguments[0]==null) return false;
	
	if(arguments[0] == "ID")
	{
		for(var i = 1; i < arguments.length; i++)
		{
			if(arguments[i] != null)
			{
				document.getElementById(arguments[i]).value = "";
			}
		}
	}
	else
	{
		for(var i = 1; i < arguments.length; i++)
		{
			if(arguments[i] != null)
			{
				if(eval(arguments[0].name+"."+arguments[i]+".value"))
				{
					eval(arguments[0].name+"."+arguments[i]+".value = ''");
				}
			}
		}
	}
}

function CambiaColorLetra(id,accion){
      if (accion=="O"){
	       document.getElementById(id).style.color = "#5F9F9F";
	  }else{
		if (accion=="1"){
	       document.getElementById(id).style.color = "#184888";		      
	  }
      }
      return;
  }
  
  /**
  Creado por: Corporaci�n Sudamericana de Software 
  Fecha Creaci�n: 13/02/2006
  Version: 1.0
  Descripci�n: Funci�n para validar la fecha ingresada de acuerdo a un formato especificado. El formato puede estar dado en cualquier orden 
               pero debe de cumplir las especificaciones de las letras dd para dia, mm para mes y yyyy � yy para a�o. Si el a�o esta dado en yy 
			   solo se valida del a�o 2000 al 2099 caso contrario del 1900 al 2099.
			   Si no se ingresa el formato de la fecha se considera el default que es dd/mm/yyyy.
			   Anteriormente esta funci�n se llamaba fechas.
  Par�metros de Entrada: 
                          - IDOBJETO = identificador del objeto.
						  - FORMATO = formato de la fecha
  Par�metros de Salida: 
  Evento: onKeyBlur, onChange 
  Browser: Pruebas realizadas en IE 6.0.2600., FireFox 1.5 y Netscape 8.1
*/
function validarFecha(event,idObjeto, formato)
{ 
	 objeto = document.getElementById(idObjeto).value;
	   
	 if(esVacio(formato))
	 { 
	    formato = "dd/mm/yyyy";  
	 }
	 
	 maxLen = formato.length;
	 formato = formato.toLowerCase();
	 var separador = "/";
	   
	 //Se obtiene el separador
	 var i = 0;
	 for (i=0; i<maxLen; i++)
	 {	
		  var carac = formato.substr(i,1);
		  if (((carac<"0") || (carac>"9")) && carac!="d" && carac!="m" && carac != "y")
		  {
			  separador = formato.substr(i,1);
			  break;  
		  }  
	 }//fin del for
		
	 //Se obtienen las posiciones de los separadores
	 var pos1 = formato.indexOf(separador);
	 var formatoAux = formato.substr(0,pos1);
	 formatoAux = formatoAux+formato.substr(pos1+1,formato.length);
	 var pos2 = formatoAux.indexOf(separador)+1;
	   
	 //Se obtiene las variables de dia mes y a�o para validar el formato
	 var lenAno = 4;
	 var posDia = formato.indexOf("dd");
	 var posMes = formato.indexOf("mm");
	 var posAno = formato.indexOf("yyyy");
	 
	 if(posAno == -1)
	 {
	     posAno = formato.indexOf("yy");
		 lenAno = 2;
	 }
	   
	 //Para horas minutos y segundos
	 var posHor = formato.indexOf("hh");
	 var posMin = formato.indexOf("mi");
	 var posSeg = formato.indexOf("ss");
	 var posEsp = posHor - 1;
	 var posH2  = posHor + 2;
	 var posH3  = posHor + 5;
	 var errorFormato = false;
	 
	 if(posDia == -1 || posMes == -1 || posAno == -1)
	 {
	   	 borrar = '';
		   //alert("formato de fecha incorrecto");
		 errorFormato = true;
	 }
	 if (objeto)
	 {  
		 //borrar = caja;
		 borrar = objeto;
		 if ((objeto.substr(pos2,1) == separador) && (objeto.substr(pos2,1) == separador) /*&& (caja.substr(posH2,1) == ":") && (caja.substr(posH3,1) == ":")*/)
		 {      
			 for (i=0; i<maxLen; i++)
			 {
				if (((objeto.substr(i,1)<"0") || (objeto.substr(i,1)>"9")) && (i != pos1) && (i != pos2) && (i != posH2) && (i != posH3) && (i != posEsp))
				{
				   
				   borrar = '';//existen caracteres no validos en la fecha
				   break;  
				}  
			 }//fin del for
			 if (borrar)
			 { 
				a = objeto.substr(posAno,lenAno);
				m = objeto.substr(posMes,2);
				d = objeto.substr(posDia,2);
				hh = objeto.substr(posHor,2);
				mi = objeto.substr(posMin,2);
				ss = objeto.substr(posSeg,2);
				//si solo hay dos numeros en el a�o se debe anteponer el 20 para que sea del 2000 en adelante
				
				if(lenAno == 2)
				{//Soporta  formato yy de ano
					a = "20"+a;
				}
				
				if((a < 1900) || (a > 2099) || (m < 1) || (m > 12) || (d < 1) || (d > 31))
				{
				   //alert("dia mayor a 31 en meses de 31 dias");
				   borrar = '';//dia mayor a 31 en meses de 31 dias
				}else
				{
				   if((a%4 != 0) && (m == 2) && (d > 28))
				   {
				      //alert("A�o no viciesto y es febrero y el dia es mayor a 28");
					  borrar = ''; // A�o no viciesto y es febrero y el dia es mayor a 28
				   }else
				   {
					  if ((((m == 4) || (m == 6) || (m == 9) || (m==11)) && (d>30)) || ((m==2) && (d>29)))
					  {
					     //alert("dia mayor a 30 en meses de 30 dias y es viciesto y el dia es mayor 29");
						 borrar = '';//dia mayor a 30 en meses de 30 dias y es viciesto y el dia es mayor 29
					  }else
					  {
					  	if(posHor!=-1  &&  posMin!=-1 && posSeg!=-1)
						{
							if((hh>24) || (mi>60) || (ss>60))
							{
								//alert("Error en Hora"+hh+" "+mi+" "+ss);
								borrar = '';
							}
						}
					  } //fin del else
				    }  // else
				 } // fin else
			  } // if (borrar)
		   } // if ((caja.substr(2,1) == \"/\") && (caja.substr(5,1) == \"/\"))			    			
		  else
		  {
		     borrar = '';//separadores invalidos
		  }
 		  if (borrar == '')
		  {
		     if(errorFormato == false)
			 {
		    	 cancelEvent(event);
			 }
			setTimeout(function(){ 
				document.getElementById(idObjeto).focus();
		     	document.getElementById(idObjeto).select();
			}, 0 , idObjeto);
			 

		     cancelEvent(event);
			 return false;
		  }//fin del if
		  return true;
		  //eval('parent.'+ps_campo+'.focus()');
	 } // if (objeto)   
} // fin de function validarFecha

  function procesando()
  {
   var cadenaImagen="..";
   if (arguments.length>2){
   		cadenaImagen=arguments[2];
   }
 
   var frame = arguments[0];
   if (frame.charAt(frame.length - 1) == ".") {
		frame = frame.slice(0, frame.length - 1);
   }else if(!frame){frame="window"}
   eval(frame+".document.clear();");
   eval(frame+".document.write(\"<html><body>\")");
   eval(frame+".document.write(\"<br><br>\")");
   eval(frame+".document.write(\"<table width='100%' >\")");
   eval(frame+".document.write(\"<tr><td align='center'>\")");
   eval(frame+".document.write(\"&nbsp;<IMG height='20' width='90' src='"+getAppPath()+"imgs/wait.gif' onerror='"+cadenaImagen+"/imgs/wait.gif'/>\")");
   eval(frame+".document.write(\"</td></tr>\")");
   eval(frame+".document.write(\"<tr><td align='center'>\")");
try{
   	eval(frame+".document.write(\"<font color='blue' style='font-size: 10px;font-family: verdana, arial, helvetica;' >"+arguments[1].replace(/"/g,"'")+"</font>\")");
   }
   catch(e){
   	eval(frame+".document.write(\"<font color='blue' style='font-size: 10px;font-family: verdana, arial, helvetica;' >Cargando...</font>\")");
   }
   eval(frame+".document.write(\"</td></tr></table>\")");
   eval(frame+".document.write(\"</body></html>\")");
  }

function procesandoDiv(){
	var divProcesando;
	var msjProc ="Procesando...";
	var outpuy = "";
	var strTMP   ="";
	var strHTML  ="";
	
	var cadenaImagen="..";
		if (arguments.length>2 && arguments[2]!=""){
			cadenaImagen=arguments[2];
		} 
		if (arguments.length>1 && arguments[1]!=""){
			msjProc=arguments[1];
		}
		if (typeof arguments[0]== "object"){
			divProcesando=(arguments[0]);
			}
		 else if (arguments.length>3 && arguments[3]!=""){
			divProcesando=eval(arguments[3]+"document.getElementById(\""+arguments[0]+"\")" );
		}else{
			divProcesando=document.getElementById(arguments[0]);
		}
	
	output = "<table width='100%'><tr><td><table align='center'>"+
		 "<tr><td align='center'>"+
		 "&nbsp;<IMG height='20' width='90' src='"+getAppPath()+"/imgs/wait.gif' onerror='"+cadenaImagen+"/imgs/wait.gif'/>"+
		 "</td></tr>"+
		 "<tr><td align='center'>"+
		 "<font color='blue' style='font-size: 10px;font-family: verdana, arial, helvetica;' >"+msjProc+"</font>"+
		 "</td></tr></table></td></tr></table>";	
		divProcesando.innerHTML=output;
	}
	
  function procesando_eval()
  {
   var cadenaImagen="..";
   if (arguments.length>2){
   		cadenaImagen=arguments[2];
   }

   eval(arguments[0]+"document.clear();");
   eval(arguments[0]+"document.write(\"<html><body>\")");
   eval(arguments[0]+"document.write(\"<br><br>\")");
   eval(arguments[0]+"document.write(\"<table width='100%' >\")");
   eval(arguments[0]+"document.write(\"<tr><td align='center'>\")");
   eval(arguments[0]+"document.write(\"&nbsp;<IMG height='20' width='90' src='"+getAppPath()+"/imgs/wait.gif' onerror='"+cadenaImagen+"/imgs/wait.gif'/>\")");
   eval(arguments[0]+"document.write(\"</td></tr>\")");
   eval(arguments[0]+"document.write(\"<tr><td align='center'>\")");
   eval(arguments[0]+"document.write(\"<font color='blue' style='font-size: 10px;font-family: verdana, arial, helvetica;' >"+arguments[1].replace(/"/g,"'")+"</font>\")");
   eval(arguments[0]+"document.write(\"</td></tr></table>\")");
   eval(arguments[0]+"document.write(\"</body></html>\")");
  }
  
  function cargar(){
		//id,msjProc,rutaImg,rutaObj
		  
		var objProcesando; //div procesando
		var msjProc  ="Procesando ...";
		var strTMP   ="";
		var strHTML  ="";
		var output   ="";
		
		var cadenaImagen="..";
		if (arguments.length>2 && arguments[2]!=""){
			cadenaImagen=arguments[2];
		} 
		if (arguments.length>1 && arguments[1]!=""){
			msjProc=arguments[1];
		}
		if (arguments.length>3 && arguments[3]!=""){
			objProcesando=eval(arguments[3]+"document.getElementById(\""+arguments[0]+"\")" );
		}else{
			objProcesando=document.getElementById(arguments[0]);
		}
		objProcesando.innerHTML="";
		output = "<table width='100%' height='100%'><tr><td><table align='center'>"+
		 "<tr><td align='center'>"+
		 "&nbsp;<IMG height='20' width='90' src='"+cadenaImagen+"/imgs/wait.gif'/>"+
		 "</td></tr>"+
		 "<tr><td align='center'>"+
		 "<font color='blue' style='font-size: 10px;font-family: verdana, arial, helvetica;' >"+msjProc+"</font>"+
		 "</td></tr></table></td></tr></table>";
			strTMP = objProcesando.innerHTML;
		    strTMP = strTMP + output;
		  
		objProcesando.style.backgroundColor = "#FFFAF0"; //#ECD9B6 --un poco mas obscuro
		objProcesando.style.position = "absolute";
		objProcesando.style.width = "100%";
		objProcesando.style.height = "100%";
		objProcesando.style.top = "0";
		objProcesando.style.left = "0";
		objProcesando.style.padding = "20px";
		
		objProcesando.innerHTML=strTMP;
	}
	  function cargarDiv(){
		//id,msjProc,rutaImg,rutaObj
		  
		var objProcesando; //div procesando
		var msjProc  ="Procesando ...";
		var strTMP   ="";
		var strHTML  ="";
		var output   ="";
		
		var cadenaImagen="..";
		if (arguments.length>2 && arguments[2]!=""){
			cadenaImagen=arguments[2];
		} 
		if (arguments.length>1 && arguments[1]!=""){
			msjProc=arguments[1];
		}
		if (arguments.length>3 && arguments[3]!=""){
			objProcesando=eval(arguments[3]+"document.getElementById(\""+arguments[0]+"\")" );
		}else{
			objProcesando=document.getElementById(arguments[0]);
		}
		objProcesando.innerHTML="";
		output = "<table width='100%' height='100%'><tr><td><table align='center'>"+
		 "<tr><td align='center'>"+
		 "&nbsp;<IMG height='20' width='90' src='"+getAppPath()+"/imgs/wait.gif' onerror='"+cadenaImagen+"/imgs/wait.gif'/>"+
		 "</td></tr>"+
		 "<tr><td align='center'>"+
		 "<font color='blue' style='font-size: 10px;font-family: verdana, arial, helvetica;' >"+msjProc+"</font>"+
		 "</td></tr></table></td></tr></table>";
			strTMP = objProcesando.innerHTML;
		    strTMP = strTMP + output;
		  
		objProcesando.style.backgroundColor = "#FFFAF0"; //#ECD9B6 --un poco mas obscuro
		objProcesando.style.position = "static";
		objProcesando.style.width = "96%";
		objProcesando.style.height = "150%";
		objProcesando.style.top = "0";
		objProcesando.style.left = "0";
		objProcesando.style.padding = "2%";
		
		objProcesando.innerHTML=strTMP;
	}

  function cargarDcto()
	{
		var strTMP   ="";
		var strHTML  ="";
		var output   ="";
		
		var cadenaImagen="..";
	    if (arguments.length>2){
	   		cadenaImagen=arguments[2];
	    }
		document.getElementById(arguments[0]).innerHTML="";
		output = "<table width='100%' id='tb_mensaje' >"+
		         "<tr>"+
				 "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>"+
				 "<td>"+
				 "&nbsp;<IMG height='20' width='90' src='"+cadenaImagen+"/imgs/wait.gif'/>"+
				 "</td>"+
				 "</tr>"+
				 "<tr>"+
				 "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>"+
				 "<td>"+
				 "<font color='blue' style='font-size: 10px;font-family: verdana, arial, helvetica;' >"+arguments[1]+"</font>"+
				 "</td>"+
				 "</tr></table>";
		
		strTMP = document.getElementById(arguments[0]).innerHTML;
        strTMP = strTMP.slice(0,(strTMP.length - 16));
        strTMP = strTMP + output +"</TBODY></TABLE>" ;
        document.getElementById(arguments[0]).innerHTML=strTMP;
	}
	
  function errorScriptEnPagina(msg, url, linenumber){
    alert('Error message= '+msg+'\nURL= '+url+'\nLine Number= '+linenumber);
    return true;
  }
  
  /* funcion que permite al hacer enter e el include saltar al siguiente campo especificado en el array */
  var objActualCombinacion="";
  var arr_objetos= new Array("idCuenta","idAux0","idAux1","idAux2","idAux3","idAux4","idAux5","idLineaNegocio","idLocal","idSecciondepto","idEmpleado","idPlanCtaProp","idPlanCta","idDimension6");
  function siguienteObj(){
           var idx=0;
           var bandera = false;
           //alert(objActualCombinacion);
           while(!bandera && idx<=arr_objetos.length){
             //alert(arr_objetos[idx]);
             if (objActualCombinacion==arr_objetos[idx]){
                  //alert("entro");
                  bandera = true;
             }else{idx++;}
           }
           //alert(idx);
           if (bandera){
             idx++;
             bandera=false;
             while (!bandera && idx<=arr_objetos.length){
                 if (eval(document.getElementById(arr_objetos[idx]))){
                    //alert(arr_objetos[idx]);
                    document.getElementById(arr_objetos[idx]).focus();
                    bandera=true;
                 }else{idx++;}
                 
             }
           }
  }
  
//funcion original, se la cambió porque para colombia no funcionaba correctamente la mascara
//function verificaDecimalesCorrectos(id, numeroPermitidoDecimales){
//	var valor = document.getElementById(id).value;
//   if (valor==null || trim(valor)=="") return;
//   var length = valor.toString().length;
//	
//   	var cadenaCeros = "";
//		for(i=0; i<numeroPermitidoDecimales; i++){
//			cadenaCeros+="0";
//		}
//		
//	if(valor.indexOf(".")!=-1){
//		var indPunto = valor.indexOf(".");
//		var decimales = valor.substr(indPunto+1,length);
//		//alert(decimales);
//		if( decimales.length>=0 && decimales.length <numeroPermitidoDecimales ){
//			var cadena0 = "";
//			for(i=decimales.length; i<numeroPermitidoDecimales; i++){
//				cadena0+="0";
//			}
//			valor = valor+cadena0;
//		}else if(decimales.length > numeroPermitidoDecimales){
//			var decimalesReales = decimales.substr(0,numeroPermitidoDecimales);
//			//alert(decimalesReales);
//			valor = valor.replace(decimales, decimalesReales);
//		}
//	}else{
//		valor = valor+"."+cadenaCeros;
//	}
//	
//	//validamos que el valor si es 0 se formatee
//	//alert( parseFloat(limpiarComas(valor)) );
//	if(parseFloat(limpiarComas(valor)) == 0){
//		valor = "0."+cadenaCeros;
//	}
//	document.getElementById(id).value = valor; 
// }
  
  //nueva funcion emarquez 08/05/2017 corrigue la mascara para colombia
  function verificaDecimalesCorrectos(id, numeroPermitidoDecimales){
	  var valor = document.getElementById(id).value;
	  if (valor==null || trim(valor)==""){
		  return valor;
	  }

	  valor=retornaFormatoDecimales(valor,numeroPermitidoDecimales);
	  document.getElementById(id).value = valor;
  }
  
  function retornaFormatoDecimales(valor,numeroPermitidoDecimales){
	  var nuevoValor="";
	  var caracter="";
	  numeroPermitidoDecimales=parseInt(numeroPermitidoDecimales);

	  switch(numeroPermitidoDecimales){

	  case 0:
		  if(valor.indexOf(".") >= 0){
			  for(var i=0;i<valor.length;i++){
				  caracter=valor.charAt(i);
				  if(caracter == '.'){
					  nuevoValor=valor.slice(0, i);
					  break;
				  }
			  }	
		  }else{
			  nuevoValor=valor;    			 
		  }
		  nuevoValor+=".00";
		  break;

	  case 2:
		  var control=-1;
		  var sinDecimales=false;

		  if(valor.indexOf(".") >= 0){
			  for(var i=0;i<valor.length;i++){
				  caracter=valor.charAt(i);
				  if(caracter == '.' || control > -1  ){
					  control++;
				  }
			  }
			  if(control==-1){
				  sinDecimales=true;
			  }else if(control<numeroPermitidoDecimales){
				  valor+='0';
				  nuevoValor=valor;
			  }else if(control>numeroPermitidoDecimales){
				  nuevoValor=valor.slice(0, valor.length+(numeroPermitidoDecimales-control));
			  }else{
				  nuevoValor=valor;
			  }

		  }else{
			  sinDecimales=true;
		  }

		  if(sinDecimales){
			  valor+='.';
			  nuevoValor=valor;
			  for(var a=0;a<numeroPermitidoDecimales;a++){
				  nuevoValor+='0';
			  }
		  }
		  break;	
	  }

	  return nuevoValor;
  }
  
//Funci�n que establece la m�scara de entrada de n�meros con decimales por pantalla
  function NumberFormat(event,obj,numDec){
    NUM_DECIMAL = parseInt(numDec);
    
    var key = getKeyCode(event);
    
    if ( (key>=30 && key<=40) ) {
  	  cancelEvent(event);
          return;
    }
    if (obj.value==null || trim(obj.value)=="") return;
   
    //valida numero tenga decimales 
    if (obj.value.indexOf(".")!=-1){
  	var dec=obj.value.substring(obj.value.indexOf(".")+1);
  	if (dec.length > NUM_DECIMAL && NUM_DECIMAL!=0) {
  		ent=obj.value.substring(0,obj.value.indexOf("."));
  		dec=obj.value.substring(obj.value.indexOf("."));
  		obj.value=ent+dec.substring(0,(dec.length)-1);
          }
    }

    // separa los enteros con los decimales
    var entero="";decimales=""; entero_comas="";
    if (obj.value.indexOf(".")==-1){
  	entero=obj.value;
  	decimales="";
    }else{
    	entero   =obj.value.substring(0,obj.value.indexOf("."));
          entero_comas = entero;
  	decimales=obj.value.substring(obj.value.indexOf("."));
    }

    // quita las comas
    entero=entero.replace(',', '');
    var aux_entero=entero;
    var ind=0;
    while (aux_entero.indexOf(",")!=-1){
          aux_entero=aux_entero.replace(',', '');
    }
    entero=aux_entero;

    // agrega las comas 
    if (entero.length > 3) {
      var number="";
      var aux="";
      var i=0;
      var j=0;
      for (i=entero.length-3;i>0;i=i-3) {
  	if (i>0){
    	   aux=","+entero.substring(i, i+3);
  	   number=aux + number+"";
  	}
  	j=i;
      }
      if (i <= 0){ number=entero.substring(0,j)+number; }
      obj.value=number+decimales;
    }else{
       if (entero_comas.length>3){
  	obj.value=entero+decimales;
       }else if (decimales.length<1){
       	obj.value=entero+decimales;
       }else if (entero.length==0 && decimales.length>1){
  	obj.value="0"+decimales;
       }
    }
    return;
  }


function esNumero( numstr ) {
	// Return immediately if an invalid value was passed in
	if (numstr+"" == "undefined" || numstr+"" == "null" || numstr+"" == "") 
	return false;
	var isValid = true;
	var decCount = 0; // number of decimal points in the string
	// convert to a string for performing string comparisons.
	numstr += ""; 
	// Loop through string and test each character. If any
	// character is not a number, return a false result.
	// Include special cases for negative numbers (first char == '-')
	// and a single decimal point (any one char in string == '.'). 
	for (i = 0; i < numstr.length; i++) {
		// track number of decimal points
		if (numstr.charAt(i) == ".")
		decCount++;
		if (!((numstr.charAt(i) >= "0") && (numstr.charAt(i) <= "9") || 
		(numstr.charAt(i) == "-") || (numstr.charAt(i) == "."))) {
			isValid = false;
			break;
		} else if ((numstr.charAt(i) == "-" && i != 0) ||
		(numstr.charAt(i) == "." && numstr.length == 1) ||
		(numstr.charAt(i) == "." && decCount > 1)) {
			isValid = false;
			break;
		} 
		//if (!((numstr.charAt(i) >= "0") && (numstr.charAt(i) <= "9")) || 
	} // END for 
	return isValid;
 } // end IsNum

 //Setea en un formato de ###-###-####### las referencia que se encuentren en el Array arrReferenciasFac
 function seteaFormatoRefNroDoc(id, ind, idNombre){
	//alert("objeto posible "+id);
	var bandValidar = false;
	for (i=0; i<arrReferenciasDoc.length; i++){
		if(arrReferenciasDoc[i] == document.getElementById(idNombre+ind).value){
			bandValidar = true;
		}
	}
	if(bandValidar){
        validaNroDocumento(id,17);
	}
 }
 
 //Valida en un formato de ###-###-####### las referencia que se encuentren en el Array arrReferenciasFac
 function validaFormatoNroDoc(event,id, ind, idNombre){
	var bandValidar = false;
	for (i=0; i<arrReferenciasDoc.length; i++){
		if(arrReferenciasDoc[i] == document.getElementById(idNombre+ind).value){
			bandValidar = true;
		}
	}
	if(bandValidar){
		formatoNroFactura(event,id);
	}
 } 
 
 
 // FUNCION DESABILITA TEMPORALMENTE EL OBJETO POR N SEGUNDOS
 function blockTemp(objId,miliseg){
   //setTimeout("document.getElementById('"+objId+"').style.visibility=\"visible\";",2000);
   if(document.getElementById('"+objId+"')){
	 setTimeout("document.getElementById('"+objId+"').disabled=false;",miliseg);  
   }
 }
 
//arguments[0] : recibe el nombre del formulario con el nombre del campo destino
//[nombre formulario].[nombre campo] o [nombre formulario].[id campo]  se envia sin encerrar entre comillas
//arguments[1] : el valor del campo origen 
function asignar_valores()
{  
	arguments[0].value = arguments[1];
}

 
function replace(s, t, u) {
  /*
  **  Replace a token in a string
  **    s  string to be processed
  **    t  token to be found and removed
  **    u  token to be inserted
  **  returns new String
  */
  i = s.indexOf(t);
  r = "";
  if (i == -1) return s;
  r += s.substring(0,i) + u;
  if ( i + t.length < s.length)
    r += replace(s.substring(i + t.length, s.length), t, u);
  return r;
}
 
function llamaPaginaBusqueda(ps_nombrePagina, ps_parametrosRetorno,framePaginaBusqueda,
							 idFramePrincAModificarRows,parentsParaLLegarAIdFrame,
							 distribucionporcentajes,indice,nombreFramePadre){
	


    var ps_parametros = ps_parametrosRetorno;
    var ps_valoresParametros = "";
    var idObjeto  = "";
    var ps_contenido = "";
    var existeValor = false;
	
	//alert(ps_parametros.toString());
    for (i=0;i<ps_parametros.toString().length;i++){
 		i = ps_parametros.toString().indexOf("@");
	    if (i != -1) {
 			  idObjeto = ps_parametros.toString().substring(0,i);
 			  //alert(idObjeto);
	         if (eval("document.getElementById('"+idObjeto+"')"))
		         ps_contenido     = document.getElementById(idObjeto).value+" ";	
		     else
		      	 ps_contenido = " ";        

		      if (ps_contenido == ""){ 
			  	ps_contenido = " ";
			  }else{
					for(i_conten=0; i_conten<ps_contenido.length; i_conten++){
						var caracter = ps_contenido.substr(i_conten,1);
						if(caracter!="%"){
							existeValor = true;
						}
					}
			  }
			ps_valoresParametros = ps_valoresParametros + ps_contenido +"@";
      		ps_parametros        = ps_parametros.toString().substring(i+1,ps_parametros.toString().length);
			i                    = ps_parametros.toString().indexOf("@");

			if (i == -1){
				idObjeto         = ps_parametros.toString().substring(0,ps_parametros.toString().length);	
		        if (eval("document.getElementById('"+idObjeto+"')"))
			         ps_contenido = eval("document.getElementById('"+idObjeto+"').value")+" ";	
			    else    
			     	 ps_contenido = " ";        
 			  	
 			  	ps_valoresParametros = ps_valoresParametros + ps_contenido +"@" ;
			    break;
			}
			
	   }else{
		     idObjeto = ps_parametros.toString();				 
	         //ps_contenido = parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value;
	         if ( eval("document.getElementById('"+idObjeto+"')") )
		         ps_contenido = eval("document.getElementById('"+idObjeto+"').value")+" ";	
		     else
		      	 ps_contenido = " ";        

		     //alert(ps_contenido);
			 ps_valoresParametros = ps_valoresParametros + ps_contenido +"@" ;
			 break;
	   }// End if
	}// End for
	
    ps_valoresParametros = ps_valoresParametros.toString().substring(0,ps_valoresParametros.toString().length-1);
    //alert(ps_valoresParametros);
    for (pi_n=0;pi_n<ps_valoresParametros.length;pi_n++){
	     pi_plus=ps_valoresParametros.indexOf("+");
  	     if (pi_plus!=-1){
	         ps_valoresParametros = ps_valoresParametros.replace("+","PLUS");
	      }else{
			    pi_n = ps_valoresParametros.length + 1;
	     }
     }
    
	parent.parent.frames[framePaginaBusqueda].location="../busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros)+"&indice="+indice+"&nombreFramePadre="+nombreFramePadre;	
	eval(parentsParaLLegarAIdFrame+"document.getElementById('"+idFramePrincAModificarRows+"').rows='"+distribucionporcentajes+"'");
}


function llamaPaginaBusquedaDiv(ps_nombrePagina, ps_parametrosRetorno,framePaginaBusqueda,
							 idFramePrincAModificarRows,indice,nombreFramePadre){
	


    var ps_parametros = ps_parametrosRetorno;
    var ps_valoresParametros = "";
    var idObjeto  = "";
    var ps_contenido = "";
    var existeValor = false;
	
	//alert(ps_parametros.toString());
    for (i=0;i<ps_parametros.toString().length;i++){
 		i = ps_parametros.toString().indexOf("@");
	    if (i != -1) {
 			  idObjeto = ps_parametros.toString().substring(0,i);
 			  //alert(idObjeto);
	         if (eval("document.getElementById('"+idObjeto+"')"))
		         ps_contenido     = document.getElementById(idObjeto).value+" ";	
		     else
		      	 ps_contenido = " ";        

		      if (ps_contenido == ""){ 
			  	ps_contenido = " ";
			  }else{
					for(i_conten=0; i_conten<ps_contenido.length; i_conten++){
						var caracter = ps_contenido.substr(i_conten,1);
						if(caracter!="%"){
							existeValor = true;
						}
					}
			  }
			ps_valoresParametros = ps_valoresParametros + ps_contenido +"@";
      		ps_parametros        = ps_parametros.toString().substring(i+1,ps_parametros.toString().length);
			i                    = ps_parametros.toString().indexOf("@");

			if (i == -1){
				idObjeto         = ps_parametros.toString().substring(0,ps_parametros.toString().length);	
		        if (eval("document.getElementById('"+idObjeto+"')"))
			         ps_contenido = eval("document.getElementById('"+idObjeto+"').value")+" ";	
			    else    
			     	 ps_contenido = " ";        
 			  	
 			  	ps_valoresParametros = ps_valoresParametros + ps_contenido +"@" ;
			    break;
			}
			
	   }else{
		     idObjeto = ps_parametros.toString();				 
	         //ps_contenido = parent.fms_cabeceraCriterio.document.getElementById(idObjeto).value;
	         if ( eval("document.getElementById('"+idObjeto+"')") )
		         ps_contenido = eval("document.getElementById('"+idObjeto+"').value")+" ";	
		     else
		      	 ps_contenido = " ";        

		     //alert(ps_contenido);
			 ps_valoresParametros = ps_valoresParametros + ps_contenido +"@" ;
			 break;
	   }// End if
	}// End for
	
    ps_valoresParametros = ps_valoresParametros.toString().substring(0,ps_valoresParametros.toString().length-1);
    //alert(ps_valoresParametros);
    for (pi_n=0;pi_n<ps_valoresParametros.length;pi_n++){
	     pi_plus=ps_valoresParametros.indexOf("+");
  	     if (pi_plus!=-1){
	         ps_valoresParametros = ps_valoresParametros.replace("+","PLUS");
	      }else{
			    pi_n = ps_valoresParametros.length + 1;
	     }
     }
     if(document.getElementById("framePADiv").children[0].id=="fms_transDiv" && document.getElementById("framePADiv").children[1].id=="fms_bodyCriterioDOWNDiv"){
		$("#fms_bodyCriterioDOWNDiv").load("/nAccounting/busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros)+"&indice="+indice+"&nombreFramePadre="+nombreFramePadre);
		document.getElementById("fms_transDiv").style.height="20%";
		document.getElementById("fms_transDiv").style.overflow="auto";
		document.getElementById("fms_bodyCriterioDOWNDiv").style.height="79.9%";
		document.getElementById("fms_bodyCriterioDOWNDiv").style.overflow="auto";
		document.getElementById("fms_bodyCriterioDOWNDiv").style.background="#dadada";
		document.getElementById("fms_bodyCriterioDOWNDiv").style.border="1px solid";
		document.getElementById("fms_bodyCriterioDOWNDiv").style.position="relative";
	}
	else if(document.getElementById("framePA").children[0].id=="fms_bodyCriterioUP" && document.getElementById("framePA").children[1].id=="fms_bodyCriterioDOWN"){
		$("#fms_bodyCriterioDOWN").load("./busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros)+"&indice="+indice+"&nombreFramePadre="+nombreFramePadre);
		document.getElementById("fms_cabeceraCriterio").style.height="20%";
		document.getElementById("fms_bodyCriterioUP").style.height="44%";
		document.getElementById("fms_bodyCriterioDOWN").style.height="56%";
		document.getElementById("fms_bodyCriterioDOWN").style.background="#dadada";
		document.getElementById("fms_bodyCriterioDOWN").style.position="relative";
		document.getElementById("fms_bodyCriterioDOWN").style.overflow="auto";
	}
	else if(document.getElementById("fms_bodyCriterioUP")){
		$("#fms_bodyCriterioDOWN").load("./busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros)+"&indice="+indice+"&nombreFramePadre="+nombreFramePadre);
		document.getElementById("fms_cabeceraCriterio").style.height="40%";
		document.getElementById("fms_bodyCriterioUP").style.height="0%";
		document.getElementById("fms_bodyCriterioDOWN").style.height="60%";
		document.getElementById("fms_bodyCriterioDOWN").style.width="99%";
		document.getElementById("fms_bodyCriterioDOWN").style.background="#dadada";
		document.getElementById("fms_bodyCriterioDOWN").style.border="1px solid";
		document.getElementById("fms_bodyCriterioDOWN").style.position="absolute";
		document.getElementById("fms_bodyCriterioDOWN").style.overflow="auto";
	}
	else if(document.getElementById("fms_trans")){
		$("#fms_bodyCriterioDOWN").load("/nAccounting/busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros)+"&indice="+indice+"&nombreFramePadre="+nombreFramePadre);
		document.getElementById("fms_trans").style.height="20%";
		document.getElementById("fms_trans").style.overflow="auto";
		document.getElementById("fms_bodyCriterioDOWN").style.height="79.9%";
		document.getElementById("fms_bodyCriterioDOWN").style.overflow="auto";
		document.getElementById("fms_bodyCriterioDOWN").style.background="#dadada";
		document.getElementById("fms_bodyCriterioDOWN").style.border="1px solid";
		document.getElementById("fms_bodyCriterioDOWN").style.position="relative";
	} else if(document.getElementById("fms_transDiv")){
		$("#fms_bodyCriterioDOWNDiv").load("/nAccounting/busq/"+ps_nombrePagina+"?ps_parametrosRetorno="+ps_parametrosRetorno+"&ps_valoresParametros="+escape(ps_valoresParametros)+"&indice="+indice+"&nombreFramePadre="+nombreFramePadre);
		document.getElementById("fms_transDiv").style.height="20%";
		document.getElementById("fms_transDiv").style.overflow="auto";
		document.getElementById("fms_bodyCriterioDOWNDiv").style.height="79.9%";
		document.getElementById("fms_bodyCriterioDOWNDiv").style.overflow="auto";
		document.getElementById("fms_bodyCriterioDOWNDiv").style.background="#dadada";
		document.getElementById("fms_bodyCriterioDOWNDiv").style.border="1px solid";
		document.getElementById("fms_bodyCriterioDOWNDiv").style.position="relative";
	} 
	
}


 function retornaDatosDocSession(target,targetRetorno,nombreVariable ){
	   cadena="./dcto/nacc_dcto_retornaDatosDocSession_proc.jsp?cadenaRetorno="+targetRetorno+"&variableSession="+nombreVariable;
	   try{
	   		eval(target +".location.href='"+cadena+"'");
	   }catch(e){
	   	 alert("Error al retornar informacion.");
	   }
  }
  
 function retornaDatosDocSessionDiv(target,targetRetorno,nombreVariable ){
	   cadena="/nAccounting/dcto/nacc_dcto_retornaDatosDocSession_proc.jsp?cadenaRetorno="+targetRetorno+"&variableSession="+nombreVariable;
	   try{
	   		eval($("#"+target).load(cadena));
	   }catch(e){
	   	 alert("Error al retornar informacion.");
	   }
  }

  //Funci�n que controla los valores de solo letras y solo numeros
  function ValidaSoloCaracteresYnumeros(event){
	var key = getKeyCode(event);  
	//   (key>=97 && key<=122) (key>=65 && key<=90)  alfabeto
	//   (key>=48 && key<=57) numero
	if (!esKeyCodeDesplazamiento(key) &&
			!( (key>=48 && key<=57) || (key>=65 && key<=90) || (key>=97 && key<=122) )){
		cancelEvent(event);
		return false;
	}else {
		return true;
	}
  }
 // este codigo es para prevenir que al dar enter en un campo de texto el formulario se submitee 
 // automaticamente
 function stopRKey(evt) {
   evt = evt || event;
   var key = getKeyCode(evt);	 
   var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
   if ((key == 13) && (node.type=="text"))  {return false;} 
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
 
 // funcion permite moverse con las teclas direccioneales en la tabla,
 // la funcion pulsar se la agrega en el evento onkeyup del body
 // paginas en que se la usa nacc_busq_listadoComponentes_combInclude.jsp.
 // datos obligatorios:
 // nombre de la tabla por defecto = tabla_busqueda
 // funcion para dar el enfoque al objeto que se desee = setFocusToElement 
 // funcion para cerrar la ventana = cerrarFrameConsulta
 // utiliza tambien las funciones fondoKeyOver, fondoKeyOut
 
 var filaTablaCons = 1;
 function pulsar(evt) {
   var key = getKeyCode(evt);

   var table_id="tabla_busqueda";
   if (arguments.length>1){
	   table_id=arguments[1];
   }
   
   if ( key==38 || key==40 ) {
		if ( document.getElementById(table_id) ) {
		    tab = document.getElementById(table_id);
		    filas = tab.getElementsByTagName('tr');
		    if (key==38 && filaTablaCons>1) num=-1;
		    else if(key==40 && filaTablaCons<filas.length-1) num=1;
		    else return;
		    fondoKeyOut(filas[filaTablaCons].id);
		    filaTablaCons+=num;
		    fondoKeyOver(filas[filaTablaCons].id,'#FFFFCC');
			evt.preventDefault();
		    filas[filaTablaCons].focus();
			if(!isInViewport(filas[filaTablaCons])) {
				filas[filaTablaCons].scrollIntoView(num==1);
			}
	    }
	}else if ( key==13 ) {
		if ( document.getElementById(table_id) ) {
		   filas = tab.getElementsByTagName('tr');	
		   if ( filas.length>1 ){
			   objs = filas[filaTablaCons].getElementsByTagName('input');
			   if ( objs.length>0 ){		   
				   for (var i = 0; i < objs.length; i++) {
				      if ( objs[i].type=="radio"){
				      	ejecutaEventosObj("click",objs[i].id);
				      }
				   }
			   }
		   }
		}		 
	}else if ( key==27 ) {
		if (setFocusToElement)
			setFocusToElement();	
		if (cerrarFrameConsulta)
			cerrarFrameConsulta();
	}		
 }
 /*
 Funciones utilizadas para el color del rollover sobre el contenido de la cosulta
	*/	    
	var colorAntesKeyover;
	function fondoKeyOver(identificadorFila,colorRollover)
	{
	 	 elementoTr = document.getElementById(identificadorFila);
	 	 colorAntesKeyover = elementoTr.style["backgroundColor"];
	 	 elementoTr.style.backgroundColor= String(colorRollover);
	}
	 	    
	function fondoKeyOut(identificadorFila)
	{
	 	  elementoTr = document.getElementById(identificadorFila);
	 	  elementoTr.style.backgroundColor = String(colorAntesKeyover);
	}

  	function selectFirstRow() {
		var table_id="tabla_busqueda";
	   	if (arguments.length>0){
		   table_id=arguments[0];
	 	}

		var else_focus="btn_consultar";
	   	if (arguments.length>1){
   		   else_focus=arguments[1];
   	   	}
	
	  if ( document.getElementById(table_id) ) {
	    tab = document.getElementById(table_id);
	    filas = tab.getElementsByTagName('tr');
		var tabla = document.getElementById(table_id);
		tabla.setAttribute('tabindex', '0');
		setTimeout(function() {
			tabla.focus();		    
		    if ( filas.length>1 ){
		    	fondoKeyOver(filas[filaTablaCons].id,'#FFFFCC');
			}else if(else_focus){
				if(document.getElementById(else_focus))
					document.getElementById(else_focus).focus();
			}	
		}, 0);			
	  }
  	}

	  

/*************************  
 *     		FUNCIONES W3C
 */	  

  // genera un nuevo evento para retornarlo a la otra funcion
  function getNewEvent(evt,evtName,keycod){
	  var newEvent = null;
	  if (document.createEvent) {
		  newEvent = document.createEvent("Events");
		  try{
			  newEvent.initKeyEvent(evtName, true, true, document.defaultView,
	      		evt.ctrlKey, evt.altKey, evt.shiftKey,evt.metaKey,0, keycod);
			  
		  } catch (ex /*:Error*/){
			  newEvent.initEvent(evtName, true, true);
			  newEvent.which = keycod; 
			  newEvent.keyCode=keycod;
		  }
	  }
	  
  	return newEvent;
  }	  
  
  ////**** funcion que convierte a mayusculas
  function assureUpper(evt){
	setAssureUpperEvents()
  }

  
  function assureUpperValue(evt) {
	
	function getInputSelection(el) {
	    var start = 0, end = 0, normalizedValue, range,
	        textInputRange, len, endRange;
	
	    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
	        start = el.selectionStart;
	        end = el.selectionEnd;
	    } else {
	        range = document.selection.createRange();
	
	        if (range && range.parentElement() == el) {
	            len = el.value.length;
	            normalizedValue = el.value.replace(/\r\n/g, "\n");
	
	            // Create a working TextRange that lives only in the input
	            textInputRange = el.createTextRange();
	            textInputRange.moveToBookmark(range.getBookmark());
	
	            // Check if the start and end of the selection are at the very end
	            // of the input, since moveStart/moveEnd doesn't return what we want
	            // in those cases
	            endRange = el.createTextRange();
	            endRange.collapse(false);
	
	            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
	                start = end = len;
	            } else {
	                start = -textInputRange.moveStart("character", -len);
	                start += normalizedValue.slice(0, start).split("\n").length - 1;
	
	                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
	                    end = len;
	                } else {
	                    end = -textInputRange.moveEnd("character", -len);
	                    end += normalizedValue.slice(0, end).split("\n").length - 1;
	                }
	            }
	        }
	    }
	
	    return {
	        start: start,
	        end: end
	    };
	}

	function offsetToRangeCharacterMove(el, offset) {
	  	return offset - (el.value.slice(0, offset).split("\r\n").length - 1);
	}

	function setInputSelection(el, startOffset, endOffset) {
	    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
	        el.selectionStart = startOffset;
	        el.selectionEnd = endOffset;
	    } else {
	        var range = el.createTextRange();
	        var startCharMove = offsetToRangeCharacterMove(el, startOffset);
	        range.collapse(true);
	        if (startOffset == endOffset) {
	            range.move("character", startCharMove);
	        } else {
	            range.moveEnd("character", offsetToRangeCharacterMove(el, endOffset));
	            range.moveStart("character", startCharMove);
	        }
	        range.select();
	    }
	}
	if(evt.key=='Control'){
		ctrl = true;
		tsCtrl = evt.timeStamp;
		return;
	}
	
	if( evt.ctrlKey && evt.key.toUpperCase()=="V" )
		return;
		
	if( evt.key.length>1 )
		return;
		
	if( evt.key.toUpperCase()=="V" && ctrl && evt.timeStamp-tsCtrl<1000)
		return;
		
	ctrl = false;
	var selection_index = getInputSelection(evt.target);  
	evt.target.value = evt.target.value.toUpperCase();
	setInputSelection(evt.target, selection_index.start, selection_index.end);
	
	return true;
  }
 var ctrl = false;
 var tsCtrl = 0;

 function setAssureUpperEvents() {
	var elements = [];
	if (document.querySelectorAll) {
		elements = document.querySelectorAll('[onkeypress]');
	}
	else {
		elements_tmp = document.getElementsByTagName("*");
		elements_tmp.forEach(function(elem) {
			if (elem.hasAttribute("onkeypress")){
				elements.push(elem);
			}
		});
	}

	elements.forEach(function(elem){
		var keypress = elem.getAttribute('onkeypress');
		var hasAssureUpper = keypress.indexOf("assureUpper(")!=-1;
		
		if(hasAssureUpper) {
			elem.style.textTransform = 'uppercase';
			if (elem.addEventListener) {
			    elem.addEventListener("keyup", assureUpperValue, false);
			}
			else {
			    elem.attachEvent("onkeyup", assureUpperValue);
			}
		}
		
	});
 }

	// funcion que simula el funcionamiento del $(document).ready de Jquery
	function ready(callback){
	    if (document.readyState!='loading') callback();
	    // modern browsers
	    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
	    // IE <= 8
	    else document.attachEvent('onreadystatechange', function(){
	        if (document.readyState=='complete') callback();
	    });
	}

if (!navigator.userAgent.match(/MSIE 7.0/i)) ready(setAssureUpperEvents);
  
  /*
  esta funcion permite ejecutar el evento 
  enter de uno bjeto
*/
function ejecutaEventosObj(evento,obj){	
	if(document.createEventObject){
	    var evtObj =document.createEventObject('HTMLEvents');
	    if (evento=="keypress"  || evento=="onkeypress") {
	         evtObj.keyCode = 13;
	    }
	  getElementByIdOrName(document, obj).fireEvent("on"+evento,evtObj);
	    evtObj=null; 		
	}else{
		var keyCod=0; 
		if (evento=="keypress" || evento=="onkeypress") {
			keyCod = 13;
	    }
		getElementByIdOrName(document, obj).dispatchEvent(getNewEvent(null,evento,keyCod));
	} 
}

  
  /**
  Creado por: Jorge Chicala
  Fecha Creaci?n: 02/02/2006
  Version: 1.0
  Descripci?n: Funci?n verificadora de letras.
  Par?metros de Entrada: 
                          -  LETRA: valor que se desea analizar como letra
  Par?metros de Salida: Retorna true cuando el valor ingresado es una letra y false cuando no lo es. 
  Evento: 
  Browser: Pruebas realizadas en IE 6.0.2600., FireFox 1.5 y Netscape 8.1
*/
function esLetra(letra)
{
    var cadena = "abcdefghijklmn?opqrstuvwxyz";
	
	if (letra.length>1)
    {
        return false;
    }

    if (cadena.indexOf(letra.toLowerCase())!=-1)
	{
	   return true;
	}
	return false;
}




/**
  Creado por: Jorge Chicala
  Fecha Creaci?n: 03/02/2006
  Version: 1.0
  Descripci?n: Funci?n que permite dar un formato de cualquier tipo a letras y numeros. 
               La m?scara que identifica a las n?meros es '#' y para las letras la m?scara esta conformadas por 'A'. 
               Si se desea un formato de n?meros se puede proporcionar, entre otras, una cadena de la forma: '###-##-##', lo que generara una cadena '123-58-74'.
			   Si se desea un formato de letras se ingresa la cadena: 'AAA-AA-AA' , generara una secuencia de caracteres 'ABC-DE-FG'.
			   Si es una mezcla de n?meros y letras: '##-AAA-###', genera una cadena de '12-ABC-345'. 
			   Se puede utilizar cualquier tipo de separador y no solamente el caracter '-'
.  Par?metros de Entrada: 
                          - IDOBJETO = identificador del objeto.
						  - MASCARA = m?scara que se desa utilizar ej: ##-##-##### , ##,AA--
  Par?metros de Salida: 
  Evento: onKeyUp
  Browser: Pruebas realizadas en IE 6.0.2600., FireFox 1.5 y Netscape 8.1
*/
function enmascararAlfanumerico(evento,idObjeto,mascara)
{
   var bandera = false;
   var objeto = document.getElementById(idObjeto).value;
   var key = getKeyCode(evento);
   
   //en el caso de que no se tenga m?scara se sale de la funci?n
   //if(mascara == "" || mascara == " ")
   if(esVacio(mascara))
   {
      objeto = "";
   }
   
   //solo se deben de ingresar valores numericos y los separadores ('.' o ',')
	//validaci?n del uso de teclas de flechas
	if(key == 37 || key == 39 || key == 8 || key == 46) //flecha izq=37, flecha derecha=39, flecha arriba=38, flecha abajo=40
	    bandera = true;
		
   var posCursor = this.obtenerPosicionCursor(document.getElementById(idObjeto));
   var aux = objeto.substr(posCursor);
   var objeto = objeto.substr(0,posCursor);
   
   for(var i=0; i<objeto.length;i++)
   {
      if(mascara.charAt(i) == '#')
	  {
         if(!isNum(objeto.charAt(i)))
		 {
		    //alert("uno 1");
			objeto = objeto.substr(0,i);
			posCursor = i;
			break;
		 }
	  }
	  else if(mascara.charAt(i).toUpperCase() == 'A')
		   {
			   if(!esLetra(objeto.charAt(i)))
		       {
		           //alert("dos 2");
				   objeto = objeto.substr(0,i);
				   posCursor = i;
				   break;
			   }  
		   }
	  else if(mascara.charAt(i).toUpperCase() == 'X')
		   {
			   if ( key == 39 || key == 34 || key == 13 || key == 219 || key == 50 )
		       {
		           //alert("dos 3");
				   objeto = objeto.substr(0,i);
				   posCursor = i;
				   break;
			   }  
		   }
	  else
	  {
	      if(objeto.charAt(i) != mascara.charAt(i))
		  {
		     objeto = objeto.substr(0,i);
			 //alert("tres 3");
			 i--;
		  }
	  }
	  
	  if(typeof(mascara.charAt(i+1)) != "undefined")
	  {
	     //alert("cuatro 4 ");
		 if( mascara.charAt(i+1) != '#' && mascara.charAt(i+1).toUpperCase() != 'A' && 
		 		mascara.charAt(i+1).toUpperCase() != 'X')	  
		 {
		       if(esVacio(aux))
			   {
			     objeto = objeto.substr(0,i+1) + objeto.substr(i+1) + mascara.charAt(i+1);
				 posCursor = posCursor+i;
			   }	 
		 }
	  }
	  
   }//fin del for
   
   objeto = objeto+aux;
   
   if(!bandera)
   {
	   document.getElementById(idObjeto).value = objeto.toUpperCase();
	   //alert("final = "+posCursor);
	   this. posicionarCursor(document.getElementById(idObjeto),posCursor,posCursor);
   }   
} // fin de function enmascararAlfanumerico()




/**
  Creado por: Corporaci?n Sudamericana de Software 
  Fecha Creaci?n: 03/02/2006
  Version: 1.0
  Descripci?n: Permite formatear la fecha de acuerdo a un formato definido
  Par?metros de Entrada: 
                          - IDOBJETO = identificador del objeto.
						  - FORMATO = formato definido en la aplicaci?n 
  Par?metros de Salida: 
  Evento: onKeyUp
  Browser: Pruebas realizadas en IE 6.0.2600., FireFox 1.5 y Netscape 8.1
*/
/**
  Creado por: Jorge Chicala
  Fecha Creaci?n: 03/02/2006
  Version: 1.0
  Descripci?n: Permite formatear la fecha de acuerdo a un formato definido
  Par?metros de Entrada: 
                          - IDOBJETO = identificador del objeto.
						  - FORMATO = formato definido en la aplicaci?n 
  Par?metros de Salida: 
  Evento: onKeyUp
  Browser: Pruebas realizadas en IE 6.0.2600., FireFox 1.5 y Netscape 8.1
*/
function formatearFecha(evento,idObjeto,formato)
{
   var objeto = document.getElementById(idObjeto).value;
   var bandera = false;
   
   //en el caso de que no se tenga m?scara se sale de la funci?n
   //if(formato==null ||formato == "" || formato == " ")
   if(esVacio(formato))
   {
      formato = "dd/mm/yyyy"; 
   }
   var key = getKeyCode(evento);
   
	//validaci?n del uso de teclas de flechas
   if(key == 37 || key == 39 || key == 8 || key == 46) //flecha izq=37, flecha derecha=39, flecha arriba=38, flecha abajo=40
	    bandera = true;
		
   var posCursor = this.obtenerPosicionCursor(document.getElementById(idObjeto));
   var aux = objeto.substr(posCursor);
   var objeto = objeto.substr(0,posCursor);
   
   for(var i=0; i<objeto.length;i++)
   {
      if(formato.charAt(i).toUpperCase() == 'D' || formato.charAt(i).toUpperCase() == 'M' || formato.charAt(i).toUpperCase() == 'Y')
	  {
         if(!isNum(objeto.charAt(i)))
		 {
		    objeto = objeto.substr(0,i);  
			posCursor = i;   
			break;
		 }
	  }
	  else
	  {
	      if(objeto.charAt(i) != formato.charAt(i))
		  {
		     objeto = objeto.substr(0,i);
			 i--;
		  }
	  }
	  
	  if(typeof(formato.charAt(i+1)) != "undefined")
	  {
	     if( formato.charAt(i+1).toUpperCase() != 'D' && formato.charAt(i+1).toUpperCase() != 'M'  && formato.charAt(i+1).toUpperCase() != 'Y' )	  
		 {
		    //objeto = objeto + formato.charAt(i+1);
			if(esVacio(aux))
			{
			   objeto = objeto.substr(0,i+1) + objeto.substr(i+1) + formato.charAt(i+1);
			   posCursor = posCursor+i;
			}   
		 }
	  }
	  
   }//fin del for
   
   objeto = objeto+aux;
   
   if(!bandera)
   {
       document.getElementById(idObjeto).value = objeto.toUpperCase();
	   this.posicionarCursor(document.getElementById(idObjeto),posCursor,posCursor);
   }	   
} // fin de function enmascararAlfanumerico()


/**
  Creado por: Corporaci?n Sudamericana de Software 
  Fecha Creaci?n: 03/02/2006
  Version: 1.0
  Descripci?n: Valida si la fecha final es mayor a la fecha inicial
  Par?metros de Entrada: 
                          - IDOBJETOINICIAL: Identificador del objeto que posee la fecha inicial.
						  - IDOBJETOFINAL: Identificador del objeto que posee la fecha final.
  Par?metros de Salida: TRUE si la fecha final es mayor que la inicial, FALSE en caso contrario.
  Evento: 
  Browser: Pruebas realizadas en IE 6.0.2600., FireFox 1.5 y Netscape 8.1
*/
function validarRangoFecha(idObjetoInicial,idObjetoFinal)
{
    var fechaInicial = document.getElementById(idObjetoInicial).value;
	var fechaFinal = document.getElementById(idObjetoFinal).value;
	var separadorFecha = "";
	
	//se verifica el separador del formato
	for(var i=0; i<fechaInicial.length; i++)
	{
	   if(!isNum(fechaInicial.charAt(i)))
	        separadorFecha = fechaInicial.charAt(i);
	}
	
	if(esVacio(separadorFecha))
	{
	    document.getElementById(idObjetoInicial).select();
	    cancelEvent(event);
	    return false;
	}
	
	if(fechaFinal.indexOf(separadorFecha) == -1)
	{
	   document.getElementById(idObjetoFinal).select();
	   cancelEvent(event);
	   return false;
	}
	
	var arregloInicial = fechaInicial.split(separadorFecha);
	var arregloFinal = fechaFinal.split(separadorFecha);
	
	var fechaUno = new Date(arregloInicial[2],arregloInicial[1]-1,arregloInicial[0]);
	var fechaDos = new Date(arregloFinal[2],arregloFinal[1]-1,arregloFinal[0]);
	
	var diferencia = fechaDos.getTime() -  fechaUno.getTime();
	
	if(diferencia<0)
	{
	   document.getElementById(idObjetoFinal).select();
	   cancelEvent(event);
	   return false;
	}
	
	return true;  
}



/**
  Creado por: Jorge Chicala
  Fecha Creaci?n: 03/03/2006
  Version: 1.0
  Descripci?n: Obtiene la posici?n del cursor dentro de un text (y quizas un textares)
  Par?metros de Entrada: 
  Par?metros de Salida: N?mero que indica la posici?n del cursor
  Evento: 
  Browser: Pruebas realizadas en IE 6.0.2600., FireFox 1.5 y Netscape 8.1
*/

function obtenerPosicionCursor(objeto)
{
	var caret_pos = 0;
	if(document.selection){
		var range = document.selection.createRange();
		var bookmark = range.getBookmark();
		caret_pos = bookmark.charCodeAt(2) - 2;
	}
	else{
		var start = objeto.selectionStart;
		var end = objeto.selectionEnd;
		caret_pos = start!=end?0:start;
	}

	return caret_pos;
}



/**
  Creado por: Jorge Chicala
  Fecha Creaci?n: 03/03/2006
  Version: 1.0
  Descripci?n: Este m?todo cumple dos funciones:
               - Si posInicio != posfinal selecciona el rango de elementos de texto definido por las posiciones.
			   - Si posInicio = posFinal posiciona el elemento en esa posici?n. 
  Par?metros de Entrada:
                         -OBJETO: objeto en elc cual se posiciona el cursor.
						 -POSINICIO: posici?n inicial del cursor
						 -POSFIN: posici?n final del cursor
  Par?metros de Salida: Rango seleccionado.
  Evento: 
  Browser: Pruebas realizadas en IE 6.0.2600., FireFox 1.5 y Netscape 8.1
*/

function posicionarCursor(objeto,posInicio,posFin) 
{
     if( objeto.setSelectionRange ) 
	 {
    	 objeto.setSelectionRange(posInicio,posFin);
     } 
     else if( objeto.createTextRange ) 
	 {
         var rango = objeto.createTextRange();
         rango.collapse(true);
         rango.moveEnd('character',posFin);
         rango.moveStart('character',posInicio);
		 rango.select();
	 }
}    

/**
  Creado por: Jorge Chicala
  Fecha Creaci?n: 07/03/2006
  Version: 1.0
  Descripci?n: Funci?n que valida la cadena ingresada sea solo n?meros, solo se aplica a cadenas qeu no posea un formato de n?meros
  Par?metros de Entrada: - EVENTO: se debe de llenar con el valor event.
						 -IDOBJETO: identifiaci?n del objeto.
  Par?metros de Salida: 
  Evento: 
  Browser: Pruebas realizadas en IE 6.0.2600., FireFox 1.5 y Netscape 8.1
*/

function validarNumero(evento,idObjeto)
{
     var objeto = document.getElementById(idObjeto);
	 var cadena = objeto.value;
	 var bandera = false;
	 
	 var key = getKeyCode(evento);
	 
	 //validaci?n del uso de teclas de flechas
	 if(key == 37 || key == 39 || key == 8 || key == 46) //flecha izq=37, flecha derecha=39, flecha arriba=38, flecha abajo=40
	    bandera = true;
		
     var posCursor = this.obtenerPosicionCursor(objeto);
     var aux = cadena.substr(posCursor);
     var cadena = cadena.substr(0,posCursor);
	 
	 for(var i=0; i<cadena.length; i++)
	 {
	     if(!isNum(cadena.charAt(i)))
		 {
		    cadena = cadena.substr(0,i);
			posCursor = i;
			break;
		 }
	 }//fin del for
	
	if(!bandera)
	{
	   objeto.value = cadena + aux;
	   this. posicionarCursor(document.getElementById(idObjeto),posCursor,posCursor);
	}  
} //fin del m?todo validar numero   

/**
  Creado por: Jorge Chicala
  Fecha Creaci?n: 10/03/2006
  Version: 1.0
  Descripci?n: Funci?n que permite limpiar los elementos de un formulario
  Par?metros de Entrada: - NOMBREFORMULARIO: Nombre del formulario que se desea limpiar.
  Par?metros de Salida:
  Evento: - onClick
  Browser: Pruebas realizadas en IE 6.0.2600.
*/
function limpiarTodoFormulario(nombreFormulario)
{
     var formulario = eval("document."+nombreFormulario);
	 
	 //si el formulario se encuentra en el documento se vacian los campos del formulario
	 if(formulario)
	 {
	    formulario.reset();
	 }
}//fin del m?todo limpiarTodo



/**
  Creado por: Jorge Chicala
  Fecha Creaci?n: 10/03/2006
  Version: 1.0
  Descripci?n: Funci?n que permite verificar si los campos obligatorios de un formulario est?n llenos.
  Par?metros de Entrada: - NOMBREFORMULARIO: Nombre del formulario que se desea verificar los campos.
                         - ARREGLOIDCAMPO: arreglo con los ids de los campos que se definen como obligatorios.
  Par?metros de Salida: - Retorna true o false dependiendo si los campos obligatorios et?n llenos 
  Evento: - onClick
  Browser: Pruebas realizadas en IE 6.0.2600.
*/
function verificarCampoLLeno(nombreFormulario,arregloIdCampo)
  {
     var banderaRadio = false;
	 var banderaCheck = false;
	 var banderaSelect = false;
	 
	 for(var i=0; i<arregloIdCampo.length; i++)
	 {
	    var objeto = document.getElementById(arregloIdCampo[i]);
		
		//si esxiste el objeto se procede a procesar
		if(objeto)
		{
		   //objetos text o textarea
		   if(objeto.type=="text" || objeto.type=="textarea")
		   {
		      if(esVacio(objeto.value))
			  {
			     objeto.focus();
			     return false;
			  }	 
		   }
		   
		   //objetos radio
		   if(objeto.type=="radio")
		   {
		      var arrRadio = eval('document.'+nombreFormulario+'.'+objeto.name);
			  for(var j=0; j<arrRadio.length; j++)
			  {
			     if(arrRadio[j].checked == true)
				 {
				     banderaRadio = true;
					 break;
				 }
			  }//fin del for
			  
			  if(!banderaRadio)
			  {
				    objeto.focus();
					return false;
			  }
		  }
		  
		  
		  //objetos check
		   if(objeto.type=="checkbox")
		   {
		      //var arrCheck = eval('document.'+nombreFormulario+'.'+objeto.name);
			  var arrCheck = new Array();
			  var arrElements = eval('document.'+nombreFormulario+'.elements');
			  
			  for(var k=0; k<arrElements.length; k++)
			  {
			     if(arrElements[k].type == "checkbox")
				 {
				    arrCheck.push(arrElements[k]);
				 }
			  }
			  
			  for(var j=0; j<arrCheck.length; j++)
			  {
			     if(arrCheck[j].checked == true)
				 {
				     banderaCheck = true;
					 break;
				 }
			  }//fin del for
			  
			  if(!banderaCheck)
			  {
				    objeto.focus();
					return false;
			  }
		  }	
		  
		  //objeto select
		  if(objeto.type.indexOf("select")!=-1)
		  {
		     for(var j=0; j<objeto.options.length; j++)
			 {
			    if(!esVacio(objeto.options[j].value) && (objeto.options[j].selected))
				{
				     banderaSelect = true;
					 break;
				}
			 }//fin del for
			 
			 if(!banderaSelect)
			 {
				 objeto.focus();
				 return false;
			 }
		  }
		}//fin de if(objeto)
     }//fin del for
	 
	 return true;	
}//fin de funci?n verificar campo lleno


/**********************************************************************/    

// funcion que recibe cadena de variables unidas por un caracter especial (@) y devuelve una cadena 
// formada por los valores evaluados de estas cadenas.
// recibe el frame de consulta y los datos de consulta. ya no se necesita el
// formulario para acceder a las variables ya que se accesa a estas por 
// el id(document.getElementById())

	function retornaValores(frameConsulta, nombreCamposConsulta)
	{
        var ni_cont=0;
        var s_arreglo = nombreCamposConsulta.split("@");
        var s_contenido_arreglo ="";
        var s_codigosConsulta = "";
		if(s_arreglo.length >0){
	    for (var ni_i=0;s_arreglo.length > ni_i;ni_i++){
	        var s_cadenaValida = 'document.getElementById(' + '"' + s_arreglo[ni_i] +'"'+ ')';
	        if(eval(s_cadenaValida+'.value')== "z")
	        {
	          ni_cont++;
	        }
	        else
	        {
	           s_contenido_arreglo+= "@"+eval(s_cadenaValida+'.value');
	        }
	    }
	    if(ni_cont>0)
        {
	       return false;
	    }
 	    else
        {
			s_contenido_arreglo = s_contenido_arreglo.substring(s_contenido_arreglo.indexOf("@")+1);
	    }
        }
		//alert("cadena armada_ger: " + s_contenido_arreglo);
		return s_contenido_arreglo;
	}
  
		
	/**
	* Format date as a string
	* @param date - a date object (usually "new Date();")
	* @param format - a string format, eg. "DD-MM-YYYY"
	*/
	function dateFormat(date, format) {
		if (format==""){
			format="DD/MM/YYYY";
		}
		format=format.toUpperCase();
		
	    // Calculate date parts and replace instances in format string accordingly
	    format = format.replace("DD", (date.getDate() < 10 ? '0' : '') + date.getDate()); // Pad with '0' if needed
	    format = format.replace("MM", (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)); // Months are zero-based
	    format = format.replace("YYYY", date.getFullYear());
	    return format;
	}
	
	/**
	* Format date as a string
	* @param date - a date object (usually "new Date();")
	* @param format - a string format, eg. "DD-MM-YYYY"
	*/
	function addDaysToDate(objValue, days) {
		var a=String(objValue).split("/"); 
		var plazo=parseInt(days);
		
		var date1 = new Date(a[2], a[1]-1, a[0]);
		var dateVenc= new Date(date1);

		dateVenc.setTime( date1.getTime() + plazo * 86400000 );
	    return dateVenc;
	}	
	
	/**
	* compara fecha mayor entre 2 valores, se espera 2 tipos de formatos:	dia/mes/anio		dia/mes/anio hora:min:seg
	* @param valor objeto A
	* @param Valor objeto B
	*/
	function esFechaMayor(objValueA, objValueB) {
		var resultado = false;
		if (String(objValueA).indexOf(" ") > 0 && String(objValueA).indexOf(":") > 0){
			var a = String(objValueA).split(" ");
			var b = a[0].split("/");
			var c = a[1].split(":");
			
			var dateA = new Date(b[2], b[1]-1, b[0], c[0], c[1], c[2]);
		}else{
			var a=String(objValueA).split("/");
			var dateA = new Date(a[2], a[1]-1, a[0]);
		}
		
		if (String(objValueB).indexOf(" ") > 0 && String(objValueB).indexOf(":") > 0){
			var a = String(objValueB).split(" ");
			var b = a[0].split("/");
			var c = a[1].split(":");
			
			var dateB = new Date(b[2], b[1]-1, b[0], c[0], c[1], c[2]);
		}else{
			var a=String(objValueB).split("/");
			var dateB = new Date(a[2], a[1]-1, a[0]);
		}
		
		if ( dateA > dateB ){
			resultado=true;
		}
	
	    return resultado;
	}	
	
	function convertirFechaString(fecha) {
		var dd = fecha.getDate();
		var mm = fecha.getMonth()+1;
		var yyyy = fecha.getFullYear();

		if(dd<10) {
		    dd = '0'+dd
		} 

		if(mm<10) {
		    mm = '0'+mm
		} 

		resultado = dd + '/' + mm + '/' + yyyy; 

	    return resultado;
	}
	
	function cmbBuscarPorValor(idCombo, valorABuscar){
		var element = document.getElementById(idCombo);
		var encontro=false;
		for (var i=0;i<element.length;i++){
			if (element.options[i].value==valorABuscar){
				element.options[i].selected = true;
				encontro=true;
			}
		}
		return encontro;
	}	

	function cmbAdicionarItem(idCombo, key,value){
		// Create an Option object       
        var opt = document.createElement("option");        
        // Assign text and value to Option object
        opt.text = value;
        opt.value = key;
        // Add an Option object to Drop Down List Box
        document.getElementById(idCombo).options.add(opt);
	}
	
	function cmbAdicionaItemSiNoSeEncuentra(idCombo, key,value){
		if ( !cmbBuscarPorValor(idCombo, value) ){
			cmbAdicionarItem(idCombo, key,value);
			document.getElementById(idCombo).value=key;
		}
	}
	
	function getKeyCode(evt){
		evt = evt || event;
        return evt.keyCode ? evt.keyCode : evt.which ? evt.which : evt.charCode;
    }
	
	function cancelEvent(evt){
		evt = evt||window.event;
		if (evt.stopPropagation) {
			evt.preventDefault();
			evt.stopPropagation();
		}
		evt.cancelBubble = true;
		evt.returnValue = false;
		
		return false;
	}
	
	function esKeyCodeDesplazamiento(keyCode){
		/*9-tab,  13-enter,  16-shift,  27-esc, 91-left, 92-right  , 
		 * 35-end, 36-home,  37-40-flechas ,  46-DEL,  8-backsp
		 * */
		if ( keyCode == '8' ||  keyCode == '9' || keyCode == '13' || keyCode == '16' || keyCode == '27' || keyCode == '91' || 
				keyCode == '92' || keyCode == '35' || keyCode == '36' || keyCode == '37' || keyCode == '38' || 
				keyCode == '39' || keyCode == '40' || keyCode == '46'    
				){
			return true;
		}else{
			return false;
		}
	}
	function validateEnter(e) {
		var key=e.keyCode || e.which;
		if (key==13){ return true; } else { return false; }
	}
	//funcion que suma los dias que se le indique por primer parametro, el segundo la fecha (dd/MM/yyy-dd-MM-yyyy)
	function fechasMasUno(dias, fecha){
   		var Fecha = new Date();
   	 	var sFecha = fecha || (Fecha.getDate() + "/" + (Fecha.getMonth() +1) + "/" + Fecha.getFullYear());
    	var sep = sFecha.indexOf('/') != -1 ? '/' : '-'; 
    	var aFecha = sFecha.split(sep);
    	var fecha = aFecha[2]+'/'+aFecha[1]+'/'+aFecha[0];
    	fecha= new Date(fecha);
    	fecha.setDate(fecha.getDate()+parseInt(dias));
    	var anno=fecha.getFullYear();
    	var mes= fecha.getMonth()+1;
    	var dia= fecha.getDate();
    	mes = (mes < 10) ? ("0" + mes) : mes;
    	dia = (dia < 10) ? ("0" + dia) : dia;
    	var fechaFinal = dia+sep+mes+sep+anno;
    	return (fechaFinal);
    }
	
	//funcion para calcular dias entre dos fecha (no hace validacion)
	function calcularDiasFechas(objFecha1,objFecha2){
		var dia1= objFecha1.substr(0,2);
		var mes1= objFecha1.substr(3,2);
		var anyo1= objFecha1.substr(6);
		
		var dia2= objFecha2.substr(0,2);
		var mes2= objFecha2.substr(3,2);
		var anyo2= objFecha2.substr(6);

		var fechaIni = new Date(anyo1,mes1,dia1).getTime();
		var fechaFin = new Date(anyo2,mes2,dia2).getTime();
		var diff = fechaFin - fechaIni;
		return diff/(1000*60*60*24);
		
		
	}
	
	function getElementByIdOrName(my_document, value) {
		var result = my_document.getElementById(value);
		if (!result) {
			var elements = my_document.getElementsByName(value);
			result = elements.length? elements[0]:null;
		}
		return result;
	}
	
	function popupVisibility(id,vis)
	{
		var element = document.getElementById(id);
		if(element) {
			element.style.visibility = vis ? "visible":"hidden";
		}
		
		return false;
	}
	
	function popupVisibilityFixed(id,vis)
	{
		var element = document.getElementById(id);
		if(element) {
			element.style.visibility = vis ? "visible":"hidden";
		}
		
		return false;
	}
	
	function setStyles(frame, styles_string) {
		function getvalue(prop){
			var start = styles_string.indexOf(prop);
			var prop_length = (prop).length+1;
			var end = styles_string.indexOf(";", start);
			if (end == -1) end = styles_string.indexOf(",", start);
			if (end == -1) end = styles_string.length-1;
			return parseInt(styles_string.substr(start+prop_length, end-(start+prop_length)));
		}

		var width = getvalue("dialogWidth")*15;
		var height = getvalue("dialogHeight")*10;
		
		if (isNaN(width)) width = getvalue('width');
		if (isNaN(height)) height = getvalue('height')
		frame.width = width+80;
		frame.height = height+80;
	}
	
	function dialogIframeLoaded(container, frame, callback, callback_window, styles) {
		if (!callback) callback = function(){};
		if (!callback_window) callback_window = window;
		if (!styles) styles = "dialogWidth: 20;dialogHeight:10;";
		
		
		var html_frame = container.getElementsByTagName('iframe')[0];
		container.style.display = 'flex';
		var close_message= top.document.getElementById('close_message');
		html_frame.focus();
		
				
		function close_modal() {
			container.calling = false;
			container.style.display = 'none';
			frame.document.documentElement.innerHTML = '';
			callback_window.focus();
			callback();
		};
		close_message.onclick = close_modal;
		frame['cerrarVentana'] = close_modal;
		
		setStyles(html_frame, styles);
	}
	
	function startCheckFrameLoaded(frame_container, frame, callback_window, styles, callback, seconds_to_check, current_second) {
		if (!seconds_to_check) seconds_to_check = 60;
		if (!current_second) current_second = 0;
		
		var ms_to_wait = 50;
		if(current_second > seconds_to_check)
			return;
	
		setTimeout(function() {
			if (frame.document.body && frame.document.body.innerHTML != '') {
				dialogIframeLoaded(frame_container, frame, callback, callback_window, styles);
			}
			else {
				startCheckFrameLoaded(frame_container, frame, callback_window, styles, callback, seconds_to_check, current_second + ms_to_wait/1000)
			}
		}, ms_to_wait);
	}

	function showModalMessagerFromUrl(url, message_parent, styles, callback) {
		 url = encodeURI(url);						
		if (!callback) callback = function(){};
		
		try {
			var frame_container = top.document.getElementById('message_dialog_container');
			frame_container.frame = window;
			if(frame_container.calling){
				setTimeout(function(){ top.document.getElementById('message_dialog_container').calling = false;  }, 600);
				return;
			}
			
			
			$("#message_dialog_container #old", top.window.document).remove();
			var iframe = top.document.getElementById('message_dialog_iframe');
			if(iframe){
				var newIframe = iframe.cloneNode(true);
				iframe.id="old"
				iframe.name="old"
				iframe.style.display="none"
				iframe.parentNode.insertBefore(newIframe, iframe);
				var frame = newIframe.contentWindow;
				top.message_dialog_iframe = frame;
				
				frame_container = top.document.getElementById('message_dialog_container');
				frame_container.frame = window;
			}
			
			
			frame_container.calling = true;
		
			frame.location.href = url;
		}
		catch(err) {
			var frame_container = top.document.createElement("div");
			frame_container.calling = true;
			frame_container.style.cssText = "display:none; position: absolute; width: 100%; height: 100%; top: 0; justify-content: center;";
			frame_container.setAttribute('id','message_dialog_container');
			frame_container.innerHTML = "<div id='modal-back' style='z-index:80; background-color:black; opacity: 50%; position: absolute; width: 100%; height: 100%; top: 0;'></div><iframe id='message_dialog_iframe' name='message_dialog_iframe' onload='dialogIframeLoaded' style='z-index: 100; background-color: white; margin-top: 40px;'></iframe><div style='z-index:120; margin-left:-24; height: 0px; margin-top:42;'><button  id='close_message' alt='Cerrar Ventana' title='Cerrar Ventana' style='cursor:pointer; font-size: 20px; color: black; text-decoration: none; outline: none;' tabindex='-1'><font size='-2' face='verdana, arial, helvetica, sans serif' color='black'>X</font></button></div>"
			top.document.body.append(frame_container);
			frame = top.document.getElementById('message_dialog_iframe').contentWindow;
			frame.location.href = url;
		}
						
		startCheckFrameLoaded(frame_container, frame, window, styles, callback)
		
	}
	

function showModalMessage(message_parent, styles, callback) {
		var content = "<html><body style='background: #dfdfe3;overflow:hidden;'><h3>"+"Alerta:"+"</h3><center><h4>"+message_parent+"</h4></center></body></html>"
		try {
			var frame_container = top.document.getElementById('message_dialog_container');
			var frame = top.message_dialog_iframe;		
            frame.document.documentElement.innerHTML = content
		}
		catch(err) {
			var frame_container = top.document.createElement("div");
			frame_container.style.cssText = "display:none; position: absolute; width: 100%; height: 50%; top: 0; justify-content: center;";
			frame_container.setAttribute('id','message_dialog_container');
			frame_container.innerHTML = "<div id='modal-back' style='z-index:80; background-color:black; opacity: 50%; position: absolute; width: 50%; height: 50%; top: 0;'></div><iframe id='message_dialog_iframe' name='message_dialog_iframe' onload='dialogIframeLoaded' style='z-index: 100; background-color: white; margin-top: 40px;'></iframe><div style='z-index:120; margin-left:-24; height: 0px; margin-top:42;'><button  id='close_message' alt='Cerrar Ventana' title='Cerrar Ventana' style='cursor:pointer; font-size: 20px; color: black; text-decoration: none; outline: none;' tabindex='-1'><font size='-2' face='verdana, arial, helvetica, sans serif' color='black'>X</font></button></div>"
			$("body").append(frame_container);				//  top.document.body.append(frame_container);
			var frame = top.message_dialog_iframe;
			$("frame").html(content);									//frame.document.documentElement.innerHTML = content
		}
		
		dialogIframeLoaded(frame_container, frame, callback, window, styles);
		html_style=frame_container.getElementsByTagName('iframe')[0]
		html_style.height=100;
		html_style.width=500
	}
    
    function getAppPath(){
    	return window.location.href.split("/").slice(0,4).join("/")+"/";
    }
    
    function getFirstParent(wnd){
    	wnd = wnd || window;
	    if(wnd.parent!=wnd)
	        return getFirstParent(wnd.parent);
	    return wnd;
	}
    

function modificationKeyEvent(identificador,eventName) {
		document.getElementById(identificador).dispatchEvent(new Event(eventName));
	}
	
	
	function retornaAproximacionesDimensionDiv(){
		
//		    var formObj = document.frm_formulario;
		    document.getElementById("btn_aceptar").style.visibility='visible';
		    document.getElementById("btn_aceptar").style.display='block';
			
		    document.getElementById("btn_cancelar").style.visibility='visible';
		    document.getElementById("btn_cancelar").style.display='block';
			
			
//			document.getElementById("btn_detalle").style.visibility='visible';
//			document.getElementById("btn_detalle").style.display='block';			
		}
		
  			function lanzarApplet(clase,impNoCtaCte,s_nroChequePresentacion,s_presentaBtnApplet,impBeneficiario,benef_x,benef_y,valorChequeTRX,val_x,val_y,impValorLetras,valLetra_x,valLetra_y,impFechaCheque,lugarFecha_x,lugarFecha_y,yIni,yIni2,anchoAsiento,ContextPath,jsessionid,funcionScript){
				document.getElementById("lanzaApplet").disabled = true;
	  			data = {
	  				clase: clase,
	  				width: 580,
	  				height: 270,
	  				hostname: window.location.hostname,
	  				port: window.location.port,
	  				protocol: window.location.protocol,
	  				title: '',
					version: '1.0.1',
	  				parametros:{
			  			cuenta:impNoCtaCte,
			  			cheque:s_nroChequePresentacion,
			  			presentaBtnImpresion:s_presentaBtnApplet,
			  			beneficiario:impBeneficiario,
			  			benefX:benef_x,
			  	  		benefY:benef_y,
			  	  		valor:valorChequeTRX,
			  	  		valorX:val_x,
			  	  		valorY:val_y,
			  	  		valorLetras:impValorLetras,
			  	  		valorLetrasX:valLetra_x,
			  	  		valorLetrasY:valLetra_y,
				  	  	lugarFecha:impFechaCheque,
				  	  	lugarFechaX:lugarFecha_x,
				  	  	lugarFechaY:lugarFecha_y,
				  	  	yIni:yIni,
				  		yIni2:yIni2,
				  		anchoAsiento:anchoAsiento,
						rutaAplicacion:ContextPath,				                         
						funcionScript:funcionScript,
						jsessionId:jsessionid
					}
	  			}
				if(typeof JSON!='undefined'){
					data.parametros = JSON.stringify(data.parametros);
					data = JSON.stringify(data);
				}
	  			
	  			var socketPCFD = new WebSocket("ws://127.0.0.1:58954");
	
	  			socketPCFD.onopen = function(event) {
	  				socketPCFD.send(data);
	  				document.getElementById("lanzaApplet").disabled=true;
	  			  
	  			};
	  			socketPCFD.onmessage = function(event) {
				  if(event.data=='NEW_VERSION'){
					showModalMessagerFromUrl(ContextPath+"/Applets/message_no_javaPrinter.jsp?version=1", "",'edge:raised;dialogHeight:18;dialogWidth:22;help:no;status:no' )
				  }
				  else{
		  			eval(event.data);
			  		document.getElementById("lanzaApplet").style.visibility="hidden";
		  			// Cierra la conexión con el servidor
		  			socketPCFD.close();
				  }
	  			};
	
	  			socketPCFD.onerror = function(error) {
	  			  showModalMessagerFromUrl(ContextPath+"/Applets/message_no_javaPrinter.jsp", "",'edge:raised;dialogHeight:18;dialogWidth:22;help:no;status:no' )
	  			  document.getElementById("lanzaApplet").disabled = false;
				};
	
	  			socketPCFD.onclose = function(event) {
		  		  document.getElementById("lanzaApplet").disabled=false;
	  			  
	  			};
	  		
  			}  
	
	

function getFormHTML(impNoCtaCte,s_nroChequePresentacion,s_presentaBtnApplet,impBeneficiario,benef_x,benef_y,valorChequeTRX,val_x,val_y,impValorLetras,valLetra_x,valLetra_y,impFechaCheque,lugarFecha_x,lugarFecha_y,yIni,yIni2,anchoAsiento,ContextPath,jsessionid,funcionScript){
		 var impValor = impValorLetras;
         var maxLength = 70; 
         var padding = maxLength - impValor.length;
         for (var i = 0; i < padding; i++) {
         impValor += "x";
         }     

	var doc=''
	  +'<style>'
	  +'    .form-container {'
	  +'      flex-direction: column;'
	  +'      align-items: center;'
	  +'      justify-content: center;'
	  +'      background: #dfdfdf;'
	  +'      padding-right: 40px;'
	  +'	  padding-bottom: 5px;'
	  +'      height: 305px;'
	  +'      border: 1px double;'	  
	  +'    }'
	  +'    .form-row {'
	  +'      margin-bottom: 0px;'
	  +'      display: flex;'
	  +'      justify-content: initial;'
	  +'      margin: 10px 0;'
	  +'    }'
	  +'    .header {'
	  +'      text-align: right;'
	  +'      font-size: 13px;'
	  +'      font-weight: bold;'
	  +'    }'
	  +'    .hea {'
	  +'      text-align: right;'
	  +'      font-size: 13px;'
	  +'      font-weight: bold;'
	  +'    }'
	  +'    .form-label {'
	  +'      font-size: 13px;'
	  +'      font-weight: bold;'
	  +'    }'
	  +'    .form-value {'
	  +'      text-align: left;'
	  +'      font-size: 11px;'
	  +'    }'
	  +'    .form-fecha {'
	  +'      font-size: 12px;'
	  +'      width: 80%;'
	  +'      text-align: left;'
	  +'      font-size: 11px;'
	  +'    }'
	  +'    .form-special {'
	  +'      font-size: 18px;'
	  +'      font-weight: bold;'
	  +'      color: blue;'
	  +'      width: 60%;'
	  +'      text-align: right;'
	  +'    }'
	  +'    .form-button {'
	  +'      padding: 5px;'
	  +'      margin: 10px 0;'
	  +'      color: black;'
	  +'      cursor: pointer;'
	  +'      text-align: center;'
	  +'    }'
	  +'    .form-separator {'
	  +'      border-top: 1px solid gray;'
	  +'      width: 64%;'
	  +'    }'
	  +'    .embed {'
	  +'      height: 0;'
	  +'      _height: 230;'
	  +'    }'
	  +'  </style>'
	  +'    <center>'
	  +'      <center>'
	  +'        <div class="form-container">'
	  +'          <div class="header" style="margin-top: 35px;">N&uacutemero de Cuenta: <span  class="form-special">'+impNoCtaCte+'</span> </div>'
	  +'        '
	  +'          <div class="header">N&uacutemero de Cheque: <span class="form-special">'+s_nroChequePresentacion+'</span> </div>'
	  +'        <div class="form-row" style="margin-bottom: 0px;">'
	  +'          <div class="form-label" style="width: 22%;" >Paguese A:  </div>'
	  +'          <div class="form-value" style="width: 92%;">'+impBeneficiario+'</div>'
	  +'           <div>$**"'+valorChequeTRX+'**</div>'
	  +'        </div>'
	  +'        <div class="form-separator" style="margin-left: 2px;"></div>'
	  +'        '
	  +'        <div class="form-row" style="margin-bottom: 0px;">'
	  +'          <div class="form-label" style="width: 19%;">La Suma de: </div>'
	  +'          <div class="form-value" style="margin-left: -15px;">'
	  +'           '+impValor
	  +'          </div>'
	  +'        </div>'
	  +'        <div class="form-separator" style="margin-left: 108px;width: 86%;margin-bottom: 10px;"></div>'
	  +'        <div class="form-fecha" style="width: 94%;">'+impFechaCheque+'</div>'
	  +'        <div class="form-separator" style="margin-right: 50%;width: 44%;"></div>'
	  +'        <div class="form-row" style="margin-bottom: 0px;margin-top: 10px;margin-left: 21px;">'
	  +'          <div class="form-label">Lugar, Fecha Emisi&oacuten</div>'
	  +'        </div>'
		+'		'
		+(s_presentaBtnApplet!='N'?"<input type='button' id='lanzaApplet' class='form-button' onClick=\"javascript:lanzarApplet('PrintChequeFormatoDiario','"+impNoCtaCte+"','"+s_nroChequePresentacion+"','"+s_presentaBtnApplet+"','"+impBeneficiario+"','"+benef_x+"','"+benef_y+"','"+valorChequeTRX+"','"+val_x+"','"+val_y+"','"+impValorLetras+"','"+valLetra_x+"','"+valLetra_y+"','"+impFechaCheque+"','"+lugarFecha_x+"','"+lugarFecha_y+"','"+yIni+"','"+yIni2+"','"+anchoAsiento+"','"+ContextPath+"','"+jsessionid+"','"+funcionScript+"');\" value='Emitir cheque' />":"")
	  +'      </div>'
	  +'       </center>'
	  +'      </div>'
	  +'     </center>';
	    if(document.getElementById("fms_bodyCriterioDOWN_pago") !== ""){
			var div = document.getElementById("fms_bodyCriterioDOWN_pago");
			div.innerHTML = doc;
		} else {
	    document.write(doc);		
		}

}

/****************Extract from accounting.js https://github.com/openexchangerates/accounting.js*******************************/
function checkPrecision(val, base) {
	val = Math.round(Math.abs(val));
	return isNaN(val)? base : val;
}

function isArray(obj) {
	return Array.isArray ? Array.isArray(obj) : toString.call(obj) === '[object Array]';
}

function unformat(value, decimal) {
		// Recursively unformat arrays:
		if (isArray(value)) {
			return map(value, function(val) {
				return unformat(val, decimal);
			});
		}

		// Fails silently (need decent errors):
		value = value || 0;

		// Return the value as-is if it's already a number:
		if (typeof value === "number") return value;

		// Default decimal point comes from settings, but could be set to eg. "," in opts:
		decimal = decimal || 0;

		 // Build regex to strip out everything except digits, decimal point and minus sign:
		var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]),
			unformatted = parseFloat(
				("" + value)
				.replace(/\((?=\d+)(.*)\)/, "-$1") // replace bracketed values with negatives
				.replace(regex, '')         // strip out any cruft
				.replace(decimal, '.')      // make sure decimal point is standard
			);

		// This will fail silently which may cause trouble, let's wait and see:
		return !isNaN(unformatted) ? unformatted : 0;
	};

function roundToFixed(value, precision) {
		precision = checkPrecision(precision, 0);

		var exponentialForm = Number(unformat(value) + 'e' + precision);
		var rounded = Math.round(exponentialForm);
		var finalResult = Number(rounded + 'e-' + precision).toFixed(precision);
		return finalResult;
	};
/*********************************END accounting.js****************************************************/
function roundFixed(number, decimals) {
	return roundToFixed(number, decimals);
}
	
	function validaDocLCBS(){
		if(document.plantillaDocumento.nroDocumento.disabled = true){

		}else{

			validaNroDocumento(this,17); 
			validaDocumentoRepetido();
			validaDocumentoLCBS();
		}
	}
	
function cargarReporteDiv(url, elementId) {
  var elemento = document.getElementById(elementId);
  if (elemento) {
    var embed = document.createElement("EMBED");
    embed.setAttribute("src", url);
    embed.style="width: 0%; height: 0%";
    embed.onload = function() {
		$(elemento).find(":not(embed)").remove()
        embed.style="width: 100%; height: 100%";
    }
    $(elemento).get(0).appendChild(embed);
  } else {
    console.log("El elemento con id " + elementId + " no existe en el DOM.");
  }
}

function setHeights(div){
	var hijos = (typeof div == 'object'? div: $("#"+div)).children();
	for(i = 0; i < hijos.length; i++){
		if(!arguments[i+1])
			return;
		$(hijos[i]).css("height", arguments[i+1]);
	}
}

function triggerEnter(id) {
	    let e = $.Event("keypress");
	    e.which = 13; // # Some key code value
	    $("#" + id).trigger(e);
	}


  function procesando_evalDiv()
  {
   var divProcesando;
	var msjProc ="Procesando...";
	var outpuy = "";
	var strTMP   ="";
	var strHTML  ="";
	
	var cadenaImagen="..";
		if (arguments.length>2 && arguments[2]!=""){
			cadenaImagen=arguments[2];
		} 
		if (arguments.length>1 && arguments[1]!=""){
			msjProc=arguments[1];
		}
		if (typeof arguments[0]== "object"){
			divProcesando=(arguments[0]);
			}
		 else if (arguments.length>3 && arguments[3]!=""){
			divProcesando=eval(arguments[3]+"document.getElementById(\""+arguments[0]+"\")" );
		}else{
			divProcesando=document.getElementById(arguments[0]);
		}

   output = "<table width='100%'><tr><td><table align='center'>"+
		 "<tr><td align='center'>"+
		 "&nbsp;<IMG height='20' width='90' src='"+getAppPath()+"/imgs/wait.gif' onerror='"+cadenaImagen+"/imgs/wait.gif'/>"+
		 "</td></tr>"+
		 "<tr><td align='center'>"+
		 "<font color='blue' style='font-size: 10px;font-family: verdana, arial, helvetica;' >"+msjProc+"</font>"+
		 "</td></tr></table></td></tr></table>";	
		divProcesando.innerHTML=output;
	}
	