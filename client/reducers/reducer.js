
const initialState = {
	pictures: [],
	showEdit: false,
	picToEdit: ''
}
	
const reducer = (state, action) => {
	let copyState = state || initialState;
	state = Object.assign({}, copyState);
	
	if (action.type === 'UPDATE_PICTURES') {
		return {...state, pictures: action.data} // equiv. of this.setState
	}

	if (action.type === 'EDIT_PIC_START') {
		return {...state, pictures: state.pictures, showEdit: true, picToEdit: action.picPost}
	}

	if (action.type === 'EDIT_FOR_REAL') {
		var pic_sub = [];
		for (var a = 0; a < state.pictures.length; a++) {
		  	if (state.pictures[a]._id !== action.picPost._id) {
		  		pic_sub.push(state.pictures[a]);
		  	} else {
		  		pic_sub.push(action.picPost);
		  	}
		}
		return {...state, pictures: pic_sub, showEdit: false, picToEdit: ''}
	}
	return state;
}

exports.reducer = reducer;


