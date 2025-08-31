import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const blogType = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "blogCategory",
      type: "array",
      of: [
				{ type: "reference", to: { type: "blogCategory" } }
			],
    }),
		defineField({
			name: "publishedAt",
			type: "datetime",
		}),
		defineField({
			name: "isLatest",
			title: "Latest Blog",
			type: "boolean",
			description: "Toggle to latest on or off",
			initialValue: true,
		}),
		defineField({
			name: "body",
			type: "blockContent",
		}),
  ],
	preview: {
		select: {
			title: "title",
			author: "author.name",
			image: "mainImage",
			isLatest: "isLatest",
		},
		prepare(selection) {
			const {author, isLatest} = selection;
			return {
				...selection,
				subtitle: author && `${isLatest ? "Latest | " : ""} By ${author}`,
			};
		},
	},
});