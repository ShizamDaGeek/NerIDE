#!/bin/bash

# Get the current directory
CURRENT_DIR=$(pwd)

# Get the current username
CURRENT_USER=$(whoami)

# Define the path to the original devcontainer.json file
ORIGINAL_FILE="$CURRENT_DIR/.devcontainer/devcontainer.json"

# Define the path to the modified devcontainer.json file
MODIFIED_FILE="$CURRENT_DIR/.devcontainer/devcontainer_modified.json"

# Check if the original file exists
if [ ! -f "$ORIGINAL_FILE" ]; then
    echo "Error: Original devcontainer.json file not found at $ORIGINAL_FILE"
    exit 1
fi

# Replace "spiderunderurbed" with the current username in the original file
sed "s/<USERHERE>/$CURRENT_USER/g" "$ORIGINAL_FILE" > "$MODIFIED_FILE"

# Check if the modified file was created successfully
if [ ! -f "$MODIFIED_FILE" ]; then
    echo "Error: Failed to create modified devcontainer.json file"
    exit 1
fi

# Rename the modified file to overwrite the original one
mv "$MODIFIED_FILE" "$ORIGINAL_FILE"

echo "Username replaced successfully for file: $ORIGINAL_FILE"
