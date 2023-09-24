chrome.storage.sync.get(["key"]).then ((result) =>{
    chrome.storage.sync.get(["keyUrl"]).then ((resultUrl) =>{

        console.log(`Data recivied: ${result.key}`)
        console.log(`Url recivied: ${resultUrl.keyUrl}`)

   

        localStorage.setItem('url', (resultUrl.keyUrl))
        localStorage.setItem('bookmark', (result.key))

        var a = document.createElement('a')
        a.textContent = localStorage.getItem('bookmark');
        a.getAttribute('href');
        a.setAttribute('href', `${localStorage.getItem('url')}#content:~:text=${localStorage.getItem('bookmark')}`); 
		a.setAttribute('target', '_blank');
        var div = document.getElementById('list')
        var li = document.createElement('li')
        li.appendChild(a)
        div.appendChild(li)
    })
})


