
const update_pictures = data => ({
	type: 'UPDATE_PICTURES',
	data
})

export const edit_pic_start = (picPost) => ({
	type: 'EDIT_PIC_START',
	picPost
})

const edit_for_real = picPost => ({
	type: 'EDIT_FOR_REAL',
	picPost
})

export const addPost = (name, path) => dispatch => {
	return fetch('/create-pic', { /// send a request, waits until it has the headers
		method: 'POST',
		headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		    name: name,
		    path: path,
		  })
		}).then((response) => {
		    return response.json() // looks for json coming back from server
		}).then((data) => { // this gets the actual data
		  	dispatch(update_pictures(data))
		}).catch(error =>
			dispatch(report_failure("fetch_hello", error))
		);
}

export const removePicPost = (picPost) => dispatch => {
	return fetch('/pics/' + picPost._id, {
		method: 'DELETE',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({
		   id: picPost._id
		})
	}).then((response) => {
		return response.json()
	}).then((data) => {
		dispatch(update_pictures(data))
	})
}

export const editPost = (picToEdit) => dispatch => {
	return fetch('/editpics/' + picToEdit, { // this is sending req.params
		method: 'PUT',
		headers: {
		'Content-Type': 'application/json'
		 },
		body: JSON.stringify({  /// this is the req.body, this is being passed to the server
		item: picToEdit
		  })
		}).then((response) => {
		    return response.json()
		}).then((picToEdit) => {
			dispatch(edit_for_real(picToEdit))
	})
}

export const renderPics = () => dispatch => {
	return fetch('/pics')
		.then((response) =>{
		    return response.json()
		}).then((data) =>{
		  	dispatch(update_pictures(data))
		})
}





