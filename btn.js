// Generated by CoffeeScript 1.7.1
(function() {
  var STORE_URL, firstScript, first_push, hideframe, iframeResizeHandler, initSwagEasyStore, is_touch_device, jquery, makeButtons, sendToStore, setupStore, storeReady, subdomain, swagStyles;

  swagStyles = '@-webkit-keyframes swagFadeIn{0%{opacity:0;-webkit-transform:translateY(20px)}100%{opacity:1;-webkit-transform:translateY(0)}}@-moz-keyframes swagFadeIn{0%{opacity:0;-moz-transform:translateY(20px)}100%{opacity:1;-moz-transform:translateY(0)}}@-o-keyframes swagFadeIn{0%{opacity:0;-o-transform:translateY(20px)}100%{opacity:1;-o-transform:translateY(0)}}@keyframes swagFadeIn{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}#swagframe.swagFadeIn{-webkit-animation-name:swagFadeIn;-moz-animation-name:swagFadeIn;-o-animation-name:swagFadeIn;animation-name:swagFadeIn}#swagframe.animated{-webkit-animation-fill-mode:both;-moz-animation-fill-mode:both;-ms-animation-fill-mode:both;-o-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:1s;-moz-animation-duration:1s;-ms-animation-duration:1s;-o-animation-duration:1s;animation-duration:1s}#swagframe{position:fixed;z-index:100;top:5vh;width:90vw;height:0;left:5vw;overflow-y:hidden;-webkit-overflow-scrolling:touch;background-color:transparent;box-shadow:inset 0 0 25px #fff;transition:all .8s ease-in-out}#swagoverlay{z-index:99;position:absolute;height:100%;width:100%;top:0;left:0;background-color:rgba(0,0,0,.6)}';

  storeReady = false;

  sendToStore = function(path) {
    jQuery('#swagframe').attr('src', path);
    return swagpop();
  };

  is_touch_device = function() {
    return !!("ontouchstart" in window) || !!("onmsgesturechange" in window);
  };

  window.swagpop = function() {
    var frame, overlay;
    overlay = jQuery("#swagoverlay")[0];
    frame = jQuery("#swagframe")[0];
    if (is_touch_device()) {
      window.location.href = SwagEasy.merchantDomain;
      return;
    }
    frame.setAttribute("style", "height: 90vh;");
    frame.className = "animated fadeInUp";
    overlay.setAttribute("style", "display:block");
    jQuery("#swagoverlay").height(jQuery(document).height());
    return iframeResizeHandler();
  };

  hideframe = function() {
    var frame, overlay;
    overlay = jQuery("#swagoverlay")[0];
    frame = jQuery("#swagframe")[0];
    frame.className = "animated fadeOutDown";
    frame.setAttribute("style", "height: 0;");
    return overlay.setAttribute("style", "display:none;");
  };

  iframeResizeHandler = function() {
    jQuery('#swagoverlay').width(jQuery(document).width());
    return jQuery('#swagoverlay').height(jQuery(document).height());
  };

  initSwagEasyStore = function() {
    setupStore(swagStyles);
    return makeButtons();
  };

  setupStore = function(styles) {
    var iframeString;
    if (jQuery('#swagframe')[0]) {
      return;
    }
    iframeString = "<iframe id=\"swagframe\" src=\"" + STORE_URL + "\" seamless onload=\"\"></iframe>";
    jQuery("body").append(iframeString);
    jQuery("body").append("<div id=\"swagoverlay\" style=\"display:none;\"></div>");
    jQuery("body").append("<style>" + styles + "</style>");
    jQuery("#swagoverlay").on("click", hideframe);
    jQuery('#swagframe').load(function() {
      return storeReady = true;
    });
    jQuery(window).resize(iframeResizeHandler);
    return iframeResizeHandler();
  };

  makeButtons = function() {
    return jQuery("[swageasy],button.swag-button").on("click", function(e) {
      if (!storeReady) {
        return;
      }
      swagpop();
      return e.preventDefault();
    });
  };

  subdomain = document.getElementById('swagscript').getAttribute('subdomain');

  STORE_URL = "http://" + subdomain + ".swageasy.com";

  first_push = true;

  jquery = document.createElement('script');

  jquery.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';

  jquery.onload = function() {
    jQuery.noConflict();
    return jQuery(document).ready(function() {
      initSwagEasyStore();
      return console.log("Initialized!");
    });
  };

  firstScript = document.getElementsByTagName('script')[0];

  firstScript.parentNode.appendChild(jquery);

}).call(this);
