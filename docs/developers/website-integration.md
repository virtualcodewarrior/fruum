
## Website integration
#### Basic integration

To install fruum to a website add the following snippet inside the ```<head>``` tag.

```
<script type="text/javascript">
window.fruumSettings = {
  // ... options here...
}
</script>
<script type="text/javascript" 
  src="<host>/go/<app_id>"
></script>
```

Where ```host``` is the domain of the fruum server and ```app_id``` is the application name, e.g. if you where running a local instance on port 3000 and had an application named by myforum, the setup would be:

```
<script type="text/javascript"
  src="http://localhost:3000/go/myforum"
></script>
```

Displaying fruum drawer

By default, fruum is hidden. To show it (in the embeddable form) you must do at least one of the following.
HTML mode

Add HTML elements, e.g. buttons or anchors that link to fruum:

 - For anchors set the ```href``` attribute to ```#fruum:<id>```
 - For any element type set the ```fruum-link``` attribute to ```<id>```

```<id>``` is either ```*``` to open the last visited fruum section or a specific section id, e.g. ```home```.

For example:

```
<div>
  <a href="#fruum:home">Fruum home</a>
  <span fruum-link="home">Fruum home</span>
  <span fruum-link="docs">Fruum docs</span>
  <a href="#fruum:*">Restore fruum</a>
</div>
```

Javascript mode

At any point after loader.js has been loaded, execute the

```
Fruum.launch();
```

command.
### What to see next?

 - [Single Sign On authentication](single-sign-on-authentication-sso.md)

