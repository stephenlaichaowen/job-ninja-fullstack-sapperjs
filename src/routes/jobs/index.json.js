import { v4 as uuid } from 'uuid'
import fs from 'fs'
// let jobs = JSON.parse(fs.readFileSync('src/routes/jobs/_data.json')) || []
let jobs = JSON.parse(fs.readFileSync('db/data.json')) || []

export function get(req, res) {  
  res.end(JSON.stringify(jobs))
}

export function post(req, res) {
  const id = uuid()
  jobs.unshift({ id, ...req.body })
  fs.writeFileSync('db/data.json', JSON.stringify(jobs, null, 2))
  res.end(JSON.stringify(jobs))
}

