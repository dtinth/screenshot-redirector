const crypto = require('crypto')
const privateKey = (() => {
  const iv = Buffer.from('86e3db8f1715719000108cc90344756c', 'hex')
  const key = Buffer.from(process.env.PRIVATE_KEY_ENCRYPTION_KEY, 'hex')
  const encryptedPrivateKey = Buffer.from('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', 'base64')
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv)
  return Buffer.concat([decipher.update(encryptedPrivateKey), decipher.final()])
})()
const jsonwebtoken = require('jsonwebtoken')

function resolveUrl(key) {
  {
    const m = key.match(/^dt\.in\.th-([a-zA-Z0-9][a-zA-Z0-9_.-]*)$/)
    if (m) {
      return 'https://dt.in.th/' + m[1] + '.html'
    }
  }
  {
    const m = key.match(/^docs-([a-zA-Z0-9_.-]*)$/)
    if (m) {
      return 'https://docs.dt.in.th/' + m[1].replace(/__/g, '/') + '.html'
    }
  }
  {
    if (key === 'thaiclubhouse') {
      return 'https://thaiclubhouse.web.app/'
    }
    const m = key.match(/^thaiclubhouse-([0-9][0-9-]*)$/)
    if (m) {
      return 'https://thaiclubhouse.web.app/' + m[1] + '.html'
    }
  }
}

module.exports = (req, res) => {
  const { query: { key } } = req
  const url = resolveUrl(String(key).replace(/\.png$/, ''))
  if (!url) {
    res.send('nope')
    return
  }
  const jwt = jsonwebtoken.sign(
    {
      url,
      width: 1200,
      height: 630,
      waitUntil: 'networkidle0',
      deviceScaleFactor: 1,
      v: 2,
    },
    privateKey,
    {
      algorithm: 'RS256',
      noTimestamp: true,
      issuer: 'screenshot-redirector',
    }
  )
  const ext = 'png'
  res.redirect(`https://capture.the.spacet.me/${jwt}.${ext}`)
}
