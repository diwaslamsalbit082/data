import os

# Path to the directory containing the images
directory = r"C:\Users\DELL\OneDrive\Desktop\Diwas Lamsal\BIT_Bachlor\2nd_Semister\gallery\images\Image_s"

# Supported image extensions
extensions = (".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp")

# Get all image files, sorted for consistent order
files = sorted(f for f in os.listdir(directory) if f.lower().endswith(extensions))

for i, filename in enumerate(files, start=1):
    ext = os.path.splitext(filename)[1]
    new_name = f"image-{i:02d}{ext}"
    old_path = os.path.join(directory, filename)
    new_path = os.path.join(directory, new_name)
    os.rename(old_path, new_path)
    print(f"Renamed: {filename} -> {new_name}")