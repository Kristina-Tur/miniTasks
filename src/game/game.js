import {NumberUtil} from "./number-magic-util.js";

export class Game {
    #state
    #googlePosition
    #numberUtil
    #settings
    #player1
    #player2
    #google
    #googleJumpIntervalID
    #score = {
        1: {points: 0},
        2: {points: 0},
    }

    constructor(eventEmitter) {
        this.#state = GAME_STATUSES.PENDING
        this.#googlePosition = {x: 1, y: 2}
        this.#settings = {
            grisSize: {
                columnsCount: 4,
                rowsCount: 4
            },
            googleJumpInterval: 1000,
            pointsToWin: 3
        }
        this.eventEmitter = eventEmitter
    }

    #getRandomPosition(takenPosition = []) {
        let newX
        let newY

        do {
            newX = NumberUtil.getRandomNumber(this.#settings.grisSize.columnsCount)
            newY = NumberUtil.getRandomNumber(this.#settings.grisSize.rowsCount)
        } while (
            takenPosition.some(position => position.x === newX && position.y === newY)
            )

        return new Position(newX, newY)
    }

    #moveGoogleToRandomPosition(isStartPosition) {
        const googlePosition = isStartPosition
            ? this.#getRandomPosition([this.#player1.position, this.#player2.position])
            : this.#getRandomPosition([this.#player1.position, this.#player2.position, this.#google.position])
        this.#google = new Google(googlePosition)

        this.eventEmitter.emit('changePosition')
    }

    #createUnits() {
        const playerPosition1 = this.#getRandomPosition()
        this.#player1 = new Player(1, playerPosition1)
        const playerPosition2 = this.#getRandomPosition([playerPosition1])
        this.#player2 = new Player(2, playerPosition2)
        this.#moveGoogleToRandomPosition(true)
    }

    #startGoogleJumpInterval(){
        this.#googleJumpIntervalID = setInterval(() => {
            this.#moveGoogleToRandomPosition(false)
        }, this.settings.googleJumpInterval)
    }

    async start() {
        this.#state = GAME_STATUSES.IN_PROGRESS
        this.#createUnits()
        this.#startGoogleJumpInterval()
    }

    stop() {
        this.#state = GAME_STATUSES.FINISHED
        clearInterval(this.#googleJumpIntervalID)
    }

    #isBorder(movingPlayer, step) {
        let prevPlayerPosition = movingPlayer.position.copy()
        if (step.x) {
            prevPlayerPosition.x += step.x
            return prevPlayerPosition.x < 1 || prevPlayerPosition.x > this.settings.grisSize.columnsCount
        }
        if (step.y) {
            prevPlayerPosition.y += step.y
            return prevPlayerPosition.y < 1 || prevPlayerPosition.y > this.settings.grisSize.rowsCount
        }
    }

    #isOtherPlayer(movingPlayer, otherPlayer, step) {
        let prevPlayerPosition = movingPlayer.position.copy()
        if (step.x) {
            prevPlayerPosition.x += step.x
        }
        if (step.y) {
            prevPlayerPosition.y += step.y
        }
        return prevPlayerPosition.equal(otherPlayer.position)
    }

    #checkGoogleCatching(movingPlayer){
        if(movingPlayer.position.equal(this.#google.position)){
            this.#score[movingPlayer.id].points++
            this.#moveGoogleToRandomPosition()
        }
        if(this.#score[movingPlayer.id].points === this.#settings.pointsToWin){
            this.stop()
            this.#google = new Google(new Position(0, 0))
            return
        }
        clearInterval(this.#googleJumpIntervalID)
        this.#startGoogleJumpInterval()
    }

    #movePlayer(movingPlayer, otherPlayer, step){
        const isBorder = this.#isBorder(movingPlayer, step)
        const isOtherPlayer = this.#isOtherPlayer(movingPlayer, otherPlayer, step)
        if (isBorder || isOtherPlayer) {
            return
        }
        if(step.x){
            movingPlayer.position.x += step.x
        }
        if(step.y){
            movingPlayer.position.y += step.y
        }
        this.#checkGoogleCatching(movingPlayer)

        this.eventEmitter.emit('changePosition')
    }

    movePlayerRight1() {
        const step = {x: 1}
       this.#movePlayer(this.#player1,this.#player2, step)
    }

    movePlayerLeft1() {
        const step = {x: -1}
        this.#movePlayer(this.#player1,this.#player2, step)
    }

    movePlayerUp1() {
        const step = {y: -1}
        this.#movePlayer(this.#player1,this.#player2, step)
    }

    movePlayerDown1() {
        const step = {y: 1}
        this.#movePlayer(this.#player1,this.#player2, step)
    }

    movePlayerRight2() {
        const step = {x: 1}
        this.#movePlayer(this.#player2,this.#player1, step)
    }

    movePlayerLeft2() {
        const step = {x: -1}
        this.#movePlayer(this.#player2,this.#player1, step)
    }

    movePlayerUp2() {
        const step = {y: -1}
        this.#movePlayer(this.#player2,this.#player1, step)
    }

    movePlayerDown2() {
        const step = {y: 1}
        this.#movePlayer(this.#player2,this.#player1, step)
    }

    get player1() {
        return this.#player1
    }

    get player2() {
        return this.#player2
    }

    get settings() {
        return this.#settings
    }

    set settings(settings) {
        this.#settings = settings
    }

    get google() {
        return this.#google
    }

    get score(){
        return this.#score
    }
    set score(score) {
        this.#score = score
    }
    #jumpGoogle() {
        const newGooglePosition = {
            x: this.#numberUtil.getRandomNumber(0, this.#settings.grisSize.columnsCount),
            y: this.#numberUtil.getRandomNumber(0, this.#settings.grisSize.rowsCount)
        }
        if (newGooglePosition.x === this.#googlePosition.x && newGooglePosition.y === this.#googlePosition.y) {
            this.#jumpGoogle()
        } else {
            this.#googlePosition = newGooglePosition
        }
    }

    async getStatus() {
        return this.#state
    }


    async getGooglePosition() {
        setInterval(() => this.#jumpGoogle(), this.#settings.jumpInterval)
        return this.#googlePosition
    }


}

export const GAME_STATUSES = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN_PROGRESS',
    FINISHED: 'FINISHED'
}

class Units {
    constructor(position) {
        this.position = position
    }
}

class Player extends Units {
    constructor(id, position) {
        super(position)
        this.id = id
    }
}

class Google extends Units {
    constructor(position) {
        super(position)
    }
}

class Position {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    copy() {
        return new Position(this.x, this.y)
    }

    equal(somePosition) {
        return somePosition.x === this.x && somePosition.y === this.y
    }
}

class Settings {
    constructor(gridSize) {
        this.gridSize = gridSize
    }
}

class GridSize {
    constructor(columns, rows) {
        this.columns = columns
        this.rows = rows
    }
}
