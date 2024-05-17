Nova.booting((Vue) => {
  Vue.component("seo-media", SeoMedia);

  Vue.component("index-seo-meta", IndexField);
  Vue.component("detail-seo-meta", DetailField);
  Vue.component("form-seo-meta", FormField);
});