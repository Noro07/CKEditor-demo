/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.language = 'zh-cn'; // 配置语言  
	config.uiColor = '#5aaafa'; // 背景颜色
	config.width = 'auto'; // 宽度  
	config.height = '300px'; // 高度  
  //自定义的工具栏   
	config.extraPlugins="myPlugin";   //增加了我们的自定义插件
	config.toolbar = 'Full'; // 工具栏风格（基础'Basic'、全能'Full'、自定义）plugins/toolbar/plugin.js
	config.toolbar_Full =
	[   
		{ name: 'custome_plugin', items : [ 'myPlugin'] }, //将自定义插件加入toolbar
		{ name: 'insert', items : [ 'upload','album','-','Table' ] },
		{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
		{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript' ] },
		{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','-','Blockquote',
		'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
		{ name: 'colors', items : [ 'TextColor','BGColor' ] },
		{ name: 'document', items : [ 'Source' ] },
	];
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};
