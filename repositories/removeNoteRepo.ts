import { Note } from '../db';

const removeNote = async (id: string) => {
    const result = await Note.destroy({ where: { id } });
    const isRemoved = Boolean(result);

    return isRemoved;
};

export default removeNote;