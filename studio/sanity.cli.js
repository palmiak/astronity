import {defineCliConfig} from 'sanity/cli'
import sanityConfig from '../sanityConfig'

export default defineCliConfig({
  api: {
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset
  }
})
