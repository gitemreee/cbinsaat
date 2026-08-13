// Blog yazılarının birleşimi ve yardımcı seçiciler.
import { slugify } from "../lib/html.mjs";
import { elektrikPosts } from "./posts-elektrik.mjs";
import { suPosts } from "./posts-su.mjs";
import { yapiPosts } from "./posts-yapi.mjs";
import { dogalgazPosts } from "./posts-dogalgaz.mjs";
import { tadilatPosts } from "./posts-tadilat.mjs";
import { cephePosts } from "./posts-cephe.mjs";
import { incePosts } from "./posts-ince.mjs";
import { bahcePosts } from "./posts-bahce.mjs";
import { yapimPosts } from "./posts-yapim.mjs";
import { hidroforPosts } from "./posts-hidrofor.mjs";
import { kuyuPosts } from "./posts-kuyu.mjs";
import { sulamaPosts } from "./posts-sulama.mjs";
import { tesisatPosts } from "./posts-tesisat.mjs";
import { planPosts } from "./posts-plan.mjs";
import { arizaPosts } from "./posts-ariza.mjs";
import { suKaynagiPosts } from "./posts-su-kaynagi.mjs";
import { sulamaEkPosts } from "./posts-sulama-3.mjs";

const all = [
  ...elektrikPosts, ...suPosts, ...yapiPosts, ...dogalgazPosts, ...tadilatPosts,
  ...yapimPosts, ...cephePosts, ...incePosts, ...bahcePosts,
  ...hidroforPosts, ...kuyuPosts, ...sulamaPosts, ...tesisatPosts, ...planPosts,
  ...arizaPosts, ...suKaynagiPosts, ...sulamaEkPosts,
];

// Yayın tarihine göre yeniden eskiye.
export const posts = all.sort((a, b) => (a.published < b.published ? 1 : -1));

export const getPost = (slug) => posts.find((p) => p.slug === slug);

export const categories = [...new Set(posts.map((p) => p.category))].sort((a, b) =>
  a.localeCompare(b, "tr")
);

export const postsByCategory = (category) => posts.filter((p) => p.category === category);

/** Kategori adı → URL parçası. /blog/kategori/<slug>/ */
export const catSlug = (c) => slugify(c);
export const getCategory = (slug) => categories.find((c) => catSlug(c) === slug);

/** Menü ve kategori indeksi için ad + slug + yazı sayısı. */
export const categoryList = categories
  .map((name) => ({ name, slug: catSlug(name), count: postsByCategory(name).length }))
  .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "tr"));

/** İlgili yazılar: tanımlı olanlar + aynı kategoriden tamamlama. */
export const relatedPosts = (post, count = 3) => {
  const explicit = (post.related || []).map(getPost).filter(Boolean).filter((p) => p.slug !== post.slug);
  if (explicit.length >= count) return explicit.slice(0, count);
  const fill = posts.filter(
    (p) => p.slug !== post.slug && p.category === post.category && !explicit.includes(p)
  );
  const rest = posts.filter((p) => p.slug !== post.slug && !explicit.includes(p) && !fill.includes(p));
  return [...explicit, ...fill, ...rest].slice(0, count);
};

/** Bir hizmetle ilişkilendirilmiş yazılar. */
export const postsForService = (serviceSlug, count = 4) =>
  posts.filter((p) => (p.services || []).includes(serviceSlug)).slice(0, count);

/** Kelime sayısı, BlogPosting şeması için. */
export const wordCount = (post) => {
  const text = [
    post.intro,
    ...(post.body || []).flatMap((b) =>
      b.p ? [b.p] : b.h2 ? [b.h2] : b.ul || b.ol ? b.ul || b.ol : b.quote ? [b.quote] :
      b.table ? [...b.table.head, ...b.table.rows.flat()] : []
    ),
    ...(post.faqs || []).flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
};
