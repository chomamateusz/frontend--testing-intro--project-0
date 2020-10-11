import Counter from '../src/Counter'
import DecreasingCounter from '../src/DecreasingCounter'

const originalLogFn = console.log

beforeAll(() => console.log = jest.fn())
beforeEach(() => console.log.mockReset())
afterAll(() => console.log = originalLogFn)

describe('Counter', () => {

    describe('class public fields', () => {
        it('Counter should be an ES6 class instance', () => {

            expect(() => Counter()).toThrow('Cannot call a class as a function')

        })

        it('should have `number` property for storing data', () => {

            const counter1 = new Counter('body')

            expect(counter1.number).toBeDefined()

        })

        it('should have `selector` property for storing passed', () => {

            const selector = 'body'
            const counter1 = new Counter(selector)

            expect(counter1.selector).toBeDefined()
            expect(counter1.selector).toBe(selector)

        })

        it('should have `container` property for storing found HTML element', () => {

            const counter1 = new Counter('body')

            expect(counter1.container).toBeDefined()
            expect(counter1.container).toBeInstanceOf(HTMLElement)
            expect(counter1.container).toBeInstanceOf(HTMLBodyElement)

        })

    })

    describe('business logic – increasing and decreasing', () => {

        it('should start form `0`', () => {

            const counter1 = new Counter('body')

            expect(counter1.number).toBe(0)

        })

        it('should start form specified value if it is passed as second arg', () => {

            const counter1 = new Counter('body', 123)

            expect(counter1.number).toBe(123)

        })

        it('should have `.inc` metod which increase stored number by one', () => {

            const counter1 = new Counter('body')

            expect(counter1.inc).toBeDefined()
            expect(counter1.inc).toBeInstanceOf(Function)
            expect(() => counter1.inc()).not.toThrow()

            expect(counter1.number).toBe(1)

        })

        it('should have `.inc` metod which increase stored number by one, if start value is specified', () => {

            const counter1 = new Counter('body', 123)

            counter1.inc()

            expect(counter1.number).toBe(124)

        })

        it('should have `.status` method that return stored value', () => {

            const counter1 = new Counter('body')
            const counter2 = new Counter('body', 123)

            expect(counter1.status()).toBe(0)
            expect(counter1.status()).toBe(counter1.number)
            expect(counter2.status()).toBe(123)
            expect(counter2.status()).toBe(counter2.number)

        })

        it('should have `.status` method that console log stored value', () => {

            const counter1 = new Counter('body')

            counter1.status()

            expect(console.log).toHaveBeenCalled()
            expect(console.log).toHaveBeenCalledTimes(1)
            expect(console.log.mock.calls[0]).toEqual(['Current number is: 0'])

        })

        it('should have `.toString` method that informs about stored value', () => {

            const counter1 = new Counter('body')

            expect(counter1.toString()).toBe('Current number is: 0')

        })

        it('should have `.valueOf` method returns stored value', () => {

            const counter1 = new Counter('body')

            expect(counter1.valueOf()).toBe(0)
            expect(counter1.valueOf()).toBe(counter1.number)

        })

    })

})

describe('DecreasingCounter', () => {

    describe('business logic – increasing and decreasing', () => {

        it('DecreasingCounter should be an ES6 class instance', () => {

            expect(() => DecreasingCounter()).toThrow('Cannot call a class as a function')

        })


    })

})