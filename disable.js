if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
    alert(`You aren't at the correct URL! Please go to https://chrome.google.com/webstore in order to use the bookmark properly.`)
    return
}
const extensionsToDisable = ["haldlgldplgnggkjaafhelgiaglafanh", "ihjgnoifhnilgbjicdpingfgjhjeffij", "kmpjlilnemjciohjckjadmgmicoldglf", "ifeifkfohlobcbhmlfkenopaimbmnahb", "jaoebcikabjppaclpgbodmmnfjihdngk", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "gcjpefhffmcgplgklffgbebganmhffje", "lgcbihdlknkcmmnapfocjbkdefkhmolo"]
for( e in extensions ){
    chrome.management.setEnabled(extensions[e], false,)
}
alert(`Success`)
