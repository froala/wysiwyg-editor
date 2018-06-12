/*!
        * Froala Editor v3.0.0-rc.1 (https://www.froala.com/wysiwyg-editor)
        * Copyright 2014-2018 Froala Labs
        * Licensed under Froala Editor Terms (https://www.froala.com/wysiwyg-editor/terms)
        */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('FroalaEditor')) :
  typeof define === 'function' && define.amd ? define(['FroalaEditor'], factory) :
  (factory(global.$.FroalaEditor));
}(this, (function (FE) { 'use strict';

  FE = FE && FE.hasOwnProperty('default') ? FE['default'] : FE;

  /**
   * Portuguese spoken in Brazil
   */

  FE.LANGUAGE['pt_br'] = {
    translation: {
      // Place holder
      'Type something': 'Digite algo',

      // Basic formatting
      'Bold': 'Negrito',
      'Italic': 'Itálito',
      'Underline': 'Sublinhar',
      'Strikethrough': 'Tachado',

      // Main buttons
      'Insert': 'Inserir',
      'Delete': 'Apagar',
      'Cancel': 'Cancelar',
      'OK': 'Ok',
      'Back': 'Voltar',
      'Remove': 'Remover',
      'More': 'Mais',
      'Update': 'Atualizar',
      'Style': 'Estilo',

      // Font
      'Font Family': 'Fonte',
      'Font Size': 'Tamanho',

      // Colors
      'Colors': 'Cores',
      'Background': 'Fundo',
      'Text': 'Texto',
      'HEX Color': 'Cor hexadecimal',

      // Paragraphs
      'Paragraph Format': 'Formatos',
      'Normal': 'Normal',
      'Code': 'Código',
      'Heading 1': 'Cabeçalho 1',
      'Heading 2': 'Cabeçalho 2',
      'Heading 3': 'Cabeçalho 3',
      'Heading 4': 'Cabeçalho 4',

      // Style
      'Paragraph Style': 'Estilo de parágrafo',
      'Inline Style': 'Estilo embutido',

      // Alignment
      'Align': 'Alinhar',
      'Align Left': 'Alinhar à esquerda',
      'Align Center': 'Centralizar',
      'Align Right': 'Alinhar à direita',
      'Align Justify': 'Justificar',
      'None': 'Nenhum',

      // Lists
      'Ordered List': 'Lista ordenada',
      'Unordered List': 'Lista não ordenada',

      // Indent
      'Decrease Indent': 'Diminuir recuo',
      'Increase Indent': 'Aumentar recuo',

      // Links
      'Insert Link': 'Inserir link',
      'Open in new tab': 'Abrir em uma nova aba',
      'Open Link': 'Abrir link',
      'Edit Link': 'Editar link',
      'Unlink': 'Remover link',
      'Choose Link': 'Escolha o link',

      // Images
      'Insert Image': 'Inserir imagem',
      'Upload Image': 'Carregar imagem',
      'By URL': 'Por um endereço URL',
      'Browse': 'Procurar',
      'Drop image': 'Arraste sua imagem aqui',
      'or click': 'ou clique aqui',
      'Manage Images': 'Gerenciar imagens',
      'Loading': 'Carregando',
      'Deleting': 'Excluindo',
      'Tags': 'Etiquetas',
      'Are you sure? Image will be deleted.': 'Você tem certeza? A imagem será apagada.',
      'Replace': 'Substituir',
      'Uploading': 'Carregando imagem',
      'Loading image': 'Carregando imagem',
      'Display': 'Exibir',
      'Inline': 'Em linha',
      'Break Text': 'Texto de quebra',
      'Alternate Text': 'Texto alternativo',
      'Change Size': 'Alterar tamanho',
      'Width': 'Largura',
      'Height': 'Altura',
      'Something went wrong. Please try again.': 'Algo deu errado. Por favor, tente novamente.',
      'Image Caption': 'Legenda da imagem',
      'Advanced Edit': 'Edição avançada',

      // Video
      'Insert Video': 'Inserir vídeo',
      'Embedded Code': 'Código embutido',
      'Paste in a video URL': 'Colar um endereço de vídeo',
      'Drop video': 'Solte o vídeo',
      'Your browser does not support HTML5 vídeo.': 'Seu navegador não suporta vídeo em HTML5.',
      'Upload Video': 'Carregar vídeo',

      // Tables
      'Insert Table': 'Inserir tabela',
      'Table Header': 'Cabeçalho da tabela',
      'Remove Table': 'Remover tabela',
      'Table Style': 'Estilo de tabela',
      'Horizontal Align': 'Alinhamento horizontal',
      'Row': 'Linha',
      'Insert row above': 'Inserir linha antes',
      'Insert row below': 'Inserir linha depois',
      'Delete row': 'Excluir linha',
      'Column': 'Coluna',
      'Insert column before': 'Inserir coluna antes',
      'Insert column after': 'Inserir coluna depois',
      'Delete column': 'Excluir coluna',
      'Cell': 'Célula',
      'Merge cells': 'Agrupar células',
      'Horizontal split': 'Divisão horizontal',
      'Vertical split': 'Divisão vertical',
      'Cell Background': 'Fundo da célula',
      'Vertical Align': 'Alinhamento vertical',
      'Top': 'Topo',
      'Middle': 'Meio',
      'Bottom': 'Fundo',
      'Align Top': 'Alinhar topo',
      'Align Middle': 'Alinhar meio',
      'Align Bottom': 'Alinhar fundo',
      'Cell Style': 'Estilo de célula',

      // Files
      'Upload File': 'Carregar arquivo',
      'Drop file': 'Arraste seu arquivo aqui',

      // Emoticons
      'Emoticons': 'Emoticons',
      'Grinning face': 'Sorrindo a cara',
      'Grinning face with smiling eyes': 'Sorrindo rosto com olhos sorridentes',
      'Face with tears of joy': 'Rosto com lágrimas de alegria',
      'Smiling face with open mouth': 'Rosto de sorriso com a boca aberta',
      'Smiling face with open mouth and smiling eyes': 'Rosto de sorriso com a boca aberta e olhos sorridentes',
      'Smiling face with open mouth and cold sweat': 'Rosto de sorriso com a boca aberta e suor frio',
      'Smiling face with open mouth and tightly-closed eyes': 'Rosto de sorriso com a boca aberta e os olhos bem fechados',
      'Smiling face with halo': 'Rosto de sorriso com halo',
      'Smiling face with horns': 'Rosto de sorriso com chifres',
      'Winking face': 'Pisc a rosto',
      'Smiling face with smiling eyes': 'Rosto de sorriso com olhos sorridentes',
      'Face savoring delicious food': 'Rosto saboreando uma deliciosa comida',
      'Relieved face': 'Rosto aliviado',
      'Smiling face with heart-shaped eyes': 'Rosto de sorriso com os olhos em forma de coração',
      'Smiling face with sunglasses': 'Rosto de sorriso com óculos de sol',
      'Smirking face': 'Rosto sorridente',
      'Neutral face': 'Rosto neutra',
      'Expressionless face': 'Rosto inexpressivo',
      'Unamused face': 'O rosto não divertido',
      'Face with cold sweat': 'Rosto com suor frio',
      'Pensive face': 'O rosto pensativo',
      'Confused face': 'Cara confusa',
      'Confounded face': 'Rosto atônito',
      'Kissing face': 'Beijar Rosto',
      'Face throwing a kiss': 'Rosto jogando um beijo',
      'Kissing face with smiling eyes': 'Beijar rosto com olhos sorridentes',
      'Kissing face with closed eyes': 'Beijando a cara com os olhos fechados',
      'Face with stuck out tongue': 'Preso de cara com a língua para fora',
      'Face with stuck out tongue and winking eye': 'Rosto com estendeu a língua e olho piscando',
      'Face with stuck out tongue and tightly-closed eyes': 'Rosto com estendeu a língua e os olhos bem fechados',
      'Disappointed face': 'Rosto decepcionado',
      'Worried face': 'O rosto preocupado',
      'Angry face': 'Rosto irritado',
      'Pouting face': 'Beicinho Rosto',
      'Crying face': 'Cara de choro',
      'Persevering face': 'Perseverar Rosto',
      'Face with look of triumph': 'Rosto com olhar de triunfo',
      'Disappointed but relieved face': 'Fiquei Desapontado mas aliviado Rosto',
      'Frowning face with open mouth': 'Sobrancelhas franzidas rosto com a boca aberta',
      'Anguished face': 'O rosto angustiado',
      'Fearful face': 'Cara com medo',
      'Weary face': 'Rosto cansado',
      'Sleepy face': 'Cara de sono',
      'Tired face': 'Rosto cansado',
      'Grimacing face': 'Fazendo caretas face',
      'Loudly crying face': 'Alto chorando rosto',
      'Face with open mouth': 'Enfrentar com a boca aberta',
      'Hushed face': 'Flagrantes de rosto',
      'Face with open mouth and cold sweat': 'Enfrentar com a boca aberta e suor frio',
      'Face screaming in fear': 'Cara gritando de medo',
      'Astonished face': 'Cara de surpresa',
      'Flushed face': 'Rosto vermelho',
      'Sleeping face': 'O rosto de sono',
      'Dizzy face': 'Cara tonto',
      'Face without mouth': 'Rosto sem boca',
      'Face with medical mask': 'Rosto com máscara médica',

      // Line breaker
      'Break': 'Quebrar linha',

      // Math
      'Subscript': 'Subscrito',
      'Superscript': 'Sobrescrito',

      // Full screen
      'Fullscreen': 'Tela cheia',

      // Horizontal line
      'Insert Horizontal Line': 'Inserir linha horizontal',

      // Clear formatting
      'Clear Formatting': 'Remover formatação',

      // Undo, redo
      'Undo': 'Desfazer',
      'Redo': 'Refazer',

      // Select all
      'Select All': 'Selecionar tudo',

      // Code view
      'Code View': 'Exibir de código',

      // Quote
      'Quote': 'Citação',
      'Increase': 'Aumentar',
      'Decrease': 'Diminuir',

      // Quick Insert
      'Quick Insert': 'Inserção rápida',

      // Spcial Characters
      'Special Characters': 'Caracteres especiais',
      'Latin': 'Latino',
      'Greek': 'Grego',
      'Cyrillic': 'Cirílico',
      'Punctuation': 'Pontuação',
      'Currency': 'Moeda',
      'Arrows': 'Setas',
      'Math': 'Matemática',
      'Misc': 'Misc',

      // Print.
      'Print': 'Impressão',

      // Spell Checker.
      'Spell Checker': 'Verificador ortográfico',

      // Help
      'Help': 'Ajuda',
      'Shortcuts': 'Atalhos',
      'Inline Editor': 'Editor em linha',
      'Show the editor': 'Mostre o editor',
      'Common actions': 'Ações comuns',
      'Copy': 'Cópia de',
      'Cut': 'Cortar',
      'Paste': 'Colar',
      'Basic Formatting': 'Formatação básica',
      'Increase quote level': 'Aumentar o nível de cotação',
      'Decrease quote level': 'Diminuir o nível de cotação',
      'Image / Video': 'Imagem / Vídeo',
      'Resize larger': 'Redimensionar maior',
      'Resize smaller': 'Redimensionar menor',
      'Table': 'Tabela',
      'Select table cell': 'Selecione a célula da tabela',
      'Extend selection one cell': 'Ampliar a seleção de uma célula',
      'Extend selection one row': 'Ampliar a seleção uma linha',
      'Navigation': 'Navegação',
      'Focus popup / toolbar': 'Foco popup / barra de ferramentas',
      'Return focus to previous position': 'Retornar o foco para a posição anterior',

      // Embed.ly
      'Embed URL': 'URL de inserção',
      'Paste in a URL to embed': 'Colar um endereço URL para incorporar',

      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': 'O conteúdo colado vem de um documento Microsoft Word. Você quer manter o formato ou limpá-lo?',
      'Keep': 'Manter',
      'Clean': 'Limpar',
      'Word Paste Detected': 'Colar do Word detectado'
    },
    direction: 'ltr'
  };

})));
//# sourceMappingURL=pt_br.js.map
