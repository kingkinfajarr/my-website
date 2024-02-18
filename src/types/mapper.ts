import { defineNestedType } from 'contentlayer/source-files'

export const Skill = defineNestedType(() => ({
  name: 'Skill',
  fields: {
    name: { type: 'string', required: true },
    items: { type: 'list', of: { type: 'string' }, required: true },
  },
}))
