#!/bin/bash

# Git add, commit, and push automation script

# Check if a commit message was provided
if [ $# -eq 0 ]; then
    echo "Error: No commit message provided"
    echo "Usage: $0 <commit_message>"
    exit 1
fi

# Store the commit message from arguments
COMMIT_MESSAGE="$*"

# Get current branch name
CURRENT_BRANCH=$(git branch --show-current)

# Check if there are any changes to commit
if git diff-index --quiet HEAD --; then
    echo "No changes to commit on branch '$CURRENT_BRANCH'"
    exit 0
fi

# Add all changes
echo "Adding all changes..."
git add .

# Commit with the provided message
echo "Committing changes with message: '$COMMIT_MESSAGE'"
git commit -m "$COMMIT_MESSAGE"

# Push to the remote repository
echo "Pushing to remote repository..."
git push origin $CURRENT_BRANCH

echo "Done! Changes have been pushed to '$CURRENT_BRANCH'"