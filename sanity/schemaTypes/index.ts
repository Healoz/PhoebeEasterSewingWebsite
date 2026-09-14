import { type SchemaTypeDefinition } from 'sanity'
import listing from './listing'
import drop from './drop'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [listing, drop],
}
