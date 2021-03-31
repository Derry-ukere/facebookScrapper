const comments = [
  'this is a comment one',
  'this is a comment two',
  'this is a comment  three',
  'this is a comment four',
  'this is a comment five',
]
const commenters = [
  'john doe 1',
  'john doe 2',
  'john doe 3',
  'john doe 4',
  'john doe 5',
]
const posts = [
  'this is post one',
  'this is post one',
  'this is post one',
  'this is post one',
  'this is post one',
]
const date = ['1-2-2012', '2-2-2012', '3-2-2012', '4-2-2012', '5-2-2012']
const gender = ['male1', 'female2', 'male3', 'female4', 'female5']
const location = [
  'london area 1',
  'london area 2',
  'london area 3',
  'london area 4',
  'london area 5',
]

function presentComments(fileName) {
  const res = commenters.map((commenter, i) => ({
    commenter,
    comment: comments[i],
  }))
  const wb = xlxs.utils.book_new()
  const ws = xlxs.utils.json_to_sheet(res)
  xlxs.utils.book_append_sheet(wb, ws)
  xlxs.writeFile(wb, fileName)
}

function presentPosts(scrappedPosts) {
  const wb = xlxs.utils.book_new()
  const ws = xlxs.utils.json_to_sheet(res)
  xlxs.utils.book_append_sheet(wb, ws)
  xlxs.writeFile(wb, scrappedPosts)
}

function generateName() {
  const day = new Date()
  let dayObj = {
    date: day.getDate(),
    year: day.getFullYear(),
    month: day.getMonth() + 1,
  }

  let today = `${dayObj.date}-${dayObj.month}-${dayObj.year}`
  const comments = `comments-${today}.xlsx`
  const posts = `posts-${today}.xlsx`

  return [comments, posts]
}

const names = generateName()
const postName = names[0]
const commentName = names[1]
