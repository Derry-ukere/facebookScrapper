import Post from './models/postModels.js'

const data = [
  {
    id: 1,
    commenter: 'John Doe',
    comment: ' this is a comment from john doe, first coment',
  },
  {
    id: 2,
    commenter: 'John Doe',
    comment: ' this is a comment from john doe, second coment',
  },
  {
    id: 3,
    commenter: 'John Doe',
    comment: ' this is a comment from john doe, third coment',
  },
]

function presentDataForAnalysis(data) {
  const mapfunc = (obj) => ({
    id: Math.random(),
    text: obj.comment,
  })
  const grabed = data.map(mapfunc)
  console.log(grabed)
}

// presentDataForAnalysis(data)
// connectDB()
// console.log(post)

// ;[
//   'rabbit hole',
//   'definitive answers',
//   'movement disorder specialist',
//   'neurologist',
// ][('ceruloplasmin', 'hr Urine copper', 'blood cooper')][
//   ('Wilson’s', 'positives')
// ]

const documents = [
  {
    id: '3',
    text:
      "Oh this is good to know!! My neurologist is sending me to a movement disorder specialist and I was a bit confused we were heading down another rabbit hole... But hopefully it's the same rabbit hole to get some definitive answers.",
  },
  {
    id: '2',
    text:
      'Usually not because blood cooper is typically low because ceruloplasmin is low. However, 24 hr Urine copper would be high.',
  },
  {
    id: '1',
    text:
      'Me it’s definitely one of the only positives of having Wilson’s .....on the negative side it means I think mine don’t smell 😳😂',
  },
]

const results = [
  {
    id: '3',
    statistics: undefined,
    warnings: [],
    keyPhrases: [
      'rabbit hole',
      'definitive answers',
      'movement disorder specialist',
      'neurologist',
    ],
  },
  {
    id: '2',
    statistics: undefined,
    warnings: [],
    keyPhrases: ['ceruloplasmin', 'hr Urine copper', 'blood cooper'],
  },
  {
    id: '1',
    statistics: undefined,
    warnings: [],
    keyPhrases: ['Wilson’s', 'positives'],
  },
]

const presentKeyPhrases = () => {
  const res = results.map((result, i) => ({
    comment: documents[i].text,
    keyPhrases: result.keyPhrases,
  }))
  console.log(res)
}

// const res = commenters.map((commenter, i) => ({
//   //     commenter,
//   //     comment: comments[i],
//   //   }))

const arr = [
  {
    id: '606a29c5f5b266285ccb9d97',
    text: 'Cast iron is fine. Copper on the inside of the pan is not.',
    Commenter: 'Amy Ryan',
  },
  {
    id: '606a29c5f5b266285ccb9d98',
    text: 'No copper utensils or pots/pans',
    Commenter: 'Cody Cigar',
  },
  {
    id: '606a29c5f5b266285ccb9d99',
    text:
      'No copper pots or pans or utensils. And check your tap water for copper levels too',
    Commenter: 'Kristina Candy',
  },
  {
    id: '606a29c5f5b266285ccb9d9a',
    text: 'I was told no as well. Had to buy a whole new set',
    Commenter: 'Kayla Pingleton',
  },
  {
    id: '606a29c5f5b266285ccb9d9b',
    text: 'Like · React · Reply · More · Mar 27',
    Commenter: 'Tania Kuzmenkov-Story',
  },
  {
    id: '606a29c5f5b266285ccb9d9c',
    text: 'They R a no.no',
    Commenter: 'Kavita Bakshi',
  },
  {
    id: '606a29c5f5b266285ccb9d9d',
    text: 'Like · React · Reply · More · Mar 27',
    Commenter: 'Susan Lloyd Kuiper',
  },
  {
    id: '606a29c5f5b266285ccb9d9e',
    text: 'We stopped using after the diagnosis...',
    Commenter: 'Mabel Morris',
  },
  {
    id: '606a29c5f5b266285ccb9d9f',
    text: 'Like · React · Reply · More · Mar 27',
    Commenter: 'Andrea Yager',
  },
  {
    id: '606a29c5f5b266285ccb9da0',
    text:
      'Go Stainless Steel, you scrub the bejeezus out of it if you happen to burn something on it',
    Commenter: 'Rob Holcombe',
  },
  {
    id: '606a29c5f5b266285ccb9da1',
    text: '#95!',
    Commenter: 'Dennis G. Majewski',
  },
  {
    id: '606a29c5f5b266285ccb9da2',
    text: 'Like · React · Reply · More · Apr 1 at 3:10 AM',
    Commenter: 'David Groome',
  },
]

// let mapped = arr.map((obj) => {
//   console.log(obj.text)
// })

function sliceArray(totalArray) {
  let start = 0
  let end = 10
  let x = 1
  const container = []
  for (let index = start; index < totalArray.length; index += 10) {
    console.log(x)
    let slice = totalArray.slice(start, end)
    container.push(slice)
    start += 10
    end += 10
    x++
  }
  let allLinks = container.reduce((store, current) => {
    return store.concat(current)
  })
  console.log('allLinks', allLinks)
}

// original link
// 'https://free.facebook.com/groups/1521810418074677/?refid=18&__tn__=C-R&_rdc=1&_rdr'

// let allLinks = [
//   'https://free.facebook.com/save/story/basic/?story_id=S%3A_I1319103%3AVK%3A210153169717149&action=SAVE&surface=mbasic_story&mechanism=ufi_action_link&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE3NzkzNjkyLCJjYWxsc2l0ZV9pZCI6MzU3ODEyNTU1MzAzNDM4fQ%3D%3D&ext=1618052893&hash=AeQeKa15CfElB3tJLy8&refid=18&_ft_=top_level_post_id.210153169717149%3Acontent_owner_id_new.1319103%3Apage_id.123421681723632%3Astory_location.6%3Astory_attachment_style.share%3Atds_flgs.3%3Aott.AX8xkV_BV5A-FuOi&__tn__=%2AW-R',
//   'https://free.facebook.com/save/story/basic/?story_id=S%3A_I527644011%3AVK%3A878036572928802&action=SAVE&surface=mbasic_story&mechanism=ufi_action_link&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE3NzkzNjkyLCJjYWxsc2l0ZV9pZCI6MzU3ODEyNTU1MzAzNDM4fQ%3D%3D&ext=1618052893&hash=AeQri4fAc4i6OqroZUM&refid=18&_ft_=qid.6948371000854642363%3Amf_story_key.878036572928802%3Atop_level_post_id.878036572928802%3Atl_objid.878036572928802%3Acontent_owner_id_new.527644011%3Apage_id.123421681723632%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9zTPTkyDXQDfGz&__tn__=%2AW-R',
//   'https://free.facebook.com/save/story/basic/?story_id=S%3A_I1324398913%3AVK%3A878497799549346&action=SAVE&surface=mbasic_story&mechanism=ufi_action_link&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE3NzkzNjkyLCJjYWxsc2l0ZV9pZCI6MzU3ODEyNTU1MzAzNDM4fQ%3D%3D&ext=1618052893&hash=AeTfQULcVWRed-j1zk4&refid=18&_ft_=qid.6948371000835005879%3Amf_story_key.878497799549346%3Atop_level_post_id.878497799549346%3Atl_objid.878497799549346%3Acontent_owner_id_new.1324398913%3Aoriginal_content_id.3826409124062795%3Aoriginal_content_owner_id.163164747053936%3Apage_id.163164747053936%3Asrc.22%3Astory_location.6%3Aattached_story_attachment_style.share%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-UUplK970D9AXB&__tn__=%2AW-R',
//   'https://free.facebook.com/save/story/basic/?story_id=S%3A_I1777668692%3AVK%3A875832089815917&action=SAVE&surface=mbasic_story&mechanism=ufi_action_link&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE3NzkzNjkyLCJjYWxsc2l0ZV9pZCI6MzU3ODEyNTU1MzAzNDM4fQ%3D%3D&ext=1618052893&hash=AeRap13EBclrPUllqIM&refid=18&_ft_=qid.6948371000866198644%3Amf_story_key.875832089815917%3Atop_level_post_id.875832089815917%3Atl_objid.875832089815917%3Acontent_owner_id_new.1777668692%3Apage_id.123421681723632%3Atext_formatting.192444944695904%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX95n-MdCUuGT88x&__tn__=%2AW-R',
//   'https://free.facebook.com/save/story/basic/?story_id=S%3A_I527932828%3AVK%3A878343569564769&action=SAVE&surface=mbasic_story&mechanism=ufi_action_link&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE3NzkzNjkyLCJjYWxsc2l0ZV9pZCI6MzU3ODEyNTU1MzAzNDM4fQ%3D%3D&ext=1618052893&hash=AeQBNhSifq-4A0TJlXc&refid=18&_ft_=qid.6948371000902360950%3Amf_story_key.878343569564769%3Atop_level_post_id.878343569564769%3Atl_objid.878343569564769%3Acontent_owner_id_new.527932828%3Apage_id.123421681723632%3Atext_formatting.248623902401250%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-Zta0ACe-5EwhX&__tn__=%2AW-R',
//   'https://free.facebook.com/save/story/basic/?story_id=S%3A_I1334502076%3AVK%3A877939459605180&action=SAVE&surface=mbasic_story&mechanism=ufi_action_link&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE3NzkzNjkyLCJjYWxsc2l0ZV9pZCI6MzU3ODEyNTU1MzAzNDM4fQ%3D%3D&ext=1618052893&hash=AeR4HpqbxJNcEkyy11I&refid=18&_ft_=qid.6948371000813072479%3Amf_story_key.877939459605180%3Atop_level_post_id.877939459605180%3Atl_objid.877939459605180%3Acontent_owner_id_new.1334502076%3Apage_id.123421681723632%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-h3W8QCq3YSdTL&__tn__=%2AW-R',
//   'https://free.facebook.com/save/story/basic/?story_id=S%3A_I100014638903922%3AVK%3A852668545465605&action=SAVE&surface=mbasic_story&mechanism=ufi_action_link&privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjE3NzkzNzQ0LCJjYWxsc2l0ZV9pZCI6MzU3ODEyNTU1MzAzNDM4fQ%3D%3D&ext=1618052945&hash=AeRYOdC_H-H4DDf44K4&refid=18&_ft_=qid.6948371224036733232%3Amf_story_key.852668545465605%3Atop_level_post_id.852668545465605%3Atl_objid.852668545465605%3Acontent_owner_id_new.100014638903922%3Apage_id.123421681723632%3Atext_formatting.532471854017582%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-odY_3BDNLxZr5&__tn__=%2AW-R',
// ]

// console.log(allLinks[allLinks.length - 1])

//first links
// 'https://free.facebook.com/groups/110527915647216/?_rdr'

// next links
// 'https://free.facebook.com/groups/110527915647216?bacr=1463888647%3A1157567717609892%3A1157567717609892%2C0%2C93%3A7%3AKw%3D%3D&multi_permalinks&refid=18'

// openapi: 3.0.0
// servers:
//   # Added by API Auto Mocking Plugin
//   - description: SwaggerHub API Auto Mocking
//     url: https://virtserver.swaggerhub.com/derry/test2/1.0.0
// info:
//   description: This is a simple API
//   version: "1.0.0"
//   title: Simple Inventory API
//   contact:
//     email: you@your-company.com
//   license:
//     name: Apache 2.0
//     url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
// tags:
//   - name: admins
//     description: Secured Admin-only calls
//   - name: developers
//     description: Operations available to regular developers
// paths:
//   /inventory:
//     get:
//       tags:
//         - developers
//       summary: searches inventory
//       operationId: searchInventory
//       description: |
//         By passing in the appropriate options, you can search for
//         available inventory in the system
//       parameters:
//         - in: query
//           name: searchString
//           description: pass an optional search string for looking up inventory
//           required: false
//           schema:
//             type: string
//         - in: query
//           name: skip
//           description: number of records to skip for pagination
//           schema:
//             type: integer
//             format: int32
//             minimum: 0
//         - in: query
//           name: limit
//           description: maximum number of records to return
//           schema:
//             type: integer
//             format: int32
//             minimum: 0
//             maximum: 50
//       responses:
//         '200':
//           description: search results matching criteria
//           content:
//             application/json:
//               schema:
//                 type: array
//                 items:
//                   $ref: '#/components/schemas/InventoryItem'
//         '400':
//           description: bad input parameter
//     post:
//       tags:
//         - admins
//       summary: adds an inventory item
//       operationId: addInventory
//       description: Adds an item to the system
//       responses:
//         '201':
//           description: item created
//         '400':
//           description: 'invalid input, object invalid'
//         '409':
//           description: an existing item already exists
//       requestBody:
//         content:
//           application/json:
//             schema:
//               $ref: '#/components/schemas/InventoryItem'
//         description: Inventory item to add
// components:
//   schemas:
//     InventoryItem:
//       type: object
//       required:
//         - id
//         - name
//         - manufacturer
//         - releaseDate
//       properties:
//         id:
//           type: string
//           format: uuid
//           example: d290f1ee-6c54-4b01-90e6-d701748f0851
//         name:
//           type: string
//           example: Widget Adapter
//         releaseDate:
//           type: string
//           format: date-time
//           example: '2016-08-29T09:12:33.001Z'
//         manufacturer:
//           $ref: '#/components/schemas/Manufacturer'
//     Manufacturer:
//       required:
//         - name
//       properties:
//         name:
//           type: string
//           example: ACME Corporation
//         homePage:
//           type: string
//           format: url
//           example: 'https://www.acme-corp.com'
//         phone:
//           type: string
//           example: 408-867-5309
//       type: object
// Chauncey VaughanWent to Kickapoo HighLives in Springfield, Missouri
// function splitSentence(sentence) {
//   const sentenceArray = sentence.split(' ').slice(6).join(' ')
//   return sentenceArray
// }

// splitSentence(
//   'Chauncey VaughanWent to Kickapoo HighLives in Springfield, Missouri'
// )

const comments = [
  'this is comment one',
  'this is comment two',
  'this is comment three',
  'this is comment four',
  'this is comment five',
]

const commenters = [
  'john doe one',
  'john doe two',
  'john doe three',
  'john doe four',
  'john doe five',
]

const locations = [
  'this is location one',
  'this is location two',
  'this is location three',
  'this is location four',
  'this is location five',
]

const postTag = "September 18, 2019 at 5:38 PM  Heidi Meyer > ‎Wilson's Disease"

const res = commenters.map((commenter, i) => ({
  commenter,
  comment: comments[i],
  location: locations[i],
  postTag,
}))

import Link from './models/LinkModel.js'
import { saveToDataBase, getLinks } from './dataBase.js'

let allLinks = [
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2516032335086566/?refid=18&_ft_=qid.6945489159391461365%3Amf_story_key.2516032335086566%3Atop_level_post_id.2516032335086566%3Atl_objid.2516032335086566%3Acontent_owner_id_new.1648669792%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2677786308911167/?refid=18&_ft_=qid.6945489176638477183%3Amf_story_key.2677786308911167%3Atop_level_post_id.2677786308911167%3Atl_objid.2677786308911167%3Acontent_owner_id_new.1681752262%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.photo%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-eF9rZzvpYOA4h&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2677448155611649/?refid=18&_ft_=qid.6945489176433184981%3Amf_story_key.2677448155611649%3Atop_level_post_id.2677448155611649%3Atl_objid.2677448155611649%3Acontent_owner_id_new.1153716482%3Acall_to_action_type.EVENT_RSVP%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.event%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-tqFLOtKcKzBSv&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3669467499743038/?refid=18&_ft_=qid.6945488961924525358%3Amf_story_key.3669467499743038%3Atop_level_post_id.3669467499743038%3Atl_objid.3669467499743038%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.share%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX84erIyTFt28Wmz&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3660573943965727/?refid=18&_ft_=qid.6945488961730802459%3Amf_story_key.3660573943965727%3Atop_level_post_id.3660573943965727%3Atl_objid.3660573943965727%3Acontent_owner_id_new.100026699686347%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_BDYihrK8ksz6-&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3569190776437378/?refid=18&_ft_=qid.6945488961778332943%3Amf_story_key.3569190776437378%3Atop_level_post_id.3569190776437378%3Atl_objid.3569190776437378%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.file_upload%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_h2g2ghLcn8IA0&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2516032335086566/?refid=18&_ft_=qid.6945489159391461365%3Amf_story_key.2516032335086566%3Atop_level_post_id.2516032335086566%3Atl_objid.2516032335086566%3Acontent_owner_id_new.1648669792%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2692359080787223/?refid=18&_ft_=qid.6945489159469576655%3Amf_story_key.2692359080787223%3Atop_level_riesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-o4KgSONermlMT&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2516032335086566/?refid=18&_ft_=qid.6945489159391461365%3Amf_story_key.2516032335086566%3Atop_level_post_id.2516032335086566%3Atl_objid.2516032335086566%3Acontent_owner_id_new.1648669792%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2677786308911167/?refid=18&_ft_=qid.6945489176638477183%3Amf_story_key.2677786308911167%3Atop_level_post_id.2677786308911167%3Atl_objid.2677786308911167%3Acontent_owner_id_new.1681752262%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.photo%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-eF9rZzvpYOA4h&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2677448155611649/?refid=18&_ft_=qid.6945489176433184981%3Amf_story_key.2677448155611649%3Atop_level_post_id.2677448155611649%3Atl_objid.2677448155611649%3Acontent_owner_id_new.1153716482%3Acall_to_action_type.EVENT_RSVP%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.event%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-tqFLOtKcKzBSv&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3669467499743038/?refid=18&_ft_=qid.6945488961924525358%3Amf_story_key.3669467499743038%3Atop_level_post_id.3669467499743038%3Atl_objid.3669467499743038%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.share%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX84erIyTFt28Wmz&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3660573943965727/?refid=18&_ft_=qid.6945488961730802459%3Amf_story_key.3660573943965727%3Atop_level_post_id.3660573943965727%3Atl_objid.3660573943965727%3Acontent_owner_id_new.100026699686347%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_BDYihrK8ksz6-&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3569190776437378/?refid=18&_ft_=qid.6945488961778332943%3Amf_story_key.3569190776437378%3Atop_level_post_id.3569190776437378%3Atl_objid.3569190776437378%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.file_upload%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_h2g2ghLcn8IA0&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2516032335086566/?refid=18&_ft_=qid.6945489159391461365%3Amf_story_key.2516032335086566%3Atop_level_post_id.2516032335086566%3Atl_objid.2516032335086566%3Acontent_owner_id_new.1648669792%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2692359080787223/?refid=18&_ft_=qid.6945489159469576655%3Amf_story_key.2692359080787223%3Atop_level_riesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-o4KgSONermlMT&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2516032335086566/?refid=18&_ft_=qid.6945489159391461365%3Amf_story_key.2516032335086566%3Atop_level_post_id.2516032335086566%3Atl_objid.2516032335086566%3Acontent_owner_id_new.1648669792%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2677786308911167/?refid=18&_ft_=qid.6945489176638477183%3Amf_story_key.2677786308911167%3Atop_level_post_id.2677786308911167%3Atl_objid.2677786308911167%3Acontent_owner_id_new.1681752262%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.photo%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-eF9rZzvpYOA4h&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2677448155611649/?refid=18&_ft_=qid.6945489176433184981%3Amf_story_key.2677448155611649%3Atop_level_post_id.2677448155611649%3Atl_objid.2677448155611649%3Acontent_owner_id_new.1153716482%3Acall_to_action_type.EVENT_RSVP%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.event%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-tqFLOtKcKzBSv&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3669467499743038/?refid=18&_ft_=qid.6945488961924525358%3Amf_story_key.3669467499743038%3Atop_level_post_id.3669467499743038%3Atl_objid.3669467499743038%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.share%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX84erIyTFt28Wmz&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3660573943965727/?refid=18&_ft_=qid.6945488961730802459%3Amf_story_key.3660573943965727%3Atop_level_post_id.3660573943965727%3Atl_objid.3660573943965727%3Acontent_owner_id_new.100026699686347%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_BDYihrK8ksz6-&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3569190776437378/?refid=18&_ft_=qid.6945488961778332943%3Amf_story_key.3569190776437378%3Atop_level_post_id.3569190776437378%3Atl_objid.3569190776437378%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.file_upload%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_h2g2ghLcn8IA0&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2516032335086566/?refid=18&_ft_=qid.6945489159391461365%3Amf_story_key.2516032335086566%3Atop_level_post_id.2516032335086566%3Atl_objid.2516032335086566%3Acontent_owner_id_new.1648669792%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2692359080787223/?refid=18&_ft_=qid.6945489159469576655%3Amf_story_key.2692359080787223%3Atop_level_riesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-o4KgSONermlMT&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2516032335086566/?refid=18&_ft_=qid.6945489159391461365%3Amf_story_key.2516032335086566%3Atop_level_post_id.2516032335086566%3Atl_objid.2516032335086566%3Acontent_owner_id_new.1648669792%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3795722470450873/?refid=18&_ft_=qid.6945455496258630925%3Amf_story_key.3795722470450873%3Atop_level_post_id.3795722470450873%3Atl_objid.3795722470450873%3Acontent_owner_id_new.100026138233012%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9KVIxyfbOVpEFa&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2677786308911167/?refid=18&_ft_=qid.6945489176638477183%3Amf_story_key.2677786308911167%3Atop_level_post_id.2677786308911167%3Atl_objid.2677786308911167%3Acontent_owner_id_new.1681752262%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.photo%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-eF9rZzvpYOA4h&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2677448155611649/?refid=18&_ft_=qid.6945489176433184981%3Amf_story_key.2677448155611649%3Atop_level_post_id.2677448155611649%3Atl_objid.2677448155611649%3Acontent_owner_id_new.1153716482%3Acall_to_action_type.EVENT_RSVP%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.event%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-tqFLOtKcKzBSv&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3669467499743038/?refid=18&_ft_=qid.6945488961924525358%3Amf_story_key.3669467499743038%3Atop_level_post_id.3669467499743038%3Atl_objid.3669467499743038%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.share%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX84erIyTFt28Wmz&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3660573943965727/?refid=18&_ft_=qid.6945488961730802459%3Amf_story_key.3660573943965727%3Atop_level_post_id.3660573943965727%3Atl_objid.3660573943965727%3Acontent_owner_id_new.100026699686347%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_BDYihrK8ksz6-&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/3569190776437378/?refid=18&_ft_=qid.6945488961778332943%3Amf_story_key.3569190776437378%3Atop_level_post_id.3569190776437378%3Atl_objid.3569190776437378%3Acontent_owner_id_new.680786412%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Astory_attachment_style.file_upload%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX_h2g2ghLcn8IA0&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2516032335086566/?refid=18&_ft_=qid.6945489159391461365%3Amf_story_key.2516032335086566%3Atop_level_post_id.2516032335086566%3Atl_objid.2516032335086566%3Acontent_owner_id_new.1648669792%3Apage_id.670714432951708%3Asrc.22%3Astory_location.6%3Afilter.GroupStoriesByActivityEntQuery%3Atds_flgs.3%3Aott.AX9hf7-jqgYl4l3Y&__tn__=%2AW-R#footer_action_list',
  'https://m.facebook.com/groups/WilsonsDisease/permalink/2692359080787223/?refid=18&_ft_=qid.6945489159469576655%3Amf_story_key.2692359080787223%3Atop_level_riesByActivityEntQuery%3Atds_flgs.3%3Aott.AX-o4KgSONermlMT&__tn__=%2AW-R#footer_action_list',
]
function presentLinkForDataBase(links) {
  const mapfunc = (link) => ({
    link: link,
  })
  return links.map(mapfunc)
}

// const newLinks = presentLinkForDataBase(allLinks)
// console.log(newLinks)
// saveToDataBase(Link, newLinks)
const links = await getLinks()
console.log('link from db', links.length)
const firstbacth = links.slice(0, 10)
const secondbacth = links.slice(10, 20)
const thirdBacth = links.slice(20, 30)
const fourthBacth = links.slice(30, 40)
console.log('firstbacth', firstbacth.length)
console.log('secondbacth', secondbacth.length)
console.log('thirdBacth', thirdBacth.length)
console.log('fourthBacth', fourthBacth.length)

while (x < 3) {
  await page.click('#m_group_stories_container > div > a > span')
  console.log(`clicked  ${x} times`)
  let number = Math.floor(Math.random() * 3000) + 2000
  await page.waitForTimeout(number)
  await navigationPromise
  const links = await page.$$eval(
    'article > footer > div:nth-child(2) > a:nth-child(7)', //a:nth-child(7)
    (links) => links.map((element) => element.href)
  )
  // container.push(links)
  console.log('links', links)

  x++
}

// Make link presentable in database
const newLinks = presentLinkForDataBase(allLinks)
console.log('totalLinks: ', newLinks.length)
saveLinkToDataBase(Link, newLinks)
