# Weather Forecast Application

## Overview

Weather Forecast Application is a responsive weather dashboard built using a custom SER (State, Events, Render) architecture. The application integrates with a weather API to provide real-time weather information while dynamically adapting the user interface based on current weather conditions.

The project focuses on maintainable frontend architecture through centralized state management, modular event handling, reusable components, and separated DOM access patterns.

## Features

### Weather Information

* Search weather by city name
* Real-time weather data retrieval using API integration
* Current temperature display
* Weather condition display
* Humidity information
* Wind speed information
* Atmospheric pressure display
* Visibility information

### Dynamic User Experience

* Weather-specific visual themes
* Dynamic weather icons
* Responsive interface
* Instant weather updates

### Weather-Based UI Adaptation

The application automatically changes its appearance based on current weather conditions:

* Clear → Sunny theme and icon
* Clouds → Cloudy theme and icon
* Rain → Rain theme and icon
* Thunderstorm → Storm theme and icon
* Snow → Snow theme and icon
* Mist → Mist theme and icon

### Architecture & Maintainability

* Custom SER Architecture
* Component-based project structure
* Centralized DOM element registry
* Modular code organization
* Separation of concerns
* Reusable rendering logic

## Architecture

### State

Responsible for storing and managing weather data throughout the application.

### Events

Handles user interactions such as city searches and weather requests.

### Render

Updates the user interface whenever the application state changes.

This architecture ensures predictable UI updates and easier maintenance.

## DOM Registry Pattern

The project uses a centralized DOM registry to avoid repetitive DOM queries across the application.

Benefits include:

* Single source of truth for DOM references
* Improved maintainability
* Easier refactoring
* Cleaner component communication
* Reduced query duplication

## Tech Stack

* JavaScript (ES6+)
* HTML5
* Tailwind CSS
* Vite
* Weather API
* Local Modules

## Skills Demonstrated

* API Integration
* Asynchronous JavaScript
* Fetch API
* State Management
* Event-Driven Architecture
* DOM Manipulation
* Component-Based Design
* Dynamic Theming
* Modular JavaScript Development
* Responsive UI Development
* Code Organization Patterns

## Installation

npm install

npm run dev

## Live Demo

https://atmos-weatherapp.netlify.app/
