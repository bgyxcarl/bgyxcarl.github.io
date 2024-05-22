const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "i miss your warm hands",
        artist: 'i dont like mirrors',
        url: 'http://music.163.com/song/media/outer/url?id=2091914322.mp3',
        cover: 'http://p2.music.126.net/_hL8HIr3wxU8mhAdfqOPxQ==/109951169137349769.jpg?param=300x300',
      },
      {
        name: 'A Different Age',
        artist: 'Current Joys',
        url: 'http://music.163.com/song/media/outer/url?id=1324068806.mp3',
        cover: 'http://p2.music.126.net/PY0Gt5OeHOWzbWn6Zp8vgQ==/109951166443166722.jpg?param=300x300',
      },
      {
        name: 'Everything Reminds Me Of You',
        artist: 'Take Care',
        url: 'http://music.163.com/song/media/outer/url?id=1981482326.mp3',
        cover: 'http://p2.music.126.net/scwV3CFG6XSgE9O7KyNhUA==/109951167878653462.jpg?param=300x300',
      }
    ]
});