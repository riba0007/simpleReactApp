let Form = React.createClass({
    propTypes: {
        contactItem : React.PropTypes.object,
        onChange : React.PropTypes.func,
        onClickSaveButton : React.PropTypes.func
    },
    
    onNameChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.contactItem, {name: e.target.value}));
    },
    
    onEmailChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.contactItem, {email: e.target.value}));
    },
    
    onBirthdayChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.contactItem, {birthday: e.target.value}));
    },
    
    onClickSaveButton: function() {
        this.props.onClickSaveButton(this.props.contactItem);
    },
    
    render: function(){
        return(
            React.createElement('div',{},
                React.createElement('form',{},
                    React.createElement('label',{},'Name'),
                    React.createElement('input',{
                        type: 'text',
                        placeholder: 'Add the contact name here',
                        value: this.props.contactItem.name,
                        onChange: this.onNameChange
                    }),
                    React.createElement('label',{},'Email'),
                    React.createElement('input',{
                        type: 'text',
                        placeholder: 'Add the contact email here',
                        value: this.props.contactItem.email,
                        onChange: this.onEmailChange
                    }),
                    React.createElement('label',{},'Birthday'),
                    React.createElement('input',{
                        type: 'text',
                        placeholder: 'Add the contact birthday here',
                        value: this.props.contactItem.birthday,
                        onChange: this.onBirthdayChange
                    })
                ),
                React.createElement('div',{className: 'actionBar'},
                    React.createElement('a',{
                        className: 'button',
                        href:'#list'
                    }, 'Return'),
                    React.createElement('a',{
                        className: 'button',
                        onClick: this.onClickSaveButton,
                        href: '#list'
                    },'Save Contact')
                )
            )
        );
    }
});

let NewContact = React.createClass({
    propTypes: {
        contactItem : React.PropTypes.object
    },
    
    render: function(){
        return(
            React.createElement('div',{},
                React.createElement(Form,{
                    contactItem: this.props.contactItem,
                    onChange: updateNewContact,
                    onClickSaveButton: addContact
                })
            )
        );
    }
});

/*functions*/

//add new element
function addContact(e) {
    
    let newArray = state.items;
    let key = newArray[newArray.length-1].key + 1;
    
    newArray.push(Object.assign({}, {key: key, id: key }, e));
    
    setState({
        items: newArray,
        contactItem: {
            name: '',
            email: '',
            birthday: ''
        }
    });
}

//onChange function
function updateNewContact(e) {
    setState({contactItem: e});
}
