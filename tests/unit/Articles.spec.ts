import Vue from 'vue';
import Buefy from 'buefy';

import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Articles from '@/components/Articles.vue';

Vue.use(Buefy);

describe('Articles.vue', () => {
  it('renders props.headline when passed', () => {
    const wrapper = shallowMount(Articles, {});

    // expect(wrapper.text()).to.include('¯_(ツ)_/¯');
    expect(wrapper.find('.title').text()).to.include('¯\\_(ツ)_/¯');
  });
});
