(function ($) {
    'use strict';

    Drupal.behaviors.dhis = {
        attach: function (context, settings) {
            $( "#edit-auto-sync" ).click(function() {
                var auto_sync = $('input[name=auto_sync]').is(':checked');
               // var r = $('input[name=sync_interval]:checked').val();
                if (auto_sync){

                   alert( auto_sync+" checked on. " );
                    $("input[name=sync_interval]").prop('disabled',false);
                }
                else{
                    alert( auto_sync+" checked off " );
                    $("input[name=sync_interval]").prop('disabled',true);
                    console.log('%%%%%%');
                }

            });
        }
    };

}(jQuery));