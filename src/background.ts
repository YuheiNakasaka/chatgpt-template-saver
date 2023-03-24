import hotreload from "crx-hotreload";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg && msg.type === "expandForm") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs[0] && tabs[0].id) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            func: () => {
              const textarea = document.querySelector(
                "form textarea"
              ) as HTMLElement;
              if (textarea) {
                const shiftEnterEvent = new KeyboardEvent("keydown", {
                  key: "Enter",
                  shiftKey: true,
                });
                textarea.focus();
                console.log(textarea.dispatchEvent(shiftEnterEvent));
                textarea.style.maxHeight = "240px";
                textarea.style.height = "240px";
              }
            },
          },
          (resp) => {
            console.log("background", resp);
          }
        );
      }
    });
  }
});

// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//   if (tabs && tabs[0] && tabs[0].id) {
//     chrome.scripting.executeScript(
//       {
//         target: { tabId: tabs[0].id },
//         func: () => {
//           setTimeout(() => {
//             const textarea = document.querySelector(
//               "form textarea"
//             ) as HTMLElement;
//             if (textarea) {
//               const shiftEnterEvent = new KeyboardEvent("keydown", {
//                 key: "Enter",
//                 shiftKey: true,
//               });
//               textarea.dispatchEvent(new Event("click"));
//               textarea.dispatchEvent(new Event("change"));
//               textarea.focus();
//               textarea.dispatchEvent(shiftEnterEvent);
//               textarea.style.backgroundColor = "blue";
//             }
//           }, 5000);
//         },
//       },
//       (resp) => {
//         console.log("resp", resp);
//       }
//     );
//   }
// });
