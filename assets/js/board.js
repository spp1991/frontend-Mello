class Card{
    constructor(text){
        this.text = text;
        this.id = ++Card.lastId;
    }
}

Card.lastId =0;

class List{
    constructor(title){
        this.title = title;
        this.id = ++List.lastId;
        this.cards= [];
    }

    addCard(text){
        var card = new Card(text);
        this.cards.push(card);
    }

    findCard(cardId){
        return this.cards.find(function(card){
            return card.id === cardId;
        });

    }
}

List.lastId =0;

class Board{
    constructor(){
        this.lists = [];
        this.id = ++Board.lastId;
    }

    addList(text){
        var list = new List(text);
        this.lists.push(list);
    }

    findList(listId){
        return this.lists.find(function(list){
            return list.id === listId;
        });
    }

    editList(listId,newTitle){
        var list = this.findList(listId);
        if(list){
            list.title = newTitle;
        }
    }

    addCard(listId,cardText){
        var list = this.findList(listId);
        if(list){
            list.addCard(cardText);
        }
    }

    editCard(cardId,cardText){
        this.lists.forEach(function(list){
            var card = List.findCard(cardId);
            if(card){
                card.text = cardText;
            }
        });

    }

}

Board.lastId =0;




