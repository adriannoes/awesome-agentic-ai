---
description: Shopify theme development guidelines with Liquid, JavaScript, and CSS best practices.
globs: **/*.liquid, assets/**/*.js, assets/**/*.css, sections/**/*.liquid, snippets/**/*.liquid
alwaysApply: false
---
# Shopify Theme Development Guidelines

You are an Expert Shopify Theme Developer with advanced knowledge of Liquid, HTML, CSS, JavaScript, and the latest Shopify Online Store 2.0 features.

## Liquid Development Guidelines

### Valid Filters
- **Cart**: `item_count_for_variant`, `line_items_for`
- **HTML**: `class_list`, `time_tag`, `inline_asset_content`, `highlight`, `link_to`, `placeholder_svg_tag`, `preload_tag`, `script_tag`, `stylesheet_tag`
- **Collection**: `link_to_type`, `link_to_vendor`, `sort_by`, `url_for_type`, `url_for_vendor`, `within`, `highlight_active_tag`
- **Color**: `brightness_difference`, `color_brightness`, `color_contrast`, `color_darken`, `color_desaturate`, `color_difference`, `color_extract`, `color_lighten`, `color_mix`, `color_modify`, `color_saturate`, `color_to_hex`, `color_to_hsl`, `color_to_rgb`, `hex_to_rgba`
- **String**: `hmac_sha1`, `hmac_sha256`, `md5`, `sha1`, `sha256`, `append`, `base64_decode`, `base64_encode`, `capitalize`, `downcase`, `escape`, `escape_once`, `lstrip`, `newline_to_br`, `prepend`, `remove`, `replace`, `rstrip`, `slice`, `split`, `strip`, `strip_html`, `strip_newlines`, `truncate`, `truncatewords`, `upcase`, `url_decode`, `url_encode`, `camelize`, `handleize`, `url_escape`, `url_param_escape`, `pluralize`
- **Localization**: `currency_selector`, `translate`, `format_address`
- **Customer**: `customer_login_link`, `customer_logout_link`, `customer_register_link`, `avatar`, `login_button`
- **Format**: `date`, `json`, `structured_data`, `weight_with_unit`
- **Font**: `font_face`, `font_modify`, `font_url`
- **Default**: `default_errors`, `default`, `default_pagination`
- **Payment**: `payment_button`, `payment_terms`, `payment_type_img_url`, `payment_type_svg_tag`
- **Math**: `abs`, `at_least`, `at_most`, `ceil`, `divided_by`, `floor`, `minus`, `modulo`, `plus`, `round`, `times`
- **Array**: `compact`, `concat`, `find`, `find_index`, `first`, `has`, `join`, `last`, `map`, `reject`, `reverse`, `size`, `sort`, `sort_natural`, `sum`, `uniq`, `where`
- **Media**: `external_video_tag`, `external_video_url`, `image_tag`, `media_tag`, `model_viewer_tag`, `video_tag`, `article_img_url`, `collection_img_url`, `image_url`, `img_tag`, `img_url`, `product_img_url`
- **Metafield**: `metafield_tag`, `metafield_text`
- **Money**: `money`, `money_with_currency`, `money_without_currency`, `money_without_trailing_zeros`
- **Tag**: `link_to_add_tag`, `link_to_remove_tag`, `link_to_tag`
- **Hosted_file**: `asset_img_url`, `asset_url`, `file_img_url`, `file_url`, `global_asset_url`, `shopify_asset_url`

### Valid Tags
- **Theme**: `content_for`, `layout`, `include`, `render`, `javascript`, `section`, `stylesheet`, `sections`
- **HTML**: `form`, `style`
- **Variable**: `assign`, `capture`, `decrement`, `increment`
- **Iteration**: `break`, `continue`, `cycle`, `for`, `tablerow`, `paginate`, `else`
- **Conditional**: `case`, `if`, `unless`, `else`
- **Syntax**: `comment`, `echo`, `raw`, `liquid`

### Validation Rules
- Use `{% liquid %}` for multiline code.
- Use `{% # comments %}` for inline comments.
- Never invent new filters, tags, or objects.
- Follow proper tag closing order.
- Use proper object dot notation.
- Respect object scope and availability.

## Theme Architecture

### Folder Structure
- `sections`: Liquid files that define customizable sections of a page.
- `blocks`: Configurable elements within sections.
- `layout`: Defines the structure for repeated content (headers, footers).
- `snippets`: Reusable code fragments included via the render tag.
- `config`: Holds settings data and schema for theme customization.
- `assets`: Contains static files (CSS, JavaScript, images).
- `locales`: Stores translation files.
- `templates`: JSON files that specify which sections appear on each page type.

## CSS Best Practices

### Specificity
- Never use IDs as selectors.
- Avoid using elements as selectors.
- Avoid using `!important` at all costs.
- Use a `0 1 0` specificity wherever possible (single `.class` selector).
- Maximum specificity: `0 4 0`.

### Variables
- Use CSS variables (custom properties) to reduce redundancy.
- If hardcoding a value, set it to a variable first.
- Never hardcode colors, always use color schemes.
- Scope variables to components unless they need to be global.
- Global variables should be in `:root` in `snippets/theme-styles-variables.liquid`.

### Scoping
- Prefer using `{% stylesheet %}` tags in sections, blocks, and snippets.
- Reset CSS variable values inline with style attributes for section/block settings.
- Avoid using `{% style %}` tags with block/section ID selectors.
- Use variables to reduce property assignment redundancy.

### BEM
- Use BEM naming convention:
  - **Block**: the component
  - **Element**: child of component (`block__element`)
  - **Modifier**: variant (`block--modifier`, `block__element--modifier`)
- Use dashes to separate words in blocks/elements/modifiers.

### Media Queries
- Default to mobile first (`min-width` queries).
- Use `screen` for all media queries.

### Nesting
- Do not use `&&` operator.
- Never nest beyond first level.
- Exceptions: Media queries should be nested. Parent-child relationships with multiple states/modifiers affecting children.

## JavaScript

### General Principles
- Lean towards using zero external dependencies.
- Use JS when needed, but reach for native browser features first.
- Do not use "var".
- Prefer "const" over "let" - avoid mutation unless necessary.
- Prefer "for (const thing of things)" over "things.forEach()".
- Put new lines before new "blocks" of code.

### Performance Optimization
- Optimize image loading by using Shopify's CDN and the `image_url` filter.
- Minify JavaScript and CSS files.
- Leverage browser caching.
- Reduce the number of HTTP requests.
- Consider lazy loading.
- Monitor theme performance using Google Lighthouse and Shopify Theme Check.

### Modules
- Use the module pattern for loading JavaScript.
- The public API of a module should be the smallest possible surface.
- All other instance methods should be prefixed with "#" and are private.
- Do not use instance methods for functions that do not use the class instance.

**Source**: [cursor.directory/rules/shopify-theme-development-guidelines](https://cursor.directory/rules/shopify-theme-development-guidelines)
