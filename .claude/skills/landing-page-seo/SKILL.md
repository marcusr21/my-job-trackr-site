---
name: landing-page-seo
description: Optimize My Job Trackr's homepage landing page for both traditional search (Google) and AI-generated results (ChatGPT, Perplexity, AI Overviews). Focuses on rankings and conversions. Generates SEO-optimized content sections (hero, features, benefits, FAQs, CTAs) with structured data/schema markup. Creates AI-first content that's factual, quotable, and extractable by AI search engines. Includes meta tags, schema markup (Organization, SoftwareApplication, FAQPage), Core Web Vitals recommendations, and AI optimization strategies. This skill must be used within the "My Job Trackr" project where product information and brand guidelines are available.
---

# Landing Page SEO & AI Optimization

Optimize My Job Trackr's homepage for maximum visibility in both traditional Google search and new AI-powered search results (ChatGPT, Perplexity, Google AI Overviews, etc.).

## Prerequisites

**CRITICAL:** This skill requires access to the "My Job Trackr" project context, which contains:
- Product features and capabilities
- Brand voice and messaging
- Target audience insights
- Pricing and positioning
- Unique value propositions

If not currently in the "My Job Trackr" project, inform the user that this skill requires that project context.

## Dual Optimization Strategy

This skill optimizes for TWO search paradigms:

### 1. Traditional Search (Google, Bing)
**Goal:** Rank high in search results
**Methods:**
- Keyword optimization
- Meta tags and descriptions
- Structured data (schema markup)
- Core Web Vitals
- Internal linking
- Content quality and relevance

### 2. AI Search (ChatGPT, Perplexity, AI Overviews)
**Goal:** Be cited/recommended by AI assistants
**Methods:**
- Factual, authoritative content
- Clear, direct answers to questions
- Structured FAQ sections
- Quotable statements
- Up-to-date, accurate information
- Source-friendly formatting

**Key Insight:** AI search engines extract and synthesize information. Content must be:
- **Extractable** - Clear facts AI can pull out
- **Quotable** - Well-phrased statements AI can cite
- **Authoritative** - Trustworthy and accurate
- **Structured** - FAQs, lists, clear sections

## Primary Keywords

**Core Focus:**
- job tracking app
- job search tracker
- job application tracker
- career tracking
- job hunt organizer

**Secondary:**
- track job applications
- organize job search
- job search tool
- application management
- interview tracker

## Content Section Generation

### Hero Section

**Purpose:** Immediate impact, conversion-focused, SEO-optimized

**Structure:**
```html
<section class="hero">
  <h1>[Primary Keyword + Value Proposition]</h1>
  <p class="subheadline">[Supporting benefit statement]</p>
  <div class="cta">
    <a href="/signup">[Primary CTA Button]</a>
    <span class="trust-indicator">[Social proof element]</span>
  </div>
</section>
```

**SEO Requirements:**
- H1 must include primary keyword
- Keep H1 under 70 characters
- Subheadline expands on value (20-30 words)
- Include conversion-focused CTA
- Add trust signal (e.g., "Join 10,000+ job seekers")

**AI Optimization:**
- Make value proposition quotable
- State benefit clearly and factually
- Include specific numbers/stats if available

**Examples:**

**H1 Options:**
- "Track Every Job Application in One Place"
- "Your Complete Job Search Tracker"
- "Organize Your Job Hunt with My Job Trackr"

**Subheadline Options:**
- "Never miss a deadline or lose track of applications. My Job Trackr helps job seekers stay organized and land their dream job faster."
- "The simple job tracking app that keeps all your applications, interviews, and offers organized in one place."

### Features Section

**Purpose:** Showcase key features with SEO keywords

**Structure:**
```html
<section class="features">
  <h2>[Keyword-rich section title]</h2>
  
  <div class="feature">
    <h3>[Feature Name with Benefit]</h3>
    <p>[Factual description with keywords]</p>
  </div>
  
  [Repeat for each feature]
</section>
```

**Key Features to Highlight:**
1. **Native Job Searching**
    - Title: "Search Jobs Directly In-App"
    - Description: Include "job search" keyword, factual benefits

2. **Job Tracking**
    - Title: "Track All Your Job Applications"
    - Description: Include "job tracking," "application tracker" keywords

3. **Interview Management**
    - Title: "Never Miss an Interview"
    - Description: Include "interview tracker," "interview management"

4. **Offer Comparison**
    - Title: "Compare Job Offers Side-by-Side"
    - Description: Include "job offers," "compare offers"

**SEO Requirements:**
- Use H3 for each feature
- Include keywords naturally in descriptions
- Keep descriptions to 2-3 sentences
- Focus on benefits, not just features

**AI Optimization:**
- Write factual, specific descriptions
- Use phrases like "My Job Trackr allows users to..."
- Make features easily extractable
- Include specific capabilities

### Benefits/Value Propositions Section

**Purpose:** Convert visitors by showing value

**Structure:**
```html
<section class="benefits">
  <h2>Why Job Seekers Choose My Job Trackr</h2>
  
  <div class="benefit">
    <h3>[Benefit Statement]</h3>
    <p>[Explanation with data/example]</p>
  </div>
</section>
```

**Benefits to Highlight:**
- **Stay Organized:** "Keep all job applications in one place"
- **Never Miss Deadlines:** "Set reminders for follow-ups and interviews"
- **Save Time:** "Stop juggling spreadsheets and browser tabs"
- **Track Progress:** "Visualize your job search journey"

**AI Optimization:**
- Use concrete, measurable benefits
- Include specific time savings or improvements
- Make statements quotable
- Use "helps job seekers..." phrasing

### FAQ Section (CRITICAL for AI Search)

**Purpose:** Answer common questions AI tools search for

**Structure:**
```html
<section class="faq" itemscope itemtype="https://schema.org/FAQPage">
  <h2>Frequently Asked Questions</h2>
  
  <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">[Question]</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">[Answer]</p>
    </div>
  </div>
</section>
```

**Essential Questions:**

1. **"What is My Job Trackr?"**
    - Answer: Clear, factual description
    - Include: Purpose, key features, who it's for
    - AI-friendly: "My Job Trackr is a job tracking application that helps job seekers organize applications, track interviews, and manage job offers in one place."

2. **"How much does My Job Trackr cost?"**
    - Answer: Exact pricing
    - "My Job Trackr costs £2.99 per month for web users and £3.99 per month through app stores."

3. **"What features does My Job Trackr include?"**
    - Answer: List key features
    - Be specific and comprehensive
    - Use bullet points in content (displayed as list)

4. **"Is My Job Trackr available on iOS and Android?"**
    - Answer: Current availability
    - "My Job Trackr is currently available on iOS via the App Store. Android support is coming soon."

5. **"How does My Job Trackr help with job searching?"**
    - Answer: Specific benefits and use cases
    - Include concrete examples

6. **"Can I track interviews with My Job Trackr?"**
    - Answer: Interview tracking capabilities
    - Be specific about features

7. **"Does My Job Trackr have native job search?"**
    - Answer: Job search functionality
    - Explain how it works

**AI Optimization:**
- Use FAQPage schema markup (CRITICAL!)
- Answer questions directly and factually
- Include keywords in questions naturally
- Provide complete, quotable answers
- Add 8-12 FAQs total
- Update regularly with new questions

### Social Proof Section

**Purpose:** Build trust, provide evidence

**Structure:**
```html
<section class="social-proof">
  <h2>Trusted by Job Seekers</h2>
  
  <div class="stats">
    <div class="stat">
      <span class="number">[Number]</span>
      <span class="label">[Metric]</span>
    </div>
  </div>
  
  <div class="testimonials">
    [Customer quotes]
  </div>
</section>
```

**AI-Friendly Stats:**
- "Over X job seekers use My Job Trackr"
- "X applications tracked"
- "X% of users land interviews faster"
- Be specific and factual
- Update regularly

### CTA Sections

**Purpose:** Drive conversions

**Primary CTA Variations:**
- "Start Tracking Your Job Search"
- "Get Organized Today"
- "Try My Job Trackr Free"
- "Download Now"

**CTA Placement:**
- Hero section (primary)
- After features
- After benefits
- End of page
- Sticky header/footer (optional)

**AI Note:** CTAs don't directly impact AI search but support conversion goals

## Technical SEO Requirements

### Meta Tags

**Title Tag (50-60 characters):**
```html
<title>My Job Trackr - Job Application Tracker & Search Tool</title>
```

**Meta Description (150-160 characters):**
```html
<meta name="description" content="Track job applications, manage interviews, and organize your job search. My Job Trackr helps you stay on top of every opportunity. £2.99/month.">
```

**Open Graph Tags (for social sharing):**
```html
<meta property="og:title" content="My Job Trackr - Track Your Job Search">
<meta property="og:description" content="The complete job tracking app for organized job seekers">
<meta property="og:image" content="[URL to social share image]">
<meta property="og:url" content="https://myjobtrackr.com">
<meta property="og:type" content="website">
```

**Twitter Card Tags:**
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="My Job Trackr - Job Application Tracker">
<meta name="twitter:description" content="Track applications, manage interviews, and land your dream job">
<meta name="twitter:image" content="[URL to Twitter card image]">
```

### Schema Markup (CRITICAL for AI)

**Organization Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "My Job Trackr",
  "url": "https://myjobtrackr.com",
  "logo": "https://myjobtrackr.com/logo.png",
  "description": "My Job Trackr is a job application tracking tool that helps job seekers organize their job search, manage interviews, and compare offers.",
  "sameAs": [
    "https://www.linkedin.com/company/myjobtrackr",
    "https://www.instagram.com/myjobtrackr",
    "https://www.tiktok.com/@myjobtrackr"
  ]
}
```

**SoftwareApplication Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "My Job Trackr",
  "applicationCategory": "ProductivityApplication",
  "offers": {
    "@type": "Offer",
    "price": "2.99",
    "priceCurrency": "GBP",
    "priceValidUntil": "[YYYY-MM-DD]"
  },
  "operatingSystem": "iOS",
  "description": "Job application tracking and job search management app",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[rating]",
    "ratingCount": "[count]"
  }
}
```

**FAQPage Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text]"
      }
    }
  ]
}
```

**BreadcrumbList Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://myjobtrackr.com"
    }
  ]
}
```

### Structured Data Best Practices

1. **Include ALL relevant schema types**
2. **Keep data accurate and up-to-date**
3. **Validate with Google's Rich Results Test**
4. **Use JSON-LD format (not Microdata)**
5. **Include as much detail as possible**

## AI-First Content Strategy

### Writing for AI Extraction

**DO:**
- **State facts clearly:** "My Job Trackr is a job tracking application designed for job seekers."
- **Use complete sentences:** Don't rely on context
- **Include specific numbers:** "£2.99 per month" not "affordable pricing"
- **Define acronyms:** "Job application tracker (also called job search tracker)"
- **Use "helps," "allows," "enables":** "My Job Trackr helps users track applications"
- **Structure with headers:** H2, H3 for clear sections
- **Create quotable statements:** Ready to be cited by AI

**DON'T:**
- Use vague language: "many features" vs. "4 key features"
- Rely on pronouns without antecedents: "it does this" vs. "My Job Trackr does this"
- Use marketing fluff: "revolutionary" vs. "includes native job search"
- Bury key info: Put important facts early and prominently

### AI-Optimized Content Patterns

**Pattern 1: Direct Definition**
```
"My Job Trackr is [clear definition]. The app allows users to [key capabilities]."
```

Example:
"My Job Trackr is a job application tracking tool for job seekers. The app allows users to search for jobs, track applications, manage interviews, and compare job offers in one centralized platform."

**Pattern 2: Feature Explanation**
```
"The [feature name] feature enables users to [specific capability]. This helps [target audience] [specific benefit]."
```

Example:
"The native job search feature enables users to search for open positions directly within the app. This helps job seekers consolidate their job search workflow without switching between multiple browser tabs."

**Pattern 3: Comparison/Differentiation**
```
"Unlike [alternative approach], My Job Trackr [specific differentiation]."
```

Example:
"Unlike spreadsheet-based tracking, My Job Trackr provides purpose-built tools for job seekers including deadline reminders, interview scheduling, and offer comparison."

**Pattern 4: Use Case**
```
"Job seekers use My Job Trackr to [specific use case]. The typical workflow includes [steps]."
```

Example:
"Job seekers use My Job Trackr to organize all job applications in one place. The typical workflow includes searching for jobs, saving applications with notes, setting follow-up reminders, and tracking interview dates."

### Creating AI-Friendly FAQs

**Question Format:**
- Use natural language people actually search
- Include keywords organically
- Be specific, not generic

**Answer Format:**
- First sentence = direct answer
- Following sentences = supporting detail
- Include specific facts and numbers
- Use complete, standalone statements
- Make it quotable

**Example:**

**Q: "What is the best way to track job applications?"**

**A:** "The best way to track job applications is to use a dedicated job tracking app like My Job Trackr that centralizes all application information in one place. This approach is more effective than spreadsheets because it includes purpose-built features like deadline reminders, interview scheduling, and offer comparison tools. Job seekers using tracking apps report higher organization and fewer missed opportunities compared to manual tracking methods."

*Note: This answer is factual, cites the product naturally, and is quotable by AI tools.*

## Core Web Vitals Recommendations

### Performance Optimization

**Largest Contentful Paint (LCP) - Target: <2.5s**
- Optimize hero image size
- Use WebP format for images
- Implement lazy loading for below-fold content
- Preload critical resources
- Use CDN for assets

**First Input Delay (FID) - Target: <100ms**
- Minimize JavaScript execution
- Break up long tasks
- Use web workers for heavy computations
- Defer non-critical JavaScript

**Cumulative Layout Shift (CLS) - Target: <0.1**
- Set explicit dimensions for images
- Reserve space for dynamic content
- Avoid inserting content above existing content
- Use transform animations instead of layout changes

**Additional:**
- Minimize HTTP requests
- Enable compression (Gzip/Brotli)
- Optimize fonts (use system fonts or preload custom fonts)
- Implement caching strategies

## Internal Linking Strategy

**From Homepage Link To:**
- /features (Features page)
- /pricing (Pricing page)
- /blog (Blog posts)
- /help (Help documentation)
- /download (App download page)

**Use Keyword-Rich Anchor Text:**
- ✅ "learn more about job tracking features"
- ✅ "see our pricing plans"
- ❌ "click here"
- ❌ "read more"

**Link Placement:**
- Within hero CTA
- After each feature description
- In FAQ answers
- Footer navigation
- Header navigation

## Mobile Optimization

**Critical Requirements:**
- Responsive design (works on all screen sizes)
- Touch-friendly buttons (44x44px minimum)
- Readable fonts (16px minimum)
- No horizontal scrolling
- Fast mobile load times (<3s)
- Thumb-reachable CTAs
- Simplified navigation

**Mobile-First Content:**
- Shorter paragraphs for mobile
- Larger headings
- More white space
- Stackable sections
- Mobile-optimized images

## Image Optimization

**Best Practices:**
- Use WebP format with JPEG fallback
- Optimize file sizes (compress images)
- Implement lazy loading
- Use responsive images (srcset)
- Include descriptive alt text with keywords
- Set explicit width and height

**Alt Text Examples:**
- "My Job Trackr dashboard showing tracked job applications"
- "Job search interface within My Job Trackr app"
- "Interview calendar view in My Job Trackr"

## Content Freshness Strategy

**Update Regularly:**
- Add new FAQs monthly
- Update stats and numbers
- Refresh testimonials
- Add new features as they launch
- Update schema markup with current data
- Refresh meta descriptions seasonally

**AI Benefit:** Fresh, current content is prioritized by AI systems

## Output Format

When generating landing page content, deliver:

```markdown
# My Job Trackr - Landing Page SEO Package

---

## Meta Tags & Technical SEO

### Title Tag
[SEO-optimized title, 50-60 chars]

### Meta Description
[Compelling description, 150-160 chars]

### Open Graph Tags
[OG tags for social sharing]

### Twitter Card Tags
[Twitter card tags]

---

## Schema Markup

### Organization Schema
```json
[Complete Organization schema]
```

### SoftwareApplication Schema
```json
[Complete SoftwareApplication schema]
```

### FAQPage Schema
```json
[Complete FAQPage schema with 8-12 questions]
```

---

## Hero Section

### H1 (Primary Headline)
[Keyword-optimized headline, <70 chars]

### Subheadline
[Supporting value proposition, 20-30 words]

### Primary CTA
[Button text and supporting copy]

**AI-Optimized Statement:**
[Quotable version of value proposition]

---

## Features Section

### Section Title (H2)
[Keyword-rich section title]

### Feature 1: [Feature Name]
**H3:** [Benefit-focused title]
**Description:** [2-3 sentences, keyword-optimized, AI-friendly]

### Feature 2: [Feature Name]
[Continue for all features]

---

## Benefits/Value Propositions Section

### Section Title (H2)
"Why Job Seekers Choose My Job Trackr"

### Benefit 1: [Benefit Statement]
**H3:** [Clear benefit title]
**Explanation:** [With data/example, AI-extractable]

[Continue for all benefits]

---

## FAQ Section (AI-Critical)

### Question 1: "What is My Job Trackr?"
**Answer:** [Direct, factual answer with key details]

### Question 2: "How much does My Job Trackr cost?"
**Answer:** [Exact pricing information]

[Continue for 8-12 total FAQs]

---

## Social Proof Section

### Stats
- [Specific, factual metric 1]
- [Specific, factual metric 2]
- [Specific, factual metric 3]

### Testimonials
[Customer quotes if available]

---

## CTA Sections

### Primary CTA (Hero)
[Text and placement]

### Secondary CTAs
[After features, benefits, etc.]

---

## AI Optimization Notes

**Quotable Statements:**
1. [Key statement 1 - ready to be cited]
2. [Key statement 2 - ready to be cited]
3. [Key statement 3 - ready to be cited]

**Extractable Facts:**
- [Fact 1]
- [Fact 2]
- [Fact 3]

**Questions AI Might Ask:**
- [Question AI could ask with answer on page]
- [Question AI could ask with answer on page]

---

## Core Web Vitals Recommendations

### Performance
- [Specific recommendations for this page]

### Layout Stability
- [Specific recommendations]

### Interactivity
- [Specific recommendations]

---

## Internal Linking Strategy

**Links to Include:**
1. [Page] - Anchor text: "[keyword-rich anchor]"
2. [Page] - Anchor text: "[keyword-rich anchor]"
3. [Page] - Anchor text: "[keyword-rich anchor]"

---

## Image Requirements

**Images Needed:**
1. Hero image - Alt text: "[descriptive, keyword-rich]"
2. Feature 1 screenshot - Alt text: "[descriptive]"
3. Feature 2 screenshot - Alt text: "[descriptive]"
   [Continue for all images]

---

## SEO Checklist

- [ ] Title tag includes primary keyword
- [ ] Meta description is compelling and <160 chars
- [ ] H1 includes primary keyword
- [ ] FAQ section with 8-12 questions
- [ ] FAQPage schema markup included
- [ ] Organization schema included
- [ ] SoftwareApplication schema included
- [ ] All images have descriptive alt text
- [ ] Internal links use keyword-rich anchors
- [ ] Content is AI-extractable and quotable
- [ ] Mobile-optimized
- [ ] Core Web Vitals addressed
- [ ] No double dashes (--)
```

## Monitoring & Iteration

### Track These Metrics:

**Traditional SEO:**
- Keyword rankings for target terms
- Organic traffic to homepage
- Bounce rate and time on page
- Conversion rate
- Core Web Vitals scores

**AI Search Performance:**
- Monitor if My Job Trackr appears in ChatGPT responses
- Check Perplexity.ai citations
- Track Google AI Overview appearances
- Search for your brand + common questions
- Monitor how AI describes your product

### Testing AI Visibility

**Test queries:**
- "What is the best job tracking app?"
- "How do I track job applications?"
- "Job search organization tools"
- "Apps for managing job hunt"

**Check if AI:**
- Mentions My Job Trackr
- Cites your content
- Describes features accurately
- Links to your site

### Continuous Improvement

**Monthly:**
- Add 2-3 new FAQs based on user questions
- Update stats and numbers
- Refresh one content section
- Check and update schema markup

**Quarterly:**
- Comprehensive content audit
- Competitor analysis
- New AI optimization opportunities
- Core Web Vitals review

## Working with Project Context

When generating landing page content:
1. Reference My Job Trackr features from project knowledge
2. Use accurate pricing from project info
3. Maintain brand voice from project conversations
4. Include specific capabilities from project context
5. Align with target audience insights
6. Use real product details (not generic descriptions)

## Quality Standards

**All content must be:**
- Factually accurate
- Up-to-date with current product
- Quotable and extractable by AI
- Keyword-optimized naturally
- Conversion-focused
- Mobile-friendly
- Performance-optimized
- Schema-enhanced

**Avoid:**
- Vague or generic statements
- Outdated information
- Keyword stuffing
- Unsubstantiated claims
- Poor mobile experience
- Slow load times
- Missing schema markup
- Double dashes (--)