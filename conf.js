exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  onPrepare: function () {
        var VideoReporter = require('protractor-video-reporter'); 
        var Path = require('path')
        jasmine.getEnv().addReporter(new VideoReporter({
            baseDirectory: Path.join(__dirname, 'reports/videos/'),
            saveSuccessVideos: true,
	    createSubtitles: true,
	    singleVideo : false,
	    singleVideoPath : 'fullName',
	    ffmpegArgs: [
		'-vcodec', 'libx264',
	    ]
        }));
}
};
