export type ScrollTriggerTarget = string | HTMLElement | null;

export type ScrollScene = {
  id: string; // unique id for the scene
  trigger: ScrollTriggerTarget; // selector or element that triggers the scene
  start?: string; // ScrollTrigger start string (e.g. "top top")
  end?: string; // ScrollTrigger end string (e.g. "bottom+=200 top")
  scrub?: boolean; // scrubbed (true) or play-once (false)
  pin?: boolean; // pin the trigger element during the scene
  // Optional metadata to allow consumers to store layout hints, lazy-load flags etc.
  meta?: {
    lazy?: boolean;
    section?: string;
    [key: string]: any;
  };
};

export function validateScene(s: Partial<ScrollScene>): s is ScrollScene {
  return !!(s && typeof s.id === 'string' && ('trigger' in s));
}
