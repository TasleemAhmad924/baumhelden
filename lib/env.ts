import { z } from 'zod';

/**
 * Environment variable validation schema using Zod
 * This ensures all required environment variables are present and valid
 */
const envSchema = z.object({
  // App Configuration
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  
  // Database (placeholder for future use)
  DATABASE_URL: z.string().url().optional(),
  
  // Email Service (placeholder for contact forms)
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  
  // Google Services (placeholder for Maps API, Analytics)
  GOOGLE_MAPS_API_KEY: z.string().optional(),
  GOOGLE_ANALYTICS_ID: z.string().optional(),
  
  // Contact Information
  BUSINESS_EMAIL: z.string().email().optional(),
  BUSINESS_PHONE: z.string().optional(),
  
  // Social Media (placeholder)
  FACEBOOK_URL: z.string().url().optional(),
  INSTAGRAM_URL: z.string().url().optional(),
  
  // Feature Flags
  ENABLE_CONTACT_FORM: z
    .string()
    .transform(val => val === 'true')
    .pipe(z.boolean())
    .optional()
    .default('true'),
  
  // Third-party integrations (placeholder)
  RECAPTCHA_SITE_KEY: z.string().optional(),
  RECAPTCHA_SECRET_KEY: z.string().optional(),
});

/**
 * Parsed and validated environment variables
 * Safe to use throughout the application
 */
export const env = envSchema.parse(process.env);

/**
 * Type for environment variables
 * Useful for TypeScript intellisense
 */
export type Env = z.infer<typeof envSchema>;
