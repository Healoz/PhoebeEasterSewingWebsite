import { type SchemaTypeDefinition } from 'sanity'
import listing from './listing'
import drop from './drop'
import designImage from './designImage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [listing, drop, designImage],
}
