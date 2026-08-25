import { defineField, defineType } from "sanity";

export default defineType({
    name: 'listing',
    title: 'Listing',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.required().positive(),
        }),
    ],
    preview: {
        select: { title: 'title', media: 'image', subtitle: 'price'},
        prepare({ title, media, subtitle}: {title?: string; media?: any; subtitle?: number}) {
            return { title, media, subtitle: subtitle ? `$${subtitle}` : ''}
        }
    }
})