SELECT TOP 5 
s.Track, s.Artist,
s.[Spotify Streams], 
s.[YouTube Views]

FROM streamedSongs_Table s
JOIN songText_Table t ON s.Artist = t.artist AND s.Track = t.song
WHERE t.text LIKE '%fuck%'
ORDER BY s.[Spotify Streams] DESC;
