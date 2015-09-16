// Load the editor and the plugins we need.
define(["jquery", "froala_editor", "fe_image", "fe_link"], function($) {
    $(function() {
      $('#edit').froalaEditor()
    });
});