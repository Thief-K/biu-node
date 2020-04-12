const mongoose = require('mongoose')
const Schema = mongoose.Schema

const model = {

  /**
   * create custom model
   *
   * @param {*} name model name
   * @param {*} props model props
   */
  createModel: function(name, props) {
    const schema = new Schema(props)
    return mongoose.model(name, schema)
  }

}

module.exports = model
