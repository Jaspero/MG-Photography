<script>
  import {goto, stores} from '@sapper/app';
  import Gallery from '../components/Gallery.svelte';
  import {derived} from 'svelte/store';
  import {categories} from '../stores';
  import {onDestroy} from 'svelte';

  // Object containing whole site data, false = not loaded, undefined = not existant
  let site = false;

  const refreshData = derived(
    [stores().page, categories],
    ([page, category]) => {
      if (!page || !category) {
        return false;
      }
      if (page.path === '/' || page.path === '/contact' || page.path === '/videos') return page.path;

      return category.find(it => it.name.toLowerCase() === page.params.slug);
    }
  ).subscribe(siteData => {
    if (siteData) {
      if (typeof siteData === 'string') goto(siteData);
      else {
        site = {name: siteData.name, gallery: [], resolutions: []};

        setTimeout(() => {
          site = siteData;
        }, 10);
      }
    } else if (siteData === undefined) {
      site = undefined;
      goto('404');
    } else if (typeof siteData === 'string') {
      goto(siteData);
    }
  });

  onDestroy(refreshData);
</script>

{#if site}
  <Gallery title="{site.name}" images="{site.gallery}" resolutions="{site.resolutions}" />
{/if}
