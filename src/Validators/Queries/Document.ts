
import { Select } from '../../Validators/Query/Select';
import { Document as DBDocument } from '../../Document';
import { Queries } from '../Queries';
import { Database } from '../../Database';

export class Document extends Queries {
    constructor(attributes: any[]) {
        attributes.push(new DBDocument({
            '$id': '$id',
            'key': '$id',
            'type': Database.VAR_STRING,
            'array': false,
        }));
        attributes.push(new DBDocument({
            '$id': '$createdAt',
            'key': '$createdAt',
            'type': Database.VAR_DATETIME,
            'array': false,
        }));
        attributes.push(new DBDocument({
            '$id': '$updatedAt',
            'key': '$updatedAt',
            'type': Database.VAR_DATETIME,
            'array': false,
        }));

        const validators = [
            new Select(attributes),
        ];

        super(validators);
    }
}