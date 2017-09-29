let ItemActionBar = React.createClass({
    propTypes : {},
    
    render : function(){
        return(
            React.createElement('div',{className: 'actionBar'},
                React.createElement('a',{href: '#list', className: 'button'},'Return')
            )
        );
    }
});

let Info = React.createClass({
    propTypes : {
        contactItem : React.PropTypes.object
    },
    
    render : function(){
        return(
            React.createElement('div',{},
                React.createElement('h2',{},this.props.contactItem.name),
                React.createElement('div', {className : 'contactDetails'}, 
                    React.createElement('p',{},'email: ' + this.props.contactItem.email),
                    React.createElement('p',{},'birthday: ' + this.props.contactItem.birthday)
                )
            )
        );
    }
});

let ContactDetails = React.createClass({
    propTypes: {
        contactItem : React.PropTypes.object
    },
    
    render : function(){
        return(
            React.createElement('div',{},
                React.createElement(Info,{contactItem: this.props.contactItem}),
                React.createElement(ItemActionBar)
            )   
        );
    }
});