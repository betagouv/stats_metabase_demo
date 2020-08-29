-- Schema for a simple tracking table
CREATE TABLE trackers (
    id_internal SERIAL PRIMARY KEY,
    version INT NOT NULL,
    date_created TIMESTAMP WITH TIME ZONE DEFAULT now(),
    session_id UUID NOT NULL,
    send_order INT,
    data JSONB
);
CREATE INDEX idx_trackers_sid ON trackers USING BTREE (session_id);
CREATE INDEX idx_trackers_created ON trackers USING BTREE (date_created);

-- Indices for generic metabase views
CREATE INDEX idx_trackers_page ON trackers USING BTREE ((data->>'page')) WHERE (data->'page') IS NOT NULL;
CREATE INDEX idx_trackers_action ON trackers USING BTREE ((data->>'action')) WHERE (data->'action') IS NOT NULL;

