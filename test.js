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

const arrs = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
]

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

sliceArray(arrs)
