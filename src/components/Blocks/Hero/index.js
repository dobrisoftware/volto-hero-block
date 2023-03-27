import codeSVG from '@plone/volto/icons/code.svg';
import HeroEdit from './Edit';
import HeroView from './View';
import schema, { stylingSchema } from './schema';

export default (config) => {
  config.blocks.blocksConfig.hero = {
    id: 'hero',
    title: 'Hero',
    icon: codeSVG,
    group: 'common',
    edit: HeroEdit,
    view: HeroView,
    blockHasOwnFocusManagement: true,
    schemaEnhancer: stylingSchema,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    copyrightPrefix: '',
    security: {
      addPermission: [],
      view: [],
    },
    schema,
  };

  config.settings.blocksWithFootnotesSupport = {
    ...(config.settings.blocksWithFootnotesSupport || {}),
    hero: ['text'],
  };

  return config;
};
