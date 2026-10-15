# Ningning Xu Research Portfolio

Personal research portfolio for Ningning Xu at the University of Georgia. Public site: [xcomedian.github.io/NickComedian](https://xcomedian.github.io/NickComedian/).

## Site Structure

- `index.html`: standalone homepage, published work, projects, experience, and contact links.
- `assets/css/portfolio.css`: responsive layout and print styles.
- `assets/js/portfolio.js`: mobile navigation and publication filters. The content remains readable without JavaScript.
- `files/Ningning_Xu_CV.pdf`: public CV in Times New Roman with email contact only.
- `images/`: existing avatar and research illustrations.
- `_config.yml`: GitHub Pages configuration.
- `about/index.html` and `about.html`: compatibility redirects for the old About routes.
- `.nojekyll`: publish the static files without a Jekyll build.
- `sitemap.xml` and `robots.txt`: canonical homepage discovery.

The homepage is static HTML and does not require a JavaScript build tool or external fonts. `.nojekyll` lets branch-based GitHub Pages publish the files directly. The older Jekyll theme files remain available for reference; `about/index.html` and `about.html` preserve the old About routes.

## Local Preview

Serve this repository with any static HTTP server, then open `index.html`. For a preview that checks the GitHub project path, serve the repository from `/NickComedian/` under a parent directory. The homepage uses relative asset links so it works at both the project path and a local root.

## Updating Content

Edit the relevant section in `index.html`. A publication uses an `article` with class `publication`; its `data-topics` attribute supplies the filter topics. Use `vision`, `reasoning`, or `statistics`, separated by spaces. Keep published journal, conference proceedings, and workshop statuses explicit. Update the footer date and sitemap date when publishing changes.

Replace the public PDF at the same filename when updating the CV. Keep private contact details and materials awaiting company clearance out of public files. Preserve an earlier version outside the published repository before substantial content revisions.

## Credits

The original academic site used [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io). Its theme files and license are retained. The portfolio reuses the site's existing avatar and research illustrations.
