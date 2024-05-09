import { Skill, Works } from './src/types/mapper'
import {
  type ComputedFields,
  defineDocumentType,
  LocalDocument,
  makeSource,
} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypePrism from 'rehype-prism-plus'
// import { generateBase64Image } from './src/lib/server/utils'

const computedFields: ComputedFields = {
  thumbnailPlaceholder: {
    type: 'string',
    // resolve: (doc: LocalDocument) => generateBase64Image(doc.thumbnail),
    resolve(_) {
      return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    },
  },
}

const About = defineDocumentType(() => ({
  name: 'About',
  filePathPattern: 'data/about.json',
  contentType: 'data',
  fields: {
    description: { type: 'list', of: { type: 'string' }, required: true },
    skills: { type: 'list', of: Skill, required: true },
  },
}))

const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: 'data/work.json',
  contentType: 'data',
  fields: {
    works: { type: 'list', of: Works, required: true },
    
  },
}))

const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `project/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    description: { type: 'string', required: true },
    github: { type: 'string' },
    demo: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    position: {
      type: 'number',
      resolve: (doc) =>
        Number(
          doc._raw.sourceFileName
            .replace(/\.mdx/, '')
            .split('-')
            .slice(0, 1)
            .toString(),
        ),
    },
    slug: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.sourceFileName
          .replace(/\.mdx/, '')
          .split('-')
          .slice(1)
          .join('-'),
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/_contents',
  documentTypes: [About, Project, Work],
  mdx: {
    remarkPlugins: [remarkGfm, remarkUnwrapImages],
    rehypePlugins: [rehypePrism],
  },
})
