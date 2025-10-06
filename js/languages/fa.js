/*!
 * froala_editor v4.6.2 (https://www.froala.com/wysiwyg-editor)
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
   * Persian
   */
  FE.LANGUAGE['fa'] = {
      translation: {
          // Place holder
      'Type something': "چیزی بنویسید",
      // Basic formatting
      'Bold': 'ضخیم',
      'Italic': 'کج',
      'Underline': 'خط زیر',
      'Strikethrough': "خط خورده",
      // Main buttons
      'Insert': "اضافه کردن",
      'Delete': "حذف کردن",
      'Cancel': "لغو",
      'OK': "باشه",
      'Back': "به عقب",
      'Remove': "برداشتن",
      'More': "بیشتر",
      'Update': "به روز رسانی",
      'Style': "استایل",
      // Font
      'Font Family': "قلم",
      'Font Size': "اندازه قلم",
      // Colors
      'Colors': "رنگ",
      'Background': "زمینه متن",
      'Text': "متن",
      'HEX Color': 'کد رنگ',
      // Paragraphs
      'Paragraph Format': "قالب",
      'Normal': "طبیعی - Normal",
      'Code': "دستورالعملها - Code",
      'Heading 1': "سر‌صفحه 1",
      'Heading 2': "سر‌صفحه 2",
      'Heading 3': "سر‌صفحه 3",
      'Heading 4': "سر‌صفحه 4",
      // Style
      'Paragraph Style': "استایل پاراگراف",
      'Inline Style': "استایل داخل کد",
      // Alignment
      'Align': "چینش نوشته",
      'Align Left': "چپ چین",
      'Align Center': "وسط چین",
      'Align Right': "راست چین",
      'Align Justify': "مساوی از طرفین",
      'None': "هیچ کدام",
      // Lists
      'Ordered List': "لیست شماره ای",
      'Unordered List': "لیست دایره ای",
      // Indent
      'Decrease Indent': "کاهش تو رفتگی",
      'Increase Indent': "افزایش تو رفتگی",
      // Links
      'Insert Link': "اضافه کردن لینک",
      'Open in new tab': "باز کردن در برگه جدید",
      'Open Link': "باز کردن لینک",
      'Edit Link': "ویرایش لینک",
      'Unlink': "حذف لینک",
      'Choose Link': "لینک را انتخاب کنید",
      // Images
      'Insert Image': "اضافه کردن تصویر",
      'Upload Image': "آپلود تصویر",
      'By URL': "URL با",
      'Browse': "فهرست",
      'Drop image': "تصویر را اینجا بیندازید",
      'or click': "یا کلیک کنید",
      'Manage Images': "مدیریت تصاویر",
      'Loading': "بارگیری",
      'Deleting': "حذف",
      'Tags': "برچسب ها",
      'Are you sure? Image will be deleted.': ".آیا مطمئن هستید؟ تصویر حذف خواهد شد",
      'Replace': "جایگزین کردن",
      'Uploading': "آپلود",
      'Loading image': "بارگذاری تصویر",
      'Display': "نشان دادن",
      'Inline': "داخل خط",
      'Break Text': "شکستن نوشته",
      'Alternative Text': "متن جایگزین",
      'Change Size': "تغییر اندازه",
      'Width': "عرض",
      'Height': "ارتفاع",
      'Something went wrong. Please try again.': 'خطایی رخ داده است ، لطفا مجددا تلاش کنید',
      'Image Caption': 'عنوان تصویر',
      'Advanced Edit': 'ویرایش پیشرفته',
      // Video
      'Insert Video': "اضافه کردن فایل تصویری",
      'Embedded Code': "کد جاسازی شده",
      'Paste in a video URL': 'آدرس ویدیو را وارد کنید',
      'Drop video': 'ویدیو را اینجا بیندازید',
      'Your browser does not support HTML5 video.': 'مرورگر شما ویدیو HTML5 را پشتیبانی نمی کند.',
      'Upload Video': 'آپلود ویدیو',
      // Tables
      'Insert Table': "اضافه کردن جدول",
      'Table Header': "هدر جدول",
      'Remove Table': "حذف جدول",
      'Table Style': "سبک جدول",
      'Horizontal Align': "تنظیم افقی",
      'Row': "سطر",
      'Insert row above': "درج ردیف در بالا",
      'Insert row below': "درج ردیف در پایین",
      'Delete row': "حذف سطر",
      'Column': "ستون",
      'Insert column before': "درج ستون قبل از این",
      'Insert column after': "درج ستون بعد از این",
      'Delete column': "حذف ستون",
      'Cell': "سلول",
      'Merge cells': "ادغام سلول‌ها",
      'Horizontal split': "تقسیم افقی",
      'Vertical split': "تقسیم عمودی",
      'Cell Background': "پس زمینه سلول",
      'Vertical Align': "ردیف عمودی",
      'Top': "بالا",
      'Middle': "متوسط",
      'Bottom': "پایین",
      'Align Top': "تراز بالای",
      'Align Middle': "تراز وسط",
      'Align Bottom': "تراز پایین",
      'Cell Style': "استایل سلول,
      // Files
      'Upload File': "آپلود فایل",
      'Drop file': "انتخاتن فایل",
      // Emoticons
      'Emoticons': "شکلک ها",
      'Grinning face': "چهره پوزخند",
      'Grinning face with smiling eyes': "چهره پوزخند با چشمان خندان",
      'Face with tears of joy': "چهره با اشک شادی",
      'Smiling face with open mouth': "چهره خندان با دهان باز",
      'Smiling face with open mouth and smiling eyes': "چهره خندان با دهان باز و خندان چشم",
      'Smiling face with open mouth and cold sweat': "چهره خندان با دهان باز و عرق سرد",
      'Smiling face with open mouth and tightly-closed eyes': "چهره خندان با دهان باز و چشم دربدار",
      'Smiling face with halo': "چهره خندان با هاله",
      'Smiling face with horns': "چهره خندان با شاخ",
      'Winking face': "حرکت پذیری",
      'Smiling face with smiling eyes': "چهره خندان با چشم لبخند",
      'Face savoring delicious food': "چهره لذیذ غذای خوشمزه",
      'Relieved face': "چهره رها",
      'Smiling face with heart-shaped eyes': "چهره خندان با چشم به شکل قلب",
      'Smiling face with sunglasses': "چهره خندان با عینک آفتابی",
      'Smirking face': "پوزخند چهره",
      'Neutral face': "چهره های خنثی",
      'Expressionless face': "چهره ناگویا",
      'Unamused face': "چهره خوشحال نیست",
      'Face with cold sweat': "چهره با عرق سرد",
      'Pensive face': "چهره افسرده",
      'Confused face': "چهره اشتباه",
      'Confounded face': "چهره سر در گم",
      'Kissing face': "بوسیدن صورت",
      'Face throwing a kiss': "چهره پرتاب یک بوسه",
      'Kissing face with smiling eyes': "بوسیدن چهره با چشم لبخند",
      'Kissing face with closed eyes': "بوسیدن صورت با چشمان بسته",
      'Face with stuck out tongue': "چهره با گیر کردن زبان",
      'Face with stuck out tongue and winking eye': "چهره با زبان گیر کردن و حرکت چشم",
      'Face with stuck out tongue and tightly-closed eyes': "صورت با زبان گیر کردن و چشم را محکم بسته",
      'Disappointed face': "چهره نا امید",
      'Worried face': "چهره نگران",
      'Angry face': "چهره عصبانی",
      'Pouting face': "بغ چهره",
      'Crying face': "گریه چهره",
      'Persevering face': "پایداری چهره",
      'Face with look of triumph': "چهره با نگاهی از پیروزی",
      'Disappointed but relieved face': "نا امید اما آسوده چهره",
      'Frowning face with open mouth': "اخم صورت با دهان باز",
      'Anguished face': "چهره نگران",
      'Fearful face': "چهره ترس",
      'Weary face': "چهره خسته",
      'Sleepy face': "چهره خواب آلود",
      'Tired face': "چهره خسته",
      'Grimacing face': "اش چهره",
      'Loudly crying face': "ندایی رسا گریه چهره",
      'Face with open mouth': "چهره با دهان باز",
      'Hushed face': "چهره سکوت",
      'Face with open mouth and cold sweat': "چهره با دهان باز و عرق سرد",
      'Face screaming in fear': "چهره جیغ در ترس",
      'Astonished face': "چهره شگفت زده",
      'Flushed face': "چهره برافروخته",
      'Sleeping face': "خواب چهره",
      'Dizzy face': "چهره دیزی",
      'Face without mouth': "چهره بدون دهان",
      'Face with medical mask': "چهره با ماسک های پزشکی",
      // Line breaker
      'Break': "خط بعد",
      // Math
      'Subscript': "پايين نويس",
      'Superscript': "بالا نگاشت",
      // Full screen
      'Fullscreen': "تمام صفحه",
      // Horizontal line
      'Insert Horizontal Line': "اضافه کردن افقی خط",
      // Clear formatting
      'Clear Formatting': "پاک کردن فرمت ها",
      // Save
      'Save': "ذخیره",
      // Undo, redo
      'Undo': "برگرداندن",
      'Redo': "انجام دوباره",
      // Select all
      'Select All': "انتخاب همه",
      // Code view
      'Code View': "مشاهده کد",
      // Quote
      'Quote': "نقل قول",
      'Increase': "افزایش دادن",
      'Decrease': "کاهش دادن",
      // Quick Insert
      'Quick Insert': "درج سریع",
      // Spcial Characters
      'Special Characters': 'کاراکترهای خاص',
      'Latin': 'لاتین',
      'Greek': 'یونانی',
      'Cyrillic': 'سیریلیک',
      'Punctuation': 'نقطه گذاری',
      'Currency': 'واحد پول',
      'Arrows': 'فلش ها',
      'Math': 'ریاضی',
      'Misc': 'متفرقه',
      // Print.
      'Print': 'چاپ',
      // Spell Checker.
      'Spell Checker': 'بررسی کننده غلط املایی',
      // Help
      'Help': 'کمک',
      'Shortcuts': 'کلید های میانبر',
      'Inline Editor': 'ویرایشگر درون متنی',
      'Show the editor': 'ویرایشگر را نشان بده',
      'Common actions': 'عملکردهای مشترک',
      'Copy': 'کپی کنید',
      'Cut': 'برش',
      'Paste': 'چسباندن',
      'Basic Formatting': 'قالب بندی اولیه',
      'Increase quote level': 'افزایش سطح نقل قول',
      'Decrease quote level': 'کاهش سطح نقل قول',
      'Image / Video': 'تصویر / ویدئو',
      'Resize larger': 'بزرگتر کنید',
      'Resize smaller': 'کوچکتر کنید',
      'Table': 'جدول',
      'Select table cell': 'یک سلول از جدول انتخاب کنید',
      'Extend selection one cell': 'به انتخاب یک سلول اضافه کنید',
      'Extend selection one row': 'به انتخاب یک ردیف اضافه کنید',
      'Navigation': 'جهت یابی',
      'Focus popup / toolbar': 'تمرکز پنجره / نوار ابزار',
      'Return focus to previous position': 'برگرداندن فوکوس به موقعیت قبلی',
      // Embed.ly
      'Embed URL': 'آدرس جاسازی',
      'Paste in a URL to embed': 'یک URL برای جاسازی کپی کنید',
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': 'محتوای وارد شده از یک سند Word Microsoft می آید. آیا می خواهید فرمت را نگه دارید یا پاک کنید؟',
      'Keep': 'نگاه داشتن',
      'Clean': 'پاک کن',
      'Word Paste Detected': 'کلمه رب تشخیص داده شده است',
      // Character Counter 
      'Characters': 'کاراکترها',
      // More Buttons
      'More Text': 'امکانات متن بیشتر',
      'More Paragraph': 'امکانات پاراگراف بیشتر',
      'More Rich': 'امکانات متن غنی بیشتر',
      'More Misc': 'بیشتر متفرقه'
    },
    direction: 'rtl'
  };

})));\n//# sourceMappingURL=fa.js.map\n"
