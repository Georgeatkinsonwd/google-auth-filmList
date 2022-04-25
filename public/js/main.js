let deleteBtn = document.querySelectorAll('.del')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click',deleteFilm)
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