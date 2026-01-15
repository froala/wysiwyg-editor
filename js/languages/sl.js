/*!
 * froala_editor v5.0.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2026 Froala Labs
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('froala-editor')) :
  typeof define === 'function' && define.amd ? define(['froala-editor'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FroalaEditor));
})(this, (function (FE) { 'use strict';

  /**
   * Slovenian
   */
  FE.LANGUAGE['sl'] = {
    translation: {
      // Place holder
      'Type something': 'Nekaj vtipkajte',
      // Basic formatting
      'Bold': 'Krepko',
      'Italic': 'Italik',
      //'Poševno',
      'Underline': 'Podčrta',
      //'Podčrtano',
      'Strikethrough': 'Prečrtano',
      'Size': 'Velikost',
      // Main buttons
      'Insert': 'Vstavi',
      'Delete': 'Izbriši',
      'Cancel': 'Prekliči',
      'OK': 'OK',
      'Back': 'Nazaj',
      'Remove': 'Odstrani',
      'More': 'Več',
      'Update': 'Posodobi',
      'Style': 'Slog',
      // Font
      'Font Family': 'Oblika pisave',
      'Font Size': 'Velikost pisave',
      // Colors
      'Colors': 'Barve',
      'Color': 'Barva',
      'Background': 'Ozadje',
      'Text': 'Besedilo',
      'HEX Color': 'HEX Barva',
      // Paragraphs
      'Paragraph Format': 'Oblika odstavka',
      'Normal': 'Normalno',
      'Code': 'Koda',
      'Heading 1': 'Naslov 1',
      'Heading 2': 'Naslov 2',
      'Heading 3': 'Naslov 3',
      'Heading 4': 'Naslov 4',
      // Style
      'Paragraph Style': 'Slog odstavka',
      'Inline Style': 'Vrstični slog',
      'Padding': 'Oblazinjenje',
      // Alignment
      'Align': 'Poravnajte',
      'Align Left': 'Leva poravnava',
      'Align Center': 'Sredinska poravnava',
      'Align Right': 'Desna poravnava',
      'Align Justify': 'Poravnajte utemeljite',
      'None': 'Noben',
      // Lists
      'Ordered List': 'Številčni seznam',
      'Unordered List': 'Neštevilčni seznam',
      // Indent
      'Decrease Indent': 'Zmanjšaj zamik',
      'Increase Indent': 'Povečaj zamik',
      // Links
      'Insert Link': 'Vstavi povezavo',
      'Open in new tab': 'Odpri v novem zavihku',
      'Open Link': 'Odpri povezavo',
      'Edit Link': 'Uredi povezavo',
      'Unlink': 'Odstrani povezavo',
      'Choose Link': 'Izberi povezavo',
      // Images
      'Insert Image': 'Vstavi sliko',
      'Upload Image': 'Naloži sliko',
      'By URL': 'Po URL-ju',
      'Browse': 'Prebrskaj',
      'Drop image': 'Spusti sliko',
      'or click': 'ali kliknite',
      'Manage Images': 'Urejanje slik',
      'Loading': 'Nalaganje',
      'Deleting': 'Brisanje',
      'Tags': 'Značke',
      'Are you sure? Image will be deleted.': 'Ali ste prepričani? Slika bo izbrisana.',
      'Replace': 'Zamenjaj',
      'Uploading': 'Nalaganje',
      'Loading image': 'Nalagam sliko',
      'Display': 'Prikaži',
      'Inline': 'Vrstično',
      'Break Text': 'Prelomi besedilo',
      'Alternative Text': 'Nadomestno besedilo',
      'Change Size': 'Spremeni velikost',
      'Width': 'Širina',
      'Height': 'Višina',
      'Something went wrong. Please try again.': 'Nekaj je šlo narobe. Prosimo, poskusite ponovno.',
      'Image Caption': 'Opis slike',
      'Advanced Edit': 'Napredno urejanje',
      // Video
      'Insert Video': 'Vstavi video posnetek',
      'Embedded Code': 'Vdelana koda',
      'Paste in a video URL': 'Prilepite URL video posnetka',
      'Drop video': 'Spustite video posnetek sem',
      'Your browser does not support HTML5 video.': 'Vaš brskalnik ne podpira HTML5 video funkcionalnosti.',
      'Upload Video': 'Naloži video posnetek',
      // Tables
      'Insert Table': 'Vstavi tabelo',
      'Table Header': 'Glava tabele',
      'Remove Table': 'Odstrani tabelo',
      'Table Style': 'Slog tabele',
      'Horizontal Align': 'Horizontalna poravnava',
      'Row': 'Vrstica',
      'Insert row above': 'Vstavi vrstico nad',
      'Insert row below': 'Vstavi vrstico pod',
      'Delete row': 'Izbriši vrstico',
      'Column': 'Stolpec',
      'Insert column before': 'Vstavi stolpec pred',
      'Insert column after': 'Vstavi stolpec po',
      'Delete column': 'Izbriši stolpec',
      'Cell': 'Celica',
      'Merge cells': 'Združi celice',
      'Horizontal split': 'Horizontalni razcep',
      'Vertical split': 'Vertikalni razcep',
      'Cell Background': 'Ozadje celice',
      'Vertical Align': 'Vertikalna poravnava',
      'Top': 'Vrh',
      'Middle': 'Sredina',
      'Bottom': 'Dno',
      'Align Top': 'Vrhnja poravnava',
      'Align Middle': 'Sredinska poravnava',
      'Align Bottom': 'Spodnja poravnava',
      'Cell Style': 'Slog celice',
      'Table Properties': 'Lastnosti tabele',
      'Cell Properties': 'Lastnosti celice',
      'Table Footer': 'Noga tabele',
      'Dimensions': 'Dimenzije',
      'Custom background color input': 'Vnos barve ozadja po meri',
      'Background color picker': 'Izbirnik barve ozadja',
      'Custom border color input': 'Vnos barve obrobe po meri',
      'Border color picker': 'Izbirnik barve obrobe',
      'Border width': 'Širina obrobe',
      'Border style': 'Slog obrobe',
      'Border color': 'Barva obrobe',
      'Table width': 'Širina tabele',
      'Table height': 'Višina tabele',
      'Left align': 'Poravnaj levo',
      'Center align': 'Poravnaj sredino',
      'Right align': 'desno Poravnaj ',
      'solid': 'Polna črta',
      'dashed': 'Črtkana črta',
      'dotted': 'Pikčasta črta',
      'double': 'Dvojna črta',
      'groove': 'Zarezana črta',
      'ridge': 'Dvignjena črta',
      'inset': 'Notranja črta',
      'outset': 'Zunanja črta',
      // Files
      'Upload File': 'Naloži datoteko',
      'Drop file': 'Spustite datoteko sem',
      // Emoticons
      'Emoticons': 'Emotikoni',
      // Line breaker
      'Break': 'Zlom',
      // Math
      'Subscript': 'Podpisano',
      'Superscript': 'Nadpisano',
      // Full screen
      'Fullscreen': 'Celozaslonski način',
      // Horizontal line
      'Insert Horizontal Line': 'Vstavi vodoravno črto',
      // Clear formatting
      'Clear Formatting': 'Počisti oblikovanje',
      // Save
      'Save': 'Shrani',
      'Ok': 'V redu',
      // Undo, redo
      'Undo': 'Razveljavi',
      'Redo': 'Ponovno uveljavi',
      // Select all
      'Select All': 'Izberi vse',
      // Code view
      'Code View': 'Prikaži kodo',
      // Quote
      'Quote': 'Citat',
      'Increase': 'Povečaj',
      'Decrease': 'Zmanjšaj',
      // Quick Insert
      'Quick Insert': 'Hitro vstavljanje',
      // Spcial Characters
      'Special Characters': 'Posebni znaki',
      'Latin': 'Latinica',
      'Greek': 'Grščina',
      'Cyrillic': 'Cirilica',
      'Punctuation': 'Ločila',
      'Currency': 'Valute',
      'Arrows': 'Puščice',
      'Math': 'Matematika',
      'Misc': 'Razno',
      // Print.
      'Print': 'Natisni',
      // Spell Checker.
      'Spell Checker': 'Črkovalnik',
      // Help
      'Help': 'Pomoč',
      'Shortcuts': 'Bližnjice',
      'Inline Editor': 'Vdelani urejevalnik',
      'Show the editor': 'Pokaži urejevalnik',
      'Common actions': 'Skupna dejanja',
      'Copy': 'Kopiraj',
      'Cut': 'Izreži',
      'Paste': 'Prilepi',
      'Basic Formatting': 'Osnovno oblikovanje',
      'Increase quote level': 'Povečaj raven citata',
      'Decrease quote level': 'Zmanjšaj raven citata',
      'Image / Video': 'Slika / Video',
      'Resize larger': 'Povečaj',
      'Resize smaller': 'Pomanjšaj',
      'Table': 'Tabela',
      'Select table cell': 'Izberi celico tabele',
      'Extend selection one cell': 'Razširi izbor za eno celico',
      'Extend selection one row': 'Razširi izbor za eno vrstico',
      'Navigation': 'Navigacija',
      'Focus popup / toolbar': 'Fokusiraj pojavno okno / orodno vrstico',
      'Return focus to previous position': 'Vrni fokus v prejšnji položaj',
      // Embed.ly
      'Embed URL': 'Vdelani URL',
      'Paste in a URL to embed': 'Prilepite URL za vdelavo',
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': 'Prilepljena vsebina prihaja iz dokumenta Microsoft Word. Ali želite obliko obdržati ali jo želite očistiti?',
      'Keep': 'Obdrži',
      'Clean': 'Počisti',
      'Word Paste Detected': 'Zaznano je lepljenje s programa Word',
      // Character Counter
      'Characters': 'Število znakov',
      // Find and Replace
      'Find and Replace': 'Najdi in zamenjaj',
      'Find': 'Najdi',
      'Replace with': 'Zamenjaj z',
      'Replace All': 'Zamenjaj vse',
      'Advanced Options': 'Napredne možnosti',
      'Match case': 'Upoštevaj velike in male črke',
      'Whole words only': 'Samo cele besede',
      // More Buttons
      'More Text': 'Možnosti besedila',
      'More Paragraph': 'Možnosti odstavka',
      'More Rich': 'Več možnosti vstavljanja',
      'More Misc': 'Več možnosti',
      'Border': 'Obroba',
      // selector icon
      'Select Table': 'Izberi tabelo',
      'Drag Table': 'Povleci tabelo',
      'Select PageBreak': 'Izberi prelom strani',
      'Drag PageBreak': 'Povleci prelom strani',
      'Page Break': 'Prelom strani',
      //Link to anchor
      'Insert Anchor': 'Vstavi sidro',
      'There are no entries matching': 'Ni vnosov, ki bi ustrezali',
      'Update Anchor': 'Posodobi sidro',
      'Edit Anchor': 'Uredi sidro',
      'Anchor Name': 'Ime sidra',
      'Anchor Link': 'Povezava sidra',
      'Scroll to target': 'Pomakni se do cilja',
      'Enter the anchor name without space': 'Vnesite ime sidra brez presledkov',
      'Anchor name already exists.': 'Ime sidra že obstaja.',
      // Export to Word
      'Export to Word': 'Izvozi v Word',
      'Ensure that all required dependent libraries are available for the plugin to work.': 'Zagotovite, da so vse zahtevane odvisne knjižnice na voljo za delovanje vtičnika.',
      // Import_from_word
      'Import from Word': 'Uvoz iz Worda',
      'Please upload a valid file': 'Prosimo, naložite veljavno datoteko.',
      'File size must be less than': 'Velikost datoteke mora biti manjša od',
      //Code Snippet
      'Code Snippet': 'Odlomek Kode',
      'Insert Code Snippet': 'Vstavi odlomek kode',
      'Edit Code Snippet': 'Uredi odlomek kode'
    },
    direction: 'ltr'
  };

}));
//# sourceMappingURL=sl.js.map
