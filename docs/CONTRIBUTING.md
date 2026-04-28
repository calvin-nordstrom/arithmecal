# Contributing to Arithmecal

Thank you for your interest in contributing to this project!

There are many ways to get involved, beyond adding new features. This document covers some ways you can help grow the website.

## Providing Feedback

The easiest way to contribute is to comment on existing pages or suggesting new services. The primary way to provide feedback is through the contact page on the website. Visit the contact page to send us a message!

Currently, we offer three ways to provide feedback or suggestions through our contact page:

* General feedback
* Suggest a calculator
* Suggest a unit

If you're a developer, feel free to open an issue for this repository.

## Adding a Page

To ensure consistency, please follow this protocol for adding a new feature page:

1. Create the page.tsx file
1. Perform SEO on metadata for the page:
    * Title
    * Description
    * Keywords
    * Alternates (Canonical)
1. If applicable, add bidirectional URLs for related calculators
1. Add the calculator (title and URL) to respective category page
1. Add the calculator (title, category, and URL) to calculator static search database
1. Update sitemap with page and category, if applicable
1. If you added a new category, add category page URL to:
    * Home page
    * Header
    * Footer
1. Add the NEW icon to the category/calculator
1. Confirm accuracy of repository docs
1. Run 'npm run build' to check for errors
1. Run 'npm run start' and run a Lighthouse check in browser
1. Test page responsiveness for all screen sizes
1. Commit, push, and open a pull request

## Updating a Page

Several files need to be updated when a page changes to ensure consistency and SEO across the site. Please follow this checklist when updating pages:

1. Verify accuracy of:
    * Page metadata
    * URL in related calculators
    * URL in category page
    * Calculator static search database
1. Update the lastmod field in the respective sitemap entry, including its category and home page if applicable
1. Confirm accuracy of repository docs
1. Run 'npm run build' to check for errors
1. Run 'npm run start' and run a Lighthouse check in browser
1. Test page responsiveness for all screen sizes
1. Commit, push, and open a pull request
