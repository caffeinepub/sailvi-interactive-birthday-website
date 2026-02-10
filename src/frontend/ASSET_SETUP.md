# Asset Setup Instructions

This birthday experience template requires the following media files to be placed in the **public root directory** of your application:

## Required Files

Place these files directly in the `public/` folder (or your static assets root):

- `photo1.jpg` - First photo for the photo grid
- `photo2.jpg` - Second photo for the photo grid
- `photo3.jpg` - Third photo for the photo grid
- `photo4.jpg` - Fourth photo for the photo grid
- `video1.mp4` - First video (landscape orientation recommended)
- `video2.mp4` - Second video (landscape orientation recommended) - **optional, graceful fallback if missing**
- `birthday.mp3` - Background music (will play at volume 0.6 with looping)

## Uploaded Asset Mapping

The following uploaded files have been mapped to the required filenames:

- `Snapchat-1050840213.jpg` → `photo1.jpg`
- `Snapchat-611037636.jpg` → `photo2.jpg`
- `IMG_20260205_190742.jpg` → `photo3.jpg`
- `IMG_20260206_020104.jpg` → `photo4.jpg`
- `Snapchat-1254858543.mp4` → `video1.mp4`
- `Happy Birthday to You - piano instrumental with lyrics.mp3` → `birthday.mp3`

## Important Notes

- **No subfolders**: All files must be in the root static directory (e.g., `frontend/public/`)
- **Exact filenames**: Use the exact filenames listed above (case-sensitive)
- **Filename-only references**: The code references these files by filename only (e.g., `"photo1.jpg"`, not `"/assets/photo1.jpg"`)
- **No code changes needed**: Once files are placed correctly, the template will work without any code modifications
- **Graceful fallbacks**: If video files are missing, the app will log a warning and continue functioning without crashing

## File Specifications

- **Photos**: JPEG format recommended, reasonable resolution (1000-2000px width)
- **Videos**: MP4 format, H.264 codec recommended for broad compatibility
- **Audio**: MP3 format, 128-320 kbps recommended

## Testing

After placing the files, refresh your browser. The experience should load all media correctly. Check the browser console for any loading errors if media doesn't appear.
