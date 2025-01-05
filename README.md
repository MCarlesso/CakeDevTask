# CakeDevTask

## Instructions

To run the dev server, run the following commands in the terminal:

```
npm install
npm run dev
```

The app will be running on `http://localhost:3000/`.

## Assumptions

### Part 1

-   Responsive layouts. Just one breakpoint for simple layout at a tablet/desktop size. smaller screens (i.e. mobile/tablet) have full screen layouts.
-   Child counting component will log to console.

### Part 2

-   Limiting interactivity to navigating component (Not including "see all" button or clicking on individual cards)
-   Hard coded data
-   Isolated component - i.e. The rest of the dashboard will not
-   Usually mobile version has slightly different design to maximise vertical screen. In this case, I'm using the same card design for both, but making sure the carousel can be interacted with in both mobile and desktop view
-   Removed buttons for now

## Decisions

1. Next.js web framework. Most common and well supported of frameworks.
2. Simple single modal implementation. UseRef and Modal Contexts can potentially be used for more complex projects.
3. Common design system styling in global.css file.
4. Single breakpoint at 600px.

## Plan

-   [x] Create react app with template - Next.js
-   [x] Add simple project structure
    -   [x] components
    -   [x] hooks
    -   [x] utils
-   Part 1
    -   [x] Layout simple page structure with components and placeholder text (Responsive)
    -   [x] Add components (semi-functional)
        -   [x] toggle
        -   [x] modal
        -   [x] button
    -   [x] Add CSS and assets
    -   [x] Add functionality
        -   [x] button click
        -   [x] light/dark mode on
            -   [x] toggle
            -   [x] modal
        -   [x] Children counter component
    -   [] Bonus: Extend Modal (come back after part 2)
    -   [] Bonus: Easter Egg - Idea: Confetti (come back after part 2)
-   Part 2
    ![Component Layout Diagram](/app/public/Cake%20Dev%20Carousel%20Component%20Diagram.png)
    -   [x] Layout component tile (Responsive)
    -   [x] Layout card components (Responsive)
    -   [x] Styling and Assets
