var ns = document.createElement("script");
ns.src = "https://chatapps-us.netomi.com/app/script.js";
ns.type = "text/javascript";
ns.async = true;
ns.setAttribute("botRefId", "b8a1823c-5130-4459-89ac-383b8e27845a");
ns.setAttribute("debug", "true");
ns.setAttribute("widgetId", "12234r82-2838723-12833");
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(ns, s);
ns.onload = function () {
  window.NETOMI_WEB_WIDGET.init(() => {
    endSession();
    showCalloutBubble();
    sendVisitorInfo();
  });
};
function changeLocale() {
  // To change the language of the bot, pass a language code in the changeLocale method.
  const language = "en";
  Netomi.chat.changeLocale(language);
}
function openWidget() {
  // To open the chat widget
  Netomi.chat.openWidget();
}
function closeWidget() {
  // To close the chat widget
  Netomi.chat.closeWidget();
}
function hideCalloutBubble() {
  console.log("hideCalloutBubble");
  // To hide the callout bubbles
  window.NETOMI_WEB_WIDGET.showCalloutBubble(false);
}
async function showCalloutBubble() {
  console.log("showCalloutBubble");
  // To dynamically send a different callout bubble. It also overrides the existing callout bubbles in the bot's json.
  const obj = {
    calloutBubbleEnabled: true,
    intent: "callout bubbles",
    delayForFirstBubble: 1000,
    delayInBetweenBubbles: 1000,
    attachments: [
      {
        type: "Text",
        text: "hi",
      },
      {
        type: "Text",
        text: "My name is Katie",
      },
      {
        type: "Text",
        text: "How can i help you today?",
        quickReply: {
          options: [
            {
              label: "Go to main menu",
              metadata: "menu",
              contentType: "text",
            },
            {
              label: "Connect with agent",
              metadata: "agent",
              contentType: "text",
            },
          ],
        },
      },
    ],
    config: {
      displayTimer: 10000,
      maxWidthForMobile: "50%",
      exposedFnWidthRange: [0, 9999],
    },
  };
  Netomi.chat.showCalloutBubble(obj);
}
function showWidget() {
  // To show the widget
  Netomi.chat.showWidget();
}
function hideWidget() {
  // To completely hide the widget
  Netomi.chat.hideWidget();
}
function OpenInFullScreen() {
  // To open the widget in the full available width of the screen
  Netomi.chat.OpenInFullScreen();
}
function OpenInStandardScreen() {
  // To open the widget with default height and width.
  Netomi.chat.OpenInStandardScreen();
}
function sendMessageInCW() {
  // To send a message in the widget without typing in the footer.
  Netomi.chat.publish("SEND_MESSAGE_IN_WIDGET", { text: "hey", label: "hey" });
}
function endSession() {
  // To end the current ongoing session.
  Netomi.chat.publish("END_SESSION");
}
function sendVisitorInfo() {
  // To send visitor info as custom attributes in webhook-message API.
  const obj = { name: "John", org: "Netomi" };
  console.log("VISITOR_INFO", obj);
  Netomi.chat.publish("VISITOR_INFO", obj);
}
