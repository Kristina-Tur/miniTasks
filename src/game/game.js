import {NumberUtil} from "./number-magic-util.js";

export class Game {
    #state
    #googlePosition
    #numberUtil
    #settings
    #player1
    #player2
    #google

    constructor() {
        this.#state = GAME_STATUSES.PENDING
        this.#googlePosition = {x: 1, y: 2}
        this.#settings = {
            grisSize: {
                columnsCount: 4,
                rowsCount: 3
            },
            jumpInterval: 10
        }
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

    #createUnits() {
        const playerPosition1 = this.#getRandomPosition()
        this.#player1 = new Player(1, playerPosition1)
        const playerPosition2 = this.#getRandomPosition([playerPosition1])
        this.#player2 = new Player(2, playerPosition2)
        const googlePosition = this.#getRandomPosition([playerPosition1, playerPosition2])
        this.#google = new Google(googlePosition)
    }

    async start() {
        this.#state = GAME_STATUSES.IN_PROGRESS
        this.#createUnits()
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
    get google(){
        return this.#google
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
