import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';


class editPicForm extends React.Component {

  constructor(props) {
    super(props);
  }

  editPicPost(picToEdit) {
    this.props.dispatch(actions.editPost(picToEdit));
  }

  render() {
    return(
          <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              let name = e.target.name.value
              let path = e.target.path.value
              this.props.picToEdit.name = name
              this.props.picToEdit.path = path
              this.editPicPost(this.props.picToEdit)

            }}
          >

      <input type="text" name="name" defaultValue={this.props.picToEdit.name}/>
      <input type="text" name="path" defaultValue={this.props.picToEdit.path}/>

    <button type="submit">
      save
    </button>
  </form>
      </div>
    )
  }
}


export default connect((state, props) => ({
  pictures: state.pictures,
  showEdit: state.showEdit,
  picToEdit: state.picToEdit,
}))(editPicForm);
