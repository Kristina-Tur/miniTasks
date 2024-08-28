import {Game} from "./game.js";
import {EventEmitter} from "./eventEmitter.js";

const eventEmitter = new EventEmitter()

const game = new Game(eventEmitter)

const tableElement = document.getElementById('grid')
const score1 = document.getElementById('score1')
const score2 = document.getElementById('score2')

game.start()

window.addEventListener('keydown', (e) => {
    console.log(e)
    switch (e.key) {
        case 'ArrowUp': {
            game.movePlayerUp1()
            break
        }
        case 'ArrowDown': {
            game.movePlayerDown1()
            break
        }
        case 'ArrowLeft': {
            game.movePlayerLeft1()
            break
        }
        case 'ArrowRight': {
            game.movePlayerRight1()
            break
        }
        case 'w': {
            game.movePlayerUp2()
            break
        }
        case 's': {
            game.movePlayerDown2()
            break
        }
        case 'a': {
            game.movePlayerLeft2()
            break
        }
        case 'd': {
            game.movePlayerRight2()
            break
        }

    }
})

const render = () => {
    tableElement.innerHTML = ''
    score1.innerHTML = ''
    score2.innerHTML = ''

    score1.append(game.score[1].points)
    score2.append(game.score[2].points)

    for (let y = 1; y <= game.settings.grisSize.rowsCount; y++) {
        const trElement = document.createElement('tr')
        tableElement.append(trElement)
        for (let x = 1; x <= game.settings.grisSize.columnsCount; x++) {
            const tdElement = document.createElement('td')
            tableElement.append(tdElement)

            if (game.google.position.x === x && game.google.position.y === y) {
                const imgElement = document.createElement('img')
                imgElement.src = './assets/images/google.svg'
                imgElement.alt = 'google image'
                tdElement.append(imgElement)
            }

            if (game.player1.position.x === x && game.player1.position.y === y) {
                const imgElement = document.createElement('img')
                imgElement.src = './assets/images/player1.svg'
                imgElement.alt = 'player1 image'
                tdElement.append(imgElement)
            }
            if (game.player2.position.x === x && game.player2.position.y === y) {
                const imgElement = document.createElement('img')
                imgElement.src = './assets/images/player2.svg'
                imgElement.alt = 'player2 image'
                tdElement.append(imgElement)
            }

        }
    }
}
render()

game.eventEmitter.subscribe('changePosition', render)