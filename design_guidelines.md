# Gondi Gotul Guru - Design Guidelines

## Design Approach: Educational Design System

**Selected Approach**: Custom educational platform inspired by Duolingo's gamification patterns and Material Design's clarity, with cultural authenticity at its core.

**Justification**: This is a utility-focused language learning application where efficiency, clarity, and cultural respect are paramount. The design must support active learning while honoring the Masaram Gondi script's cultural significance.

---

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- **Deep Teal**: 180 65% 35% (primary brand, represents growth and learning)
- **Warm Amber**: 30 80% 55% (accent for achievements and progress)
- **Cultural Purple**: 270 50% 45% (honors traditional Gondi textiles)

**Dark Mode:**
- Background: 220 15% 12%
- Surface: 220 15% 18%
- Elevated: 220 15% 22%

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Elevated: 0 0% 95%

**Semantic Colors:**
- Success: 140 70% 45%
- Error: 0 70% 55%
- Warning: 40 90% 50%
- Info: 210 80% 55%

### B. Typography

**Primary Font**: 'Inter' (Google Fonts) - for UI and English/Hindi text
- Headings: 600-700 weight
- Body: 400-500 weight
- Small text: 400 weight

**Script Font**: 'Noto Sans Masaram Gondi' (Google Fonts) - for authentic Gondi script display
- Display size: 32-48px for vocabulary cards
- Reading size: 20-24px for sentences
- Must always be clearly legible

**Hierarchy:**
- Hero/Display: text-5xl to text-6xl (48-60px)
- Page Headers: text-3xl to text-4xl (30-36px)
- Section Headers: text-xl to text-2xl (20-24px)
- Body: text-base (16px)
- Small: text-sm (14px)

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: p-2, gap-2
- Standard spacing: p-4, p-6, gap-4
- Section spacing: p-8, py-12, py-16
- Large gaps: gap-8, gap-12

**Container Strategy:**
- App container: max-w-7xl mx-auto
- Content areas: max-w-6xl
- Lesson content: max-w-4xl
- Text blocks: max-w-prose

**Grid System:**
- Dashboard cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Vocabulary display: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Mobile: Always single column with comfortable padding

### D. Component Library

**Navigation:**
- Horizontal tab navigation (6 tabs: Dashboard, Lessons, Grammar, Profile, Dictionary, Help)
- Fixed position on mobile, sticky on desktop
- Active tab highlighted with accent gradient background
- Icon + label on desktop, icon-only on mobile with tooltips

**Vocabulary Cards:**
- White/dark surface with subtle border
- Gondi script prominently displayed (text-3xl)
- Pronunciation guide below in lighter text
- Translation in small text
- Audio icon (speaker) positioned top-right
- Hover: subtle lift shadow and scale (1.02)

**Lesson Cards:**
- Gradient background unique to each lesson theme
- Lesson number badge (circular, top-left)
- Title in bold text-2xl
- Progress ring/bar showing completion
- Lock icon for incomplete prerequisites
- Interactive states: hover lift, active press

**Progress Components:**
- Circular progress rings for stats (using SVG)
- Horizontal bars for lesson completion
- Streak calendar with highlighted active days
- Achievement badges in circular frames with glow on unlock

**Quiz Interface:**
- Question card with clear question text
- 4 option buttons in 2x2 grid on mobile, 1x4 on desktop
- Immediate feedback: green checkmark/red X animation
- Score display with celebratory animation on completion
- Retry button with refresh icon

**Forms & Inputs:**
- Rounded corners (rounded-lg to rounded-xl)
- Clear focus states with accent color ring
- Error states with red border and helper text
- Consistent padding (p-3 to p-4)

**Modals:**
- Centered overlay with dark backdrop (bg-black/50)
- White/dark card with rounded-2xl
- Close button (X) positioned top-right
- Smooth enter/exit animations (fade + scale)

### E. Interactions & Animations

**Principles**: Minimize distracting animations; use purposeful micro-interactions

**Core Animations:**
- Page transitions: 200ms fade
- Card hover: 150ms transform scale(1.02)
- Button press: 100ms scale(0.98)
- Tab switch: 250ms slide with fade
- Achievement unlock: 500ms bounce + glow pulse
- Progress updates: 300ms smooth count-up

**No Animations For:**
- Background gradients (static)
- Text content
- Vocabulary display (instant)

---

## Specialized Sections

### Dashboard Layout
- Welcome header with user name and level badge
- 2x2 stat grid: Streak, Vocabulary Mastered, Study Time, Quiz Accuracy
- Recent lessons carousel (horizontal scroll on mobile)
- Progress chart (Chart.js line graph)
- Achievement showcase (4 most recent)

### Lesson Interface
- Breadcrumb navigation: Dashboard > Lessons > [Lesson Name]
- Progress bar fixed at top
- Tabbed sections: Vocabulary, Activities, Quiz
- Vocabulary grid with search/filter
- Interactive activities with clear instructions
- Quiz with immediate feedback

### Dictionary Interface
- Prominent search bar at top (tri-lingual search)
- Filter chips: Gondi/Hindi/English
- Results in card grid with all three translations
- Pronunciation audio for each entry
- Example sentence expandable section

### Profile Page
- Avatar circle with initials (gradient background)
- Editable display name
- Level progress bar with XP count
- Statistics dashboard (detailed version)
- Learning history timeline (vertical on mobile, horizontal on desktop)
- Settings section with dark mode toggle

---

## Images

**No hero images needed** - This is a utility application focused on learning content.

**Iconography:**
- Use Heroicons for UI elements (outline style)
- Custom illustrated icons for lessons (family tree, food items, clock for activities)
- Flag/cultural icons to represent languages
- Achievement badge illustrations (custom SVG)

**Visual Elements:**
- Gondi script samples displayed as primary visual content
- Progress visualization through charts and graphs
- Cultural pattern backgrounds (subtle, non-distracting) in gradient overlays for lesson cards

---

## Responsive Behavior

**Mobile (< 768px):**
- Tab navigation becomes bottom fixed bar
- Cards stack vertically
- Vocabulary grid: 2 columns
- Quiz options: 2x2 grid
- Larger touch targets (min 44x44px)

**Tablet (768px - 1024px):**
- Tab navigation horizontal at top
- Dashboard: 2-column grid
- Vocabulary: 3 columns
- Comfortable spacing increases

**Desktop (> 1024px):**
- Full horizontal navigation with labels
- 3-column layouts for content
- Side-by-side lesson content and activities
- Hover states become prominent

---

## Accessibility

- Maintain WCAG AA contrast ratios (4.5:1 for text)
- Dark mode must have equal legibility to light mode
- Focus indicators clearly visible (2px accent ring)
- Gondi script size never below 18px
- All interactive elements keyboard accessible
- Screen reader labels for audio buttons and progress indicators