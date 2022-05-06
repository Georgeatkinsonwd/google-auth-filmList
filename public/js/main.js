const deleteBtn = document.querySelectorAll('.del')
const filmWatchedArray = document.querySelectorAll('img.not img.filmPic')
const filmsUnwatchedArray = document.querySelectorAll('img.completed')

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
    const filmId = this.parentNode.parentNode.dataset.id
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
    console.log('click event working')
    const filmId = this.parentNode.dataset.id
    try {
        document.querySelector('.watchedList').appendChild(document.querySelector(filmId))
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
    console.log('test')
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

