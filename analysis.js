import {
  TextAnalyticsClient,
  AzureKeyCredential,
} from '@azure/ai-text-analytics'

import { presentDataForAnalysis } from './app.js'
import { getPosts, getComments } from './dataBase.js'

const client = new TextAnalyticsClient(
  'https://wilson-diseases-analysis1.cognitiveservices.azure.com/',
  new AzureKeyCredential('8067a72ddef64392aabaad28fcce787c')
)

// const documents = [
//   {
//     id: '3',
//     text:
//       "Oh this is good to know!! My neurologist is sending me to a movement disorder specialist and I was a bit confused we were heading down another rabbit hole... But hopefully it's the same rabbit hole to get some definitive answers.",
//   },
//   {
//     id: '2',
//     text:
//       'Usually not because blood cooper is typically low because ceruloplasmin is low. However, 24 hr Urine copper would be high.',
//   },
//   {
//     id: '1',
//     text:
//       'Me it’s definitely one of the only positives of having Wilson’s .....on the negative side it means I think mine don’t smell 😳😂',
//   },
// ]

// async function analyseComments(data) {
//   const results = await client.extractKeyPhrases(data, 'en')

//   const returnData = results.map((result, i) => ({
//     comment: documents[i].text,
//     keyPhrases: result.keyPhrases,
//   }))
//   console.log(returnData)
// }

// const post = presentDataForAnalysis(getPosts())
// const comment = presentDataForAnalysis(getComments())
// const post = getPosts()

console.log('post')

// console.log('comment', comment)
