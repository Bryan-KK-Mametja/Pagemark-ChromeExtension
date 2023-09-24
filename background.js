chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        "id": "bookmark",
        "title": "Tag \"%s\"",
        "contexts": ["selection"]
    })
})


chrome.contextMenus.onClicked.addListener((data) => {
    var text = data.selectionText
    var pageUrl = data.pageUrl

    console.log(`Sending: ${text}`)
    console.log(`Url: ${pageUrl}`)

    chrome.storage.sync.set({ key: text}).then (() => {
        console.log(`Value has been set: ${text}`)
    });
    chrome.storage.sync.set({ keyUrl: pageUrl}).then (() => {
        console.log(`Value has been set: .${pageUrl}`)
    });
})

