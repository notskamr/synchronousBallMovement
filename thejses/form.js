class Form {
display() {
    var title = createElement('h2')
    title.html('carRacingGame')
    title.position(130,0)
    var input = createInput('name')
    var button = createButton('play')
    input.position(130,160)
    button.position(250,200)

    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value
        playerCount++
        player.update(name)
        player.updateCount(playerCount)
        var greeting = createElement('h3')
        greeting.html('HALLO'+ name + '!')
        greeting.position(130,160)


    })
}

}