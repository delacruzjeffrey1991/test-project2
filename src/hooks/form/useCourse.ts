import { useEffect, useMemo } from "react";

// ** Third Party Imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

// ** Store Imports
import { useDispatch, useSelector } from "react-redux";

// ** Types import
import { RootState, AppDispatch } from "../../store";

// ** Import Custom hooks
// import useToggleDrawer from "src/@core/hooks/useToggleDrawer"

// ** Actions Imports
import { fetchAllAction, fetchAction, addAction, updateAction } from "../../store/apps/courses";

import { courseSchema } from "../../schema";

const defaultValues = {
  title: "Hello",
};

export const useCourse = (serviceId: string | null) => {
  // ** Hook
  const dispatch = useDispatch<AppDispatch>();
  //   const { handleDrawer, handleModal } = useToggleDrawer();
  const store = useSelector((state: RootState) => state.example);
  const form = useForm({
    defaultValues,
    mode: "onChange",
    // resolver: yupResolver(courseSchema.add),
  });

  useEffect(() => {
    serviceId && dispatch(fetchAction(serviceId));
  }, [serviceId]);

  // useMemo(() => {
  //     if (store.example && serviceId) {
  //         form.setValue('name' , store.example.name )
  //     }
  //     else {
  //         form.setValue('name', '')
  //     }
  // }, [store.example, serviceId])

  const getCourses = async () => {
    dispatch(fetchAllAction({}));
  };

  const getCourse = async (id: string) => {
    dispatch(fetchAction(id));
  };

  const addCourse = async (data: any) => {
    dispatch(addAction({ ...data })).then(({ payload }: any) => {
      if (payload.statusCode === "10000") {
        form.reset();
        //   handleDrawer(null)
      } else {
        console.log("============API_ERROR===============");
        console.log(payload);
        console.log("====================================");
      }
    });
  };

  const updateCourse = async (id: string, data: any) => {
    dispatch(updateAction({ id, data })).then(({ payload }: any) => {
      if (payload.statusCode === "10000") {
        form.reset();
        //   handleDrawer(null)
      } else {
        console.log("============API_ERROR===============");
        console.log(payload);
        console.log("====================================");
      }
    });
  };

  //   const deleteCourse = async (id: string) => {
  //     dispatch(deleteAction(id)).then(({ payload }: any) => {
  //       if (payload.statusCode === "10000") {
  //         form.reset();
  //         //   handleModal(null)
  //       } else {
  //         console.log("============API_ERROR===============");
  //         console.log(payload);
  //         console.log("====================================");
  //       }
  //     });
  //   };

  return {
    form,
    store,
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
  };
};
