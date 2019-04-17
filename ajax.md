```
$.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=',
      data: {
        id: 123
      },
      success: function( response ) {
        $('#temp').html('The temperature in Detroit is ' + response.temp);
      },
      error: function() {
        alert('There was an error getting weather data.');
      },
      beforeSend: function () {
        $('#page').append('Loading');
      },
      complete: function () {
        $('#loading').remove();
      }
});
```