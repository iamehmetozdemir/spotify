SELECT s.Track, s.Artist, s.[Spotify Streams], s.[YouTube Views], t.text
FROM streamedSongs_Table s
JOIN songText_Table t ON s.Artist = t.artist AND s.Track = t.song
WHERE t.text LIKE '%love%'
ORDER BY s.[Spotify Streams] DESC;