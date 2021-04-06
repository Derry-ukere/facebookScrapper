import {
  TextAnalyticsClient,
  AzureKeyCredential,
} from '@azure/ai-text-analytics'
import xlxs from 'xlsx'
import { v4 as uuidv4 } from 'uuid'
import { getPosts, getComments } from './dataBase.js'

const client = new TextAnalyticsClient(
  'https://wilson-diseases-analysis1.cognitiveservices.azure.com/',
  new AzureKeyCredential('8067a72ddef64392aabaad28fcce787c')
)

function generateName() {
  const day = new Date()
  let dayObj = {
    date: day.getDate(),
    year: day.getFullYear(),
    month: day.getMonth() + 1,
  }
  let today = `${dayObj.date}-${dayObj.month}-${dayObj.year}`
  const commentName = `comments-${today}.xlsx`
  const postName = `posts-${today}.xlsx`
  return [commentName, postName]
}
const [commentName, postName] = generateName()

function saveToExcelShet(scrappedPosts, name) {
  try {
    console.log('creating excelsheet!!')
    const wb = xlxs.utils.book_new()
    const ws = xlxs.utils.json_to_sheet(scrappedPosts)
    xlxs.utils.book_append_sheet(wb, ws)
    xlxs.writeFile(wb, name)
    console.log('done ...')
  } catch (error) {
    console.log('customized error!!', error)
  }
}

export function presentPostForAnalysis(post) {
  return new Promise(async function (resolve) {
    try {
      const mapfunc = (obj) => ({
        id: uuidv4(),
        text: obj.Post,
        Poster: obj.Poster,
        Date: obj.Date,
      })
      // const mapfunc = (obj) => obj.Post
      const GrabbedData = post.map(mapfunc)
      resolve(GrabbedData)
    } catch (error) {
      console.log('error occured in presentPostForAnalysis: ', error)
    }
  })
}

export function presentCommentForAnalysis(coment) {
  const mapfunc = (obj) => ({
    id: obj.id,
    text: obj.Comment ? obj.Comment : 'no comment.',
    Commenter: obj.Commenter ? obj.Commenter : 'no commenter',
  })
  const GrabbedData = coment.map(mapfunc)
  return GrabbedData
}

async function analysePost(data) {
  return new Promise(async function (resolve) {
    try {
      const results = await client.extractKeyPhrases(data, 'en')
      const returnData = results.map((result, i) => ({
        id: data[i].id,
        Date: data[i].Date,
        Poster: data[i].Poster,
        Post: data[i].text,
        keyPhrases: JSON.stringify(result.keyPhrases),
      }))
      resolve(returnData)
    } catch (error) {
      console.log('an error occured in analysedPost func: ', error)
    }
  })
}

async function analyseComments(data) {
  return new Promise(async function (resolve) {
    try {
      const results = await client.extractKeyPhrases(data, 'en')
      const returnData = results.map((result, i) => ({
        id: data[i].id,
        Commenter: data[i].Commenter,
        Comment: data[i].text,
        keyPhrases: JSON.stringify(result.keyPhrases),
      }))
      resolve(returnData)
    } catch (error) {
      console.log(
        'an error occured in analyseComments func--- description: ',
        error
      )
    }
  })
}

function sliceAndAnalysePost(totalArray) {
  return new Promise(async function (resolve) {
    try {
      let start = 0
      let end = 10
      let x = 1
      const container = []
      for (let index = start; index < totalArray.length; index += 10) {
        console.log(`analysing post ${x}...`)
        let slice = totalArray.slice(start, end)
        const anaLysed = await analysePost(slice)
        // console.log(slice)
        container.push(anaLysed)
        start += 10
        end += 10
        x++
      }
      let anaLysedpost = container.reduce((store, current) => {
        return store.concat(current)
      })
      console.log(anaLysedpost)
      saveToExcelShet(anaLysedpost, postName)
      resolve()
    } catch (error) {
      console.log('error occured in sliceAndAnalyse func: ', error)
    }
  })
}

function sliceAndAnalyseComments(totalArray) {
  return new Promise(async function (resolve) {
    try {
      let start = 0
      let end = 10
      let x = 1
      const container = []
      for (let index = start; index < totalArray.length; index += 10) {
        console.log(`analysing comments ${x}...`)
        let slice = totalArray.slice(start, end)
        const anaLysed = await analyseComments(slice)
        // console.log(slice)
        container.push(anaLysed)
        start += 10
        end += 10
        x++
      }
      let anaLysedpost = container.reduce((store, current) => {
        return store.concat(current)
      })
      console.log(anaLysedpost)
      saveToExcelShet(anaLysedpost, commentName)
      resolve()
    } catch (error) {
      console.log('error occured in sliceAndAnalyseComments func: ', error)
    }
  })
}

async function main() {
  //GET POST FROM SERVER, ANALYSE AND SAVE TO SPREADSHEET
  const posts = await getPosts()
  const arrangedPost = await presentPostForAnalysis(posts)
  await sliceAndAnalysePost(arrangedPost)

  //GET POST FROM COMMENTS, ANALYSE AND SAVE TO SPREADSHEET
  const comments = await getComments()
  const arrangedComments = presentCommentForAnalysis(comments)
  await sliceAndAnalyseComments(arrangedComments)
}
main()
