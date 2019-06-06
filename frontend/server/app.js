const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/text', (req, res) => {
    return app.render(req, res, '/text', req.query)
  })

  server.get('/components', (req, res) => {
    return app.render(req, res, '/card', req.query)
  })

  server.get('/parcours/:id', (req, res) => {
    return app.render(req, res, '/index', { id: req.params.id })
  })

  server.get('/parcours/:id/:chapitre/0', (req, res) => {
    return app.render(req, res, '/entete', { id: req.params.id, chapitre: req.params.chapitre })
  })

  server.get('/parcours/:id/introduction', (req, res) => {
    return app.render(req, res, '/index', { id: req.params.id })
  })

  server.get('/parcours/:id/conclusion', (req, res) => {
    return app.render(req, res, '/conclusion', { id: req.params.id })
  })

    server.get('/parcours/:id/:chapitre/:order', (req, res) => {
    return app.render(req, res, '/slide', { id: req.params.id, chapitre: req.params.chapitre, order: req.params.order })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
