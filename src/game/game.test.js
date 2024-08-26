import {Game, GAME_STATUSES} from "./game.js";

describe('game tests', () => {
    let game
    beforeEach(() => {
        game = new Game()
    })
    afterEach(() => {
        game.stop()
    })
    it('game should be status PENDING after start', async () => {
        const game = new Game()

        let status = await game.getStatus()
        expect(status).toBe(GAME_STATUSES.PENDING)

        await game.start()
        status = await game.getStatus()
        expect(status).toBe(GAME_STATUSES.IN_PROGRESS)
    })


    it('should return correct players position that changed', async () => {
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
            game.stop()
        }
    })
    it('should google change position', async () => {
        for (let i = 0; i < 10; i++) {
            game.settings = {
                grisSize: {
                    columnsCount: 4,
                    rowsCount: 1
                },
                googleJumpInterval: 100
            }
            game.start()

            const prevGooglePosition = game.google.position.copy()
            await delay(150)
            expect(prevGooglePosition.equal(game.google.position)).toBe(false)
            game.stop()
        }
    })
    const delay = (ms) => new Promise((res) => setTimeout(res, ms))

    it('should google be caught by player1 or player2 for one row', async () => {
        for (let i = 0; i < 10; i++) {
            game = new Game()
            // setter
            game.settings = {
                grisSize: {
                    columnsCount: 3,
                    rowsCount: 1,
                },
            }

            await game.start()
            // p1 p2 g | p1 g p2 | p2 p1 g | p2 g p1 | g p1 p2 | g p2 p1
            const diffForPlayer1 = game.google.position.x - game.player1.position.x
            const prevGooglePosition = game.google.position.copy()
            if (Math.abs(diffForPlayer1) === 2) {
                const diffForPlayer2 = game.google.position.x - game.player2.position.x
                if (diffForPlayer2 > 0) {
                    game.movePlayerRight2()
                } else {
                    game.movePlayerLeft2()
                }
                expect(game.score[1].points).toBe(0)
                expect(game.score[2].points).toBe(1)
            } else {
                if (diffForPlayer1 > 0) {
                    game.movePlayerRight1()
                } else {
                    game.movePlayerLeft1()
                }
                expect(game.score[1].points).toBe(1)
                expect(game.score[2].points).toBe(0)
            }
            expect(game.google.position.equal(prevGooglePosition)).toBe(false)
            game.stop();
        }
    })

    it("catch google by player1 or player2 for one column", async () => {
        for (let i = 0; i < 10; i++) {
            game = new Game();
// setter
            game.settings = {
                grisSize: {
                    columnsCount: 1,
                    rowsCount: 3,
                },
            }


            await game.start();
            // p1   p1   p2   p2    g    g
            // p2    g   p1    g   p1   p2
            //  g   p2    g   p1   p2   p1
            const deltaForPlayer1 = game.google.position.y - game.player1.position.y;


            const prevGooglePosition = game.google.position.copy();


            if (Math.abs(deltaForPlayer1) === 2) {
                const deltaForPlayer2 =
                    game.google.position.y - game.player2.position.y;
                if (deltaForPlayer2 > 0) game.movePlayerDown2();
                else game.movePlayerUp2();


                expect(game.score[1].points).toBe(0);
                expect(game.score[2].points).toBe(1);
            } else {
                if (deltaForPlayer1 > 0) game.movePlayerDown1();
                else game.movePlayerUp1();


                expect(game.score[1].points).toBe(1);
                expect(game.score[2].points).toBe(0);
            }


            expect(game.google.position.equal(prevGooglePosition)).toBe(false);
            game.stop()
        }
    })
    it('first or second player wins', async () => {
        game = new Game();
        // setter
        game.settings = {
            grisSize: {
                columnsCount: 3,
                rowsCount: 1,
            },
        }

        game.score = {
            1: {points: 0},
            2: {points: 0},
        }

        await game.start()
        // p1 p2 g | p1 g p2 | p2 p1 g | p2 g p1 | g p1 p2 | g p2 p1
        const deltaForPlayer1 = game.google.position.x - game.player1.position.x

        if (Math.abs(deltaForPlayer1) === 2) {
            const deltaForPlayer2 = game.google.position.x - game.player2.position.x
            if (deltaForPlayer2 > 0) {
                game.movePlayerRight2()
                game.movePlayerLeft2()
                game.movePlayerRight2()
            } else {
                game.movePlayerLeft2()
                game.movePlayerRight2()
                game.movePlayerLeft2()
            }

            expect(game.state).toBe(GAME_STATUSES.FINISHED)
            expect(game.score[1].points).toBe(0)
            expect(game.score[2].points).toBe(3)
        } else {
            if (deltaForPlayer1 > 0) {
                game.movePlayerRight1()
                game.movePlayerLeft1()
                game.movePlayerRight1()
            } else {
                game.movePlayerLeft1()
                game.movePlayerRight1()
                game.movePlayerLeft1()
            }

            //expect(game.state).toBe(GAME_STATUSES.FINISHED)
            expect(game.score[1].points).toBe(3)
            expect(game.score[2].points).toBe(0)
        }
    })
})
