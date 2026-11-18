/*!
 * froala_editor v5.6.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2026 Froala Labs
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('froala-editor')) :
  typeof define === 'function' && define.amd ? define(['froala-editor'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FroalaEditor));
})(this, (function (FE) { 'use strict';

  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function _toPrimitive(t, e) {
    if ("object" != typeof t || !t) return t;
    var r;
    if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
      var i = r.call(t, e);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  var _translation;
  FE.LANGUAGE['he'] = {
    translation: (_translation = {
      // Place holder
      'Type something': "\u05D4\u05E7\u05DC\u05D3 \u05DB\u05D0\u05DF",
      // Basic formatting
      'Bold': "\u05DE\u05D5\u05D3\u05D2\u05E9",
      'Italic': "\u05DE\u05D5\u05D8\u05D4",
      'Underline': "\u05E7\u05D5 \u05EA\u05D7\u05EA\u05D9",
      'Strikethrough': "\u05E7\u05D5 \u05D0\u05DE\u05E6\u05E2\u05D9",
      'Size': 'גודל',
      // Main buttons
      'Insert': "\u05D4\u05D5\u05E1\u05E4\u05EA",
      'Delete': "\u05DE\u05D7\u05D9\u05E7\u05D4",
      'Cancel': "\u05D1\u05D9\u05D8\u05D5\u05DC",
      'OK': "\u05D1\u05E6\u05E2",
      'Back': "\u05D1\u05D7\u05D6\u05E8\u05D4",
      'Remove': "\u05D4\u05E1\u05E8",
      'More': "\u05D9\u05D5\u05EA\u05E8",
      'Update': "\u05E2\u05D3\u05DB\u05D5\u05DF",
      'Style': "\u05E1\u05D2\u05E0\u05D5\u05DF",
      // Font
      'Font Family': "\u05D2\u05D5\u05E4\u05DF",
      'Font Size': "\u05D2\u05D5\u05D3\u05DC \u05D4\u05D2\u05D5\u05E4\u05DF",
      'Enter font size': 'הזן גודל גופן',
      'Custom Font Size': 'גודל גופן מותאם אישית',
      'Custom': 'מותאם אישית',
      'Please enter a valid number': 'נא להזין מספר תקין',
      'Value must be between': 'הערך חייב להיות בין',
      'and': 'ו-',
      'Apply': 'החל',
      // Colors
      'Colors': "\u05E6\u05D1\u05E2\u05D9\u05DD",
      'Color': 'צבע',
      'Background': "\u05E8\u05E7\u05E2",
      'Text': "\u05D4\u05D8\u05E1\u05D8",
      'HEX Color': 'צבע הקס',
      // Paragraphs
      'Paragraph Format': "\u05E4\u05D5\u05E8\u05DE\u05D8",
      'Normal': "\u05E8\u05D2\u05D9\u05DC",
      'Code': "\u05E7\u05D5\u05D3",
      'Heading 1': "1 \u05DB\u05D5\u05EA\u05E8\u05EA",
      'Heading 2': "2 \u05DB\u05D5\u05EA\u05E8\u05EA",
      'Heading 3': "3 \u05DB\u05D5\u05EA\u05E8\u05EA",
      'Heading 4': "4 \u05DB\u05D5\u05EA\u05E8\u05EA",
      // Style
      'Paragraph Style': "\u05E1\u05D2\u05E0\u05D5\u05DF \u05E4\u05E1\u05E7\u05D4",
      'Inline Style': "\u05E1\u05D2\u05E0\u05D5\u05DF \u05DE\u05D5\u05D1\u05E0\u05D4",
      'Padding': 'ריווח פנימי',
      // Alignment
      'Align': "\u05D9\u05D9\u05E9\u05D5\u05E8",
      'Align Left': "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05DC\u05E9\u05DE\u05D0\u05DC",
      'Align Center': "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05DC\u05DE\u05E8\u05DB\u05D6",
      'Align Right': "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D9\u05DE\u05D9\u05DF",
      'Align Justify': "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05DE\u05DC\u05D0",
      'None': "\u05D0\u05E3 \u05D0\u05D7\u05D3",
      'Alignment': 'יישור',
      'Next': 'הבא',
      'Previous': 'קודם',
      'Advanced Options': 'אפשרויות מתקדמות',
      'Close': 'סגור',
      // Lists
      'Ordered List': "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E8\u05E9\u05D9\u05DE\u05D4 \u05DE\u05DE\u05D5\u05E1\u05E4\u05E8\u05EA",
      'Unordered List': "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E8\u05E9\u05D9\u05DE\u05D4",
      // Indent
      'Decrease Indent': "\u05D4\u05E7\u05D8\u05E0\u05EA \u05DB\u05E0\u05D9\u05E1\u05D4",
      'Increase Indent': "\u05D4\u05D2\u05D3\u05DC\u05EA \u05DB\u05E0\u05D9\u05E1\u05D4",
      // Links
      'Insert Link': "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D9\u05E9\u05D5\u05E8",
      'Open in new tab': "\u05DC\u05E4\u05EA\u05D5\u05D7 \u05D1\u05D8\u05D0\u05D1 \u05D7\u05D3\u05E9",
      'Open Link': "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05E4\u05EA\u05D5\u05D7",
      'Edit Link': "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05E2\u05E8\u05D9\u05DB\u05D4",
      'Unlink': "\u05D4\u05E1\u05E8\u05EA \u05D4\u05E7\u05D9\u05E9\u05D5\u05E8",
      'Choose Link': "\u05DC\u05D1\u05D7\u05D5\u05E8 \u05E7\u05D9\u05E9\u05D5\u05E8",
      // Images
      'Insert Image': "\u05D4\u05D5\u05E1\u05E4\u05EA \u05EA\u05DE\u05D5\u05E0\u05D4",
      'Upload Image': "\u05EA\u05DE\u05D5\u05E0\u05EA \u05D4\u05E2\u05DC\u05D0\u05D4",
      'By URL': "URL \u05E2\u05DC \u05D9\u05D3\u05D9",
      'Browse': "\u05DC\u05D2\u05DC\u05D5\u05E9",
      'Drop image': "\u05E9\u05D7\u05E8\u05E8 \u05D0\u05EA \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05DB\u05D0\u05DF",
      'or click': "\u05D0\u05D5 \u05DC\u05D7\u05E5",
      'Manage Images': "\u05E0\u05D9\u05D4\u05D5\u05DC \u05D4\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
      'Loading': "\u05D8\u05E2\u05D9\u05E0\u05D4",
      'Deleting': "\u05DE\u05D7\u05D9\u05E7\u05D4",
      'Tags': "\u05EA\u05D2\u05D9\u05DD",
      'Are you sure? Image will be deleted.': "\u05D4\u05D0\u05DD \u05D0\u05EA\u05D4 \u05D1\u05D8\u05D5\u05D7? \u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05EA\u05DE\u05D7\u05E7.",
      'Replace': "\u05DC\u05D4\u05D7\u05DC\u05D9\u05E3",
      'Uploading': "\u05D4\u05E2\u05DC\u05D0\u05D4",
      'Loading image': "\u05EA\u05DE\u05D5\u05E0\u05EA \u05D8\u05E2\u05D9\u05E0\u05D4",
      'Display': "\u05EA\u05E6\u05D5\u05D2\u05D4",
      'Inline': "\u05D1\u05E9\u05D5\u05E8\u05D4",
      'Break Text': "\u05D8\u05E7\u05E1\u05D8 \u05D4\u05E4\u05E1\u05E7\u05D4",
      'Alternative Text': "\u05D8\u05E7\u05E1\u05D8 \u05D7\u05DC\u05D5\u05E4\u05D9",
      'Change Size': "\u05D2\u05D5\u05D3\u05DC \u05E9\u05D9\u05E0\u05D5\u05D9",
      'Width': "\u05E8\u05D5\u05D7\u05D1",
      'Height': "\u05D2\u05D5\u05D1\u05D4",
      'Something went wrong. Please try again.': "\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9. \u05D1\u05D1\u05E7\u05E9\u05D4 \u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1.",
      'Image Caption': 'כיתוב תמונה',
      'Advanced Edit': 'עריכה מתקדמת',
      'Advanced Edit (File-Robot)': 'עריכה מתקדמת',
      // Video
      'Insert Video': "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D5\u05D9\u05D3\u05D9\u05D0\u05D5",
      'Embedded Code': "\u05E7\u05D5\u05D3 \u05DE\u05D5\u05D8\u05D1\u05E2",
      'Paste in a video URL': 'הדבק בכתובת אתר של סרטון',
      'Drop video': 'ירידה וידאו',
      'Your browser does not support HTML5 video.': 'הדפדפן שלך אינו תומך וידאו html5.',
      'Upload Video': 'להעלות וידאו',
      // Tables
      'Insert Table': "\u05D4\u05DB\u05E0\u05E1 \u05D8\u05D1\u05DC\u05D4",
      'Table Header': "\u05DB\u05D5\u05EA\u05E8\u05EA \u05D8\u05D1\u05DC\u05D4",
      'Remove Table': "\u05D4\u05E1\u05E8 \u05E9\u05D5\u05DC\u05D7\u05DF",
      'Table Style': "\u05E1\u05D2\u05E0\u05D5\u05DF \u05D8\u05D1\u05DC\u05D4",
      'Horizontal Align': "\u05D0\u05D5\u05E4\u05E7\u05D9\u05EA \u05DC\u05D9\u05D9\u05E9\u05E8",
      'Row': "\u05E9\u05D5\u05E8\u05D4",
      'Insert row above': "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E9\u05D5\u05E8\u05D4 \u05DC\u05E4\u05E0\u05D9",
      'Insert row below': "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8\u05D9",
      'Delete row': "\u05DE\u05D7\u05D9\u05E7\u05EA \u05E9\u05D5\u05E8\u05D4",
      'Column': "\u05D8\u05D5\u05E8",
      'Insert column before': "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D8\u05D5\u05E8 \u05DC\u05E4\u05E0\u05D9",
      'Insert column after': "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D8\u05D5\u05E8 \u05D0\u05D7\u05E8\u05D9",
      'Delete column': "\u05DE\u05D7\u05D9\u05E7\u05EA \u05D8\u05D5\u05E8",
      'Cell': "\u05EA\u05D0",
      'Merge cells': "\u05DE\u05D6\u05D2 \u05EA\u05D0\u05D9\u05DD",
      'Horizontal split': "\u05E4\u05E6\u05DC \u05D0\u05D5\u05E4\u05E7\u05D9",
      'Vertical split': "\u05E4\u05E6\u05DC \u05D0\u05E0\u05DB\u05D9",
      'Cell Background': "\u05E8\u05E7\u05E2 \u05EA\u05D0",
      'Vertical Align': "\u05D9\u05D9\u05E9\u05D5\u05E8 \u05D0\u05E0\u05DB\u05D9",
      'Top': "\u05E2\u05B6\u05DC\u05B4\u05D9\u05D5\u05B9\u05DF",
      'Middle': "\u05EA\u05B4\u05D9\u05DB\u05D5\u05B9\u05E0\u05B4\u05D9",
      'Bottom': "\u05EA\u05D7\u05EA\u05D5\u05DF",
      'Align Top': "\u05DC\u05D9\u05D9\u05E9\u05E8 \u05E2\u05B6\u05DC\u05B4\u05D9\u05D5\u05B9\u05DF",
      'Align Middle': "\u05DC\u05D9\u05D9\u05E9\u05E8 \u05EA\u05B4\u05D9\u05DB\u05D5\u05B9\u05E0\u05B4\u05D9",
      'Align Bottom': "\u05DC\u05D9\u05D9\u05E9\u05E8 \u05EA\u05D7\u05EA\u05D5\u05DF",
      'Cell Style': "\u05E1\u05D2\u05E0\u05D5\u05DF \u05EA\u05D0",
      'Table Properties': 'מאפייני טבלה',
      'Cell Properties': 'מאפייני תא',
      'Table Footer': 'כותרת תחתונה של הטבלה',
      'Dimensions': 'ממדים',
      'Custom background color input': 'קלט צבע רקע מותאם אישית',
      'Background color picker': 'בוחר צבע רקע',
      'Custom border color input': 'קלט צבע גבול מותאם אישית',
      'Border color picker': 'בוחר צבע גבול',
      'Border width': 'רוחב גבול',
      'Border style': 'סגנון גבול',
      'Border color': 'צבע גבול',
      'Table width': 'רוחב טבלה',
      'Table height': 'גובה טבלה',
      'Left align': 'יישור לשמאל',
      'Center align': 'יישור למרכז',
      'Right align': 'יישור לימין',
      'Left align without wrap': 'יישור לשמאל ללא גלישה',
      'Right align without wrap': 'יישור לימין ללא גלישה',
      'solid': 'קו רציף',
      'dashed': 'קו מקווקו',
      'dotted': 'קו מנוקד',
      'double': 'קו כפול',
      'groove': 'קו משוקע',
      'ridge': 'קו בולט',
      'inset': 'קו פנימי',
      'outset': 'קו חיצוני',
      // Files
      'Upload File': "\u05D4\u05E2\u05DC\u05D0\u05EA \u05E7\u05D5\u05D1\u05E5",
      'Drop file': "\u05D6\u05E8\u05D5\u05E7 \u05E7\u05D5\u05D1\u05E5 \u05DB\u05D0\u05DF",
      // Emoticons
      'Emoticons': "\u05E1\u05DE\u05D9\u05D9\u05DC\u05D9\u05DD",
      'Grinning face': "\u05D7\u05D9\u05D9\u05DA \u05E4\u05E0\u05D9\u05DD",
      'Grinning face with smiling eyes': "\u05D7\u05D9\u05D9\u05DA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05DE\u05D7\u05D9\u05D9\u05DB\u05D5\u05EA",
      'Face with tears of joy': "\u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05D3\u05DE\u05E2\u05D5\u05EA \u05E9\u05DC \u05E9\u05DE\u05D7\u05D4",
      'Smiling face with open mouth': "\u05D7\u05D9\u05D5\u05DA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E4\u05D4 \u05E4\u05EA\u05D5\u05D7",
      'Smiling face with open mouth and smiling eyes': "\u05D7\u05D9\u05D5\u05DA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E4\u05D4 \u05E4\u05EA\u05D5\u05D7 \u05D5\u05DE\u05D7\u05D9\u05D9\u05DA \u05E2\u05D9\u05E0\u05D9\u05D9\u05DD",
      'Smiling face with open mouth and cold sweat': "\u05D7\u05D9\u05D5\u05DA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E4\u05D4 \u05E4\u05EA\u05D5\u05D7 \u05D5\u05D6\u05D9\u05E2\u05D4 \u05E7\u05E8\u05D4",
      'Smiling face with open mouth and tightly-closed eyes': "\u05D7\u05D9\u05D5\u05DA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E4\u05D4 \u05E4\u05EA\u05D5\u05D7 \u05D5\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D1\u05D7\u05D5\u05D6\u05E7\u05D4-\u05E1\u05D2\u05D5\u05E8\u05D5\u05EA",
      'Smiling face with halo': "\u05D7\u05D9\u05D5\u05DA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05D4\u05D9\u05DC\u05D4",
      'Smiling face with horns': "\u05D7\u05D9\u05D5\u05DA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E7\u05E8\u05E0\u05D5\u05EA",
      'Winking face': "\u05E7\u05E8\u05D9\u05E6\u05D4 \u05E4\u05E0\u05D9\u05DD",
      'Smiling face with smiling eyes': "\u05D7\u05D9\u05D5\u05DA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05DE\u05D7\u05D9\u05D9\u05DB\u05D5\u05EA",
      'Face savoring delicious food': "\u05E4\u05E0\u05D9\u05DD \u05DE\u05EA\u05E2\u05E0\u05D2 \u05D0\u05D5\u05DB\u05DC \u05D8\u05E2\u05D9\u05DD",
      'Relieved face': "\u05E4\u05E0\u05D9\u05DD \u05E9\u05DC \u05D4\u05E7\u05DC\u05D4",
      'Smiling face with heart-shaped eyes': "\u05D7\u05D9\u05D5\u05DA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D1\u05E6\u05D5\u05E8\u05EA \u05DC\u05D1",
      'Smiling face with sunglasses': "\u05D7\u05D9\u05D5\u05DA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05DE\u05E9\u05E7\u05E4\u05D9 \u05E9\u05DE\u05E9",
      'Smirking face': "\u05D4\u05D9\u05D0 \u05D7\u05D9\u05D9\u05DB\u05D4 \u05D7\u05D9\u05D5\u05DA \u05E0\u05D1\u05D6\u05D4 \u05E4\u05E0\u05D9\u05DD",
      'Neutral face': "\u05E4\u05E0\u05D9\u05DD \u05E0\u05D9\u05D8\u05E8\u05DC\u05D9",
      'Expressionless face': "\u05D1\u05E4\u05E0\u05D9\u05DD \u05D7\u05EA\u05D5\u05DD",
      'Unamused face': "\u05E4\u05E0\u05D9\u05DD \u05DC\u05D0 \u05DE\u05E9\u05D5\u05E2\u05E9\u05E2\u05D9\u05DD",
      'Face with cold sweat': "\u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05D6\u05D9\u05E2\u05D4 \u05E7\u05E8\u05D4",
      'Pensive face': "\u05D1\u05E4\u05E0\u05D9\u05DD \u05DE\u05D4\u05D5\u05E8\u05D4\u05E8",
      'Confused face': "\u05E4\u05E0\u05D9\u05DD \u05DE\u05D1\u05D5\u05DC\u05D1\u05DC\u05D9\u05DD",
      'Confounded face': "\u05E4\u05E0\u05D9\u05DD \u05DE\u05D1\u05D5\u05DC\u05D1\u05DC",
      'Kissing face': "\u05E0\u05E9\u05D9\u05E7\u05D5\u05EA \u05E4\u05E0\u05D9\u05DD",
      'Face throwing a kiss': "\u05E4\u05E0\u05D9\u05DD \u05DC\u05D6\u05E8\u05D5\u05E7 \u05E0\u05E9\u05D9\u05E7\u05D4",
      'Kissing face with smiling eyes': "\u05E0\u05E9\u05D9\u05E7\u05D5\u05EA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05DE\u05D7\u05D9\u05D9\u05DB\u05D5\u05EA",
      'Kissing face with closed eyes': "\u05E0\u05E9\u05D9\u05E7\u05D5\u05EA \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05E1\u05D2\u05D5\u05E8\u05D5\u05EA",
      'Face with stuck out tongue': "\u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05DC\u05E9\u05D5\u05DF \u05D1\u05DC\u05D8\u05D5",
      'Face with stuck out tongue and winking eye': "\u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05DC\u05E9\u05D5\u05DF \u05EA\u05E7\u05D5\u05E2\u05D4 \u05D4\u05D7\u05D5\u05E6\u05D4 \u05D5\u05E2\u05D9\u05DF \u05E7\u05D5\u05E8\u05E6\u05EA",
      'Face with stuck out tongue and tightly-closed eyes': "\u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05DC\u05E9\u05D5\u05DF \u05EA\u05E7\u05D5\u05E2\u05D4 \u05D4\u05D7\u05D5\u05E6\u05D4 \u05D5\u05E2\u05D9\u05E0\u05D9\u05D9\u05DD \u05D1\u05D7\u05D5\u05D6\u05E7\u05D4-\u05E1\u05D2\u05D5\u05E8\u05D5\u05EA",
      'Disappointed face': "\u05E4\u05E0\u05D9\u05DD \u05DE\u05D0\u05D5\u05DB\u05D6\u05D1\u05D9\u05DD",
      'Worried face': "\u05E4\u05E0\u05D9\u05DD \u05DE\u05D5\u05D3\u05D0\u05D2\u05D9\u05DD",
      'Angry face': "\u05E4\u05E0\u05D9\u05DD \u05DB\u05D5\u05E2\u05E1\u05D9\u05DD",
      'Pouting face': "\u05DE\u05E9\u05D5\u05E8\u05D1\u05D1 \u05E4\u05E0\u05D9\u05DD",
      'Crying face': "\u05D1\u05DB\u05D9 \u05E4\u05E0\u05D9\u05DD",
      'Persevering face': "\u05D4\u05EA\u05DE\u05D3\u05EA \u05E4\u05E0\u05D9\u05DD",
      'Face with look of triumph': "\u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05DE\u05D1\u05D8 \u05E9\u05DC \u05E0\u05E6\u05D7\u05D5\u05DF",
      'Disappointed but relieved face': "\u05DE\u05D0\u05D5\u05DB\u05D6\u05D1 \u05D0\u05D1\u05DC \u05D4\u05D5\u05E7\u05DC \u05E4\u05E0\u05D9\u05DD",
      'Frowning face with open mouth': "\u05E7\u05DE\u05D8 \u05D0\u05EA \u05DE\u05E6\u05D7 \u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E4\u05D4 \u05E4\u05EA\u05D5\u05D7",
      'Anguished face': "\u05E4\u05E0\u05D9\u05DD \u05DE\u05D9\u05D5\u05E1\u05E8\u05D9\u05DD",
      'Fearful face': "\u05E4\u05E0\u05D9\u05DD \u05E9\u05D7\u05E9\u05E9\u05D5",
      'Weary face': "\u05E4\u05E0\u05D9\u05DD \u05D5\u05D9\u05E8\u05D9",
      'Sleepy face': "\u05E4\u05E0\u05D9\u05DD \u05E9\u05DC \u05E1\u05DC\u05D9\u05E4\u05D9",
      'Tired face': "\u05E4\u05E0\u05D9\u05DD \u05E2\u05D9\u05D9\u05E4\u05D9\u05DD",
      'Grimacing face': "\u05D4\u05D5\u05D0 \u05D4\u05E2\u05D5\u05D5\u05D4 \u05D0\u05EA \u05E4\u05E0\u05D9 \u05E4\u05E0\u05D9\u05DD",
      'Loudly crying face': "\u05D1\u05E7\u05D5\u05DC \u05E8\u05DD \u05D1\u05D5\u05DB\u05D4 \u05E4\u05E0\u05D9\u05DD",
      'Face with open mouth': "\u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E4\u05D4 \u05E4\u05EA\u05D5\u05D7",
      'Hushed face': "\u05E4\u05E0\u05D9\u05DD \u05E9\u05D5\u05E7\u05D8\u05D9\u05DD",
      'Face with open mouth and cold sweat': "\u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05E4\u05D4 \u05E4\u05EA\u05D5\u05D7 \u05D5\u05D6\u05D9\u05E2\u05D4 \u05E7\u05E8\u05D4\"",
      'Face screaming in fear': "\u05E4\u05E0\u05D9\u05DD \u05E6\u05D5\u05E8\u05D7\u05D9\u05DD \u05D1\u05E4\u05D7\u05D3",
      'Astonished face': "\u05E4\u05E0\u05D9\u05D5 \u05E0\u05D3\u05D4\u05DE\u05D5\u05EA",
      'Flushed face': "\u05E4\u05E0\u05D9\u05D5 \u05E1\u05DE\u05D5\u05E7\u05D5\u05EA",
      'Sleeping face': "\u05E9\u05D9\u05E0\u05D4 \u05E4\u05E0\u05D9\u05DD",
      'Dizzy face': "\u05E4\u05E0\u05D9\u05DD \u05E9\u05DC \u05D3\u05D9\u05D6\u05D9",
      'Face without mouth': "\u05E4\u05E0\u05D9\u05DD \u05DC\u05DC\u05D0 \u05E4\u05D4",
      'Face with medical mask': "\u05E4\u05E0\u05D9\u05DD \u05E2\u05DD \u05DE\u05E1\u05DB\u05D4 \u05E8\u05E4\u05D5\u05D0\u05D9\u05EA",
      // Line breaker
      'Break': "\u05D4\u05E4\u05E1\u05E7\u05D4",
      // Math
      'Subscript': "\u05DB\u05EA\u05D1 \u05EA\u05D7\u05EA\u05D9",
      'Superscript': "\u05E2\u05D9\u05DC\u05D9",
      // Full screen
      'Fullscreen': "\u05DE\u05E1\u05DA \u05DE\u05DC\u05D0",
      // Horizontal line
      'Insert Horizontal Line': "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E7\u05D5 \u05D0\u05D5\u05E4\u05E7\u05D9",
      // Clear formatting
      'Clear Formatting': "\u05DC\u05D4\u05E1\u05D9\u05E8 \u05E2\u05D9\u05E6\u05D5\u05D1",
      // Save
      'Save': "\u05DC\u05D4\u05E6\u05D9\u05DC",
      // Undo, redo
      'Undo': "\u05D1\u05D9\u05D8\u05D5\u05DC",
      'Redo': "\u05D1\u05E6\u05E2 \u05E9\u05D5\u05D1",
      // Select all
      'Select All': "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC",
      // Code view
      'Code View': "\u05EA\u05E6\u05D5\u05D2\u05EA \u05E7\u05D5\u05D3",
      // Quote
      'Quote': "\u05E6\u05D9\u05D8\u05D5\u05D8",
      'Increase': "\u05DC\u05D4\u05D2\u05D1\u05D9\u05E8",
      'Decrease': "\u05D9\u05E8\u05D9\u05D3\u05D4",
      // Quick Insert
      'Quick Insert': "\u05DB\u05E0\u05E1 \u05DE\u05D4\u05D9\u05E8",
      // Spcial Characters
      'Special Characters': 'תווים מיוחדים',
      'Latin': 'לָטִינִית',
      'Greek': 'יווני',
      'Cyrillic': 'קירילית',
      'Punctuation': 'פיסוק',
      'Currency': 'מַטְבֵּעַ',
      'Arrows': 'חצים',
      'Math': 'מתמטיקה',
      'Misc': 'שונות',
      // Print.
      'Print': 'הדפס',
      // Spell Checker.
      'Spell Checker': 'בודק איות',
      // Help
      'Help': 'עֶזרָה',
      'Shortcuts': 'קיצורי דרך',
      'Inline Editor': 'עורך מוטבע',
      'Show the editor': 'להראות את העורך',
      'Common actions': 'פעולות נפוצות',
      'Copy': 'עותק',
      'Cut': 'גזירה',
      'Paste': 'לְהַדבִּיק',
      'Basic Formatting': 'עיצוב בסיסי',
      'Increase quote level': 'רמת ציטוט',
      'Decrease quote level': 'רמת ציטוט ירידה',
      'Image / Video': 'תמונה / וידאו',
      'Resize larger': 'גודל גדול יותר',
      'Resize smaller': 'גודל קטן יותר',
      'Table': 'שולחן',
      'Select table cell': 'בחר תא תא - -',
      'Extend selection one cell': 'להאריך את הבחירה תא אחד',
      'Extend selection one row': 'להאריך את הבחירה שורה אחת',
      'Navigation': 'ניווט',
      'Focus popup / toolbar': 'מוקד קופץ / סרגל הכלים',
      'Return focus to previous position': 'חזרה להתמקד קודם',
      // Embed.ly
      'Embed URL': 'כתובת אתר להטביע',
      'Paste in a URL to embed': 'הדבק כתובת אתר להטביע',
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': 'התוכן המודבק מגיע ממסמך Word של Microsoft. האם ברצונך לשמור את הפורמט או לנקות אותו?',
      'Keep': 'לִשְׁמוֹר',
      'Clean': 'לְנַקוֹת',
      'Word Paste Detected': 'הדבק מילה זוהתה',
      // Character Counter 
      'Characters': 'תווים',
      // Find and Replace
      'Find and Replace': 'חפש והחלף',
      'Find': 'חפש',
      'Replace with': 'החלף ב-',
      'Replace All': 'החלף הכל'
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, "Advanced Options", 'אפשרויות מתקדמות'), 'Match case', 'התאם בין אותיות גדולות וקטנות'), 'Whole words only', 'רק מילים שלמות'), 'More Text', 'עוד טקסט'), 'More Paragraph', 'עוד סעיף'), 'More Rich', 'עוד  עשיר'), 'More Misc', 'שונות עוד'), 'Border', 'גבול'), "Dimensions", 'ממדים'), 'Select Table', 'בחר טבלה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Drag Table', 'גרור טבלה'), 'Select PageBreak', 'בחר הפסקת עמוד'), 'Drag PageBreak', 'גרור הפסקת עמוד'), 'Page Break', 'הפסקת עמוד'), 'Insert Anchor', 'הוספת עוגן'), 'There are no entries matching', 'אין רשומות תואמות'), 'Update Anchor', 'עדכון עוגן'), 'Edit Anchor', 'עריכת עוגן'), 'Anchor Name', 'שם העוגן'), 'Anchor Link', 'קישור העוגן'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Scroll to target', 'גלול אל היעד'), 'Enter the anchor name without space', 'הקלד את שם העוגן ללא רווח'), 'Anchor name already exists.', 'שם העוגן כבר קיים.'), 'Export to Word', 'ייצוא למילה'), 'Ensure that all required dependent libraries are available for the plugin to work.', 'ודא שכל ספריות התלויות הנדרשות זמינות כדי שהתוסף יעבוד.'), 'Ensure that all required configurations and dependent libraries are available for the plugin to work as expected.', 'וודא שכל התצורות הנדרשות והספריות התלויות זמינות כדי שהתוסף יעבוד כצפוי.'), 'Import from Word', 'ייבוא מ-Word'), 'Please upload a valid file', 'אנא העלה קובץ תקין.'), 'File size must be less than', 'גודל הקובץ חייב להיות קטן מ-'), 'Code Snippet', 'קטע קוד'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Insert Code Snippet', 'הוסף קטע קוד'), 'Edit Code Snippet', 'ערוך קטע קוד'), 'Font Awesome', 'Font Awesome'), 'Web Application Icons', 'אייקוני יישומי ווב'), 'Accessibility Icons', 'אייקוני נגישות'), 'Hand Icons', 'אייקוני ידיים'), 'Transportation Icons', 'אייקוני תחבורה'), 'Gender Icons', 'אייקוני מגדר'), 'Form Control Icons', 'אייקוני פקדי טופס'), 'Payment Icons', 'אייקוני תשלום'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Chart Icons', 'אייקוני תרשימים'), 'Currency Icons', 'אייקוני מטבע'), 'Text Editor Icons', 'אייקוני עורך טקסט'), 'Brand Icons', 'אייקוני מותגים'), 'Default', 'ברירת מחדל'), 'Lower Alpha', 'אותיות לטיניות קטנות'), 'Lower Greek', 'אותיות יווניות קטנות'), 'Lower Roman', 'ספרות רומיות קטנות'), 'Upper Alpha', 'אותיות לטיניות גדולות'), 'Upper Roman', 'ספרות רומיות גדולות'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Circle', 'עיגול'), 'Disc', 'עיגול מלא'), 'Square', 'ריבוע'), 'Line Height', 'גובה שורה'), 'Single', 'בודד'), 'Double', 'כפול'), 'Insert File', 'הוספת קובץ'), 'Text Color', 'צבע טקסט'), 'Background Color', 'צבע רקע'), 'Gray', 'אפור'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Spaced', 'מרווח'), 'Uppercase', 'אותיות גדולות'), 'Rounded', 'מעוגל'), 'Bordered', 'עם מסגרת'), 'Shadow', 'צל'), 'Custom background colour input', 'הזנת צבע רקע מותאם'), 'Background colour picker', 'בורר צבע רקע'), 'Custom border colour input', 'הזנת צבע מסגרת מותאם'), 'Border colour picker', 'בורר צבע מסגרת'), 'Border colour', 'צבע מסגרת'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Inline Class', 'מחלקה פנימית'), 'Download PDF', 'הורדת PDF'), 'Dashed Borders', 'מסגרות מקווקוות'), 'Alternate Rows', 'שורות מתחלפות'), 'Highlighted', 'מודגש'), 'Thick', 'עבה'), 'Words', 'מילים'), 'Insert Files', 'הוסף קבצים'), 'Image file type is invalid.', 'סוג קובץ התמונה אינו תקין.'), 'File is too large.', 'הקובץ גדול מדי.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Alternate Text', 'טקסט חלופי'), 'Your browser does not support HTML5 vídeo.', 'הדפדפן שלך אינו תומך ב-HTML5 וידאו.'), 'Transparent', 'שקוף'), 'Big Red', 'אדום גדול'), 'Small Blue', 'כחול קטן'), 'AI Shortcuts', 'קיצורי דרך של AI'), 'Ask AI to generate or refine text, adjusting its tone and language.', 'בקש מה-AI ליצור או לשפר טקסט, תוך התאמת הטון והשפה שלו.'), 'Ask AI to generate', 'בקש מה-AI ליצור'), 'AI responses can be inaccurate.', 'תגובות AI עשויות להיות לא מדויקות.'), 'Select a text layer to edit', 'בחר שכבת טקסט לעריכה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Change Tone', 'שנה טון'), 'Translate To', 'תרגם ל'), 'Generating Response', 'יוצר תגובה'), 'Submit', 'שלח'), 'Stop', 'עצור'), 'Try again', 'נסה שוב'), 'Improve Writing', 'שפר כתיבה'), 'Improve writing', 'שיפור הכתיבה'), 'Accept All AI Changes', 'אשר את כל שינויי הבינה המלאכותית'), 'Reject All AI Changes', 'דחה את כל שינויי הבינה המלאכותית'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Improve Writing doesn\'t support selections that span multiple table cells. Please select text within a single cell.', 'שפר כתיבה אינו תומך בבחירות המשתרעות על פני מספר תאי טבלה. אנא בחר טקסט בתוך תא בודד.'), 'No improvements were suggested.', 'לא הוצעו שיפורים.'), 'The selection changed while waiting for a response. Please try again.', 'הבחירה השתנתה בזמן ההמתנה לתגובה. אנא נסה שוב.'), 'Could not match the AI response to the original content. Please try again.', 'לא ניתן היה להתאים את תגובת הבינה המלאכותית לתוכן המקורי. אנא נסה שוב.'), 'AI request failed', 'בקשת הבינה המלאכותית נכשלה'), 'Hide tracked changes', 'הסתר שינויים במעקב'), 'Show tracked changes', 'הצג שינויים במעקב'), 'Tracked changes', 'שינויים במעקב'), 'Proposed text', 'טקסט מוצע'), 'Suggest', 'הצע'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Reject All', 'דחה הכל'), 'Accept All', 'אשר הכל'), 'Dictate', 'הכתיבי/הכתב'), 'Cancel recording', 'ביטול ההקלטה'), 'Stop dictation', 'הפסקת הכתבה'), 'Listening', 'מקשיב...'), 'Speech recognition is not supported in this browser.', 'זיהוי דיבור אינו נתמך בדפדפן זה.'), 'Microphone permission denied.', 'הרשאת מיקרופון נדחתה.'), 'No microphone was found.', 'לא נמצא מיקרופון.'), 'Speech recognition failed.', 'זיהוי הדיבור נכשל.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'No speech detected.', 'לא זוהה דיבור.'), 'Could not transcribe the audio. Please try again.', 'לא ניתן היה לתמלל את השמע. נא לנסות שוב.'), 'Transcription failed', 'התמלול נכשל'), 'To use AI features in Froala, you need to accept the AI Supplemental Terms.', 'לשימוש בתכונות בינה מלאכותית ב-Froala, עליך לאשר את התנאים המשלימים לבינה מלאכותית.'), 'Please set', 'אנא הגדר'), 'to', 'ל'), 'in your configuration to provide consent.', 'בתצורה שלך כדי לספק הסכמה.'), 'You can review the terms here:', 'ניתן לעיין בתנאים כאן:'), 'View AI Supplemental Terms', 'הצג תנאים משלימים לבינה מלאכותית'), 'AI Chat', 'צ\'אט AI'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'View more', 'הצג עוד'), 'Show less', 'הצג פחות'), 'Too many files attached', 'צורפו יותר מדי קבצים'), 'Comments', 'תגובות'), 'Couldn\'t apply this response to the document. Please try again.', 'לא ניתן להחיל תגובה זו על המסמך. נסה שוב.'), 'Add context', 'הוספת הקשר'), 'Web search', 'חיפוש באינטרנט'), 'Reasoning', 'נימוק'), 'not supported by this model', 'אינו נתמך על ידי דגם זה'), 'turned off — not supported by this model', 'כובה — אינו נתמך על ידי דגם זה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Model', 'מודל'), 'Send', 'שלח'), 'AI can make mistakes. Always review output for accuracy.', 'בינה מלאכותית עלולה לטעות. בדקו תמיד את דיוק הפלט.'), 'Yes', 'כן'), 'No', 'לא'), 'Ask AI (web search & reasoning enabled)…', 'שאל את ה-AI (חיפוש באינטרנט ונימוק מופעלים)…'), 'Ask AI (web search enabled)…', 'שאל את ה-AI (חיפוש באינטרנט מופעל)…'), 'Ask AI (reasoning enabled)…', 'שאל את ה-AI (נימוק מופעל)…'), 'Ask AI…', 'שאל את ה-AI…'), 'Hi! I\'m your writing assistant.', 'שלום! אני עוזר הכתיבה שלך.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'I can help you brainstorm, rewrite, translate, and summarize.', 'אני יכול לעזור לך לגבש רעיונות, לנסח מחדש, לתרגם ולסכם.'), 'You can add additional context by clicking the', 'תוכל להוסיף הקשר נוסף על ידי לחיצה על כפתור'), 'button.', '.'), 'Ask a question to get started.', 'שאל שאלה כדי להתחיל.'), 'Used web search', 'השתמש בחיפוש באינטרנט'), 'Generating response', 'יוצר תגובה'), 'Apply to document', 'החל על המסמך'), 'Couldn\'t generate a response', 'לא ניתן היה ליצור תגובה'), 'The request failed or timed out. Check your connection and try again.', 'הבקשה נכשלה או שפג תוקפה. בדוק את החיבור שלך ונסה שוב.'), 'Retry', 'נסה שוב'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Copied', 'הועתק'), 'Unsupported file type', 'סוג קובץ לא נתמך'), 'only', 'בלבד'), 'File too large', 'הקובץ גדול מדי'), 'max', 'מקסימום'), 'Enter a valid URL', 'הזן כתובת URL תקינה'), 'Current Document', 'המסמך הנוכחי'), 'Selected Content', 'תוכן נבחר'), 'File', 'קובץ'), 'Could not read file', 'לא ניתן לקרוא את הקובץ'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'DOCX support requires the mammoth.js library to be loaded (see the importFromWordMammoth option)', 'תמיכה ב-DOCX מחייבת טעינה של ספריית mammoth.js (ראה את האפשרות importFromWordMammoth)'), 'The document appears to be empty or could not be converted.', 'נראה שהמסמך ריק או שלא ניתן היה להמיר אותו.'), 'Link', 'קישור'), 'Current document', 'המסמך הנוכחי'), 'Add URL…', 'הוסף כתובת URL…'), 'Add link', 'הוסף קישור'), 'Hide changes', 'הסתר שינויים'), 'Show changes', 'הצג שינויים'), 'Suggested rewrite', 'שכתוב מוצע'), 'Resize panel', 'שנה את גודל הפאנל'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Collapse AI Chat', 'כווץ את צ\'אט ה-AI'), 'Expand AI Chat', 'הרחב את צ\'אט ה-AI'), 'Open the AI Chat Assistant panel', 'פתח את פאנל עוזר צ\'אט ה-AI'), 'Switch Mode', 'החלף מצב'), 'Editing', 'עריכה'), 'Edit document with real-time sync', 'עריכת מסמך עם סנכרון בזמן אמת'), 'Suggesting', 'הצעות'), 'Add suggestions as Yjs-tracked changes', 'הוסף הצעות כשינויים במעקב של Yjs'), 'Viewing', 'צפייה'), 'Read-only — no edits allowed', 'לקריאה בלבד — לא ניתן לערוך'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Add Comment', 'הוסף תגובה'), 'Version History', 'היסטוריית גרסאות'), 'Hide Comments', 'הסתר תגובות'), 'Open', 'פתוח'), 'Resolved', 'נפתר'), 'Show comments', 'הצג תגובות'), 'No suggestions or comments yet.', 'עדיין אין הצעות או תגובות.'), 'No resolved suggestions or comments.', 'אין הצעות או תגובות שנפתרו.'), 'View All', 'הצג הכל'), 'Open comment from', 'פתח תגובה מאת'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'more users', 'משתמשים נוספים'), 'Add', 'הוסף'), 'Add Space', 'הוסף רווח'), 'Add Paragraph', 'הוסף פסקה'), 'Add Link', 'הוסף קישור'), 'with', 'ב־'), 'Format', 'עיצוב'), 'Removed', 'הוסר'), 'Accept', 'אשר'), 'Reject', 'דחה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Accepted', 'אושר'), 'Rejected', 'נדחה'), 'Menu', 'תפריט'), 'Edit', 'ערוך'), 'Re-open', 'פתח מחדש'), 'Resolve', 'סמן כפתור'), 'Reply', 'השב'), 'View All Replies', 'הצג את כל התגובות'), 'View Less', 'הצג פחות'), 'comment or tag with @', 'הגב או תייג באמצעות @'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Comment', 'תגובה'), "Update", 'עדכן'), 'Saving...', 'שומר...'), 'Saved', 'נשמר'), 'Auto Save', 'שמירה אוטומטית'), 'Last saved', 'נשמר לאחרונה'), 'Click to save a version now', 'לחץ כדי לשמור גרסה כעת'), 'just now', 'זה עתה'), 's ago', 'שנ׳ לפני'), 'm ago', 'דק׳ לפני'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'h ago', 'שע׳ לפני'), 'd ago', 'ימים לפני'), 'Add to Version History', 'הוסף להיסטוריית הגרסאות'), 'Rename Version', 'שנה שם לגרסה'), 'Name this version', 'תן שם לגרסה זו'), 'Edit description', 'ערוך תיאור'), 'Title', 'כותרת'), 'Title is required.', 'נדרשת כותרת.'), 'Description (optional)', 'תיאור (אופציונלי)'), "Save", 'שמור'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Restore version', 'שחזר גרסה'), 'Current content will be replaced.', 'התוכן הנוכחי יוחלף.'), 'Delete version', 'מחק גרסה'), "Back", 'חזרה'), 'Total Edits', 'סה״כ עריכות'), 'Previous version', 'גרסה קודמת'), 'Next version', 'גרסה הבאה'), 'of', 'מתוך'), 'Compare With', 'השווה עם'), 'VERSION HISTORY', 'היסטוריית גרסאות'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'All', 'הכל'), 'Named Versions', 'גרסאות בעלות שם'), 'No content.', 'אין תוכן.'), "More", 'עוד'), 'Current Version', 'הגרסה הנוכחית'), 'Compare', 'השווה'), 'Anonymous', 'אנונימי'), 'Untitled', 'ללא כותרת'), 'See more', 'ראה עוד'), 'Restore', 'שחזר'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Rename', 'שנה שם'), 'Delete description', 'מחק תיאור'), 'Edits', 'עריכות'), 'Previous change', 'שינוי קודם'), 'Next change', 'שינוי הבא'), 'Exit Comparison', 'צא מההשוואה'), 'Select Version to Compare With', 'בחר גרסה להשוואה'), 'Show', 'הצג'), 'COMPARE WITH', 'השווה עם'), 'No other versions.', 'אין גרסאות נוספות.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'No content to compare.', 'אין תוכן להשוואה.'), 'Comparing', 'משווה'), 'against', 'מול'), 'Exit comparison', 'צא מההשוואה'), 'Save this version', 'שמור גרסה זו'), 'View version history', 'הצג היסטוריית גרסאות'), 'Check for updates', 'בדוק עדכונים'), 'Modification', 'שינוי'), 'Suggestion', 'הצעה'), 'Lecture', 'הרצאה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Add Horizontal Line', 'הוסף קו אופקי'), 'Add Emoticon', 'הוסף אימוג׳י'), 'Add Icon', 'הוסף סמל'), 'Add Special Character', 'הוסף תו מיוחד'), 'Add Image', 'הוסף תמונה'), 'Add Table', 'הוסף טבלה'), 'Add Video', 'הוסף וידאו'), 'Add File', 'הוסף קובץ'), 'Add Code Snippet', 'הוסף קטע קוד'), 'Add Anchor', 'הוסף עוגן'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Add Page Break', 'הוסף מעבר עמוד'), 'Moved', 'הועבר'), 'Moved Block', 'בלוק הועבר'), 'Moved Table', 'טבלה הועברה'), 'Moved Image', 'תמונה הועברה'), 'Moved Video', 'וידאו הועבר'), 'Moved Code Snippet', 'קטע קוד הועבר'), 'Moved Page Break', 'מעבר עמוד הועבר'), 'Version Control', 'בקרת גרסאות'), 'Delete Table', 'מחק טבלה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Remove Table Header', 'הסר כותרת טבלה'), 'Remove Table Footer', 'הסר כותרת תחתונה של טבלה'), 'Delete Row', 'מחק שורה'), 'Delete Column', 'מחק עמודה'), 'Add Table Header', 'הוסף כותרת טבלה'), 'Add Table Footer', 'הוסף כותרת תחתונה לטבלה'), 'Insert Row Above', 'הוסף שורה מעל'), 'Insert Row Below', 'הוסף שורה מתחת'), 'Insert Column Before', 'הוסף עמודה לפני'), 'Insert Column After', 'הוסף עמודה אחרי'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Table Align', 'יישור טבלה'), "Table Style", 'סגנון טבלה'), 'Table Cell', 'תא טבלה'), 'Merge Cells', 'מזג תאים'), 'Split Cell Vertically', 'פצל תא אנכית'), 'Split Cell Horizontally', 'פצל תא אופקית'), 'Cell Operation', 'פעולת תא'), 'Remove Cell Style', 'הסר סגנון תא'), 'Added', 'נוסף'), 'Formatted', 'עוצב'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Changed', 'שונה'), 'left', 'שמאל'), 'right', 'ימין'), 'center', 'מרכז'), 'top', 'למעלה'), 'middle', 'אמצע'), 'bottom', 'למטה'), 'Deleted', 'נמחק'), 'justify', 'יישור מלא'), 'See less', 'הצג פחות'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'URL', 'כתובת URL'), 'Email', 'דוא״ל'), 'Phone', 'טלפון'), 'Phone number', 'מספר טלפון'), 'e.g.', 'לדוגמה'), 'To', 'אל'), 'Subject', 'נושא'), 'Body', 'גוף ההודעה'), 'Enter an email address.', 'הזינו כתובת דוא״ל.'), 'Enter a valid email address.', 'הזינו כתובת דוא״ל תקינה.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'The domain has to end in', 'הדומיין חייב להסתיים באחד מאלה:'), 'Enter a phone number.', 'הזינו מספר טלפון.'), 'Enter a valid phone number, for example', 'הזינו מספר טלפון תקין, לדוגמה'), 'Enter a valid phone number.', 'הזינו מספר טלפון תקין.'), 'Paint Formatting', 'העתקת עיצוב'), 'Continuous painting', 'העתקה רציפה'), 'Keeps the painter on after setting the formatting.', 'משאיר את הכלי פעיל לאחר החלת העיצוב.'), 'Paint formatting on', 'העתקת עיצוב פועלת'), 'Formatting applied', 'העיצוב הוחל'), 'Paint formatting off', 'העתקת עיצוב כבויה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Copy formatting, or paint it onto the selection', 'העתקת העיצוב או החלתו על הבחירה'), 'Can\'t paint selected cells', 'לא ניתן להחיל עיצוב על התאים שנבחרו'), 'Accessibility checker', 'בודק נגישות'), 'Browse issues', 'עיון בבעיות'), 'Previous issue', 'הבעיה הקודמת'), 'Next issue', 'הבעיה הבאה'), 'Rescan', 'בדיקה מחדש'), 'Ignore', 'התעלמות'), 'Fix', 'תיקון'), 'Learn more', 'מידע נוסף'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'opens in new tab', 'נפתח בכרטיסייה חדשה'), 'Mark as decorative', 'סימון כדקורטיבי'), 'Press Escape to close and return to the editor.', 'לחצו על Esc כדי לסגור ולחזור לעורך.'), 'Checking', 'בודק'), 'Checking…', 'בודק…'), 'Large documents take a moment.', 'מסמכים גדולים לוקחים רגע.'), 'No issues found', 'לא נמצאו בעיות'), '{count} rules checked at level {level}.', 'נבדקו {count} כללים ברמה {level}.'), '{n} of {total}', '{n} מתוך {total}'), '{count} ignored', '{count} התעלמות'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Issue {n} of {total}. {severity}. {rule}. {title}.', 'בעיה {n} מתוך {total}. {severity}. {rule}. {title}.'), 'Error', 'שגיאה'), 'Warning', 'אזהרה'), 'Needs review', 'דורש בדיקה'), 'Showing the first {count} issues. Fix some and rescan to see the rest.', 'מוצגות {count} הבעיות הראשונות. תקנו כמה מהן ובדקו מחדש כדי לראות את השאר.'), 'Fixed. No issues left.', 'תוקן. לא נותרו בעיות.'), 'Fixed. 1 issue left.', 'תוקן. נותרה בעיה אחת.'), 'Fixed. {count} issues left.', 'תוקן. נותרו {count} בעיות.'), 'no issues', 'אין בעיות'), '1 issue', 'בעיה אחת'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, '{count} issues', '{count} בעיות'), 'content changed since the scan', 'התוכן השתנה מאז הבדיקה'), 'That value cannot be used.', 'לא ניתן להשתמש בערך הזה.'), 'There is no automatic fix for this.', 'אין תיקון אוטומטי לבעיה הזו.'), 'This part of the content has changed. Scan again.', 'החלק הזה של התוכן השתנה. בדקו מחדש.'), 'This needs a person to check it. Look at the highlighted part, then ignore it if it is fine.', 'את זה צריך לבדוק אדם. הסתכלו על החלק המודגש והתעלמו אם הכול תקין.'), 'No automatic fix for this one. Edit the content directly.', 'אין תיקון אוטומטי לבעיה הזו. ערכו את התוכן ישירות.'), 'The text is hard to read', 'קשה לקרוא את הטקסט'), 'The text colour is too close to the background colour.', 'צבע הטקסט קרוב מדי לצבע הרקע.'), 'This text has a shadow that may be what makes it readable. Without it, contrast is {ratio}:1; it should be at least {needed}:1. Please look at it and make sure it is easy to read.', 'לטקסט הזה יש צל שאולי הוא מה שהופך אותו לקריא. בלעדיו הניגודיות היא {ratio}:1; היא צריכה להיות לפחות {needed}:1. הסתכלו עליו וודאו שקל לקרוא אותו.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Contrast is {ratio}:1. It should be at least {needed}:1.', 'הניגודיות היא {ratio}:1. היא צריכה להיות לפחות {needed}:1.'), 'This text is on top of a picture, so we cannot check its colour automatically. Please look at it and make sure it is easy to read.', 'הטקסט הזה נמצא על תמונה, ולכן אי אפשר לבדוק את הצבע שלו אוטומטית. הסתכלו עליו וודאו שקל לקרוא אותו.'), 'This text is on a colour gradient, so we cannot check its colour automatically. Please look at it and make sure it is easy to read.', 'הטקסט הזה נמצא על מעבר צבעים, ולכן אי אפשר לבדוק את הצבע שלו אוטומטית. הסתכלו עליו וודאו שקל לקרוא אותו.'), 'Something behind this text, added by the page styling, stops us checking its colour. Please look at it and make sure it is easy to read.', 'משהו מאחורי הטקסט הזה, שנוסף על ידי עיצוב הדף, מונע מאיתנו לבדוק את הצבע שלו. הסתכלו עליו וודאו שקל לקרוא אותו.'), 'Another element is over or under this text, so we cannot check its colour reliably. Please look at it and make sure it is easy to read.', 'רכיב אחר נמצא מעל הטקסט הזה או מתחתיו, ולכן אי אפשר לבדוק את הצבע שלו באופן אמין. הסתכלו עליו וודאו שקל לקרוא אותו.'), 'This text, or what is behind it, uses a colour we cannot read automatically, so we cannot check it. Please look at it and make sure it is easy to read.', 'הטקסט הזה, או מה שמאחוריו, משתמש בצבע שאי אפשר לקרוא אוטומטית, ולכן אי אפשר לבדוק אותו. הסתכלו עליו וודאו שקל לקרוא אותו.'), 'This text looks like a heading', 'הטקסט הזה נראה כמו כותרת'), 'It is big or bold, but it is not set as a heading. Choose a heading level below to turn it into one.', 'הוא גדול או מודגש, אך לא מוגדר ככותרת. בחרו למטה רמת כותרת כדי להפוך אותו לכותרת.'), 'Turn into', 'המרה ל'), 'Choose a heading level from 1 to 6.', 'בחרו רמת כותרת מ-1 עד 6.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'A heading level is missing', 'חסרה רמת כותרת'), 'A heading level is skipped here. Choose the heading level that fits.', 'כאן מדלגים על רמת כותרת. בחרו את רמת הכותרת המתאימה.'), 'Change heading to', 'שינוי הכותרת ל'), 'That would still skip a level.', 'זה עדיין ידלג על רמה.'), 'Two links in a row go to the same place', 'שני קישורים ברצף מובילים לאותו מקום'), 'Two links next to each other open the same page. Join them into one link.', 'שני קישורים סמוכים פותחים את אותו דף. אחדו אותם לקישור אחד.'), 'This list was typed by hand', 'הרשימה הזו הוקלדה ידנית'), 'These lines start with numbers or dashes instead of using the list button. Turn them into a real list.', 'השורות האלה מתחילות במספרים או במקפים במקום להשתמש בכפתור הרשימה. הפכו אותן לרשימה אמיתית.'), 'This Heading {level} comes right after a Heading {last}, skipping a level. Choose the heading level that fits.', 'הכותרת {level} הזו באה מיד אחרי כותרת {last} ומדלגת על רמה. בחרו את רמת הכותרת המתאימה.'), 'The image has mixed instructions', 'לתמונה יש הוראות סותרות'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'This image is both described and marked as decoration. Choose what it should be.', 'התמונה הזו גם מתוארת וגם מסומנת כדקורטיבית. בחרו מה היא צריכה להיות.'), 'What should the image be?', 'מה התמונה צריכה להיות?'), 'Keep the description', 'שמירת התיאור'), 'Use its label as the description', 'שימוש בתווית שלה כתיאור'), 'Mark it as decoration', 'הפיכת התמונה לדקורטיבית'), 'Choose what the image should be.', 'בחרו מה התמונה צריכה להיות.'), 'This image has no description', 'לתמונה הזו אין תיאור'), 'People who cannot see the image will not know what it shows. Write a short description below, or tick Mark as decorative if it is only for looks.', 'מי שלא רואה את התמונה לא ידע מה היא מציגה. כתבו למטה תיאור קצר, או סמנו “סימון כדקורטיבי” אם היא רק לקישוט.'), 'Image description', 'תיאור התמונה'), 'The image description is a file name', 'תיאור התמונה הוא שם קובץ'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'The description looks like a file name, which does not say what is in the picture. Write what the image shows in the Image description field.', 'התיאור נראה כמו שם קובץ, שלא אומר מה יש בתמונה. כתבו בשדה “תיאור התמונה” מה התמונה מציגה.'), 'The image description is too long', 'תיאור התמונה ארוך מדי'), 'A long description is tiring to listen to. Shorten it in the Image description field.', 'תיאור ארוך מעייף להאזנה. קצרו אותו בשדה “תיאור התמונה”.'), 'The same ID is used twice', 'אותו מזהה בשימוש פעמיים'), 'Two parts of the page share the same ID, so links to them can get mixed up. Choose how to make it unique.', 'שני חלקים בדף חולקים את אותו מזהה, ולכן קישורים אליהם עלולים להתבלבל. בחרו איך להפוך אותו לייחודי.'), 'Enter a description of the image.', 'הזינו תיאור של התמונה.'), 'People who cannot see the image will not know what it shows. Write a short description below.', 'אנשים שאינם יכולים לראות את התמונה לא יידעו מה היא מציגה. כתבו למטה תיאור קצר.'), 'Decorative image: no alt text', 'תמונה דקורטיבית: ללא טקסט חלופי'), 'That still looks like a file name. Describe what the image shows.', 'זה עדיין נראה כמו שם קובץ. תארו מה התמונה מציגה.'), 'Enter a description, or tick Mark as decorative.', 'הזינו תיאור, או סמנו “סימון כדקורטיבי”.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, '{max} characters or fewer. Currently {count}.', 'עד {max} תווים. כרגע {count}.'), 'Enter a shorter description. An empty one would make the image decorative.', 'הזינו תיאור קצר יותר. תיאור ריק יהפוך את התמונה לדקורטיבית.'), 'Still too long: {count} characters, and the limit is {max}.', 'עדיין ארוך מדי: {count} תווים, והמגבלה היא {max}.'), 'Two parts of the page share the ID "{id}", so links to them can get mixed up. Choose how to make it unique.', 'שני חלקים בדף חולקים את המזהה “{id}”, ולכן קישורים אליהם עלולים להתבלבל. בחרו איך להפוך אותו לייחודי.'), 'Make ID unique', 'הפיכת המזהה לייחודי'), 'Keep this ID and remove all others', 'שמירת המזהה הזה והסרת כל האחרים'), 'Remove this ID', 'הסרת המזהה הזה'), 'Remove all IDs', 'הסרת כל המזהים'), 'Choose what to do with the ID.', 'בחרו מה לעשות עם המזהה.'), 'This table has no title', 'לטבלה הזו אין כותרת'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'A table title tells people what the table is about before they read it. Write a short title below.', 'כותרת הטבלה אומרת על מה הטבלה לפני שקוראים אותה. כתבו למטה כותרת קצרה.'), 'Table title', 'כותרת הטבלה'), 'Enter a title for the table.', 'הזינו כותרת לטבלה.'), 'This table has no data', 'בטבלה הזו אין נתונים'), 'There is nothing in this table to read. Add some content or remove the table.', 'אין מה לקרוא בטבלה הזו. הוסיפו תוכן או הסירו את הטבלה.'), 'This table has no header row', 'לטבלה הזו אין שורת כותרות'), 'Without a header row, people cannot tell what each column is about. Use the button below to make the first row the header.', 'בלי שורת כותרות לא ברור על מה כל עמודה. השתמשו בכפתור למטה כדי להפוך את השורה הראשונה לשורת כותרות.'), 'The first row will become the header row.', 'השורה הראשונה תהפוך לשורת הכותרת.'), 'Make header row', 'יצירת כותרות'), 'This table has no rows to use as a header.', 'בטבלה הזו אין שורות שאפשר להשתמש בהן ככותרת.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'A header does not say what it labels', 'כותרת לא אומרת מה היא מסמנת'), 'This header does not say whether it labels the cells beside it (its row) or below it (its column). Choose which below.', 'הכותרת הזו לא אומרת אם היא מסמנת את התאים לצידה (השורה שלה) או מתחתיה (העמודה שלה). בחרו למטה.'), 'This header labels', 'הכותרת הזו מסמנת'), 'The cells below it (column)', 'התאים מתחתיה (עמודה)'), 'The cells beside it (row)', 'התאים לצידה (שורה)'), 'Choose row or column.', 'בחרו שורה או עמודה.'), 'Heading 5', "5 \\u05db\\u05d5\\u05ea\\u05e8\\u05ea"), 'Heading 6', "6 \\u05db\\u05d5\\u05ea\\u05e8\\u05ea"), 'The license key for Froala Editor is missing. To evaluate, use the [trial key]. To buy a license, go to {pricing}.', 'מפתח הרישיון של Froala Editor חסר. לצורך הערכה, יש להשתמש ב[מפתח הניסיון]. לרכישת רישיון, יש לעבור אל {pricing}.'), 'You are using a 30-day trial version of Froala Editor, which is not for production use. Buy a license at {pricing}.', 'נעשה שימוש בגרסת ניסיון של 30 יום של Froala Editor, שאינה מיועדת לשימוש בסביבת ייצור. ניתן לרכוש רישיון ב-{pricing}.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'The license key for Froala Editor is invalid. Make sure to use the [trial key] or [buy a license].', 'מפתח הרישיון של Froala Editor אינו תקף. יש לוודא שנעשה שימוש ב[מפתח הניסיון] או [לרכוש רישיון].'), 'The license key for Froala Editor expired, please renew at {pricing} or [contact our sales team].', 'תוקף מפתח הרישיון של Froala Editor פג. ניתן לחדש ב-{pricing} או [ליצור קשר עם צוות המכירות שלנו].'), 'Move popup', 'הזז חלון קופץ'), 'Use the arrow keys to move the popup', 'השתמש במקשי החצים כדי להזיז את החלון הקופץ')),
    direction: 'rtl'
  };

}));
//# sourceMappingURL=he.js.map
