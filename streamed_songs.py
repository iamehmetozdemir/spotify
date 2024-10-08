import pandas as pd
from sqlalchemy import create_engine

# Read TO CSV 
csv_file_path = 'streamed_spotify_songs.csv'
df = pd.read_csv(csv_file_path,encoding='latin1')

# Connect to SQL Server
server = 'SERVERNAME'
database = 'Spotify'
username = 'sa'
password = 'PSWORD'
driver = 'ODBC Driver 17 for SQL Server'

connection_string = f'mssql+pyodbc://{username}:{password}@{server}/{database}?driver={driver}'
engine = create_engine(connection_string)


table_name = 'streamedSongs_Table'
df.to_sql(table_name, engine, if_exists='replace', index=False)

print("Data Has Transferred Successfully.")
