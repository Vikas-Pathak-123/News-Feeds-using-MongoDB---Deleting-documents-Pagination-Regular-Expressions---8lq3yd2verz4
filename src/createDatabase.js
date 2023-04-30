const { newsArticleModel } = require('./connector.js')
const { data } = require('./data.js')

const refreshAll = async () => {
    await newsArticleModel.deleteMany({})
    // console.log(connection)
    await newsArticleModel.insertMany(data)
}
refreshAll()