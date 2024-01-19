import { ReactComponent as EditIcon } from "../icons/edit.svg";
import { ReactComponent as CourierInfoIcon } from "../icons/info.svg";
import { ReactComponent as ShareIcon } from "../icons/share.svg";
import { ReactComponent as RemoveIcon } from "../icons/remove.svg";

const handleEdit = () => {
    // Handle edit action
    console.log("Edit clicked");
  };
  
  const handleCourierInfo = () => {
    // Handle courier info action
    console.log("Courier Info clicked");
  };
  
  const handleShare = () => {
    // Handle share action
    console.log("Share clicked");
  };
  
  const handleRemove = () => {
    // Handle remove action
    console.log("Remove clicked");
  };
  


  export const popupActions = [
    { label: "Edit", onClick: handleEdit, icon: <EditIcon /> },
    { label: "Courier Info", onClick: handleCourierInfo, icon: <CourierInfoIcon /> },
    { label: "Share", onClick: handleShare, icon: <ShareIcon /> },
    { label: "Remove", onClick: handleRemove, icon: <RemoveIcon /> },
  ];
