import Styles from "styles.module.scss";

function MediaSelector(props) {
  return (
    <div>
      <input 
        type="file" 
        id="media-input" 
        accept="image/*" 
        onChange={props.handleAttachedMediaChange}
        ref={props.handleRef}
      />
    </div>
  );
}

export default MediaSelector;
