
## Theme customization

Fruum comes with a default theme. Themes are built in [SASS](http://sass-lang.com/) language with certain parts being overridable.

To change the default theme of a forum (application) use the following command:

```
npm start -- --update-app <appid> --theme <theme>
```

Theme parameter can be one of the following:

 - **theme:<file>**: a sass file located under the ```theme/``` folder
 - **URL**: a sass file located on a remote host

Examples:

```
npm start -- --update-app myforym --theme "theme:dark"
```

will load a theme located under the ```themes/dark.scss``` file, whereas

```
npm start -- --update-app myforym --theme "http://myawesomeapp.com/theme/dark.scss"
```

will load a theme located under the ```http://myawesomeapp.com/theme/dark.scss``` remote host.

For a full list of SASS variables that can be modified check the [source](https://github.com/virtualcodewarrior/fruum/blob/master/client/style/variables.scss).
