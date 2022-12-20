const extensionsToDisable = ["haldlgldplgnggkjaafhelgiaglafanh", "ihjgnoifhnilgbjicdpingfgjhjeffij", "kmpjlilnemjciohjckjadmgmicoldglf", "ifeifkfohlobcbhmlfkenopaimbmnahb", "jaoebcikabjppaclpgbodmmnfjihdngk", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "gcjpefhffmcgplgklffgbebganmhffje", "lgcbihdlknkcmmnapfocjbkdefkhmolo", "obpdeolnggmbekmklghapmfpnfhpcndf", "ifcfidngfamkmphpijcmkojgfofldkce", "gmbmikajjgmnabiglmofipeabaddhgne"]
for( e in extensionsToDisable ){
    chrome.management.setEnabled(extensionsToDisable[e], true,)
}
alert(`Success!!`)
