# Baumhelden Website

A modern, responsive website for Baumhelden - a German tree service company specializing in tree felling, tree care, and root removal.

## 🌳 About

Baumhelden is a professional tree service company providing comprehensive solutions for:
- Tree felling (Baumfällung)
- Tree care (Baumpflege)
- Root removal (Wurzelentfernung)
- Emergency tree services
- Professional consultation

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Validation**: Zod
- **Linting**: ESLint + Prettier
- **Deployment**: IONOS Deploy Now

## 📁 Project Structure

```
baumhelden/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── loading.tsx       # Loading UI
│   ├── not-found.tsx     # 404 page
│   └── error.tsx         # Error boundary
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Layout components
├── lib/                  # Utilities and configurations
│   ├── env.ts           # Environment validation
│   └── utils.ts         # Utility functions
├── public/              # Static assets
├── .github/            # GitHub workflows and templates
└── ...config files
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd baumhelden
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` with your actual values.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript compiler
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Adding UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) for UI components.

To add a new component:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add form
```

## 🌍 Environment Variables

Copy `env.example` to `.env.local` and configure:

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment mode | Yes |
| `DATABASE_URL` | Database connection | No* |
| `GOOGLE_MAPS_API_KEY` | Google Maps integration | No* |
| `BUSINESS_EMAIL` | Contact email | No* |
| `BUSINESS_PHONE` | Contact phone | No* |

*Will be required when implementing specific features

## 🚀 Deployment

### IONOS Deploy Now

This project is configured for deployment on IONOS Deploy Now:

1. **Connect your repository** to IONOS Deploy Now
2. **Configure build settings**:
   - Build command: `npm run build`
   - Output directory: `.next`
   - Node.js version: 18.x

3. **Set environment variables** in the IONOS Deploy Now dashboard

4. **Deploy** - The site will be automatically deployed on push to main

### Build Configuration

The project includes:
- `next.config.mjs` with IONOS-specific settings
- `output: 'standalone'` for optimal deployment
- GitHub Actions CI/CD pipeline

## 🔧 Code Quality

### Linting & Formatting

- **ESLint**: Configured with Next.js and TypeScript rules
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict type checking

### Git Hooks (Recommended)

Add pre-commit hooks with husky:

```bash
npm install --save-dev husky lint-staged
npx husky install
```

## 📱 Features (Planned)

- [ ] Responsive design for all devices
- [ ] Contact form with validation
- [ ] Service pages with detailed information
- [ ] Image gallery for completed projects
- [ ] Google Maps integration
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Accessibility compliance (WCAG 2.1)

## 🧪 Testing

Testing setup is planned for future development:

- Unit tests with Jest
- Integration tests with React Testing Library
- E2E tests with Playwright

## 📄 License

Private project - All rights reserved.

## 🤝 Contributing

This is a private project. For internal development:

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📞 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team

---

**Note**: This is the initial project setup. Features will be implemented incrementally based on business requirements.
