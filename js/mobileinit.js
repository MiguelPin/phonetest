




(function() {
  var device_ready = true;
  var jqm_mobile_init = true;

  var initApp = function() {
    if ((device_ready && jqm_mobile_init) || (jqm_mobile_init && !mobile_system)) {
      startApp();
    }
  };

  var onDeviceReady = function() {
    device_ready = true;
    //alert('Device ready');
    initApp();
  };

  var onMobileInit = function() {
    	$.support.cors = true;
   	 $.mobile.allowCrossDomainPages = true;
	$.mobile.loadingMessage = "Cargando ...";
        $.mobile.loadingMessageTheme = "b";
        //$.mobile.loadingMessageTextVisible = false; 
        $.mobile.pageLoadErrorMessage = "Error al cargar la página";
        $.mobile.pageLoadErrorMessageTheme = "e"
	// Navigation
        $.mobile.page.prototype.options.backBtnText = "Atrás";
	$.mobile.page.prototype.options.addBackBtn      = true;
	$.mobile.page.prototype.options.backBtnTheme    = "d";
	// Page
	//$.mobile.page.prototype.options.headerTheme = "a";  // Page header only
	//$.mobile.page.prototype.options.contentTheme    = "c";
	//$.mobile.page.prototype.options.footerTheme = "a";
	// Listviews
	//$.mobile.listview.prototype.options.headerTheme = "a";  // Header for nested lists
	//$.mobile.listview.prototype.options.theme           = "c";  // List items / content
	//$.mobile.listview.prototype.options.dividerTheme    = "d";  // List divider
	//$.mobile.listview.prototype.options.splitTheme   = "c";
	//$.mobile.listview.prototype.options.countTheme   = "c";
	//$.mobile.listview.prototype.options.filterTheme = "c";
	//$.mobile.listview.prototype.options.filterPlaceholder = "Filter data...";
	//$.mobile.dialog.prototype.options.theme
	//$.mobile.selectmenu.prototype.options.menuPageTheme
	//$.mobile.selectmenu.prototype.options.overlayTheme




	jqm_mobile_init = true;
        //alert('JQM ready');
        initApp();
  };

  $(document).bind('mobileinit', onMobileInit);
  document.addEventListener("deviceready", onDeviceReady, false);
})();



        


