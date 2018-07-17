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
		'-y',
		    '-r', '30',
		    '-f', 'x11grab',
		    '-s', '1280x3000',
		    '-i', ':0.0',
		    '-g', '300',
		    '-vcodec', 'qtrle'
	    ]
        }));
}
};
