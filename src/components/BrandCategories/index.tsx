import global from "../../global.module.scss";
import Styles from "./styles.module.scss";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useSelector } from "react-redux";
import { handleSelectCategory } from "src/store/apps/categories";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";
import "react-loading-skeleton/dist/skeleton.css";

function BrandCategories() {
  
  const { categories, selected_category } = useSelector(
    (state: any) => state.category
  );
  
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div>
        <ul className={`${global.dflexCenter} ${Styles.mainCategories}`}>
          {categories?.map((category: any) => {
            return (
              <li
                key={category.id}
                className={`${global.dflexCenter} ${
                  category._id == selected_category?._id
                    ? Styles.active
                    : Styles.hide
                }`}
                onClick={() => dispatch(handleSelectCategory(category))}
              >
                <span>{category.title}</span>
                <span className={Styles.iconDown}>
                  <MdOutlineArrowForwardIos />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div>
          {categories?.map((category: any) => {
            return (
              <ul
                className={`${Styles.subCategories} ${
                  category._id == selected_category?._id
                    ? Styles.active
                    : Styles.hide
                }`}
              >
                {category.subCategories?.map((subCategory: any) => {
                  return <li key={subCategory._id}>{subCategory.title}</li>;
                })}
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BrandCategories;
