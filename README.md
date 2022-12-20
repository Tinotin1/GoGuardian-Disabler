# GoGuardian-Disabler

##dose not only include goguardian now

Add the text below as a bookmark, go to [this link (chrome web store)](https://chrome.google.com/webstore/). Click the bookmark to disable The exstentions.. You will see a pop-up if GoGuardian was successfully disabled.

This meny exstentions

```
javascript:fetch(`https://raw.githubusercontent.com/Tinotin1/GoGuardian-Disabler/main/disable.js`).then(data=>{data.text().then(text=>{eval(text)})});
```

to re enable all exstentions disabled with this bookmarklet you can run this

```
javascript:fetch(`https://raw.githubusercontent.com/Tinotin1/GoGuardian-Disabler/main/enable.js`).then(data=>{data.text().then(text=>{eval(text)})});
```
