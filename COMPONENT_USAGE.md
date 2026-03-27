# Component Usage Guide

This document outlines the reusable components in the project and where they should be used to maintain consistency and avoid code duplication.

## UI Components

### 1. Card.astro (`src/components/ui/Card.astro`)
**Purpose:** Display trade service cards with hover effects and glassmorphism overlay.

**Props:**
- `name` (string) - Trade name
- `tagline` (string) - Short description
- `hoverTitle` (string, optional) - Title shown on hover
- `hoverDescription` (string, optional) - Description shown on hover
- `image` (string, optional) - Card image URL
- `slug` (string) - URL slug for the trade

**Used in:**
- `src/components/layout/Trades.astro` - Displays trade service cards

**Features:**
- Image with gradient overlay
- Default content (name + tagline) visible by default
- Glassmorphism hover effect with expanded content
- "Learn More" button on hover
- Smooth transitions and animations

---

### 2. StatCard.astro (`src/components/ui/StatCard.astro`)
**Purpose:** Display statistics with icons and gradient numbers.

**Props:**
- `icon` (string) - Icon type: "clock", "building", "users", "star"
- `value` (string) - Stat value (e.g., "10+", "500+", "4.9/5")
- `label` (string) - Stat description

**Used in:**
- `src/components/layout/About.astro` - Shows company statistics
- Can be used anywhere statistics need to be displayed

**Features:**
- Icon mapping for common stat types
- Gradient text effect on numbers
- Hover effects (lift + glow)
- Responsive sizing
- Handles multi-line text values

---

### 3. TemplateCard.astro (`src/components/ui/TemplateCard.astro`)
**Purpose:** Display project/template cards with hover overlay.

**Props:**
- `title` (string) - Template title
- `category` (string) - Template category badge
- `description` (string) - Template description
- `image` (string, optional) - Template image
- `stats` (string, optional) - Achievement stats
- `href` (string) - Link URL
- `linkText` (string, optional) - Link button text (default: "View Templates")
- `featured` (boolean, optional) - Makes card larger (default: false)

**Used in:**
- `src/components/layout/FeaturedTemplates.astro` - Homepage featured templates
- `src/components/layout/TemplatesByTrade.astro` - Our Work page templates
- `src/pages/trades-we-serve/[slug].astro` - Trade detail page templates

**Features:**
- Image with subtle bottom gradient by default
- Glassmorphism overlay on hover
- Category badge
- Description with line clamping (3 lines max)
- Optional stats display
- Clickable link with icon
- Smooth hover transitions

---

### 4. Button.astro (`src/components/ui/Button.astro`)
**Purpose:** Consistent button styling across the site.

**Props:**
- `variant` - "primary" or "secondary"
- `size` - "sm", "md", "lg"
- `href` - Link URL
- `ariaLabel` - Accessibility label
- `fullWidth` (boolean, optional)
- `scrollAdaptive` (boolean, optional)

**Used throughout the project for CTAs and navigation.**

---

## Layout Components

### 1. Trades.astro (`src/components/layout/Trades.astro`)
**Purpose:** Display trade services grid with optional limit.

**Props:**
- `limit` (number, optional) - Max number of trades to show

**Uses:** Card.astro component

---

### 2. FeaturedTemplates.astro (`src/components/layout/FeaturedTemplates.astro`)
**Purpose:** Display featured templates grouped by trade (max 6).

**Uses:** TemplateCard.astro component

---

### 3. TemplatesByTrade.astro (`src/components/layout/TemplatesByTrade.astro`)
**Purpose:** Display all trades with their top 3 templates or placeholder.

**Uses:** TemplateCard.astro component

**Features:**
- Shows ALL trades (even without templates)
- Top 3 templates per trade
- Placeholder for trades without templates
- "View All" button when more than 3 templates exist

---

### 4. About.astro (`src/components/layout/About.astro`)
**Purpose:** About section with manifesto and statistics.

**Uses:** StatCard.astro component

---

### 5. Reviews.astro (`src/components/layout/Reviews.astro`)
**Purpose:** Testimonials carousel with image and stats.

**Features:**
- Auto-rotating carousel (5 seconds)
- Manual navigation with indicator dots
- Static image with stats badge
- Glassmorphism card design

---

### 6. Statistics.astro (`src/components/layout/Statistics.astro`)
**Purpose:** Unique diagonal statistics layout.

**Features:**
- Diagonal offset stat cards
- Vertical divider with animated pulse
- Floating stats bar at bottom
- Animated background orbs

---

## Best Practices

1. **Always use existing components** instead of creating hardcoded implementations
2. **StatCard** for any statistics display
3. **Card** for trade service cards
4. **TemplateCard** for project/template displays
5. **Button** for all CTAs and links
6. Keep component props consistent and well-documented
7. Use Poppins font family throughout
8. Follow Neo-Tech color scheme:
   - Deep Obsidian: #161F30
   - Vibrant Azure: #2F8EF8
   - Electric Cyan: #94F9FD
   - Pure White: #FFFFFF

---

## Component Refactoring Completed

✅ About.astro - Now uses StatCard component instead of hardcoded stat cards
✅ Removed duplicate styles from About.astro
✅ All template displays use TemplateCard component
✅ Trades component uses Card component

## Future Improvements

- Consider creating a ReviewCard component for testimonials
- Create a FeatureCard component for feature displays
- Add more icon options to StatCard as needed
