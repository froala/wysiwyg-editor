define(["jquery", "beautify-html", "froala_editor"], function($) {
    $(function() {
      html_beautify = require("beautify-html").html_beautify;
      $('#edit').editable({inlineMode: false})
    });
});