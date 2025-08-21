import { type JSX, Show, createSignal } from "solid-js";

type Props = {
  children: JSX.Element;
};

function Tooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(0);

  const messages = [
    // Phase 1: Friendly & Curious
    "UI element loaded!",
    "Nudging 1px to the right...",
    "Are we testing the hover state?",
    "Hmm, nice border-radius on this button.",
    "Checking the hex codes...",

    // Phase 2: Sarcastic & Annoyed
    "Okay, the user feedback is clear: you like clicking.",
    "Don't mess with my whitespace!",
    "Is this button not aligned? I swear it is.",
    "This is worse than trying to center a div.",
    "I bet the client told you to 'make it pop'.",

    // Phase 3: Getting Desperate
    "Please, think of the pixels!",
    "The design system can't handle this.",
    "My prototypes are less chaotic.",
    "This is not accessible behaviour!",
    "Ouch! Right in the CSS box model!",

    // Phase 4: Full Meltdown & Surrender
    "Go group your layers in Figma or something!",
    "I'm putting `!important` on this message.",
    "Okay, that's it. I'm switching to dark mode.",
    "Find another component to bother!",
    "One more click and the whole site turns to Comic Sans.",
    "Final_Final_Design_v2.txt",
    "#FFFFFF! I surrender!", // Hex code for a white flag
  ];

  const currentMessage = () => {
    const count = clickCount();
    if (count >= messages.length) {
      return messages[messages.length - 1];
    }
    return messages[count];
  };

  return (
    <div class="relative inline-block">
      <div
        onMouseDown={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onMouseUp={() => {
          setIsVisible(false);
        }}
        onTouchStart={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onTouchEnd={() => {
          setIsVisible(false);
        }}
      >
        {props.children}
      </div>

      <Show when={isVisible()}>
        <div class="absolute left-1/2 -translate-x-1/2 -translate-y-24 mt-1 w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-lg z-10 shadow-custom shadow-primary-500 border border-primary-500 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:shadow-primary-500 after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20">
          <p class="w-max">{currentMessage()}</p>
        </div>
      </Show>
    </div>
  );
}

export default Tooltip;
