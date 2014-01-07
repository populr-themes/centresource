/************************************************************************
// For extensive details about creating a Populr theme, please visit
// http://developers.populr.me/theming
*/

$(document).on('pop-initialized', function(){
    $('#cool-footer .tweet').twittie({
            dateFormat: '%b. %d, %Y',
            template: '{{tweet}} <div class="date">{{date}}</div>',
            count: 1
    });
});
