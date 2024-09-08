#!/bin/bash
#

if [ -z "$1" ]; then
	echo "Usage: $0 <path>"
	exit 1
fi

directory=$1

if [ ! -d "$directory" ]; then
	echo "Directory $directory not found."
	exit 1
fi

c=1

for file in "$directory"/*.jpg; do
	echo "Renaming $file to $c.jpg"
	new_name=$(printf "%02d" "$c")
	mv "$file" "$directory/$new_name.jpg"

	echo "Converting $new_name.jpg to $new_name.webp"
	cwebp -q 100 "$directory/$new_name.jpg" -o "$directory/$new_name.webp"
	rm "$directory/$new_name.jpg"

	c=$((c + 1))
done

echo "All files renamed <3 🫣"
