/*!
 * froala_editor v5.3.1 (https://www.froala.com/wysiwyg-editor)
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
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
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
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, "Advanced Options", 'אפשרויות מתקדמות'), 'Match case', 'התאם בין אותיות גדולות וקטנות'), 'Whole words only', 'רק מילים שלמות'), 'More Text', 'עוד טקסט'), 'More Paragraph', 'עוד סעיף'), 'More Rich', 'עוד  עשיר'), 'More Misc', 'שונות עוד'), 'Border', 'גבול'), "Dimensions", 'ממדים'), 'Select Table', 'בחר טבלה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Drag Table', 'גרור טבלה'), 'Select PageBreak', 'בחר הפסקת עמוד'), 'Drag PageBreak', 'גרור הפסקת עמוד'), 'Page Break', 'הפסקת עמוד'), 'Insert Anchor', 'הוספת עוגן'), 'There are no entries matching', 'אין רשומות תואמות'), 'Update Anchor', 'עדכון עוגן'), 'Edit Anchor', 'עריכת עוגן'), 'Anchor Name', 'שם העוגן'), 'Anchor Link', 'קישור העוגן'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Scroll to target', 'גלול אל היעד'), 'Enter the anchor name without space', 'הקלד את שם העוגן ללא רווח'), 'Anchor name already exists.', 'שם העוגן כבר קיים.'), 'Export to Word', 'ייצוא למילה'), 'Ensure that all required dependent libraries are available for the plugin to work.', 'ודא שכל ספריות התלויות הנדרשות זמינות כדי שהתוסף יעבוד.'), 'Ensure that all required configurations and dependent libraries are available for the plugin to work as expected.', 'וודא שכל התצורות הנדרשות והספריות התלויות זמינות כדי שהתוסף יעבוד כצפוי.'), 'Import from Word', 'ייבוא מ-Word'), 'Please upload a valid file', 'אנא העלה קובץ תקין.'), 'File size must be less than', 'גודל הקובץ חייב להיות קטן מ-'), 'Code Snippet', 'קטע קוד'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Insert Code Snippet', 'הוסף קטע קוד'), 'Edit Code Snippet', 'ערוך קטע קוד'), 'Font Awesome', 'Font Awesome'), 'Web Application Icons', 'אייקוני יישומי ווב'), 'Accessibility Icons', 'אייקוני נגישות'), 'Hand Icons', 'אייקוני ידיים'), 'Transportation Icons', 'אייקוני תחבורה'), 'Gender Icons', 'אייקוני מגדר'), 'Form Control Icons', 'אייקוני פקדי טופס'), 'Payment Icons', 'אייקוני תשלום'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Chart Icons', 'אייקוני תרשימים'), 'Currency Icons', 'אייקוני מטבע'), 'Text Editor Icons', 'אייקוני עורך טקסט'), 'Brand Icons', 'אייקוני מותגים'), 'Default', 'ברירת מחדל'), 'Lower Alpha', 'אותיות לטיניות קטנות'), 'Lower Greek', 'אותיות יווניות קטנות'), 'Lower Roman', 'ספרות רומיות קטנות'), 'Upper Alpha', 'אותיות לטיניות גדולות'), 'Upper Roman', 'ספרות רומיות גדולות'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Circle', 'עיגול'), 'Disc', 'עיגול מלא'), 'Square', 'ריבוע'), 'Line Height', 'גובה שורה'), 'Single', 'בודד'), 'Double', 'כפול'), 'Insert File', 'הוספת קובץ'), 'Text Color', 'צבע טקסט'), 'Background Color', 'צבע רקע'), 'Gray', 'אפור'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Spaced', 'מרווח'), 'Uppercase', 'אותיות גדולות'), 'Rounded', 'מעוגל'), 'Bordered', 'עם מסגרת'), 'Shadow', 'צל'), 'Custom background colour input', 'הזנת צבע רקע מותאם'), 'Background colour picker', 'בורר צבע רקע'), 'Custom border colour input', 'הזנת צבע מסגרת מותאם'), 'Border colour picker', 'בורר צבע מסגרת'), 'Border colour', 'צבע מסגרת'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Inline Class', 'מחלקה פנימית'), 'Download PDF', 'הורדת PDF'), 'Dashed Borders', 'מסגרות מקווקוות'), 'Alternate Rows', 'שורות מתחלפות'), 'Highlighted', 'מודגש'), 'Thick', 'עבה'), 'Words', 'מילים'), 'Insert Files', 'הוסף קבצים'), 'Image file type is invalid.', 'סוג קובץ התמונה אינו תקין.'), 'File is too large.', 'הקובץ גדול מדי.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Alternate Text', 'טקסט חלופי'), 'Your browser does not support HTML5 vídeo.', 'הדפדפן שלך אינו תומך ב-HTML5 וידאו.'), 'Transparent', 'שקוף'), 'Big Red', 'אדום גדול'), 'Small Blue', 'כחול קטן'), 'AI Shortcuts', 'קיצורי דרך של AI'), 'Ask AI to generate or refine text, adjusting its tone and language.', 'בקש מה-AI ליצור או לשפר טקסט, תוך התאמת הטון והשפה שלו.'), 'Ask AI to generate', 'בקש מה-AI ליצור'), 'AI responses can be inaccurate.', 'תגובות AI עשויות להיות לא מדויקות.'), 'Select a text layer to edit', 'בחר שכבת טקסט לעריכה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Change Tone', 'שנה טון'), 'Translate To', 'תרגם ל'), 'Generating Response', 'יוצר תגובה'), 'Submit', 'שלח'), 'Stop', 'עצור'), 'Try again', 'נסה שוב'), 'To use AI features in Froala, you need to accept the AI Supplemental Terms.', 'לשימוש בתכונות בינה מלאכותית ב-Froala, עליך לאשר את התנאים המשלימים לבינה מלאכותית.'), 'Please set', 'אנא הגדר'), 'to', 'ל'), 'in your configuration to provide consent.', 'בתצורה שלך כדי לספק הסכמה.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'You can review the terms here:', 'ניתן לעיין בתנאים כאן:'), 'View AI Supplemental Terms', 'הצג תנאים משלימים לבינה מלאכותית'), 'Switch Mode', 'החלף מצב'), 'Editing', 'עריכה'), 'Edit document with real-time sync', 'עריכת מסמך עם סנכרון בזמן אמת'), 'Suggesting', 'הצעות'), 'Add suggestions as Yjs-tracked changes', 'הוסף הצעות כשינויים במעקב של Yjs'), 'Viewing', 'צפייה'), 'Read-only — no edits allowed', 'לקריאה בלבד — לא ניתן לערוך'), 'Add Comment', 'הוסף תגובה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Version History', 'היסטוריית גרסאות'), 'Hide Comments', 'הסתר תגובות'), 'Open', 'פתוח'), 'Resolved', 'נפתר'), 'Show comments', 'הצג תגובות'), 'No suggestions or comments yet.', 'עדיין אין הצעות או תגובות.'), 'No resolved suggestions or comments.', 'אין הצעות או תגובות שנפתרו.'), 'View All', 'הצג הכל'), 'Open comment from', 'פתח תגובה מאת'), 'more users', 'משתמשים נוספים'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Add', 'הוסף'), 'Add Space', 'הוסף רווח'), 'Add Paragraph', 'הוסף פסקה'), 'Add Link', 'הוסף קישור'), 'with', 'ב־'), 'Format', 'עיצוב'), 'Removed', 'הוסר'), 'Accept', 'אשר'), 'Reject', 'דחה'), 'Accepted', 'אושר'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Rejected', 'נדחה'), 'Menu', 'תפריט'), 'Edit', 'ערוך'), 'Re-open', 'פתח מחדש'), 'Resolve', 'סמן כפתור'), 'Reply', 'השב'), 'View All Replies', 'הצג את כל התגובות'), 'View Less', 'הצג פחות'), 'comment or tag with @', 'הגב או תייג באמצעות @'), 'Comment', 'תגובה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, "Update", 'עדכן'), 'Saving...', 'שומר...'), 'Saved', 'נשמר'), 'Auto Save', 'שמירה אוטומטית'), 'Last saved', 'נשמר לאחרונה'), 'Click to save a version now', 'לחץ כדי לשמור גרסה כעת'), 'just now', 'זה עתה'), 's ago', 'שנ׳ לפני'), 'm ago', 'דק׳ לפני'), 'h ago', 'שע׳ לפני'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'd ago', 'ימים לפני'), 'Add to Version History', 'הוסף להיסטוריית הגרסאות'), 'Rename Version', 'שנה שם לגרסה'), 'Name this version', 'תן שם לגרסה זו'), 'Edit description', 'ערוך תיאור'), 'Title', 'כותרת'), 'Title is required.', 'נדרשת כותרת.'), 'Description (optional)', 'תיאור (אופציונלי)'), "Save", 'שמור'), 'Restore version', 'שחזר גרסה'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Current content will be replaced.', 'התוכן הנוכחי יוחלף.'), 'Delete version', 'מחק גרסה'), "Back", 'חזרה'), 'Total Edits', 'סה״כ עריכות'), 'Previous version', 'גרסה קודמת'), 'Next version', 'גרסה הבאה'), 'of', 'מתוך'), 'Compare With', 'השווה עם'), 'VERSION HISTORY', 'היסטוריית גרסאות'), 'All', 'הכל'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Named Versions', 'גרסאות בעלות שם'), 'No content.', 'אין תוכן.'), "More", 'עוד'), 'Current Version', 'הגרסה הנוכחית'), 'Compare', 'השווה'), 'Anonymous', 'אנונימי'), 'Untitled', 'ללא כותרת'), 'See more', 'ראה עוד'), 'Restore', 'שחזר'), 'Rename', 'שנה שם'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Delete description', 'מחק תיאור'), 'Edits', 'עריכות'), 'Previous change', 'שינוי קודם'), 'Next change', 'שינוי הבא'), 'Exit Comparison', 'צא מההשוואה'), 'Select Version to Compare With', 'בחר גרסה להשוואה'), 'Show', 'הצג'), 'COMPARE WITH', 'השווה עם'), 'No other versions.', 'אין גרסאות נוספות.'), 'No content to compare.', 'אין תוכן להשוואה.'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Comparing', 'משווה'), 'against', 'מול'), 'Exit comparison', 'צא מההשוואה'), 'Save this version', 'שמור גרסה זו'), 'View version history', 'הצג היסטוריית גרסאות'), 'Check for updates', 'בדוק עדכונים'), 'Modification', 'שינוי'), 'Suggestion', 'הצעה'), 'Lecture', 'הרצאה'), 'Show Open', 'הצג פתוחים'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Add Horizontal Line', 'הוסף קו אופקי'), 'Add Emoticon', 'הוסף אימוג׳י'), 'Add Icon', 'הוסף סמל'), 'Add Special Character', 'הוסף תו מיוחד'), 'Add Image', 'הוסף תמונה'), 'Add Table', 'הוסף טבלה'), 'Add Video', 'הוסף וידאו'), 'Add File', 'הוסף קובץ'), 'Add Code Snippet', 'הוסף קטע קוד'), 'Add Anchor', 'הוסף עוגן'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Add Page Break', 'הוסף מעבר עמוד'), 'Version Control', 'בקרת גרסאות'), 'Delete Table', 'מחק טבלה'), 'Remove Table Header', 'הסר כותרת טבלה'), 'Remove Table Footer', 'הסר כותרת תחתונה של טבלה'), 'Delete Row', 'מחק שורה'), 'Delete Column', 'מחק עמודה'), 'Add Table Header', 'הוסף כותרת טבלה'), 'Add Table Footer', 'הוסף כותרת תחתונה לטבלה'), 'Insert Row Above', 'הוסף שורה מעל'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Insert Row Below', 'הוסף שורה מתחת'), 'Insert Column Before', 'הוסף עמודה לפני'), 'Insert Column After', 'הוסף עמודה אחרי'), 'Table Align', 'יישור טבלה'), "Table Style", 'סגנון טבלה'), 'Table Cell', 'תא טבלה'), 'Merge Cells', 'מזג תאים'), 'Split Cell Vertically', 'פצל תא אנכית'), 'Split Cell Horizontally', 'פצל תא אופקית'), 'Cell Operation', 'פעולת תא'), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_translation, 'Remove Cell Style', 'הסר סגנון תא'), 'Added', 'נוסף'), 'Formatted', 'עוצב'), 'Changed', 'שונה'), 'left', 'שמאל'), 'right', 'ימין'), 'center', 'מרכז'), 'top', 'למעלה'), 'middle', 'אמצע'), 'bottom', 'למטה'), _defineProperty(_defineProperty(_defineProperty(_translation, 'Deleted', 'נמחק'), 'justify', 'יישור מלא'), 'See less', 'הצג פחות')),
    direction: 'rtl'
  };

}));
//# sourceMappingURL=he.js.map
