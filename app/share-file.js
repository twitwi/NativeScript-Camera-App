
var application = require("tns-core-modules/application");

exports.shareUsingProviderAuthority = function(filePaths, providerAuthority, intentTitle) {
    var pathToUri = function(p) {
        return android.support.v4.content.FileProvider
        .getUriForFile(application.android.context, providerAuthority, new java.io.File(p));
    }


    var uris = new java.util.ArrayList();
    filePaths.map(pathToUri).forEach(u=> {uris.add(u)});
    /*
    var builder = new android.os.StrictMode.VmPolicy.Builder();
    android.os.StrictMode.setVmPolicy(builder.build());
    */
    var intent = new android.content.Intent();
    //var map = android.webkit.MimeTypeMap.getSingleton();
    //var mimeType = map.getMimeTypeFromExtension(this.fileExtension(args.path));
    intent.setAction(android.content.Intent.ACTION_SEND_MULTIPLE);
    intent.addFlags(android.content.Intent.FLAG_GRANT_READ_URI_PERMISSION);
    //intent.setType(mimeType);
    intent.setType("text/plain");
    intent.putParcelableArrayListExtra(android.content.Intent.EXTRA_STREAM, uris);
    application.android.currentContext.startActivity(android.content.Intent.createChooser(intent, intentTitle));
};
