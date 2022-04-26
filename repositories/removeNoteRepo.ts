import db from '../bin/server';

const removeNote = async (id: string) => {
    const result = await db.query('DELETE FROM notes WHERE id=$1', [id]);
    const isRemoved = Boolean(result.rowCount);

    return isRemoved;
};

export default removeNote;