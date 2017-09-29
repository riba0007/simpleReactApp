//New contact button
let ListActionBar = React.createClass({
    propTypes:{
        onClickNewContact : React.PropTypes.func
    },
    
    render: function(){
        return(
            React.createElement('div',{className: 'actionBar'}, 
                React.createElement('a',{
                    className: 'button',
                    href: '#new',
                    onClick: this.props.onClickNewContact
                },'New Contact')
            )
        );
    }
});

//contact information
let ListItem = React.createClass({
    propTypes:{
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        email: React.PropTypes.string,
        onDeleteButtonClicked: React.PropTypes.func
    },
    
    render: function(){
        return(
            React.createElement('li', {onClick: this.onListItemClicked},
                React.createElement('a',{ href: '#item/' + this.props.id},
                    React.createElement('span', {}, this.props.name),
                    React.createElement('span', {}, '( ' + this.props.email + ' )')
                ),
                React.createElement('button', {
                    id: 'deleteBtn-' + this.props.id,
                    onClick: this.props.onDeleteButtonClicked
                }, 'X')
            )
        );
    }  
});

//List of contacts
let ListContacts = React.createClass({
    propTypes:{
        items: React.PropTypes.array
    },
    
    render : function(){
        return(
            React.createElement('div',{},
                React.createElement('ul',{},
                    this.props.items.map(function(item) {
                        item.onDeleteButtonClicked = deleteContact;
                        return React.createElement(ListItem, item);
                    })
                ),
                React.createElement(ListActionBar,{onClickNewContact: newContact})
            )
        );
    }
});


/* functions */

//delete Element
function deleteContact(e) {
    let id = e.target.id.split('-')[1];
    let newArray = state.items.filter(item => item.id != id ? true : false );

    setState({items: newArray});
}

//clean contactItem
function newContact(){
    setState({
        contactItem: {
            name: '',
            email: '',
            birthday: ''
        }
    });
}