import culIcon2 from "../assets/images/cultureIcon2.png";
import educationIcon from "../assets/images/educationIcon.svg";
import rewardIcon from "../assets/images/rewardIcon.svg";
import communityIcon from "../assets/images/communityIcon.svg";
import campaignIcon from "../assets/images/compaignIcon.png";

interface Navigate {
    title: string,
    link: string,
}

interface INavigations {
    id: string,
    title: string,
    link: string,
    icon: any,
    children: Navigate[]
}

export const navigation: INavigations[] = [
    {
        id: "culture-check",
        title: "Culture Check",
        link: "/user/brand-culture-startegy",
        icon: culIcon2,
        children: [
          {
            title: "Brand Culture Strategy",
            link: "/user/brand-culture-startegy",
          },
          {
            title: "Surveys",
            link: "/user/surveys",
          },
        ],
      },
      {
        id: "learning",
        title: "Learning",
        link: "/user/learning",
        icon: educationIcon,
        children: [
          {
            title: "Courses",
            link: "/user/created-modules-tabs",
          },
          {
            title: "Videos",
            link: "/user/created-modules-tabs",
          },
          {
            title: "Archived",
            link: "/user/created-modules-tabs",
          },
          {
            title: "Certification",
            link: "/user/learning",
          },
        ],
      },
      {
        id: "rewards",
        title: "Rewards",
        link: "/user/rewards",
        icon: rewardIcon,
        children: [
          {
            title: "Redeem",
            link: "/user/rewards",
          },
        ],
      },
      {
        id: "community",
        title: "Community",
        link: "/user/community",
        icon: communityIcon,
        children: [
          {
            title: "Resource Groups",
            link: "/user/resource-group",
          },
          {
            title: "Events",
            link: "/community/events",
          },
          {
            title: "Mentorship",
            link: "/community/mentorship",
          },
          {
            title: "social Feed",
            link: "/user/community",
          },
        ],
      },
  
      {
        id: "campaign",
        title: "Campaign",
        link: "/campaign",
        icon: campaignIcon,
        children: [
          {
            title: "Workspaces",
            link: "/campaign/workspaces",
          },
          {
            title: "Tasks",
            link: "/campaign/tasks",
          },
          {
            title: "Recruting",
            link: "/campaign/recruting",
          },
        ],
      },
]


export const headers = new Map<string, string>(
  [
    ["/", "Dashboard"],
    ["/user/brand-culture-startegy", "Brand Culture Startegy"],
    ["/user/surveys", "Surveys"],
    ["/user/learning", "Learning"],
    ["/user/created-modules-tabs", "Created Modules"],
    ["/user/rewards", "Rewards"],
    ["/user/community", "Account"],
    ["/user/resource-group", "My Resource Groups"],
    ["/setting/notification", "Account Settings"],
    ["/user/notification", "Notification"],
    ["/user/create-survey", "Create a Survey"],
  ]
);