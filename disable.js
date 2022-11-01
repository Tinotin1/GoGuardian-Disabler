const extensionsToDisable = ["haldlgldplgnggkjaafhelgiaglafanh", "ihjgnoifhnilgbjicdpingfgjhjeffij", "kmpjlilnemjciohjckjadmgmicoldglf", "ifeifkfohlobcbhmlfkenopaimbmnahb", "jaoebcikabjppaclpgbodmmnfjihdngk", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "gcjpefhffmcgplgklffgbebganmhffje", "lgcbihdlknkcmmnapfocjbkdefkhmolo"]
for( e in extensions ){
    chrome.management.setEnabled(extensions[e], false,)
}
alert(`Success`)
