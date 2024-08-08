#!/bin/bash
# This script takes a URL as an argument, sends a request to that URL,
# and displays the size of the response body in bytes.

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 URL"
    exit 1
fi

URL=$1

# Send a request to the URL and get the size of the response body in bytes
size=$(curl -s "$URL" | wc -c)

echo $size
