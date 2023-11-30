	var req;
	var mensaje;
	function initRequest() {
		if (window.XMLHttpRequest) {
			req = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			try
			{
				req = new ActiveXObject("Msxml2.XMLHTTP");
			}catch (e){ // en caso que sea una version antigua
				try
				{	req = new ActiveXObject("Microsoft.XMLHTTP"); }
				catch (e){}
			}
			
		}
	}
	
	function procesaPeticion(p_url) {
			initRequest();
			req.onreadystatechange = processRequest;
			var url = p_url;
			if (arguments.length>2){
				req.open("GET", url+"?"+arguments[2], true);
				req.send(null);
			}else{	
				req.open("GET", url, true);
				req.send(null);
			}
			mensaje = arguments[1];
	}
		
	function processRequest() {
		if (req.readyState == 4) {
			if (req.status == 200) {
				var message = parseMessage();
				if(req.callback) req.callback();
			}else{
				if (mensaje == ""){
					alert("No se pudo verificar si se presenta el listado de referncias pre-grabadas");
				}else{
					alert(mensaje);
				}
			}
		}
	}