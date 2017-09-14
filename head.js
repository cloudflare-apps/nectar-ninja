(function(){
  var options = INSTALL_OPTIONS;
  var isPreview = INSTALL_ID == "preview";

  if (isPreview) {
    // Make sure NectarNinja shows
    document.cookie = 'sentry-close-timestamp=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  if (!options.twitterUsername) {
    if (isPreview)
      options.twitterUsername = '@NectarNinjaDemo';
    else
      return;
  }

  var a = document.createElement('script');
  var m = document.getElementsByTagName('script')[0];
  a.src = 'https://nectar.ninja/api/v1/' + options.twitterUsername.trim().replace(/^@/, '');
  m.parentNode.insertBefore(a, m);
})();
