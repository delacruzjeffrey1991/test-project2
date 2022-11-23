import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import AuthLayout from "src/Layout/AuthLayout";
import UserLayout from "src/Layout/UserLayout";
import SettingLayout from "src/Layout/SettingLayout";
import BusinessInfoMain from "src/components/BusinessInfoMain";

const HomeAdmin = lazy(() => import("src/pages/HomeAdmin"));

const UserRole = lazy(() => import("src/components/UserRole"));
const Signup = lazy(() => import("src/pages/Signup"));
const Login = lazy(() => import("src/pages/Login"));

const NewCourseForm = lazy(() => import("src/pages/NewCourseForm"));
const Learning = lazy(() => import("src/pages/Learning"));
const CreateNewModule = lazy(() => import("src/pages/createNewModule"));
const CreateNewCourse = lazy(() => import("src/pages/createNewCourse"));
const CreateAiVideo = lazy(() => import("src/pages/CreateAiVideo"));

const CreateModuleLearning = lazy(
  () => import("src/pages/CreateModuleLearning")
);
const Notification = lazy(
  () => import("src/pages/AccountSetting/Notification")
);
const Users = lazy(() => import("src/pages/AccountSetting/users"));
const ProfileSetting = lazy(
  () => import("src/pages/AccountSetting/profileSetting")
);
const AddUser = lazy(() => import("src/components/common/AddUser"));
const AddMultipleUsers = lazy(
  () => import("src/components/common/AddMultipleUsers")
);
const DeleteUser = lazy(() => import("src/components/common/DeleteUser"));

const Community = lazy(() => import("src/pages/Community"));
const Surveys = lazy(() => import("src/pages/Surveys"));
const CreateSurvey = lazy(() => import("src/pages/CreateSurvey"));

const EditCourseForm = lazy(() => import("src/pages/EditCourseForm"));
const CreatedModulesAll = lazy(() => import("src/pages/CreatedModulesAll"));

const Tabs = lazy(() => import("src/components/common/Tabs"));

const Certifications = lazy(() => import("src/pages/Certifications"));

// const Learning = lazy(() => import('src/pages/Learning'))
// const CreateNewModule = lazy(() => import('src/pages/createNewModule'))
// const CreateNewCourse = lazy(() => import('src/pages/createNewCourse'))
// const CreateModuleLearning = lazy(() => import('src/pages/CreateModuleLearning'))

const CreateNew = lazy(() => import("src/pages/CreateNew"));
const NewEvent = lazy(() => import("src/pages/NewEvent"));

const BrandCultureStartegy = lazy(
  () => import("src/pages/BrandCultureStrategy")
);
const Rewards = lazy(() => import("src/pages/Rewards"));
const ResourceGroup = lazy(() => import("src/pages/resourceGroup"));

const SearchResults = lazy(() => import("src/pages/SearchResults"));

const Profile = lazy(() => import("src/pages/Profile"));

const UserProfile = lazy(() => import("src/pages/UserProfile"));

const ProfileTabs = lazy(() => import("src/pages/ProfileTabs"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <BrandCultureStartegy />,
      },
    ],
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "home-admin",
        element: <HomeAdmin />,
      },
      {
        path: "brand-culture-startegy",
        element: <BrandCultureStartegy />,
      },
      {
        path: "surveys",
        element: <Surveys />,
      },
      {
        path: "create-survey",
        element: <CreateSurvey />,
      },
      {
        path: "rewards",
        element: <Rewards />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "learning",
        element: <Learning />,
      },
      {
        path: "create-new-module",
        element: <CreateNewModule />,
      },
      {
        path: "create-new-course",
        element: <CreateNewCourse />,
      },
      {
        path: "create-module-learning",
        element: <CreateModuleLearning />,
      },
      {
        path: "new-course-form",
        element: <NewCourseForm />,
      },
      {
        path: "create-ai-video",
        element: <CreateAiVideo />,
      },
      {
        path: "edit-course-form",
        element: <EditCourseForm />,
      },
      {
        path: "created-modules-all",
        element: <CreatedModulesAll />,
      },
      {
        path: "created-modules-tabs",
        element: <Tabs />,
      },
      {
        path: "certifications",
        element: <Certifications />,
      },
      {
        path: "create-module-learning",
        element: <CreateModuleLearning />,
      },
      {
        path: "create-new",
        element: <CreateNew />,
      },
      {
        path: "new-event",
        element: <NewEvent />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "resource-group",
        element: <ResourceGroup />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile-tabs",
        element: <ProfileTabs />,
      },
      {
        path: "search-results",
        element: <SearchResults />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/setting",
    element: <SettingLayout />,
    children: [
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "message-requests",
        element: <Notification />,
      },
      {
        path: "my-campaigns",
        element: <Notification />,
      },
      {
        path: "my-workspaces",
        element: <Notification />,
      },
      {
        path: "profile-setting",
        element: <ProfileSetting />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-user",
        element: <AddUser />,
      },
      {
        path: "add-multiple-users",
        element: <AddMultipleUsers />,
      },
      {
        path: "delete-user",
        element: <DeleteUser />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "user-role",
        element: <UserRole />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "business-info",
        element: <BusinessInfoMain />,
      },
    ],
  },
]);
