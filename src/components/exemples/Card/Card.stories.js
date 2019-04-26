import React from 'react';
/** Storybook Import */
import { storiesOf } from '@storybook/react';
import {
  array, boolean, color, number, object, text,
} from '@storybook/addon-knobs';

/** Components Import */
// import {
//   breakpoints, colWidths, items, priorities,
// } from 'config/storybook/mocks';
import { CardWrapper } from 'config/storybook/wrappers';
import Card from './index';
import readme from './README.md';

const ProspectData = {
  id: 'prospect id',
  company: 'Super Pro',
  name: 'Jacques',
  from: 'Finkey',
  type: 'Start up',
  amount: 250000,
  tel: '+33 7 77 77 77',
  email: 'finkey@finkey.fr',
  data: '15/12/2018',
  ca: 10000000,
  tags: ['Levée de fonds', 'Hight Tech', 'Mobilité', 'B to B'],
  description:
    "Lorem ipsum dolor amet typewriter vinyl vexillologist, ennui selfies butcher next level pop-up neutra tumblr venmo yuccie helvetica. Kickstarter 3 wolf moon ethical disrupt, letterpress waistcoat 90's before they sold out migas fanny pack bespoke vinyl hell of. Farm-to-table photo booth squid, 3 wolf moon jean shorts ramps church-key pour-over. Fanny pack biodiesel lomo shaman, post-ironic glossier you probably haven't heard of them mixtape truffaut kickstarter tote bag chia knausgaard normcore brooklyn. Hot chicken yuccie salvia tousled PBR&B. Copper mug four dollar toast pop-up marfa church-key chia palo santo enamel pin. Whatever next level etsy, disrupt mixtape VHS mumblecore normcore keytar cronut air plant.",
  contexte:
    'Waistcoat humblebrag pork belly, cornhole knausgaard irony cold-pressed kombucha locavore tbh typewriter. Flexitarian swag tilde narwhal jianbing. Four loko gluten-free occupy art party. Poutine cloud bread fashion axe, authentic pabst next level post-ironic hoodie.',
  adress: '12, place Gabriel péri - 69007 Lyon',
  creation: '17/07/2017',
  financingState: 'Disponible',
};

const CradWrapper = ({ children }) => <div />;

/** Stories */
storiesOf('Exemple Components|Card', module)
  /** Decorators */
  .addDecorator(story => (
    <CardWrapper width={text('-- card width --', '400px')}>{story()}</CardWrapper>
  ))
  .addParameters({
    info: {
      propTablesExclude: [CardWrapper],
    },
  })

  /** Stories */
  .add('- Prospects', () => <Card data={object('data', ProspectData)} />, {
    notes: { markdown: readme },
  });
