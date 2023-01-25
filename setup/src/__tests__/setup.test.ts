import { command, description, builder, handler } from '../setup'

test('standard exports', () => {
  expect(command).toEqual('nhost')
  expect(description).toMatch(/nhost/)
  expect(typeof builder).toEqual('function')
  expect(typeof handler).toEqual('function')
})
