
var application = require('tns-core-modules/application').android;

exports.lockOrientation = function(orientation) {
    var activity = application.startActivity;
    switch (orientation) {
        case 'unlocked':
            activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED);
            break;

        case 'portrait-primary':
            activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
            break;

        case 'portrait-secondary':
            activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT);
            break;

        case 'landscape-primary':
            activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
            break;

        case 'landscape-secondary':
            activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE);
            break;

        case 'portrait':
            activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT);
            break;

        case 'landscape':
            activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
            break;

        default: activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT);
            break;
    }
}
