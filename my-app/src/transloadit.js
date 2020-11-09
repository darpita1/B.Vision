// yarn add transloadit || npm i transloadit --save-exact
const Transloadit = require('transloadit')

const transloadit = new Transloadit({
  authKey: '6f97d95d85774c6babe468427f0ae918',
  authSecret: '9037e227ccc01e4539e5b7195ea3ea3fbcdc3132'
})

// Set Encoding Instructions
const options = {
  params: {
    template_id: '0f706fee77b443bf8f1a039111fb2444',
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