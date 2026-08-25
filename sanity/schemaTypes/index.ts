import { type SchemaTypeDefinition } from 'sanity'
import listing from './listing'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [listing],
}
