exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  onPrepare: function () {
        var VideoReporter = require('protractor-video-reporter'); 
        jasmine.getEnv().addReporter(new VideoReporter({
            baseDirectory: 'C:\\Users\\ajhanwar\\Desktop\\Sparkathon\\videos', 
            saveSuccessVideos: true,
			createSubtitles: true,
			singleVideo : false,
            ffmpegCmd: "C:\\FFmpeg\\bin\\ffmpeg.exe",
            ffmpegArgs: [
			  '-y',
			  '-f', 'gdigrab',
			  '-i', 'desktop',
			  '-vcodec', 'libx264',
			  '-filter:v', 'setpts=2.0*PTS'
			  ] 
        }));
}
};