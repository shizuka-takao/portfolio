import React from "react";

const topLeafArtwork = (
  <>
    <defs>
      <linearGradient id="topLeafFill" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.72)" />
        <stop offset="100%" stopColor="rgba(191,146,113,0.36)" />
      </linearGradient>
    </defs>
    <path className="leaf-branch" d="M4 40C62 67 104 66 146 84C188 102 234 124 314 114" />
    <path className="leaf-branch" d="M82 63C76 35 80 15 96 4" />
    <path className="leaf-branch" d="M114 72C116 40 128 20 148 9" />
    <path className="leaf-branch" d="M208 102C220 88 236 78 256 74" />
    <g transform="translate(10 12) rotate(-18)">
      <path className="leaf-fill" d="M0 0C15 -18 33 -22 48 -5C34 10 15 12 0 0Z" />
      <path className="leaf-vein" d="M6 0C18 -3 28 -4 40 -2" />
    </g>
    <g transform="translate(40 56) rotate(32)">
      <path className="leaf-fill" d="M0 0C14 -22 35 -26 50 -8C37 8 18 11 0 0Z" />
      <path className="leaf-vein" d="M6 0C18 -2 28 -3 41 -2" />
    </g>
    <g transform="translate(98 14) rotate(78)">
      <path className="leaf-fill" d="M0 0C12 -18 29 -21 42 -7C31 8 15 10 0 0Z" />
      <path className="leaf-vein" d="M5 0C15 -2 24 -3 35 -1" />
    </g>
    <g transform="translate(124 42) rotate(24)">
      <path className="leaf-fill" d="M0 0C12 -17 30 -20 41 -7C29 7 14 10 0 0Z" />
      <path className="leaf-vein" d="M5 0C15 -1 23 -2 34 -1" />
    </g>
    <g transform="translate(228 78) rotate(-8)">
      <path className="leaf-fill" d="M0 0C10 -13 25 -16 36 -5C26 7 12 9 0 0Z" />
      <path className="leaf-vein" d="M4 0C12 -1 20 -1 29 0" />
    </g>
  </>
);

const bottomLeafArtwork = (
  <>
    <defs>
      <linearGradient id="bottomLeafFill" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.72)" />
        <stop offset="100%" stopColor="rgba(191,146,113,0.32)" />
      </linearGradient>
    </defs>
    <path className="leaf-branch" d="M6 84C64 74 96 58 126 42C154 27 184 20 232 16" />
    <path className="leaf-branch" d="M110 48C104 32 104 16 114 4" />
    <path className="leaf-branch" d="M150 34C158 23 170 15 184 11" />
    <g transform="translate(78 48) rotate(16)">
      <path className="leaf-fill" d="M0 0C10 -13 25 -17 36 -5C26 7 12 9 0 0Z" />
      <path className="leaf-vein" d="M4 0C12 -1 20 -1 29 0" />
    </g>
    <g transform="translate(112 26) rotate(-26)">
      <path className="leaf-fill" d="M0 0C12 -16 28 -19 39 -6C28 7 14 10 0 0Z" />
      <path className="leaf-vein" d="M4 0C14 -2 23 -2 31 -1" />
    </g>
    <g transform="translate(168 8) rotate(14)">
      <path className="leaf-fill" d="M0 0C10 -13 25 -16 36 -5C26 7 12 9 0 0Z" />
      <path className="leaf-vein" d="M4 0C12 -1 20 -1 29 0" />
    </g>
  </>
);

const sideLeafArtwork = (
  <>
    <defs>
      <linearGradient id="sideLeafFill" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="rgba(255,255,255,0.74)" />
        <stop offset="100%" stopColor="rgba(191,146,113,0.34)" />
      </linearGradient>
    </defs>
    <path className="leaf-branch" d="M468 328C432 302 396 284 360 268C320 248 282 224 246 194C210 162 174 126 132 72" />
    <path className="leaf-branch" d="M352 266C364 224 392 190 434 160" />
    <path className="leaf-branch" d="M270 214C282 180 304 150 334 124" />
    <g transform="translate(388 166) rotate(92)">
      <path className="leaf-fill" d="M0 0C13 -18 31 -22 44 -6C32 9 16 10 0 0Z" />
      <path className="leaf-vein" d="M5 0C15 -2 24 -2 35 -1" />
    </g>
    <g transform="translate(352 206) rotate(34)">
      <path className="leaf-fill" d="M0 0C12 -16 29 -20 40 -6C29 7 14 10 0 0Z" />
      <path className="leaf-vein" d="M4 0C14 -2 22 -2 32 -1" />
    </g>
    <g transform="translate(278 168) rotate(118)">
      <path className="leaf-fill" d="M0 0C12 -17 30 -21 42 -7C30 8 15 10 0 0Z" />
      <path className="leaf-vein" d="M5 0C15 -2 24 -2 34 -1" />
    </g>
    <g transform="translate(320 254) rotate(10)">
      <path className="leaf-fill" d="M0 0C16 -18 36 -22 50 -6C36 10 17 12 0 0Z" />
      <path className="leaf-vein" d="M6 0C18 -2 28 -2 39 -1" />
    </g>
    <g transform="translate(404 272) rotate(-10)">
      <path className="leaf-fill" d="M0 0C11 -14 26 -18 38 -5C27 8 13 10 0 0Z" />
      <path className="leaf-vein" d="M4 0C13 -1 22 -1 30 0" />
    </g>
  </>
);

const centerLeafArtwork = (
  <>
    <path className="leaf-branch" d="M18 132C22 104 30 80 42 58C52 38 66 18 84 2" />
    <path className="leaf-branch" d="M42 58C54 58 64 53 76 45" />
    <path className="leaf-branch" d="M34 84C22 84 12 79 2 72" />
    <g transform="translate(48 28) rotate(20)">
      <path className="leaf-fill" d="M0 0C12 -16 29 -20 41 -7C30 8 14 10 0 0Z" />
      <path className="leaf-vein" d="M5 0C15 -2 23 -2 33 -1" />
    </g>
    <g transform="translate(6 58) rotate(-26)">
      <path className="leaf-fill" d="M0 0C10 -13 24 -16 35 -5C25 7 12 9 0 0Z" />
      <path className="leaf-vein" d="M4 0C12 -1 20 -1 28 0" />
    </g>
    <g transform="translate(24 92) rotate(10)">
      <path className="leaf-fill" d="M0 0C9 -12 22 -15 32 -5C23 6 11 8 0 0Z" />
      <path className="leaf-vein" d="M4 0C11 -1 18 -1 26 0" />
    </g>
  </>
);

const softMiddleLeafArtwork = (
  <>
    <path className="leaf-branch" d="M10 118C20 96 34 80 48 62C62 44 78 22 96 6" />
    <g transform="translate(56 38) rotate(18)">
      <path className="leaf-fill" d="M0 0C10 -14 24 -17 34 -5C24 7 12 9 0 0Z" />
      <path className="leaf-vein" d="M4 0C12 -1 19 -1 27 0" />
    </g>
    <g transform="translate(26 72) rotate(-18)">
      <path className="leaf-fill" d="M0 0C8 -11 18 -13 28 -4C20 6 10 7 0 0Z" />
      <path className="leaf-vein" d="M3 0C10 -1 16 -1 22 0" />
    </g>
  </>
);

/**
 * Wraps one decorative leaf drawing
 */
function LeafDrawing({ className, viewBox, children }) {
  return (
    <svg className={className} viewBox={viewBox} fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

/**
 * Renders the branch in the top left corner
 */
function TopLeafCluster() {
  return <LeafDrawing className="hero-leaf hero-leaf-top" viewBox="0 0 320 220">{topLeafArtwork}</LeafDrawing>;
}

/**
 * Renders the branch near the lower left edge
 */
function BottomLeafCluster() {
  return <LeafDrawing className="hero-leaf hero-leaf-bottom" viewBox="0 0 240 90">{bottomLeafArtwork}</LeafDrawing>;
}

/**
 * Renders the larger branch on the right side
 */
function SideLeafCluster() {
  return <LeafDrawing className="hero-leaf hero-leaf-side" viewBox="0 0 470 320">{sideLeafArtwork}</LeafDrawing>;
}

/**
 * Renders the small sprig near the heading area
 */
function CenterLeafCluster() {
  return <LeafDrawing className="hero-leaf hero-leaf-center" viewBox="0 0 96 136">{centerLeafArtwork}</LeafDrawing>;
}

/**
 * Renders a second softer sprig through the middle area
 */
function MiddleAccentCluster() {
  return <LeafDrawing className="hero-leaf hero-leaf-middle-accent" viewBox="0 0 96 136">{centerLeafArtwork}</LeafDrawing>;
}

/**
 * Renders the softer middle background leaf
 */
function SoftMiddleLeafCluster() {
  return <LeafDrawing className="hero-leaf hero-leaf-soft-middle" viewBox="0 0 110 124">{softMiddleLeafArtwork}</LeafDrawing>;
}

/**
 * Renders a smaller branch near the lower right side
 */
function CornerLeafCluster() {
  return <LeafDrawing className="hero-leaf hero-leaf-corner" viewBox="0 0 240 90">{bottomLeafArtwork}</LeafDrawing>;
}

/**
 * Renders decorative leaves across the page
 */
export default function HeroLeafOrnaments() {
  return (
    <div className="hero-leaf-frame">
      <TopLeafCluster />
      <CenterLeafCluster />
      <MiddleAccentCluster />
      <SoftMiddleLeafCluster />
      <BottomLeafCluster />
      <SideLeafCluster />
      <CornerLeafCluster />
    </div>
  );
}
