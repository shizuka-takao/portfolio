import React, { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/**
 * Returns true when a character should stay untouched
 */
function isStaticCharacter(character) {
  return character === " " || character === "," || character === "-";
}

/**
 * Returns one random scramble character
 */
function getRandomCharacter() {
  const index = Math.floor(Math.random() * SCRAMBLE_CHARACTERS.length);
  return SCRAMBLE_CHARACTERS[index];
}

/**
 * Builds one animated frame of scrambled text
 */
function buildFrame(text, progress) {
  return text
    .split("")
    .map((character, index) => getFrameCharacter(character, index, progress))
    .join("");
}

/**
 * Returns one character for the current animation frame
 */
function getFrameCharacter(character, index, progress) {
  if (isStaticCharacter(character)) return character;
  if (index < progress) return character;
  return getRandomCharacter();
}

/**
 * Returns the frame count used for the scramble timing
 */
function getFrameCount(text) {
  return Math.max(text.replaceAll(" ", "").length + 5, 10);
}

/**
 * Returns the initial scrambled label shown before the reveal
 */
function getInitialDisplayText(text, playOnLoad) {
  if (!playOnLoad) return text;
  return buildFrame(text, 0);
}

/**
 * Runs one scramble animation and updates the label text
 */
function runScramble(text, setDisplayText, timerRef) {
  let frame = 0;
  const totalFrames = getFrameCount(text);
  window.clearInterval(timerRef.current);
  timerRef.current = window.setInterval(() => {
    setDisplayText(buildFrame(text, frame / 2));
    frame += 1;
    if (frame >= totalFrames) finishScramble(text, setDisplayText, timerRef);
  }, 34);
}

/**
 * Finishes the animation and restores the real text
 */
function finishScramble(text, setDisplayText, timerRef) {
  window.clearInterval(timerRef.current);
  timerRef.current = null;
  setDisplayText(text);
}

/**
 * Shows text that briefly scrambles and resolves into the real label
 */
export default function ScrambleText({
  as: Tag = "span",
  text,
  className = "",
  playOnLoad = false,
  playOnHover = false,
}) {
  const [displayText, setDisplayText] = useState(getInitialDisplayText(text, playOnLoad));
  const timerRef = useRef(null);

  useEffect(() => {
    setDisplayText(getInitialDisplayText(text, playOnLoad));
  }, [playOnLoad, text]);

  useEffect(() => {
    if (!playOnLoad) return undefined;
    const timeoutId = window.setTimeout(() => {
      runScramble(text, setDisplayText, timerRef);
    }, 120);
    const currentTimerRef = timerRef;
    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(currentTimerRef.current);
    };
  }, [playOnLoad, text]);

  /**
   * Starts the hover animation when enabled
   */
  function handlePointerEnter() {
    if (!playOnHover) return;
    runScramble(text, setDisplayText, timerRef);
  }

  return (
    <Tag
      className={`scramble-text ${className}`.trim()}
      onMouseEnter={handlePointerEnter}
      onFocus={handlePointerEnter}
      aria-label={text}
    >
      {displayText}
    </Tag>
  );
}
