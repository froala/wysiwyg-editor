# [Froala Editor](https://www.froala.com/wysiwyg-editor)

[![Build Status](https://travis-ci.com/froala-labs/froala-editor-js-2.svg?token=6qHm2TpvBKAAVFCrJa9X&branch=master)](https://travis-ci.com/froala-labs/froala-editor-js-2)
[![npm](https://img.shields.io/npm/dm/froala-editor.svg)](https://www.npmjs.com/package/froala-editor)
[![Issue Stats](https://img.shields.io/issuestats/i/github/froala/wysiwyg-editor.svg)](https://github.com/froala/wysiwyg-editor)
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

​


## Demos

- **Basic demo**: https://www.froala.com/wysiwyg-editor
- **Inline demo**: https://www.froala.com/wysiwyg-editor/inline
- **Full list**: https://www.froala.com/wysiwyg-editor/examples

​

## Get Started

Froala WYSIWYG HTML Editor requires [jQuery](http://jquery.com/) 1.11.0 or higher and the iconic font named [Font Awesome](http://fortawesome.github.io/Font-Awesome/) 4.4.0. You may also use older versions of Font Awesome, but some of the editor's icons will not appear.

```html
<!-- Include CSS for icons. -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />

<!-- Include Editor style. -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.5.1/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />
<link href="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.5.1/css/froala_style.min.css" rel="stylesheet" type="text/css" />

<!-- Create a tag that we will use as the editable area. -->
<!-- You can use a div tag as well. -->
<textarea></textarea>

<!-- Include jQuery lib. -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

<!-- Include Editor JS files. -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.5.1//js/froala_editor.pkgd.min.js"></script>

<!-- Initialize the editor. -->
<script>
  $(function() {
    $('textarea').froalaEditor()
  });
</script>
```

For more details on customizing the editor, please check the editor [documentation](https://www.froala.com/wysiwyg-editor/docs).

​

## Download

- npm: `npm install froala-editor`
- bower: `bower install froala-wysiwyg-editor`
- CDN: https://cdnjs.com/libraries/froala-editor
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


​

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

- Chrome
- Edge
- Firefox
- Safari
- Opera
- Internet Explorer 10+
- Safari iOS
- Chrome, Firefox and Default Browser Android

​

## Resources

- Demo: [www.froala.com/wysiwyg-editor](http://www.froala.com/wysiwyg-editor)
- Download Page: [www.froala.com/wysiwyg-editor/download](https://www.froala.com/wysiwyg-editor/download)
- Documentation:  [froala.com/wysiwyg-editor/docs](https://www.froala.com/wysiwyg-editor/docs)
- License Agreement: [www.froala.com/wysiwyg-editor/terms](https://www.froala.com/wysiwyg-editor/terms)
- Support: [wysiwyg-editor.froala.help](https://wysiwyg-editor.froala.help/hc/en-us)
- Issues [Repo guidelines](https://github.com/highcharts/highcharts/blob/master/repo-guidelines.md)


​

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Froala WYSIWYG HTML Editor. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Froala WYSIWYG Editor. The issue that you are about to report may be already fixed in the latest master branch version: https://github.com/froala/froala-wysiwyg/tree/master/js.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed. A JSFiddle is always welcomed, and you can start from this [basic one](https://jsfiddle.net/froala/wc5c3jhk/).
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.


​

## Technical Support or Questions

If you have questions or need help integrating the editor please [contact us](https://www.froala.com/wysiwyg-editor/contact) instead of opening an issue.

​

## Licensing

In order to use the Froala Editor you have to purchase one of the following licenses according to your needs. You can find more about that on our website on the [pricing plan page](https://www.froala.com/wysiwyg-editor/pricing).
