echo "Starting"
npm run build

# Ensure the working directory is clean
git add .
git commit -m "Prepare for version bump" || echo "No changes to commit"

echo "Patching"
npm version patch -m "Upgrade to new version" || { echo "Version update failed"; exit 1; }

cp package.json dist
cd dist

rm index.js.map
npm publish --access public