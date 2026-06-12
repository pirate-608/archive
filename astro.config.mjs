import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://archive.67656.fun',
  integrations: [
    starlight({
      title: '舞雩台',
      description: '一间保存小说、札记、地图与未完成世界的个人档案馆。',
      customCss: ['./src/styles/starlight.css'],
      components: {
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      lastUpdated: false,
      pagination: true,
      sidebar: [
        {
          label: '档案入口',
          items: [
            { label: '回到首页', link: '/' },
            { label: '馆藏说明', link: '/archive/' },
          ],
        },
        {
          label: '作品',
          items: [
            { label: '乌鸦的游记', link: '/works/crow-travelogue/' },
            { label: '沂水春风', link: '/works/yishui-spring-breeze/' },
            { label: '三国的第二次落幕', link: '/works/three-kingdoms-fall/' },
            { label: '世界是草台班子', link: '/works/cardboard-world/' },
          ],
        },
        {
          label: '札记',
          items: [{ autogenerate: { directory: 'notes' } }],
        },
      ],
    }),
  ],
});
