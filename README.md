# Avishek Rauniyar - Portfolio Website

A professional portfolio website for AI/ML Engineer featuring an admin panel, blog system, and SEO optimization.

## Features

### 🎨 Main Portfolio
- Professional AI/ML Engineer branding
- Projects showcase
- Publications and accomplishments section
- Interactive gallery
- Contact form
- Responsive design

### 📝 Blog System
- Dynamic blog listing page
- Individual blog post pages
- Search functionality
- Tag-based organization
- SEO-optimized blog posts

### 🔐 Admin Panel
- Secure login system
- Dashboard with statistics
- Project management
- Blog post creation and management
- Publications management
- Resume/CV management
- All data stored in browser localStorage

### 🚀 SEO Features
- Meta tags (Open Graph, Twitter Card)
- JSON-LD structured data
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Semantic HTML

## Setup Instructions

### Basic Setup
1. Clone the repository
2. Deploy to your web hosting service
3. Access the website at `avishekrauniyar.com.np`

### Blog Subdomain Setup
To enable blog subdomain (`blogs.avishekrauniyar.com.np`):

1. **DNS Configuration:**
   - Add a CNAME record for `blogs` pointing to your main domain
   - Or add an A record for `blogs.avishekrauniyar.com.np` pointing to your server IP

2. **Server Configuration:**
   - The `.htaccess` file is already configured for Apache servers
   - For other servers (Nginx, etc.), configure similar URL rewriting rules

3. **Alternative Access:**
   - Blogs are also accessible at `avishekrauniyar.com.np/blogs.html`
   - Individual posts: `avishekrauniyar.com.np/blog-post.html?slug=post-slug`

## File Structure

```
├── index.html              # Main portfolio page
├── blogs.html              # Blog listing page
├── blog-post.html          # Individual blog post template
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # Site structure for search engines
├── .htaccess               # Apache server configuration
├── admin/
│   ├── login.html          # Admin login page
│   └── index.html          # Admin dashboard
└── assets/
    ├── css/                # Stylesheets
    ├── js/                 # JavaScript files
    ├── imgs/               # Images
    └── vendors/            # Third-party libraries
```

## Admin Panel Usage

### Adding a Project
1. Login to admin panel
2. Navigate to "Projects" section
3. Fill in project details:
   - Title
   - Description
   - GitHub link
   - Technologies used
   - Date
4. Click "Save Project"

### Creating a Blog Post
1. Login to admin panel
2. Navigate to "Blogs" section
3. Fill in blog details:
   - Title (slug is auto-generated)
   - Content
   - Tags
4. Click "Publish Blog"
5. Blog will be available at `/blog-post.html?slug=your-slug`

### Adding Publications
1. Login to admin panel
2. Navigate to "Publications" section
3. Add publication details:
   - Title
   - Authors
   - Date
   - Link
   - Description
4. Click "Save Publication"

### Updating Resume
1. Login to admin panel
2. Navigate to "Resume" section
3. Enter resume file URL
4. Update skills list
5. Click "Update Resume"

## Data Storage

All data is stored in browser's localStorage:
- `adminAuth`: Authentication status
- `projects`: Project listings
- `blogs`: Blog posts
- `publications`: Publications
- `resume`: Resume information

**Note:** localStorage is browser-specific. For production use, consider implementing a backend database.

## Security Considerations

1. **Change Admin Credentials:**
   - Edit `admin/login.html`
   - Update the authentication logic with secure credentials
   - Consider implementing proper backend authentication

2. **HTTPS:**
   - Ensure your site uses HTTPS
   - Update all URLs to use HTTPS

3. **Backend Implementation:**
   - For production, implement a proper backend with database
   - Add server-side authentication
   - Implement proper session management

## SEO Optimization

### Meta Tags
- All pages include proper meta descriptions
- Open Graph tags for social media sharing
- Twitter Card tags
- Canonical URLs

### Structured Data
- Person schema for main page
- BlogPosting schema for blog posts
- Organization schema

### Performance
- Image optimization (WebP format)
- Browser caching configured
- Gzip compression enabled
- Lazy loading for images

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 4
- jQuery
- Isotope.js (Gallery filtering)
- Google Maps API
- Themify Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Avishek Rauniyar. All rights reserved.

## Contact

- Email: avishekrauniyar07@gmail.com
- LinkedIn: [Avishek Rauniyar](https://www.linkedin.com/in/avishek-rauniyar-b29275259)
- GitHub: [Avishek8136](https://github.com/Avishek8136)
- Website: [avishekrauniyar.com.np](https://avishekrauniyar.com.np)

## Future Enhancements

- Backend API implementation
- Database integration
- User authentication system
- Analytics integration
- Newsletter subscription
- Comment system for blogs
- RSS feed for blogs
- Dark mode toggle
