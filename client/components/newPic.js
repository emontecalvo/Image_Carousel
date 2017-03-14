import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class newPic extends React.Component {

	constructor(props) {
        super(props);
        this.addPic = this.addPic.bind(this);
	}

	addPic(name, path) {
		this.props.dispatch(actions.addPost(name, path));
	}

	render() {
		return(
			 <div>
			 <div className="form_container">
				    <form
				      onSubmit={(e) => {
				        e.preventDefault()
				        let name = e.target.name.value
				        let path = e.target.path.value
				        this.addPic(name, path)
				        e.target.name.value = ''
				        e.target.path.value = ''
				      }}
				    >

	      <input type="text" placeholder="picture name" name="name" />
	      <br />
	      <input type="text" placeholder="image path / url" name="path" />
	      <br />
	    <button type="submit">
	      post pic
	    </button>
	  </form>
	  </div>
			</div>
		)
	}

}


export default connect((state, props) => ({
  pictures: state.pictures
}))(newPic);





