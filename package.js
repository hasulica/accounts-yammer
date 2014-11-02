Package.describe({
    name: 'rnorth:accounts-yammer',
    summary: 'Login service for Yammer accounts',
    version: '0.1.0',
    git: 'https://github.com/rnorth/accounts-yammer.git'
});

Package.onUse(function (api) {
    api.use('accounts-base', ['client', 'server']);

    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('rnorth:yammer@0.1.0', ['client', 'server']);

    api.versionsFrom('1.0');
    api.addFiles('yammer.js');
});