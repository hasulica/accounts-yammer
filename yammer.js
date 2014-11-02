Accounts.oauth.registerService("yammer");

if (Meteor.isClient) {
    Meteor.loginWithYammer = function(options, callback) {
        if (!callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        Yammer.requestCredential(options, credentialRequestCompleteCallback);
    };
} else {
    Accounts.addAutopublishFields({
        forLoggedInUser: ['services.yammer'],
        forOtherUsers: [

        ]
    });
}
