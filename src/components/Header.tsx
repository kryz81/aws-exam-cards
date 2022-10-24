import { TopNavigation } from "@cloudscape-design/components";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function open(path: string) {
    return function () {
      navigate(path);
    };
  }

  return (
    <TopNavigation
      identity={{
        href: "#",
        title: "AWS Exam Cards",
      }}
      utilities={[
        {
          type: "button",
          text: "Home",
          iconName: "calendar",
          onClick: open("/"),
        },
        {
          type: "button",
          text: "All Decks",
          iconName: "calendar",
          onClick: open("/decks"),
        },
      ]}
      i18nStrings={{
        overflowMenuTriggerText: "More",
        overflowMenuTitleText: "All",
      }}
    />
  );
}
