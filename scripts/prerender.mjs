import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const serverEntry = resolve(root, 'dist-ssr/entry-server.js')
const indexPath = resolve(root, 'dist/index.html')

if (!existsSync(serverEntry)) {
  console.error(`✗ SSR bundle not found at ${serverEntry}`)
  process.exit(1)
}
if (!existsSync(indexPath)) {
  console.error(`✗ Client build not found at ${indexPath}`)
  process.exit(1)
}

const { render } = await import(serverEntry)
const html = render()

const template = readFileSync(indexPath, 'utf-8')
if (!template.includes('<div id="root"></div>')) {
  console.error('✗ Could not find <div id="root"></div> placeholder in index.html')
  process.exit(1)
}

const output = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
writeFileSync(indexPath, output)

const byteSize = Buffer.byteLength(html, 'utf-8')
console.log(`✓ Prerendered HTML injected into dist/index.html (${byteSize.toLocaleString()} bytes)`)
