(function ($) {
  $.Editable.image_commands = {
    floatImageLeft: {
      title: 'Float Left',
      icon: {
        type: 'font',
        value: 'fa fa-align-left'
      }
    },

    floatImageNone: {
      title: 'Float None',
      icon: {
        type: 'font',
        value: 'fa fa-align-justify'
      }
    },

    floatImageRight: {
      title: 'Float Right',
      icon: {
        type: 'font',
        value: 'fa fa-align-right'
      }
    },

    linkImage: {
      title: 'Insert Link',
      icon: {
        type: 'font',
        value: 'fa fa-link'
      }
    },

    replaceImage: {
      title: 'Replace Image',
      icon: {
        type: 'font',
        value: 'fa fa-exchange'
      }
    },

    removeImage: {
      title: 'Remove Image',
      icon: {
        type: 'font',
        value: 'fa fa-trash-o'
      }
    }
  };

  $.Editable.DEFAULTS = $.extend($.Editable.DEFAULTS, {
    allowedImageTypes: ['jpeg', 'jpg', 'png', 'gif'],
    defaultImageWidth: 300,
    imageButtons: ['floatImageLeft', 'floatImageNone', 'floatImageRight', 'linkImage', 'replaceImage', 'removeImage'],
    imageDeleteURL: null,
    imageDeleteParams: {},
    imageMove: true,
    imageResize: true,
    imageLink: true,
    imageTitle: true,
    imageUpload: true,
    imageUploadParams: {},
    imageUploadParam: 'file',
    imageUploadToS3: false,
    imageUploadURL: 'http://i.froala.com/upload',
    maxImageSize: 1024 * 1024 * 10, // 10 Mb.,
    pasteImage: true,
    textNearImage: true
  })

  $.Editable.prototype.hideImageEditorPopup = function () {
    if (this.$image_editor) {
      this.$image_editor.hide();
    }
  };

  $.Editable.prototype.showImageEditorPopup = function () {
    if (this.$image_editor) {
      this.$image_editor.show();
    }

    if (!this.options.imageMove) {
      this.$element.attr('contenteditable', false);
    }
  };

  $.Editable.prototype.showImageWrapper = function () {
    if (this.$image_wrapper) {
      this.$image_wrapper.show();
    }
  };

  $.Editable.prototype.hideImageWrapper = function (image_mode) {
    if (this.$image_wrapper) {
      if (!this.$element.attr('data-resize') && !image_mode) {
        this.closeImageMode();
        this.imageMode = false;
      }

      this.$image_wrapper.hide();
    }
  };

  $.Editable.prototype.showInsertImage = function () {
    this.hidePopups();

    this.showImageWrapper();
  };

  $.Editable.prototype.showImageEditor = function () {
    this.hidePopups();

    this.showImageEditorPopup();
  };

  $.Editable.prototype.insertImageHTML = function () {
    var html = '<div class="froala-popup froala-image-popup" style="display: none;"><h4><span data-text="true">Insert image</span><span data-text="true">Uploading image</span><i title="Cancel" class="fa fa-times" id="f-image-close-' + this._id + '"></i></h4>';

    html += '<div id="f-image-list-' + this._id + '">';

    if (this.options.imageUpload) {
      html += '<div class="f-popup-line drop-upload">';
      html += '<div class="f-upload" id="f-upload-div-' + this._id + '"><strong data-text="true">Drop Image</strong><br>(<span data-text="true">or click</span>)<form target="frame-' + this._id + '" enctype="multipart/form-data" encoding="multipart/form-data" action="' + this.options.imageUploadURL + '" method="post" id="f-upload-form-' + this._id + '"><input id="f-file-upload-' + this._id + '" type="file" name="' + this.options.imageUploadParam + '" accept="image/*"></form></div>';

      if (this.browser.msie && $.Editable.getIEversion() <= 9) {
        html += '<iframe id="frame-' + this._id + '" name="frame-' + this._id + '" src="javascript:false;" style="width:0; height:0; border:0px solid #FFF; position: fixed; z-index: -1;"></iframe>';
      }

      html += '</div>';
    }

    if (this.options.imageLink) {
      html += '<div class="f-popup-line"><label><span data-text="true">Enter URL</span>: </label><input id="f-image-url-' + this._id + '" type="text" placeholder="http://example.com"><button class="f-browse" id="f-browser-' + this._id + '"><i class="fa fa-search"></i></button><button data-text="true" class="f-ok" id="f-image-ok-' + this._id + '">OK</button></div>';
    }

    html += '</div>';
    html += '<p class="f-progress" id="f-progress-' + this._id + '"><span></span></p>';
    html += '</div>';

    return html;
  }

  $.Editable.prototype.iFrameLoad = function () {
    var $iframe = this.$image_wrapper.find('iframe#frame-' + this._id);
    if (!$iframe.attr('data-loaded')) {
      $iframe.attr('data-loaded', true);
      return false;
    }

    try {
      var $form = this.$image_wrapper.find('#f-upload-form-' + this._id);

      // S3 upload.
      if (this.options.imageUploadToS3) {
        var domain = $form.attr('action')
        var key = $form.find('input[name="key"]').val()
        var url = domain + key;

        this.writeImage(url);
        if (this.options.imageUploadToS3.callback) {
          this.options.imageUploadToS3.callback.call(this, url, key);
        }
      }

      // Normal upload.
      else {
        var response = $iframe.contents().text();
        this.parseImageResponse(response);
      }
    }
    catch (ex) {
      // Same domain.
      this.throwImageError(7);
    }
  }

  $.Editable.prototype.initImage = function () {
    this.buildInsertImage();

    if (!this.isLink || this.isImage) {
      this.initImageEvents();

      this.initImagePopup();
    }

    this.addListener('destroy', this.destroyImage);
  }

  $.Editable.initializers.push($.Editable.prototype.initImage);

  $.Editable.prototype.destroyImage = function () {
    this.$image_editor.html('').removeData().remove();
    this.$image_wrapper.html('').removeData().remove();
  }

  /**
   * Build insert image.
   */
  $.Editable.prototype.buildInsertImage = function () {
    // Add image wrapper to editor.
    this.$image_wrapper = $(this.insertImageHTML());
    this.$popup_editor.append(this.$image_wrapper);

    var that = this;

    // Stop event propagation in image.
    this.$image_wrapper.on('mouseup touchend', $.proxy(function (e) {
      if (!this.isResizing()) {
        e.stopPropagation();
      }
    }, this));

    this.addListener('hidePopups', $.proxy(function () {
      this.hideImageWrapper(true);
    }), this);

    // Init progress bar.
    this.$progress_bar = this.$image_wrapper.find('p#f-progress-' + this._id);

    // Build drag and drop upload.
    if (this.options.imageUpload) {
      // Build upload frame.
      if (this.browser.msie && $.Editable.getIEversion() <= 9) {
        var iFrame = this.$image_wrapper.find('iframe').get(0);

        if (iFrame.attachEvent) {
          iFrame.attachEvent('onload', function () { that.iFrameLoad() });
        } else {
          iFrame.onload  = function () { that.iFrameLoad() };
        }
      }

      // File was picked.
      this.$image_wrapper.on('change', 'input[type="file"]', function () {
        // Files were picked.
        if (this.files !== undefined) {
          that.uploadImage(this.files);
        }

        // IE 9 upload.
        else {
          var $form = $(this).parents('form');
          $form.find('input[type="hidden"]').remove();
          var key;
          for (key in that.options.imageUploadParams) {
            $form.prepend('<input type="hidden" name="' + key + '" value="' + that.options.imageUploadParams[key] + '" />');
          }

          if (that.options.imageUploadToS3 !== false) {
            for (key in that.options.imageUploadToS3.params) {
              $form.prepend('<input type="hidden" name="' + key + '" value="' + that.options.imageUploadToS3.params[key] + '" />');
            }

            $form.prepend('<input type="hidden" name="' + 'success_action_status' + '" value="' + 201 + '" />');
            $form.prepend('<input type="hidden" name="' + 'X-Requested-With' + '" value="' + 'xhr' + '" />');
            $form.prepend('<input type="hidden" name="' + 'Content-Type' + '" value="' + '' + '" />');
            $form.prepend('<input type="hidden" name="' + 'key' + '" value="' + that.options.imageUploadToS3.keyStart + (new Date()).getTime() + '-' + $(this).val().match(/[^\/\\]+$/) + '" />');
          } else {
            $form.prepend('<input type="hidden" name="XHR_CORS_TRARGETORIGIN" value="' + window.location.href + '" />');
          }

          that.showInsertImage();
          that.showImageLoader(true);
          that.disable();

          $form.submit();
        }

        // Chrome fix.
        $(this).val('');
      });
    }

    // Add drag and drop support.
    this.buildDragUpload();

    // URL input for insert image.
    this.$image_wrapper.on('mouseup keydown', '#f-image-url-' + this._id, $.proxy(function (e) {
      var keyCode = e.which;
      if (!keyCode || keyCode !== 27) {
        e.stopPropagation();
      }
    }, this));

    // Create a list with all the items from the popup.
    this.$image_wrapper.on('click', '#f-image-ok-' + this._id, $.proxy(function () {
      this.writeImage(this.$image_wrapper.find('#f-image-url-' + this._id).val(), true);
    }, this));

    // Wrap things in image wrapper.
    this.$image_wrapper.on('mouseup', '#f-image-close-' + this._id, $.proxy(function (e) {
      if (this.isDisabled) return false;

      e.stopPropagation();

      this.$bttn_wrapper.show();
      this.hideImageWrapper(true);

      if (this.options.inlineMode && this.options.buttons.length === 0) {
        if (this.imageMode) {
          this.showImageEditor();
        } else {
          this.hide();
        }
      }

      if (!this.imageMode) {
        this.restoreSelection();
      }

      if (!this.options.inlineMode && !this.imageMode) {
        this.hide();
      } else if (this.imageMode) {
        this.showImageEditor();
      }
    }, this))

    this.$image_wrapper.on('click', function (e) {
      e.stopPropagation();
    });

    this.$image_wrapper.on('click', '*', function (e) {
      e.stopPropagation();
    });
  };


  // Delete an image.
  $.Editable.prototype.deleteImage = function ($img) {
    if (this.options.imageDeleteURL) {
      var deleteParams = this.options.imageDeleteParams;
      deleteParams.info = $img.data('info');
      deleteParams.src = $img.attr('src');
      $.ajax({
        type: 'POST',
        url: this.options.imageDeleteURL,
        data: deleteParams,
        crossDomain: this.options.crossDomain,
        xhrFields: {
          withCredentials: this.options.withCredentials
        },
        headers: this.options.headers
      })
      .done($.proxy(function (data) {
        // In media manager.
        if ($img.parent().parent().hasClass('f-image-list')) {
          $img.parent().remove();
        }

        // Normal delete.
        else {
          $img.parent().removeClass('f-img-deleting');
        }

        this.triggerEvent('imageDeleteSuccess', [data], false);
      }, this))
      .fail($.proxy(function () {
        $img.parent().removeClass('f-img-deleting');
        this.triggerEvent('imageDeleteError', ['Error during image delete.'], false);
      }, this));
    }
    else {
      $img.parent().removeClass('f-img-deleting');
      this.triggerEvent('imageDeleteError', ['Missing imageDeleteURL option.'], false);
    }
  };

  /**
   * Initialize actions for image handles.
   */
  $.Editable.prototype.imageHandle = function () {
    var that = this;

    var $handle = $('<span data-fr-verified="true">').addClass('f-img-handle').on({
      // Start to drag.
      movestart: function (e) {
        that.hide();
        that.$element.addClass('f-non-selectable').attr('contenteditable', false);
        that.$element.attr('data-resize', true);

        $(this).attr('data-start-x', e.startX);
        $(this).attr('data-start-y', e.startY);
      },

      // Still moving.
      move: function (e) {
        var $elem = $(this);
        var diffX = e.pageX - parseInt($elem.attr('data-start-x'), 10);

        $elem.attr('data-start-x', e.pageX);
        $elem.attr('data-start-y', e.pageY);

        var $img = $elem.prevAll('img');
        var width = $img.width();
        if ($elem.hasClass('f-h-ne') || $elem.hasClass('f-h-se')) {
          $img.attr('width', width + diffX);
        } else {
          $img.attr('width', width - diffX);
        }

        that.triggerEvent('imageResize', [], false);
      },

      // Drag end.
      moveend: function () {
        $(this).removeAttr('data-start-x');
        $(this).removeAttr('data-start-y');

        that.$element.removeClass('f-non-selectable');
        if (!that.isImage) {
          that.$element.attr('contenteditable', true);
        }

        that.triggerEvent('imageResizeEnd');

        $(this).trigger('mouseup');
      },

      // Issue #221.
      touchend: function () {
        $(this).trigger('moveend');
      }
    });

    return $handle;
  };

  /**
   * Disable image resizing from browser.
   */
  $.Editable.prototype.disableImageResize = function () {
    // Disable resize for FF.
    if (this.browser.mozilla) {
      try {
        document.execCommand('enableObjectResizing', false, false);
        document.execCommand('enableInlineTableEditing', false, false);
      } catch (ex) {}
    }
  };

  $.Editable.prototype.isResizing = function () {
    return this.$element.attr('data-resize');
  };

  $.Editable.prototype.getImageClass = function (cls) {
    var classes = cls.split(' ');

    if (classes.indexOf('fr-fir') >= 0) {
      return 'fr-fir';
    }

    if (classes.indexOf('fr-fil') >= 0) {
      return 'fr-fil';
    }

    return 'fr-fin';
  };

  $.Editable.prototype.addImageClass = function ($obj, cls) {
    $obj.removeClass('fr-fin fr-fir fr-fil').addClass(cls);
  };

  /**
   * Image controls.
   */
  $.Editable.prototype.initImageEvents = function () {

    this.disableImageResize();

    var that = this;

    // Image drop.
    if (document.addEventListener) {
      document.addEventListener('drop', $.proxy(function () {
        setTimeout($.proxy(function () {
          that.closeImageMode();
          that.imageMode = false;
          that.hide();
          this.sync();
          this.clearSelection();
        }, this), 10);
      }, this));
    }

    // Image mouse down.
    this.$element.on('mousedown', 'img:not([contenteditable="false"])', function (e) {
      if (that.isDisabled) return false;

      if (!that.isResizing()) {
        // Stop propagation.
        e.stopPropagation();

        // Remove content editable if move is not allowed or MSIE.
        that.$element.attr('contenteditable', false);
        $(this).addClass('fr-image-move');
      }
    });

    // Image mouse up.
    this.$element.on('mouseup', 'img:not([contenteditable="false"])', function () {
      if (that.isDisabled) return false;

      if (!that.isResizing()) {
        // Add contenteditable back after move.
        if (!that.options.imageMove && !that.isImage && !that.isHTML) {
          that.$element.attr('contenteditable', true);
        }

        $(this).removeClass('fr-image-move');
      }
    });

    // Image click.
    this.$element.on('click touchend', 'img:not([contenteditable="false"])', function (e) {
      if (that.isDisabled) return false;

      if (!that.isResizing()) {
        e.preventDefault();
        e.stopPropagation();

        // Close other images.
        that.closeImageMode();

        // iPad Fix.
        that.$element.blur();

        // Unmark active buttons in the popup.
        that.$image_editor.find('button').removeClass('active');

        // Mark active float.
        var image_float = $(this).css('float');

        if ($(this).hasClass('fr-fil')) {
          image_float = 'left';
        } else if ($(this).hasClass('fr-fir')) {
          image_float = 'right';
        }

        that.$image_editor.find('button[data-cmd="floatImage' + image_float.charAt(0).toUpperCase() + image_float.slice(1) + '"]').addClass('active');

        // Set alt for image.
        that.$image_editor.find('.f-image-alt input[type="text"]').val($(this).attr('alt') || $(this).attr('title'));

        // Hide basic editor.
        that.showImageEditor();

        // Wrap image with image editor.
        if (!($(this).parent().hasClass('f-img-editor') && $(this).parent().get(0).tagName == 'SPAN')) {
          var image_class = that.getImageClass($(this).attr('class'));

          $(this).wrap('<span data-fr-verified="true" class="f-img-editor ' + image_class + '"></span>');

          if ($(this).parents('.f-img-wrap').length === 0 && !that.isImage) {
            if ($(this).parents('a').length > 0) {
              $(this).parents('a:first').wrap('<span data-fr-verified="true" class="f-img-wrap ' + image_class + '"></span>');
            } else {
              $(this).parent().wrap('<span data-fr-verified="true" class="f-img-wrap ' + image_class + '"></span>');
            }
          } else {
            that.addImageClass($(this).parents('.f-img-wrap'), image_class);
          }
        }

        // Get image handle.
        var $handle = that.imageHandle();

        // Remove old handles.
        $(this).parent().find('.f-img-handle').remove();

        // Add Handles.
        if (that.options.imageResize) {
          $(this).parent().append($handle.clone(true).addClass('f-h-ne'));
          $(this).parent().append($handle.clone(true).addClass('f-h-se'));
          $(this).parent().append($handle.clone(true).addClass('f-h-sw'));
          $(this).parent().append($handle.clone(true).addClass('f-h-nw'));
        }

        // Reposition editor.
        that.showByCoordinates($(this).offset().left + $(this).width() / 2, $(this).offset().top + $(this).height());

        // Image mode power.
        that.imageMode = true;

        that.$bttn_wrapper.find('.fr-bttn').removeClass('active');

        // No selection needed. We have image.
        that.clearSelection();
      }
    });

    // Add resizing data.
    this.$element.on('mousedown touchstart', '.f-img-handle', $.proxy(function () {
      if (that.isDisabled) return false;

      this.$element.attr('data-resize', true);
    }, this));


    // Remove resizing data.
    this.$element.on('mouseup', '.f-img-handle', $.proxy(function (e) {
      if (that.isDisabled) return false;

      var $img = $(e.target).prevAll('img');
      setTimeout($.proxy(function () {
        this.$element.removeAttr('data-resize');
        $img.click();
      }, this), 0);
    }, this));
  };

  /**
   * Init popup for image.
   */
  $.Editable.prototype.initImagePopup = function () {
    this.$image_editor = $('<div class="froala-popup froala-image-editor-popup" style="display: none">');

    var $buttons = $('<div class="f-popup-line f-popup-toolbar">').appendTo(this.$image_editor);
    for (var i = 0; i < this.options.imageButtons.length; i++) {
      var cmd = this.options.imageButtons[i];
      if ($.Editable.image_commands[cmd] === undefined) {
        continue;
      }
      var button = $.Editable.image_commands[cmd];

      var btn = '<button class="fr-bttn" data-callback="' + cmd + '" data-cmd="' + cmd + '" title="' + button.title + '">';

      if (this.options.icons[cmd] !== undefined) {
        btn += this.prepareIcon(this.options.icons[cmd], button.title);
      } else {
        btn += this.prepareIcon(button.icon, button.title);
      }

      btn += '</button>';

      $buttons.append(btn);
    }

    this.addListener('hidePopups', this.hideImageEditorPopup);

    if (this.options.imageTitle) {
      $('<div class="f-popup-line f-image-alt">')
        .append('<label><span data-text="true">Title</span>: </label>')
        .append($('<input type="text">').on('mouseup keydown', function (e) {
          var keyCode = e.which;
          if (!keyCode || keyCode !== 27) {
            e.stopPropagation();
          }
        }))
        .append('<button class="f-ok" data-text="true" data-cmd="setImageAlt" title="OK">OK</button>')
        .appendTo(this.$image_editor);
    }

    this.$popup_editor.append(this.$image_editor);

    this.bindCommandEvents(this.$image_editor);
  };

  /**
   * Float image to the left.
   */
  $.Editable.prototype.floatImageLeft = function () {
    var $image_editor = this.$element.find('span.f-img-editor');
    this.addImageClass($image_editor, 'fr-fil');

    if (this.isImage) {
      this.$element.css('float', 'left')
    }


    this.triggerEvent('imageFloatedLeft');

    $image_editor.find('img').click();
  };

  /**
   * Align image center.
   */
  $.Editable.prototype.floatImageNone = function () {
    var $image_editor = this.$element.find('span.f-img-editor');
    this.addImageClass($image_editor, 'fr-fin');

    if (!this.isImage) {
      if ($image_editor.parent().get(0) == this.$element.get(0)) {
        $image_editor.wrap('<div style="text-align: center;"></div>');
      } else {
        $image_editor.parents('.f-img-wrap:first').css('text-align', 'center');
      }
    }

    if (this.isImage) {
      this.$element.css('float', 'none')
    }


    this.triggerEvent('imageFloatedNone');

    $image_editor.find('img').click();
  };

  /**
   * Float image to the right.
   */
  $.Editable.prototype.floatImageRight = function () {
    var $image_editor = this.$element.find('span.f-img-editor');
    this.addImageClass($image_editor, 'fr-fir');

    if (this.isImage) {
      this.$element.css('float', 'right')
    }


    this.triggerEvent('imageFloatedRight');

    $image_editor.find('img').click();
  };

  /**
   * Link image.
   */
  $.Editable.prototype.linkImage = function () {
    var $image_editor = this.$element.find('span.f-img-editor');
    this.showInsertLink();

    this.imageMode = true;

    if ($image_editor.parent().get(0).tagName == 'A') {
      this.$link_wrapper.find('input[type="text"]').val($image_editor.parent().attr('href'));
      this.$link_wrapper.find('.f-external-link').attr('href', $image_editor.parent().attr('href'));

      if ($image_editor.parent().attr('target') == '_blank') {
        this.$link_wrapper.find('input[type="checkbox"]').prop('checked', true);
      } else {
        this.$link_wrapper.find('input[type="checkbox"]').prop('checked', false);
      }
      this.$link_wrapper.find('a.f-external-link, button.f-unlink').show();
    } else {
      this.$link_wrapper.find('input[type="text"]').val('http://');
      this.$link_wrapper.find('.f-external-link').attr('href', '#');
      this.$link_wrapper.find('input[type="checkbox"]').prop('checked', this.options.alwaysBlank);
      this.$link_wrapper.find('a.f-external-link, button.f-unlink').hide();
    }
  };

  /**
   * Replace image with another one.
   */
  $.Editable.prototype.replaceImage = function () {
    var $image_editor = this.$element.find('span.f-img-editor');
    this.showInsertImage();
    this.imageMode = true;

    this.$image_wrapper.find('input[type="text"]').val($image_editor.find('img').attr('src'));

    var $img = $image_editor.find('img');
    this.showByCoordinates($img.offset().left + $img.width() / 2, $img.offset().top + $img.height());
  };

  /**
   * Remove image.
   */
  $.Editable.prototype.removeImage = function () {
    var $image_editor = this.$element.find('span.f-img-editor');
    var img = $image_editor.find('img').get(0);

    var message = 'Are you sure? Image will be deleted.';
    if ($.Editable.LANGS[this.options.language]) {
      message = $.Editable.LANGS[this.options.language].translation[message];
    }

    // Ask to remove.
    if (confirm(message)) {
      // (src)
      if (this.triggerEvent('beforeRemoveImage', [$(img)], false)) {
        var img_parent = $image_editor.parents(this.valid_nodes.join(','));

        if ($image_editor.parents('.f-img-wrap').length) {
          $image_editor.parents('.f-img-wrap').remove();
        } else {
          $image_editor.remove();
        }
        this.refreshImageList(true);
        this.hide();

        if (img_parent.length && img_parent[0] != this.$element.get(0)) {
          if ($(img_parent[0]).text() === '') {
            $(img_parent[0]).remove()
          }
        }


        this.wrapText();

        this.triggerEvent('afterRemoveImage', [$(img)]);
        this.focus();

        this.imageMode = false;
      }
    }
    else {
      $image_editor.find('img').click();
    }
  };

  /**
   * Set image alt.
   */
  $.Editable.prototype.setImageAlt = function () {
    var $image_editor = this.$element.find('span.f-img-editor');
    $image_editor.find('img').attr('alt', this.$image_editor.find('.f-image-alt input[type="text"]').val());
    $image_editor.find('img').attr('title', this.$image_editor.find('.f-image-alt input[type="text"]').val());


    this.hide();
    this.closeImageMode();
    this.triggerEvent('imageAltSet');
  };

  /**
   * Add drag and drop upload.
   *
   * @param $holder - jQuery object.
   */
  $.Editable.prototype.buildDragUpload = function () {
    var that = this;

    that.$image_wrapper.on('dragover', '#f-upload-div-' + this._id, function () {
      $(this).addClass('f-hover');
      return false;
    });

    that.$image_wrapper.on('dragend', '#f-upload-div-' + this._id, function () {
      $(this).removeClass('f-hover');
      return false;
    });

    that.$image_wrapper.on('drop', '#f-upload-div-' + this._id, function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (!that.options.imageUpload) return false;

      $(this).removeClass('f-hover');

      that.uploadImage(e.originalEvent.dataTransfer.files);
    });

    that.$element.on('dragover dragenter dragend', function () {
      return false;
    });

    that.$element.on('drop', function (e) {
      that.closeImageMode();
      that.hide();
      that.imageMode = false;

      if (that.options.imageUpload && that.$element.find('.fr-image-move').length === 0) {
        if (e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files.length) {
          if (that.isDisabled) return false;

          that.insertMarkersAtPoint(e.originalEvent);
          that.showByCoordinates(e.originalEvent.pageX, e.originalEvent.pageY);
          that.uploadImage(e.originalEvent.dataTransfer.files);
          e.preventDefault();
          e.stopPropagation();
        }
      } else {
        // MSIE drag and drop workaround.
        if (that.$element.find('.fr-image-move').length > 0 && that.options.imageMove) {
          that.insertMarkersAtPoint(e.originalEvent);
          that.restoreSelectionByMarkers();
          var html = $('<div>')
              .append(
                that.$element
                  .find('.fr-image-move')
                    .clone()
                    .removeClass('fr-image-move')
                    .addClass('fr-image-dropped')
              ).html();

          that.insertHTML(html);
          that.$element.find('.fr-image-move').remove();

          that.clearSelection();

          setTimeout(function () {
            that.$element
              .find('.fr-image-dropped')
                .removeClass('fr-image-dropped')
                .click()
          }, 0);

          that.sync();
        } else {
          that.$element.find('.fr-image-move').removeClass('fr-image-move');
        }

        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    })
  };

  $.Editable.prototype.showImageLoader = function (waiting) {
    if (waiting === undefined) waiting = false;

    if (!waiting) {
      this.$image_wrapper.find('h4').addClass('uploading');
    }
    else {
      this.$progress_bar.find('span').css('width', '100%').text('Please wait!');
    }

    this.$image_wrapper.find('#f-image-list-' + this._id).hide();
    this.$progress_bar.show();
    this.showInsertImage();
  }

  $.Editable.prototype.hideImageLoader = function () {
    this.$progress_bar.hide();
    this.$progress_bar.find('span').css('width', '0%').text('');
    this.$image_wrapper.find('#f-image-list-' + this._id).show();
    this.$image_wrapper.find('h4').removeClass('uploading');
  };

  /**
   * Insert image command.
   *
   * @param image_link
   */
  $.Editable.prototype.writeImage = function (image_link, sanitize) {
    if (sanitize) {
      image_link = this.sanitizeURL(image_link);
      if (image_link === '') {
        return false;
      }
    }

    var img = new Image();
    img.onerror = $.proxy(function () {
      this.hideImageLoader();
      this.throwImageError(1);
    }, this);

    if (this.imageMode) {
      img.onload = $.proxy(function () {
        var $img = this.$element.find('.f-img-editor > img');
        $img.attr('src', image_link);

        this.hide();
        this.hideImageLoader();
        this.$image_editor.show();



        this.enable();

        // call with (image HTML)
        this.triggerEvent('imageReplaced', [$img]);

        setTimeout(function () {
          $img.trigger('click');
        }, 0);
      }, this);
    }

    else {
      img.onload = $.proxy(function () {
        this.insertLoadedImage(image_link);
      }, this);
    }

    this.showImageLoader(true);

    img.src = image_link;
  };

  $.Editable.prototype.processInsertImage = function (image_link, image_preview) {
    if (image_preview === undefined) image_preview = true;

    this.enable();

    // Restore saved selection.
    this.restoreSelection();
    this.focus();

    var image_width = '';
    if (parseInt(this.options.defaultImageWidth, 10) || 0 > 0) {
      image_width = ' width="' + this.options.defaultImageWidth + '"';
    }

    // Build image string.
    var img_s = '<img class="fr-fin fr-just-inserted" data-fr-image-preview="' + image_preview + '" alt="Image title" src="' + image_link + '"' + image_width + '>';

    // Search for start container.
    var selected_element = this.getSelectionElements()[0];
    var range = this.getRange();
    var $span = (!this.browser.msie && $.Editable.getIEversion() > 8 ? $(range.startContainer) : null);

    // Insert was called with image selected.
    if ($span && $span.hasClass('f-img-wrap')) {

      // Insert image after.
      if (range.startOffset === 1) {
        $span.after('<p><span class="f-marker" data-type="true" data-id="0"></span><br/><span class="f-marker" data-type="false" data-id="0"></span></p>');
        this.restoreSelectionByMarkers();
        this.getSelection().collapseToStart();

      }

      // Insert image before.
      else if (range.startOffset === 0) {
        $span.before('<p><span class="f-marker" data-type="true" data-id="0"></span><br/><span class="f-marker" data-type="false" data-id="0"></span></p>');
        this.restoreSelectionByMarkers();
        this.getSelection().collapseToStart();
      }

      // Add image.
      this.insertHTML(img_s);
    }

    // Insert in table.
    else if (this.getSelectionTextInfo(selected_element).atStart && selected_element != this.$element.get(0) && selected_element.tagName != 'TD' && selected_element.tagName != 'TH' && selected_element.tagName != 'LI') {
      $(selected_element).before('<p>' + img_s + '</p>');
    }

    // Normal insert.
    else {
      this.insertHTML(img_s);
    }

    this.disable();
  }

  $.Editable.prototype.insertLoadedImage = function (image_link) {
    // Image was loaded fine.
    this.triggerEvent('imageLoaded', [image_link], false);

    this.processInsertImage(image_link, false);

    // IE fix.
    if (this.browser.msie) {
      this.$element.find('img').each(function (index, elem) {
        elem.oncontrolselect = function () {
          return false;
        };
      });
    }

    this.enable();

    // Hide image controls.
    this.hide();
    this.hideImageLoader();

    // Have to wrap image.
    this.wrapText();

    // Select image.
    setTimeout($.proxy(function () {
      this.$element.find('img.fr-just-inserted').removeClass('fr-just-inserted').trigger('touchend');
    }, this), 50);

    // (imageURL)
    this.triggerEvent('imageInserted', [image_link]);
  };

  $.Editable.prototype.throwImageErrorWithMessage = function (message) {
    this.enable();
    this.$element.find('img[data-fr-image-preview]').remove();

    this.triggerEvent('imageError', [{
      message: message,
      code: 0
    }], false);

    this.hideImageLoader();
  }

  $.Editable.prototype.throwImageError = function (code) {
    this.enable();
    this.$element.find('img[data-fr-image-preview]').remove();

    var status = 'Unknown image upload error.';
    if (code == 1) {
      status = 'Bad link.';
    } else if (code == 2) {
      status = 'No link in upload response.';
    } else if (code == 3) {
      status = 'Error during file upload.';
    } else if (code == 4) {
      status = 'Parsing response failed.';
    } else if (code == 5) {
      status = 'Image too large.';
    } else if (code == 6) {
      status = 'Invalid image type.';
    } else if (code == 7) {
      status = 'Image can be uploaded only to same domain in IE 8 and IE 9.'
    }

    this.triggerEvent('imageError', [{
      code: code,
      message: status
    }], false);

    this.hideImageLoader();
  };

  /**
   * Upload files to server.
   *
   * @param files
   */
  $.Editable.prototype.uploadImage = function (files) {
    if (!this.triggerEvent('beforeImageUpload', [files], false)) {
      return false;
    }

    if (files !== undefined && files.length > 0) {
      var formData;

      if (this.drag_support.formdata) {
        formData = this.drag_support.formdata ? new FormData() : null;
      }

      if (formData) {
        var key;
        for (key in this.options.imageUploadParams) {
          formData.append(key, this.options.imageUploadParams[key]);
        }

        // Upload to S3.
        if (this.options.imageUploadToS3 !== false) {
          for (key in this.options.imageUploadToS3.params) {
            formData.append(key, this.options.imageUploadToS3.params[key]);
          }

          formData.append('success_action_status', '201');
          formData.append('X-Requested-With', 'xhr');
          formData.append('Content-Type', files[0].type);
          formData.append('key', this.options.imageUploadToS3.keyStart + (new Date()).getTime() + '-' + files[0].name);
        }

        formData.append(this.options.imageUploadParam, files[0]);

        // Check image max size.
        if (files[0].size > this.options.maxImageSize) {
          this.throwImageError(5);
          return false;
        }

        // Check image types.
        if (this.options.allowedImageTypes.indexOf(files[0].type.replace(/image\//g,'')) < 0) {
          this.throwImageError(6);
          return false;
        }
      }

      if (formData) {
        var xhr;
        if (this.options.crossDomain) {
          xhr = this.createCORSRequest('POST', this.options.imageUploadURL);
        } else {
          xhr = new XMLHttpRequest();
          xhr.open('POST', this.options.imageUploadURL);
        }

        xhr.onload = $.proxy(function () {
          this.$progress_bar.find('span').css('width', '100%').text('Please wait!');
          try {
            if (this.options.imageUploadToS3) {
              if (xhr.status == 201) {
                this.parseImageResponseXML(xhr.responseXML);
              } else {
                this.throwImageError(3);
              }
            }
            else {
              if (xhr.status >= 200 && xhr.status < 300) {
                this.parseImageResponse(xhr.responseText);
              } else {
                this.throwImageError(3);
              }
            }
          } catch (ex) {
            // Bad response.
            this.throwImageError(4);
          }
        }, this);

        xhr.onerror = $.proxy(function () {
          // Error on uploading file.
          this.throwImageError(3);

        }, this);

        xhr.upload.onprogress = $.proxy(function (event) {
          if (event.lengthComputable) {
            var complete = (event.loaded / event.total * 100 | 0);
            this.$progress_bar.find('span').css('width', complete + '%');
          }
        }, this);

        // Keep the editor only for uploading.
        this.disable();

        xhr.send(formData);

        // Prepare progress bar for uploading.
        this.showImageLoader();
      }
    }
  };

  $.Editable.prototype.parseImageResponse = function (response) {
    try {
      var resp = $.parseJSON(response);
      if (resp.link) {
        this.writeImage(resp.link);
      } else if (resp.error) {
        this.throwImageErrorWithMessage(resp.error);
      } else {
        // No link in upload request.
        this.throwImageError(2);
      }
    } catch (ex) {
      // Bad response.
      this.throwImageError(4);
    }
  };

  $.Editable.prototype.parseImageResponseXML = function (xml_doc) {
    try {
      var link = $(xml_doc).find('Location').text();
      var key = $(xml_doc).find('Key').text();

      // Callback.
      this.options.imageUploadToS3.callback.call(this, link, key);

      if (link) {
        this.writeImage(link);
      } else {
        // No link in upload request.
        this.throwImageError(2);
      }
    } catch (ex) {
      // Bad response.
      this.throwImageError(4);
    }
  }


  $.Editable.prototype.setImageUploadURL = function (url) {
    if (url) {
      this.options.imageUploadURL = url;
    }

    if (this.options.imageUploadToS3) {
      this.options.imageUploadURL = 'https://' + this.options.imageUploadToS3.bucket + '.' + this.options.imageUploadToS3.region + '.amazonaws.com/';
    }
  }

  $.Editable.prototype.closeImageMode = function () {
    this.$element.find('span.f-img-editor > img').each($.proxy(function (index, elem) {
      this.addImageClass($(elem), this.getImageClass($(elem).parent().attr('class')));

      if ($(elem).parents('.f-img-wrap').length > 0) {
        if ($(elem).parent().parent().get(0).tagName == 'A') {
          $(elem).siblings('span.f-img-handle').remove().end().unwrap().parent().unwrap();
        } else {
          $(elem).siblings('span.f-img-handle').remove().end().unwrap().unwrap();
        }
      } else {
        $(elem).siblings('span.f-img-handle').remove().end().unwrap();
      }
    }, this));

    if (this.$element.find('span.f-img-editor').length) {
      this.$element.find('span.f-img-editor').remove();
      this.$element.parents('span.f-img-editor').remove();
    }

    this.$element.removeClass('f-non-selectable');
    if (!this.editableDisabled && !this.isHTML) {
      this.$element.attr('contenteditable', true);
    }

    if (this.$image_editor) {
      this.$image_editor.hide();
    }

    if (this.$link_wrapper && this.options.linkText) {
      this.$link_wrapper.find('input[type="text"].f-lt').parent().removeClass('fr-hidden');
    }
  };

  $.Editable.prototype.refreshImageList = function (no_check) {
    if (!this.isLink && !this.options.editInPopup) {
      var newListSrc = [];
      var newList = [];
      var that = this;
      this.$element.find('img').each (function (index, img) {
        var $img = $(img);
        newListSrc.push($img.attr('src'));
        newList.push($img);

        // Add the right class.
        if ($img.parents('.f-img-editor').length === 0 && !$img.hasClass('fr-fil') && !$img.hasClass('fr-fir') && !$img.hasClass('fr-fin')) {
          // Set floating margin.
          var $parent;
          if ($img.css('float') == 'right') {
            $parent = $img.parent();
            if ($parent.hasClass('f-img-editor')) {
              $parent.addClass('fr-fir');
            } else {
              $img.addClass('fr-fir');
            }
          } else if ($img.css('float') == 'left') {
            $parent = $img.parent();
            if ($parent.hasClass('f-img-editor')) {
              $parent.addClass('fr-fil');
            } else {
              $img.addClass('fr-fil');
            }
          } else {
            $parent = $img.parent();
            if ($parent.hasClass('f-img-editor')) {
              $parent.addClass('fr-fin');
            } else {
              $img.addClass('fr-fin');
            }
          }
        }

        if (!that.options.textNearImage) {
          $img.addClass('fr-tni');
        } else {
          $img.removeClass('fr-tni');
        }

        $img.css('margin', '');
        $img.css('float', '');
      });

      if (no_check === undefined) {
        for (var i = 0; i < this.imageList.length; i++) {
          if (newListSrc.indexOf(this.imageList[i].attr('src')) < 0) {
            this.triggerEvent('afterRemoveImage', [this.imageList[i]], false);
          }
        }
      }

      this.imageList = newList;
    }
  };

  /**
   * Insert image.
   */
  $.Editable.prototype.insertImage = function () {
    if (!this.options.inlineMode) {
      this.closeImageMode();
      this.imageMode = false;
      this.positionPopup('insertImage');
    }

    if (this.selectionInEditor()) {
      this.saveSelection();
    }

    this.showInsertImage();

    this.imageMode = false;

    this.$image_wrapper.find('input[type="text"]').val('');
  };

})(jQuery);
