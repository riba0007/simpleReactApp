let state = {};

//on hash change
window.addEventListener('hashchange', ()=>setState({location: location.hash}));


/*initializer*/

function setState(changes){
    state = Object.assign({}, state, changes);
    
    let page;
    let location = state.location.replace(/^#\/?|\/$/g, '').split('/');
    
    //routing
    switch(location[0]) {
    case 'new':
        page = NewContact;
        break;
    case 'item':
        page = ContactDetails;
        state.contactItem = state.items.find(item => item.key == location[1] ? true : false);
        break;
    default:
        page = ListContacts;
    }
    
    let MainView = React.createElement('div', {className: 'container'}, 
        React.createElement(page, state)
    );
    
    ReactDOM.render(MainView, document.getElementById('react-app'));
}

setState({
    contactItem: {
        name: '',
        email: '',
        birthday: ''
    },
    items: EmailData,
    location: location.hash
});