import { defineField, defineType } from "sanity";

export default defineType({
    name: 'drop',
    title: 'Drop',
    type: 'document',
    fields: [
        defineField({
            name: 'isActive',
            title: 'Is Active',
            type: 'boolean',
            initialValue: false,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'listingIds',
            title: 'Listings',
            type: 'array',
            of : [
                {
                    type: 'reference',
                    to: [{ type: 'listing'}],
                },
            ],
            validation: (Rule) => Rule.required(),
        })
    ],
    preview: {
        select: { isActive: 'isActive', listings: 'listingIds',},
        prepare({ isActive, listings }: { isActive?: boolean; listings?: unknown[]}) {
        const count = listings?.length ?? 0
        return {
            title: isActive ? 'Active Drop' : 'Inactive Drop',
            subtitle: `${count} listing${count === 1 ? '' : 's'}`
        }
    }
    },
})