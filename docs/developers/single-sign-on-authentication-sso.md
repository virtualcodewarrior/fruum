
## Single Sign On authentication (SSO)
#### Overview

Fruum is designed to easily hook to a website's existing user base using the following flow:

```
🌐 Website creates a user payload
⬇
🌐 Fruum sends the payload to an auth server using POST
⬇
💻 The auth server returns an authenticated payload in JSON format
⬇
💻 Fruum server registers the user
⬇
🌐 User permissions are sent back to browser
```              

#### Registering an authentication server

Before starting you must register a an authentication URL to the application's (hosting) server by using the command:

```              
npm start -- --update-app <id> --auth-url <url>
```              

For example:

```              
npm start -- --update-app myforum --auth-url "https://awesomeapp.com/fruum/auth" 
```              

Every time a user logs in, this URL will be hit using a POST request with a body set to a JSON payload object. The url must respond with a JSON object such as:

```              
{
        id: "12034"
        anonymous: false,
        admin: false,
        username: "mrcockpit",
        displayname: "Mr Cockpit",
        email: "mrcockpit@awesomeapp.com",
        avatar: "https://awesomeapp.com/avatars/mrcockpit/23.png"
}
```              

Note that **displayname**, **email**, **avatar** fields are optional.

Returning an email, will enable email notifications for watched elements for the user.
Setting the user payload

On the website page, you must define the user payload before the fruum integration code:

```              
<script type="text/javascript">
  window.fruumSettings = {
     user: {
        id: <user id>,
        hash: <hash key>
     }
  }
</script>
```              

Alternatively, if the authentication data is available at a later state, e.g. by javascript authentication, the process can be triggered using the following javascript code:

```              
window.FruumData = window.FruumData || [];
window.FruumData.push({
  user: {
    id: <userid>,
    ....
  }
});
```              

Examples
PHP

Client:

```              
<script type="text/javascript">
window.fruumSettings = {
  user: {
    id: "<?php echo $userid; ?>",
    hash: "<?php echo md5($email); ?>"
  }
}
</script>
```              

Server:

```              
<?php
  $response = array();
  $payload = json_decode(file_get_contents('php://input'), true);
  if (isset($payload['id']) && isset($payload['hash'])) {
    $userid = mysql_real_escape_string($payload['id']);
    $hash = $payload['hash'];
    $results = mysql_query("SELECT username, fullname, email FROM accounts WHERE userid='$userid'");
    if ($row = mysql_fetch_assoc($results)) {
      if (!strcmp(md5('$row['email']), $payload['hash'])){
        $response['id'] = strval($userid);
        $response['anonymous'] = false;
        $response['admin'] = false;
        $response['email'] = $row['email'];
        $response['username'] = $row['username'];
        $response['displayname'] = $row['fullname'];
      }
    }
  }
  header('Content-Type: application/json');
  echo json_encode($response);
?>
```              

node.js

Client:

```              
<script type="text/javascript">
window.fruumSettings = {
  user: {
    id: "<%= userid %>",
    hash: "<%= hash %>"
  }
}
</script>
```              

Server:

```              
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require('http').Server(app);

function get_user(id, hash) {
  //validate input
  return {
    id: id,
    admin: false,
    email: 'foo@example.com',
    username: 'foo'
  }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/auth', function(req, res) {
  var payload = req.body;
  if (payload.id && payload.hash) {
    var user = get_user(payload.id, payload.hash);
    if (user) {
      res.json({
        id: user.id,
        anonymous: false,
        admin: user.admin,
        username: user.username,
        displayname: user.username,
        email: user.email,
        avatar: user.avatar || ''
      });
      return;
    }
  }
  //continue as anonymous
  res.json({});
});
```              

What to see next?

 - [Management commands](management-commands.md)

