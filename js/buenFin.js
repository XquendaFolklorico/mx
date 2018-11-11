
$(document).ready(function () {
    function regresiva2(fecha){
        var deadline=new Date(fecha);
        $('#days').countdown(deadline, function(event) {
          $('#days').html(event.strftime('%D'));
          $('#hours').html(event.strftime('%H'));
          $('#minutes').html(event.strftime('%M'));
        });
      }
      var d=new Date();
      var tz = d.getTimezoneOffset()/60;
      if(tz<10){
          tz='0'+tz;
      }
      var fecha = $( '#contador' ).data( 'fecha' )+'T00:00:00-'+tz+':00';
      regresiva2(fecha);
});