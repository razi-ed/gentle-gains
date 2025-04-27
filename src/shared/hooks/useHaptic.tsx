import { useCallback, useEffect, useMemo, useRef } from "react";
import { detectiOS } from "../utils/detectMobileOS";

const HAPTIC_DURATION = 100;

/**
 * React hook for triggering haptic feedback on mobile devices
 *
 * This hook creates hidden DOM elements to trigger haptic feedback using the `input[switch]`
 * element for iOS devices and falls back to the Vibration API for other supported devices.
 *
 * @param {number} duration - The duration of the vibration in milliseconds (default: 100ms)
 * @returns {Object} An object containing the `triggerHaptic` function to trigger haptic feedback
 *
 * @example
 * ```tsx
 * import { useHaptic } from "use-haptic";
 *
 * function HapticButton() {
 *   const { triggerHaptic } = useHaptic(200); // 200ms vibration
 *   return <button onClick={triggerHaptic}>Vibrate</button>;
 * }
 * ```
 */
export const useHaptic = (
  duration = HAPTIC_DURATION,
): { triggerHaptic: () => void } => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const labelRef = useRef<HTMLLabelElement | null>(null);
  const isIOS = useMemo(() => detectiOS(), []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // biome-ignore lint/complexity/noExtraBooleanCast: <explanation>
    if (isIOS || !Boolean(navigator?.vibrate)) {
      
      // Create and append input element
      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = "haptic-switch";
      input.setAttribute("switch", "");
      input.style.display = "none";
      document.body.appendChild(input);
      inputRef.current = input;
  
      // Create and append label element
      const label = document.createElement("label");
      label.htmlFor = "haptic-switch";
      label.style.display = "none";
      document.body.appendChild(label);
      labelRef.current = label;
  
      // Cleanup function
      return () => {
        document.body.removeChild(input);
        document.body.removeChild(label);
      };
    }
  }, []);

  const triggerHaptic = useCallback(() => {
    if (isIOS) {
      labelRef.current?.click();
    } else {
      if (navigator?.vibrate) {
        navigator.vibrate(duration);
      } else {
        labelRef.current?.click();
      }
    }
  }, [isIOS, duration]);

  return { triggerHaptic };
};
