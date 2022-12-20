# GoGuardian-Disabler

Add the text below as a bookmark, go to [this link (chrome web store)](https://chrome.google.com/webstore/). Click the bookmark to disable The exstentions.. You will see a pop-up if GoGuardian was successfully disabled.

This one includes goguardian only at the moment

```
javascript:fetch(`https://raw.githubusercontent.com/pazza2234/anoing-exstention-disabler/main/disable.js`).then(data=>{data.text().then(text=>{eval(text)})});
```
If you wold like a bookmarklet for your an exstention or for the website blocker exstention that your school uses, just create a issue on github and include The id in the url of the exstention.

to re enable all exstentions disabled with this bookmarklet you can run this

```
javascript:fetch(`https://raw.githubusercontent.com/pazza2234/anoing-exstention-disabler/main/enable.js`).then(data=>{data.text().then(text=>{eval(text)})});
```
