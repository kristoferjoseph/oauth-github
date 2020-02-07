@app
fly-ogy

@static

@http
get /login
get /auth

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
