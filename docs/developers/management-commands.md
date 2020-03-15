
##Management commands

Use fruum command line tool to manage forum apps.

To invoke command line tools use either

```
npm start -- <arguments>
```

or

```
node index.js <arguments>
```

Here is a list of commands:

```
npm start -- --help
```

Displays a help message.

```
npm start --  --add-app <myforum>
```

Registers a new forum.

```
npm start --  --list-apps
```

Lists all registered forums.

```
npm start --  --update-app <myforum> 
  [--name <name>]   [--description <description>]
  [--url <host url>] [--auth-url <auth_webhook>]
  [--fullpage-url <fullpage_url>] [--theme <theme>]
  [--pushstate <true|false>]
  [--notifications-email <email>]
  [--contact-email <email>]
```

Update settings. You can also use the parameters when adding a new forum.

```
npm start -- --delete-app <myforum>
```

Remove a forum.

```
npm start -- --create-api-key <myforum>
```

Generate a new api key.

```
npm start -- --list-api-keys <myforum>
```

List all forum api keys.

```
npm start -- --delete-api-key <key>
```

Remove an api key.

```
npm start -- --reset-users <myforum>
```

Removes all registered users from forum.

```
npm start -- --gc-app <myforum>
```

Force purge archived documents.
