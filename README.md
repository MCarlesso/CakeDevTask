# CakeDevTask

## Instructions

To run the dev server, run the following command in the terminal:

```
npm run dev
```

The app will be running on `http://localhost:3000/`.

## Assumptions

### Part 1

-   Responsive layouts. Just one breakpoint for simple layout at a tablet/desktop size. smaller screens (i.e. mobile/tablet) have full screen layouts.

### Part 2

-   Limiting interactivity to navigating component (Not including "see all" button or clicking on individual cards)
-   Hard coded data
-   Isolated component - i.e. The rest of the dashboard will not
-   Mobile version has sligntly different design to maximise vertical screen

## Decisions

1. Next.js web framework. Most common and well supported of frameworks.
2. Simple single modal implementation. UseRef and Modal Contexts can potentially be used for more complex projects.
3. Common design system styling in global.css file.

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
        -   [] Children counter component
    -   [] Bonus: Extend Modal (come back after part 2)
    -   [] Bonus: Easter Egg - Idea: Confetti (come back after part 2)
-   Part 2
    ![Component Layout Diagram](/app/public/Cake%20Dev%20Carousel%20Component%20Diagram.png) - [] Layout component tile (Responsive) - [] Layout card components (Responsive) - [] Styling and Assets
