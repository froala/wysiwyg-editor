# [Froala Editor V3](https://www.froala.com/wysiwyg-editor)

[![Build Status](https://api.travis-ci.com/froala-labs/froala-editor-js-2.svg?token=RmiyW7AecDyQ8ja7VMDj&branch=master)](https://travis-ci.com/froala-labs/froala-editor-js-2)
[![npm](https://img.shields.io/npm/dm/froala-editor.svg)](https://www.npmjs.com/package/froala-editor)
[![npm](https://img.shields.io/npm/v/froala-editor.svg)](https://www.npmjs.com/package/froala-editor)

Froala WYSIWYG HTML Editor is one of the most powerful JavaScript rich text editors ever.

![WYSIWYG HTML Editor](https://raw.githubusercontent.com/froala/wysiwyg-editor/master/editor.jpg)

- Slim - only add the plugins that you need ([30+ official plugins](https://www.froala.com/wysiwyg-editor/docs/plugins))
- [Client frameworks integrations](https://www.froala.com/wysiwyg-editor/docs/framework-plugins/)
- Server side SDKs for [PHP](https://www.froala.com/wysiwyg-editor/docs/sdks/php), [Node.JS](https://www.froala.com/wysiwyg-editor/docs/sdks/nodejs),  [.NET](https://www.froala.com/wysiwyg-editor/docs/sdks/dotnet), [Java](https://www.froala.com/wysiwyg-editor/docs/sdks/java), and [Python](https://www.froala.com/wysiwyg-editor/docs/sdks/python)
- Code is well commented
- [Online documentation](https://www.froala.com/wysiwyg-editor/docs) up to date
- Simple to extend - the plugins are all well commented and simple to use as a basis for your own plugins
- Well maintained - [frequent releases](https://www.froala.com/wysiwyg-editor/changelog)
- Great support - [Help Center](https://wysiwyg-editor.froala.help)
- Awesome [new features](https://wysiwyg-editor-roadmap.froala.com)
​


## Demos

- **Basic demo**: https://www.froala.com/wysiwyg-editor
- **Inline demo**: https://www.froala.com/wysiwyg-editor/inline
- **Full list**: https://www.froala.com/wysiwyg-editor/examples



## Download and Install Froala Editor

### Install from npm

```
npm install froala-editor
```

### Install from bower

```
bower install froala-wysiwyg-editor
```

### Load from CDN
Using Froala Editor from CDN is the easiest way to install it and we recommend using the jsDeliver CDN as it mirrors the NPM package. 

```html
<!-- Include Editor style. -->
<link href="https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />

<!-- Create a tag that we will use as the editable area. -->
<!-- You can use a div tag as well. -->
<textarea></textarea>

<!-- Include Editor JS files. -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@latest/js/froala_editor.pkgd.min.js"></script>

<!-- Initialize the editor. -->
<script>
  new FroalaEditor('textarea');
</script>
```



### Load from CDN as an AMD module
Froala Editor is compatible with AMD module loaders such as RequireJS. The following example shows how to load it along with the Algin plugin from CDN using RequireJS.
```html
<html>
<head>
  <!-- Load CSS files. -->
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.css">

  <script src="require.js"></script>
  <script>
    require.config({
      packages: [{
        name: 'froala-editor',
        main: 'js/froala_editor.min'
      }],
      paths: {
        // Change this to your server if you do not wish to use our CDN.
        'froala-editor': 'https://cdn.jsdelivr.net/npm/froala-editor@latest'
      }
    });
  </script>

  <style>
    body {
      text-align: center;
    }
    div#editor {
      width: 81%;
      margin: auto;
      text-align: left;
    }
    .ss {
      background-color: red;
    }
  </style>
</head>

<body>
  <div id="editor">
    <div id='edit' style='margin-top:30px;'>
    </div>
  </div>

  <script>
    require([
      'froala-editor',
      'froala-editor/js/plugins/align.min'
    ], function(FroalaEditor) {
      new FroalaEditor('#edit')
    });
  </script>
</body>

</html>
```



### Load Froala Editor as a CommonJS Module
Froala Editor is using an UMD module pattern, as a result it has support for CommonJS. *The following examples presumes you are using npm to install froala-editor, see Download and install FroalaEditor for more details.*

```javascript
var FroalaEditor = require('froala-editor');

// Load a plugin.
require('froala-editor/js/plugins/align.min');

// Initialize editor.
new FroalaEditor('#edit');
```



### Load Froala Editor as a transpiled ES6/UMD module
Since Froala Editor supports ES6 (ESM - ECMAScript modules) and UMD (AMD, CommonJS), it can be also loaded as a module with the use of transpilers. E.g. Babel, Typescript. *The following examples presumes you are using npm to install froala-editor, see Download and install FroalaEditor for more details.*

```javascript
import FroalaEditor from 'froala-editor'

// Load a plugin.
import 'froala-editor/js/plugins/align.min.js'

// Initialize editor.
new FroalaEditor('#edit')
```

For more details on customizing the editor, please check the editor [documentation](https://www.froala.com/wysiwyg-editor/docs).



## Use with your existing framework

- Angular JS: https://github.com/froala/angular-froala
- Angular 2: https://github.com/froala/angular2-froala-wysiwyg
- Aurelia: https://github.com/froala/aurelia-froala-editor
- CakePHP: https://github.com/froala/wysiwyg-cake
- Craft 2 CMS: https://github.com/froala/Craft-Froala-WYSIWYG
- Craft 3 CMS: https://github.com/froala/Craft-3-Froala-WYSIWYG
- Django: https://github.com/froala/django-froala-editor
- Ember: https://github.com/froala/ember-froala-editor
- Knockout: https://github.com/froala/knockout-froala
- Meteor: https://github.com/froala/meteor-froala
- Ruby on Rails: https://github.com/froala/wysiwyg-rails
- React JS: https://github.com/froala/react-froala-wysiwyg/
- Reactive: https://github.com/froala/froala-reactive
- Symfony: https://github.com/froala/KMSFroalaEditorBundle
- Vue JS: https://github.com/froala/vue-froala-wysiwyg/
- Yii2: https://github.com/froala/yii2-froala-editor
- Wordpress: https://github.com/froala/wordpress-froala-wysiwyg




## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

- Chrome
- Edge
- Firefox
- Safari
- Opera
- Internet Explorer 11
- Safari iOS
- Chrome, Firefox and Default Browser Android



## Resources

- Demo: [www.froala.com/wysiwyg-editor](http://www.froala.com/wysiwyg-editor)
- Download Page: [www.froala.com/wysiwyg-editor/download](https://www.froala.com/wysiwyg-editor/download)
- Documentation:  [froala.com/wysiwyg-editor/docs](https://www.froala.com/wysiwyg-editor/docs)
- License Agreement: [www.froala.com/wysiwyg-editor/terms](https://www.froala.com/wysiwyg-editor/terms)
- Support: [wysiwyg-editor.froala.help](https://wysiwyg-editor.froala.help/hc/en-us)
- Roadmap & Feature Requests: [https://wysiwyg-editor-roadmap.froala.com](https://wysiwyg-editor-roadmap.froala.com)
- Issues [Repo guidelines](https://github.com/highcharts/highcharts/blob/master/repo-guidelines.md)




## Reporting Issues

We use GitHub Issues as the official bug tracker for the Froala WYSIWYG HTML Editor. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Froala WYSIWYG Editor. The issue that you are about to report may be already fixed in the latest master branch version: https://github.com/froala/froala-wysiwyg/tree/master/js.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed. A JSFiddle is always welcomed, and you can start from this [basic one](https://jsfiddle.net/froala/wc5c3jhk/).
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.




## Technical Support or Questions

If you have questions or need help integrating the editor please [contact us](https://www.froala.com/wysiwyg-editor/contact) instead of opening an issue.



## Licensing

In order to use the Froala Editor you have to purchase one of the following licenses according to your needs. You can find more about that on our website on the [pricing plan page](https://www.froala.com/wysiwyg-editor/pricing).
