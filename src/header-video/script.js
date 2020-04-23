var tag = document.createElement('script')

tag.src = 'https://www.youtube.com/iframe_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player
window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady () {
  player = new window.YT.Player('header-player', {
    height: '390',
    width: '640',
    videoId: 'Z3xXUWUh-zM',
    playerVars: {
      controls: 0,
      loop: 1,
      disablekb: 1
    },
    events: {
      onReady: onPlayerReady
    }
  })
}

function onPlayerReady (event) {
  event.target.playVideo()

  document.getElementById('header-player').contentWindow.document.getElementsByClassName('ytp-title').style.display = 'none'
}
