const deleteBtn = document.querySelectorAll('.del')
const filmWatchedArray = document.querySelectorAll('span.not')
const filmsUnwatchedArray = document.querySelectorAll('span.completed')
document.querySelector('.imageTest').addEventListener('click',filmImage)

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click',deleteFilm)
})

Array.from(filmWatchedArray).forEach((el)=>{
    el.addEventListener('click',filmWatched)
})

Array.from(filmsUnwatchedArray).forEach((el)=>{
    el.addEventListener('click',filmUnwatched)
})


async function deleteFilm(){
    const filmId = this.parentNode.dataset.id
    try{
        const response = await fetch('films/deleteFilm',{
            method:'delete',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                'filmId': filmId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}


async function filmWatched(){
    const filmId = this.parentNode.dataset.id
    try {
        const response = await fetch('films/markWatched',{
            method:'put',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify({
                'filmId': filmId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log(error)
    }
}

async function filmUnwatched(){
    const filmId = this.parentNode.dataset.id
    try {
        const response = await fetch('films/markUnwatched',{
            method:'put',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify({
                'filmId':filmId
            })
        })
        const data = response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log(error)
    }
}









async function filmImage(){
    try {
        const response = await fetch('https://imdb-api.com/en/API/SearchMovie/k_91k1mh3e/inception')
        const data = await response.json()
        console.log(data.results[0].image)
    } catch (error) {
        console.log(error)
    }
}