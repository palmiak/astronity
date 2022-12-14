import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {markdownSchema} from "sanity-plugin-markdown";
import {adminStructure} from './deskStructure';
import sanityConfig from '../sanityConfig';

export default defineConfig({
  name: 'default',
  title: 'Sanity Astro',

  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,

  plugins: [
    deskTool({
      structure: adminStructure
    }), 
    visionTool(), 
    markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
