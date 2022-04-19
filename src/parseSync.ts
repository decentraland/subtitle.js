import { Parser } from './Parser'
import { NodeList } from './types'

/**
 * @public
 * @param input string subtitle file to be parsed into NodeList
 * @returns subtitle file as a {NodeList}
 */
export const parseSync = (input: string): NodeList => {
  const buffer: NodeList = []
  const parser = new Parser({
    push: node => buffer.push(node)
  })

  input
    .replace(/\r\n/g, '\n')
    .split('\n')
    .forEach(line => parser.parseLine(line))

  parser.flush()

  return buffer
}
