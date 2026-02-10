# Specification

## Summary
**Goal:** Integrate the user’s uploaded photos and ensure the birthday song and optional videos load from the app’s static public root using the exact filename-only asset convention.

**Planned changes:**
- Add the 4 uploaded images to the static public root and map them to: /photo1.jpg, /photo2.jpg, /photo3.jpg, /photo4.jpg (filename-only references remain unchanged).
- Add a happy birthday audio file to the static public root as /birthday.mp3 so the existing background-music flow works (looping, ~0.6 volume, starts after countdown).
- Ensure deployment supports optional video assets at /video1.mp4 and /video2.mp4 (public root, filename-only); if missing, keep existing graceful non-crashing behavior with at most a warning.
- Update frontend/ASSET_SETUP.md to document the exact filename mapping for photos and the required filenames for audio/video assets in the public root.

**User-visible outcome:** Slide 2 displays the four real photos and their tap popups still work; after the start overlay and countdown, birthday music plays; Slides 3–4 can play videos when video1.mp4/video2.mp4 are present without breaking the app when they are not.
