import fs from 'fs'
import path from 'path'

const DEEPL_API_KEY = process.env.DEEPL_API_KEY
const UK_DIR = path.join(process.cwd(), 'content/uk')
const EN_DIR = path.join(process.cwd(), 'content/en')

if (!fs.existsSync(EN_DIR)) fs.mkdirSync(EN_DIR, { recursive: true })

async function translate(text) {
  const response = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      auth_key: DEEPL_API_KEY,
      text: [text],
      source_lang: 'UK',
      target_lang: 'EN',
    }),
  })
  const data = await response.json()
  return data.translations[0].text
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { frontmatter: '', body: content }
  return { frontmatter: match[1], body: match[2] }
}

const files = fs.readdirSync(UK_DIR).filter(f => f.endsWith('.md'))

for (const file of files) {
  const enPath = path.join(EN_DIR, file)

  // пропускаємо якщо EN версія вже є
  if (fs.existsSync(enPath)) {
    console.log(`⏭️  Пропускаємо ${file} — вже перекладено`)
    continue
  }

  console.log(`🔄 Перекладаємо ${file}...`)

  const content = fs.readFileSync(path.join(UK_DIR, file), 'utf8')
  const { frontmatter, body } = parseFrontmatter(content)

  const translatedFrontmatter = await translate(frontmatter)
  const translatedBody = await translate(body)

  const result = `---\n${translatedFrontmatter}\n---\n${translatedBody}`
  fs.writeFileSync(enPath, result, 'utf8')

  console.log(`✅ ${file} перекладено`)
}