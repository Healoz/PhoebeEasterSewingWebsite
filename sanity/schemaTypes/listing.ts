import { defineField, defineType } from "sanity";

export default defineType({
    name: 'listing',
    title: 'Listing',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'shortName',
            title: 'Short Name',
            type: 'string',
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
        defineField({
            name: 'isSold',
            title: 'Is Sold',
            type: 'boolean',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'depopUrl',
            title: 'Depop Url',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        
    ],
    preview: {
        select: { title: 'name', media: 'image', subtitle: 'price', isSold: 'isSold'},
        prepare({ title, media, subtitle, isSold}: {title?: string; media?: any; subtitle?: number; isSold?: boolean}) {
            return { title: isSold ? `[SOLD] ${title}` : title, media, subtitle: subtitle ? `$${subtitle}` : ''}
        }
    }
})