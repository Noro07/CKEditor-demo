(function () {
  // 这里的myPluginDialog需要跟外面plugin.js中的文件名字一致
  function myPluginDialog(editor) {

    return {
      title: 'Who does you want to say hello?', //窗口标题
      minWidth: 500,
      minHeight: 200,
      buttons: [{
        type: 'button',
        id: 'someButtonID',
        label: 'Custome Button',
        onClick: function () {
            alert('This is a custome button from sendButton.js');
        }
        //对话框底部的自定义按钮
      },
      CKEDITOR.dialog.okButton, //对话框底部的确定按钮
      CKEDITOR.dialog.cancelButton], //对话框底部的取消按钮
      contents:                      //每一个contents在对话框中都是一个tab页
      [
        // {
        //   id: 'name-container',            //contents的id
        //   label: 'Label contents Your name',
        //   title: 'Title contents Your name',
        //   elements:             //定义contents中的内容，我们这里放一个文本框，id是name
        //   [
        //     {
        //       id: 'name',
        //       type: 'text',
        //       style: 'width: 50%;',
        //       label: 'Label element Your name',
        //     }
        //   ]
        // },
        // {
        //   id: 'sex-container',            //contents的id
        //   label: 'Label contents Your sex',
        //   title: 'Title contents Your sex',
        //   elements:             //定义contents中的内容，我们这里放一个文本框，id是name
        //   [
        //     {
        //       id: 'sex',
        //       type: 'text',
        //       style: 'width: 50%;',
        //       label: 'Label element Your sex',
        //     }
        //   ]
        // },
        {
          id: 'news-container', //contents的id
          label: 'label news',
          title: 'title news',
          elements: [{
            type: "html",
            html: "<iframe id='myiframe' width='100%' height='100%' src='" + "./myiframe.html" + "'></iframe>",
            style: "width:800px;height:580px;padding:0;"
          }]
        }
      ],
      onLoad: function () {
          // alert('onLoad');
      },
      onShow: function () {
          // alert('onShow');
      },
      onHide: function () {
          // alert('onHide');
        // the following looks doesn't work in different domains in firefox
        if (document.getElementById('myiframe').contentDocument) document.getElementById('myiframe').contentDocument.location.reload();

        // it works in different domains in firefox
        // Resetting the src attribute directly:
        var iframe = document.getElementById('myiframe');
        iframe.src = iframe.src;
      },
      onOk: function () {
        // //点击 确定 按钮之后触发的事件
        // var name = this.getValueOf('name-container', 'name');
        // var sex = this.getValueOf('sex-container', 'sex');
        // //从界面上取值的方法，getValueOf( 'contents的id', '控件的id' )
        // editor.insertHtml('<p>' + 'Hello, ' + name + '</p>');
        // //将内容放入到editor
        // this.commitContent();

        var html = "";
        var your_name = document.getElementById('myiframe').contentDocument.getElementById('username');
        // chrome使用 contentWindow.document 替代 contentDocument 但仍然会遇到跨域问题
        // 只不过不会再遇到 Cannot read property 'getElementById' of null
        // 而是 Blocked a frame with origin "null" from accessing a cross-origin frame.
        //使用JS最基础的getElementById找到我们的iframe控件，然后再获取id为username的控件

        html = html + "<h2>" + your_name.value + ": </h2>";

        var selected_books = document.getElementById('myiframe').contentDocument.getElementsByName('yourbook');
        //使用JS最基础的getElementById找到我们的iframe控件，然后再获取所有name为yourBook的控件

        var books = "";
        for (var i = 0; i < selected_books.length; i++) {
          //遍历我们的selected数组
          if (selected_books[i].checked) {
            books = books + "<p> " + selected_books[i].value + "</p>";
          }
        }

        html = html + books;
        editor.insertHtml(html);
        this.commitContent();
      },
      onCancel: function () {
          // alert('onCancel');
      },
      resizable: CKEDITOR.DIALOG_RESIZE_HEIGHT
    };
  }

  CKEDITOR.dialog.add('myPluginDialog', function (editor) {
    return myPluginDialog(editor);
  });

})();
