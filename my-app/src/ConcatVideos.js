var ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath('./../ffmpeg/ffmpeg');
ffmpeg.setFfprobePath('./../ffmpeg/ffprobe');
ffmpeg.setFlvtoolPath('./../ffmpeg/avutil-56.dll');

ffmpeg('./../media/input.txt').inputFormat('concat').output('./../media/woohoo.mp4')
  .on('end', function() {
      console.log('Finished');
  })
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .run();
