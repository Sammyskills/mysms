$(document).ready(function () {
    /* ======= Countdown ========= */
    // Date we are counting to
    var target_date = new Date('Feb 1, 2021').getTime();

    // variable for time units
    var days, hours, minutes, seconds;

    // Update the countdown every second
    setInterval(function () {
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        // Update value
        $('.days').text(days);
        $('.hours').text(hours);
        $('.minutes').text(minutes);
        $('.seconds').text(seconds);
    }, 1000);

    /* ======= Notification ========= */
    // Show/hide notification after 5 seconds
    setInterval(function() {
        // Load the notification
        $.get('ajax/php/request.php', function (data) {
            $('.notification-content span.main-text').html(data);
        });
        $('.notifications').toggleClass('show');
    }, 10000);
});