var React = require('react');
var request = require('request-promise');

class ListHolder extends React.Component{
    constructor(props){
        super(props);
        this.state = {books : []}
        this.loadList = this.loadList.bind(this);
    }
    loadList(){
        request('http://localhost:3000/books').then(books => this.setState({books:JSON.parse(books)}));
    }
    componentDidMount(){
        this.loadList();
    }

    render(){
        return <div>{this.state.books.map(book=>
            <div key={book.id}>
                <h1>{book.name}</h1>
                <h1>{book.published}</h1>
                <h1>{book.author}</h1>
            </div>
        )}</div>
    }
}
module.exports = ListHolder;