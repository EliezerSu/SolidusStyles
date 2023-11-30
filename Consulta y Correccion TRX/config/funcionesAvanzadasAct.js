
/*********************************************************************************************************************************
Las funciones definidas aqui ya est?n definidas en el js de las funciones generales, asi qeu deben ser borradas de este archivo+
**********************************************************************************************************************************/
var arregloSort;

/*****************************************************************************************************************************/

addEvent(window, "load", sortables_init);

var SORT_COLUMN_INDEX;
/**
  Funci?n por medio de la cual se valida si existe una tabla y que adem?s posea la referencia a la clase que realizar? el
  ordenamiento.
*/
function sortables_init() {
    // Find all tables with class sortable and make them sortable
    if (!document.getElementsByTagName) return;
    tbls = document.getElementsByTagName("table");
	for (ti=0;ti<tbls.length;ti++) {
        thisTbl = tbls[ti];
        if (((' '+thisTbl.className+' ').indexOf("sortable") != -1) && (thisTbl.id)) {
            //initTable(thisTbl.id);
            ts_makeSortable(thisTbl);
        }
    }
}

/**
  Fiunci?n p?r medio de la cual se crea la cabecera como hiperenlaces para realizar el ordenamiento.
*/
function ts_makeSortable(table) {
    
	var bandera;
	
    if (table.rows && table.rows.length > 0) {
        var firstRow = table.rows[0];
    }
    if (!firstRow) return;
    
    // We have a first row: assume it's the header, and make its contents clickable links
	for (var i=0;i<firstRow.cells.length;i++) 
	{
        bandera = false;
		
		for(var j=0; j<arregloSort.length;j++)
		{
		   if(i == arregloSort[j])
		     bandera = true;
		}
		var cell = firstRow.cells[i];
        var txt = ts_getInnerText(cell); //obtiene el texto que forma parte del titulo
		
		// If the cell is marked to be initially sorted, then mark it with the appropriate arrow.
	    var initSortDirUp = cell.className.indexOf("sortDirUp") >= 0;
	    var initSortDirDown = cell.className.indexOf("sortDirDown") >= 0;
		
		if(initSortDirUp || initSortDirDown) 
		{
		    var theSortDir;
		    var theSortArrow;
			if(initSortDirUp) 
			{
			    theSortDir = 'up';
			    theSortArrow = '&uarr;';
			} 
			else 
			{
			    theSortDir = 'down';
			    theSortArrow = '&darr;';
			}
			if(bandera)
			   cell.innerHTML = '<a href="#" style="color:#FFF;" onclick="ts_resortTable(this);return false;">'+txt+'<span class="sortarrow" sortdir='+ theSortDir +'>&nbsp;&nbsp;'+ theSortArrow +'</span></a>';
	    } else 
		{
	        //creaci?n de la cabecera para que pueda presionarse y poder realizar el evento
			if(bandera)
   			   cell.innerHTML = '<a href="#" style="color:#FFF;" onclick="ts_resortTable(this);return false;">'+txt+'<span class="sortarrow"></span></a>';
	    }
    }//fin del for
}


/**
  Funci?n que permite obtener el texto que se encuentra en el interior de una etiqueta de elementos sea esta <SPAN>, <INPUT>..etc
*/
function ts_getInnerText(el) {
	if (typeof el == "string") return el;
	if (typeof el == "undefined") { return el; };
	if (el.innerText) return el.innerText;	//Not needed but it is faster
	var str = "";

	if (el.childNodes[0]) {
		if(el.childNodes[0].value) {return el.childNodes[0].value;}
	}
	
	var cs = el.childNodes;
	var l = cs.length;
	for (var i = 0; i < l; i++) {
		// INPUT text field (ignore hidden fields)
		if(cs[i].value && cs[i].type!='hidden') {
			return cs[i].value;
		}
		switch (cs[i].nodeType) {
			case 1: //ELEMENT_NODE
				str += ts_getInnerText(cs[i]);
				break;
			case 3:	//TEXT_NODE
				str += cs[i].nodeValue;
				break;
		}
	}
	return str;
}


/**
*/
function ts_resortTable(lnk) {

    // get the span
    var span;
	for (var ci=0;ci<lnk.childNodes.length;ci++) //se busca el objeto span en la cabecera
	{
        if (lnk.childNodes[ci].tagName && lnk.childNodes[ci].tagName.toLowerCase() == 'span') 
		    span = lnk.childNodes[ci];
	}
    var spantext = ts_getInnerText(span);
	var td = lnk.parentNode;
	var column = td.cellIndex; //obtiene el indice de la columna empezando desde 0
	var table = getParent(td,'TABLE'); //obtiene la tabla que contiene el celda 
	
    // Work out a type for the column
    var tRows = table.rows;
    if (tRows.length <= 1) return;
    var itm;
	// Check all cells in the column, starting with the 2nd row (row=1 so we skip header)
	// It goes until it hits a non-null cell and then uses the value in that cell to determine the column type.
	
    for(var rowIx=1; rowIx<tRows.length; ++rowIx) 
	{
    	var rCells = tRows[rowIx].cells;
    	if(rCells!=null && rCells[column]) 
		{
		    itm = ts_getInnerText(rCells[column]);
			if(itm!=null && itm!='')
		    	break;
    	}
    }//fin del for
    // This is for columns with nothing in them.
    
    sortfn = ts_sort_caseinsensitive;
    if (itm.match(/^\d\d[\/-]\d\d[\/-]\d\d\d\d$/)) sortfn = ts_sort_date;
    if (itm.match(/^\d\d[\/-]\d\d[\/-]\d\d$/)) sortfn = ts_sort_date;
    if (itm.match(/^[?$]/)) sortfn = ts_sort_currency;
    SORT_COLUMN_INDEX = column;
	
	//arreglos del ordenamiento
    var firstRow = new Array();
    var newRows = new Array();
    for (i=0;i<table.rows[1].length;i++) { firstRow[i] = table.rows[0][i]; }
    for (j=2;j<table.rows.length;j++) { newRows[j-2] = table.rows[j]; }

    newRows.sort(sortfn);
	
	if (span.getAttribute("sortdir") == 'down') {
        //ARROW = '&nbsp;&nbsp;&uarr;';
		ARROW = '<img src=../imgs/arrowup.gif border=0 alt="Ordenamiento Descendente">';
        newRows.reverse();
        span.setAttribute('sortdir','up');
    } else {
	    //ARROW = '&nbsp;&nbsp;&darr;';
		ARROW = '<img src=../imgs/arrowdown.gif border=0 alt="Ordenamiento Ascendente">';
        span.setAttribute('sortdir','down');
    }
    
    // We appendChild rows that already exist to the tbody, so it moves them rather than creating new ones
    // don't do sortbottom rows
    for (i=0;i<newRows.length;i++) { if (!newRows[i].className || (newRows[i].className && (newRows[i].className.indexOf('sortbottom') == -1))) table.tBodies[0].appendChild(newRows[i]);}
    // do sortbottom rows only
    for (i=0;i<newRows.length;i++) { if (newRows[i].className && (newRows[i].className.indexOf('sortbottom') != -1)) table.tBodies[0].appendChild(newRows[i]);}
    
    // Delete any other arrows there may be showing
    var allspans = document.getElementsByTagName("span");
    for (var ci=0;ci<allspans.length;ci++) {
        if (allspans[ci].className == 'sortarrow') {
            if (getParent(allspans[ci],"table") == getParent(lnk,"table")) { // in the same table as us?
                allspans[ci].innerHTML = '&nbsp;&nbsp;&nbsp;';
            }
        }
    }
        
    span.innerHTML = ARROW;
}

/**
  Funci?n que permite obtener el padre de un elemento de acuerdo a la etiqueta
*/
function getParent(el, pTagName) {
	if (el == null) return null;
	else if (el.nodeType == 1 && el.tagName.toLowerCase() == pTagName.toLowerCase())	// Gecko bug, supposed to be uppercase
		return el;
	else
		return getParent(el.parentNode, pTagName);
}


function ts_sort_date(a,b) {
    // y2k notes: two digit years less than 50 are treated as 20XX, greater than 50 are treated as 19XX
    aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]);
    bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]);
    if (aa.length == 10) {
        dt1 = aa.substr(6,4)+aa.substr(3,2)+aa.substr(0,2);
    } else {
        yr = aa.substr(6,2);
        if (parseInt(yr) < 50) { yr = '20'+yr; } else { yr = '19'+yr; }
        dt1 = yr+aa.substr(3,2)+aa.substr(0,2);
    }
    if (bb.length == 10) {
        dt2 = bb.substr(6,4)+bb.substr(3,2)+bb.substr(0,2);
    } else {
        yr = bb.substr(6,2);
        if (parseInt(yr) < 50) { yr = '20'+yr; } else { yr = '19'+yr; }
        dt2 = yr+bb.substr(3,2)+bb.substr(0,2);
    }
    if (dt1==dt2) return 0;
    if (dt1<dt2) return -1;
    return 1;
}

function ts_sort_currency(a,b) { 
    aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,'');
    bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,'');
    return parseFloat(aa) - parseFloat(bb);
}

// This sorts numeric data and case insensitive string data all together such that numerical data is sorted
// numerically even when mixed into a list of non-numeric strings.
function ts_sort_caseinsensitive(a,b) {
	if(!a.cells) {
		if(!b.cells)
			return 0;
		return 1;
	} else {
		if(!b.cells)
			return -1;
	}
	
    var aa = ts_getInnerText(a.cells[SORT_COLUMN_INDEX]);
    var bb = ts_getInnerText(b.cells[SORT_COLUMN_INDEX]);

	if(!aa) {
		if(!bb)
			return 0;
		return 1;
	} else {
		if(!bb)
			return -1;
	}

	if(ts_isNumeric(aa)) {
		if(ts_isNumeric(bb)) {
			// both are numeric
		    aa = parseFloat(aa);
		    bb = parseFloat(bb); 
		    return aa-bb;
		} else {
			return -1;
		}
	} else {
		if(ts_isNumeric(bb)) {
			return 1;
		} else {
			// neither is numeric
			aa = aa.toLowerCase();
			bb = bb.toLowerCase();
		    if (aa==bb) return 0;
		    if (aa<bb) return -1;
		    return 1;
		}
	}
}

function ts_isNumeric(itm) {
    return itm.match(/^[\d\.]+$/);
}

function addEvent(elm, evType, fn, useCapture)
// addEvent and removeEvent
// cross-browser event handling for IE5+,  NS6 and Mozilla
// By Scott Andrew
{
  if (elm.addEventListener){
    elm.addEventListener(evType, fn, useCapture);
    return true;
  } else if (elm.attachEvent){
    var r = elm.attachEvent("on"+evType, fn);
    return r;
  } else {
    alert("El manejador de eventos no pudo ser removido");
  }
} 


/********************************************************************************************************************************
                             FUNCIONES PARA AGREGAR FILA O DUPLICAR FILA
********************************************************************************************************************************/
var ind_arr=0;
var cont_idObj=0;
 
function ta_init(idObjeto,numeroFila,duplicar) 
{	
    ind_arr = 0;
    if (!document.getElementsByTagName) return;

	thisTbl = $("table#"+idObjeto).get(0);
	if(thisTbl){
		insertarFila(thisTbl,numeroFila,duplicar);
	}
}


/**
  M?todo principal para la creaci?n de nuevas filas en tablas
*/
function insertarFila(objeto,numeroFila,duplicar)
{
   var arr_idOrigen = new Array(50); 
   var arr_idNuevo  = new Array(50); 
   if(numeroFila == 0){
      alert("No se puede crear o duplicar fila #0 debido a que es la cabecera");
	  return;
   }	  
   var tabla = objeto;
   var auxFila = document.createElement('tr');
   //fila de eliminacion
   var contenidoCeldaEliminar = "<a><input type='button' onClick=javascript:eliminarFila('"+objeto.id+"',this.parentNode.parentNode.parentNode.rowIndex); value='x' width='15' height='15' alt='Eminar Registro' style='cursor:hand'  class='formboton' ></a>";
   var celdaEliminar = document.createElement('td');
   celdaEliminar.innerHTML = contenidoCeldaEliminar;
   //cuando no se tiene el n?mero de fila significa que se va a crear un fila a partir de los elementos ingresados para las filas
   if(!duplicar)
   {	
   	  cont_idObj=cont_idObj+1;
      for( var i = 0; i < tabla.tBodies.length; i++ ) {
         if(numeroFila > tabla.tBodies[i].rows.length-1) {
          tabla.deleteRow(tabla.tBodies[i].rows.length-1);
			alert(" No se puede crear una fila tomando como referencia una fila que no existe");
			return;
		 } else {
		    var filaNueva = tabla.tBodies[i].rows[numeroFila];
		    var numeroFila = tabla.tBodies[i].rows.length;
			for( var j = 0; j < filaNueva.cells.length; j++ )
		    {
			   crearFila(auxFila,filaNueva.cells[j].innerHTML,numeroFila,duplicar,arr_idOrigen, arr_idNuevo);
	        }// fin del for de j
			 //Mapeo de Fila Nueva (Ajustes por Ids de Campos)
			 mapeoDeFilaNueva(auxFila, arr_idOrigen, arr_idNuevo, tabla);
			//se crea la celda eliminar
			 tabla.tBodies[i].rows[numeroFila].appendChild(celdaEliminar);

	     }		
	    
      }//fin del for de i
   }
   else //parte para dupicar las filas
   {
   		cont_idObj=cont_idObj+1;
	   for( var i = 0; i < tabla.tBodies.length; i++ ) {
          if(numeroFila >= tabla.tBodies[i].rows.length-1)
		  {
		    tabla.deleteRow(tabla.tBodies[i].rows.length-1);
			alert(" No se puede duplicar fila que no existe ");
		  } else {
		      var filaDuplicada = tabla.tBodies[i].rows[numeroFila];
			  var numeroFila = tabla.tBodies[i].rows.length;
		      for( var j=0; j< filaDuplicada.cells.length; j++) {
    			  crearFila(auxFila,filaNueva.cells[j].innerHTML,numeroFila,duplicar,arr_idOrigen, arr_idNuevo);
			  }//fin del for de j
		      
 			 //Mapeo de Fila Nueva (Ajustes por Ids de Campos)
			 mapeoDeFilaNueva(auxFila, arr_idOrigen, arr_idNuevo, tabla);

		      //se crea la celda eliminar
 	        tabla.tBodies[i].rows[numeroFila].appendChild(celdaEliminar);
		 }
	  }//fin del for del i  
   }
}//fin de m?todo insertarFila


 function mapeoDeFilaNueva(auxFila, arr_idOrigen, arr_idNuevo, tabla){
 
    //Lectura de Cada Celda de la Fila Nueva
    //Ajuste Mapeo		
     var newAuxRow = document.createElement('tr');
	 var valueTD = "td";
	 var infoEE = auxFila.innerHTML;
	 var arrInfo = infoEE.split('</' + valueTD + '>');	
	 for(var sd=0;sd<arrInfo.length-1;sd++){
	     var celdaAUX = document.createElement('td');
	     var infoCelda = arrInfo[sd];
	     var j=0;
		 while(j<arr_idOrigen.length && (arr_idOrigen[j] != undefined)){
		    infoCelda = buscaReemplaza(infoCelda, arr_idOrigen[j], arr_idNuevo[j],"id=");
			j++; 
		   }
		 infoCelda = infoCelda.replace("<" + valueTD + ">","");
		 celdaAUX.innerHTML = infoCelda;	 
		 newAuxRow.appendChild(celdaAUX);  
	   }
	 tabla.tBodies[0].appendChild(newAuxRow); 
	 }


function buscaReemplaza(cadenaMaster, textoBuscado, textoReemplaza, textoAdicional){
    var xyz=0;
	while(cadenaMaster.indexOf(textoBuscado,xyz) != -1){
	   var indiceInicio = cadenaMaster.indexOf(textoBuscado,xyz);
	   var longItem = textoBuscado.length;
	   
	   //Excepciones al Reemplazar un String
	   if(textoAdicional != undefined){
	      //Ejemplo: id=bidCuenta_desde
		  var nuevoTextoBuscado = textoAdicional+'"'+textoBuscado;
          var ind_porAdicional = cadenaMaster.indexOf(nuevoTextoBuscado,indiceInicio-(textoAdicional.length)-1);
		  if(ind_porAdicional == -1){
			  nuevoTextoBuscado = textoAdicional+"'"+textoBuscado;
			  ind_porAdicional = cadenaMaster.indexOf(nuevoTextoBuscado,indiceInicio-(textoAdicional.length)-1);
		  }
          
		  if(ind_porAdicional != -1){
		      //Significa q encontr?. Entonces saltar al sigte indice dentro de la Cadena y No Reemplazar
		 	  xyz = indiceInicio+longItem;
			  continue;  
		   } 
	   }
	   //Contiene la Cadena hasta antes del Item a Buscar
	   var cadena1   = cadenaMaster.substring(0,indiceInicio);
	   //Obtiene Elemento Buscado
	   var itemBuscado = cadenaMaster.substring(indiceInicio+1,indiceInicio+longItem);
	   //Contiene la Cadena despues del Elemento al Final de la Cadena
	   var subcadena = cadenaMaster.substring(indiceInicio+longItem);
	   cadenaMaster = cadena1+textoReemplaza+subcadena;
	   xyz = indiceInicio+longItem;
	}
	return cadenaMaster;
 }


//Funci?n con la cual se obtiene el id del objeto que se va a crear y se agrega a este id el n?mero de la fila correspondiente en la cual 
//se va a crear la celda, este m?todo es usado cuando se utiliza el innerHTML
function generarId(objeto,numeroFila,arr_idOrigen, arr_idNuevo)
{
    var xyz=0;
	while(objeto.toLowerCase().indexOf(" id=",xyz) != -1){
	   var indiceInicio = objeto.toLowerCase().indexOf(" id=",xyz);
       var nuevoId="";       
	   //Contiene la Cadena hasta la palabra id= 
	   var cadena1   = objeto.substring(0,indiceInicio+5);
	   //Contiene la Cadena desde el Identificador del campo id hasta el Final de la Cadena
	   var subcadena = objeto.substring(indiceInicio+5);
       var espacio1=subcadena.indexOf(">");
	   var espacio2=subcadena.indexOf(" ");
	   var espacio = 0;
	   if(parseInt(espacio1) > parseInt(espacio2)){
		  if(parseInt(espacio2)!=-1) espacio = espacio2; else espacio = espacio1;
		} else if(parseInt(espacio1) < parseInt(espacio2)){ 
	       if(parseInt(espacio1)!=-1) espacio = espacio1; else espacio = espacio2;  
		}
	   //Contiene unicamente el nombre del Identificador del campo id para asignarle el identificador de Fila
	   var subcadena1 = subcadena.substring(0,eval(espacio)-1);
	   //Contiene la cadena despues del identificador hasta el final de la cadena
           var cadena2 = subcadena.substring(subcadena1.length); //se incluye el espacio en blanco
	   subcadena1 = trim(subcadena1); 

	   arr_idOrigen[ind_arr] = subcadena1;
	   for(var i=0; i<subcadena1.length; i++){
  	       if(isNum(subcadena1.charAt(i))) {
   	         nuevoId = subcadena1.substr(0,i);
		     break;
	       }
	   } // fin del for
	
		if(!esVacio(nuevoId))
			nuevoId = nuevoId + cont_idObj;//(numeroFila-1);
		else {
			if(subcadena1.length == 1)
			   subcadena1=nuevoId;
			nuevoId = subcadena1 + cont_idObj;//(numeroFila-1);
		}
	   arr_idNuevo[ind_arr++]= nuevoId;
       objeto = cadena1+nuevoId+cadena2;
       xyz = objeto.toLowerCase().indexOf(" id=",xyz) + 1;
            
	}
	return objeto;
}



//M?todo para la creaci?n de una nueva fila
function crearFila(objetoCuerpo,elementoCelda,numeroFila,duplicar, arr_idOrigen, arr_idNuevo)
{
    var celda = document.createElement('td');
	var pos1 = elementoCelda.indexOf("\'");
	var pos2 = elementoCelda.indexOf('\"');
	var nuevoElementoCelda = "";
	if(pos1>pos2){
	   for(var i=0; i<elementoCelda.length; i++)
	   {
	      if(elementoCelda.charAt(i) == '\"' )
	      {
	        nuevoElementoCelda = nuevoElementoCelda+"\'";
	      }	  
	      else if(elementoCelda.charAt(i) == "\'")
	      {
	          nuevoElementoCelda = nuevoElementoCelda+'\"';
	      }
	      else
	     {
	        nuevoElementoCelda = nuevoElementoCelda+elementoCelda.charAt(i);
	     }
	  }//fin del for
	  elementoCelda = trim(nuevoElementoCelda);
	}
	
	if(duplicar) //si se duplica se mantiene el contenio de la celda
	{
	   elementoCelda = this.generarId(elementoCelda,numeroFila);
	   celda.innerHTML = elementoCelda;
	}   
	else
	{
		if(elementoCelda.toLowerCase().indexOf("select")==-1){
		   var contenido = elementoCelda.toLowerCase().indexOf("value=");
		   while (contenido!=-1){
		   		elementoCelda = this.eliminarContenido(elementoCelda);
		   		contenido = elementoCelda.toLowerCase().indexOf("value=");
		   }
	   }
	   
       elementoCelda = this.generarId(elementoCelda,numeroFila,arr_idOrigen, arr_idNuevo);
	   celda.innerHTML = elementoCelda;
//	   if (celda.querySelector("input")) {
//			celda.querySelector("input").value = "";
//	   }
	}
	objetoCuerpo.appendChild(celda);
}



//Elimina el contenido del objeto cuando este es creado por medio de innerHTML
function eliminarContenido(objeto) {
   var bandera = false;
   var ciclo = true;
   var valor = objeto.toLowerCase().indexOf("value=");
   var tieneComillas=false;
 
   var caractIni = objeto.substring(valor+6,valor+7);
   
   if ( caractIni=="\"" || caractIni=="'" ){
	   tieneComillas=true;
	   caracterABuscarFinValue=caractIni;
   }
   
   if((objeto.toLowerCase().indexOf("select")==-1) || (objeto.toLowerCase().indexOf("check")==-1) || 
		   	(objeto.toLowerCase().indexOf("radio")==-1) || (objeto.toLowerCase().indexOf("button")==-1) || 
		   	(objeto.toLowerCase().indexOf("</a>")==-1)){
	   bandera = true; 
   }
   
   if(valor == -1){
         var chequeada = objeto.toLowerCase().indexOf("checked");
   
         if(chequeada != -1){
		     var cadena1 = objeto.substring(0,valor);
		     var subcadena = objeto.substring(valor+6);//
		  // si tiene comillas busca el espacio mas proximo caso contrario busca la comilla mas proxima
			 var espacio2;
			 if (tieneComillas){
				 espacio2=subcadena.indexOf(caractIni);
			 }else{
				 espacio2=subcadena.indexOf(" ");
				 // verificamos si el la cadena del valor estamos extrayendo el caracter ">"
				 if ( subcadena.substring(0,espacio2).indexOf(">")!=-1 ){
					 espacio2=subcadena.indexOf(">");
				 }
			 }
			 var espacio = 0;
			 if (parseInt(espacio1) > parseInt(espacio2)){
			   if (parseInt(espacio2)!=-1)
			      espacio = espacio2;
			   else{
			   	  espacio2 = subcadena.indexOf(" ");
			   	  if (parseInt(espacio1) > parseInt(espacio2)){
					  if (parseInt(espacio2)!=-1)
					      espacio = espacio2;
					  else
					  	  espacio = espacio1; 
				  }
			   }
			 } else if (parseInt(espacio1) < parseInt(espacio2)) {
			    espacio2 = subcadena.indexOf(" ");
			    if (parseInt(espacio1) < parseInt(espacio2)) {
				    if(parseInt(espacio1)!=-1) 
					  espacio = espacio1;
					else
					  espacio = espacio2;
			    }else{
			    	espacio = espacio2;
			    }
			 }
		     var cadena2 = subcadena.substring(eval(espacio+1));
			 return cadena1+cadena2;
        }//fin del else de  chequeada
		return objeto;
   } else {
	   /// inputs
      if(bandera){
	     var cadena1 = objeto.substring(0,valor);
	     var subcadena = objeto.substring(valor+6);//
		 var espacio1=subcadena.indexOf(">");
		 // si tiene comillas busca el espacio mas proximo caso contrario busca la comilla mas proxima
		 var espacio2;
		 if (tieneComillas){
			 espacio2=subcadena.indexOf(caractIni);
			 var subcadena_tmp = subcadena.substring(espacio2+1);
			 espacio2+=subcadena_tmp.indexOf(caractIni)+1;
		 }else{
			 espacio2=subcadena.indexOf(" ");
			 // verificamos si el la cadena del valor estamos extrayendo el caracter ">"
			 if ( subcadena.substring(0,espacio2).indexOf(">")!=-1 ){
				 espacio2=subcadena.indexOf(">");
			 }
		 }
		 
		 var espacio = 0;
		 if (parseInt(espacio1) > parseInt(espacio2)){
		   if (parseInt(espacio2)!=-1)
		      espacio = espacio2;
		   else{
		   	  espacio2 = subcadena.indexOf(" ");
		   	  if (parseInt(espacio1) > parseInt(espacio2)){
				  if (parseInt(espacio2)!=-1)
				      espacio = espacio2;
				  else
				  	  espacio = espacio1;
			  }
		   }
		 } else if (parseInt(espacio1) < parseInt(espacio2)) {
		    espacio2 = subcadena.indexOf(" ");
		    if (parseInt(espacio1) < parseInt(espacio2)) {
			    if(parseInt(espacio1)!=-1) 
				  espacio = espacio1;
				else
				  espacio = espacio2;
		    }else{
		    	espacio = espacio2;
		    }
		 }
	     var cadena2 = subcadena.substring(eval(espacio+1));
		 return cadena1+cadena2;
	 }else{
	    var seleccionada = objeto.toLowerCase().indexOf("selected");
	    if(seleccionada == -1){
		   return objeto;
		} else {
	     var cadena1 = objeto.substring(0,valor);
	     var subcadena = objeto.substring(valor+6);//
	  // si tiene comillas busca el espacio mas proximo caso contrario busca la comilla mas proxima
		 var espacio2;
		 if (tieneComillas){
			 espacio2=subcadena.indexOf(caractIni);
		 }else{
			 espacio2=subcadena.indexOf(" ");
			 // verificamos si el la cadena del valor estamos extrayendo el caracter ">"
			 if ( subcadena.substring(0,espacio2).indexOf(">")!=-1 ){
				 espacio2=subcadena.indexOf(">");
			 }
		 }
		 var espacio = 0;
		 if (parseInt(espacio1) > parseInt(espacio2)){
		   if (parseInt(espacio2)!=-1)
		      espacio = espacio2;
		   else{
		   	  espacio2 = subcadena.indexOf(" ");
		   	  if (parseInt(espacio1) > parseInt(espacio2)){
				  if (parseInt(espacio2)!=-1)
				      espacio = espacio2;
				  else
				  	  espacio = espacio1; 
			  }
		   }
		 } else if (parseInt(espacio1) < parseInt(espacio2)) {
		    espacio2 = subcadena.indexOf(" ");
		    if (parseInt(espacio1) < parseInt(espacio2)) {
			    if(parseInt(espacio1)!=-1) 
				  espacio = espacio1;
				else
				  espacio = espacio2;
		    }else{
		    	espacio = espacio2;
		    }
		 }
	     var cadena2 = subcadena.substring(eval(espacio+1));
		 return cadena1+cadena2;
		}
		return objeto;
	 }//fin del else de bandera
   }
}


function eliminarFila(idObjeto,numeroFila){	 
	var tabla = document.getElementById(idObjeto);
	tabla.deleteRow(numeroFila);
}