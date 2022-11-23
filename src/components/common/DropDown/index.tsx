import Styles from "./styles.module.scss";
function DropDown(props: any) {
  return (
    <>
      <select className={`form-select ${Styles.select}`}>
        {props.options.map((i: any, e: any) => (
          <option key={e}>{i.value}</option>
        ))}
      </select>
    </>
  );
}
export default DropDown;
