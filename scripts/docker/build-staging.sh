# `npm run env` returns a list of environment variables
# `grep "npm_package_name"` isolates the package name key, value pair
# `cut -f2 -d"="` isolates just the package number
# `cut -f2 -d"@"` eliminates the leading @ from the package name
packagename=$(npm run env | (grep "npm_package_name" | cut -f2 -d"=" | cut -f2 -d"@"))

# `git describe` returns the current version and commit tag,
# `cut -f1 -d"-"` removes the commit tag leaving only the version number
currentversion=$(git describe | cut -f1 -d"-")
currentversion="$currentversion-staging"

echo "Building new $packagename image with tag: $currentversion"

docker build -f config/docker/Dockerfile -t $packagename:$currentversion .