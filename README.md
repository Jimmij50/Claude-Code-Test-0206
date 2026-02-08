# Simple Next.js Website

A modern, responsive one-page website built with Next.js 16 and React 19.

## Features

- Modern gradient design with smooth animations
- Responsive layout that works on all devices
- Three feature cards with hover effects
- Call-to-action section
- Built with Next.js App Router
- Zero configuration needed

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.js      # Root layout component
│   ├── page.js        # Home page
│   └── globals.css    # Global styles
├── next.config.js     # Next.js configuration
└── package.json       # Project dependencies
```

## Customization

### Changing Content

Edit `app/page.js` to modify the text, headings, and structure of your page.

### Styling

Customize the look and feel by editing `app/globals.css`. The current design features:
- Purple-to-pink gradient background
- Smooth fade-in animations
- Card hover effects
- Responsive grid layout

### Metadata

Update the site title and description in `app/layout.js`:

```javascript
export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
}
```

## Technologies Used

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- CSS3 - Styling and animations

## License

ISC

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
