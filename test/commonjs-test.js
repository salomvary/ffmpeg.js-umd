const assert = require('assert')
const ffmpeg = require('../ffmpeg-mp4.js')

let stdout = ''
let stderr = ''

ffmpeg({
  arguments: ['-version'],
  print: function(data) { stdout += data + '\n' },
  printErr: function(data) { stderr += data + '\n' },
  onExit: function(code) {
		assert(stdout.indexOf('ffmpeg version') != -1)
		assert.equal(code, 0)
		console.log('OK')
		process.exit(code)
  }
})
