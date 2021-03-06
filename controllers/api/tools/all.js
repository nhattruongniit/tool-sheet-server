const { spreadsheets } = require('../../../models')

const all = async (req, res) => {
  const spreadsheetList = await spreadsheets
    .find()
    .select('-sheets -lastEditor -__v')
    .lean()
  res.json({ data: spreadsheetList })
}

module.exports = { all }
