

(function poll(){
   setTimeout(function(){
      $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);


        
        poll();
      }, dataType: "json"});
  }, 30000);
})();


$.get(
    "https://www.dropbox.com/1/oauth2/authorize",
    {response_type : 'token', client_id : 'eym1lytwjtyifdo'},
    function(data) {
       alert('page content: ' + data);
    }
);
