// import { jobs } from './_data'
import fs from 'fs'
let jobs = JSON.parse(fs.readFileSync('db/data.json')) || []

export function get(req, res) {  
  const { id } = req.params
  let job = jobs.find(job => job.id === id )
  res.end(JSON.stringify(job))
}

export function patch(req, res) {
  const { id } = req.params
  const { title, salary, details } = req.body
  let job = jobs.find(job => job.id === id)

  if (title) job.title = title
  if (salary) job.salary = salary
  if (details) job.details = details

  fs.writeFileSync('db/data.json', JSON.stringify(jobs, null, 2))
  res.end(JSON.stringify(jobs))
}

export function del(req, res) {
  const { id } = req.params
  jobs = jobs.filter(job => job.id !== id)

  fs.writeFileSync('db/data.json', JSON.stringify(jobs, null, 2))
  res.end(JSON.stringify(jobs))
}

