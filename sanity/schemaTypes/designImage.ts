import { defineField, defineType } from "sanity";

export default defineType({
    name: 'designImage',
    title: 'Design Image',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'altText',
            title: 'Alt Text',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'imageCode',
            title: 'Image Code',
            type: 'string',
            readOnly: ({document}) => {
                return Boolean(document?._id && !document._id.startsWith('drafts.'));
            },
        }),
    ],
    preview: {
        select: { title: 'altText', media: 'image', subtitle: 'imageCode'},
        prepare({ title, media, subtitle}: {title?: string; media?: any; subtitle?: string;}) {
            return { title: title, media, subtitle}
        }
    }
})