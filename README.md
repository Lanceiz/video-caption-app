# Video Captioning Tool

A simple web application to add captions to a hosted video. Built with React and styled with Tailwind CSS.

## Overview

This application allows users to enter a URL to a hosted video, add captions with specific timestamps, and view the video with captions overlaid.

## Features

- Input field to enter video URL
- Text area to enter captions with timestamp
- Video player with synchronized captions
- Play/pause functionality for the video

## Technical Decisions

- **Frontend Framework:** React was chosen for its component-based architecture, facilitating reusability and maintainability.
- **Styling:** Tailwind CSS was used for its utility-first approach, allowing rapid prototyping and easy customization.
- **State Management:** Utilized React's built-in `useState` and `useEffect` for managing component-level state and side effects.

## How to Run Locally

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/video-captioning-tool.git
   cd video-captioning-tool

2. **Install dependencies:**

   ```bash
   npm install

3. **Start the development server:**

   ```bash
   npm run dev

4. **Deployed link**: https://video-captioner1.netlify.app/