
## Email notifications

When users watch a topic or a stream in general they get notifications when someone replies.

Users watch streams when they manually hit the **watch** button on the header or when they create or reply to topics.

To setup email notifications for your forum you must do the following:

First, make sure you have successfully setup an email backend. Currently there is support for [Mandrill](https://www.mandrill.com/), [Mailgun](http://www.mailgun.com/) or SMTP emails, so select the appropriate backend and update config.json file (see below).

Then setup a sender email for your notifications by executing the command:

```
npm start -- --update-app <appid> --notifications-email <email>
```

For example:

```
npm start -- --update-app myforum --notifications-email "notifications@myawesomeapp.com"
```

Using mandrill

First of all make sure you have obtained an API key from [Mandrill](https://www.mandrill.com/) website.

Edit ```config.json``` and set the email engine to:

```
{
  ...
  "email_engine": "mandrill",
  ...
}
```

On the same file, there is a ```mandrill``` section. Set the API key and you are good to go.

```
{
  ...
  "mandrill": {
    "api_key": "abcdef"
  },  
  ...
}
```

Using mailgun

First of all make sure you have correctly setup a Mailgun account at [mailgun.com](http://www.mailgun.com/) and you have properly registered your domain.

Edit ```config.json``` and set the email engine to:

```
{
  ...
  "email_engine": "mailgun",
  ...
}
```

On the same file, there is a ```mailgun``` section. Set the API key and domain as provided by Mailgun and you are good to go.

```
{
  ...
  "mailgun": {
    "api_key": "key-abcdef",
    "domain": "example.com"
  },
  ...
}
```

Using generic SMTP

This is an email driver that handles generic SMTP servers. To enable it, edit ```config.json``` and set the email engine to:

```
{
  ...
  "email_engine": "smtp",
  ...
}
```

On the same file, there is a ```smtp``` section. Provide the section with the SMTP credentials.

```
{
  ...
  "smtp": {
    "host": "smtp.example.com",
    "port": 25,
    "secure": true,
    "auth": {
      "user": "foo",
      "pass": "bar"
    }
  },
  ...
}
```

The SMTP driver is build upon [Nodemailer](https://www.npmjs.com/package/nodemailer) so you may also use this documentation for more options to setup the service.
For example:

```
{
  ...
  "smtp": {
    "service": "hotmail",
    "auth": {
      "user": "foo@hotmail.com",
      "pass": "bar"
    }
  },
  ...
}
```

