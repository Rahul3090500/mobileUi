// import editIcon from "../../public/icons/editIcon.png";
// import infoIcon from "../../public/icons/editIcon.png";
// import shareIcon from "../../public/icons/editIcon.png";
// import removeIcon from "../../public/icons/editIcon.png";
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
  { label: "Edit", onClick: handleEdit, icon: "" },
  { label: "Courier Info", onClick: handleCourierInfo, icon: "" },
  { label: "Share", onClick: handleShare, icon: "" },
  { label: "Remove", onClick: handleRemove, icon: "" },
];
