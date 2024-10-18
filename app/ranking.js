const songList = document.getElementById('songList');

// Örnek veriler
const songs = [
    { title: "Song Title 1", link: "https://open.spotify.com/track/1", streams: "1,000,000" },
    { title: "Song Title 2", link: "https://open.spotify.com/track/2", streams: "2,000,000" },
    { title: "Song Title 3", link: "https://open.spotify.com/track/3", streams: "3,000,000" },
    // Diğer şarkı verilerini buraya ekleyin...
];

// 50. şarkı verisi ekleyin
for (let i = 4; i <= 50; i++) {
    songs.push({
        title: `Song Title ${i}`,
        link: `https://open.spotify.com/track/${i}`,
        streams: `${i * 1000000}`
    });
}

// Şarkı çerçevelerini oluştur
songs.forEach(song => {
    const songCard = document.createElement('div');
    songCard.className = 'song-card';

    const songLink = document.createElement('a');
    songLink.className = 'song-title';
    songLink.href = song.link;
    songLink.target = '_blank'; // Yeni sekmede açılmasını sağlar
    songLink.innerText = song.title;

    const streamsDiv = document.createElement('div');
    streamsDiv.className = 'streams';
    streamsDiv.innerText = `Streams: ${song.streams}`;

    songCard.appendChild(songLink);
    songCard.appendChild(streamsDiv);
    songList.appendChild(songCard);
});