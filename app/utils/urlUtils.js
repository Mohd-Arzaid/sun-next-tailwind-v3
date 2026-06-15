/**
 * Converts a title to a URL-friendly slug
 * @param {string} title - The title to convert
 * @returns {string} The URL-friendly slug
 */
export const getUrlSlug = (title) => {
  // Remove common prefixes - order matters!
  let cleanTitle = title
    .replace(/^BIS\s+Legal\s+Metrology\s*[–-]\s*/i, "Legal Metrology ") // Handle "BIS Legal Metrology –"
    .replace(/^BIS\s+(certification|notification)\s+for\s+/i, "") // Remove "BIS certification for" or "BIS Notification for"
    .replace(/^BIS\s+Notification\s+/i, "") // Remove "BIS Notification " (without "for")
    .replace(/^QCO\s+notification\s+for\s+/i, "") // Remove "QCO notification for"
    .trim();

  return cleanTitle
    .toLowerCase()
    .replace(/\//g, "-") // CRITICAL: Forward slashes
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
};

/**
 * Generates a notification detail URL
 * @param {string} title - The notification title
 * @returns {string} The full URL path
 */
export const getNotificationDetailUrl = (title) => {
  return `/bis-qco-updates/bis-certificate-for-${getUrlSlug(title)}`;
};

/**
 * Generates a canonical URL for a notification
 * @param {string} title - The notification title
 * @param {string} baseUrl - The base URL of the site
 * @returns {string} The full canonical URL
 */
export const getNotificationCanonicalUrl = (
  title,
  baseUrl = "https://bis-certifications.com"
) => {
  return `${baseUrl}${getNotificationDetailUrl(title)}`;
};