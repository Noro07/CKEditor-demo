//在plugins目录下建立我们和自定义插件同名的目录， 并且在里面建立一个叫plugin.js的文件。
// 这个js必须要叫 plugin.js
// 以下方法源于教程，查阅多方材料仍然不懂这个a和b的意义（只有在中文案例中使用），个人推荐使用第二种
(function () {
  //Section 1 : 按下自定义按钮时执行的代码 
  var a = {
    exec: function (editor) {
      alert("This a custome button from plugin.js!");
    }
  },
  //Section 2 : 创建自定义按钮、绑定方法 
  // 下面的myPlugin 需要跟 plugin文件名 以及下面的一致，在config中也需要调用的名字一致
  b = 'myPlugin'; //注意myplug名字
  CKEDITOR.plugins.add(b, {
    init: function (editor) {
      // 这里的myPluginDialog跟dialogs里面的function name要保持一致
      CKEDITOR.dialog.add('myPluginDialog', this.path + 'dialogs/sendButton.js'); //注意myplug名字
      editor.addCommand('myPlugin', new CKEDITOR.dialogCommand('myPluginDialog')); //注意myplug名字
      //注意myplug名字 和 图片路径
      editor.ui.addButton('myPlugin', {
        label: 'turn on my plugin',
        icon: this.path + 'resources/pictures/send.png',
        command: b
      });
    }
  });
})();

  // 或者直接使用下面的方法
  // CKEDITOR.plugins.add('myPlugin', {
  //   init: function (editor) {
  //     // 这里的myPluginDialog跟dialogs里面的function name要保持一致
  //     CKEDITOR.dialog.add('myPluginDialog', this.path + 'dialogs/sendButton.js'); //注意myplug名字
  //     editor.addCommand('myPlugin', new CKEDITOR.dialogCommand('myPluginDialog')); //注意myplug名字
  //     //注意myplug名字 和 图片路径
  //     editor.ui.addButton('myPlugin', {
  //       label: 'turn on my plugin',
  //       icon: this.path + 'resources/pictures/send.png',
  //       command: 'myPlugin'
  //     });
  //   }
  // });
