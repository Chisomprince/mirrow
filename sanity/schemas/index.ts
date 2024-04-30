import { authorType } from "./document/author";
import { categoryType } from "./document/category";
import { collectionType } from "./document/collection";
import contactType from "./document/contact-messages";
import navigationType from "./document/navigation";
import { pageType } from "./document/page";
import { postType } from "./document/post";
import { productType } from "./document/product";
import { promotionType } from "./document/promotionType";
import { resuableSectionType } from "./document/reusable-sections";
import { servicesType } from "./document/services";
import { siteSettingsType } from "./document/siteSettings";
import { aboutModule } from "./object/about";
import { actionsModule } from "./object/actions";
import { bannerModule } from "./object/banner";
import { blockContentModule } from "./object/block-content";
import { blogListingModule } from "./object/blog-listing";
import { blogModule } from "./object/blogs";
import { breadcrumbModule } from "./object/breadcrumb";
import { callToActionModule } from "./object/call-to-action";
import { campaignsListingModule } from "./object/campaign-listing";
import { featuresModule } from "./object/features";
import { galleryModule } from "./object/gallery";
import { heroModule } from "./object/hero";
import { linkModule } from "./object/link";
import { navItemModule } from "./object/navItem";
import { productModule } from "./object/product-list";
import { sectionModule } from "./object/section";
import { servicesCardModule } from "./object/services";
import { tabsModule } from "./object/tabs";
import { testimonyModule } from "./object/testimonies";

import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettingsType,
    navigationType,
    pageType,
    resuableSectionType,
    postType,
    categoryType,
    collectionType,
    authorType,
    servicesType,
    promotionType,
    contactType,
    productType,

    // Modules
    productModule,
    actionsModule,
    blockContentModule,
    blogModule,
    callToActionModule,
    featuresModule,
    heroModule,
    linkModule,
    navItemModule,
    servicesCardModule,
    sectionModule,
    breadcrumbModule,
    testimonyModule,
    bannerModule,
    campaignsListingModule,
    tabsModule,
    blogListingModule,
    aboutModule,
    galleryModule,
  ],
};
