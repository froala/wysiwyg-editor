/*!
 * froala_editor v4.6.0 (https://www.froala.com/wysiwyg-editor)
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
   * Bosnian
   */
  FE.LANGUAGE['bs'] = {
    translation: {
      // Place holder
      'Type something': "Ukucajte ne\u0161tp",
      // Basic formatting
      'Bold': 'Bold',
      'Italic': 'Italic',
      'Underline': "Podvu\u010Deno",
      'Strikethrough': 'Precrtano',
      // Main buttons
      'Insert': 'Umetni',
      'Delete': "Obri\u0161i",
      'Cancel': "Otka\u017Ei",
      'OK': 'U redu',
      'Back': 'Natrag',
      'Remove': 'Ukloni',
      'More': "Vi\u0161e",
      'Update': "A\u017Euriranje",
      'Style': 'Stil',
      // Font
      'Font Family': 'Odaberi font',
      'Font Size': "Veli\u010Dina fonta",
      // Colors
      'Colors': 'Boje',
      'Background': 'Pozadine',
      'Text': 'Teksta',
      'HEX Color': 'Hex boje',
      // Paragraphs
      'Paragraph Format': 'Paragraf formatu',
      'Normal': 'Normalno',
      'Code': 'Izvorni kod',
      'Heading 1': 'Naslov 1',
      'Heading 2': 'Naslov 2',
      'Heading 3': 'Naslov 3',
      'Heading 4': 'Naslov 4',
      // Style
      'Paragraph Style': 'Paragraf stil',
      'Inline Style': 'Inline stil',
      // Alignment
      'Alignment': 'Poravnanje',
      'Align Left': 'Poravnaj lijevo',
      'Align Center': 'Poravnaj po sredini',
      'Align Right': 'Poravnaj desno',
      'Align Justify': 'Obostrano poravnanje',
      'None': 'Nijedan',
      // Lists
      'Ordered List': "Ure\u0111ena lista",
      'Unordered List': "Nesre\u0111ene lista",
      // Indent
      'Decrease Indent': 'Smanjenje alineja',
      'Increase Indent': "Pove\u0107anje alineja",
      // Links
      'Insert Link': 'Umetni link',
      'Open in new tab': 'Otvori u novom prozoru',
      'Open Link': 'Otvori link',
      'Edit Link': 'Uredi link',
      'Unlink': 'Ukloni link',
      'Choose Link': 'Izabrati link',
      // Images
      'Insert Image': 'Umetni sliku',
      'Upload Image': 'Upload sliku',
      'By URL': 'Preko URL',
      'Browse': 'Pregledaj',
      'Drop image': 'Izbaci sliku',
      'or click': 'ili odaberi',
      'Manage Images': 'Upravljanje ilustracijama',
      'Loading': 'Koji tovari',
      'Deleting': 'Brisanje',
      'Tags': 'Oznake',
      'Are you sure? Image will be deleted.': "Da li ste sigurni da \u017Eelite da obri\u0161ete ovu ilustraciju?",
      'Replace': 'Zamijenite',
      'Uploading': 'Uploading',
      'Loading image': 'Koji tovari sliku',
      'Display': 'Prikaz',
      'Inline': 'Inline',
      'Break Text': 'Break tekst',
      'Alternative Text': 'Alternativna tekst',
      'Change Size': "Promijeni veli\u010Dinu",
      'Width': "\u0161irina",
      'Height': 'Visina',
      'Something went wrong. Please try again.': "Ne\u0161to je po\u0161lo po zlu. Molimo vas da poku\u0161ate ponovo.",
      'Image Caption': 'Caption slika',
      'Advanced Edit': 'Napredna izmjena',
      // Video
      'Insert Video': 'Umetni video',
      'Embedded Code': 'Embedded kod',
      'Paste in a video URL': 'Nalepite u video url',
      'Drop video': 'Drop video',
      'Your browser does not support HTML5 video.': 'Vaš pretraživač ne podržava html5 video.',
      'Upload Video': 'Otpremite video',
      // Tables
      'Insert Table': 'Umetni tabelu',
      'Table Header': 'Tabelu zaglavlja',
      'Remove Table': 'Uklonite tabelu',
      'Table Style': 'Tabela stil',
      'Horizontal Align': 'Horizontalno poravnaj',
      'Row': 'Red',
      'Insert row above': 'Umetni red iznad',
      'Insert row below': 'Umetni red ispod',
      'Delete row': "Obri\u0161i red",
      'Column': 'Kolona',
      'Insert column before': 'Umetni kolonu prije',
      'Insert column after': 'Umetni kolonu poslije',
      'Delete column': "Obri\u0161i kolonu",
      'Cell': "\u0106elija",
      'Merge cells': "Spoji \u0107elija",
      'Horizontal split': 'Horizontalno razdvajanje polja',
      'Vertical split': 'Vertikalno razdvajanje polja',
      'Cell Background': "\u0106elija pozadini",
      'Vertical Align': 'Vertikalni poravnaj',
      'Top': 'Vrh',
      'Middle': 'Srednji',
      'Bottom': 'Dno',
      'Align Top': 'Poravnaj vrh',
      'Align Middle': 'Poravnaj srednji',
      'Align Bottom': 'Poravnaj dno',
      'Cell Style': "\u0106elija stil",
      // Files
      'Upload File': 'Upload datoteke',
      'Drop file': 'Drop datoteke',
      // Emoticons
      'Emoticons': 'Emotikona',
      'Grinning face': "Cere\u0107i lice",
      'Grinning face with smiling eyes': "Cere\u0107i lice nasmijana o\u010Dima",
      'Face with tears of joy': 'Lice sa suze radosnice',
      'Smiling face with open mouth': 'Nasmijana lica s otvorenih usta',
      'Smiling face with open mouth and smiling eyes': "Nasmijana lica s otvorenih usta i nasmijana o\u010Di",
      'Smiling face with open mouth and cold sweat': 'Nasmijana lica s otvorenih usta i hladan znoj',
      'Smiling face with open mouth and tightly-closed eyes': "Nasmijana lica s otvorenih usta i \u010Dvrsto-zatvorenih o\u010Diju",
      'Smiling face with halo': 'Nasmijana lica sa halo',
      'Smiling face with horns': 'Nasmijana lica s rogovima',
      'Winking face': 'Namigivanje lice',
      'Smiling face with smiling eyes': "Nasmijana lica sa nasmijana o\u010Dima",
      'Face savoring delicious food': "Suo\u010Davaju u\u017Eivaju\u0107i ukusna hrana",
      'Relieved face': 'Laknulo lice',
      'Smiling face with heart-shaped eyes': "Nasmijana lica sa obliku srca o\u010Di",
      'Smiling face with sunglasses': "Nasmijana lica sa sun\u010Dane nao\u010Dare",
      'Smirking face': "Namr\u0161tena lica",
      'Neutral face': 'Neutral lice',
      'Expressionless face': "Bezizra\u017Eajno lice",
      'Unamused face': 'Nije zabavno lice',
      'Face with cold sweat': 'Lice s hladnim znojem',
      'Pensive face': "Zami\u0161ljen lice",
      'Confused face': 'Zbunjen lice',
      'Confounded face': "Uzbu\u0111en lice",
      'Kissing face': 'Ljubakanje lice',
      'Face throwing a kiss': "Suo\u010Davaju bacanje poljubac",
      'Kissing face with smiling eyes': "Ljubljenje lice nasmijana o\u010Dima",
      'Kissing face with closed eyes': "Ljubljenje lice sa zatvorenim o\u010Dima",
      'Face with stuck out tongue': "Lice sa ispru\u017Eio jezik",
      'Face with stuck out tongue and winking eye': "Lice sa ispru\u017Eio jezik i trep\u0107u\u0107e \u0107e oko",
      'Face with stuck out tongue and tightly-closed eyes': "Lice sa ispru\u017Eio jezik i \u010Dvrsto zatvorene o\u010Di",
      'Disappointed face': "Razo\u010Daran lice",
      'Worried face': 'Zabrinuti lice',
      'Angry face': 'Ljut lice',
      'Pouting face': "Napu\u0107enim lice",
      'Crying face': 'Plakanje lice',
      'Persevering face': 'Istrajan lice',
      'Face with look of triumph': 'Lice s pogledom trijumfa',
      'Disappointed but relieved face': "Razo\u010Daran, ali olak\u0161anje lice",
      'Frowning face with open mouth': "Namr\u0161tiv\u0161i lice s otvorenih usta",
      'Anguished face': 'Bolnom lice',
      'Fearful face': "Pla\u0161ljiv lice",
      'Weary face': 'Umoran lice',
      'Sleepy face': 'Pospan lice',
      'Tired face': 'Umorno lice',
      'Grimacing face': 'Grimase lice',
      'Loudly crying face': "Glasno pla\u010De lice",
      'Face with open mouth': 'Lice s otvorenih usta',
      'Hushed face': 'Smiren lice',
      'Face with open mouth and cold sweat': 'Lice s otvorenih usta i hladan znoj',
      'Face screaming in fear': "Suo\u010Davaju vri\u0161ti u strahu",
      'Astonished face': 'Zapanjen lice',
      'Flushed face': 'Rumeno lice',
      'Sleeping face': 'Usnulo lice',
      'Dizzy face': "O\u0161amu\u0107en lice",
      'Face without mouth': 'Lice bez usta',
      'Face with medical mask': 'Lice sa medicinskom maskom',
      // Line breaker
      'Break': 'Slomiti',
      // Math
      'Subscript': 'Potpisan',
      'Superscript': 'Natpis',
      // Full screen
      'Fullscreen': 'Preko cijelog zaslona',
      // Horizontal line
      'Insert Horizontal Line': 'Umetni vodoravna liniju',
      // Clear formatting
      'Clear Formatting': 'Izbrisati formatiranje',
      // Save
      'Save': 'Spremi',
      // Undo, redo
      'Undo': 'Korak nazad',
      'Redo': 'Korak naprijed',
      // Select all
      'Select All': "Ozna\u010Di sve",
      // Code view
      'Code View': 'Kod pogled',
      // Quote
      'Quote': 'Citat',
      'Increase': "Pove\u0107ati",
      'Decrease': 'Smanjenje',
      // Quick Insert
      'Quick Insert': 'Brzo umetak',
      // Spcial Characters
      'Special Characters': 'Posebni znakovi',
      'Latin': 'Latin',
      'Greek': 'Greek',
      'Cyrillic': 'Ćirilično',
      'Punctuation': 'Interpunkcija',
      'Currency': 'Valuta',
      'Arrows': 'Strelice',
      'Math': 'Matematika',
      'Misc': 'Misc',
      // Print.
      'Print': 'Print',
      // Spell Checker.
      'Spell Checker': 'Proveru pravopisa',
      // Help
      'Help': 'Pomoć',
      'Shortcuts': 'Prečice',
      'Inline Editor': 'Inline editor',
      'Show the editor': 'Pokaži urednika',
      'Common actions': 'Zajedničke akcije',
      'Copy': 'Kopiraj',
      'Cut': 'Cut',
      'Paste': 'Paste',
      'Basic Formatting': 'Osnovno oblikovanje',
      'Increase quote level': 'Povećati cijeni',
      'Decrease quote level': 'Smanjiti nivo ponude',
      'Image / Video': 'Slika / video',
      'Resize larger': 'Veće veličine',
      'Resize smaller': 'Manja promjena veličine',
      'Table': 'Stol',
      'Select table cell': 'Izaberite ćeliju tablice',
      'Extend selection one cell': 'Produžiti izbor jedne ćelije',
      'Extend selection one row': 'Produžiti izbor jedan red',
      'Navigation': 'Navigacija',
      'Focus popup / toolbar': 'Focus popup / toolbar',
      'Return focus to previous position': 'Vratite fokus na prethodnu poziciju',
      // Embed.ly
      'Embed URL': 'Ugraditi url',
      'Paste in a URL to embed': 'Paste u URL adresu za ugradnju',
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': 'Nalepeni sadržaj dolazi iz Microsoft Word dokumenta. da li želite da zadržite format ili da ga očistite?',
      'Keep': 'Zadržati',
      'Clean': 'Čist',
      'Word Paste Detected': 'Otkrivena je slovna reč',
      // Character Counter
      'Characters': 'znakova',
      // More Buttons
      'More Text': 'Još teksta',
      'More Paragraph': 'Još paragraf',
      'More Rich': 'More Rich',
      'More Misc': 'More Misc'
    },
    direction: 'ltr'
  };

})));
//# sourceMappingURL=bs.js.map
