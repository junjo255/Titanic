import React, { Component } from 'react'

export class Selection extends Component {

  render() {
    console.log(this.props.saveData, "hello FROM SELECTION")
    return (
      <div>
        hello this is sort 
      </div>
    )
  }
}

export default Selection




// var Selection = ({data, sorted}) => 
// (
//     console.log(data, "data")
//     // console.log(sorted, "sorted")
// )


// <Selection data={this.state.source} sorted={this.myPanel} />

// var VideoListEntry = ({video, handleClick}) => (
  
//     <div className="video-list-entry media" >
//       <div className="media-left media-middle" >
//         <image className="media-object" src={video.snippet.thumbnails.default.url} alt=""/>
//       </div>
//       <div className="media-body">
//         <div className="video-list-entry-title" onClick = {() => handleClick(video)}> {props.video.snippet.title}</div>
//         <div className="video-list-entry-detail">{video.snippet.description}</div>
//       </div>
//     </div>
//   );
  