import buffetData from "@/content/pricing/buffet.json";
import menuCategoriesData from "@/content/menu/categories.json";
import menuItemsData from "@/content/menu/items.json";
import dinnerPackagesData from "@/content/dinner/packages.json";
import alacarteSectionsData from "@/content/alacarte/sections.json";
import sushiSectionsData from "@/content/sushi/sections.json";
import drinkCategoriesData from "@/content/drinks/categories.json";
import buffetBenefitsData from "@/content/buffet/benefits.json";
import buffetGalleryData from "@/content/buffet/gallery.json";
import reviewsData from "@/content/reviews.json";
import {
  alacarteSectionSchema,
  buffetBenefitSchema,
  buffetGalleryItemSchema,
  buffetPricingSchema,
  dinnerPackageSchema,
  drinkCategorySchema,
  menuCategorySchema,
  menuItemSchema,
  reviewSchema,
  sushiSectionSchema,
} from "@/domain/content/schemas";
import type {
  AlaCarteSection,
  BuffetBenefit,
  BuffetGalleryItem,
  BuffetPricing,
  DinnerPackage,
  DrinkCategory,
  MenuCategory,
  MenuItem,
  Review,
  SushiSection,
} from "@/domain/content/types";

const menuCategories = menuCategorySchema
  .array()
  .parse(menuCategoriesData)
  .sort((a, b) => a.displayOrder - b.displayOrder);
const menuItems = menuItemSchema.array().parse(menuItemsData);
const buffetPricing = buffetPricingSchema.parse(buffetData);
const dinnerPackages = dinnerPackageSchema.array().parse(dinnerPackagesData);
const alacarteSections = alacarteSectionSchema
  .array()
  .parse(alacarteSectionsData);
const sushiSections = sushiSectionSchema.array().parse(sushiSectionsData);
const drinkCategories = drinkCategorySchema.array().parse(drinkCategoriesData);
const buffetBenefits = buffetBenefitSchema.array().parse(buffetBenefitsData);
const buffetGallery = buffetGalleryItemSchema.array().parse(buffetGalleryData);
const reviews = reviewSchema.array().parse(reviewsData);

export function listMenuCategories(): MenuCategory[] {
  return menuCategories;
}

export function listMenuItems(): MenuItem[] {
  return menuItems;
}

export function listMenuItemsByCategory(categoryId: string): MenuItem[] {
  return menuItems.filter((item) => item.categoryId === categoryId);
}

export function getBuffetPricing(): BuffetPricing {
  return buffetPricing;
}

export function listDinnerPackages(): DinnerPackage[] {
  return dinnerPackages;
}

export function listAlaCarteSections(): AlaCarteSection[] {
  return alacarteSections;
}

export function listSushiSections(): SushiSection[] {
  return sushiSections;
}

export function listDrinkCategories(): DrinkCategory[] {
  return drinkCategories;
}

export function listBuffetBenefits(): BuffetBenefit[] {
  return buffetBenefits;
}

export function listBuffetGallery(): BuffetGalleryItem[] {
  return buffetGallery;
}

export function listReviews(): Review[] {
  return reviews;
}
