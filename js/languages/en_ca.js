/*!
 * froala_editor v4.7.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2025 Froala Labs
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('froala-editor')) :
  typeof define === 'function' && define.amd ? define(['froala-editor'], factory) :
  (factory(global.FroalaEditor));
}(this, (function (FE) { 'use strict';

  FE = FE && FE.hasOwnProperty('default') ? FE['default'] : FE;

  /**
   * English spoken in Canada
   */
  FE.LANGUAGE['en_ca'] = {
    translation: {
      // Place holder
      'Type something': 'Type something',
      // Basic formatting
      'Bold': 'Bold',
      'Italic': 'Italic',
      'Underline': 'Underline',
      'Strikethrough': 'Strikethrough',
      'Size': 'Size',
      // Main buttons
      'Insert': 'Insert',
      'Delete': 'Delete',
      'Cancel': 'Cancel',
      'OK': 'OK',
      'Back': 'Back',
      'Remove': 'Remove',
      'More': 'More',
      'Update': 'Update',
      'Style': 'Style',
      // Font
      'Font Family': 'Font Family',
      'Font Size': 'Font Size',
      // Colors
      'Colors': 'Colours',
      'Color': 'Color',
      'Background': 'Background',
      'Text': 'Text',
      'HEX Color': 'HEX Colour',
      // Paragraphs
      'Paragraph Format': 'Paragraph Format',
      'Normal': 'Normal',
      'Code': 'Code',
      'Heading 1': 'Heading 1',
      'Heading 2': 'Heading 2',
      'Heading 3': 'Heading 3',
      'Heading 4': 'Heading 4',
      // Style
      'Paragraph Style': 'Paragraph Style',
      'Inline Style': 'Inline Style',
      'Padding': 'Padding',
      // Alignment
      'Align': 'Align',
      'Align Left': 'Align Left',
      'Align Center': 'Align Centre',
      'Align Right': 'Align Right',
      'Align Justify': 'Align Justify',
      'None': 'None',
      'Alignment': 'Alignment',
      'Next': 'Next',
      'Previous': 'Previous',
      'Advanced Options': 'Advanced Options',
      'Close': 'Close',
      // Lists
      'Ordered List': 'Ordered List',
      'Unordered List': 'Unordered List',
      // Indent
      'Decrease Indent': 'Decrease Indent',
      'Increase Indent': 'Increase Indent',
      // Links
      'Insert Link': 'Insert Link',
      'Open in new tab': 'Open in new tab',
      'Open Link': 'Open Link',
      'Edit Link': 'Edit Link',
      'Unlink': 'Unlink',
      'Choose Link': 'Choose Link',
      // Images
      'Insert Image': 'Insert Image',
      'Upload Image': 'Upload Image',
      'By URL': 'By URL',
      'Browse': 'Browse',
      'Drop image': 'Drop image',
      'or click': 'or click',
      'Manage Images': 'Manage Images',
      'Loading': 'Loading',
      'Deleting': 'Deleting',
      'Tags': 'Tags',
      'Are you sure? Image will be deleted.': 'Are you sure? Image will be deleted.',
      'Replace': 'Replace',
      'Uploading': 'Uploading',
      'Loading image': 'Loading image',
      'Display': 'Display',
      'Inline': 'Inline',
      'Break Text': 'Break Text',
      'Alternative Text': 'Alternative Text',
      'Change Size': 'Change Size',
      'Width': 'Width',
      'Height': 'Height',
      'Something went wrong. Please try again.': 'Something went wrong. Please try again.',
      'Image Caption': 'Image Caption',
      'Advanced Edit': 'Advanced Edit',
      // Video
      'Insert Video': 'Insert Video',
      'Embedded Code': 'Embedded Code',
      'Paste in a video URL': 'Paste in a video URL',
      'Drop video': 'Drop video',
      'Your browser does not support HTML5 video.': 'Your browser does not support HTML5 video.',
      'Upload Video': 'Upload Video',
      // Tables
      'Insert Table': 'Insert Table',
      'Table Header': 'Table Header',
      'Remove Table': 'Remove Table',
      'Table Style': 'Table Style',
      'Horizontal Align': 'Horizontal Align',
      'Row': 'Row',
      'Insert row above': 'Insert row above',
      'Insert row below': 'Insert row below',
      'Delete row': 'Delete row',
      'Column': 'Column',
      'Insert column before': 'Insert column before',
      'Insert column after': 'Insert column after',
      'Delete column': 'Delete column',
      'Cell': 'Cell',
      'Merge cells': 'Merge cells',
      'Horizontal split': 'Horizontal split',
      'Vertical split': 'Vertical split',
      'Cell Background': 'Cell Background',
      'Vertical Align': 'Vertical Align',
      'Top': 'Top',
      'Middle': 'Middle',
      'Bottom': 'Bottom',
      'Align Top': 'Align Top',
      'Align Middle': 'Align Middle',
      'Align Bottom': 'Align Bottom',
      'Cell Style': 'Cell Style',
      'Table Properties': 'Table Properties',
      'Cell Properties': 'Cell Properties',
      'Table Footer': 'Table Footer',
      'Dimensions': 'Dimensions',
      'Custom background color input': 'Custom background colour input',
      'Background color picker': 'Background colour picker',
      'Custom border color input': 'Custom border colour input',
      'Border color picker': 'Border colour picker',
      'Border width': 'Border width',
      'Border style': 'Border style',
      'Border color': 'Border colour',
      'Table width': 'Table width',
      'Table height': 'Table height',
      'Left align': 'Left align',
      'Center align': 'Centre align',
      'Right align': 'Right align',
      // Files
      'Upload File': 'Upload File',
      'Drop file': 'Drop file',
      // Emoticons
      'Emoticons': 'Emoticons',
      // Line breaker
      'Break': 'Break',
      // Math
      'Subscript': 'Subscript',
      'Superscript': 'Superscript',
      // Full screen
      'Fullscreen': 'Fullscreen',
      // Horizontal line
      'Insert Horizontal Line': 'Insert Horizontal Line',
      // Clear formatting
      'Clear Formatting': 'Clear Formatting',
      // Save
      'Save': 'Save',
      // Undo, redo
      'Undo': 'Undo',
      'Redo': 'Redo',
      // Select all
      'Select All': 'Select All',
      // Code view
      'Code View': 'Code View',
      // Quote
      'Quote': 'Quote',
      'Increase': 'Increase',
      'Decrease': 'Decrease',
      // Quick Insert
      'Quick Insert': 'Quick Insert',
      // Spcial Characters
      'Special Characters': 'Special Characters',
      'Latin': 'Latin',
      'Greek': 'Greek',
      'Cyrillic': 'Cyrillic',
      'Punctuation': 'Punctuation',
      'Currency': 'Currency',
      'Arrows': 'Arrows',
      'Math': 'Math',
      'Misc': 'Misc',
      // Print.
      'Print': 'Print',
      // Spell Checker.
      'Spell Checker': 'Spell Checker',
      // Help
      'Help': 'Help',
      'Shortcuts': 'Shortcuts',
      'Inline Editor': 'Inline Editor',
      'Show the editor': 'Show the editor',
      'Common actions': 'Common actions',
      'Copy': 'Copy',
      'Cut': 'Cut',
      'Paste': 'Paste',
      'Basic Formatting': 'Basic Formatting',
      'Increase quote level': 'Increase quote level',
      'Decrease quote level': 'Decrease quote level',
      'Image / Video': 'Image / Video',
      'Resize larger': 'Resize larger',
      'Resize smaller': 'Resize smaller',
      'Table': 'Table',
      'Select table cell': 'Select table cell',
      'Extend selection one cell': 'Extend selection one cell',
      'Extend selection one row': 'Extend selection one row',
      'Navigation': 'Navigation',
      'Focus popup / toolbar': 'Focus popup / toolbar',
      'Return focus to previous position': 'Return focus to previous position',
      // Embed.ly
      'Embed URL': 'Embed URL',
      'Paste in a URL to embed': 'Paste in a URL to embed',
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': 'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?',
      'Keep': 'Keep',
      'Clean': 'Clean',
      'Word Paste Detected': 'Word Paste Detected',
      // Character Counter 
      'Characters': 'Characters',
      //Find and Replace
      'Find and Replace': 'Find and Replace',
      'Find': 'Find',
      'Replace with': 'Replace with',
      'Replace All': 'Replace All',
      'Match case': 'Match case',
      'Whole words only': 'Whole words only',
      // More Buttons
      'More Text': 'More Text',
      'More Paragraph': 'More Paragraph',
      'More Rich': 'More Rich',
      'More Misc': 'More Misc',
      'Border': 'Border',
      //selector icon
      'Select Table': 'Select Table',
      'Drag Table': 'Drag Table',
      'Select PageBreak': 'Select Page Break',
      'Drag PageBreak': 'Drag Page Break',
      'Page Break': 'Page Break',
      // link to anchor
      'Insert Anchor': 'Insert Anchor',
      'There are no entries matching': 'There are no entries matching',
      'Update Anchor': 'Update Anchor',
      'Edit Anchor': 'Edit Anchor',
      'Anchor Name': 'Anchor Name',
      'Anchor Link': 'Anchor Link',
      'Scroll to target': 'Scroll to target',
      'Enter the anchor name without space': 'Enter the anchor name without a space',
      'Anchor name already exists.': 'The anchor name already exists.',
      // Export to Word
      'Export to Word': 'Export to Word'
    },
    direction: 'ltr'
  };

})));
//# sourceMappingURL=en_ca.js.map
