import buffetData from "@/content/pricing/buffet.json";
import menuCategoriesData from "@/content/menu/categories.json";
import menuItemsData from "@/content/menu/items.json";
import contactData from "@/content/contact.json";
import heroData from "@/content/hero.json";
import hoursData from "@/content/hours.json";
import navigationData from "@/content/navigation.json";
import dinnerPackagesData from "@/content/dinner/packages.json";
import takeawayInfoData from "@/content/takeaway/info.json";
import alacarteSectionsData from "@/content/alacarte/sections.json";
import sushiSectionsData from "@/content/sushi/sections.json";
import drinkCategoriesData from "@/content/drinks/categories.json";
import buffetBenefitsData from "@/content/buffet/benefits.json";
import buffetGalleryData from "@/content/buffet/gallery.json";
import reviewsData from "@/content/reviews.json";
import {
  buffetPricingSchema,
  contactSchema,
  dinnerPackageSchema,
  heroSchema,
  hoursSchema,
  menuCategorySchema,
  menuItemSchema,
  navigationItemSchema,
  takeawayInfoSchema,
  alacarteSectionSchema,
  sushiSectionSchema,
  drinkCategorySchema,
  buffetBenefitSchema,
  buffetGalleryItemSchema,
  reviewSchema,
  type BuffetPricing,
  type ContactDetails,
  type DinnerPackage,
  type HeroContent,
  type MenuCategory,
  type MenuItem,
  type NavigationItem,
  type OpeningHours,
  type TakeawayInfo,
  type AlaCarteSection,
  type SushiSection,
  type DrinkCategory,
  type BuffetBenefit,
  type BuffetGalleryItem,
  type Review,
} from "@/lib/schemas";

const menuCategories = menuCategorySchema
  .array()
  .parse(menuCategoriesData);
const menuItems = menuItemSchema.array().parse(menuItemsData);
const buffetPricing = buffetPricingSchema.parse(buffetData);
const openingHours = hoursSchema.parse(hoursData);
const contactDetails = contactSchema.parse(contactData);
const navItems = navigationItemSchema.array().parse(navigationData);
const heroContent = heroSchema.parse(heroData);
const takeawayInfo = takeawayInfoSchema.parse(takeawayInfoData);
const dinnerPackages = dinnerPackageSchema
  .array()
  .parse(dinnerPackagesData);
const alacarteSections = alacarteSectionSchema
  .array()
  .parse(alacarteSectionsData);
const sushiSections = sushiSectionSchema.array().parse(sushiSectionsData);
const drinkCategories = drinkCategorySchema
  .array()
  .parse(drinkCategoriesData);
const buffetBenefits = buffetBenefitSchema.array().parse(buffetBenefitsData);
const buffetGallery = buffetGalleryItemSchema.array().parse(buffetGalleryData);
const reviews = reviewSchema.array().parse(reviewsData);

export function getMenuCategories(): MenuCategory[] {
  return menuCategories;
}

export function getMenuItems(): MenuItem[] {
  return menuItems;
}

export function getBuffetPricing(): BuffetPricing {
  return buffetPricing;
}

export function getOpeningHours(): OpeningHours {
  return openingHours;
}

export function getContactDetails(): ContactDetails {
  return contactDetails;
}

export function getNavigation(): NavigationItem[] {
  return navItems;
}

export function getHeroContent(): HeroContent {
  return heroContent;
}

export function getTakeawayInfo(): TakeawayInfo {
  return takeawayInfo;
}

export function getDinnerPackages(): DinnerPackage[] {
  return dinnerPackages;
}

export function getMenuItemsByCategory(categoryId: string): MenuItem[] {
  return menuItems.filter((item) => item.categoryId === categoryId);
}

export function getTakeawayMenuItems(): MenuItem[] {
  return menuItems.filter(
    (item) =>
      item.availability.includes("takeaway") && Boolean(item.takeawayPrice)
  );
}

export function getAlaCarteSections(): AlaCarteSection[] {
  return alacarteSections;
}

export function getSushiSections(): SushiSection[] {
  return sushiSections;
}

export function getDrinkCategories(): DrinkCategory[] {
  return drinkCategories;
}

export function getBuffetBenefits(): BuffetBenefit[] {
  return buffetBenefits;
}

export function getBuffetGallery(): BuffetGalleryItem[] {
  return buffetGallery;
}

export function getReviews(): Review[] {
  return reviews;
}
