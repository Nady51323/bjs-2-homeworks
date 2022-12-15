class PrintEditionItem {
    constructor(name, releaseDate,pagesCount){ 
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = Math.round(this.state * 1.5); 
    }

    set state(currentState){ 
        if (currentState < 0){ 
            this._state = 0; 
        } else if (currentState > 100){ 
            this._state = 100; 
        } else {
            this._state = currentState; 
        }
    }

    get state(){ 
        return this._state;
    }
    
}

class Magazine extends PrintEditionItem { 
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount); 
        this.type = 'magazine'; 
    }
}

class Book extends PrintEditionItem{ 
    constructor(author, name, releaseDate, pagesCount){ 
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book'; 
    } 
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){ 
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){  
        for (let book of this.books){
            if (book[type] === value){
                return book; 
            }
        }
        return null; 
    }

    giveBookByName(bookName){     // если условие истинно то вернется индекс искомого эл-на = метод findIndex
        const index = this.books.findIndex((book) => book.bookName === bookName); // у искомой книги название (bookName) должно быть равно искомому, вводимому. Производим поиск индекса среди книг. 
        if (index === null){
            return null;
        } else {              
            return this.books.splice(index, 1)[0];
        }
    }
}