/*!
 * froala_editor v2.8.2 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {
/**
 * Simplified Chinese spoken in China.
 */

$.FE.LANGUAGE['zh_cn'] = {
  translation: {
    // Place holder
    "Type something": "在此输入内容",

    // Basic formatting
    "Bold": "粗体",
    "Italic": "斜体",
    "Underline": "下划线",
    "Strikethrough": "删除线",

    // Main buttons
    "Insert": "插入",
    "Delete": "删除",
    "Cancel": "取消",
    "OK": "确定",
    "Back": "后退",
    "Remove": "删除",
    "More": "更多",
    "Update": "更新",
    "Style": "样式",

    // Font
    "Font Family": "字体",
    "Font Size": "字号",

    // Colors
    "Colors": "颜色",
    "Background": "背景",
    "Text": "文字",
    "HEX Color": "十六进制颜色",

    // Paragraphs
    "Paragraph Format": "段落格式",
    "Normal": "正常",
    "Code": "代码",
    "Heading 1": "标题1",
    "Heading 2": "标题2",
    "Heading 3": "标题3",
    "Heading 4": "标题4",

    // Style
    "Paragraph Style": "段落样式",
    "Inline Style": "内联样式",

    // Alignment
    "Align": "对齐方式",
    "Align Left": "左对齐",
    "Align Center": "居中",
    "Align Right": "右对齐",
    "Align Justify": "两端对齐",
    "None": "无",

    // Lists
    "Ordered List": "编号列表",
    "Unordered List": "项目符号",

    // Indent
    "Decrease Indent": "减少缩进",
    "Increase Indent": "增加缩进",

    // Links
    "Insert Link": "插入链接",
    "Open in new tab": "在新标签页中打开",
    "Open Link": "打开链接",
    "Edit Link": "编辑链接",
    "Unlink": "删除链接",
    "Choose Link": "选择链接",

    // Images
    "Insert Image": "插入图片",
    "Upload Image": "上传图片",
    "By URL": "通过网址",
    "Browse": "浏览",
    "Drop image": "拖入图像",
    "or click": "或点击",
    "Manage Images": "管理图像",
    "Loading": "加载中",
    "Deleting": "删除中",
    "Tags": "标签",
    "Are you sure? Image will be deleted.": "将删除图片，是否确定？",
    "Replace": "坑爹的",
    "Uploading": "上传中",
    "Loading image": "加载图片中",
    "Display": "显示",
    "Inline": "内联",
    "Break Text": "断开文本",
    "Alternate Text": "备用文本",
    "Change Size": "修改尺寸",
    "Width": "宽度",
    "Height": "高度",
    "Something went wrong. Please try again.": "发生了错误，请再试一次。",
    "Image Caption": "图片说明",
    "Advanced Edit": "高级编辑",

    // Video
    "Insert Video": "插入视频",
    "Embedded Code": "嵌入式代码",
    "Paste in a video URL": "粘贴视频网址",
    "Drop video": "拖入视频",
    "Your browser does not support HTML5 video.": "您的浏览器不支持HTML5视频。",
    "Upload Video": "上传视频",

    // Tables
    "Insert Table": "插入表格",
    "Table Header": "表头",
    "Remove Table": "删除表格",
    "Table Style": "表格样式",
    "Horizontal Align": "水平对齐方式",
    "Row": "行",
    "Insert row above": "在上方插入",
    "Insert row below": "在下方插入",
    "Delete row": "删除行",
    "Column": "列",
    "Insert column before": "在左侧插入",
    "Insert column after": "在右侧插入",
    "Delete column": "删除列",
    "Cell": "单元格",
    "Merge cells": "合并单元格",
    "Horizontal split": "水平分割",
    "Vertical split": "垂直分割",
    "Cell Background": "单元格背景",
    "Vertical Align": "垂直对齐方式",
    "Top": "顶部",
    "Middle": "中间",
    "Bottom": "底部",
    "Align Top": "顶部对齐",
    "Align Middle": "居中对齐",
    "Align Bottom": "底部对齐",
    "Cell Style": "单元格样式",

    // Files
    "Upload File": "上传文件",
    "Drop file": "拖入文件",

    // Emoticons
    "Emoticons": "表情",
    "Grinning face": "笑脸",
    "Grinning face with smiling eyes": "咧嘴笑",
    "Face with tears of joy": "含笑",
    "Smiling face with open mouth": "大笑",
    "Smiling face with open mouth and smiling eyes": "微笑",
    "Smiling face with open mouth and cold sweat": "笑出汗",
    "Smiling face with open mouth and tightly-closed eyes": "笑脸",
    "Smiling face with halo": "笑晕",
    "Smiling face with horns": "微笑",
    "Winking face": "眨眼",
    "Smiling face with smiling eyes": "面带微笑的眼睛",
    "Face savoring delicious food": "面对品尝美味的食物",
    "Relieved face": "面对如释重负",
    "Smiling face with heart-shaped eyes": "色",
    "Smiling face with sunglasses": "墨镜",
    "Smirking face": "面对面带笑容",
    "Neutral face": "中性面",
    "Expressionless face": "面无表情",
    "Unamused face": "不高兴",
    "Face with cold sweat": "冷汗",
    "Pensive face": "沉思",
    "Confused face": "困惑",
    "Confounded face": "该死的",
    "Kissing face": "面对接吻",
    "Face throwing a kiss": "面对投掷一个吻",
    "Kissing face with smiling eyes": "接吻脸，含笑的眼睛",
    "Kissing face with closed eyes": "接吻的脸闭着眼睛",
    "Face with stuck out tongue": "面对伸出舌头",
    "Face with stuck out tongue and winking eye": "面对伸出舌头和眨动的眼睛",
    "Face with stuck out tongue and tightly-closed eyes": "面对伸出舌头和紧闭的眼睛",
    "Disappointed face": "失望",
    "Worried face": "担心",
    "Angry face": "愤怒",
    "Pouting face": "噘嘴",
    "Crying face": "哭",
    "Persevering face": "无奈",
    "Face with look of triumph": "胜利",
    "Disappointed but relieved face": "失望",
    "Frowning face with open mouth": "皱眉",
    "Anguished face": "痛苦",
    "Fearful face": "害怕",
    "Weary face": "厌倦",
    "Sleepy face": "困",
    "Tired face": "疲惫",
    "Grimacing face": "狰狞",
    "Loudly crying face": "大哭",
    "Face with open mouth": "张嘴",
    "Hushed face": "冷静",
    "Face with open mouth and cold sweat": "冷汗",
    "Face screaming in fear": "惊恐",
    "Astonished face": "惊吓",
    "Flushed face": "害羞",
    "Sleeping face": "睡觉",
    "Dizzy face": "晕",
    "Face without mouth": "无嘴",
    "Face with medical mask": "生病",

    // Line breaker
    "Break": "换行",

    // Math
    "Subscript": "下标",
    "Superscript": "上标",

    // Full screen
    "Fullscreen": "全屏",

    // Horizontal line
    "Insert Horizontal Line": "插入水平线",

    // Clear formatting
    "Clear Formatting": "清除格式",

    // Undo, redo
    "Undo": "撤消",
    "Redo": "重做",

    // Select all
    "Select All": "全选",

    // Code view
    "Code View": "代码视图",

    // Quote
    "Quote": "引用",
    "Increase": "增加引用",
    "Decrease": "删除引用",

    // Quick Insert
    "Quick Insert": "快速拖入",

    // Spcial Characters
    "Special Characters": "特殊字符",
    "Latin": "拉丁文",
    "Greek": "希腊语",
    "Cyrillic": "西里尔",
    "Punctuation": "标点",
    "Currency": "货币",
    "Arrows": "箭头",
    "Math": "数学",
    "Misc": "杂项",

    // Print.
    "Print": "打印",

    // Spell Checker.
    "Spell Checker": "拼写检查",

    // Help
    "Help": "帮助",
    "Shortcuts": "快捷键",
    "Inline Editor": "内联编辑器",
    "Show the editor": "显示编辑器",
    "Common actions": "常用操作",
    "Copy": "复制",
    "Cut": "剪切",
    "Paste": "粘贴",
    "Basic Formatting": "基本格式",
    "Increase quote level": "提升引用层级",
    "Decrease quote level": "降低引用层级",
    "Image / Video": "图像/视频",
    "Resize larger": "放大尺寸",
    "Resize smaller": "缩小尺寸",
    "Table": "表格",
    "Select table cell": "选择表单元格",
    "Extend selection one cell": "增加选择一个单元格",
    "Extend selection one row": "增加选择一行",
    "Navigation": "导航",
    "Focus popup / toolbar": "焦点弹出/工具栏",
    "Return focus to previous position": "返回焦点至上一个位置",

    // Embed.ly
    "Embed URL": "嵌入网址",
    "Paste in a URL to embed": "嵌入复制的网址",

    // Word Paste.
    "The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?": "粘贴的内容来自微软Word文档，是否保留文档格式？",
    "Keep": "保持",
    "Clean": "清除",
    "Word Paste Detected": "检测到来自Word的内容"
  },
  direction: "ltr"
};

}));
