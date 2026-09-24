/**
 * AMC Competition Math Module Entry Point & Re-Exports
 * Re-exports metadata, loaders, and chapter solution lookup utilities
 */

export {
  AMC_LEVELS_METADATA,
  ALL_AMC_CHAPTERS_INDEX
} from './amcMetadata.js';

export {
  amcLoaders,
  normalizeAmcLevel,
  getAmcModuleData,
  getLoadedAmcModuleData,
  getAmcChapterSolutionData,
  AMC_CURRICULUM_DATA
} from './amcData.js';
