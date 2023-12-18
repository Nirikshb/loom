document.addEventListener("DOMContentLoaded", function () {
  const hiddenContent = document.querySelector(".hidden-content");
  const createAccountLink = document.querySelector(".new-bg p:first-child");
  const optionsList = document.getElementById("optionsList");
  const downloadLoomLink = document.getElementById("downloadLoom");
  const downloadLoomContent = document.getElementById("downloadLoomContent");

  // progress bar
  const progressBar = document.querySelector(".progress-bar");
  const progressSteps = {
    "Create an account": 10,
    "Download Loom": 30,
    "Record a video": 50,
    "Share a video": 70,
    "Get a view": 90,
    "Invite a teammate": 100,
  };

  // Function to update progress bar
  function updateProgressBar(step) {
    progressBar.style.width = progressSteps[step] + "%";
    progressBar.setAttribute("aria-valuenow", progressSteps[step]);
  }

   // Function to reset progress bar
   function resetProgressBar() {
    progressBar.style.width = "0%";
    progressBar.setAttribute("aria-valuenow", "0");
  }

   // Clicking to reset progress bar
   document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    const isInsideSmallBox = clickedElement.closest("#smallBox");
    const isInsideOptions = clickedElement.closest(".options");
    const isInsideHiddenContent = clickedElement.closest(".hidden-content");

    if (!isInsideSmallBox && !isInsideOptions && !isInsideHiddenContent) {
      resetProgressBar();
    }
  });

  downloadLoomLink.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event propagation
    // Clear any existing content
    downloadLoomContent.innerHTML = "";
    // Create the content with formatted text
    const contentView = document.createElement("div");
    contentView.innerHTML = `
      <span style="color: black; font-size: 15px;">
      Install the Chrome extension to <br> 
      record from your browser and to <br> 
      unlock integrations like Gmail and <br> 
      Jira.
      </span>
      <br>
      <span style="color: black; 
      font-size: 15px; border: 1px solid black; border-radius: 5px; 
      padding: 3px; display: inline-flex; 
      align-items: center;">
      <i class="fab fa-chrome"></i>&nbsp;&nbsp;Install Chrome Extension</span>`;
    // Append the content to the hidden content box
    downloadLoomContent.appendChild(contentView);
    // Toggle the visibility of the hidden content
    downloadLoomContent.classList.toggle("show-content");
    updateProgressBar("Download Loom");
  });

  createAccountLink.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event propagation

    const signUpText = document.createElement("div");
    signUpText.textContent = "Sign up with me";
    signUpText.classList.add("show-content");

    signUpText.style.fontSize = "small";
    signUpText.style.color = "lightgrey";

    hiddenContent.innerHTML = ""; // Clear the content
    hiddenContent.appendChild(signUpText);
    // Append "Sign up with me" text
    updateProgressBar("Create an account");
  });

  const recordVideoLink = document.getElementById("recordVideo");
  const recordVideoContent = document.getElementById("recordVideoContent");
  recordVideoLink.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event propagation
    // Clear any existing content
    recordVideoContent.innerHTML = "";
    // Create a bordered square
    const contentView = document.createElement("div");
    contentView.innerHTML = `
      <span  style="color: black; font-size: 15px;">
      Record a short video to share with your teammates.Try introducing yourself or replacing a meeting.
      </span>
      <br>
      <span style="color: darkblack; font-size: 15px; 
      border: 1px solid black; border-radius: 5px; padding: 3px; 
      display: inline-flex; align-items: center; width: fit-content;">
      <span style="display: flex; align-items: center; margin-left: 5px;">
      <i class="fas fa-camera" style="color: #000f0f; margin-right: 5px;"></i>
      Start Recording</span>
      </span>
      <span style="display: flex; align-items: center; font-size: 15px; margin-top: 5px;">
      <i class="fas fa-play-circle ml-1" style="color: black;"></i><span style="display: inline; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding: 3px;">
      Learn how to record
      </span>`;
    // Append the bordered square to the hidden content
    recordVideoContent.appendChild(contentView);
    // Toggle the visibility of the hidden content
    recordVideoContent.classList.toggle("show-content");
    updateProgressBar("Record a video");
  });

  const shareVideoLink = document.getElementById("shareVideo");
  const shareVideoContent = document.getElementById("shareVideoContent");
  shareVideoLink.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event propagation
    // Clear any existing content
    shareVideoContent.innerHTML = "";
    // Create a bordered square
    const contentView = document.createElement("div");
    contentView.innerHTML = `
      <span style="color: black; font-size: 15px;">
      Now it's time to get some views.Try sharing your last video</span>
      <br>
      <span style="color: black; 
      border: 0.5px solid black; 
      font-size: 15px; border-radius: 5px; 
      padding: 3px; display: inline-flex; 
      align-items: center; width: fit-content;">
      <span style="display: flex; align-items: center; margin-left: 5px;">
      <i class="fas fa-link fa-rotate-90" style="black: white; margin-right: 10px;"></i>
      Copy from last video link</span>
      </span><br>
      <span style="font-size: small;">
      <i class="fas fa-play-circle ml-1"></i> Learn how to share
      </span>`;
    shareVideoContent.appendChild(contentView);
    // Toggle the visibility of the hidden content
    shareVideoContent.classList.toggle("show-content");
    updateProgressBar("Share a video");
  });

  const getViewLink = document.getElementById("getView");
  const getViewContent = document.getElementById("getViewContent");
  getViewLink.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event propagation
    // Clear any existing content
    getViewContent.innerHTML = "";
    // Create the content with formatted text
    const contentView = document.createElement("div");
    contentView.innerHTML = `
      <span style="color: lightblack; font-size: smaller;">
          Slack, message, or email your viewers to remind about your Loom
        </span><br>
        <span style="color: black; font-size: small; display: inline-block; border-radius: 5px; background-color: lightgrey; padding: 6px; margin-top: 3px;">
        <i class="fas fa-play-circle"></i> <span style="display: inline; color: black; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding: 3px;">Understand video engagement</span>
        </span>`; // Append the content to the hidden content box
    getViewContent.appendChild(contentView);
    // Toggle the visibility of the hidden content
    getViewContent.classList.toggle("show-content");
    updateProgressBar("Get a view");
  });

  const inviteTeammateLink = document.getElementById("inviteTeammate");
  const inviteTeammateContent = document.getElementById("inviteTeammateContent");
  inviteTeammateLink.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event propagation
    // Clear any existing content
    inviteTeammateContent.innerHTML = "";
    // Create the content with formatted text
    const contentView = document.createElement("div");
    contentView.innerHTML = `<span style="color: black; font-size: 15px;">
    Invite a team to collaborate and share videos more easily.
    </span>
    <br>
    <span style="display: inline-block; background-color: lightgrey; border-radius: 5px; padding: 6px;">
    <i class="fas fa-user-friends" style="color: #000; margin-right: 5px;"></i>
    <span style="color: black; font-size: 13px;">Invite Teammates</span>
    </span>`;
    // Append the content to the hidden content box
    inviteTeammateContent.appendChild(contentView);
    // Toggle the visibility of the hidden content
    inviteTeammateContent.classList.toggle("show-content");
    updateProgressBar("Invite a teammate");
  });

  //
  const smallBox = document.getElementById("smallBox");
  const arrowIcon = document.getElementById("arrowIcon");
  const arrowIcon2 = document.getElementById("arrowIcon2");

  smallBox.addEventListener("click", function () {
    smallBox.classList.toggle("active");
    optionsList.classList.toggle("show-content");
  });

  arrowIcon.addEventListener("click", function () {
    optionsList.classList.toggle("show-content");
  });

  arrowIcon2.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event propagation
    hiddenContent.classList.toggle("show-content");
  });
});
