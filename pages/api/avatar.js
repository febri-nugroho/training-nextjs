import { person } from '../../data';
import { files } from '../../file';

export default function handler(req, res) {
    res.status(200).json(files);

    // const query = req.query;
    // const { id } = query;
    // if (id) {
    //     res.status(200).json(files)
    // } else {
    //     res.status(404).redirect('/404')
    // }
}