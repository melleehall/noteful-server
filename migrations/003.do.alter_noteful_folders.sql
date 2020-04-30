ALTER TABLE noteful_notes
    ADD COLUMN 
        folder_id INTEGER REFERENCES noteful_folders(id)
        ON DELETE CASCADE NOT NULL;