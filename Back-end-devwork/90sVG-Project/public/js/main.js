const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteGame)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

async function deleteGame(){
    const gName = this.parentNode.childNodes[1].innerText
    const cName = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteGame', {
            method:'delete',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                'gameNameS': gName,
                'consoleNameS': cName
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const gName = this.parentNode.childNodes[1].innerText
    const cName = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'gameNameS': gName,
                'consoleNameS': cName,
                'likesS': tLikes
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}