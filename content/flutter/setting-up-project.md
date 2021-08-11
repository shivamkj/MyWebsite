---
title: Setting-up a project in Flutter
date: 2021-06-30
summary: Starting a new Project in Flutter & Customising it
---

## Starting a new Project

Flutter app can be created from Android Studio and IntelliJ, VS Code & Terminal. Here we are going to view how to start a fresh project with terminal as it is IDE/Code Editor egnostic. Here are the steps outlined:

1. Create a new Project with `flutter create <name>` commnad. This would create a new Flutter project inside directory of your project name with a demo sample app.
2. Now we can run the project with `flutter run` which will start the project in debug mode. flag to command. If your not sure about devices available, you can use `flutter devices` to get list of avialble for running flutter apps.

```shell
flutter create demo
cd demo
flutter run
```

**Flutter Project Naming Convenstions:** The name should be all lowercase, with underscores to separate words. Only [a-z0-9] and uderscore are allowed. Name should also be a valid dart identifier and follows its rules as an result (like it can't be a reserved keyword). Examples - new_poject, my_demo_app, myapp.

## Hot Reload & Hot Restart

Hot reload pushes changes to the device without any restart or loosing app state and is super fast. Whereas Hot Reload restart the project freshly and looses any state. They not only save time but also improve the developer's experience.

Hot reload can be triggered by pressing **r** in the terminal where app is running. Similarly hot restart by pressing **R**.

## Disable / Enable Web and Desktop support

You might not need every platform that flutter has to offer. In these senaroies you can enable/disable specific platforms. You disable/enable with `flutter config` command.

```shell
flutter config --no-enable-web
flutter config --no-enable-macos-desktop --no-enable-windows-desktop --no-enable-linux-desktop
flutter config --enable-web --enable-linux-desktop --enable-windows-desktop
```

## Installing Android Studio (For Linux)

1. Download Android Studio package from [Official website](https://developer.android.com/studio#downloads)
2. Although you can install it in downloads also but recommend directory for installation is `/usr/local` for single user & `/opt` for multi-user. Extract the package with command `sudo tar -C <directory> -xvzf <file-name>.tar.gz`. Or, first navigate to recommended directory and then execute command `sudo tar -xvzf <path-of-downloaded-package>`. You can also drag file instead of typing the path.
3. After that navigate to android-studio/bin directory inside extracted files and execute the studio.sh file to start installation. Command is `cd android-studio/bin && ./studio.sh`
4. To start android studio: `cd /usr/local/android-studio/bin && ./studio.sh`