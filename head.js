(function(){
  var options, isPreview;

  options = INSTALL_OPTIONS;
  isPreview = window.Eager && window.Eager.installs && window.Eager.installs.preview && window.Eager.installs.preview.appId === 'REPLACE_ME';

  if (isPreview) {
    // Make sure NectarNinja shows
    document.cookie = 'sentry-close-timestamp=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  if (!options.twitterUsername) {
    return;
  } else {
    options.twitterUsername = '@' + options.twitterUsername.replace(/^@/, '');
  }

  (function(){
    var handle = options.twitterUsername;
    var a = document.createElement('script');
    var m = document.getElementsByTagName('script')[0];
    a.async = 1;
    a.src = 'https://nectar.ninja/api/v1/' + handle.slice(1);
    m.parentNode.insertBefore(a, m);
  })();
})();
