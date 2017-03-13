class Utilities {
  init() {
    console.log("Utilities initialized.");
  }

  get(_url, _onSuccess, onError) {
    console.log('Utilities get called.');
    $.ajax({
      url: 'http://192.168.1.130:10001/index.php?c=sentences&m=getSentences',
      crossDomain: true,
      dataType: 'json',
      async: true,
      type: 'GET',
      timeout: 30000, // milliseconds
      context:this,
    })
      .done(function(data, textStatus, jqXHR) {
        alert( "success" );
        alert(data);
        if (_onSuccess) {
          _onSuccess(data);
        }
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        alert( "error" );
        if (_onError) {
          _onError(errorThrown);
        }
      })
      .always(function() {
        alert( "complete" );
      });
  }

  post(_url, _data, _onSuccess, _onError){
    console.log("Utilities post called.");

    $.ajax({
      url : _url,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data : _data,
      success: function(data, textStatus, jqXHR)
      {
        if (_onSuccess) {
          _onSuccess(data);
        }
      },
      error: function (jqXHR, textStatus, errorThrown)
      {
        if (_onError) {
          _onError(errorThrown);
        }
      }
    });
  }
}

export { Utilities };
