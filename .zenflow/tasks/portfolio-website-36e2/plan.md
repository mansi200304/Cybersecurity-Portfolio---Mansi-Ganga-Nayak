# Spec and build

## Configuration
- **Artifacts Path**: {@artifacts_path} → `.zenflow/tasks/{task_id}`

---

## Agent Instructions

Ask the user questions when anything is unclear or needs their input. This includes:
- Ambiguous or incomplete requirements
- Technical decisions that affect architecture or user experience
- Trade-offs that require business context

Do not make assumptions on important decisions — get clarification first.

---

## Workflow Steps

### [x] Step: Technical Specification
<!-- chat-id: e47db64d-0252-4155-b2e0-01a62530d84e -->

Assess the task's difficulty, as underestimating it leads to poor outcomes.
- easy: Straightforward implementation, trivial bug fix or feature
- medium: Moderate complexity, some edge cases or caveats to consider
- hard: Complex logic, many caveats, architectural considerations, or high-risk changes

Create a technical specification for the task that is appropriate for the complexity level:
- Review the existing codebase architecture and identify reusable components.
- Define the implementation approach based on established patterns in the project.
- Identify all source code files that will be created or modified.
- Define any necessary data model, API, or interface changes.
- Describe verification steps using the project's test and lint commands.

Save the output to `{@artifacts_path}/spec.md` with:
- Technical context (language, dependencies)
- Implementation approach
- Source code structure changes
- Data model / API / interface changes
- Verification approach

If the task is complex enough, create a detailed implementation plan based on `{@artifacts_path}/spec.md`:
- Break down the work into concrete tasks (incrementable, testable milestones)
- Each task should reference relevant contracts and include verification steps
- Replace the Implementation step below with the planned tasks

Rule of thumb for step size: each step should represent a coherent unit of work (e.g., implement a component, add an API endpoint, write tests for a module). Avoid steps that are too granular (single function).

Save to `{@artifacts_path}/plan.md`. If the feature is trivial and doesn't warrant this breakdown, keep the Implementation step below as is.

**Status**: ✅ Completed - See spec.md for full technical specification

---

### [x] Step: Project Setup and Structure
<!-- chat-id: 7aba9897-7b8a-4c28-b191-cc1494189d8a -->

Initialize the project structure and create base configuration files.

- [x] Create .gitignore file
- [x] Set up directory structure (css/, js/, assets/)
- [x] Create base HTML structure in index.html
- [x] Set up CSS file architecture (style.css, loading.css, robot.css)
- [x] Create JavaScript module files (main.js, loading.js, robot-tracker.js)

**Verification**: Directory structure matches spec.md, all base files created

---

### [x] Step: Create Robot SVG Asset
<!-- chat-id: a8f4d2a4-3f78-4095-be6e-5d57c1bf265c -->

Design and implement the grey/silver robot illustration with separable head component.

- [x] Create robot.svg with modular structure (body group, head group)
- [x] Style robot in grey/silver color scheme
- [x] Ensure head element has unique ID for JavaScript targeting
- [x] Test SVG renders correctly in browser

**Verification**: SVG displays correctly, head element is independently targetable

---

### [x] Step: Implement Loading Screen
<!-- chat-id: dfe1cad9-3d53-465c-a430-735638e326aa -->

Build the "Gaming Center" loading screen with animations.

- [x] Create HTML structure for loading overlay
- [x] Style loading screen with cyberpunk/gaming aesthetic
- [x] Implement CSS animations (glitch effects, fade-in/fade-out)
- [x] Write loading.js controller with show/hide/onComplete methods
- [x] Set appropriate timing (2-3 second display minimum)

**Verification**: Loading screen appears on page load, animates smoothly, transitions away

---

### [x] Step: Implement Robot Cursor Tracking
<!-- chat-id: 00460b26-a2d3-49d0-a91b-2b1f9c9209fd -->

Build the cursor tracking system that makes the robot head follow the mouse.

- [x] Integrate robot SVG into index.html
- [x] Position robot in background (fixed positioning)
- [x] Implement RobotTracker class in robot-tracker.js
- [x] Add mousemove event listener
- [x] Calculate angle from cursor to robot head center
- [x] Apply smooth rotation transform to head element
- [x] Add CSS transitions for smooth movement

**Verification**: Robot head smoothly follows cursor movement across the entire viewport

---

### [ ] Step: Build Portfolio Content and Layout
<!-- chat-id: 80512744-72f4-43d5-a304-90fc40ec6c8a -->

Create the main portfolio sections with responsive layout.

- [ ] Implement semantic HTML structure (header, sections, footer)
- [ ] Create navigation bar
- [ ] Build hero section
- [ ] Add About section
- [ ] Add Projects/Portfolio section with placeholder content
- [ ] Add Skills section
- [ ] Add Contact section
- [ ] Implement responsive grid/flexbox layout
- [ ] Apply cybersecurity theme styling (dark bg, neon accents, monospace fonts)

**Verification**: All sections render correctly, layout is responsive on mobile/tablet/desktop

---

### [x] Step: Add Interactive Elements and Polish
<!-- chat-id: 5fc1b032-c58d-4ea7-b3ab-491d8603aa1b -->

Implement interactive features and refine the user experience.

- [x] Add smooth scroll navigation
- [x] Implement hover effects on navigation and cards
- [x] Add glitch/neon effects on interaction
- [x] Implement section transition animations
- [x] Optimize performance (will-change, requestAnimationFrame if needed)
- [x] Test cross-browser compatibility

**Verification**: Interactions are smooth, effects work across browsers, no performance issues

---

### [ ] Step: Final Testing and Report
<!-- chat-id: 2b38cf0d-95d5-404f-9b15-d0273e87e672 -->

Perform comprehensive testing and document the implementation.

- [ ] Validate HTML (W3C validator)
- [ ] Test all interactive features
- [ ] Test responsive design on multiple viewports
- [ ] Run Lighthouse audit
- [ ] Verify accessibility (contrast, keyboard navigation)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Write report.md with implementation summary, testing results, and challenges

**Verification**: All tests pass, Lighthouse scores acceptable, report.md completed
