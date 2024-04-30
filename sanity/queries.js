export const modules = `
  _type == 'hero' => {
    ...,

  },
  _type == 'approach' => {
    ...
  },
  _type == 'section' => {
    ...
  },
  _type == 'call_to_action' => {
    ...
  },
  _type == 'breadcrumb' => {
    ...
  },
  _type == 'banner' => {
    ...
  },
  _type == 'campaigns_listing' => {
    ...
  },
  _type == 'blogs' => {
    ...,
    stories[] -> {
      ...,
      mainImage{
        asset->{
          _id,
          url
        }
      },
    }
  },
  _type == 'features' => {
    ...
  },
  _type == 'partners' => {
    ...
  },
  _type == 'portfolio' => {
    ...
  },
  _type == 'testimonies' => {
    ...
  },
  _type == 'tab' => {
    ...
  },
  _type == 'blog_listing' => {
    ...
  },
  _type == 'about' => {
    ...
  },
  _type == 'gallery' => {
    ...
  },

`;

export const siteSettings = `
  path,
  title,
  description,
  keywords,
  mainNav->{
    items[]{
      ...,
      "slug":navigationItemUrl.internalLink->slug.current 
    }
  },
  footerNav->{
    items[]{
      _key,
      _type,
      text,
      "slug":navigationItemUrl.internalLink->slug.current    
    }
  },
  socials[]{...},
  address,
  emails,
  phones,
  copyright,
  footer_note,
  main_logo{asset->{url}},
  alt_logo{asset->{url}},
  mini_logo{asset->{url}},
  contactText,
  contactFormText
`;
