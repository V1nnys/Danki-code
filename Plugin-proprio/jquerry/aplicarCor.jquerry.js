$.fn.aplicarCor = function (options) {
  // This is the easiest way to have default options.
  var settings = $.extend(
    {
      // These are the defaults.
      color: "red",
      backgroundColor: "green",
    },
    options
  );

  // Greenify the collection based on the settings variable.
  return this.css({
    color: settings.color,
    backgroundColor: settings.backgroundColor,
  });

  //$(this).css("color", "red");
};
