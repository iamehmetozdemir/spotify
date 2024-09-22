SELECT u.name, COUNT(DISTINCT u.snapshot_date) AS days_in_top_chart
FROM universal_Table u
WHERE u.country = 'TR'
  AND u.name IN (
    SELECT TOP 5 s.Track
    FROM streamedSongs_Table s
    JOIN songText_Table t ON s.Artist = t.artist AND s.Track = t.song
    WHERE t.text LIKE '%word%'
    ORDER BY s.[Spotify Streams] DESC
  )
GROUP BY u.name;
