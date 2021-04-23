const jsonServer = require('json-server')
const auth = require('json-server-auth')

const rules = auth.rewriter({
    // Permission rules
    users: 600,
    messages: 640,
    // Other rules
    '/posts/:category': '/posts?category=:category',
  })

const app = jsonServer.create()
const router = jsonServer.router('data/db.json')

// /!\ Bind the router db to the app
app.db = router.db

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

// You must apply the auth middleware before the router
app.use(rules)
app.use(auth)
app.use(router)
app.listen(5000)