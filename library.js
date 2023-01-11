function start(){
    let initCards = Number(prompt('Com quantas cartas quer jogar?'))

    if(initCards > 3 && initCards <15 && initCards % 2 == 0){
        alert(`inciando com ${initCards}`)
    }else{
        alert('Quantidade inválida!')
        start()
    }
}