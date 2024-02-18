import { Skill } from './src/types/mapper'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: 'data/about.json',
  contentType: 'data',
  fields: {
    description: { type: 'list', of: { type: 'string' }, required: true },
    skills: { type: 'list', of: Skill, required: true },
  },
}))

export default makeSource({
  contentDirPath: 'src/_contents',
  documentTypes: [About],
  //   mdx: {
  //     remarkPlugins: [remarkGfm, remarkUnwrapImages],
  //     rehypePlugins: [rehypePrism],
  //   },
})
