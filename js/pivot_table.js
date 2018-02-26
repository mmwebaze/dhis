(function ($) {

    'use strict';

    Drupal.behaviors.dhisBehavior = {
        attach: function () {
//debugger;
            chartPlugin.url = 'https://dhis2.jsi.com/mfl';
            chartPlugin.username = 'admin';
            chartPlugin.password = 'district';
            chartPlugin.loadingIndicator = true;

            /*reportTablePlugin.url = 'https://dhis2.jsi.com/mfl';
            reportTablePlugin.username = 'admin';
            reportTablePlugin.password = 'district';
            reportTablePlugin.loadingIndicator = true;
            var visual = $('.vizual').attr('viz');
            var hc = JSON.parse(visual);
            console.log(hc);*/
            //var table1 = {id: 'C0rhAq1oklh', el: 'table1'};
            var chart1 = {id: 'DkPKc1EUmC2', el: 'table1'};
            chartPlugin.load(chart1);
            //reportTablePlugin.load(hc);
            /*Ext.onReady(function() {
                var visual = $('.vizual').attr('viz')
                console.log(visual);

                var hc = JSON.parse(visual);

                //setLinks(hc);
            });*/


            function setLinks(obj) {

                // Referring to an existing chart through the id parameter, render to "chart1" div

                //DHIS.getChart({ url: base, el: "chart1", id: "R0DVGvXDUNP" });
                DHIS.getTable({ url: "https://dhis2.jsi.com/mfl", el: "table1", id: "C0rhAq1oklh" });
                //DHIS.getTable(obj);

                // Full chart configuration, render to "chart2" div


            }

        }
    };

})(jQuery);