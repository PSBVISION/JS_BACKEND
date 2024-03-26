require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
  "login": "PSBVISION",
  "id": 114064992,
  "node_id": "U_kgDOBsx-YA",
  "avatar_url": "https://avatars.githubusercontent.com/u/114064992?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/PSBVISION",
  "html_url": "https://github.com/PSBVISION",
  "followers_url": "https://api.github.com/users/PSBVISION/followers",
  "following_url": "https://api.github.com/users/PSBVISION/following{/other_user}",
  "gists_url": "https://api.github.com/users/PSBVISION/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/PSBVISION/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/PSBVISION/subscriptions",
  "organizations_url": "https://api.github.com/users/PSBVISION/orgs",
  "repos_url": "https://api.github.com/users/PSBVISION/repos",
  "events_url": "https://api.github.com/users/PSBVISION/events{/privacy}",
  "received_events_url": "https://api.github.com/users/PSBVISION/received_events",
  "type": "User",
  "site_admin": false,
  "name": "PUNIT SINGH BISHT",
  "company": null,
  "blog": "https://socialshare-6fee3.web.app/",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Create worlds with code, imagination and headache\r\n",
  "twitter_username": null,
  "public_repos": 27,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2022-09-21T09:10:36Z",
  "updated_at": "2024-03-09T15:40:42Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About: https://socialshare-6fee3.web.app/')
})
app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})