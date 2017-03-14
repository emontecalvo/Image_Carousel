import React from 'react';
import {connect} from 'react-redux';
import NewPic from './newPic';
import PublishedPics from './publishedPics';
import EditPicForm from './editPicForm';
import * as actions from '../actions/actions';


class Home extends React.Component {

	constructor(props) {
        super(props);
	}

	componentDidMount() {
		this.props.dispatch(actions.renderPics());
	}

	render() {
		if(this.props.showEdit) {
			return <div><EditPicForm /></div>
		} else {
			return <div>
				<div className="carousel">
						<h1>picture carousel</h1>
						<PublishedPics />
						<div className="newpic">
							<NewPic />
						</div>
					</div>
				</div>;
		}
	}
}

export default connect((state, props) => ({
	pictures: state.pictures,
	showEdit: state.showEdit,
	picToEdit: state.picToEdit,
}))(Home);

