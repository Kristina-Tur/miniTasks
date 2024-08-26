import {Game, GAME_STATUSES} from "./game.js";

describe('game tests', () => {
    it('game should be status PENDING after start', async () => {
        const game = new Game()

        let status = await game.getStatus()
        expect(status).toBe(GAME_STATUSES.PENDING)

        await game.start()
        status = await game.getStatus()
        expect(status).toBe(GAME_STATUSES.IN_PROGRESS)
    })
})

it('should return correct google position that changed', async () => {
    for (let i = 0; i < 100; i++) {
        const game = new Game()
        game.settings = {
            grisSize: {
                columnsCount: 4,
                rowsCount: 3
            }
        }
        await game.start()

        expect([1, 2, 3, 4]).toContain(game.player1.position.x)
        expect([1, 2, 3]).toContain(game.player1.position.y)

        expect([1, 2, 3, 4]).toContain(game.player2.position.x)
        expect([1, 2, 3]).toContain(game.player2.position.y)

        expect(
            (game.player1.position.x !== game.player2.position.x ||
            game.player1.position.y !== game.player2.position.y) &&
            (game.player1.position.x !== game.google.position.x ||
            game.player1.position.y !== game.google.position.y) &&
            (game.player2.position.x !== game.google.position.x ||
            game.player2.position.y !== game.google.position.y)
        ).toBe(true)
        /*let googlePosition = await game.getGooglePosition()
        expect(googlePosition).toContain()

        const settings = await game.getSettings()


        const googlePosition2 = await game.getGooglePosition()
        await delay(settings.jumpInterval)
        const googlePosition3 = await game.getGooglePosition()
        expect(googlePosition2).not.toEqual(googlePosition3)
    */
    }

})

export const delay = (ms) => new Promise((res) => setTimeout(res, ms))