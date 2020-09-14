import React from 'react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import Tag, { types as typesList } from '../Tag';
import TagSkeleton from '../Tag/Tag.Skeleton';
import { action } from '@storybook/addon-actions/dist/preview';

const props = {
  regular: () => ({
    type: select(
      'Tag type (type)',
      typesList.reduce(
        (acc, type) => ({
          ...acc,
          [`${type} (${type})`]: type,
        }),
        {
          Default: undefined,
        }
      )
    ),
    disabled: boolean('Disabled (disabled)', false),
    title: text('Title (title)', 'Clear Filter'),
  }),
  filter() {
    return {
      ...this.regular(),
      onClick: action('onClick'),
      onClose: action('onClose'),
    };
  },
};

export default {
  title: 'Tag',
  decorators: [withKnobs],

  parameters: {
    component: Tag,

    subcomponents: {
      TagSkeleton,
    },
  },
};

export const _Default = () => (
  <Tag className="some-class" {...props.regular()}>
    {text('Content (children)', 'This is a tag')}
  </Tag>
);

export const Filter = () => (
  <Tag className="some-class" {...props.filter()} filter>
    {text('Content (children)', 'This is a tag')}
  </Tag>
);

export const Skeleton = () => (
  <div>
    <TagSkeleton />
  </div>
);