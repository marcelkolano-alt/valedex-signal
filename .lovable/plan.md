

# Valedex — Enterprise SaaS Landing Page

## Overview
A premium, dark-themed landing page for Valedex, an AI platform that automates first-pass deal evaluation from CIMs. The design will evoke institutional financial infrastructure credibility, inspired by Hebbia, Maywood AI, Daloopa, and Rogo.

## Design System
- **Theme**: Dark institutional — deep navy/charcoal backgrounds, white/light gray text, subtle blue-teal glow accents
- **Typography**: Inter font family, large confident headings, generous whitespace
- **Animations**: Subtle — soft fade-ins, gentle glow pulses, minimal data-flow motion
- **Layout**: Full-width sections, centered content with max-width container, thin dividers between sections

## Page Sections (Top to Bottom)

### 1. Navigation Bar
- Valedex logo (text-based, clean)
- Links: Platform, Signal, Security, Use Cases
- "Request Pilot" CTA button with subtle glow

### 2. Hero Section
- Large headline: "Infrastructure for Early-Stage Deal Evaluation"
- Subheadline explaining Valedex Signal
- Two CTAs: "Request Pilot" (primary, glowing) + "View Platform" (ghost/outline)
- Animated product preview: a dark card showing a CIM document being processed — metrics appearing, ratios computing, risk flags surfacing with subtle CSS animations

### 3. Product Intro — "Meet Valedex Signal"
- Description of the Signal engine
- Visual pipeline diagram: CIM Document → Valedex Signal → Structured Deal Intelligence
- Clean, minimal with connecting lines/arrows and subtle glow on the Signal node

### 4. Credibility Strip
- Four large statistics in a horizontal row (e.g., "50,000+ Documents Processed", "1.2M+ Metrics Extracted", "120,000+ Hours Eliminated", "300,000+ Deal Signals")
- Minimalist number display with subtle counter animation on scroll

### 5. Workflow Section — "From Document to Deal Signal"
- Vertical pipeline visualization with 5 steps (Upload → Extraction → Ratio Computation → Risk Flags → Deal Snapshot)
- Each step has an icon and brief description
- Connected by animated flow lines

### 6. Product Preview / UI Mockup
- Dark mock dashboard resembling institutional analytics software
- Four panels: Metric Extraction Table, Derived Metrics Panel, Risk Flags Panel, Evidence Panel
- Styled like a real financial terminal with tabular data, badges for risk flags, and page references

### 7. Features Section — "Built for Investment Workflows"
- 6 feature cards in a 3×2 grid
- Each card: icon, title, description
- Cards have subtle border glow on hover, dark card background

### 8. Platform Philosophy
- "AI for Deal Evaluation — Not Judgment Replacement"
- Short copy explaining Valedex removes mechanical work while humans retain decision-making
- Minimal section with centered text

### 9. Security & Trust
- 4 trust signals with enterprise-style shield/lock icons
- Secure processing, enterprise infrastructure, no model training on data, encrypted storage

### 10. Use Cases
- 5 use case cards: PE Firms, Search Funds, Family Offices, Independent Sponsors, Investment Banks
- Each with a 1-2 sentence explanation of how Valedex fits their workflow

### 11. Final CTA
- "Flag First. Decide Faster."
- Subtext about reducing CIM review from hours to minutes
- Large "Request Pilot" button with glow effect

### 12. Footer
- Valedex branding, copyright, minimal links

## Technical Approach
- Single-page React component with smooth scroll navigation
- CSS animations for the hero product preview (no heavy libraries)
- Intersection Observer for scroll-triggered fade-in animations
- Fully responsive (desktop-first, mobile-friendly)
- All content hardcoded (no backend needed)

