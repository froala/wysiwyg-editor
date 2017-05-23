/*!
 * froala_editor v2.6.1 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {

  
  $.extend($.FE.DEFAULTS, {
    scaytAutoload: false,
    scaytCustomerId: '1:tLBmI3-7rr3J1-GMEFA1-mIewo-hynTZ1-PV38I1-uEXCy2-Rn81L-gXuG4-NUNri4-5q9Q34-Jd',
    scaytOptions: {
      enableOnTouchDevices: false,
      localization:'en',
      extraModules: 'ui',
      DefaultSelection: 'American English',
      spellcheckLang: 'en_US',
      contextMenuSections: 'suggest|moresuggest',
      serviceProtocol: 'https',
      servicePort:'80',
      serviceHost:'svc.webspellchecker.net',
      servicePath:'spellcheck/script/ssrv.cgi',
      contextMenuForMisspelledOnly: true,
      scriptPath: 'https://svc.webspellchecker.net/spellcheck31/lf/scayt3/customscayt/customscayt.js'
    }
  });

  $.FE.PLUGINS.spellChecker = function (editor) {
    var object;

    // Refresh button in toolbar.
    function refresh ($btn) {
      if (object) {
        var active = !object.isDisabled();
        $btn.toggleClass('fr-active', active).attr('aria-pressed', active);

        editor.$el.attr('spellcheck', !active);
      }
    }

    // Remove markup from the current selection.
    function _beforeCommand (cmd) {
      if (!object || object.isDisabled()) return;

      if (['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize'].indexOf(cmd) >= 0) {
        object.removeMarkupInSelectionNode({
          removeInside: true
        });
      }

      if (cmd == 'html') {
        toggle();
      }
    }

    // Reload markup on the current selection.
    function _afterCommand (cmd) {
      if (!object || object.isDisabled()) return;

      if (['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize'].indexOf(cmd) >= 0) {
        object.reloadMarkup();
      }
    }

    // Key press.
    function _keyPress (e) {
      if (!object || object.isDisabled()) return;

      var key_code = e.which;

      // Reload markup on ENTER.
      if (key_code == $.FE.KEYCODE.ENTER) {
        setTimeout(object.reloadMarkup, 0);
      }
    }

    // Toggle spellchecker.
    function toggle () {
      if (!object) return;

      object.setDisabled(!object.isDisabled());
    }

    function _loaded () {
      // Set events.
      editor.events.on('commands.before', _beforeCommand);
      editor.events.on('commands.after', _afterCommand);
      editor.events.on('keydown', _keyPress, true);

      // Refresh;
      refresh(editor.$tb.find('[data-cmd="spellChecker"]'));
    }

    // Initialize.
    function _init () {
      if (!editor.$wp) return false;

      // Get SCAYT default options and overide them.
      var scayt_options = editor.opts.scaytOptions;
      scayt_options.customerId = editor.opts.scaytCustomerId;
      scayt_options.container = editor.$el.get(0);
      scayt_options.autoStartup = editor.opts.scaytAutoload;
      scayt_options.onLoad = _loaded;

      // Set language.
      if (editor.opts.language !== null) {
        editor.opts.spellCheckerLanguage = editor.opts.language;
      }

      // Disable spellcheck if there is scayt.
      if (editor.opts.scaytAutoload === true) {
        editor.opts.spellcheck = false;
      }

      // Init SCAYT.
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = editor.opts.scaytOptions.scriptPath;
      script.innerText = '';
      script.onload = function () {
        /*global SCAYT */
        object = new SCAYT.CUSTOMSCAYT(scayt_options);
      }

      document.getElementsByTagName('head')[0].appendChild(script);
    }

    return {
      _init: _init,
      refresh: refresh,
      toggle: toggle
    }
  };

  // Register spellchecker command.
  $.FE.DefineIcon('spellChecker', { NAME: 'keyboard-o' });
  $.FE.RegisterCommand('spellChecker', {
    title: 'Spell Checker',
    undo: false,
    focus: false,
    accessibilityFocus: true,
    forcedRefresh: true,
    toggle: true,
    callback: function () {
      this.spellChecker.toggle();
    },
    refresh: function ($btn) {
      this.spellChecker.refresh($btn);
    },
    plugin: 'spellChecker'
  });

}));
