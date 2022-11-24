import Styles from "styles.module.scss";

function MediaSelector(props) {
  return (
    <div>
      <input type="file" id="media-input" accept="image/*" onChange={props.handleAttachedMediaChange}/>
    </div>
  );
}

export default MediaSelector;
