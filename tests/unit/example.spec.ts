import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import IconCard from '@/components/IconCard.vue';

describe('IconCard.vue', () => {
  it('renders props.headline when passed', () => {
    const headline = 'new message';
    const wrapper = shallowMount(IconCard, {
      propsData: { headline },
    });
    expect(wrapper.text()).to.include(headline);
  });
});
