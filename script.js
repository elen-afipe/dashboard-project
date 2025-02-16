notificationChanged = false;

function swapStarSVG(starIcon) {
   const isStarChanged = starIcon.dataset.starChanged === "true";

   if (!isStarChanged) {
       starIcon.src = "./icons/star.svg";
       starIcon.dataset.starChanged = "true";
   } else {
       starIcon.src = "./icons/star-add.svg";
       starIcon.dataset.starChanged = "false";
   }
}

function swapEyeSVG(eyeIcon) {
   const isEyeChanged = eyeIcon.dataset.eyeChanged === "true";

   if (!isEyeChanged) {
       eyeIcon.src = "./icons/eye.svg";
       eyeIcon.dataset.eyeChanged = "true";
   } else {
       eyeIcon.src = "./icons/eye-add.svg";
       eyeIcon.dataset.eyeChanged = "false";
   }
}


swapNotificationSVG = function (container) {
  const notification = document.querySelector(".notification-icon");
   if(!notificationChanged){
    notification.src="./icons/notification-off.svg";
    notificationChanged = !notificationChanged;
   }
   else{
    notification.src="./icons/notification-on.svg";
    notificationChanged = !notificationChanged;
   }
}