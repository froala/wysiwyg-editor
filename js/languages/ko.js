/*!
 * froala_editor v4.0.17 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2023 Froala Labs
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('froala-editor')) :
  typeof define === 'function' && define.amd ? define(['froala-editor'], factory) :
  (factory(global.FroalaEditor));
}(this, (function (FE) { 'use strict';

  FE = FE && FE.hasOwnProperty('default') ? FE['default'] : FE;

  /**
   * Korean
   */
  FE.LANGUAGE['ko'] = {
    translation: (_translation = {
      // Place holder
      'Type something': '내용을 입력하세요.',
      // Basic formatting
      'Bold': '굵게',
      'Italic': '기울임꼴',
      'Underline': '밑줄',
      'Strikethrough': '취소선',
      // Main buttons
      'Insert': '삽입',
      'Delete': '삭제',
      'Cancel': '취소',
      'OK': '승인',
      'Back': '뒤로',
      'Remove': '제거',
      'More': '자세히',
      'Update': '업데이트',
      'Style': '스타일',
      // Font
      'Font Family': '글꼴',
      'Font Size': '글꼴 크기',
      // Colors
      'Colors': '색상',
      'Background': '배경',
      'Text': '문구',
      'HEX Color': '색상',
      // Paragraphs
      'Paragraph Format': '문단',
      'Normal': '표준',
      'Code': '코드',
      'Heading 1': '제목 1',
      'Heading 2': '제목 2',
      'Heading 3': '제목 3',
      'Heading 4': '제목 4',
      // Style
      'Paragraph Style': '문단 스타일',
      'Inline Style': '인라인 스타일',
      // Alignment
      'Align': '정렬',
      'Align Left': '왼쪽정렬',
      'Align Center': '가운데정렬',
      'Align Right': '오른쪽정렬',
      'Align Justify': '양쪽정렬',
      'None': '정렬 없음',
      // Lists
      'Ordered List': '순서 있는 목록',
      'Unordered List': '순서 없는 목록',
      // Indent
      'Decrease Indent': '내어쓰기',
      'Increase Indent': '들여쓰기',
      // Links
      'Insert Link': '링크 삽입',
      'Open in new tab': '새 탭에서 열기',
      'Open Link': '링크 열기',
      'Edit Link': '편집 링크',
      'Unlink': '링크삭제',
      'Choose Link': '링크 선택',
      // Images
      'Insert Image': '이미지 삽입',
      'Upload Image': '이미지 업로드',
      'By URL': '링크',
      'Browse': '이미지 검색',
      'Drop image': '이미지를 드래그&드롭',
      'or click': '또는 클릭',
      'Manage Images': '이미지 관리',
      'Loading': '로드 중',
      'Deleting': '삭제',
      'Tags': '태그',
      'Are you sure? Image will be deleted.': '이미지가 삭제됩니다.',
      'Replace': '교체',
      'Uploading': '업로드',
      'Loading image': '이미지 로드 중',
      'Display': '표시 형식',
      'Inline': '텍스트와 같은 줄',
      'Break Text': '텍스트와 분리',
      'Alternative Text': '대체 텍스트',
      'Change Size': '크기 변경',
      'Width': '폭',
      'Height': '높이',
      'Something went wrong. Please try again.': '문제가 발생했습니다. 다시 시도하십시오.',
      'Image Caption': '이미지 설명',
      'Advanced Edit': '고급 편집',
      // Video
      'Insert Video': '동영상 삽입',
      'Embedded Code': '코드로 삽입',
      'Paste in a video URL': '동영상 URL',
      'Drop video': '동영상을 드래그&드롭',
      'Your browser does not support HTML5 video.': '귀하의 브라우저는 html5 video를 지원하지 않습니다.',
      'Upload Video': '동영상 업로드',
      // Tables
      'Insert Table': '표 삽입',
      'Table Header': '표 헤더',
      'Remove Table': '표 제거',
      'Table Style': '표 스타일',
      'Horizontal Align': '수평 정렬',
      'Row': '행',
      'Insert row above': '앞에 행을 삽입',
      'Insert row below': '뒤에 행을 삽입',
      'Delete row': '행 삭제',
      'Column': '열',
      'Insert column before': '앞에 열을 삽입',
      'Insert column after': '뒤에 열을 삽입',
      'Delete column': '열 삭제',
      'Cell': '셀',
      'Merge cells': '셀 합치기',
      'Horizontal split': '수평 분할',
      'Vertical split': '수직 분할',
      'Cell Background': '셀 배경',
      'Vertical Align': '수직 정렬',
      'Top': '위쪽 정렬',
      'Middle': '가운데 정렬',
      'Bottom': '아래쪽 정렬',
      'Align Top': '위쪽으로 정렬합니다.',
      'Align Middle': '가운데로 정렬합니다.',
      'Align Bottom': '아래쪽으로 정렬합니다.',
      'Cell Style': '셀 스타일',
      // Files
      'Upload File': '파일 첨부',
      'Drop file': '파일을 드래그&드롭',
      // Emoticons
      'Emoticons': '이모티콘',
      'Grinning face': "활짝 웃는 얼굴",
      'Grinning face with smiling eyes': "미소 짓는 눈으로 활짝 웃는 얼굴",
      'Face with tears of joy': "기쁨의 눈물을 흘리는 얼굴",
      'Smiling face with open mouth': "입을 열고 웃는 얼굴",
      'Smiling face with open mouth and smiling eyes': "입을 열고 미소짓는 웃는 얼굴",
      'Smiling face with open mouth and cold sweat': "입을 열고 식은땀나는 얼굴",
      'Smiling face with open mouth and tightly-closed eyes': "입을 열고 눈을 꽉 감은 웃는 얼굴",
      'Smiling face with halo': "후광과 함께 웃는 얼굴",
      'Smiling face with horns': "뿔이 있는 웃는 얼굴",
      'Winking face': "윙크하는 얼굴",
      'Smiling face with smiling eyes': "웃는 눈으로 웃는 얼굴",
      'Face savoring delicious food': "맛있는 음식을 음미하는 얼굴",
      'Relieved face': "안도한 얼굴",
      'Smiling face with heart-shaped eyes': "하트 모양의 눈으로 웃는 얼굴",
      'Smiling face with sunglasses': "선글라스를 쓴 웃는 얼굴",
      'Smirking face': "능글맞은 웃음짓는 얼굴",
      'Neutral face': "중립적인 얼굴",
      'Expressionless face': "무표정한 얼굴",
      'Unamused face': "즐겁지않은 얼굴",
      'Face with cold sweat': "식은 땀나는 얼굴",
      'Pensive face': "생각에 잠긴 얼굴",
      'Confused face': "혼란스러운 얼굴",
      'Confounded face': "당황한 얼굴",
      'Kissing face': "키스하는 얼굴",
      'Face throwing a kiss': "키스를 보내는 얼굴",
      'Kissing face with smiling eyes': "미소 짓는 눈으로 키스하는 얼굴",
      'Kissing face with closed eyes': "눈을 감고 키스하는 얼굴",
      'Face with stuck out tongue': "혀를 내민 얼굴",
      'Face with stuck out tongue and winking eye': "혀를 내밀고 윙크하는 얼굴",
      'Face with stuck out tongue and tightly-closed eyes': "눈을 감고 혀를 내민 얼굴",
      'Disappointed face': "실망한 얼굴",
      'Worried face': "걱정하는 얼굴",
      'Angry face': "성난 얼굴",
      'Pouting face': "찡그린 얼굴",
      'Crying face': "우는 얼굴",
      'Persevering face': "인내하는 얼굴",
      'Face with look of triumph': "승리의 표정을 지은 얼굴",
      'Disappointed but relieved face': "실망하지만 안도한 얼굴",
      'Frowning face with open mouth': "입을 열고 찡그린 얼굴",
      'Anguished face': "고뇌하는 얼굴",
      'Fearful face': "두려운 얼굴",
      'Weary face': "지친 얼굴",
      'Sleepy face': "졸린 얼굴",
      'Tired face': "피곤한 얼굴",
      'Grimacing face': "찡그린 얼굴",
      'Loudly crying face': "큰 소리로 우는 얼굴",
      'Face with open mouth': "입을 벌리고 있는 얼굴",
      'Hushed face': "놀란 얼굴",
      'Face with open mouth and cold sweat': "입을 벌리고 식은땀 흘리는 얼굴",
      'Face screaming in fear': "공포에 비명지르는 얼굴",
      'Astonished face': "놀란 얼굴",
      'Flushed face': "붉어진 얼굴",
      'Sleeping face': "잠자는 얼굴",
      'Dizzy face': "어지러워하는 얼굴",
      'Face without mouth': "입이 없는 얼굴",
      'Face with medical mask': "의료 마스크를 쓴 얼굴",
      // Line breaker
      'Break': '단절',
      // Math
      'Subscript': '아래 첨자',
      'Superscript': '위 첨자',
      // Full screen
      'Fullscreen': '전체 화면',
      // Horizontal line
      'Insert Horizontal Line': '구분선',
      // Clear formatting
      'Clear Formatting': '서식 제거',
      // Save
      'Save': '저장',
      // Undo, redo
      'Undo': '실행 취소',
      'Redo': '되돌리기',
      // Select all
      'Select All': '전체선택',
      // Code view
      'Code View': '코드보기',
      // Quote
      'Quote': '인용',
      'Increase': '증가',
      'Decrease': '감소',
      // Quick Insert
      'Quick Insert': '빠른 삽입',
      // Special Characters
      'Special Characters': '특수 문자',
      'Latin': '라틴어',
      'Greek': '그리스어',
      'Cyrillic': '키릴 문자',
      'Punctuation': '문장부호',
      'Currency': '통화',
      'Arrows': '화살표',
      'Math': '수학',
      'Misc': '그 외',
      // Print.
      'Print': '인쇄',
      // Spell Checker.
      'Spell Checker': '맞춤법 검사기',
      // Help
      'Help': '도움말',
      'Shortcuts': '단축키',
      'Inline Editor': '인라인 에디터',
      'Show the editor': '에디터 보기',
      'Common actions': '일반 동작',
      'Copy': '복사하기',
      'Cut': '잘라내기',
      'Paste': '붙여넣기',
      'Basic Formatting': '기본 서식',
      'Increase quote level': '인용 증가',
      'Decrease quote level': '인용 감소',
      'Image / Video': '이미지/동영상',
      'Resize larger': '크기를 더 크게 조정',
      'Resize smaller': '크기를 더 작게 조정',
      'Table': '표',
      'Select table cell': '표 셀 선택',
      'Extend selection one cell': '셀의 선택 범위를 확장',
      'Extend selection one row': '행의 선택 범위를 확장',
      'Navigation': '네비게이션',
      'Focus popup / toolbar': '팝업/툴바에 포커스',
      'Return focus to previous position': '이전 위치로 포커스 되돌리기',
      // Embed.ly
      'Embed URL': 'URL 삽입',
      'Paste in a URL to embed': 'Embed URL에 붙여 넣기',
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?':
        '붙여넣은 문서는 Microsoft Word에서 가져왔습니다. 형식을 유지하거나 초기화 하시겠습니까?',
      'Keep': '유지하기',
      'Clean': '초기화',
      'Word Paste Detected': '워드 붙여넣기가 감지되었습니다.',
      // Character Counter
      'Characters': '문자',
      // More Buttons
      'More Text': '글꼴 더보기',
      'More Paragraph': '문단 더보기',
      'More Rich': '더 많은 내용 삽입',
      'More Misc': '기타 더보기',
    }),
    direction: 'ltr',
  };
})))
//# sourceMappingURL=ko.js.map
