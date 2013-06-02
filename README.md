nodejs-dashboard
================

A nodejs sample application I put together in order to learn more about how to setup/use nodejs & express
this is a dashboard web app that grabs data from various sources that I'm interested in similar to iGoogle,
the good thing is that you have more control over the widgets.

At the moment the widgets are readonly but you could extend them to allow interactions, for instance to allow
emails to be marked as read.

credentials.json
----------------

The source does not include the credentials.json file for obvious reasons ;) you need to add your own file the format
looks like this:

```json
{
    "dashboard" : {
        "username" : "dashboard_username",
        "password" : "dashboard_password"
    },
    "gmail" : {
        "username" : "someone@googlemail.com",
        "password" : "gmail_password"
    }
}
```
