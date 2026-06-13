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
            {
              label: '乌鸦的游记',
              items: [
                { label: '简介', link: '/works/legend-of-vashain/' },
                {
                  label: '世界观与设定',
                  items: [
                    { label: '民族', link: '/works/legend-of-vashain/settings/nation/' },
                    { label: '地理', link: '/works/legend-of-vashain/settings/geography/' },
                    { label: '国家', link: '/works/legend-of-vashain/settings/countries/' },
                    { label: '人物', link: '/works/legend-of-vashain/settings/characters/' },
                    { label: '宗教', link: '/works/legend-of-vashain/settings/religion/' },
                    { label: '其他', link: '/works/legend-of-vashain/settings/miscellany/' },
                  ],
                },
                {
                  label: '第一卷 日落岛',
                  items: [
                    { label: '第一章 铁匠之子', link: '/works/legend-of-vashain/volume-one-sunset-isle/chapter-1-blacksmiths-son/' },
                    { label: '第二章 手套帮', link: '/works/legend-of-vashain/volume-one-sunset-isle/chapter-2-glove-gang/' },
                    { label: '第三章 卡姆登镇的以撒人', link: '/works/legend-of-vashain/volume-one-sunset-isle/chapter-3-isaacites-of-camden/' },
                    { label: '第四章 王河城', link: '/works/legend-of-vashain/volume-one-sunset-isle/chapter-4-riverking-city/' },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: '札记',
          items: [
            { label: '把个人主页做成一间安静的档案馆', link: '/notes/making-an-archive/' },
            { label: '沂水春风', link: '/notes/yishui-spring-breeze/' },
            { label: '三国的第二次落幕', link: '/notes/three-kingdoms-fall/' },
            { label: '世界是草台班子', link: '/notes/cardboard-world/' },
          ],
        },
      ],
    }),
  ],
});
