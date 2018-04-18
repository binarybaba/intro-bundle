# Intro to Bundling


### Yarn

Dependency manager just like `pip` in python. Works like `npm` (which is made by @seldo). It also runs scripts like npm does. More on that later.

#### Installation
 
 For Debian/Ubuntu(16.04):
 ```
 curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
 echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
 
 
sudo apt-get update && sudo apt-get install yarn
 ```
