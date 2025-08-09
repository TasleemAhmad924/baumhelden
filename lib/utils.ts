import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format phone number for display
 * TODO: Implement proper German phone number formatting
 */
export function formatPhoneNumber(phone: string): string {
  // Placeholder implementation
  return phone;
}

/**
 * Format email for display
 * TODO: Add email validation and formatting
 */
export function formatEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Generate SEO-friendly slug from string
 * TODO: Implement proper German character handling (ä, ö, ü, ß)
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Format price for display
 * TODO: Implement proper German currency formatting
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}
