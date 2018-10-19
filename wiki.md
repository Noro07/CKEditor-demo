# Tips

## 1. How to edit config file

* CKeditor's config is under `ckeditor` folder `config.js`.
* To get more config parameter, you can check `index.html` under `samples` folder.

click `Toolbar Configurator` on the topright.
click `Advanced` to get the icon's name, `Basic` only show its icon.

## 2. How to get CKeditor data

```javascript
var data = CKEDITOR.instances.xxx.getData();
// xxx is target textarea id
```

## 3. Why there is a ckeditor backup

the samples folder works not correctly after editing(it should work), using the backup file.

## 4. Two ways to use CKeditor

* Framed Editing

```html
<html>
  <head>
    <title>CKEditor Sample</title>
    <script src="/ckeditor/ckeditor.js"></script>
  </head>
  <body>
    <form method="post">
      <p>
        My Editor:<br>
        <textarea name="editor1"><p>Initial value.</p></textarea>
        <script>
          CKEDITOR.replace('editor1');
        </script>
      </p>
      <p>
        <input type="submit">
      </p>
    </form>
  </body>
</html>  
```

* Inline Editing

you can edit the div

```html
<div id="editable" contenteditable="true">
  <h1>Inline Editing in Action!</h1>
  <p>The div element that holds this text is now editable.
</div>
```

or use the codes to turn on the editor

```html
<div id="editable" contenteditable="true">
  <h1>Inline Editing in Action!</h1>
  <p>The div element that holds this text is now editable.</p>
</div>
<script>    // Turn off automatic editor creation first.
  CKEDITOR.disableAutoInline = true;
  CKEDITOR.inline('editable');
</script>
```
