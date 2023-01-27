import fs from 'fs'
import path from 'path'

import { standardAuthHandler } from '@redwoodjs/cli-helpers'

import { Args } from './setup'

const { version } = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8')
)

export async function handler({ force: forceArg }: Args) {
  standardAuthHandler({
    basedir: __dirname,
    forceArg,
    provider: 'nhost',
    authDecoderImport:
      "import { authDecoder } from '@redwoodjs/auth-nhost-api'",
    apiPackages: [`@redwoodjs/auth-nhost-api@${version}`],
    webPackages: [
      `@redwoodjs/auth-nhost-web@${version}`,
      '@nhost/nhost-js',
    ],
    notes: [
      "You will need to add your project's backend URL (NHOST_BACKEND_URL) and",
      'JWT Key Secret (NHOST_JWT_SECRET) to your .env file.',
    ],
  })
}
