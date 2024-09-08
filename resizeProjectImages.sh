#! /bin/bash

# Target sizes
# 256×320, 720×900, 1020×1275, 1250×1563, 1440×1800

# resize webp imagges

if [ -z "$1" ]; then
  echo "Usage: $0 <path to images>"
  exit 1
fi

if [ -d "$1" ]; then
  echo "Resizing images in $1"
else
  echo "Directory $1 does not exist"
  exit 1
fi

dimensions=(
  "256 320"
  "720 900"
  "1020 1275"
)

image_files=$(find $1 -type f -name "*.webp")

for dim in "${dimensions[@]}"; do
  width=$(echo $dim | cut -d' ' -f1)
  height=$(echo $dim | cut -d' ' -f2)
  echo "Resizing to $width x $height"

  for file in $image_files; do
    if [ -f "$file" ]; then
      filename=$(basename -- "$file")
      filename="${filename%.*}"

      out_file="$1/$filename-$width.webp"

      if [[ "$filename" =~ .*-([0-9]+)-([0-9]+)$ ]]; then
        echo "Skipping already resized file: $file"
        continue
      fi

      echo "Converting $file to $out_file"
      cwebp -quiet -q 80 -resize $width $height $file -o $out_file
    fi
  done
done
