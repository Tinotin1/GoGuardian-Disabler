var isstore = document.URL;
if(isstore == "https://chrome.google.com/webstore/category/extensions") {
const extensionsToDisable = ["haldlgldplgnggkjaafhelgiaglafanh", "ihjgnoifhnilgbjicdpingfgjhjeffij", "kmpjlilnemjciohjckjadmgmicoldglf", "ifeifkfohlobcbhmlfkenopaimbmnahb", "jaoebcikabjppaclpgbodmmnfjihdngk", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "gcjpefhffmcgplgklffgbebganmhffje", "lgcbihdlknkcmmnapfocjbkdefkhmolo", "obpdeolnggmbekmklghapmfpnfhpcndf", "ifcfidngfamkmphpijcmkojgfofldkce", "gmbmikajjgmnabiglmofipeabaddhgne"]
for( e in extensionsToDisable ){
    chrome.management.setEnabled(extensionsToDisable[e], false,)
}
alert(`Success!!`)
}else{
    alert("please go to https://chrome.google.com/webstore/category/extensions");
};
