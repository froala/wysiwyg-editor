/*!
 * froala_editor v3.1.1 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2020 Froala Labs
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('froala-editor')) :
  typeof define === 'function' && define.amd ? define(['froala-editor'], factory) :
  (factory(global.FroalaEditor));
}(this, (function (FE) { 'use strict';

  FE = FE && FE.hasOwnProperty('default') ? FE['default'] : FE;

  /**
   * Traditional Chinese spoken in Taiwan.
   */
  FE.LANGUAGE['zh_tw'] = {
    translation: {
      // Place holder
      'Type something': '輸入內容',
      // Basic formatting
      'Bold': '粗體',
      'Italic': '斜體',
      'Underline': '下劃線',
      'Strikethrough': '刪除線',
      // Main buttons
      'Insert': '插入',
      'Delete': '刪除',
      'Cancel': '取消',
      'OK': '確定',
      'Back': '後退',
      'Remove': '刪除',
      'More': '更多',
      'Update': '更新',
      'Style': '樣式',
      // Font
      'Font Family': '字體',
      'Font Size': '字體大小',
      // Colors
      'Colors': '顏色',
      'Background': '背景',
      'Text': '文字',
      'HEX Color': '十六進制顏色',
      // Paragraphs
      'Paragraph Format': '段落格式',
      'Normal': '正文',
      'Code': '代碼',
      'Heading 1': '標題1',
      'Heading 2': '標題2',
      'Heading 3': '標題3',
      'Heading 4': '標題4',
      // Style
      'Paragraph Style': '段落樣式',
      'Inline Style': '內聯樣式',
      // Alignment
      'Align': '對齊方式',
      'Align Left': '左對齊',
      'Align Center': '居中',
      'Align Right': '右對齊',
      'Align Justify': '兩端對齊',
      'None': '無',
      // Lists
      'Ordered List': '編號',
      'Unordered List': '項目符號',
      // Indent
      'Decrease Indent': '減少縮進量',
      'Increase Indent': '增加縮進量',
      // Links
      'Insert Link': '插入超連結',
      'Open in new tab': '在新標籤頁中打開',
      'Open Link': '打開超連結',
      'Edit Link': '編輯超連結',
      'Unlink': '刪除超連結',
      'Choose Link': '選擇超連結',
      // Images
      'Insert Image': '插入圖片',
      'Upload Image': '上傳圖片',
      'By URL': '通過 URL',
      'Browse': '瀏覽',
      'Drop image': '拖入圖片',
      'or click': '或點擊',
      'Manage Images': '管理圖片',
      'Loading': '加載中',
      'Deleting': '刪除中',
      'Tags': '標籤',
      'Are you sure? Image will be deleted.': '圖片將會被刪除，是否確認？',
      'Replace': '替換',
      'Uploading': '上傳中',
      'Loading image': '圖片加載中',
      'Display': '顯示',
      'Inline': '嵌入型',
      'Break Text': '上下型環繞',
      'Alternative Text': '替換文字',
      'Change Size': '改變大小',
      'Width': '寬度',
      'Height': '高度',
      'Something went wrong. Please try again.': '發生錯誤，請重試。',
      'Image Caption': '圖片標題',
      'Advanced Edit': '高級編輯',
      // Video
      'Insert Video': '插入影片',
      'Embedded Code': '嵌入代碼',
      'Paste in a video URL': '貼上影片網址',
      'Drop video': '拖入影片',
      'Your browser does not support HTML5 video.': '您的瀏覽器不支持 HTML5 影片。',
      'Upload Video': '上傳影片',
      // Tables
      'Insert Table': '插入表格',
      'Table Header': '表頭',
      'Remove Table': '刪除表格',
      'Table Style': '表格樣式',
      'Horizontal Align': '水平對齊方式',
      'Row': '行',
      'Insert row above': '在上方插入',
      'Insert row below': '在下方插入',
      'Delete row': '刪除行',
      'Column': '列',
      'Insert column before': '在左側插入',
      'Insert column after': '在右側插入',
      'Delete column': '刪除列',
      'Cell': '單元格',
      'Merge cells': '合併單元格',
      'Horizontal split': '水平分割',
      'Vertical split': '垂直分割',
      'Cell Background': '單元格背景',
      'Vertical Align': '垂直對齊方式',
      'Top': '靠上',
      'Middle': '居中',
      'Bottom': '靠下',
      'Align Top': '靠上對齊',
      'Align Middle': '居中對齊',
      'Align Bottom': '靠下對齊',
      'Cell Style': '單元格樣式',
      // Files
      'Upload File': '上傳文件',
      'Drop file': '拖入文件',
      // Emoticons
      'Emoticons': '表情符號',
      'Grinning face': '露齒笑臉',
      'Grinning face with smiling eyes': '露齒笑到眯起眼',
      'Face with tears of joy': '笑哭',
      'Smiling face with open mouth': '張嘴微笑',
      'Smiling face with open mouth and smiling eyes': '眯眼張嘴微笑',
      'Smiling face with open mouth and cold sweat': '帶冷汗的張嘴微笑',
      'Smiling face with open mouth and tightly-closed eyes': '緊閉雙眼張嘴微笑',
      'Smiling face with halo': '帶光環微笑',
      'Smiling face with horns': '帶牛角的微笑',
      'Winking face': '眨眼',
      'Smiling face with smiling eyes': '眯眼微笑',
      'Face savoring delicious food': '饞',
      'Relieved face': '如釋重負',
      'Smiling face with heart-shaped eyes': '桃心眼微笑',
      'Smiling face with sunglasses': '戴太陽鏡微笑',
      'Smirking face': '得意地笑',
      'Neutral face': '中性臉',
      'Expressionless face': '面無表情',
      'Unamused face': '不高興',
      'Face with cold sweat': '冷汗',
      'Pensive face': '沉思',
      'Confused face': '迷惑',
      'Confounded face': '困惑',
      'Kissing face': '嘴巴嘟嘟',
      'Face throwing a kiss': '飛吻',
      'Kissing face with smiling eyes': '眯眼接吻',
      'Kissing face with closed eyes': '閉眼接吻',
      'Face with stuck out tongue': '吐舌',
      'Face with stuck out tongue and winking eye': '眨眼吐舌',
      'Face with stuck out tongue and tightly-closed eyes': '眯眼吐舌',
      'Disappointed face': '失望',
      'Worried face': '擔心',
      'Angry face': '生氣',
      'Pouting face': '撅嘴',
      'Crying face': '大哭',
      'Persevering face': '堅強',
      'Face with look of triumph': '揚眉吐氣',
      'Disappointed but relieved face': '失望',
      'Frowning face with open mouth': '皺眉',
      'Anguished face': '痛苦',
      'Fearful face': '害怕',
      'Weary face': '疲憊',
      'Sleepy face': '困了',
      'Tired face': '累了',
      'Grimacing face': '扭曲臉',
      'Loudly crying face': '大哭',
      'Face with open mouth': '張開嘴',
      'Hushed face': '安靜',
      'Face with open mouth and cold sweat': '冷汗',
      'Face screaming in fear': '害怕尖叫',
      'Astonished face': '驚訝',
      'Flushed face': '臉紅',
      'Sleeping face': '熟睡',
      'Dizzy face': '眩暈',
      'Face without mouth': '沒有嘴的臉',
      'Face with medical mask': '口罩臉',
      // Line breaker
      'Break': '換行',
      // Math
      'Subscript': '下標',
      'Superscript': '上標',
      // Full screen
      'Fullscreen': '全屏',
      // Horizontal line
      'Insert Horizontal Line': '插入水平線',
      // Clear formatting
      'Clear Formatting': '清除格式',
      // Save
      'Save': '保存',
      // Undo, redo
      'Undo': '復原',
      'Redo': '取消復原',
      // Select all
      'Select All': '全選',
      // Code view
      'Code View': '檢視原始碼',
      // Quote
      'Quote': '引用',
      'Increase': '增加引用級別',
      'Decrease': '減少引用級別',
      // Quick Insert
      'Quick Insert': '快速插入',
      // Spcial Characters
      'Special Characters': '特殊字符',
      'Latin': '拉丁字母',
      'Greek': '希臘字母',
      'Cyrillic': '西裡爾字母',
      'Punctuation': '標點',
      'Currency': '貨幣',
      'Arrows': '箭頭',
      'Math': '數學',
      'Misc': '雜項',
      // Print.
      'Print': '列印',
      // Spell Checker.
      'Spell Checker': '拼寫檢查器',
      // Help
      'Help': '幫助',
      'Shortcuts': '快捷鍵',
      'Inline Editor': '內聯編輯器',
      'Show the editor': '顯示編輯器',
      'Common actions': '常用操作',
      'Copy': '複製',
      'Cut': '剪下',
      'Paste': '貼上',
      'Basic Formatting': '基本格式',
      'Increase quote level': '增加引用級別',
      'Decrease quote level': '減少引用級別',
      'Image / Video': '圖像/影片',
      'Resize larger': '放大',
      'Resize smaller': '縮小',
      'Table': '表格',
      'Select table cell': '選擇單元格',
      'Extend selection one cell': '增加選中的單元格',
      'Extend selection one row': '增加選中的行',
      'Navigation': '導航',
      'Focus popup / toolbar': '焦點彈出/工具欄',
      'Return focus to previous position': '將焦點返回到上一個位置',
      // Embed.ly
      'Embed URL': '嵌入網址',
      'Paste in a URL to embed': '貼上要嵌入的網址',
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': '貼上的內容來自微軟 Word 文檔。你想保留還是清除格式？',
      'Keep': '保留',
      'Clean': '清除',
      'Word Paste Detected': '檢測到貼上自 Word 的內容',
      // Character Counter
      'Characters': '字數統計',
      // More Buttons
      'More Text': ' 更多文字',
      'More Paragraph': '更多段落',
      'More Rich': '更多豐富',
      'More Misc': '更多雜項'
    },
    direction: 'ltr'
  };

})));
//# sourceMappingURL=zh_tw.js.map
