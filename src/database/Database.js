// Declare Book Schema
import Realm from "realm";

class BookSchema extends Realm.Object {}
BookSchema.schema = {
    name: 'Book',
    primaryKey: 'id',
    properties: {
        id:'int',
        name: 'string',
        chapNumber:  'int',
        markChap:'int',
        chapters:  {type: 'list',objectType: 'Chapters'},
    }
};

// Author schema
class ChapSchema extends Realm.Object {}
ChapSchema.schema = {
    name: 'Chapters',
    properties: {
        title: 'string',
        chap:'string',
        data:'string'
    }
};
let getAllBook = () => {
    return realm.objects('Book');
};
let addBook = (_name, _chapNumber, _markChap = 0, _chapters) => {
    const lastUser = getAllBook().sorted('id', true)[0];
    const highestId = lastUser == null ? 0 : lastUser.id;
    realm.write(() => {
         realm.create('Book', {
            id: highestId == null ? 1 : highestId + 1,
            name: _name,
            chapNumber:  _chapNumber,
            markChap: _markChap,
            chapters: _chapters
        });
    });
}

// New function to get authors
let getAllChap = () => {
    return realm.objects('Chapters');
};

let addChapters = (_title, _chap, _data) => {
    realm.write(() => {
        realm.create('Chapters', {
            title: _title,
            markChap:0,
            chap:  _chap,
            data: _data
        });
    });
}

// Create realm
let realm = new Realm({schema: [BookSchema.schema, ChapSchema.schema], schemaVersion: 2});

export default realm;

// Export other functions so other files can access it
export {
    addBook,
    getAllChap,
    getAllBook,
    addChapters
}