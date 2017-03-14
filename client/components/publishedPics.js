import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import Slider from 'react-image-slider';


class publishedPics extends React.Component {

  constructor(props) {
    super(props);
  }

  removePicPost(picPost) {
    this.props.dispatch(actions.removePicPost(picPost));
  }

  editPicStart(picPost) {
    this.props.dispatch(actions.edit_pic_start(picPost));
  }


  render() { 
    return (
      <div className="all_blog_wrapper">
        <Slider images={this.props.pictures} isInfinite delay={5000}>
          {this.props.pictures.map((picture, key) => <div key={key}>
                                                        <img src={picture.path} />
                                                        <p>{picture.name}</p>
                                                        <button className="edit" onClick={() => this.editPicStart(picture)}>edit</button>
                                                        <button className="remove" onClick={() => this.removePicPost(picture)}>remove</button>
                                                      </div>)}
        </Slider>
      </div>
    )
  }

}



export default connect((state, props) => ({
  pictures: state.pictures,
  showEdit: state.showEdit,
  picToEdit: state.picToEdit,
}))(publishedPics);



