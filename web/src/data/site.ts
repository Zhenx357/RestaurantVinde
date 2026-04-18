import contactData from "@/content/site/contact.json";
import heroData from "@/content/site/hero.json";
import hoursData from "@/content/site/hours.json";
import navigationData from "@/content/site/navigation.json";
import takeawayInfoData from "@/content/takeaway/info.json";
import {
  contactSchema,
  heroSchema,
  hoursSchema,
  navigationItemSchema,
  takeawayInfoSchema,
} from "@/domain/content/schemas";
import type {
  ContactDetails,
  HeroContent,
  NavigationItem,
  OpeningHours,
  TakeawayInfo,
} from "@/domain/content/types";

const contact = contactSchema.parse(contactData);
const hero = heroSchema.parse(heroData);
const hours = hoursSchema.parse(hoursData);
const navigation = navigationItemSchema.array().parse(navigationData);
const takeawayInfo = takeawayInfoSchema.parse(takeawayInfoData);

export function getContactDetails(): ContactDetails {
  return contact;
}

export function getHeroContent(): HeroContent {
  return hero;
}

export function getOpeningHours(): OpeningHours {
  return hours;
}

export function getNavigation(): NavigationItem[] {
  return navigation;
}

export function getTakeawayInfo(): TakeawayInfo {
  return takeawayInfo;
}
