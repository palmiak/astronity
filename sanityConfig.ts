import * as dotenv from 'dotenv';
dotenv.config()

const sanityConfig = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET
}

export default sanityConfig;