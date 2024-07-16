import getPool from '../../database/getPool.js';

const getEventResultsService = async () => {
    const pool = await getPool();

    const finishedEvents = await pool.query(`
        SELECT
        e.id AS event_id,
        e.name AS event_name,
        e.technology,
        e.online_on_site,
        e.location,
        e.start_date,
        e.finish_date,
        e.start_time,
        e.finish_time,
        e.theme,
        e.description AS event_description,
        e.organizer,
        e.image,
        u.name AS user_name,
        u.avatar AS user_avatar,
        p.user_score
        FROM events e
        LEFT JOIN participates p ON e.id = p.event_id
        LEFT JOIN users u ON p.user_id = u.id
        WHERE e.finish_date < NOW()
        ORDER BY e.finish_date
    `);

    return finishedEvents[0];
};

export default getEventResultsService;
