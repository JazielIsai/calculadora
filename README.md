# calculadora
Aplicación Moble - calculadora sencilla

3. Configure the ANDROID_SDK_ROOT environment variable
- Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:

- export ANDROID_SDK_ROOT=$HOME/Library/Android/Sdk
- export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
- export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tool


# Running your React Native application
Step 1: Start Metro
To start Metro, 
# run npx react-native start 
inside your React Native project folder:

Step 2: Start your application
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:
# npx react-native run-android
