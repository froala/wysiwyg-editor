declare module "froala-editor" {
  export default class FroalaEditor {
    constructor(element: any, options: Partial<FroalaOptions>, fun?: (this: FroalaEditor) => any);
    $oel: any;
    $el: any;
    $tb: any;
    $box: any;
    $wp: any;
    $doc: any;
    $sc: any;
    $second_tb: any;
    $tooltip: any;
    el: any;
    static ID: number;
    static XS: number;
    static SM: number;
    static MD: number;
    static LG: number;
    static MARKERS: string; 
    static ENTER_BR: ENTER_BR;
    static ENTER_P: ENTER_P;
    static ENTER_DIV: ENTER_DIV;
    static KEYCODE: keycodeParameters;
    static COMMANDS: Partial<commandsInterface>;
    destroy(): object;
    opts: FroalaOptions;
    align: Align;
    button: Button;
    charCounter: CharCounter;
    wordCounter: WordCounter;
    clean: Clean;
    codeView: CodeView;
    colors: Colors;
    commands: Commands;
    core: Core;
    cursor: Cursor;
    edit: Edit;
    editInPopup: EditInPopup;
    embedly: Embedly;
    emoticons: Emoticons;
    events: Events;
    file: File;
    findReplace: FindReplace;
    fontFamily: FontFamily;
    fontSize: FontSize;
    format: Format;
    forms: Forms;
    fullscreen: Fullscreen;
    helpers: Helpers;
    html: HTML;
    image: Image;
    inlineClass: InlineClass;
    inlineStyle: InlineStyle;
    keys: Keys;
    language: Language;
    lineHeight: LineHeight;
    link: Link;
    lists: Lists;
    markers: Markers;
    markdown: Markdown;
    modals: Modals;
    node: Node;
    paragraphFormat: ParagraphFormat;
    paragraphStyle: ParagraphStyle;
    placeholder: Placeholder;
    popups: Popups;
    position: Position;
    quote: Apply<string>;
    save: Save;
    selection: FroalaSelection;
    size: Size;
    snapshot: Snapshot;
    spellChecker: SpellChecker;
    table: Table;
    toolbar: Toolbar;
    tooltip: Tooltip;
    undo: Undo;
    video: Video;
    filesManager: FilesManager;
    imageManager: ImageManager;
    trim_video: Trim_video;
    track_changes: Track_Changes;
    special_characters: Special_characters;
    word_paste: Word_paste;
    refresh: Refresh;
    shortcuts: Shortcuts;
    static DefineIcon: (name: string, parameters: Partial<DefineIconParameters>) => object;
    static RegisterCommand: (name: string, parameters: Partial<RegisterCommandParameters>) => void;
    static RegisterShortcut: (keyCode: number,
      command: string,
      commandValue: any,
      shortcutLetter?: string,
      shiftKeyRequired?: boolean,
      optionKeyRequired?: boolean
    ) => void;
    static RegisterTemplate: (name: string, template: string) => void;
    static RegisterQuickInsertButton: (name: string, parameters: object) => void;
    static DefineIconTemplate: (name: string, template: string) => void;
    static ICON_DEFAULT_TEMPLATE: string;
    static ICON_TEMPLATES: Partial<iconTemplates>;
    static DEFAULTS: Partial<FroalaOptions> | { [key: string]: any };
    static PLUGINS: (GenericObject<(editor: FroalaEditor) => CustomPlugin>) | any;
    static MODULES: any | { [key: string]: any | { [key: string]: any } };
    static BLOCK_TAGS: string[];
    static END_MARKER: string;
    static FILEICONS: Partial<fileIcons>;
    static HAIR_SPACE: string;
    static HTML5Map: {B: string, I: string, STRIKE: string};
    static ICONS: Partial<icons>;
    static INSTANCES: FroalaEditor[];
    static INVISIBLE_SPACE: string;
    static LANGUAGE: Languages;
    static EXTERNAL_COMMANDS: any;
    static MAIL_REGEX: RegExp;
    static NO_DELETE_TAGS: string[];
    static OPTS_MAPPING: object;
    static POPUP_TEMPLATES: { [key: string]: any};
    static POWERED_BY: string;
    static SHARED: object;
    static SHORTCUTS_MAP: object;
    static SIMPLE_ENTER_TAGS: string[];
    static START_MARKER: string;
    static SVG: Partial<svg>;
    static UNICODE_NBSP: string;
    static VOID_ELEMENTS: string[];
    static TOOLBAR_BUTTONS: Partial<ToolbarButtons>;
    static TOOLBAR_BUTTONS_MD: any;
    static TOOLBAR_BUTTONS_SM: Partial<ToolbarButtons>;
    static TOOLBAR_BUTTONS_XS: Partial<ToolbarButtons>;
    static TOOLBAR_VISIBLE_BUTTONS: number;
    static VERSION: string;
    static IMAGE_ALLOW_REGEX: RegExp;
    static VIDEO_EMBED_REGEX: RegExp;
    static IMAGE_EMBED_REGEX: RegExp;
    static IMAGE_TYPE: string;
    static VIDEO_PROVIDERS: object[];
    static URLRegEx: string;
    static LinkRegEx: string;
    static QUICK_INSERT_BUTTONS: object;
    LinkProtocols: string[];
    LinkRegEx: string;
    LinkRegExAuth: string;
    LinkRegExCommon: string;
    LinkRegExEnd: string;
    LinkRegExHTTP: string;
    LinkRegExTLD: string;
    LinkRegExWWW: string;
    icon: Icon;
    accessibility: Accessibility;
    [key: string]: any;
    static [key: string]: any;
  }

  export type GenericObject<T = any> = { [key: string]: T };

  export interface DefineIconParameters {
      /**
       * Template to be used to resolve the icon. Default is font_awesome.
       * The values passed from DefineIconParameters will be injected into this templates html via parameter expansion.
       */
      template: string;

      /**
       * Default parameters available. Refer to ICON_TEMPLATES for more info.
       */
      NAME: string;
      SRC: string;
      ALT: string;
      FA5NAME: string;
      SVG_KEY: string;
      [key: string]: any;
  }

  export interface RegisterCommandParameters {
      type: string;
      // Button title.
      title: string;

      // Specify the icon for the button.
      // If this option is not specified, the button name will be used.
      icon: string;

      // Save the button action into undo stack.
      undo: boolean;

      // Focus inside the editor before the callback.
      focus: boolean;

      // Show the button on mobile or not.
      showOnMobile: boolean;

      // Refresh the buttons state after the callback.
      refreshAfterCallback: boolean;

      // Called when the button is hit.
      // The current context is the editor instance.
      callback: (this: FroalaEditor, buttonName: string, val?: any, params?: any) => void;

      // Called when the button state might have changed.
      refresh: (this: FroalaEditor, button: any) => void;
      refreshOnShow: (this: FroalaEditor, $btn: any, $dropdown: any) => void;
      plugin: string;
      popup: boolean;
      popups: any;
      customPlugin: any;
      toggle: boolean;
      [key: string]: any;
  }

  export interface iconTemplates {
      font_awesome: string,
      font_awesome_5: string,
      font_awesome_5r: string,
      font_awesome_5l: string,
      font_awesome_5b: string,
      text: string,
      image: string,
      svg: string,
      empty: string,
      [key: string]: string
  }

  export interface fileIcons{
      docIcon: {
        extension: string,
        path: string
      },
      gifIcon: {
        extension: string,
        path: string
      },
      jpegIcon: {
        extension: string,
        path: string
      },
      logIcon: {
        extension: string,
        path: string
      },
      movIcon: {
        extension: string,
        path: string
      },
      ogvIcon: {
        extension: string,
        path: string
      },
      pngIcon: {
        extension: string,
        path: string
      },
      txtIcon: {
        extension: string,
        path: string
      },
      webmIcon: {
        extension: string,
        path: string
      },
      webpIcon: {
        extension: string,
        path: string
      },
      wmvIcon: {
        extension: string,
        path: string
      },
      xlsIcon: {
        extension: string,
        path: string
      },
    
      xlsxIcon: {
        extension: string,
        path: string
      },
      zipIcon: {
        extension: string,
        path: string
      },
      docxIcon: {
        extension: string,
        path: string
      },
      jpgIcon: {
        extension: string,
        path: string
      },
      mp3Icon: {
        extension: string,
        path: string
      },
      mp4Icon: {
        extension: string,
        path: string
      },
      oggIcon: {
        extension: string,
        path: string
      },
      pdfIcon: {
        extension: string,
        path: string
      },
      defaultIcon: {
        extension: string,
        path: string
      },
      [key: string]: { extension?: string, path?: string | RegExp }
  }

  export interface icons{
      bold: {
        NAME: string,
        SVG_KEY: string
      },
      italic: {
        NAME: string,
        SVG_KEY: string
      },
      underline: {
        NAME: string,
        SVG_KEY: string
      },
      strikeThrough: {
        NAME: string,
        SVG_KEY: string
      },
      subscript: {
        NAME: string,
        SVG_KEY: string
      },
      superscript: {
        NAME: string,
        SVG_KEY: string
      },
      cancel: {
        NAME: string,
        SVG_KEY: string
      },
      color: {
        NAME: string,
        SVG_KEY: string
      },
      outdent: {
        NAME: string,
        SVG_KEY: string
      },
      indent: {
        NAME: string,
        SVG_KEY: string
      },
      undo: {
        NAME: string,
        FA5NAME: string,
        SVG_KEY: string
      },
      redo: {
        NAME: string,
        FA5NAME: string,
        SVG_KEY: string
      },
    
      insert: {
        NAME: string,
        SVG_KEY: string
      },
      insertAll: {
        NAME: string,
        SVG_KEY: string
      },
      insertHR: {
        NAME: string,
        SVG_KEY: string
      },
      clearFormatting: {
        NAME: string,
        SVG_KEY: string
      },
      selectAll: {
        NAME: string,
        SVG_KEY: string
      },
      minimize: {
        NAME: string,
        SVG_KEY: string
      },
      moreText: {
        NAME: string,
        SVG_KEY: string
      },
      moreParagraph: {
        NAME: string,
        SVG_KEY: string
      },
      moreRich: {
        NAME: string,
        SVG_KEY: string
      },
      moreMisc: {
        NAME: string,
        SVG_KEY: string
      },
      [key: string]: {  
          NAME: string,
          SVG_KEY: string,
          FA5NAME?: string
      }
  }

  export interface Languages {
    ar: languageParameters;
    bs: languageParameters;
    cs: languageParameters;
    da: languageParameters;
    de: languageParameters;
    el: languageParameters;
    en_ca: languageParameters;
    en_gb: languageParameters;
    es: languageParameters;
    et: languageParameters;
    fa: languageParameters;
    fi: languageParameters;
    fr: languageParameters;
    he: languageParameters;
    hr: languageParameters;
    hu: languageParameters;
    id: languageParameters;
    it: languageParameters;
    ja: languageParameters;
    ko: languageParameters;
    ku: languageParameters;
    me: languageParameters;
    nb: languageParameters;
    nl: languageParameters;
    pl: languageParameters;
    pt_br: languageParameters;
    pt_pt: languageParameters;
    ro: languageParameters;
    ru: languageParameters;
    sk: languageParameters;
    sl: languageParameters;
    sr: languageParameters;
    sv: languageParameters;
    th: languageParameters;
    tr: languageParameters;
    uk: languageParameters;
    vi: languageParameters;
    zh_cn: languageParameters;
    zh_tw: languageParameters;
    [key: string]: any;
  }

  export interface languageParameters {
    translation: {
      'Type something': string,

      // Basic formatting
      'Bold': string,
      'Italic': string,
      'Underline': string,
      'Strikethrough': string,

      // Main buttons
      'Insert': string,
      'Delete': string,
      'Cancel': string,
      'OK': string,
      'Back': string,
      'Remove': string,
      'More': string,
      'Update': string,
      'Style': string,

      // Font
      'Font Family': string,
      'Font Size': string,

      // Colors
      'Colors': string,
      'Background': string,
      'Text': string,
      'HEX Color': string,

      // Paragraphs
      'Paragraph Format': string,
      'Normal': string,
      'Code': string,
      'Heading 1': string,
      'Heading 2': string,
      'Heading 3': string,
      'Heading 4': string,

      // Style
      'Paragraph Style': string,
      'Inline Style': string,

      // Alignment
      'Align': string,
      'Align Left': string,
      'Align Center': string,
      'Align Right': string,
      'Align Justify': string,
      'None': string,

      // Lists
      'Ordered List': string,
      'Unordered List': string,

      // Indent
      'Decrease Indent': string,
      'Increase Indent': string,

      // Links
      'Insert Link': string,
      'Open in new tab': string,
      'Open Link': string,
      'Edit Link': string,
      'Unlink': string,
      'Choose Link': string,

      // Images
      'Insert Image': string,
      'Upload Image': string,
      'By URL': string,
      'Browse': string,
      'Drop image': string,
      'or click': string,
      'Manage Images': string,
      'Loading': string,
      'Deleting': string,
      'Tags': string,
      'Are you sure? Image will be deleted.': string,
      'Replace': string,
      'Uploading': string,
      'Loading image': string,
      'Display': string,
      'Inline': string,
      'Break Text': string,
      'Alternative Text': string,
      'Change Size': string,
      'Width': string,
      'Height': string,
      'Something went wrong. Please try again.': string,
      'Image Caption': string,
      'Advanced Edit': string,

      // Video
      'Insert Video': string,
      'Embedded Code': string,
      'Paste in a video URL': string,
      'Drop video': string,
      'Your browser does not support HTML5 video.': string,
      'Upload Video': string,

      // Tables
      'Insert Table': string,
      'Table Header': string,
      'Remove Table': string,
      'Table Style': string,
      'Horizontal Align': string,
      'Row': string,
      'Insert row above': string,
      'Insert row below': string,
      'Delete row': string,
      'Column': string,
      'Insert column before': string,
      'Insert column after': string,
      'Delete column': string,
      'Cell': string,
      'Merge cells': string,
      'Horizontal split': string,
      'Vertical split': string,
      'Cell Background': string,
      'Vertical Align': string,
      'Top': string,
      'Middle': string,
      'Bottom': string,
      'Align Top': string,
      'Align Middle': string,
      'Align Bottom': string,
      'Cell Style': string,

      // Files
      'Upload File': string,
      'Drop file': string,

      // Emoticons
      'Emoticons': string,
      'Grinning face': string,
      'Grinning face with smiling eyes': string,
      'Face with tears of joy': string,
      'Smiling face with open mouth': string,
      'Smiling face with open mouth and smiling eyes': string,
      'Smiling face with open mouth and cold sweat': string,
      'Smiling face with open mouth and tightly-closed eyes': string,
      'Smiling face with halo': string,
      'Smiling face with horns': string,
      'Winking face': string,
      'Smiling face with smiling eyes': string,
      'Face savoring delicious food': string,
      'Relieved face': string,
      'Smiling face with heart-shaped eyes': string,
      'Smiling face with sunglasses': string,
      'Smirking face': string,
      'Neutral face': string,
      'Expressionless face': string,
      'Unamused face': string,
      'Face with cold sweat': string,
      'Pensive face': string,
      'Confused face': string,
      'Confounded face': string,
      'Kissing face': string,
      'Face throwing a kiss': string,
      'Kissing face with smiling eyes': string,
      'Kissing face with closed eyes': string,
      'Face with stuck out tongue': string,
      'Face with stuck out tongue and winking eye': string,
      'Face with stuck out tongue and tightly-closed eyes': string,
      'Disappointed face': string,
      'Worried face': string,
      'Angry face': string,
      'Pouting face': string,
      'Crying face': string,
      'Persevering face': string,
      'Face with look of triumph': string,
      'Disappointed but relieved face': string,
      'Frowning face with open mouth': string,
      'Anguished face': string,
      'Fearful face': string,
      'Weary face': string,
      'Sleepy face': string,
      'Tired face': string,
      'Grimacing face': string,
      'Loudly crying face': string,
      'Face with open mouth': string,
      'Hushed face': string,
      'Face with open mouth and cold sweat': string,
      'Face screaming in fear': string,
      'Astonished face': string,
      'Flushed face': string,
      'Sleeping face': string,
      'Dizzy face': string,
      'Face without mouth': string,
      'Face with medical mask': string,

      // Line breaker
      'Break': string,

      // Math
      'Subscript': string,
      'Superscript': string,

      // Full screen
      'Fullscreen': string,

      // Horizontal line
      'Insert Horizontal Line': string,

      // Clear formatting
      'Clear Formatting': string,

      // Save
      'Save': string,

      // Undo, redo
      'Undo': string,
      'Redo': string,

      // Select all
      'Select All': string,

      // Code view
      'Code View': string,

      // Quote
      'Quote': string,
      'Increase': string,
      'Decrease': string,

      // Quick Insert
      'Quick Insert': string,

      // Spcial Characters
      'Special Characters': string,
      'Latin': string,
      'Greek': string,
      'Cyrillic': string,
      'Punctuation': string,
      'Currency': string,
      'Arrows': string,
      'Math': string,
      'Misc': string,

      // Print.
      'Print': string,

      // Spell Checker.
      'Spell Checker': string,

      // Help
      'Help': string,
      'Shortcuts': string,
      'Inline Editor': string,
      'Show the editor': string,
      'Common actions': string,
      'Copy': string,
      'Cut': string,
      'Paste': string,
      'Basic Formatting': string,
      'Increase quote level': string,
      'Decrease quote level': string,
      'Image / Video': string,
      'Resize larger': string,
      'Resize smaller': string,
      'Table': string,
      'Select table cell': string,
      'Extend selection one cell': string,
      'Extend selection one row': string,
      'Navigation': string,
      'Focus popup / toolbar': string,
      'Return focus to previous position': string,

      // Embed.ly
      'Embed URL': string,
      'Paste in a URL to embed': string,

      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': string,
      'Keep': string,
      'Clean': string,
      'Word Paste Detected': string,

      // Character Counter
      'Characters': string,
    
      // More Buttons
      'More Text': string,
      'More Paragraph': string,
      'More Rich': string,
      'More Misc': string,

      'Rounded': string,
      'Bordered': string,
      'Shadow': string,
      'Download PDF': string,
      'Text Color': string,
      'Background Color': string,
      'Inline Class': string,
      'Highlighted': string,
      'Transparent': string,
      'Big Red': string,
      'Small Blue': string,
      'Default': string,
      'Lower Alpha': string,
      'Lower Greek': string,
      'Lower Roman': string,
      'Upper Alpha': string,
      'Upper Roman': string,
      'Circle': string,
      'Disc': string,
      'Square': string,
      'Gray': string,
      'Spaced': string,
      'Uppercase': string,
      'Line Height': string,
      'Single': string,
      'Double': string,
      [key: string]: string,
      },
      direction: string;
      [key: string]: any
  }

  export interface keycodeParameters {
      BACKSPACE: number,
      TAB: number,
      ENTER: number,
      SHIFT: number,
      CTRL: number,
      ALT: number,
      ESC: number,
      SPACE: number,
      ARROW_LEFT: number,
      ARROW_UP: number,
      ARROW_RIGHT: number,
      ARROW_DOWN: number,
      DELETE: number,
      ZERO: number,
      ONE: number,
      TWO: number,
      THREE: number,
      FOUR: number,
      FIVE: number,
      SIX: number,
      SEVEN: number,
      EIGHT: number,
      NINE: number,
      FF_SEMICOLON: number, 
      FF_EQUALS: number, 
      QUESTION_MARK: number, 
      A: number,
      B: number,
      C: number,
      D: number,
      E: number,
      F: number,
      G: number,
      H: number,
      I: number,
      J: number,
      K: number,
      L: number,
      M: number,
      N: number,
      O: number,
      P: number,
      Q: number,
      R: number,
      S: number,
      T: number,
      U: number,
      V: number,
      W: number,
      X: number,
      Y: number,
      Z: number,
      META: number,
      NUM_ZERO: number,
      NUM_ONE: number,
      NUM_TWO: number,
      NUM_THREE: number,
      NUM_FOUR: number,
      NUM_FIVE: number,
      NUM_SIX: number,
      NUM_SEVEN: number,
      NUM_EIGHT: number,
      NUM_NINE: number,
      NUM_MULTIPLY: number,
      NUM_PLUS: number,
      NUM_MINUS: number,
      NUM_PERIOD: number,
      NUM_DIVISION: number,
      F1: number,
      F2: number,
      F3: number,
      F4: number,
      F5: number,
      F6: number,
      F7: number,
      F8: number,
      F9: number,
      F10: number,
      F11: number,
      F12: number,
      FF_HYPHEN: number, 
      SEMICOLON: number, 
      DASH: number, 
      EQUALS: number, 
      COMMA: number, 
      HYPHEN: number, 
      PERIOD: number, 
      SLASH: number, 
      APOSTROPHE: number, 
      TILDE: number, 
      SINGLE_QUOTE: number, 
      OPEN_SQUARE_BRACKET: number, 
      BACKSLASH: number, 
      CLOSE_SQUARE_BRACKET: number, 
      IME: number    
  }

  export interface svg {
      add: string,
      advancedImageEditor: string,
      alignCenter: string,
      alignJustify: string,
      alignLeft: string,
      alignRight: string,
      anchors: string,
      autoplay: string,
      back: string,
      backgroundColor: string,
      blockquote: string,
      bold: string,
      cancel: string,
      cellBackground: string,
      cellBorderColor: string,
      cellOptions: string,
      cellStyle: string,
      clearFormatting: string,
      close: string,
      codeView: string,
      cogs: string,
      columns: string,
      edit: string,
      exitFullscreen: string,
      fileInsert: string,
      fileManager: string,
      markdown: string,
      fontAwesome: string,
      fontFamily: string,
      fontSize: string,
      fullscreen: string,
      help: string,
      horizontalLine: string,
      imageAltText: string,
      imageCaption: string,
      imageClass: string,
      imageDisplay: string,
      imageManager: string,
      imageSize: string,
      indent: string,
      inlineClass: string,
      inlineStyle: string,
      insert: string,
      insertEmbed: string,
      insertFile: string,
      insertImage: string
      insertLink: string,
      insertMore: string,
      insertTable: string,
      insertVideo: string,
      upload: string,
      uploadFiles: string,
      italic: string,
      search: string,
      lineHeight: string,
      linkStyles: string,
      mention: string,
      minimize: string,
      more: string,
      openLink: string,
      orderedList: string,
      outdent: string,
      pageBreaker: string,
      paragraphFormat: string,
      paragraphMore: string,
      paragraphStyle: string,
      pdfExport: string,
      print: string,
      redo: string,
      removeTable: string,
      insertAll: string,
      remove: string,
      replaceImage: string,
      row: string,
      selectAll: string,
      smile: string,
      spellcheck: string,
      star: string,
      strikeThrough: string,
      subscript: string,
      superscript: string,
      symbols: string,
      tags: string,
      tableHeader: string,
      tableFooter: string,
      tableStyle: string,
      textColor: string,
      textMore: string,
      underline: string,
      undo: string,
      unlink: string,
      unorderedList: string,
      verticalAlignBottom: string,
      verticalAlignMiddle: string,
      verticalAlignTop: string,
      trackChanges: string,
      showTrackChanges: string,
      acceptAllChanges: string,
      rejectAllChanges: string,
      acceptSingleChange: string,
      rejectSingleChange: string,
      [key: string]: string
  }
  

  export interface commandsInterface
  {
      align:Align;
      bold: {
      title: string,
      toggle: boolean,
      refresh($btn: any): void
      },
      italic: {
      title: string,
      toggle: boolean,
      refresh($btn: any): void
      },
      underline: {
      title: string,
      toggle: boolean,
      refresh($btn: any): void
      },
      strikeThrough: {
      title: string,
      toggle: boolean,
      refresh($btn: any): void
      },
      subscript: {
      title: string,
      toggle: boolean,
      refresh($btn: any): void
      },
      superscript: {
      title: string,
      toggle: boolean,
      refresh($btn: any): void
      },
      outdent: {
      title: string
      },
      indent: {
      title: string
      },
      undo: {
      title: string,
      undo: boolean,
      forcedRefresh: boolean,
      disabled: boolean
      },
      redo: {
      title: string,
      undo: boolean,
      forcedRefresh: boolean,
      disabled: boolean
      },
      insertHR: {
      title: string
      },
      clearFormatting: {
      title: string
      },
      selectAll: {
      title: string,
      undo: boolean
      },
      moreText: {
      title: string,
      undo: boolean
      },
      moreParagraph: {
      title: string,
      undo: boolean
      },
      moreRich: {
      title: string,
      undo: boolean
      },
      moreMisc: {
      title: string,
      undo: boolean
      }
  }


  export interface ToolbarButtons {
      'moreText': {
        'buttons': string[],
         [key: string]: any
      },
      'moreParagraph': {
        'buttons': string[],
        [key: string]: any
      },
      'moreRich': {
        'buttons': string[],
        'buttonsVisible': number,
        [key: string]: any
      },
      'moreMisc': {
        'buttons': string[],
        'align': string,
        'buttonsVisible': number,
        [key: string]: any
      },
      'trackChanges': {
        'buttons': string[],
        'buttonsVisible': number,
        [key: string]: any
      },
      [key: string]: {
        buttons: string[];
        align?: string;
        buttonsVisible?: number;
        [key: string]: any
      };
  }

  export interface CustomPlugin {
    [key: string]: any | { [key: string]: any; };
   
  } 
  
  export interface EmoticonSet {
    id: string;
    code: string;
    name: string;
    emoticons:{
      code: string;
      desc: string;
    }[];
  }

  export type DeleteMethod = 'POST' | 'DELETE';
  export type GetMethod = 'POST' | 'GET';

  export type ENTER_BR = number;
  export type ENTER_P = number;
  export type ENTER_DIV = number;

  export interface SpecialCharacterSet {
    title: string;
    char?: string;
    list: {
      char: string;
      desc: string;
    }[];
  }

  export type LineHeightObj = {
    label: string;
    value: number;
  }

  export interface FroalaOptions {
    // apiKey
    apiKey: string;

    // app
    app: string;

    //codoxOptions
    codoxOptions: object;

    //docId
    docId: string;

    //filesManagerAllowedTypes
    filesManagerAllowedTypes: string[];

    //filesManagerMaxSize
    filesManagerMaxSize: number;

    //filesManagerUploadParams
    filesManagerUploadParams: GenericObject;

    //filesManagerUploadToS3
    filesManagerUploadToS3: object;

    //filesManagerUploadURL
    filesManagerUploadURL: string;

    //editor
    editor: FroalaEditor;

    //username
    username: string;

    // Aviary Editor
    aviaryKey: boolean;
    aviaryOptions: { [key: string]: any };

    // Char Counter
    charCounterCount: boolean;
    charCounterMax: number;

    // Word Counter
    wordCounterCount: boolean;
    wordCounterMax: number;

    // Code Beautifier
    codeBeautifierOptions: Object;

    // Code View
    codeMirror: any;
    codeMirrorOptions: object; 
    codeViewKeepActiveButtons: string[];

    // Colors
    colorsBackground: string[];
    colorsButtons: string[];
    colorsHEXInput: boolean;
    colorsStep: number;
    colorsText: string[];

    // Draggable
    dragInline: boolean;

    // Events
    events: Partial<FroalaEvents>;

    // Embedly
    embedlyEditButtons: string[];
    embedlyInsertButtons: string[];
    embedlyKey: string;
    embedlyScriptPath: string;

    // Emoticons
    emoticonsButtons: string[];
    emoticonsSet: EmoticonSet[];
    emoticonsStep: number;
    emoticonsUseImage: boolean;

    // Entities
    entities: string;

    // File
    fileAllowedTypes: string[];
    fileInsertButtons: string[];
    fileMaxSize: number;
    fileUpload: boolean;
    fileUploadMethod: string; 
    fileUploadParam: string;
    fileUploadParams: object;
    fileUploadToS3: object;
    fileUploadURL: string;
    fileUseSelectedText: boolean;

    // Font Family
    fontFamily: GenericObject; 
    fontFamilyDefaultSelection: string;
    fontFamilySelection: boolean;

    // Font Size
    fontSize: string[];
    fontSizeDefaultSelection: string;
    fontSizeSelection: boolean;
    fontSizeUnit: string;

    // Form
    formEditButtons: string[];
    formMultipleStyles: boolean;
    formStyles: GenericObject; 
    formUpdateButtons: string[];

    // Licensing
    key: string;

    // General
    allowStylingOnNonEditable : boolean;
    attribution: boolean;
    autoStart: boolean;
    autofocus: boolean;
    direction: string; 
    disableRightClick: boolean;
    documentReady: boolean;
    editInPopup: boolean;
    enableMatchCase: boolean;
    enableMatchWholeWord: boolean;
    update: void;
    editorClass: string;
    enter: ENTER_BR | ENTER_P | ENTER_DIV;
    fullPage: boolean;
    height: number | string;
    heightMax: number | string;
    heightMin: number | string;
    htmlAllowComments: boolean;
    htmlAllowedAttrs: string[];
    htmlAllowedEmptyTags: string[];
    htmlAllowedStyleProps: string[];
    htmlAllowedTags: string[];
    htmlDoNotWrapTags: string[];
    htmlExecuteScripts: boolean;
    htmlIgnoreCSSProperties: string[];
    htmlRemoveTags: string[];
    htmlSimpleAmpersand: boolean;
    htmlUntouched: boolean;
    iconsTemplate: string;
    iframe: boolean;
    iframeDefaultStyle: string;
    iframeStyle: string;
    iframeStyleFiles: string[];
    indentMargin: number;
    initOnClick: boolean;
    keepFormatOnDelete: boolean;
    multiLine: boolean;
    preserveTabSpaces: boolean;
    pasteAllowLocalImages: boolean;
    pasteAllowedStyleProps: string[];
    pasteDeniedAttrs: string[];
    pasteDeniedTags: string[];
    pastePlain: boolean;
    placeholderText: string;
    pluginsEnabled: string[];
    pluginsDisabled: string[];
    popupButtons: string[];
    requestHeaders: GenericObject<string>; 
    requestWithCORS: boolean;
    requestWithCredentials: boolean;
    scrollableContainer: string;
    shortcutsEnabled: string[];
    shortcutsHint: boolean;
    showFindAndReplace: boolean;
    spellcheck: boolean;
    tabIndex: number;
    tabSpaces: number;
    theme: string;
    toolbarBottom: boolean;
    toolbarButtons: object;
    toolbarButtonsMD: Partial<ToolbarButtons>; 
    toolbarButtonsSM: Partial<ToolbarButtons>; 
    toolbarButtonsXS: Partial<ToolbarButtons>; 
    toolbarContainer: string; 
    toolbarInline: boolean;
    toolbarSticky: boolean;
    toolbarStickyOffset: number;
    toolbarVisibleWithoutSelection: boolean;
    tooltips: boolean;
    typingTimer: number;
    useClasses: boolean;
    width: string;
    zIndex: number;

    // Help
    helpSets: object[];

    // Image
    imageAddNewLine: boolean;
    imageAllowedTypes: string[];
    imageAltButtons: string[];
    imageCORSProxy: string;
    imageDefaultAlign: MediaAlign; 
    imageDefaultDisplay: DisplayType; 
    imageDefaultMargin: number;
    imageDefaultWidth: number;
    imageEditButtons: string[];
    imageInsertButtons: string[];
    imageMaxSize: number;
    imageMinWidth: number;
    imageMove: boolean;
    imageMultipleStyles: boolean;
    imageOutputSize: boolean;
    imagePaste: boolean;
    imagePasteProcess: boolean;
    imageResize: boolean;
    imageResizeWithPercent: boolean;
    imageRoundPercent: boolean;
    imageSizeButtons: string[];
    imageSplitHTML: boolean;
    imageStyles: GenericObject<string>; 
    imageTUIOptions: object;
    imageTextNear: boolean;
    imageUpload: boolean;
    imageUploadMethod: string; 
    imageUploadParam: string;
    imageUploadParams: object;
    imageUploadRemoteUrls: boolean;
    imageUploadToS3: object;
    imageUploadURL: string;

    // Image Manager
    imageManagerDeleteMethod: DeleteMethod; 
    imageManagerDeleteParams: object;
    imageManagerDeleteURL: string;
    imageManagerLoadMethod: GetMethod; 
    imageManagerLoadParams: object;
    imageManagerLoadURL: string;
    imageManagerPageSize: number;
    imageManagerPreloader: string;
    imageManagerScrollOffset: number;
    imageManagerToggleTags: boolean;

    // Inline Style
    inlineStyles: GenericObject<string>; 

    // Inline Class
    inlineClasses: GenericObject<string>; 

    // Language
    language: string;

    // Line Breaker
    lineBreakerHorizontalOffset: number;
    lineBreakerOffset: number;
    lineBreakerTags: string[];

    // Link
    linkAlwaysBlank: boolean;
    linkAlwaysNoFollow: boolean;
    linkAttributes: GenericObject; 
    linkAutoPrefix: string;
    linkConvertEmailAddress: boolean;
    linkEditButtons: string[];
    linkInsertButtons: string[];
    linkList: GenericObject<string>[]; 
    linkMultipleStyles: boolean;
    linkNoOpener: boolean;
    linkNoReferrer: boolean;
    linkStyles: GenericObject<string>; 
    linkText: boolean;

    // Paragraph Format
    lineHeights: GenericObject<string> | LineHeightObj[];
    paragraphDefaultSelection: string;
    paragraphFormat: GenericObject<string>;
    paragraphFormatSelection: boolean;
    paragraphMultipleStyles: boolean;
    paragraphStyles: GenericObject<string>;

    // Lists
    listAdvancedTypes: boolean;

    // Quick Insert
    quickInsertButtons: string[];
    quickInsertEnabled: boolean;
    quickInsertTags: string[];

    // Font Awesome
    faButtons: string[];
    fontAwesomeSets: object;
    fontAwesomeTemplate: string;

    // Special Characters
    specialCharButtons: string[];
    specialCharactersSets: SpecialCharacterSet[]; 

    // SCAYT Spell Checker
    scaytAutoload: boolean;
    scaytCustomerId: string;
    scaytOptions: object;

    // Save
    saveInterval: number;
    saveMethod: string; 
    saveParam: string;
    saveParams: object;
    saveURL: string;

    // Table
    tableCellMultipleStyles: boolean;
    tableCellStyles: GenericObject<string>; 
    tableColors: string[];
    tableColorsButtons: string[];
    tableColorsStep: number;
    tableDefaultWidth: string;
    tableEditButtons: string[];
    tableInsertButtons: string[];
    tableInsertHelper: boolean;
    tableInsertHelperOffset: number;
    tableInsertMaxSize: number;
    tableMultipleStyles: boolean;
    tableResizer: boolean;
    tableResizerOffset: number;
    tableResizingLimit: number;
    tableStyles: GenericObject<string>; 

    // Video
    videoAllowedProviders: string[];
    videoAllowedTypes: string[];
    videoDefaultAlign: string; 
    videoDefaultDisplay: string; 
    videoDefaultWidth: number;
    videoEditButtons: string[];
    videoInsertButtons: string[];
    videoMaxSize: number;
    videoMove: boolean;
    videoResize: boolean;
    videoResponsive: boolean;
    videoSizeButtons: string[]; 
    videoSplitHTML: boolean;
    videoTextNear: boolean;
    videoUpload: boolean;
    videoUploadMethod: string; 
    videoUploadParam: string;
    videoUploadParams: object;
    videoUploadToS3: object; 
    videoUploadURL: string;

    // Word
    wordAllowedStyleProps: string[];
    wordDeniedAttrs: string[];
    wordDeniedTags: string[];
    wordPasteKeepFormatting: boolean;
    wordPasteModal: boolean;

    showChangesEnabled: boolean;
    trackChangesEnabled: boolean;
    [key: string]: any;

    // Filestack
    filestackOptions: object;
  }

  export interface FroalaEvents {
    blur: (this: FroalaEditor) => void;
    click: (this: FroalaEditor, clickEvent: any) => void;
    contentChanged: (this: FroalaEditor) => void;
    destroy: (this: FroalaEditor) => void;
    drop: (this: FroalaEditor, dropEvent: any) => void;
    focus: (this: FroalaEditor) => void;
    initialized: (this: FroalaEditor) => void;
    initializationDelayed: (this: FroalaEditor) => void;
    input: (this: FroalaEditor, inputEvent: any) => void;
    keydown: (this: FroalaEditor, keydownEvent: any) => void;
    keypress: (this: FroalaEditor, keypressEvent: any) => void;
    keyup: (this: FroalaEditor, keyupEvent: any) => void;
    mousedown: (this: FroalaEditor, mousedownEvent: any) => void;
    mouseup: (this: FroalaEditor, mouseupEvent: any) => void;
    shortcut: (this: FroalaEditor, event: Event, commandName: string, shortcutValue: any) => void;
    touchstart: (this: FroalaEditor, touchstartEvent: any) => void;
    touchend: (this: FroalaEditor, touchendEvent: any) => void;
    'buttons.refresh': (this: FroalaEditor) => boolean;
    //character count event
    'charCounter.exceeded': (this: FroalaEditor) => void;
    'charCounter.update': (this: FroalaEditor) => void;
    //word count event
    'wordCounter.exceeded': (this: FroalaEditor) => void;
    'wordCounter.update': (this: FroalaEditor) => void;
    //code view event
    'codeView.update': (this: FroalaEditor) => void;
    //find and replace event
    'findandreplace.onReplaceAll': (this: FroalaEditor, replacements: Array<{ oldValue: string, newValue: string }>) => void;
    'findandreplace.onReplace': (this: FroalaEditor, oldValue: string, newValue: string) => void;
    'findandreplace.beforeClose': (this: FroalaEditor) => boolean;
    'findandreplace.beforeOnReplace': (this: FroalaEditor) => boolean;
    //commands event
    'commands.after': (this: FroalaEditor, cmd: any, param1?: any, param2?: any) => void;
    'commands.before': (this: FroalaEditor, cmd: any, param1?: any, param2?: any) => void;
    'commands.mousedown': (this: FroalaEditor, button: any) => void;
    'commands.redo': (this: FroalaEditor) => void;
    'commands.undo': (this: FroalaEditor) => void;
    //html event
    'html.afterGet': (this: FroalaEditor) => void;
    'html.beforeGet': (this: FroalaEditor) => void;
    'html.processGet': (this: FroalaEditor, el: Element) => void;
    'html.get': (this: FroalaEditor, html: HTMLElement) => void;
    'html.set': (this: FroalaEditor) => void;
    //image events
    'image.beforePasteUpload': (this: FroalaEditor, img: Image) => boolean;
    'image.beforeRemove': (this: FroalaEditor, img: any) => boolean;
    'image.beforeUpload': (this: FroalaEditor, files: any) => boolean;
    'image.hideResizer': (this: FroalaEditor, images: any) => boolean;
    'image.error': (this: FroalaEditor, error: object, response: any) => void;
    'image.inserted': (this: FroalaEditor, img: object, response: any) => void;
    'image.loaded': (this: FroalaEditor, img: object) => void;
    'image.removed': (this: FroalaEditor, img: object) => void;
    'image.replaced': (this: FroalaEditor, img: object, response: any) => void;
    'image.resize': (this: FroalaEditor, img: object) => void;
    'image.resizeEnd': (this: FroalaEditor, img: object) => void;
    'image.uploaded': (this: FroalaEditor, response: any) => boolean;
    'image.uploadedToS3': (this: FroalaEditor, link: URL, key: string, response: any) => void;
    'filestack.uploadedToFilestack': (this: FroalaEditor, response: any) => boolean;
    'filestack.uploadFailedToFilestack': (this: FroalaEditor, response: any) => boolean;
    'filestack.filestackPickerClosed': (this: FroalaEditor, response: any) => boolean;
    'filestack.filestackPickerOpened': (this: FroalaEditor, response: any) => boolean;
    //imagemanager event
    'imageManager.beforeDeleteImage': (this: FroalaEditor, img: object) => void;
    'imageManager.error': (this: FroalaEditor, error: object, response: any) => void;
    'imageManager.imageDeleted': (this: FroalaEditor, data: object) => void;
    'imageManager.imageLoaded': (this: FroalaEditor, img: object) => void;
    'imageManager.imagesLoaded': (this: FroalaEditor, data: any) => void;
    //link event
    'link.bad': (this: FroalaEditor, original_href: string) => void;
    'link.beforeInsert': (this: FroalaEditor, link: string, text: string, attrs: object) => boolean;
    'link.beforeRemove': (this: FroalaEditor, link: string, text: string, attrs: object) => boolean;
    //paste event
    'paste.after': (this: FroalaEditor) => void;
    'paste.afterCleanup': (this: FroalaEditor, clipboard_html: string) => void;
    'paste.before': (this: FroalaEditor, original_event: any, clipboard_data?: any) => boolean;
    'paste.beforeCleanup': (this: FroalaEditor, clipboard_html: string) => void;
    'paste.wordPaste': (this: FroalaEditor, clipboard_html: string) => void;
    // popups events
    [hidepopup: `popups.hide${string}`]: (this: FroalaEditor) => void;
    [showpopup: `popups.show${string}`]: (this: FroalaEditor) => void;
    //position event
    'position.refresh': (this: FroalaEditor) => void;
    //save event
    'save.after': (this: FroalaEditor, data: any) => void;
    'save.before': (this: FroalaEditor, html: string) => boolean;
    'save.error': (this: FroalaEditor, error: string, response: object) => void;
    //snapshot event
    'snapshot.after': (this: FroalaEditor) => void;
    'snapshot.before': (this: FroalaEditor) => void;
    //table event
    'table.inserted': (this: FroalaEditor, table: Element) => void;
    'table.resized': (this: FroalaEditor, table: Element) => void;
    //toolbar event
    'toolbar.esc': (this: FroalaEditor) => boolean;
    'toolbar.focusEditor': (this: FroalaEditor) => boolean;
    'toolbar.hide': (this: FroalaEditor) => boolean;
    'toolbar.show': (this: FroalaEditor) => boolean;
    //video event
    'video.codeError': (this: FroalaEditor, code: string) => void;
    'video.inserted': (this: FroalaEditor, $video: any) => void;
    'video.replaced': (this: FroalaEditor, $video: any) => void;
    'video.linkError': (this: FroalaEditor, link: string) => void;
    'video.removed': (this: FroalaEditor, $video: any) => void;
    'video.loaded': (this: FroalaEditor, $video: any) => void;
    'video.uploaded': (this: FroalaEditor, response: object) => void;
    'video.uploadedToS3': (this: FroalaEditor, link: string, key: string, response: object) => void;
    'video.beforeUpload': (this: FroalaEditor, $video: any) => boolean;
    'video.beforeRemove': (this: FroalaEditor, $video: any) => boolean;
    'video.hideResizer': (this: FroalaEditor) => boolean;
    //quick insert event
    'quickInsert.commands.after': (this: FroalaEditor, cmd: any) => void;
    'quickInsert.commands.before': (this: FroalaEditor, cmd: any) => boolean;
    //url event
    'url.linked': (this: FroalaEditor, link: string) => void;
    //window event
    'window.copy': (this: FroalaEditor) => void;
    'window.cut': (this: FroalaEditor) => void;
    //filemanager event
    'filesManager.beforeUpload': (this: FroalaEditor, files: any[]) => boolean;
    'filesManager.error': (this: FroalaEditor, error: object, response: object) => boolean;
    'filesManager.uploaded': (this: FroalaEditor, response: any) => boolean;
    'filesManager.uploadedToS3': (this: FroalaEditor, link: string, key: string, response: object) => boolean;
    //embedly event
    'embedly.beforeRemove': (this: FroalaEditor, embeded: object) => void;
    //file event
    'file.beforeUpload': (this: FroalaEditor, files: string) => boolean;
    'file.error': (this: FroalaEditor, error: object, response: any) => boolean;
    'file.inserted': (this: FroalaEditor, file: object, response: any) => void;
    'file.unlink': (this: FroalaEditor, link: Object) => boolean;
    'file.uploaded': (this: FroalaEditor, response: any) => boolean;
    'file.uploadedToS3': (this: FroalaEditor, link: any, key: any, response: any) => void;
    //edit event
    'edit.on': (this: FroalaEditor) => void;
    'edit.off': (this: FroalaEditor) => void;
    //element event
    'element.dropped': (this: FroalaEditor, element: object) => void;
    [key: string]: (this:FroalaEditor, ...args: any[]) => any;
  }

  export interface FilesManager {
    _init(): void;
    showInsertPopup(rerender: any): void;
    showLayer(name: any): void;
    refreshUploadButton(button: any): void;
    refreshByURLButton(button: any): void;
    upload(file: any, files: any, image_placeholder: any, index: any): boolean;
    insertByURL(): void;
    insertAllFiles(): void;
    deleteAllFiles(): void;
    get(): any;
    getEl(): any;
    insert(index: any, fileKeys: any): void;
    showProgressBar(no_message: any): void;
    remove(image: any): void;
    hideProgressBar(dismiss: any): void;
    applyStyle(val: any, imageStyles: any, multipleStyles: any): boolean;
    showAltPopup(): void;
    showSizePopup(): void;
    setAlt(alt: any): void;
    setSize(width: any, height: any): void;
    toggleCaption(): void;
    refreshEmbedButton($btn: any): void;
    insertEmbed(code: any): void;
    hasCaption(): boolean;
    exitEdit(force_exit: any): void;
    edit($img: any): void;
    cancelFileInsert(): void;
    minimizePopup(current_index: any): void;
    editImage(index: any): void;
    saveImage($img: any): void;
    _showErrorMessage(message: any): void;
    _showFileErrorMessage(message: any, index: any): void;
    getFileThumbnail(index: any, file: any, update: any): void;
    deleteFile(index: any): void;
    checkAutoplay(index: any): void;
    checkInsertAllState(): void;
    _disableInsertCheckbox(): void;
    _getFileType(file: any): any;
    isChildWindowOpen(): boolean;
    setChildWindowState(childWindowState: any): void;
    resetAllFilesCheckbox(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Image {
    _init(): void;
    showInsertPopup(): void;
    showLayer(name: any): void;
    refreshUploadButton($btn: any): void;
    refreshByURLButton($btn: any): void;
    align(alignType: AlignType): object;
    applyStyle(className: string): object;
    display(displayType: DisplayType): any;
    get(): object;
    insert(link: string, sanitize: boolean, data: { [key: string]: any }, existingImage: any, response?: object): object;
    remove(image: any): object;
    setAlt(alternateText: string): object;
    setSize(width: string, height: string): object;
    upload(images: any[]): object;
    insertByURL(): void;
    refreshAlign($btn: any): void;
    refreshAlignOnShow($btn: any): void;
    refreshDisplayOnShow($btn: any): void;
    replace(): void;
    back(): void;
    getEl(): object;
    showProgressBar(no_message: any): void;
    hideProgressBar(dismiss: any): void;
    applyStyle(val: any, imageStyles: any, multipleStyles: any): object;
    showAltPopup(): void;
    showSizePopup(): void;
    toggleCaption(): void;
    hasCaption(): void;
    exitEdit(force_exit: boolean): boolean;
    edit($img: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface CharCounter {
    _init(): boolean;
    // Returns the number of characters in the editor.
    count(): number;
  }

  export interface WordCounter {
    _init(): boolean;
    // Returns the number of words in the editor.
    wordCount(): number;
    [key: string]: (...args: any[]) => any;
  }

  interface Apply<T> {
    apply(value: string): object | void;
  }

  export type MediaAlign = 'left' | 'right' | 'center';
  export type AlignType = 'left' | 'right' | 'center' | 'justify';

  export interface Align {
      // Set the alignment of the selected paragraphs.
      apply(alignType: AlignType): object;
      // Refresh the alignment of the selected paragraphs.
      refresh(button: Element): object;
      refreshOnShow(button: any, dropdown: any): void;
      refreshForToolbar(button: any): void;
      options: {
        center: string, 
        justify: string,
        left: string,
        right: string
      }
    }

  export interface Button {
    _init(): void;
    // Adds buttons into existing toolbar.
    addButtons(buttons: any): object;
    // Refreshes the state of the buttons in the toolbar.
    bulkRefresh(): void;
    // Builds a list of commands to a button list represented as a HTML string.
    buildList(buttons: string[]): string;
    // Builds a list of commands to a button list represented as a HTML string.
    buildGroup(): void;
    // Attaches the event callbacks.
    bindCommands(element: Element): void;
    // Refreshes the state of active command/button.
    refresh(button: Element): void;
    // Hides all the active dropdowns.
    hideActiveDropdowns(element: Element): void;
    build: (command: any, info: any, visible: any) => string;
    exec: ($btn: any) => void;
    click: ($btn: any) => void;
    getButtons: (selector: any, search_dropdowns: any) => any;
    getPosition: ($elm: any) => { left: any; top: any };
  }

  export interface Clean {
    _init(): void;
    // Cleans dirty HTML to clean HTML ready to be inserted into the editor.
    html(dirtyHtml: string): string;
    // Cleans the tables.
    tables(): void;
    // Cleans the lists.
    lists(): void;
    // Cleans the invisible spaces.
    invisibleSpaces(dirtyHtml: string): void;
    toHTML5(): void;
    exec(html: string, func: any, parse_head: any): any;
  }

  export interface CodeView {
    _init(): boolean;
    // Find if code view mode is active.
    isActive(): boolean;
    // Get the HTML edited inside the code view mode.
    get(): string;
    // Toggle between the code and text view.
    toggle(): object;
    [key: string]: (...args: any[]) => any;
  }

  export interface Colors {
    // Set the background color of the selected text.
    background(color: string): object;
    // Set the text color of the selected text.
    text(value: string): object;
    // Hides the color picker popup.
    back(): void;
    showColorsPopup(cmd_type: any): void;
    customColor(tab: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Commands {
    exec(cmd: any, params?: any): any;
    // Format the selected text as bold.
    bold(): object;
    // Clean any formatting on the selected text.
    clearFormatting(): object;
    // Indent more the selected paragraphs.
    indent(): object;
    // Insert a horizontal line at the cursor position.
    insertHR(): object;
    // Format the selected text as italic.
    italic(): object;
    // Indent less the selected paragraphs.
    outdent(): object;
    // Executes the redo action.
    redo(): object;
    // Show the inline toolbar at the cursor position.
    show(): object;
    // Format the selected text as strike through.
    strikeThrough(): object;
    // Format the selected text as subscript.
    subscript(): object;
    // Format the selected text as superscript.
    superscript(): object;
    // Format the selected text as underline.
    underline(): object;
    // Executes the undo action.
    undo(): object;
    // Executes the selectAll action.
    selectAll(): object;
    // Show more text actions toolbar.
    moreText(): object;
    // Show more paragraph actions toolbar.
    moreParagraph(): object;
    // Show more rich text actions toolbar.
    moreRich(): object;
    // Show more miscellaneous actions toolbar.
    moreMisc(): object;
    //Show more track changes actions toolbar.
    moreTrackChanges(): object;
    [key: string]: (...args: any[]) => any;
  }

  export interface Core {
    _init(): void;
    // Creates a XHR object with the specified parameters.
    getXHR(url: string, method: string): XMLHttpRequest;
    // CSS style to be injected inside the iframe of the editor when the iframe option is used.
    injectStyle(style: string): object;
    // Check if the editor is empty.
    isEmpty(): boolean;
    // Check if the both editor instances are same.
    sameInstance(object: Element): boolean;
    hasFocus(): boolean;
  }

  export interface Cursor {
    // Trigger backspace action at the cursor position.
    backspace(): object;
    // Trigger enter action at the cursor position.
    enter(shiftPressed: boolean): object;
    // Trigger delete action at the cursor position.
    del(): object;
    // Find if the cursor is at the end.
    isAtEnd(): boolean;
    // Find if the cursor is at the start.
    isAtStart(): boolean;
  }

  export interface Edit {
    _init(): void;
    // Disable editor by removing the contenteditable attribute.
    off(): object;
    // Enable editor by adding the contenteditable attribute.
    on(): object;
    // Find if the edit is disabled.
    isDisabled(): boolean;
    // Disables the edit functionality.
    disableDesign(): void;
  }

  export interface EditInPopup {
    _init(): void;
    // Update the texts in popup.
    update(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Embedly {
    _init(): boolean;
    // Add the embedly to editor.
    add(url: string): void;
    // Hides the insert popup and shows inline menu for currently selected embedly.
    back(): void;
    // Gets the currently embedly instance.
    get(): void;
    // Inserts the embedly into editor from popup.
    insert(): void;
    // Removes the currently selected embedly instance.
    remove(): void;
    // Shows insert popup.
    showInsertPopup(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Emoticons {
    _init(): void;
    // Insert an emoticon at the cursor position.
    insert(emoticon: string, image?: string): object;
    // Insert an emoticon at the cursor position.
    setEmoticonCategory(categoryId: string): void;
    showEmoticonsPopup(): void;
    back(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Events {
    _init(): void;
    // Check if blur events are active.
    blurActive(): boolean;
    // Binds the click event for given element.
    bindClick(element: Element, selector: string, handler: () => void): void;
    // Trigger events and chain the pass the returned value between the assigned events.
    chainTrigger(name: string, eventParams: object, force: boolean): object;
    // Disables the blur and focus events.
    disableBlur(): object;
    // Enables the blur and focus events.
    enableBlur(): object;
    // Focus into the editor.
    focus(): object;
    // Register an event.
    on(name: string, callback: (event: any, param1?: any, param2?: any) => void | boolean, first?: boolean): object;
    // Triggers an event.
    trigger(name: string, args: any[], force?: boolean): object;
    $on($el: any, evs: string, selector: any, callback: any, shared: any): void;
    $off(): void;
  }

  export interface File {
    _init(): void;
    // Insert the link to a file at the cursor position.
    insert(link: string, text: string, response: object): object;
    // Upload the passed file to the server.
    upload(files: any[]): object;
    showInsertPopup(): void;
    back(): void;
    hideProgressBar(dismiss: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface FindReplace {
    findMatch(fullText: string, regex: RegExp): RegExpExecArray | null;
    findMatches(searchText: string): void;
    findNextMatch(index: number): void;
    findPreviousMatch(index: number): void;
    replaceMatch(replaceText: string): void;
    replaceMatches(replaceText: string): void;
    getMatchesCount(): number;
    getCurrentMatch(): object;
    getCurrentMatchIndex(): number;
    showPopup(): void;
    hidePopup(): void;
  }

  export interface FontFamily {
    apply(value: string): object | void;
    refreshOnShow($btn: any, $dropdown: any): void;
    refresh($btn: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface FontSize {
    apply(value: string): object | void;
    refreshOnShow($btn: any, $dropdown: any): void;
    refresh($btn: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export type FormatAttributes = { [key: string]: any };

  export type DisplayType = 'block' | 'inline';

  export interface Format {
    // Apply format for the selection or at the insertion point.
    apply(tagName: string, attributes?: FormatAttributes): object;
    // Apply style for the selection or at the insertion point.
    applyStyle(cssProperty: string, cssAttributes?: string | FormatAttributes): object;
    // Check format for the selection or at the insertion point.
    is(tagName: string, attributes?: FormatAttributes): boolean;
    // Remove format for the selection or at the insertion point.
    remove(tagName: string, attributes?: FormatAttributes): object;
    // Remove style for the selection or at the insertion point.
    removeStyle(cssPropertyName: string): object;
    // Toggle format for the selection or at the insertion point.
    toggle(tagName: string, attributes?: FormatAttributes): object;
  }

  export interface Fullscreen {
    _init(): boolean;
    // Check the fullscreen state.
    isActive(): boolean;
    // Toggle fullscreen mode.
    toggle(): object;
    // Refresh
    refresh($btn: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Forms {
    _init(): void;
    applyStyle(className: string, formStyles: object, formMultipleStyles: boolean): void;
    updateInput(): void;
    getInput(): any;
    showUpdatePopup(): void;
    showEditPopup(input: any): void;
    back(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Helpers {
    _init(): void;
    isMobile(): boolean;
    isAndroid(): boolean;
    isBlackberry(): boolean;
    isIOS(): boolean;
    isMac(): boolean;
    isTouch(): boolean;
    isWindowsPhone(): boolean;
    scrollLeft(): number;
    scrollTop(): number;
    sanitizeURL(url: string): string;
    isEmail(url: any): any;
    requestAnimationFrame(): any;
    getPX(val: any): number;
    screenSize(isBox: any): any;
    isArray(obj: any): boolean;
    RGBToHex(rgb: any): any;
    HEXtoRGB(hex: any): string;
    isURL(url: string): boolean;
    getAlignment($block: any): any;
    isInViewPort(el: any): boolean;
  }

  export interface HTML {
    cleanEmptyTags(): object;
    get(keepMarkers?: boolean, keepClasses?: boolean): string;
    getSelected(): string;
    unwrap(): void;
    wrap(temp: boolean, tables: boolean, blockquote: boolean): void;
    insert(html: string, clean?: boolean, doSplit?: boolean): object;
    set(html: string): object;
    defaultTag(): 'div' | 'p';
    isPreformatted(node: any, look_up: any): any;
    emptyBlocks(around_markers: any): any[];
    emptyBlockTagsQuery(): string;
    blockTagsQuery(): any;
    fillEmptyBlocks(around_markers: any): void;
    cleanWhiteTags(ignore_selection: any): boolean;
    cleanBlankSpaces(el: any): boolean;
    blocks(): any;
    getDoctype(doc: any): string;
    syncInputs(): void;
    escapeEntities(str: any): any;
    checkIfEmpty(): void;
    extractNode(html: string, tag: any): string;
    extractNodeAttrs(html: string, tag: any): any;
    extractDoctype(html: string): string;
    cleanBRs(): void;
    _init(): void;
    _setHtml($node: any, html: string): void;
  }

  export interface ImageManager {
    _init(): boolean;
    hide(): object;
    show(): object;
    [key: string]: (...args: any[]) => any;
  }

  export interface InlineClass {
    apply(value: string): void;
    refreshOnShow($btn: any, $dropdown: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface InlineStyle extends Apply<string> {}

  export interface Keys {
    ctrlKey(event: Event): boolean;
    isArrow(keyCode: number): boolean;
    isCharacter(keyCode: number): boolean;
    _init(): void;
    forceUndo(): void;
    isIME(): boolean;
    isBrowserAction(e: any): boolean;
    positionCaret(): boolean;
  }

  export interface Language {
    _init(): void;
    translate(str: string): string;
  }

  export interface LineHeight extends Apply<number> {
    _init(): void;
    refreshOnShow(): void;
  }

  export interface Link {
    _init(): void;
    allSelected(): Element[];
    applyStyle(className: string): object;
    get(): Element;
    insert(href: string, text: string, attributes?: { [key: string]: any }): object;
    remove(): object;
    showInsertPopup(): void;
    usePredefined(val: any): void;
    insertCallback(): void;
    update(): void;
    back(): void;
    imageLink(): void;
    [key: string]: (...args: any[]) => any;
  }

  export type ListType = 'OL' | 'UL';

  export interface Lists {
    _init(): void;
    format(listType: ListType): object;
    refresh($btn: any, tag_name: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Markdown {
    _init(): void;
    isEnabled(): boolean;
    refresh(button: Element): void;
    toggle(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Markers {
    insert(): object;
    insertAtPoint(event: any): void;
    place(range: object, marker: boolean, id: string): object;
    remove(): object;
    split(): object;
  }

  export interface Modals {
    _init(): void;
    areVisible(modalInstance: Element): boolean;
    create(id: string, headTemplate: string, bodyTemplate: string): Element;
    get(id: string): Element;
    isVisible(id: string): boolean;
    show(id: string): void;
    hide(id: string, restoreSelection: boolean): void;
    resize(id: string): void;
  }

  export interface Node {
    blockParent(node: Element): Element;
    clearAttributes(node: Element): Element;
    contents(node: Element): any[];
    deepestParent(node: Element, until?: Element, simpleEnter?: boolean): Element;
    hasClass(element: Element, className: string): boolean;
    hasFocus(node: Element): boolean;
    isBlock(node: Element): boolean;
    isElement(node: Element): boolean;
    isDeletable(node: Element): boolean;
    isEditable(node: Element): boolean;
    isEmpty(node: Element, ignoreMarkers?: boolean): boolean;
    isFirstSibling(node: Element, ignoreMarkers?: boolean): boolean;
    isLastSibling(node: Element, ignoreMarkers?: boolean): boolean;
    isList(node: Element, ignoreMarkers?: boolean): boolean;
    isLink: (node: Element) => boolean;
    isVoid(node: Element): boolean;
    rawAttributes(node: Element): object;
    attributes(node: Element): string;
    clearAttributes(node: Element): void;
    openTagString(node: Element): string;
    closeTagString(node: Element): string;
    filter(callback: any): object | any;
    [key: string]: (...args: any[]) => any;
  }

  export interface ParagraphFormat {
    apply(value: string): void;
    refreshOnShow($btn: any, $dropdown: any): void;
    refresh($btn: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface ParagraphStyle {
    _init: () => void;
    apply(val: string, paragraphStyles: any, paragraphMultipleStyles: any): void;
    refreshOnShow($btn: any, $dropdown: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Placeholder {
    _init(): boolean;
    hide(): void;
    isVisible(): void;
    refresh(): object;
    show(): void;
  }

  export interface Popups {
    _init(): void;
    create(id: string, templateProperties: { [key: string]: any }): any;
    get(id: string): any;
    hide(id: string): boolean;
    hideAll(except?: string[]): object;
    isVisible(id: string): boolean;
    onHide(id: string, callback: () => void): object;
    onRefresh(id: string, callback: () => void): object;
    refresh(id: string): object;
    setContainer(id: string, $container: any): void;
    show(id: string, leftOffset?: number, topOffset?: number, height?: number, applyLeftOffset?: boolean): boolean;
    onShow(id: string, callback: () => void): void;
    areVisible(new_instance?: any): any;
    setFileListHeight($popup: any): any;
    setPopupDimensions($popup: any, isDelete: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Position {
    _init(): void;
    getBoundingRect(): Element;
    refresh(): object;
    forSelection($el: any): void;
    addSticky($el: any): void;
    at(left: any, top: any, $el: any, obj_height: any): void;
  }

  export interface Refresh {
    undo: ($btn: any) => void;
    redo: ($btn: any) => void;
    outdent: ($btn: any) => boolean;
    indent: ($btn: any) => boolean;
    moreText: ($moreButton: any) => void;
    moreParagraph: ($moreButton: any) => void;
    moreMisc: ($moreButton: any) => void;
    moreRich: ($moreButton: any) => void;
  }

  export interface Shortcuts {
    _init(): void;
    get(cmd: any): string;
  }

  export interface Quote extends Apply<string> {}

  export interface Save {
    _init(): void;
    force(): void;
    save(html?: HTML): object;
    reset(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface FroalaSelection {
    blocks(toggleList?: any, keepLi?: any): any[];
    clear(): void;
    element(): HTMLElement;
    endElement(): Element;
    get(): string | object;
    inEditor(): boolean;
    info(element: Element): object;
    isCollapsed(): boolean;
    isFull(): boolean;
    ranges(index: number): Range | Range[];
    restore(): boolean;
    save(): void;
    setAfter(node: Element, use_current_node?: any): boolean;
    setAtEnd(node: Element, deep?: any): boolean;
    setAtStart(node: Element, deep?: any): boolean;
    setBefore(node: Element, use_current_node?: any): boolean;
    text(): string;
    remove(): boolean;
    rangeElement(rangeContainer: any, offset: any) : any;
    [key: string]: (...args: any[]) => any;
  }

  export interface Size {
    _init(): boolean;
    refresh(): void;
    syncIframe(): void;
  }

  export interface Snapshot {
    equal(snapshot1: any, snapshot2: any): boolean;
    get(): any;
    restore(snapshot: any): object;
  }

  export interface SpellChecker {
    _init(): boolean;
    refresh($btn: Element): void;
    toggle(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Table {
    _init(): boolean;
    insert(rows: number, columns: number): object;
    remove(): void;
    insertRow(position: number): void;
    deleteRow(): void;
    insertColumn(position: number): void;
    deleteColumn(): void;
    mergeCells(): void;
    splitCellVertically(): void;
    splitCellHorizontally(): void;
    addHeader(): void;
    addFooter(): void;
    removeHeader(): void;
    removeFooter(): void;
    setBackground(color: any): void;
    showInsertPopup(): void;
    showEditPopup(): void;
    showColorsPopup(): void;
    back(): void;
    verticalAlign(val: any): void;
    horizontalAlign(val: any): void;
    applyStyle(val: any, obj: any, multiple_styles: any, styles: any): void;
    selectedTable(): void;
    selectedCells(): void;
    customColor(): void;
    selectCells(firstCell: any, lastCell: any): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Toolbar {
    _init(): boolean;
    enable(): void;
    disable(): void;
    hide(): boolean;
    show(): boolean;
    showInline(element: Element, force: boolean): void;
    setMoreToolbarsHeight(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Tooltip {
    bind(element: Element, selector: string, displayAbove?: boolean): object;
    hide(): object;
    to(element: Element, displayAbove: boolean): object;
  }

  export interface Undo {
    canDo(): boolean;
    canRedo(): boolean;
    reset(): object;
    saveStep(snapshot?: any): void;
    _init(): void;
    run(): void;
    redo(): void;
    dropRedo(): void;
  }

  export interface Track_Changes {
    toggleTracking(): void;
    getPendingChanges(): object[];
    showChanges(): void;
    acceptAllChanges(): void;
    rejectAllChanges(): void;
    acceptSingleChange(): void;
    rejectSingleChange(): void;
    pushChange(changeId: any): void;
    insertChangeAt(index: number, changeId: number): void;
    popChange(): any;
    refresh($btn: any): void;
    replaceSpecialItem($item: any): void;
    removeSpecialItem($item: any): void;
    removedTable($table: any): void;
    addQuote($quote: any): void;
    removeQuote($quote: any, index: number): void;
    wrapInTracking(item: any): void;
    wrapInDelete(item: any): void;
    wrapLinkInTracking(item: any, changeIndex: any): void;
    pasteInEmptyEdior(clean_html: string): void;
    pasteInEdior(clean_html: string): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Video {
    _init(): void;
    align(alignType: AlignType): object;
    display(displayType: DisplayType): object;
    get(): any;
    insert(embeddedCode: string): object;
    remove(): object;
    setSize(width: string, height: string): object;
    showInsertPopup(): void;
    showLayer(name: any): void;
    refreshByURLButton($btn: any): void;
    refreshEmbedButton($btn: any): void;
    refreshUploadButton($btn: any): void;
    upload(videos: any): void;
    insertByURL(url: string): void;
    insertEmbed(html: string): void;
    refreshAlign($btn: any): boolean;
    refreshAlignOnShow($btn: any, $dropdown: any): void;
    refreshDisplayOnShow($btn: any, $dropdown: any): void;
    hideProgressBar(dismiss: any): void;
    showSizePopup(): void;
    replace(): void;
    back(): void;
    showProgressBar(no_message: any): void;
    _editVideo($video: any): void;
    setAutoplay(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Word_paste {
    _init(): void;
    clean(keep_formatting: any): void;
    _wordClean(html: string, rtf: any): string;
  }

  export interface Trim_video {
    _init(): void;
    trimVideo(file: any, index: any, file_list: any[]): void;
  }

  export interface Special_characters {
    setSpecialCharacterCategory(categoryId: any): void;
    showSpecialCharsPopup(): void;
    back(): void;
    [key: string]: (...args: any[]) => any;
  }

  export interface Icon {
    create(command: any): any;
    getTemplate(command: any): any;
    getFileIcon(command: any): any;
  }

  export interface Accessibility {
    _init(): void;
    registerPopup: (id: any) => void;
    registerToolbar: (table: any) => void;
    focusToolbarElement: (element: any) => void;
    focusToolbar: (table: any, last: any) => boolean;
    focusContent: (content: any, backward: any) => boolean;
    focusPopup: (popup: any) => void;
    focusModal: ($modal: any) => void;
    focusEditor: () => void;
    focusPopupButton: ($popup: any) => void;
    focusModalButton: ($modal: any) => void;
    hasFocus: () => boolean;
    exec: (e: any, $tb: any) => boolean;
    saveSelection: () => void;
    restoreSelection: () => void;
  }
}
