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
   * Korean
   */
  FE.LANGUAGE['ko'] = {
    translation: {
      'ok': "확인",
      // Place holder
      'Type something': "내용을 입력하세요",
      // Basic formatting
      'Bold': "굵게",
      'Italic': "기울임꼴",
      'Underline': "밑줄",
      'Strikethrough': "취소선",
      // Main buttons
      'Insert': "삽입",
      'Delete': "삭제",
      'Cancel': "취소",
      'OK': "확인",
      'Back': "뒤로",
      'Remove': "제거",
      'More': "더 보기",
      'Update': "업데이트",
      'Style': "스타일",
      // Font
      'Font Family': "글꼴",
      'Font Size': "글꼴 크기",
      // Colors
      'Colors': "색상",
      'Background': "배경",
      'Text': "텍스트",
      'Text Color': "글꼴 색상",
      'Background Color': "배경 색상",
      'HEX Color': "HEX 색상",
      // Paragraphs
      'Paragraph Format': "단락",
      'Normal': "표준",
      'Code': "코드",
      'Heading 1': "제목 1",
      'Heading 2': "제목 2",
      'Heading 3': "제목 3",
      'Heading 4': "제목 4",
      'Line Height': '행 높이',
      'Default': "기본",
      'Single': "1",
      'Double': "2",
      // Style
      'Paragraph Style': "단락 스타일",
      'Gray': "회색",
      'Bordered': "테두리",
      'Spaced': "여백",
      'Uppercase': "대문자",
      'Inline Class': "인라인 클레스",
      'Inline Style': "인라인 스타일",
      // Alignment
      'Align': "정렬",
      'Align Left': "왼쪽정렬",
      'Align Center': "가운데정렬",
      'Align Right': "오른쪽정렬",
      'Align Justify': "양쪽정렬",
      'None': "없음",
      // Lists
      'Ordered List': "정렬 리스트",
      'Lower Alpha': "소문자 알파벳",
      'Lower Greek': "소문자 그리스 문자",
      'Lower Roman': "소문자 로마 문자",
      'Upper Alpha': "대문자 알파벳",
      'Upper Roman': "대문자 로마 문자",
      'Unordered List': "비정렬 리스트",
      'Circle': "빈 원",
      'Disc': "원",
      'Square': "정사각형",
      // Indent
      'Decrease Indent': "내어쓰기",
      'Increase Indent': "들여쓰기",
      // Links
      'Insert Link': "링크 삽입",
      'Open in new tab': "새 탭에서 열기",
      'Open Link': "링크 열기",
      'Edit Link': "링크 편집",
      'Unlink': "링크 삭제",
      'Choose Link': "링크 선택",
      'Green': "초록색",
      'Thick': "굵게",
      // Images
      'Insert Image': "이미지 삽입",
      'Upload Image': "이미지 업로드",
      'By URL': "URL",
      'Browse': "검색",
      'Drop image': "이미지를 드래그&드롭",
      'or click': "또는 클릭",
      'Manage Images': "이미지 검색",
      'Loading': "로드 중",
      'Deleting': "삭제",
      'Tags': "태그",
      'Are you sure? Image will be deleted.': "이미지를 삭제하시겠습니까? 이미지가 삭제됩니다.",
      'Replace': "변경",
      'Uploading': "업로드",
      'Loading image': "이미지 로드 중",
      'Display': "디스플레이",
      'Inline': "인라인",
      'Break Text': "구분 텍스트",
      'Alternative Text': "대체 텍스트",
      'Change Size': "크기 변경",
      'Width': "폭",
      'Height': "높이",
      'Something went wrong. Please try again.': "문제가 발생했습니다. 다시 시도하십시오.",
      'Image Caption': "이미지 캡션",
      'Advanced Edit': "고급 편집",
      'Image file type is invalid.' : "지원하지 않는 이미지 파일 타입입니다.",
      'Rounded': "모서리 둥글게",
      'Shadow': "그림자",
      // Video
      'Insert Video': "동영상 삽입",
      'Embedded Code': "Embedded 코드",
      'Paste in a video URL': "동영상 URL",
      'Drop video': "동영상을 드래그&드롭",
      'Your browser does not support HTML5 video.': "귀하의 브라우저는 html5 video를 지원하지 않습니다.",
      'Upload Video': "동영상 업로드",
      // Tables
      'Insert Table': "표 삽입",
      'Table Header': "표 헤더",
      'Remove Table': "표 제거",
      'Table Style': "표 스타일",
      'Dashed Borders': "점선 테두리",
      'Alternate Rows': "대체 행",
      'Horizontal Align': "수평 정렬",
      'Row': "행",
      'Insert row above': "앞에 행을 삽입",
      'Insert row below': "뒤에 행을 삽입",
      'Delete row': "행 삭제",
      'Column': "열",
      'Insert column before': "앞에 열을 삽입",
      'Insert column after': "뒤에 열을 삽입",
      'Delete column': "열 삭제",
      'Cell': "셀",
      'Merge cells': "셀 합치기",
      'Horizontal split': "행 나누기",
      'Vertical split': "열 나누기",
      'Cell Background': "셀 배경",
      'Vertical Align': "수직 정렬",
      'Top': "위쪽 정렬",
      'Middle': "가운데 정렬",
      'Bottom': "아래쪽 정렬",
      'Align Top': "위쪽으로 정렬합니다.",
      'Align Middle': "가운데로 정렬합니다.",
      'Align Bottom': "아래쪽으로 정렬합니다.",
      'Cell Style': "셀 스타일",
      // Files
      'Upload File': "파일 첨부",
      'Drop file': "파일을 드래그&드롭",
      // Emoticons
      'Emoticons': "이모티콘",
      'Grinning face': "얼굴 웃기만",
      'Grinning face with smiling eyes': "미소는 눈을 가진 얼굴 웃기만",
      'Face with tears of joy': "기쁨의 눈물로 얼굴",
      'Smiling face with open mouth': "오픈 입으로 웃는 얼굴",
      'Smiling face with open mouth and smiling eyes': "오픈 입으로 웃는 얼굴과 눈을 미소",
      'Smiling face with open mouth and cold sweat': "입을 열고 식은 땀과 함께 웃는 얼굴",
      'Smiling face with open mouth and tightly-closed eyes': "오픈 입과 밀접하게 닫힌 된 눈을 가진 웃는 얼굴",
      'Smiling face with halo': "후광 웃는 얼굴",
      'Smiling face with horns': "뿔 웃는 얼굴",
      'Winking face': "얼굴 윙크",
      'Smiling face with smiling eyes': "웃는 눈으로 웃는 얼굴",
      'Face savoring delicious food': "맛있는 음식을 음미 얼굴",
      'Relieved face': "안도 얼굴",
      'Smiling face with heart-shaped eyes': "하트 모양의 눈으로 웃는 얼굴",
      'Smiling face with sunglasses': "선글라스 웃는 얼굴",
      'Smirking face': "돈을 지불 얼굴",
      'Neutral face': "중립 얼굴",
      'Expressionless face': "무표정 얼굴",
      'Unamused face': "즐겁게하지 얼굴",
      'Face with cold sweat': "식은 땀과 얼굴",
      'Pensive face': "잠겨있는 얼굴",
      'Confused face': "혼란 얼굴",
      'Confounded face': "망할 것 얼굴",
      'Kissing face': "얼굴을 키스",
      'Face throwing a kiss': "키스를 던지고 얼굴",
      'Kissing face with smiling eyes': "미소는 눈을 가진 얼굴을 키스",
      'Kissing face with closed eyes': "닫힌 된 눈을 가진 얼굴을 키스",
      'Face with stuck out tongue': "내밀 혀 얼굴",
      'Face with stuck out tongue and winking eye': "내밀 혀와 윙크 눈과 얼굴",
      'Face with stuck out tongue and tightly-closed eyes': "밖으로 붙어 혀와 밀접하게 닫힌 된 눈을 가진 얼굴",
      'Disappointed face': "실망 얼굴",
      'Worried face': "걱정 얼굴",
      'Angry face': "성난 얼굴",
      'Pouting face': "얼굴을 삐",
      'Crying face': "얼굴 우는",
      'Persevering face': "얼굴을 인내",
      'Face with look of triumph': "승리의 표정으로 얼굴",
      'Disappointed but relieved face': "실망하지만 얼굴을 안심",
      'Frowning face with open mouth': "오픈 입으로 얼굴을 찡그림",
      'Anguished face': "고뇌의 얼굴",
      'Fearful face': "무서운 얼굴",
      'Weary face': "지친 얼굴",
      'Sleepy face': "슬리피 얼굴",
      'Tired face': "피곤 얼굴",
      'Grimacing face': "얼굴을 찡그린",
      'Loudly crying face': "큰 소리로 얼굴을 울고",
      'Face with open mouth': "오픈 입으로 얼굴",
      'Hushed face': "조용한 얼굴",
      'Face with open mouth and cold sweat': "입을 열고 식은 땀으로 얼굴",
      'Face screaming in fear': "공포에 비명 얼굴",
      'Astonished face': "놀라 얼굴",
      'Flushed face': "플러시 얼굴",
      'Sleeping face': "얼굴 잠자는",
      'Dizzy face': "디지 얼굴",
      'Face without mouth': "입없이 얼굴",
      'Face with medical mask': "의료 마스크로 얼굴",
      // Line breaker
      'Break': "단절",
      // Math
      'Subscript': "아래 첨자",
      'Superscript': "위 첨자",
      // Full screen
      'Fullscreen': "전체 화면",
      // Horizontal line
      'Insert Horizontal Line': "구분선 삽입",
      // Font Awesome
      'Font Awesome': "특수 폰트",
      // Clear formatting
      'Clear Formatting': "서식 제거",
      // Save
      'Save': "저장",
      // Undo, redo
      'Undo': "실행 취소",
      'Redo': "다시 실행",
      // Select all
      'Select All': "전체선택",
      // Code view
      'Code View': "코드보기",
      // Quote
      'Quote': "인용",
      'Increase': "추가",
      'Decrease': "제거",
      // Quick Insert
      'Quick Insert': "빠른 삽입",
      // Spcial Characters
      'Special Characters': "특수 문자",
      'Latin': "라틴어",
      'Greek': "그리스어",
      'Cyrillic': "키릴 문자",
      'Punctuation': "문장부호",
      'Currency': "통화",
      'Arrows': "화살표",
      'Math': "수학",
      'Misc': "그 외",
      // Print.
      'Print': "인쇄",
      // Spell Checker.
      'Spell Checker': "맞춤법 검사기",
      // Help
      'Help': "도움말",
      'Shortcuts': "단축키",
      'Inline Editor': "인라인 에디터",
      'Show the editor': "에디터 보기",
      'Common actions': "일반 동작",
      'Copy': "복사하기",
      'Cut': "잘라내기",
      'Paste': "붙여넣기",
      'Basic Formatting': "기본 서식",
      'Increase quote level': "인용 추가",
      'Decrease quote level': "인용 제거",
      'Image / Video': "이미지 / 동영상",
      'Resize larger': "크기를 더 크게 조정",
      'Resize smaller': "크기를 더 작게 조정",
      'Table': "표",
      'Select table cell': "표 셀 선택",
      'Extend selection one cell': "셀의 선택 범위를 확장",
      'Extend selection one row': "행의 선택 범위를 확장",
      'Navigation': "네비게이션",
      'Focus popup / toolbar': "팝업 / 툴바를 포커스",
      'Return focus to previous position': "이전 위치로 포커스 되돌리기",
      // Embed.ly
      'Embed URL': "Embed URL",
      'Paste in a URL to embed': "Embed URL",
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': "붙여넣은 문서는 마이크로소프트 워드에서 가져왔습니다. 포맷을 유지하거나 정리 하시겠습니까?",
      'Keep': "유지",
      'Clean': "정리",
      'Word Paste Detected': "워드 붙여 넣기가 검출 되었습니다.",
      // Character Counter
      'Characters': '문자',
      // More Buttons
      'More Text': '글꼴 더 보기',
      'More Paragraph': '단락 더 보기',
      'More Rich': '더 보기',
      'More Misc': '기타 더보기'
    },
    direction: 'ltr'
  };

})));
//# sourceMappingURL=ko.js.map
