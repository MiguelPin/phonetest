

var startApp = function() {
 //alert('APP.CR Started');

};

       
 





$(function() {
    $(".submit").click(function() {
        var rowToUpdate = $(this).attr('name');
        var tx_locator_categories = $("#tx_locator_categories_"+rowToUpdate).val();
        var comments = $("#comments_"+rowToUpdate).val();
        var miperfil = $("#miperfil_"+rowToUpdate).val();
        var cuandopost = $("#cuandopost_"+rowToUpdate).val();
        var parentuid = $("#parentuid_"+rowToUpdate).val();
        var dataString = '&tx_locator_categories='+ tx_locator_categories + '&comments=' + comments + '&parentuid=' + parentuid + '&cuandopost=' + cuandopost + '&miperfil=' + miperfil;
	$.ajax({
            type: "POST",
            url: "./index.php?id=62",
            data: dataString,
            success: function(){
                $('.activo_'+rowToUpdate).fadeOut(200).hide(); 
                $('.actual').css("background","#39c3c8").html('Estado activo');
                $('.actual_'+rowToUpdate).css("background","#964040").fadeIn(800).show().html('Estado actual');
                


		$('.error').fadeOut(200).hide(); 
            }
        });
        return false;
    });
});       
 

$(function() {
    $(".desactiva").click(function() {
        var rowToUpdate = $(this).attr('name');
        var tx_locator_categories = $("#tx_locator_categories_"+rowToUpdate).val();
	var cuandopost = $("#cuandopost_"+rowToUpdate).val();
        var uid = $("#uid_"+rowToUpdate).val();
        var dataString = '&uid='+ uid + '&tx_locator_categories='+ tx_locator_categories + '&cuandopost=' + cuandopost;
    
	$.ajax({
            type: "POST",
            url: "./index.php?id=130",
            data: dataString,
            success: function(){
                $('.activo_'+rowToUpdate).fadeOut(200).hide(); 
		$('.actual_'+rowToUpdate).fadeOut(300).hide(); 
           	$('#desactiva_'+rowToUpdate).fadeOut(300).hide(); 
		$('#actualiza_'+rowToUpdate).fadeOut(200).hide(); 
       

                 $('#comments_'+rowToUpdate).val('');

		$('.error').fadeOut(200).hide(); 
            }
        });
        return false;
    });
});       



$(function() {
    $(".liked").click(function() {
        var rowToUpdate = $(this).attr('name');
        var uid = $("#id_"+rowToUpdate).val();
        var dataString = '&uid='+ rowToUpdate;
	$.ajax({
            type: "POST",
            url: "./index.php?id=120",
            data: dataString,
            success: function(){
               
                $('#a_'+rowToUpdate).css("background","#fff").fadeIn(800).hide();

		$('.error').fadeOut(200).hide(); 
            }
        });
        return false;
    });
});       


$(function() {
    $(".dislike").click(function() {
        var rowToUpdate = $(this).attr('name');
        var uid = $("#id_"+rowToUpdate).val();
        var dataString = '&uid='+ rowToUpdate;
	$.ajax({
            type: "POST",
            url: "./index.php?id=131",
            data: dataString,
            success: function(){
               
                $('#b_'+rowToUpdate).css("background","#fff").fadeIn(800).hide();

		$('.error').fadeOut(200).hide(); 
            }
        });
        return false;
    });
});       








jQuery(document).ready(function() {


  jQuery("abbr.stimeago").timeago();
  jQuery("abbr.satimeago").timeago();
  














  
  jQuery("#radio").click(function(){
        var formData = $("#RadioAjaxForm").serialize();
        $.ajax({
         type: "POST",
         url: "./sc/crs/guarda-radio.html",
        cache: false,
         data: formData,
         success: onSuccess,
          error: onError
                });
        	return false;
            });
  
  
  
  
  
  jQuery("#success").click(function(){
        var formData = $("#perfilAjaxForm").serialize();
        $.ajax({
         type: "POST",
         url: "./sc/perfil/guarda-perfil.html",
        cache: false,
         data: formData,
         success: onSuccess,
          error: onError
                });
        	return false;
            });
  
 
  
  
  
  jQuery("#prefersubmit").click(function(){
        var formData = $("#preferAjaxForm").serialize();
        $.ajax({
         type: "POST",
         url: "./index.php?id=66",
        cache: false,
         data: formData,
         success: onSuccess,
          error: onError
                });
        	return false;
            });
  
    jQuery("#avisossubmit").click(function(){
        var formData = $("#avisosAjaxForm").serialize();
        $.ajax({
         type: "POST",
         url: "./index.php?id=129",
        cache: false,
         data: formData,
         success: onSuccess,
          error: onError
                });
        	return false;
            });


  
  jQuery("#submit").click(function(){
        var formData = $("#callAjaxForm").serialize();
        $.ajax({
         type: "POST",
         url: "./index.php?id=64",
        cache: false,
         data: formData,
         success: onSuccess,
          error: onError
                });
 
                return false;
            });
  
  
   
  jQuery("#actualiza").click(function(){
	 var formData = $("#actualizacuenta").serialize();
        $.ajax({
         type: "POST",
         url: "./index.php?id=123",
        cache: false,
         data: formData,
         success:  actualizada,
          error: erroractualizando
                });
        	return false;
        	
            });




  jQuery("#postsubmit").click(function(){
	 var formData = $("#muro").serialize();
        $.ajax({
         type: "POST",
         url: "./index.php?id=113",
        cache: false,
         data: formData,
         success:  ssuccess,
          error: error
                });
        	return false;
        	
            });

 jQuery("#radiook").click(function(){
        var formData = $("#RadioAjaxForm").serialize();
        $.ajax({
         type: "POST",
         url: "./index.php?id=119",
        cache: false,
         data: formData,
         success: axuccess,
          error: oneEror
                });
        	return false;
            });


  
});


function actualizada(data, status)
        {
 
         }
 function erroractualizando(data, status)
        {
         $("#ok").text('no funcionó');
 }


function xaxuccess(data, status)
        {
 $("#oksA").text('funcionó');
         }
 function xoneEror(data, status)
        {
         $("#oksA").text('no funcionó');
 }







function axuccess(data, status)
        {
 $.easing.def = 'easeInOutSine';
 $( "body").fadeOut( 
 function(){
       location.reload(true); 
       setTimeout( 
 function(){
           $(body).fadeIn();
       }, 6200);
 });
         }
 function oneEror(data, status)
        {
         $("#oks").text('no funcionó');
 }












function xuccess(data, status)
        {
 $.easing.def = 'easeInOutSine';
 $( "body").fadeOut( 
 function(){
       location.reload(true); 
       setTimeout( 
 function(){
           $(body).fadeIn();
       }, 6200);
 });
         }
 function xerror(data, status)
        {
         $("#oks").text('no funcionó');
 }



 
function ssuccess(data, status)
        {
 $.easing.def = 'easeInOutSine';
 $( "body").fadeOut( 
 function(){
       location.reload(true); 
       setTimeout( 
 function(){
           $(body).fadeIn();
       }, 6200);
 });
         }
 function error(data, status)
        {
         $("#oks").text('no funcionó');
 }

 function onSuccess(data, status)
        {
        data = $.trim(data);
$('#success').removeClass('selected').addClass('Unselected'); 
   $("#oks").text('funcionó');

         }
 function onError(data, status)
        {
         $("#oks").text('no funcionó');
 }
  

 $(function () {
 		$("#submit").click(function(){
        $.notifyBar({ cls: "success", html: "Cambios realizados con éxito!" });
      }); 
      		$("#prefersubmit").click(function(){
        $.notifyBar({ cls: "success", html: "Cambios realizados con éxito!" });
      }); 

      $("#avisossubmit").click(function(){
        $.notifyBar({ cls: "success", html: "Cambios realizados con éxito!" });
      }); 

      			$("#actualiza").click(function(){
        $.notifyBar({ cls: "success", html: "Su cuenta ha sido actualizada." });
      }); 
       	
 		 
  $("#success").click(function(){
        $.notifyBar({ cls: "success", html: "Cambios realizados con éxito!" });
      });
  
  
   
});
 
 $(document).ready( function()
{
  $.easing.def = 'easeInOutSine';
$('update').slideDown({duration: 'slow',easing: 'easeInOutSine'});
$('.update').fadeIn(2200).html();
$("img.lazy").lazyload({ 
    effect : "fadeIn"
});








 });
 

 
 
$(document).ready( function()
{
    var targets = $( '[rel~=tooltip]' ),
        target  = false,
        tooltip = false,
        title   = false;
    targets.bind( 'mouseenter', function()
    {
        target  = $( this );
        tip     = target.attr( 'title' );
        tooltip = $( '<div id="tooltip"></div>' );
 
        if( !tip || tip == '' )
            return false;
        target.removeAttr( 'title' );
        tooltip.css( 'opacity', 0 )
               .html( tip )
               .appendTo( 'body' );
 
        var init_tooltip = function()
        {
            if( $( window ).width() < tooltip.outerWidth() * 1.5 )
                tooltip.css( 'max-width', $( window ).width() / 2 );
            else
                tooltip.css( 'max-width', 340 );
 
            var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                pos_top  = target.offset().top - tooltip.outerHeight() - 20;
 
            if( pos_left < 0 )
            {
                pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass( 'left' );
            }
            else
                tooltip.removeClass( 'left' );
 
            if( pos_left + tooltip.outerWidth() > $( window ).width() )
            {
                pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass( 'right' );
            }
            else
                tooltip.removeClass( 'right' );
 
            if( pos_top < 0 )
            {
                var pos_top  = target.offset().top + target.outerHeight();
                tooltip.addClass( 'top' );
            }
            else
                tooltip.removeClass( 'top' );
 
            tooltip.css( { left: pos_left, top: pos_top } )
                   .animate( { top: '+=10', opacity: 1 }, 50 );
        };
 
        init_tooltip();
        $( window ).resize( init_tooltip );
 
        var remove_tooltip = function()
        {
            tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
            {
                $( this ).remove();
            });
 
            target.attr( 'title', tip );
        };
 
        target.bind( 'mouseleave', remove_tooltip );
        tooltip.bind( 'click', remove_tooltip );
    });
});

function goBack(){window.history.go(-1)}

$(function() {
$(".delete_button").click(function() {
		
var agree=confirm("Estás seguro de borrar este post?");
if (agree)
var id = $(this).attr("id");
var dataString = 'uid='+ id ;
var parent = $(this).parent();
	
$.ajax({
   type: "POST",
   url: "index.php?id=116",
   data: dataString,
   cache: false,
   beforeSend: function()
  
   {
   parent.animate({ opacity: 0.15 }, "slow");
   }, 
   success: function()
   {
   parent.slideUp('slow', function() {$(this).remove();});
	
  }
   
 });

return false;
	});
});
	


 $(document).ready(function() {
                $(".oembed").oembed(null, 
                        {
                        embedMethod: "append", 
                        maxWidth: 304,
                        maxHeight: 160,
                        vimeo: { autoplay: false, maxWidth: 250, maxHeight: 150}                 
                        });
        });


$(document).ready(function() {
	
	$('#containereg ul:nth-child(even)').hide();
	
	$('h4:nth-child(even)').addClass('selected');
	$('h4').on('click', function() {
		
		$(this).addClass('selected').siblings().removeClass('selected');
		$('#containereg ul[data-for]').hide();
		$('#containerrg ul[data-for='+$(this).attr('id')+']').fadeIn();
	});
});


$(document).ready(function() {
$('#load').hide();
});


$(function() {
$(".delete").click(function() {
var agree=confirm("Estás seguro de borrar esta imagen?");
if (agree)
var id = $(this).attr("id");
var dataString = 'uid='+ id;
var parent = $(this).parent();
	
$.ajax({
   type: "POST",
   url: "index.php?id=127",
   data: dataString,
   cache: false,
   beforeSend: function()
  
   {
   parent.animate({ opacity: 0.15 }, "slow");
   }, 
   success: function()
   {
   parent.slideUp('slow', function() {$(this).remove();});
	
  }
   
 });


return false;
	});
});
	













         
