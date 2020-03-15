const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);

const port = process.env.PORT || 3040;

function get_user(id, hash) {
	//validate input
	return {
		id: id,
		admin: true,
		email: 'foo@example.com',
		username: 'foo'
	}
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/auth', function(req, res) {
	const payload = req.body;
	if (payload.id && payload.hash) {
		const user = get_user(payload.id, payload.hash);
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

app.get('/:file(*)', (req, res, next) => {
	const file = req.params.file || 'index.html';
	const targetPath = file ? path.resolve(path.join(__dirname, '/', '', file)) : undefined;
	return (targetPath && fs.existsSync(targetPath)) ? res.sendFile(targetPath) : next();
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
