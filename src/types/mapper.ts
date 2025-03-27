import { defineNestedType } from 'contentlayer/source-files'

// export const Skill = defineNestedType(() => ({
//   name: 'Skill',
//   fields: {
//     name: { type: 'string', required: true },
//     items: { type: 'list', of: { type: 'string' }, required: true },
//   },
// }))

export const Skill = defineNestedType(() => ({
  name: 'Skill',
  fields: {
    name: { type: 'string', required: true },
    image: { type: 'string', required: true},
  }
}))

export const Socials = defineNestedType(() => ({
  name: 'Socials',
  fields: {
    name: { type: 'string', required: true },
    link: { type: 'string', required: true },
  },
}))

export const Works = defineNestedType(() => ({
  name: 'Works',
  fields: {
    company: { type: 'string', required: true },
    image: { type: 'string', required: true },
    role: { type: 'string', required: true },
    start_date: { type: 'string', required: true },
    end_date: { type: 'string', required: true },
    description: { type: 'list', of: { type: 'string' }, required: true },
  },
}))
