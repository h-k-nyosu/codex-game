# Codex Game

This repository contains a simple **React Native** sample game. It is an idle-style 2D battle game where your player automatically fights an endless stream of enemies. You can also tap to attack manually.

## Requirements

- React Native 0.71 or newer
- Node.js and `npm` or `yarn` installed
- Android Studio or Xcode for running on a device or simulator

## Setup

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
2. Start the Metro bundler:
   ```bash
   npm start
   ```
3. In another terminal, run the app on a device or simulator:
   ```bash
   npm run android  # for Android
   npm run ios      # for iOS
   ```

## Game Play

- The player and enemy each have hit points (HP).
- Both sides attack automatically at regular intervals.
- Press the **Attack** button to deal additional damage.
- When the enemy's HP reaches zero, a new, stronger enemy appears and the defeated count increases.
- If the player's HP reaches zero, it is reset so you can continue battling.

The logic is contained in `App.js`, implemented with React hooks for state management and timers.
