all: ffmpeg-mp4.js ffmpeg-webm.js

ffmpeg-mp4.js: pre.js node_modules/ffmpeg.js/ffmpeg-mp4.js post.js
	cat $+ > $@

ffmpeg-webm.js: pre.js node_modules/ffmpeg.js/ffmpeg-webm.js post.js
	cat $+ > $@

clean:
	rm -f ffmpeg-mp4.js ffmpeg-webm.js
