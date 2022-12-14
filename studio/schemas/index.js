import navigation from './documents/navigation'
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";
import settings from "./documents/siteSettings";


import navItem from "./objects/navItem";
import link from "./objects/link";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import siteSettings from './documents/siteSettings';

export const schemaTypes = [navigation, navItem, link, author, category, post, mainImage, authorReference, settings];