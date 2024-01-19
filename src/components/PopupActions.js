import editIcon from "../../public/";
import infoIcon from "../path/to/infoIcon.png";
import shareIcon from "../path/to/shareIcon.png";
import removeIcon from "../path/to/removeIcon.png";
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
  { label: "Edit", onClick: handleEdit, icon: editIcon },
  { label: "Courier Info", onClick: handleCourierInfo, icon: infoIcon },
  { label: "Share", onClick: handleShare, icon: shareIcon },
  { label: "Remove", onClick: handleRemove, icon: removeIcon },
];
