// yarn add transloadit || npm i transloadit --save-exact
const Transloadit = require('transloadit')
const path = require('path')
const transloadit = new Transloadit({
  authKey: 'e4d146a118544499a1c35218189641e9',
  authSecret: '863672feac442fbbda406be4e13c1f589478bc14'
})
transloadit.addFile('video', path.join(__dirname, './Results/Concat1.mp4'))
// Set Encoding Instructions
const options = {
  params: {
    template_id: '488413e8632c435cabeed9dd1d9fd6b1',
  }
}

// These Instructions do not require uploads, otherwise:
// transloadit.addFile('myfile_1', './lolcat.jpg')

// Start the Assembly
transloadit.createAssembly(options, (err, result) => {
  if (err) {
    throw err
  }

  console.log({result})
})
//https://github.com/transloadit/node-sdk/blob/master/examples/template_api.js 6 templates