import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  apiVersion: '2025-08-20',
  dataset: 'production',
  projectId: 'pn27feh6',
  useCdn: false,
});

const builder = imageUrlBuilder(client)

export function urlFor(source:string) {
  return builder.image(source);
}