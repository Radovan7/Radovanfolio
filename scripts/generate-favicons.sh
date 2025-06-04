#!/bin/bash

# Create scripts directory if it doesn't exist
mkdir -p scripts

# Instructions for generating favicons
echo "To generate the favicon files:"
echo "1. Go to https://realfavicongenerator.net/"
echo "2. Upload the public/favicon.svg file"
echo "3. Download the generated package"
echo "4. Replace the following files in your public folder:"
echo "   - favicon.ico"
echo "   - favicon-16x16.png"
echo "   - favicon-32x32.png"
echo "   - apple-touch-icon.png"
echo "   - android-chrome-192x192.png"
echo "   - android-chrome-512x512.png"
echo "5. Delete the old logo files:"
echo "   - logo192.png"
echo "   - logo512.png" 