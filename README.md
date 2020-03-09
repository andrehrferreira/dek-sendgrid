# @dekproject/sendgrid

SendGrid interface plugin for DEK

What does this plugin do?

* Control configuration for connection to SendGrid in production development mode in a simplified way with **dotenv**
* Performs connection implementation along the lines ES6 being pre requirement to start the project

## Instalation

To install the bootstrap we recommend using the CLI

```bash
$ yarn add @dekproject/sendgrid --save
$ nano .env
```

In the .env file add the following settings

```
SENDGRID_API_KEY=MYKEY
```

## Usage

Using direct

```bash
$ npm i @dekproject/scope
```

Using in the standard DEK skeleton

```js
import { $, app, sendgrid } from "@dekproject/scope";

app.get("/sendpassword", (req, res) => {
    const newPassword = new Date().getTime();

    sendgrid.send({
        to: 'noreplay@mydomain.com',
        from: req.query.email,
        subject: 'New Password!',
        text: `Your new password is ${newPassword}`,
        html: `<strong>Your new password is ${newPassword}</strong>`,
    }).then(() => {
        res.send("Email successfully sent!");
    }).catch((err) => {
        res.send(err);
    });
});

$.wait("sendgrid").then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});
```
