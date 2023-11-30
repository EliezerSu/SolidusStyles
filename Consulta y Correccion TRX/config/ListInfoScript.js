var colorAntesRollover;

	
/*
  Funciones utilizadas para el color del rollover sobre el contenido de la cosulta
  
*/	    
function fondoMouseOver(identificadorFila,colorRollover)
{
 	 elementoTr = document.getElementById(identificadorFila);
 	 if(elementoTr.currentStyle)
	 	 colorAntesRollover = elementoTr.style["backgroundColor"];
 	 else
		colorAntesRollover = window.getComputedStyle(elementoTr, null).getPropertyValue("background-color");
	 elementoTr.style.backgroundColor= String(colorRollover);
}
 	    
function fondoMouseOut(identificadorFila)
{
 	  elementoTr = document.getElementById(identificadorFila);
 	  elementoTr.style.backgroundColor = String(colorAntesRollover);
}


function marcaFila(e,s){
	 //onclick="marcaFila(event,this)"
   e=e||window.event;
   var tgt=e.target || e.srcElement;
   while(tgt.parentNode!=s)
    if (tgt.tagName.toLowerCase() == 'td'){
	//alert("id de Fila:"+tgt.parentNode.id);
    	elementoTr = document.getElementById(tgt.parentNode.id);
    	colorAntesRollover = elementoTr.style["backgroundColor"];
     	elementoTr.style.backgroundColor = "#999900";
        //onmouseover="javascript:fondoMouseOver(this.id,'#FFFFCC')" onmouseout="javascript:fondoMouseOut(this.id)"
        elementoTr.onmouseout="";
       // elementoTr.onmouseover="";
        //elementoTr.className="SeleccionadoTr";
    	//alert("sdfd");
    	break;
    //alert(tgt.parentNode.rowIndex); return;
        } else tgt=tgt.parentNode;
}



/*
  Funciones para la paginaci�n del contenido por medio del combo y de los enlaces "Anterior" y
  "Siguiente"
*/
function setRecordNum(recNum,nombreFormulario,textEscondido)
{
    formObj=eval("document."+nombreFormulario);
    var textOc = eval("formObj."+textEscondido);
    textOc.value = recNum;
    if(window.submitPagina){
    	submitPagina();
     }
    formObj.submit();
}

function enviar(valor1,valor2,nombreFormulario,textEscondido)
{
    var u=(valor2-1)*valor1+1;
    setRecordNum(u,nombreFormulario,textEscondido);
}

function enviarBloque(valor,nombreFormulario,textEscondido)
{
	setRecordNum(valor,nombreFormulario,textEscondido);
}
 
//funci�n que se ejecuta cuando existe un action
function enviarConAccion(nombreFormulario,accion)
{
   formObj= eval("document."+nombreFormulario);
   formObj.action=accion;
   formObj.submit();
} 




/**
  Fiunci?n p?r medio de la cual se crea la cabecera como hiperenlaces para realizar el ordenamiento.
*/

//  .getElementByTagId(("table")   "tabla_frm_consulta"));
function flechaOrdenamiento(table) {
    
	var bandera;
	if (table.rows && table.rows.length > 0) {
        var firstRow = table.rows[0];
    }
    if (!firstRow) return;
    //alert("Primera Fila:"+firstRow);
    
    // We have a first row: assume it's the header, and make its contents clickable links
	for (var i=0;i<firstRow.cells.length;i++) 
	{
        bandera = false;
		for(var j=0; j<arregloSort.length;j++){
		   if(i == arregloSort[j])
		     bandera = true;
		}
		//alert("celda a Ordenar:"+i);
		var cell = firstRow.cells[i];
		//alert("celda Escogida y Contenido:"+cell);
		var txt = ts_getInnerText(cell); //obtiene el texto que forma parte del titulo
		//alert("texto celda:"+txt+"==bandera:"+bandera+"campoN#:"+i);
		// If the cell is marked to be initially sorted, then mark it with the appropriate arrow.
	    var initSortDirUp = cell.className.indexOf("sortDirUp") >= 0;
	    var initSortDirDown = cell.className.indexOf("sortDirDown") >= 0;
		if(initSortDirUp || initSortDirDown){
		    var theSortDir;
		    var theSortArrow;
			if(initSortDirUp){
			    theSortDir = 'up';
			    theSortArrow = '&uarr;';
			} else{
			    theSortDir = 'down';
			    theSortArrow = '&darr;';
			}
			if(bandera)
			   cell.innerHTML = '<a href="#" style="color:#FFF;" onclick="aplicaOrdenTable(this,\''+i+'\',\''+txt+'\');return false;"> <font class=\"letraTh\">' +txt+ '</font> <span class="sortarrow" sortdir='+ theSortDir +'>&nbsp;&nbsp;'+ theSortArrow +'</span></a>';
	    } else{
	        //creaci?n de la cabecera para que pueda presionarse y poder realizar el evento
	 	  // alert('<a href="#" style="color:#FFF;" onclick="aplicaOrdenTable(this,\''+txt+'\');return false;"> <font class=\"letraTh\">' +txt+ '</font> <span class="sortarrow"></span></a>');
	    	if(bandera)
   			   cell.innerHTML = '<a href="#" style="color:#FFF;" onclick="aplicaOrdenTable(this,\''+i+'\',\''+txt+'\');return false;"> <font class=\"letraTh\">' +txt+ '</font> <span class="sortarrow"></span></a>';
	    }
    }//fin del for
}


/**
*/
function aplicaOrdenTable(lnk, campo, labelCampo) {
    // get the span
    var span;
    //alert("todo:"+lnk.innerHTML);
	for (var ci=0;ci<lnk.childNodes.length;ci++) //se busca el objeto span en la cabecera
	{
        if (lnk.childNodes[ci].tagName && lnk.childNodes[ci].tagName.toLowerCase() == 'span') 
		    span = lnk.childNodes[ci];
	}

	var atrOrdenUltimo = span.getAttribute("sortdir");
	if (span.getAttribute("sortdir") == null || span.getAttribute("sortdir") == '') {
		//Se aplica Ascendente
		ARROW = '<img src=./imgs/arrowdown.gif border=0 alt="Ordenamiento Ascendente">';
        span.setAttribute('sortdir','down');
	 }else if(span.getAttribute("sortdir") == 'down'){
		//Se aplica Descendente 
		 ARROW = '<img src=./imgs/arrowup.gif border=0 alt="Ordenamiento Descendente">';
	    span.setAttribute('sortdir','up'); 
	 }else if(span.getAttribute("sortdir") == 'up'){
		//Se aplica sin Orden y alerta para Siguiente Descendente 
		 //ARROW = '<img src=../imgs/boton2.gif border=0 alt="Sin Ordenamiento">';
		 ARROW = '';
		 span.setAttribute('sortdir',''); 
	 }
	 if( span.getAttribute("sortdir") == null || span.getAttribute("sortdir") == ''){
		 //Quitar si estuviera el campo del Orden Prestablecido
		 if(campoOrden.length>0){
		    var posCampo = campoOrden.indexOf("hd_OrdenC"+campo);
		    var textQuitar = ""; 
		    if(posCampo != -1){
		    	//alert("Cadena a reemplazar:"+campoOrden);
				textQuitar  = campoOrden.substring(posCampo,campoOrden.indexOf(";",posCampo)+1);
				//alert("textAQUITAR:"+textQuitar);
				campoOrden  = campoOrden.replace(textQuitar,"");
				//alert("posicion:"+headOrden.length+"==COMPARA:"+(headOrden.indexOf(labelCampo)+labelCampo.length)+"****");
				
				var auxTextoOrden="";
				if(atrOrdenUltimo == "down"){
					auxTextoOrden = "(ASC)";
				}else{
					auxTextoOrden = "(DESC)";
				}
				
				if(headOrden.length == (headOrden.indexOf(labelCampo+auxTextoOrden)+(labelCampo.length+auxTextoOrden.length))){
					headOrden = headOrden.replace(labelCampo+auxTextoOrden,"");
				}else{
					headOrden = headOrden.replace(labelCampo+auxTextoOrden+", ","");
				}
				//alert("resultante:"+headOrden+"****");
				if(headOrden != ""){
					//alert("ultimo caracter de la cadena:"+headOrden.substring(headOrden.length-1)+"***");
					if(headOrden.substring(headOrden.length-1) == " "){
						headOrden = headOrden.substring(0,headOrden.length-2);
					}
				}
				
				if(headOrden != ""){
				   document.getElementById("idTitleOrder").innerHTML = "&nbsp;&nbsp;Orden:&nbsp;"+headOrden;
				   document.getElementById("hd_titleOrder").value = "&nbsp;&nbsp;Orden:&nbsp;"+headOrden;
				   document.getElementById("hd_reporteOrder").value = headOrden;
				}else{
				   document.getElementById("idTitleOrder").innerHTML = "";
 				   document.getElementById("hd_titleOrder").value = "";	
 				   document.getElementById("hd_reporteOrder").value = "";
				}
				//alert("Cadena Final de ordenamiento luego de quitar ese filtro:"+campoOrden);
             }
		 }
	 }else{
		   if(document.getElementById("hd_OrdenC"+campo).value == ""){
    			 campoOrden = campoOrden +"hd_OrdenC"+campo+":"+campoPrioridadOrden+";";
    			 //labelCampo = labelCampo + ""
    			 //alert("cadena:"+headOrden+"==");
    			 if(headOrden == ""){
    				 headOrden = headOrden + labelCampo;
    			  }else{
    				 headOrden = headOrden +", "+labelCampo; 
    			  }
    			 
    			 if(span.getAttribute("sortdir") == "down"){
    				 headOrden = headOrden+"(ASC)"; 
    			  }else{
    				 headOrden = headOrden+"(DESC)"; 
    			  }
    			 
    			 document.getElementById("idTitleOrder").innerHTML = "&nbsp;&nbsp;Orden:&nbsp;"+headOrden;
    			 document.getElementById("hd_titleOrder").value = "&nbsp;&nbsp;Orden:&nbsp;"+headOrden;
    			 document.getElementById("hd_reporteOrder").value = headOrden;
    			 
    		     campoPrioridadOrden++;
		  }else{
			  /*if(atrOrdenUltimo == document.getElementById("hd_OrdenC"+campo).value){
				}*/
			  var auxTextoOrden="";
			  var auxTextoCambiaOrden="";
			  if(atrOrdenUltimo == "down"){
				  auxTextoOrden = "(ASC)";
				  auxTextoCambiaOrden = "(DESC)";
			   }else{
				  auxTextoOrden = "(DESC)";
				  auxTextoCambiaOrden = "(ASC)";
			   }
			  
			  if(headOrden.length == (headOrden.indexOf(labelCampo+auxTextoOrden)+(labelCampo.length+auxTextoOrden.length))){
					headOrden = headOrden.replace(labelCampo+auxTextoOrden,labelCampo+auxTextoCambiaOrden);
				}else{
					headOrden = headOrden.replace(labelCampo+auxTextoOrden+", ",labelCampo+auxTextoCambiaOrden+", ");
				}
			
			  if(headOrden != ""){
				   if(headOrden.substring(headOrden.length-1) == " "){
						headOrden = headOrden.substring(0,headOrden.length-2);
					}
				}
				
				if(headOrden != ""){
				   document.getElementById("idTitleOrder").innerHTML = "&nbsp;&nbsp;Orden:&nbsp;"+headOrden;
				   document.getElementById("hd_titleOrder").value = "&nbsp;&nbsp;Orden:&nbsp;"+headOrden;
				   document.getElementById("hd_reporteOrder").value = headOrden;
	    			
				}else{
				   document.getElementById("idTitleOrder").innerHTML = "";
				   document.getElementById("hd_titleOrder").value = "";	
				   document.getElementById("hd_reporteOrder").value = "";
	    		}
			  
		  }
	 }
	 //alert("ordenamiento:"+campoOrden);
	 document.getElementById("hd_OrdenC"+campo).value = span.getAttribute("sortdir");
		
    span.innerHTML = ARROW;
}

	function presentaOrden(titleOrden, reporteOrden){
		document.getElementById("idTitleOrder").innerHTML = titleOrden;
	    document.getElementById("hd_titleOrder").value = titleOrden;
	    document.getElementById("hd_reporteOrder").value = reporteOrden;
	}
 